'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/common/Breadcrumb';

// Sample blog posts (In production, these would come from a CMS or database)
const blogPosts = [
  {
    id: '1',
    slug: 'top-10-data-analytics-trends-2025',
    title: 'Top 10 Data Analytics Trends to Watch in 2025',
    excerpt: 'Discover the latest trends shaping the future of data analytics and how they can transform your business intelligence strategy.',
    category: 'Data Analytics',
    author: 'Rajesh Sharma',
    image: '/assets/images/business-futuristic.jpg',
  },
  {
    id: '2',
    slug: 'implementing-business-intelligence',
    title: 'A Complete Guide to Implementing Business Intelligence',
    excerpt: 'Learn step-by-step how to successfully implement BI solutions in your organization for better decision-making and insights.',
    category: 'Business Intelligence',
    author: 'Priya Patel',
    image: '/assets/images/business-meeting.jpg',
  },
  {
    id: '3',
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for 2025',
    excerpt: 'Essential strategies and best practices for successful cloud migration, ensuring security, scalability, and cost efficiency.',
    category: 'Cloud Solutions',
    author: 'Amit Kumar',
    image: '/assets/images/technology-integrated-everyday-life (1).jpg',
  },
  {
    id: '4',
    slug: 'workflow-automation-roi',
    title: 'Measuring ROI: The Real Impact of Workflow Automation',
    excerpt: 'Understand how to calculate and maximize the return on investment from your workflow automation initiatives.',
    category: 'Workflow Automation',
    author: 'Neha Gupta',
    image: '/assets/images/hand-touching-screen-rpa-concept (1).jpg',
  },
  {
    id: '5',
    slug: 'ai-ml-business-intelligence',
    title: 'How Machine Learning is Transforming Business Intelligence',
    excerpt: 'Explore the transformative impact of machine learning on business intelligence and predictive analytics.',
    category: 'Business Intelligence',
    author: 'Vikram Singh',
    image: '/assets/images/ai-image.jpg',
  },
  {
    id: '6',
    slug: 'data-security-compliance-2025',
    title: 'Data Security and Compliance in 2025: What You Need to Know',
    excerpt: 'Stay ahead of evolving data security regulations and learn how to maintain compliance while leveraging analytics.',
    category: 'IT Security',
    author: 'Anjali Reddy',
    image: '/assets/images/quality-control.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }}></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[
              { label: 'Home', href: '/' },
              { label: 'Blog' }
            ]} />
            
            <div className="text-center mt-8">
              <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-semibold mb-6">
                Insights & Resources
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Expert insights, industry trends, and best practices in IT analytics and business intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-2"
                >
                  {/* Blog Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-sm group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

