import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Terms of Service",
  description: "Terms of Service for EGT Software IT Analytics Solutions. Read our terms and conditions for using our services.",
  canonical: "/terms",
});

export default function TermsPage() {
  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "By accessing and using the services provided by EGT Software, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Use of Services",
      content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Intellectual Property",
      content: "All content, features, and functionality of our services are owned by EGT Software and are protected by international copyright, trademark, and other intellectual property laws.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Service Availability",
      content: "We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: "EGT Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Changes to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      title: "Contact Information",
      content: "For questions about these Terms of Service, please contact us",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black text-white">
                Terms of Service
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200 flex flex-col"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110  transition-all shadow-lg flex-shrink-0`}>
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {section.id}. {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                    {section.content}
                  </p>
                  {section.id === 7 && (
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {SITE_CONFIG.contact.email}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

