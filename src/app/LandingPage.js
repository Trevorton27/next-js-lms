import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Shield, BarChart3, ArrowRight, Star, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">StreamLine</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
        <div className="ml-6 flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Start Free Trial</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    🚀 New: AI-Powered Automation
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow,
                    <span className="text-blue-600"> Amplify Your Success</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Transform your business processes with our intelligent automation platform. Save time, reduce
                    errors, and focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12 px-8">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="StreamLine Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Features</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to succeed</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Powerful features designed to streamline your workflow and boost productivity
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Smart Automation</CardTitle>
                  </div>
                  <CardDescription>
                    AI-powered workflows that learn from your patterns and automate repetitive tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Intelligent task routing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Custom workflow builder</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Real-time notifications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Enterprise Security</CardTitle>
                  </div>
                  <CardDescription>
                    Bank-grade security with advanced encryption and compliance standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>SOC 2 Type II certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>GDPR compliant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Advanced Analytics</CardTitle>
                  </div>
                  <CardDescription>
                    Deep insights into your processes with customizable dashboards and reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Real-time dashboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Performance metrics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Loved by teams worldwide</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our customers have to say about StreamLine
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold">
                    "StreamLine has transformed how we handle our daily operations. We've reduced manual work by 80% and
                    our team is more productive than ever."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      alt="Sarah Johnson"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">CEO, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold">
                    "The automation features are incredible. What used to take hours now happens automatically. Our ROI
                    was positive within the first month."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      alt="Michael Chen"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <div className="font-semibold">Michael Chen</div>
                      <div className="text-sm text-gray-500">Operations Director, StartupXYZ</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg font-semibold">
                    "StreamLine's analytics give us insights we never had before. We can now make data-driven decisions
                    that actually move the needle."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      alt="Emily Rodriguez"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-500">VP of Marketing, GrowthCo</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Pricing</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose your plan</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start free and scale as you grow. No hidden fees, cancel anytime.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small teams getting started</CardDescription>
                  <div className="text-4xl font-bold">
                    $0<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Up to 5 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Basic automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>1GB storage</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-blue-200 relative">
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600">Most Popular</Badge>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>For growing teams that need more power</CardDescription>
                  <div className="text-4xl font-bold">
                    $29<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Up to 25 team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Advanced automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>50GB storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations with custom needs</CardDescription>
                  <div className="text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Enterprise automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Unlimited storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Custom development</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to streamline your workflow?
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of teams already using StreamLine to boost their productivity and automate their
                  processes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-blue-100">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50"
      >
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Streamline your workflow and amplify your success with our intelligent automation platform.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-gray-900">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
