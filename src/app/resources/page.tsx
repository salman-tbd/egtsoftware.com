import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Resources - IT Analytics Insights & Tools",
  description: `Access free resources, whitepapers, guides, and tools from ${SITE_CONFIG.name} to help you make informed decisions about IT analytics and business intelligence.`,
  canonical: "/resources",
});

export default function ResourcesPage() {
  const whitepapers = [
    {
      title: "The Complete Guide to Business Intelligence Implementation",
      description: "A comprehensive 45-page guide covering BI strategy, tool selection, and best practices",
      pages: "45 pages",
      format: "PDF",
      category: "Business Intelligence",
      icon: "📊"
    },
    {
      title: "Cloud Migration Strategy for Enterprise Data",
      description: "Step-by-step framework for migrating enterprise data systems to the cloud securely",
      pages: "32 pages",
      format: "PDF",
      category: "Cloud Solutions",
      icon: "☁️"
    },
    {
      title: "Data Security & Compliance Best Practices 2025",
      description: "Essential security measures and compliance requirements for modern data systems",
      pages: "28 pages",
      format: "PDF",
      category: "Data Security",
      icon: "🔒"
    },
    {
      title: "ROI of Workflow Automation: Case Study Analysis",
      description: "Real-world data from 50+ companies showing the true ROI of automation initiatives",
      pages: "38 pages",
      format: "PDF",
      category: "Automation",
      icon: "⚡"
    }
  ];

  const guides = [
    {
      title: "Getting Started with Data Analytics",
      description: "Beginner-friendly introduction to data analytics concepts and tools",
      type: "Quick Start Guide",
      duration: "15 min read"
    },
    {
      title: "Power BI Dashboard Design Best Practices",
      description: "Design principles and tips for creating effective BI dashboards",
      type: "Tutorial",
      duration: "20 min read"
    },
    {
      title: "SQL Query Optimization Techniques",
      description: "Advanced techniques for improving database query performance",
      type: "Technical Guide",
      duration: "25 min read"
    },
    {
      title: "Machine Learning for Business Analytics",
      description: "Practical applications of ML in business intelligence and analytics",
      type: "Advanced Guide",
      duration: "30 min read"
    },
    {
      title: "Data Visualization Principles",
      description: "Core principles for creating compelling and informative data visualizations",
      type: "Design Guide",
      duration: "18 min read"
    },
    {
      title: "Building a Data-Driven Culture",
      description: "Organizational strategies for fostering data-driven decision making",
      type: "Strategy Guide",
      duration: "22 min read"
    }
  ];

  const tools = [
    {
      name: "ROI Calculator",
      description: "Calculate potential return on investment for BI and analytics initiatives",
      icon: "🧮",
      type: "Interactive Tool"
    },
    {
      name: "Data Maturity Assessment",
      description: "Evaluate your organization's data maturity level and get recommendations",
      icon: "📈",
      type: "Assessment Tool"
    },
    {
      name: "Cloud Cost Estimator",
      description: "Estimate cloud infrastructure costs for your analytics workloads",
      icon: "💰",
      type: "Calculator"
    },
    {
      name: "Dashboard Template Library",
      description: "Pre-built dashboard templates for common business scenarios",
      icon: "📊",
      type: "Templates"
    }
  ];

  const webinars = [
    {
      title: "AI & Machine Learning in Business Intelligence",
      date: "December 15, 2024",
      duration: "60 minutes",
      type: "Upcoming",
      speaker: "Dr. Sarah Chen, Chief Data Scientist"
    },
    {
      title: "Cloud Migration Success Stories",
      date: "November 20, 2024",
      duration: "45 minutes",
      type: "Recorded",
      speaker: "Michael Torres, Cloud Architect"
    },
    {
      title: "Data Security in the Age of AI",
      date: "November 5, 2024",
      duration: "50 minutes",
      type: "Recorded",
      speaker: "Jennifer Park, Security Lead"
    },
    {
      title: "Building Real-Time Analytics Pipelines",
      date: "October 18, 2024",
      duration: "55 minutes",
      type: "Recorded",
      speaker: "David Kumar, Senior Engineer"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6">
                Free Resources
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Knowledge Hub for{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Data Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Access expert insights, guides, and tools to accelerate your data journey
              </p>
            </div>
          </div>
        </section>

        {/* Whitepapers */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                In-Depth Research
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Whitepapers & Reports
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive research and analysis on key topics in IT analytics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapers.map((paper, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{paper.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {paper.category}
                        </span>
                        <span className="text-gray-500 text-sm">{paper.pages}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {paper.description}
                      </p>
                      <Link href="/contact">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                          Download {paper.format}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Practical Learning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Guides & Tutorials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Step-by-step guides to help you master data analytics and BI tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {guide.type}
                    </span>
                    <span className="text-gray-500 text-sm">{guide.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group/link">
                    Read Guide
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                Interactive Tools
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Free Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Practical tools to help you plan and optimize your data initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{tool.icon}</div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                        {tool.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {tool.description}
                      </p>
                      <Link href="/contact">
                        <button className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                          Launch Tool
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Live & Recorded Sessions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Webinars & Events
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our expert sessions and access recorded webinars on demand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 ${webinar.type === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-semibold`}>
                      {webinar.type}
                    </span>
                    <span className="text-gray-500 text-sm">{webinar.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{webinar.speaker}</p>
                  <p className="text-gray-500 text-sm mb-4">{webinar.date}</p>
                  <Link href="/contact">
                    <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                      {webinar.type === 'Upcoming' ? 'Register Now' : 'Watch Recording'}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Our experts are ready to help you with your specific challenges
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Schedule a Consultation
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

