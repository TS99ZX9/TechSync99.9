import { ArrowRight, CheckCircle, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function BusinessPlanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TechNova Business Plan</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="/business-plan" className="text-sm font-medium text-primary">
              Business Plan
            </Link>
          </nav>
          <Button>Download PDF</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">TechNova Business Plan</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  A comprehensive roadmap for establishing and growing our technology company
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="executive-summary" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList>
                  <TabsTrigger value="executive-summary">Executive Summary</TabsTrigger>
                  <TabsTrigger value="company-overview">Company Overview</TabsTrigger>
                  <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing Strategy</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="executive-summary" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Executive Summary</CardTitle>
                    <CardDescription>A high-level overview of TechNova and our business objectives</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Company Mission</h3>
                      <p>
                        TechNova aims to empower businesses through innovative technology solutions that drive growth,
                        efficiency, and competitive advantage. We bridge the gap between complex technology and
                        real-world business needs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Business Concept</h3>
                      <p>
                        TechNova will provide comprehensive technology services including custom software development,
                        enterprise solutions, digital transformation consulting, and managed IT services. We will focus
                        on delivering high-quality, scalable solutions tailored to each client's specific requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Target Market</h3>
                      <p>
                        Our primary target markets include mid-sized to large enterprises in the financial services,
                        healthcare, manufacturing, and retail sectors. These industries have complex operational needs
                        and can benefit significantly from our technology expertise.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Competitive Advantage</h3>
                      <p>TechNova will differentiate itself through:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Industry-specific expertise and solutions</li>
                        <li>Agile development methodology for faster time-to-market</li>
                        <li>Strong focus on post-implementation support and maintenance</li>
                        <li>Strategic partnerships with leading technology providers</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Financial Summary</h3>
                      <p>
                        TechNova projects to reach $1.2M in revenue by the end of year one, with a growth rate of 40%
                        year-over-year for the first three years. Initial startup costs are estimated at $250,000, with
                        profitability expected by month 18.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Funding Requirements</h3>
                      <p>
                        TechNova seeks an initial investment of $500,000 to cover startup costs, including office setup,
                        equipment, initial staffing, and marketing. This funding will support operations until the
                        company reaches positive cash flow.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="company-overview" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Overview</CardTitle>
                    <CardDescription>
                      Detailed information about TechNova's structure, leadership, and vision
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Company Structure</h3>
                      <p>
                        TechNova will be established as a Limited Liability Company (LLC), providing flexibility for
                        growth while limiting personal liability. The company will be headquartered in [City, State]
                        with plans for satellite offices in key markets as we expand.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Leadership Team</h3>
                      <div className="space-y-3 mt-3">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">CEO/Founder</h4>
                          <p className="text-sm text-muted-foreground">
                            [Your Name] - 15+ years of experience in technology leadership and business development.
                            Previously led technology initiatives at [Previous Company].
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Chief Technology Officer</h4>
                          <p className="text-sm text-muted-foreground">
                            To be hired - Looking for a seasoned technology leader with enterprise software experience
                            and a track record of successful project delivery.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Chief Operations Officer</h4>
                          <p className="text-sm text-muted-foreground">
                            To be hired - Seeking an operations expert with experience scaling technology service
                            businesses.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Company Vision</h3>
                      <p>
                        Our vision is to become a leading technology partner for businesses undergoing digital
                        transformation. Within five years, we aim to establish TechNova as a recognized name in
                        enterprise technology solutions with a reputation for excellence, innovation, and client
                        satisfaction.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Core Values</h3>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>
                          <span className="font-medium">Innovation:</span> Continuously exploring new technologies and
                          approaches
                        </li>
                        <li>
                          <span className="font-medium">Excellence:</span> Delivering the highest quality in everything
                          we do
                        </li>
                        <li>
                          <span className="font-medium">Integrity:</span> Maintaining honesty and transparency in all
                          client relationships
                        </li>
                        <li>
                          <span className="font-medium">Collaboration:</span> Working closely with clients as true
                          partners
                        </li>
                        <li>
                          <span className="font-medium">Adaptability:</span> Embracing change and evolving with the
                          technology landscape
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Milestones</h3>
                      <div className="space-y-3 mt-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Q1 Year 1</h4>
                            <p className="text-sm text-muted-foreground">
                              Company formation, initial team hiring, and office setup
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Q2 Year 1</h4>
                            <p className="text-sm text-muted-foreground">
                              Launch of marketing campaign and acquisition of first 3-5 clients
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Q4 Year 1</h4>
                            <p className="text-sm text-muted-foreground">
                              Expansion of service offerings and team growth to 15 employees
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Q2 Year 2</h4>
                            <p className="text-sm text-muted-foreground">
                              Establishment of strategic partnerships with technology vendors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="market-analysis" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Analysis</CardTitle>
                    <CardDescription>
                      Analysis of the technology services market, target customers, and competition
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Industry Overview</h3>
                      <p>
                        The global IT services market is projected to grow at a CAGR of 8.1% from 2023 to 2028, reaching
                        $1.2 trillion by 2028. This growth is driven by digital transformation initiatives, cloud
                        adoption, and increasing demand for cybersecurity solutions across industries.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Target Market Segments</h3>
                      <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Financial Services</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Banks, insurance companies, and fintech firms seeking secure, compliant technology solutions
                            for transaction processing, customer management, and regulatory reporting.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Healthcare</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Hospitals, clinics, and healthcare providers requiring patient management systems,
                            telemedicine platforms, and data analytics solutions.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Manufacturing</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Manufacturing companies looking to implement supply chain management, inventory control, and
                            production optimization systems.
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Retail</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Retailers seeking e-commerce platforms, inventory management, and customer relationship
                            management solutions to enhance their digital presence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
                      <p className="mb-3">
                        The technology services market includes various competitors ranging from large global consulting
                        firms to specialized boutique agencies. Our analysis identifies the following key competitor
                        types:
                      </p>
                      <div className="space-y-3">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Global IT Consulting Firms</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            <span className="font-medium">Strengths:</span> Extensive resources, global reach,
                            comprehensive service offerings
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Weaknesses:</span> Higher costs, less agility, potential for
                            less personalized service
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Regional Technology Providers</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            <span className="font-medium">Strengths:</span> Local market knowledge, established client
                            relationships
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Weaknesses:</span> Limited service scope, potential technology
                            limitations
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium">Specialized Boutique Agencies</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            <span className="font-medium">Strengths:</span> Deep expertise in specific domains, highly
                            customized solutions
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Weaknesses:</span> Limited capacity for large-scale projects,
                            narrower service offerings
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Increasing adoption of cloud-based solutions across industries</li>
                        <li>Growing demand for AI and machine learning integration in business applications</li>
                        <li>Rising importance of cybersecurity in technology implementations</li>
                        <li>Shift towards mobile-first application development</li>
                        <li>Emergence of low-code/no-code development platforms</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Additional tabs would be implemented similarly */}
              <TabsContent value="services" className="mt-0">
                {/* Services content */}
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                {/* Marketing strategy content */}
              </TabsContent>

              <TabsContent value="operations" className="mt-0">
                {/* Operations content */}
              </TabsContent>

              <TabsContent value="financials" className="mt-0">
                {/* Financial projections content */}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Launch Your Tech Company?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  This business plan template provides a foundation for your technology venture. Customize it to fit
                  your specific vision and goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Download Full Business Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">TechNova Business Plan</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 TechNova. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
