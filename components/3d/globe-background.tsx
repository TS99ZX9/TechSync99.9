"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

// Generate sphere points
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    points[i3] = x
    points[i3 + 1] = y
    points[i3 + 2] = z
  }

  return points
}

// Generate network connections
function generateConnections(points: Float32Array, maxDistance: number, maxConnections: number) {
  const connections = []
  const pointCount = points.length / 3

  for (let i = 0; i < pointCount; i++) {
    const connections_count = Math.floor(Math.random() * maxConnections)

    for (let j = 0; j < connections_count; j++) {
      const targetIndex = Math.floor(Math.random() * pointCount)
      if (targetIndex === i) continue

      const x1 = points[i * 3]
      const y1 = points[i * 3 + 1]
      const z1 = points[i * 3 + 2]

      const x2 = points[targetIndex * 3]
      const y2 = points[targetIndex * 3 + 1]
      const z2 = points[targetIndex * 3 + 2]

      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2)

      if (distance < maxDistance) {
        connections.push([new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)])
      }
    }
  }

  return connections
}

function GlobePoints({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const { size } = useThree()

  const [sphere, connections] = useMemo(() => {
    const radius = Math.min(size.width, size.height) * 0.0008
    const points = generateSpherePoints(800, radius)
    const conns = generateConnections(points, radius * 0.3, 3)
    return [points, conns]
  }, [size])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
    }
  })

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? "#ef4444" : "#dc2626"}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Network connections */}
      {connections.map((connection, index) => (
        <NetworkLine
          key={index}
          start={connection[0]}
          end={connection[1]}
          color={isDark ? "#ef4444" : "#dc2626"}
          opacity={0.3}
        />
      ))}
    </group>
  )
}

function NetworkLine({
  start,
  end,
  color,
  opacity,
}: {
  start: THREE.Vector3
  end: THREE.Vector3
  color: string
  opacity: number
}) {
  const ref = useRef<THREE.Line>(null)

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array([start.x, start.y, start.z, end.x, end.y, end.z])
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [start, end])

  useFrame((state) => {
    if (ref.current) {
      const material = ref.current.material as THREE.LineBasicMaterial
      material.opacity = opacity + Math.sin(state.clock.elapsedTime * 2 + start.x) * 0.2
    }
  })

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  )
}

function BackgroundGrid({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  const gridColor = isDark ? "#ef4444" : "#dc2626"

  return (
    <group ref={ref}>
      <gridHelper args={[20, 20, gridColor, gridColor]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]} />
      <gridHelper args={[20, 20, gridColor, gridColor]} rotation={[0, 0, Math.PI / 2]} position={[-5, 0, 0]} />
      <gridHelper args={[20, 20, gridColor, gridColor]} rotation={[0, Math.PI / 2, 0]} position={[0, -5, 0]} />
    </group>
  )
}

function Scene() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <BackgroundGrid isDark={isDark} />
      <GlobePoints isDark={isDark} />
    </>
  )
}

export function GlobeBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 opacity-20 dark:opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  )
}
