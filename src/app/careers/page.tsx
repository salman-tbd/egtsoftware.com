import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Careers - Join Our Team",
  description: `Join the ${SITE_CONFIG.name} team and help transform businesses through data-driven solutions. Explore exciting career opportunities in IT analytics and business intelligence.`,
  canonical: "/careers",
});

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Data Analyst",
      department: "Analytics",
      location: "Sydney, NSW",
      type: "Full-time",
      description: "Lead data analysis initiatives and help clients unlock insights from their data.",
      requirements: ["5+ years experience in data analytics", "Proficiency in SQL, Python, R", "Experience with BI tools (Tableau, Power BI)", "Strong communication skills"]
    },
    {
      title: "Business Intelligence Consultant",
      department: "Consulting",
      location: "Melbourne, VIC",
      type: "Full-time",
      description: "Work directly with clients to implement BI solutions and drive business value.",
      requirements: ["3+ years in BI consulting", "Experience with data warehousing", "Strong problem-solving skills", "Client-facing experience"]
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Brisbane, QLD",
      type: "Full-time",
      description: "Design and implement cloud infrastructure solutions for enterprise clients.",
      requirements: ["AWS/Azure/GCP certification", "5+ years cloud experience", "Infrastructure as Code (Terraform, CloudFormation)", "DevOps experience"]
    },
    {
      title: "Full Stack Developer",
      department: "Development",
      location: "Sydney, NSW",
      type: "Full-time",
      description: "Build cutting-edge web applications and custom analytics solutions.",
      requirements: ["React/Next.js expertise", "Node.js/Python backend experience", "Database design skills", "3+ years development experience"]
    },
    {
      title: "Data Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain data pipelines and infrastructure for analytics solutions.",
      requirements: ["ETL/ELT pipeline experience", "Python/Scala programming", "Big data technologies (Spark, Kafka)", "SQL expertise"]
    },
    {
      title: "IT Project Manager",
      department: "Project Management",
      location: "Sydney, NSW",
      type: "Full-time",
      description: "Lead complex IT projects from initiation through delivery and support.",
      requirements: ["PMP or similar certification", "5+ years project management", "Agile/Scrum experience", "Stakeholder management skills"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: "🏖️",
      title: "Flexible Leave",
      description: "Generous paid time off and flexible working arrangements"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Professional development budget and training opportunities"
    },
    {
      icon: "💻",
      title: "Remote Work",
      description: "Work from home options and flexible hours"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship programs"
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
                Careers at {SITE_CONFIG.name}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Join Our Team of{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Data Experts
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Help transform businesses through data-driven solutions while growing your career
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Why Work With Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members and providing an environment where you can thrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Open Positions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Current Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our open positions and find your perfect role
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-gray-600 mb-4">
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {position.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.slice(0, 3).map((req, ridx) => (
                          <span key={ridx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Link href="/contact">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
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
              Don&apos;t See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Submit Your Resume
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

