import Link from "next/link"
import { ArrowRight, Bot, BarChart3, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/scaleup-logo.png" alt="ScaleUp AI Logo" className="h-[135px]" />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#pricing" className="text-gray-600 hover:text-primary-500 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary-500 transition-colors">
            Testimonials
          </Link>
          <a
            href="https://calendly.com/wescaleupai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-500 hover:bg-primary-600 text-white rounded-md px-4 py-2 inline-flex items-center"
          >
            Get Started
          </a>
        </nav>
        <Button variant="ghost" className="md:hidden">
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
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Scale Your Business with Intelligent AI Automation
            </h1>
            <p className="text-xl text-gray-600">
              Streamline operations, boost productivity, and drive growth with our cutting-edge AI solutions tailored
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/wescaleupai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white rounded-md px-8 py-6 text-lg inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://calendly.com/wescaleupai"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-500 text-primary-500 hover:bg-primary-50 rounded-md px-8 py-6 text-lg inline-flex items-center"
              >
                Book a Demo
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-primary-500">300+</span> businesses already scaling with our AI
                solutions
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-100 rounded-full blur-3xl opacity-70"></div>
            <img
              src="/images/new-hero-image.png"
              alt="AI Automation Platform"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features to Transform Your Business</h2>
          <p className="text-xl text-gray-600">
            Our comprehensive suite of AI tools helps you automate workflows, gain insights, and scale operations
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-primary-500" />}
            title="Intelligent Automation"
            description="Automate repetitive tasks and workflows with our AI-powered solutions, saving time and reducing errors."
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-primary-500" />}
            title="Predictive Analytics"
            description="Leverage advanced analytics to forecast trends, identify opportunities, and make data-driven decisions."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-primary-500" />}
            title="Customer Insights"
            description="Understand your customers better with AI-powered sentiment analysis and behavior prediction."
          />
          <FeatureCard
            icon={<Bot className="h-10 w-10 text-primary-500" />}
            title="Conversational AI"
            description="Implement intelligent chatbots and virtual assistants to enhance customer service and engagement."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-primary-500" />}
            title="Process Optimization"
            description="Identify bottlenecks and optimize business processes for maximum efficiency and productivity."
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-primary-500" />}
            title="Scalable Solutions"
            description="Our AI solutions grow with your business, ensuring long-term success and adaptability."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How ScaleUp AI Works</h2>
            <p className="text-xl text-gray-600">
              Our streamlined process makes implementing AI solutions simple and effective for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We analyze your business needs and identify opportunities for AI implementation.",
              },
              {
                step: "2",
                title: "Implementation",
                description: "Our experts integrate custom AI solutions seamlessly into your existing workflows.",
              },
              {
                step: "3",
                title: "Optimization",
                description: "We continuously monitor and refine your AI systems to maximize ROI and performance.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-20 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Hear from businesses that have transformed their operations with ScaleUp AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="ScaleUp AI has revolutionized our customer service operations. We've seen a 40% increase in efficiency and significantly improved customer satisfaction scores."
            name="Sarah Johnson"
            title="COO, TechVision Inc."
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="Implementing ScaleUp AI's predictive analytics solution has given us invaluable insights into market trends, helping us stay ahead of the competition."
            name="Michael Chen"
            title="CEO, Innovate Solutions"
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="The ROI we've seen from ScaleUp AI's automation tools has been remarkable. Tasks that used to take days now happen in minutes."
            name="Jessica Williams"
            title="Director of Operations, GrowthForce"
            avatar="/placeholder.svg?height=100&width=100"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$499"
              description="Perfect for small businesses just getting started with AI automation."
              features={[
                "Basic AI automation tools",
                "5 automated workflows",
                "Basic analytics dashboard",
                "Email support",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
              buttonLink="https://calendly.com/wescaleupai"
            />
            <PricingCard
              title="Professional"
              price="$999"
              description="Ideal for growing businesses looking to scale their operations."
              features={[
                "Advanced AI automation tools",
                "Unlimited workflows",
                "Advanced analytics & reporting",
                "Priority support",
                "API access",
              ]}
              buttonText="Get Started"
              buttonVariant="default"
              highlighted={true}
              buttonLink="https://calendly.com/wescaleupai"
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solutions for large organizations with complex needs."
              features={[
                "Custom AI solution development",
                "Dedicated account manager",
                "24/7 premium support",
                "Custom integrations",
                "On-premise deployment options",
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
              buttonLink="https://calendly.com/wescaleupai"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="bg-primary-500 rounded-2xl p-8 md:p-12 text-white text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that are already leveraging our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/wescaleupai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-500 hover:bg-gray-100 rounded-md px-8 py-6 text-lg inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://calendly.com/wescaleupai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-500 hover:bg-gray-100 rounded-md px-8 py-6 text-lg inline-flex items-center justify-center"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">ScaleUp AI</span>
              </div>
              <p className="text-gray-400">AI-Driven Growth.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Webinars
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 ScaleUp AI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="/images/x-logo.png" alt="X (formerly Twitter)" className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
