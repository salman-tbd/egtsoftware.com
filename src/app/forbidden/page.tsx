import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { generateSEO } from '@/components/common/SEO';

export const metadata = generateSEO({
  title: '403 - Access Forbidden',
  description: 'You do not have permission to access this resource. Please contact support if you believe this is an error.',
  noindex: true,
});

export default function Forbidden() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* 403 Animation */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-600 leading-none animate-pulse">
              403
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Access Forbidden
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            You don&apos;t have permission to access this resource. If you believe this is an error, please contact our support team.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Back to Homepage
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl border-2 border-red-200 hover:border-red-400 hover:bg-red-50 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Support
                </span>
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Helpful Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/"
                className="group p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Homepage
                  </span>
                </div>
              </Link>

              <Link
                href="/services"
                className="group p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Our Services
                  </span>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Contact Us
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Error Code */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>Error Code: 403 | Access Forbidden</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
