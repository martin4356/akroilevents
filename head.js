const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Akroil International Pvt Ltd",
  "url": "https://akroilevents.com"
}`;
document.head.appendChild(script);
