import type { Metadata } from 'next';

import { Suspense } from 'react';
import { DM_Mono, Syne } from 'next/font/google';

import { ColorPaletteProvider } from '@/contexts/ColorPaletteContext';

import { Analytics } from './analytics';

import './globals.css';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fardinmahadi.vercel.app';
const siteName = 'FardinMahadi - Full Stack Developer Portfolio';
const defaultOgImage = `${siteUrl}/images/og-image.png`;

export const metadata: Metadata = {
  title: {
    default: 'Mahadi Hasan Fardin | Full Stack Developer | MERN Stack | React Native',
    template: '%s | Mahadi Hasan Fardin',
  },
  description:
    'Full Stack Developer specializing in MERN stack, React Native, and modern web technologies. Building scalable apps with clean UI/UX.',
  keywords: [
    'full stack developer',
    'MERN',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'portfolio',
  ],
  authors: [{ name: 'Mahadi Hasan Fardin', url: siteUrl }],
  creator: 'Mahadi Hasan Fardin',
  publisher: 'Mahadi Hasan Fardin',
  applicationName: 'FardinMahadi Portfolio',
  category: 'Portfolio',
  classification: 'Developer Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'Mahadi Hasan Fardin | Full Stack Developer | MERN Stack | React Native',
    description:
      'Full Stack Developer specializing in MERN stack, React Native, and modern web technologies. Building scalable apps with clean UI/UX.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'FardinMahadi - Developer Portfolio',
        type: 'image/png',
      },
    ],
    countryName: 'Bangladesh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahadi Hasan Fardin | Full Stack Developer | MERN Stack | React Native',
    description:
      'Full Stack Developer specializing in MERN stack, React Native, and modern web technologies. Building scalable apps with clean UI/UX.',
    creator: '@FardinMahadi',
    site: '@FardinMahadi',
    images: [
      {
        url: defaultOgImage,
        alt: 'Mahadi Hasan Fardin - Developer Portfolio',
      },
    ],
  },
  themeColor: '#B400D9',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  icons: {
    icon: [{ url: '/images/favicon.ico', type: 'image/x-icon' }],
    apple: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahadi Hasan Fardin',
    alternateName: 'FardinMahadi',
    givenName: 'Mahadi Hasan',
    familyName: 'Fardin',
    url: siteUrl,
    jobTitle: 'MERN Stack Developer',
    description:
      'Full-stack developer passionate about creating seamless web experiences with MERN stack and modern frameworks. Specializing in React, Next.js, Node.js, MongoDB, Express, and TypeScript.',
    knowsAbout: [
      'React',
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Express',
      'Express.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Full Stack Development',
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'RESTful APIs',
      'GraphQL',
      'Framer Motion',
      'Vercel',
    ],
    sameAs: ['https://github.com/FardinMahadi', 'https://www.linkedin.com/in/mahadi-hasan-fardin'],
    email: 'mailto:mahadihasanfardin2015@gmail.com',
    alumniOf: [
      {
        '@type': 'University',
        name: 'Comilla University',
        description: 'Currently pursuing studies',
      },
      {
        '@type': 'College',
        name: 'Dhaka College',
        description: 'Completed Higher Secondary Certificate (HSC)',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'DevGenit',
      description: 'Software Agency',
      jobTitle: 'Frontend Engineer',
      employmentType: 'Contract',
      workLocation: {
        '@type': 'Place',
        name: 'Remote',
      },
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Frontend Engineer',
      occupationLocation: {
        '@type': 'Organization',
        name: 'DevGenit',
      },
      skills: ['React', 'Next.js', 'TypeScript', 'Frontend Development', 'UI/UX Development'],
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Higher Secondary Certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Dhaka College',
        },
      },
    ],
    knowsLanguage: ['English', 'Bengali'],
    nationality: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description:
      'Professional portfolio website showcasing MERN stack development projects and expertise.',
    author: {
      '@type': 'Person',
      name: 'Mahadi Hasan Fardin',
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/#projects`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${siteUrl}/about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Projects',
        item: `${siteUrl}/#projects`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Blog',
        item: `${siteUrl}/#blog`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: `${siteUrl}/#contact`,
      },
    ],
  };

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevGenit',
    description: 'Software Agency specializing in web development and frontend engineering',
    url: 'https://devgenit.com',
    logo: `${siteUrl}/images/favicon.ico`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Bengali'],
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#b400d9" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${syne.variable} ${dmMono.variable} overflow-x-hidden antialiased`}>
        <ColorPaletteProvider>{children}</ColorPaletteProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
