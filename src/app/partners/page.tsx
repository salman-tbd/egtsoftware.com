import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Our Partners - Strategic Technology Partnerships",
  description: `${SITE_CONFIG.name} partners with leading technology providers to deliver best-in-class IT analytics and business intelligence solutions.`,
  canonical: "/partners",
});

export default function PartnersPage() {
  const partners = [
    {
      name: "Microsoft",
      category: "Cloud & Enterprise",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="36" height="36" fill="#F25022"/>
          <rect x="48" y="4" width="36" height="36" fill="#7FBA00"/>
          <rect x="4" y="48" width="36" height="36" fill="#00A4EF"/>
          <rect x="48" y="48" width="36" height="36" fill="#FFB900"/>
        </svg>
      ),
      description: "Gold Certified Partner for Azure, Power BI, and Microsoft 365 solutions",
      partnership: "Gold Partner",
      since: "2010",
      color: "blue"
    },
    {
      name: "Amazon Web Services",
      category: "Cloud Infrastructure",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 28C15 24.6863 17.6863 22 21 22H67C70.3137 22 73 24.6863 73 28V48C73 51.3137 70.3137 54 67 54H21C17.6863 54 15 51.3137 15 48V28Z" fill="#FF9900"/>
          <path d="M20 62C20 60.8954 20.8954 60 22 60H66C67.1046 60 68 60.8954 68 62C68 63.1046 67.1046 64 66 64H22C20.8954 64 20 63.1046 20 62Z" fill="#FF9900"/>
          <ellipse cx="44" cy="38" rx="15" ry="8" fill="white" fillOpacity="0.3"/>
        </svg>
      ),
      description: "AWS Advanced Consulting Partner specialized in data analytics and cloud migration",
      partnership: "Advanced Partner",
      since: "2012",
      color: "orange"
    },
    {
      name: "Google Cloud",
      category: "Cloud & AI",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 10L20 25V63L44 78L68 63V25L44 10Z" fill="#4285F4" fillOpacity="0.2" stroke="#4285F4" strokeWidth="3"/>
          <path d="M44 78V44" stroke="#4285F4" strokeWidth="3"/>
          <path d="M44 44L20 25" stroke="#EA4335" strokeWidth="3"/>
          <path d="M44 44L68 25" stroke="#34A853" strokeWidth="3"/>
          <circle cx="44" cy="44" r="8" fill="#FBBC04"/>
        </svg>
      ),
      description: "Google Cloud Partner providing BigQuery, AI/ML, and cloud infrastructure solutions",
      partnership: "Premier Partner",
      since: "2015",
      color: "red"
    },
    {
      name: "Salesforce",
      category: "CRM & Analytics",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="35" r="12" fill="#00A1E0"/>
          <circle cx="58" cy="35" r="12" fill="#00A1E0"/>
          <circle cx="44" cy="50" r="15" fill="#00A1E0"/>
          <circle cx="30" cy="35" r="8" fill="white" fillOpacity="0.3"/>
          <circle cx="58" cy="35" r="8" fill="white" fillOpacity="0.3"/>
        </svg>
      ),
      description: "Certified Salesforce Partner for CRM implementation and analytics integration",
      partnership: "Certified Partner",
      since: "2014",
      color: "cyan"
    },
    {
      name: "Tableau",
      category: "Business Intelligence",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="35" width="12" height="40" fill="#E97627" rx="2"/>
          <rect x="38" y="20" width="12" height="55" fill="#E97627" rx="2"/>
          <rect x="60" y="28" width="12" height="40" fill="#E97627" rx="2"/>
          <rect x="16" y="20" width="12" height="10" fill="#FFB627" rx="2"/>
          <rect x="60" y="65" width="12" height="10" fill="#FFB627" rx="2"/>
        </svg>
      ),
      description: "Tableau Partner providing data visualization and business intelligence solutions",
      partnership: "Registered Partner",
      since: "2011",
      color: "purple"
    },
    {
      name: "Oracle",
      category: "Database & Analytics",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="25" width="58" height="8" fill="#F80000" rx="2"/>
          <rect x="15" y="40" width="58" height="8" fill="#F80000" rx="2"/>
          <rect x="15" y="55" width="58" height="8" fill="#F80000" rx="2"/>
          <rect x="20" y="15" width="6" height="58" fill="#C74634" rx="2"/>
          <rect x="62" y="15" width="6" height="58" fill="#C74634" rx="2"/>
        </svg>
      ),
      description: "Oracle PartnerNetwork member specializing in database and enterprise analytics",
      partnership: "Gold Partner",
      since: "2009",
      color: "red"
    }
  ];

  const benefits = [
    {
      title: "Best-in-Class Technology",
      description: "Access to cutting-edge tools and platforms from industry leaders",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" stroke="#3B82F6" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="#3B82F6"/>
        </svg>
      )
    },
    {
      title: "Certified Expertise",
      description: "Our team holds certifications from all major technology partners",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V8M12 16V18M18 12H16M8 12H6" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Cost Efficiency",
      description: "Leverage partner programs for better pricing and licensing terms",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Priority Support",
      description: "Direct access to partner technical support and resources",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Innovation Access",
      description: "Early access to new features and beta programs",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" stroke="#EF4444" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Proven Integration",
      description: "Seamless integration between multiple partner technologies",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59702 21.9548 8.33362 21.9434 7.02402C21.932 5.71442 21.4061 4.45958 20.4791 3.53257C19.5521 2.60557 18.2973 2.07973 16.9877 2.06829C15.6781 2.05685 14.4147 2.56082 13.4717 3.47164L11.75 5.18164" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 11C13.5705 10.4259 13.0226 9.9508 12.3934 9.60707C11.7642 9.26334 11.0685 9.05889 10.3533 9.00768C9.63816 8.95648 8.92037 9.05967 8.24861 9.31023C7.57685 9.56079 6.96684 9.953 6.45996 10.46L3.45996 13.46C2.54914 14.403 2.04517 15.6664 2.05661 16.976C2.06805 18.2856 2.59389 19.5404 3.52089 20.4674C4.4479 21.3944 5.70274 21.9203 7.01234 21.9317C8.32194 21.9431 9.58534 21.4392 10.5283 20.5284L12.24 18.8184" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const certifications = [
    "Microsoft Certified: Azure Solutions Architect Expert",
    "AWS Certified Solutions Architect - Professional",
    "Google Cloud Professional Data Engineer",
    "Salesforce Certified Administrator",
    "Tableau Desktop Specialist",
    "Oracle Cloud Infrastructure Architect",
    "Power BI Data Analyst Associate",
    "AWS Certified Big Data - Specialty"
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
                Our Technology Partners
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Partnering with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Strategic partnerships that empower us to deliver world-class solutions
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Technology Partners
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Strategic Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We collaborate with the world&apos;s leading technology providers to bring you the best solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, idx) => (
                <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 p-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {partner.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                        {partner.partnership}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        Since {partner.since}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                      {partner.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Client Benefits
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Our Partnerships Matter
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our strategic partnerships translate into real benefits for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experts hold industry-recognized certifications from all major technology partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <p className="text-sm font-semibold text-gray-900">{cert}</p>
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
              Want to Become a Partner?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for strategic partnerships with technology providers and consultants
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Contact Partnership Team
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

