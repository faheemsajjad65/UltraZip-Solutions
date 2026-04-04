import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Ultra Zip Solutions`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || "zipper raw materials, polyester yarn, zipper tape, nylon coil, B2B manufacturing");
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = keywords || "zipper raw materials, polyester yarn, zipper tape, nylon coil, B2B manufacturing";
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null;
}
