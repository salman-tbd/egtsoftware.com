import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with EGT Software for IT analytics and business intelligence solutions. We're here to help transform your business.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-400 text-sm font-semibold border border-blue-500/30">
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Contact <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Have a question or want to work together? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                    Get in <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Ready to transform your business with data-driven solutions? Our team of experts is here to help you succeed.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Email Card */}
                  <div className="group bg-white rounded-2xl border-2 border-blue-100 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110  transition-all">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                          EMAIL
                        </h3>
                        <a
                          href={`mailto:${SITE_CONFIG.contact.email}`}
                          className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {SITE_CONFIG.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  {SITE_CONFIG.contact.phone && (
                    <div className="group bg-white rounded-2xl border-2 border-green-100 p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110  transition-all">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                            PHONE
                          </h3>
                          <a
                            href={`tel:${SITE_CONFIG.contact.phone}`}
                            className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
                          >
                            {SITE_CONFIG.contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Address Card */}
                  {SITE_CONFIG.contact.address && (
                    <div className="group bg-white rounded-2xl border-2 border-purple-100 p-6 hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110  transition-all">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                            ADDRESS
                          </h3>
                          <p className="text-lg font-semibold text-gray-900">{SITE_CONFIG.contact.address}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Business Hours Card */}
                  <div className="group bg-white rounded-2xl border-2 border-orange-100 p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110  transition-all">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                          BUSINESS HOURS
                        </h3>
                        <p className="text-lg font-semibold text-gray-900">
                          Monday - Friday: 10:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-sm text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

