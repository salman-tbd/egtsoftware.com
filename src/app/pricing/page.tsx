import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Pricing Plans - Affordable IT Analytics Solutions",
  description: `Transparent pricing for ${SITE_CONFIG.name} IT analytics and business intelligence solutions. Choose a plan that fits your business needs and budget.`,
  canonical: "/pricing",
});

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses getting started with data analytics",
      features: [
        "Basic BI Dashboard",
        "Up to 3 data sources",
        "5 users included",
        "Email support (24-48h response)",
        "Monthly reports",
        "Basic data visualization",
        "Standard security",
        "1 GB data storage"
      ],
      highlighted: false,
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Advanced BI Dashboard",
        "Unlimited data sources",
        "20 users included",
        "Priority email & chat support (4h response)",
        "Weekly reports",
        "Advanced data visualization",
        "Enhanced security & compliance",
        "25 GB data storage",
        "API access",
        "Custom integrations",
        "Predictive analytics",
        "Mobile app access"
      ],
      highlighted: true,
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations requiring comprehensive solutions",
      features: [
        "Custom BI solution",
        "Unlimited everything",
        "Unlimited users",
        "24/7 phone, email & chat support (1h response)",
        "Real-time reports",
        "Custom data visualization",
        "Enterprise-grade security",
        "Unlimited data storage",
        "Dedicated account manager",
        "On-site training",
        "White-label options",
        "SLA guarantee",
        "Custom AI/ML models",
        "Infrastructure optimization"
      ],
      highlighted: false,
      color: "green",
      popular: false
    }
  ];

  const addons = [
    {
      name: "Additional Users",
      price: "$99/user/month",
      description: "Add more team members to your plan"
    },
    {
      name: "Extra Storage",
      price: "$49/10GB/month",
      description: "Increase your data storage capacity"
    },
    {
      name: "Advanced Security",
      price: "$499/month",
      description: "Enhanced security features and compliance"
    },
    {
      name: "Custom Reports",
      price: "$299/month",
      description: "Customized reporting and analytics"
    },
    {
      name: "Training Sessions",
      price: "$1,999/session",
      description: "On-site or virtual team training"
    },
    {
      name: "Dedicated Support",
      price: "$2,499/month",
      description: "Dedicated support specialist for your team"
    }
  ];

  const faqs = [
    {
      q: "Can I switch plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes, we offer a 14-day free trial for the Professional plan. No credit card required."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, bank transfers, and purchase orders for annual contracts."
    },
    {
      q: "Is there a setup fee?",
      a: "No setup fees for Starter and Professional plans. Enterprise plans include complimentary setup and onboarding."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel anytime. We offer a 30-day money-back guarantee on all plans."
    },
    {
      q: "Do you offer discounts for annual contracts?",
      a: "Yes, save 20% when you pay annually. Contact our sales team for volume discounts."
    }
  ];

  const comparison = [
    { feature: "BI Dashboard", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
    { feature: "Data Sources", starter: "3", professional: "Unlimited", enterprise: "Unlimited" },
    { feature: "Users", starter: "5", professional: "20", enterprise: "Unlimited" },
    { feature: "Support", starter: "Email", professional: "Email & Chat", enterprise: "24/7 All Channels" },
    { feature: "Reports", starter: "Monthly", professional: "Weekly", enterprise: "Real-time" },
    { feature: "API Access", starter: "❌", professional: "✅", enterprise: "✅" },
    { feature: "Custom Integration", starter: "❌", professional: "✅", enterprise: "✅" },
    { feature: "Predictive Analytics", starter: "❌", professional: "✅", enterprise: "✅" },
    { feature: "Dedicated Manager", starter: "❌", professional: "❌", enterprise: "✅" },
    { feature: "SLA Guarantee", starter: "❌", professional: "❌", enterprise: "✅" }
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
                Transparent Pricing
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Choose a plan that fits your business needs and budget
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-200 text-sm font-semibold">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>14-day free trial • No credit card required • Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white scale-105 border-4 border-purple-400' 
                      : 'bg-white border-2 border-gray-100 hover:border-blue-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-blue-600'}`}>
                          {plan.price}
                        </span>
                        <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                          {plan.period}
                        </span>
                      </div>
                      <p className={`mt-4 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <svg 
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/contact">
                      <button 
                        className={`w-full px-6 py-4 font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                          plan.highlighted
                            ? 'bg-white text-purple-600 hover:bg-gray-50'
                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        }`}
                      >
                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                Enhance Your Plan
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Optional Add-ons
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Customize your plan with these optional add-ons
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-3xl font-black text-orange-600 mb-3">{addon.price}</div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Detailed Comparison
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compare Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our plans compare feature by feature
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-blue-600">Starter</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-purple-600">Professional</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-green-600">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">{row.starter}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">{row.professional}</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Pricing FAQs
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-gray-600">
                Answers to frequently asked questions about pricing
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <Link href="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:bg-blue-50 hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Free Trial
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

