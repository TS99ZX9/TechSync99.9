// Color system
export const COLORS = {
  // Main brand colors
  primary: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#e63946", // Primary brand red - slightly adjusted for better contrast
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  // Secondary colors
  secondary: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4", // Cyan for accents
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  // Accent colors
  accent: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6", // Purple for special highlights
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  // Background & text colors
  gray: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
}

// Animation timing
export const ANIMATION = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.8,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
}

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    sans: "Inter, system-ui, sans-serif",
    heading: "Poppins, Inter, system-ui, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
}

// Common page sections for consistent structure
export const PAGE_SECTIONS = {
  header: {
    paddingY: "py-16 md:py-24 lg:py-32",
    bgClasses: "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950",
  },
  alternating: [
    {
      paddingY: "py-16 md:py-24 lg:py-32",
      bgClasses: "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950",
    },
    {
      paddingY: "py-16 md:py-24",
      bgClasses: "bg-gray-900/50",
    },
  ],
  cta: {
    paddingY: "py-16 md:py-24 lg:py-32",
    bgClasses: "bg-gradient-to-br from-gray-900 to-gray-950",
  },
}

// Common stylistic elements
export const ELEMENTS = {
  badges: {
    primary:
      "inline-block px-3 py-1 text-xs font-medium text-primary-500 bg-primary-500/10 rounded-full border border-primary-500/20",
    secondary:
      "inline-block px-3 py-1 text-xs font-medium text-secondary-500 bg-secondary-500/10 rounded-full border border-secondary-500/20",
    accent:
      "inline-block px-3 py-1 text-xs font-medium text-accent-500 bg-accent-500/10 rounded-full border border-accent-500/20",
  },
  cards: {
    base: "bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300",
    hover: "hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1",
    highlight: "border-primary-500/30 shadow-lg shadow-primary-500/10",
  },
}

// Website metadata
export const METADATA = {
  title: "TechSync99 - Next-Generation Technology Solutions",
  description:
    "TechSync99 delivers cutting-edge software development, enterprise solutions, and digital transformation services to help your business thrive in the digital age.",
  companyName: "TechSync99",
  companyLogo: "/logo.svg",
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@techsync99.com",
    address: "123 Tech Avenue, San Francisco, CA 94107",
  },
  social: {
    twitter: "https://twitter.com/techsync99",
    facebook: "https://facebook.com/techsync99",
    linkedin: "https://linkedin.com/company/techsync99",
    github: "https://github.com/techsync99",
  },
}

// Navigation structure
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Software Development", href: "/services/software-development" },
        { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "DataFlow", href: "/products#dataflow" },
        { name: "SecureCloud", href: "/products#securecloud" },
        { name: "AnalytiX", href: "/products#analytix" },
      ],
    },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Business Plan", href: "/business-plan" },
    { name: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Services",
      links: [
        { name: "Software Development", href: "/services/software-development" },
        { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "IT Consulting", href: "/services/it-consulting" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Case Studies", href: "/projects" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "DataFlow", href: "/products#dataflow" },
        { name: "SecureCloud", href: "/products#securecloud" },
        { name: "AnalytiX", href: "/products#analytix" },
        { name: "API Documentation", href: "/docs/api" },
        { name: "Support Center", href: "/support" },
        { name: "System Status", href: "/status" },
      ],
    },
  ],
}
