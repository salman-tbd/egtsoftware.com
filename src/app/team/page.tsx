import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Our Team - Meet the Experts",
  description: `Meet the talented team behind ${SITE_CONFIG.name}. Our data scientists, analysts, and consultants are here to help you succeed.`,
  canonical: "/team",
});

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Executive Officer",
      image: "👩‍💼",
      bio: "With 20+ years in data analytics and 15 years leading tech companies, Emily brings deep expertise in scaling data-driven businesses.",
      expertise: ["Strategic Planning", "Business Development", "Enterprise Solutions"],
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "👨‍💻",
      bio: "Former Principal Engineer at Microsoft, Michael leads our technical vision with expertise in cloud architecture and big data systems.",
      expertise: ["Cloud Architecture", "Big Data", "System Design"],
      linkedin: "#"
    },
    {
      name: "Dr. Sarah Williams",
      role: "Chief Data Officer",
      image: "👩‍🔬",
      bio: "PhD in Data Science from Stanford, Sarah oversees our analytics methodology and ensures best-in-class data solutions.",
      expertise: ["Data Science", "Machine Learning", "Analytics"],
      linkedin: "#"
    },
    {
      name: "James Anderson",
      role: "Chief Operating Officer",
      image: "👨‍💼",
      bio: "James brings 18 years of operational excellence from consulting at McKinsey and leading operations at Fortune 500 companies.",
      expertise: ["Operations", "Process Optimization", "Client Success"],
      linkedin: "#"
    }
  ];

  const team = [
    {
      name: "Dr. Priya Patel",
      role: "Senior Data Scientist",
      image: "👩‍🔬",
      department: "Analytics",
      expertise: ["Machine Learning", "Predictive Analytics", "Python"]
    },
    {
      name: "David Kim",
      role: "Cloud Solutions Architect",
      image: "👨‍💻",
      department: "Cloud Services",
      expertise: ["AWS", "Azure", "Infrastructure Design"]
    },
    {
      name: "Lisa Thompson",
      role: "Business Intelligence Lead",
      image: "👩‍💼",
      department: "BI & Reporting",
      expertise: ["Power BI", "Tableau", "Dashboard Design"]
    },
    {
      name: "Carlos Martinez",
      role: "Senior Data Engineer",
      image: "👨‍🔧",
      department: "Engineering",
      expertise: ["ETL Pipelines", "SQL", "Data Modeling"]
    },
    {
      name: "Jessica Lee",
      role: "Principal Consultant",
      image: "👩‍💼",
      department: "Consulting",
      expertise: ["Strategy", "Implementation", "Change Management"]
    },
    {
      name: "Robert Taylor",
      role: "Security Architect",
      image: "👨‍💼",
      department: "Security",
      expertise: ["Cybersecurity", "Compliance", "Risk Management"]
    },
    {
      name: "Aisha Johnson",
      role: "UX Design Lead",
      image: "👩‍🎨",
      department: "Design",
      expertise: ["UI/UX", "Data Visualization", "User Research"]
    },
    {
      name: "Tom Wilson",
      role: "DevOps Engineer",
      image: "👨‍💻",
      department: "Engineering",
      expertise: ["CI/CD", "Kubernetes", "Automation"]
    },
    {
      name: "Maria Garcia",
      role: "Client Success Manager",
      image: "👩‍💼",
      department: "Client Relations",
      expertise: ["Account Management", "Training", "Support"]
    }
  ];

  const departments = [
    {
      name: "Analytics & Data Science",
      members: 12,
      icon: "📊",
      color: "blue"
    },
    {
      name: "Cloud Solutions",
      members: 8,
      icon: "☁️",
      color: "cyan"
    },
    {
      name: "Engineering",
      members: 10,
      icon: "⚙️",
      color: "purple"
    },
    {
      name: "Consulting",
      members: 15,
      icon: "💼",
      color: "green"
    },
    {
      name: "Client Success",
      members: 7,
      icon: "🤝",
      color: "orange"
    },
    {
      name: "Security & Compliance",
      members: 5,
      icon: "🔒",
      color: "red"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    cyan: "from-cyan-500 to-blue-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
    red: "from-red-500 to-pink-500"
  };

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
                Our Team
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Meet the{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Data Experts
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                A diverse team of 60+ professionals dedicated to your success
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experienced leaders guiding our vision and strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-7xl flex-shrink-0">{leader.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{leader.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.expertise.map((skill, sidx) => (
                          <span key={sidx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <a href={leader.linkedin} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Departments
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized teams working together to deliver excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${colorClasses[dept.color as keyof typeof colorClasses]} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="text-5xl mb-4">{dept.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-xl font-semibold">{dept.members} Team Members</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Team Members
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Key Team Members
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet some of the talented professionals driving our success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.department}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, sidx) => (
                      <span key={sidx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for data excellence
            </p>
            <Link href="/careers">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  View Open Positions
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

