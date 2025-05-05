"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, Layers, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
    submitted: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState)
    setFormState({ ...formState, submitted: true })

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "General Inquiry",
        message: "",
        submitted: false,
      })
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleRadioChange = (value) => {
    setFormState({ ...formState, subject: value })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-cyan-500 rounded-md blur-[10px] opacity-50"></div>
              <div className="relative bg-slate-950 rounded-md flex items-center justify-center h-full border border-cyan-500/50">
                <Layers className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              TechSync99
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-4">
                Get in Touch
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Contact TechSync99
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                Have a question or ready to start your next project? Reach out to our team today.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-slate-400 mb-6">
                    Our team is ready to assist you. Feel free to reach out through any of the following channels.
                  </p>
                  <div className="space-y-4">
                    <Card className="bg-slate-900 border-slate-800">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Phone</h3>
                          <p className="text-slate-400 text-sm">+1 (555) 123-4567</p>
                          <p className="text-slate-400 text-sm">Monday - Friday, 9am - 6pm PST</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-900 border-slate-800">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full">
                          <Mail className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Email</h3>
                          <p className="text-slate-400 text-sm">info@techsync99.com</p>
                          <p className="text-slate-400 text-sm">support@techsync99.com</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-slate-900 border-slate-800">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Office</h3>
                          <p className="text-slate-400 text-sm">123 Tech Avenue</p>
                          <p className="text-slate-400 text-sm">San Francisco, CA 94107</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-white"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-white"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-white"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-white"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Send Us a Message</h2>
                    <p className="text-slate-400 mb-6">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    {formState.submitted ? (
                      <div className="bg-cyan-500/10 p-4 rounded-lg flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-400" />
                        <p className="text-cyan-400">Thank you for your message! We'll be in touch soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                              value={formState.name}
                              onChange={handleChange}
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email"
                              required
                              value={formState.email}
                              onChange={handleChange}
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Phone (Optional)
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Your phone number"
                              value={formState.phone}
                              onChange={handleChange}
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-white">
                              Company (Optional)
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your company"
                              value={formState.company}
                              onChange={handleChange}
                              className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-white">What can we help you with?</Label>
                          <RadioGroup
                            defaultValue="General Inquiry"
                            value={formState.subject}
                            onValueChange={handleRadioChange}
                            className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="General Inquiry"
                                id="general"
                                className="border-cyan-400 text-cyan-400"
                              />
                              <Label htmlFor="general" className="text-slate-300">
                                General Inquiry
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="Project Quote"
                                id="quote"
                                className="border-cyan-400 text-cyan-400"
                              />
                              <Label htmlFor="quote" className="text-slate-300">
                                Project Quote
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="Partnership"
                                id="partnership"
                                className="border-cyan-400 text-cyan-400"
                              />
                              <Label htmlFor="partnership" className="text-slate-300">
                                Partnership
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Support" id="support" className="border-cyan-400 text-cyan-400" />
                              <Label htmlFor="support" className="text-slate-300">
                                Support
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-white">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className="min-h-[120px] bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                        >
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-slate-400">
                  Find answers to common questions about our services and processes.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-12 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What services does TechSync99 offer?</h3>
                  <p className="text-slate-400">
                    We offer a comprehensive range of technology services including custom software development,
                    enterprise solutions, digital transformation, cloud solutions, IT consulting, and data analytics.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">How long does a typical project take?</h3>
                  <p className="text-slate-400">
                    Project timelines vary based on scope and complexity. Small projects may take 4-8 weeks, while
                    larger enterprise solutions can take 3-6 months or more. We'll provide a detailed timeline during
                    our initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Do you offer ongoing support after project completion?
                  </h3>
                  <p className="text-slate-400">
                    Yes, we offer various support and maintenance packages to ensure your solution continues to perform
                    optimally. Our team can provide regular updates, bug fixes, and feature enhancements as needed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What industries do you specialize in?</h3>
                  <p className="text-slate-400">
                    We have experience across multiple industries including finance, healthcare, retail, manufacturing,
                    and professional services. Our team brings domain expertise to each project we undertake.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-slate-800 py-12 bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-cyan-500 rounded-md blur-[10px] opacity-50"></div>
                  <div className="relative bg-slate-950 rounded-md flex items-center justify-center h-full border border-cyan-500/50">
                    <Layers className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  TechSync99
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services/software-development" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="/services/enterprise-solutions" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a href="/services/digital-transformation" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="/services/it-consulting" className="text-slate-400 hover:text-cyan-400 text-sm">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/cloud-solutions" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="/services/data-analytics" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Data Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-slate-400 hover:text-cyan-400 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>info@techsync99.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span>123 Tech Avenue, San Francisco, CA 94107</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2023 TechSync99. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-cyan-400 text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-slate-400 hover:text-cyan-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
