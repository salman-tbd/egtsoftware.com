import { generateSEO } from '@/components/common/SEO';

export const metadata = generateSEO({
  title: 'Blog - IT Analytics & Business Intelligence Insights',
  description: 'Expert insights, tips, and trends in IT analytics, business intelligence, and data-driven decision making. Learn from industry leaders at EGT Software.',
  canonical: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

