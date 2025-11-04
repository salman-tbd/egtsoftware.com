/**
 * Schema Markup Helper Component
 * Easy-to-use component for adding structured data to any page
 */

interface SchemaProps {
  type: 'Article' | 'Product' | 'Service' | 'Event' | 'Person' | 'Review' | 'VideoObject' | 'HowTo';
  data: Record<string, string | number | boolean | object | undefined>;
}

export function Schema({ type, data }: SchemaProps) {
  const schema: Record<string, string | number | boolean | object | undefined> = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper functions for common schema types

export function createArticleSchema(article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  publisher: {
    name: string;
    logo: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: article.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: article.publisher.logo,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    ...(article.image && { image: article.image }),
  };
}

export function createProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    ...(product.image && { image: product.image }),
    ...(product.brand && {
      brand: {
        '@type': 'Brand',
        name: product.brand,
      },
    }),
    ...(product.offers && {
      offers: {
        '@type': 'Offer',
        price: product.offers.price,
        priceCurrency: product.offers.priceCurrency,
        availability: `https://schema.org/${product.offers.availability}`,
      },
    }),
    ...(product.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.aggregateRating.ratingValue,
        reviewCount: product.aggregateRating.reviewCount,
      },
    }),
  };
}

export function createServiceSchema(service: {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider.name,
      url: service.provider.url,
    },
    serviceType: service.serviceType,
    ...(service.areaServed && { areaServed: service.areaServed }),
    ...(service.offers && {
      offers: {
        '@type': 'Offer',
        ...(service.offers.price && { price: service.offers.price }),
        ...(service.offers.priceCurrency && { priceCurrency: service.offers.priceCurrency }),
      },
    }),
  };
}

export function createEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  organizer: {
    name: string;
    url: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    url: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    location: {
      '@type': 'Place',
      name: event.location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: event.location.address,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: event.organizer.name,
      url: event.organizer.url,
    },
    ...(event.offers && {
      offers: {
        '@type': 'Offer',
        price: event.offers.price,
        priceCurrency: event.offers.priceCurrency,
        url: event.offers.url,
      },
    }),
  };
}

export function createReviewSchema(review: {
  itemReviewed: {
    type: string;
    name: string;
  };
  author: string;
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
  };
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': review.itemReviewed.type,
      name: review.itemReviewed.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating.ratingValue,
      bestRating: review.reviewRating.bestRating || 5,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}

export function createVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
  };
}

export function createHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

export default Schema;

