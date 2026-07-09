import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.skyibuildersanddevelopers.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'SKYi Builders & Developers';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  keywords,
  noIndex = false,
  schemaData,
}) => {
  const fullTitle = title
    ? `SKYi Builders & Developers | ${title}`
    : 'SKYi Builders & Developers | Premium Real Estate in Hosur';

  const fullCanonical = canonical
    ? `${BASE_URL}${canonical}`
    : `${BASE_URL}/`;

  // Ensure ogImage is a fully qualified absolute URL
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${BASE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  // Check if we are showing the default company logo or a custom banner image
  const isDefaultImage = ogImage === DEFAULT_OG_IMAGE || ogImage.includes('og-image.jpg');
  const imageWidth = isDefaultImage ? '500' : '1200';
  const imageHeight = isDefaultImage ? '500' : '630';
  const twitterCard = isDefaultImage ? 'summary' : 'summary_large_image';

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Page-specific JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
