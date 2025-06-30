import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog - Artículos sobre SEO y Desarrollo Web',
  description: 'Descubre los últimos artículos sobre SEO, optimización web y desarrollo con Next.js. Guías prácticas y consejos de expertos.',
  keywords: ['blog', 'artículos', 'SEO', 'desarrollo web', 'next.js', 'optimización', 'guías'],
  openGraph: {
    title: 'Blog - Mi Proyecto SEO',
    description: 'Artículos sobre SEO y desarrollo web con Next.js',
    url: 'https://mi-proyecto-seo.com/blog',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog - Mi Proyecto SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Mi Proyecto SEO',
    description: 'Artículos sobre SEO y desarrollo web',
    images: ['/og-blog.jpg'],
  },
}

// Datos simulados de artículos
const blogPosts = [
  {
    id: 1,
    title: 'Guía Completa de SEO para Next.js',
    excerpt: 'Aprende a optimizar tu aplicación Next.js para motores de búsqueda con meta tags dinámicos, sitemaps y más.',
    date: '2025-01-15',
    author: 'Equipo SEO',
    image: '/blog-1.jpg',
    slug: 'guia-seo-nextjs'
  },
  {
    id: 2,
    title: 'Optimización de Imágenes en Aplicaciones Web',
    excerpt: 'Descubre las mejores prácticas para optimizar imágenes y mejorar el rendimiento de tu sitio web.',
    date: '2025-01-10',
    author: 'Desarrollador Web',
    image: '/blog-2.jpg',
    slug: 'optimizacion-imagenes-web'
  },
  {
    id: 3,
    title: 'Lazy Loading: Mejora el Rendimiento de tu App',
    excerpt: 'Implementa lazy loading en React y Next.js para cargar contenido de manera eficiente y mejorar la experiencia del usuario.',
    date: '2025-01-05',
    author: 'React Developer',
    image: '/blog-3.jpg',
    slug: 'lazy-loading-react-nextjs'
  }
]

export default function BlogPage() {
  return (
    <div className="container py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Blog de Desarrollo Web
        </h1>
        <p className="text-xl text-light" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          Explora nuestros artículos sobre SEO, optimización web y las mejores 
          prácticas de desarrollo con Next.js y React.
        </p>
      </header>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image-container">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="blog-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="blog-content">
              <header className="blog-header">
                <h2 className="blog-title">
                  <a href={`/blog/${post.slug}`} className="blog-link">
                    {post.title}
                  </a>
                </h2>
                
                <div className="blog-meta">
                  <time dateTime={post.date} className="blog-date">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="blog-separator">•</span>
                  <span className="blog-author">{post.author}</span>
                </div>
              </header>
              
              <p className="blog-excerpt">
                {post.excerpt}
              </p>
              
              <footer className="blog-footer">
                <a 
                  href={`/blog/${post.slug}`}
                  className="btn btn-primary blog-read-more"
                >
                  Leer más
                  <svg className="blog-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </footer>
            </div>
          </article>
        ))}
      </div>

      {/* Schema.org JSON-LD para Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog de Mi Proyecto SEO",
            "url": "https://mi-proyecto-seo.com/blog",
            "description": "Artículos sobre SEO y desarrollo web",
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://mi-proyecto-seo.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author
              }
            }))
          })
        }}
      />
    </div>
  )
}