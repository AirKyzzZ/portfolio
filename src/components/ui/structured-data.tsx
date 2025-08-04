export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maxime Mansiet",
    "jobTitle": "Développeur Full-Stack & Entrepreneur",
    "description": "Développeur full-stack et entrepreneur basé à Bordeaux, spécialisé en React, Next.js et développement web moderne. Fondateur de Klyx et VertiFlow.",
    "url": "https://maximemansiet.fr",
    "image": "https://maximemansiet.fr/moi.png",
    "sameAs": [
      "https://linkedin.com/in/maximemansiet",
      "https://github.com/maximemansiet",
      "https://twitter.com/maximemansiet"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Klyx",
        "url": "https://klyx.fr"
      },
      {
        "@type": "Organization", 
        "name": "VertiFlow",
        "url": "https://vertiflow.fr"
      }
    ],
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full-Stack Development",
      "Web Development",
      "UI/UX Design",
      "Entrepreneurship"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bordeaux",
      "addressCountry": "FR"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "EPSI"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "GDG Bordeaux"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 