import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  path?: string;
  ogImage?: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  nofollow?: boolean;
  twitterHandle?: string;
  creator?: string;
  authors?: Array<{ name: string; url?: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';
const siteName = 'FardinMahadi - MERN Stack Developer Portfolio';

function toAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `${siteUrl}${url.startsWith('/') ? url : `/${url}`}`;
}

/**
 * Generate SEO metadata for a page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    path,
    ogImage = `${siteUrl}/images/og-image.png`,
    image,
    ogType = 'website',
    noindex = false,
    nofollow = false,
    twitterHandle = '@FardinMahadi',
    creator = 'Mahadi Hasan Fardin',
    authors = [{ name: 'Mahadi Hasan Fardin', url: siteUrl }],
  } = config;

  const fullTitle = title.includes('|') ? title : `${title} | ${siteName}`;
  const canonicalUrl = canonical || (path ? `${siteUrl}${path}` : siteUrl);
  const resolvedImageUrl = toAbsoluteUrl(image?.url || ogImage);
  const imageWidth = image?.width ?? 1200;
  const imageHeight = image?.height ?? 630;
  const imageAlt = image?.alt || title;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors,
    creator,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: resolvedImageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: twitterHandle,
      site: twitterHandle,
      images: [resolvedImageUrl],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
  };
}

/**
 * Generate Article structured data
 */
export function generateArticleSchema(
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string,
  author?: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author || 'Mahadi Hasan Fardin',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    image: image || `${siteUrl}/images/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl,
    },
  };
}

/**
 * Generate ItemList structured data for projects
 */
export function generateItemListSchema(
  items: Array<{
    name: string;
    description: string;
    url?: string;
    image?: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: item.name,
        description: item.description,
        url: item.url || siteUrl,
        image: item.image,
      },
    })),
  };
}

/**
 * Generate ProfessionalService structured data
 */
export function generateProfessionalServiceSchema(
  serviceType: string,
  description: string,
  areaServed?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: serviceType,
    description,
    provider: {
      '@type': 'Person',
      name: 'Mahadi Hasan Fardin',
      url: siteUrl,
    },
    areaServed: areaServed || 'Worldwide',
    serviceType,
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
