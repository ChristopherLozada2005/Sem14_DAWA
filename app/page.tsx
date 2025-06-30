import { Suspense } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Lazy loading del componente
const LargeComponent = dynamic(() => import('./components/LargeComponent'), {
  loading: () => <p>Cargando componente...</p>,
  ssr: false
})

export const metadata: Metadata = {
  title: 'Inicio - Bienvenido a Mi Proyecto SEO',
  description: 'Página principal de Mi Proyecto SEO, una aplicación web optimizada con Next.js que implementa las mejores prácticas de SEO y rendimiento.',
  keywords: ['inicio', 'home', 'proyecto seo', 'next.js', 'optimización web'],
  openGraph: {
    title: 'Inicio - Mi Proyecto SEO',
    description: 'Página principal de Mi Proyecto SEO, una aplicación web optimizada con Next.js',
    url: 'https://mi-proyecto-seo.com',
    type: 'website',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Página de Inicio - Mi Proyecto SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inicio - Mi Proyecto SEO',
    description: 'Página principal optimizada para SEO',
    images: ['/og-home.jpg'],
  },
}

export default function Home() {
  return (
    <div className="container py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a Mi Proyecto SEO
        </h1>
        <p className="text-xl text-light mb-8">
          Una aplicación web optimizada con Next.js que implementa las mejores prácticas de SEO
        </p>
        
        {/* Imagen optimizada */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <Image
            src="/hero-image.jpg"
            alt="Imagen principal del proyecto SEO"
            width={800}
            height={400}
            priority
            className="img-responsive img-rounded img-shadow"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </section>

      <section className="grid md-grid-cols-3 mb-12" style={{ gap: '2rem' }}>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">
            Meta Tags Dinámicos
          </h2>
          <p className="text-light">
            Implementamos meta tags personalizados para cada página, optimizando 
            el SEO y la visibilidad en redes sociales.
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">
            Sitemap Automático
          </h2>
          <p className="text-light">
            Generación automática de sitemap.xml para ayudar a los motores 
            de búsqueda a indexar nuestro contenido.
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">
            Optimización de Imágenes
          </h2>
          <p className="text-light">
            Uso del componente next/image para cargar imágenes optimizadas 
            y mejorar el rendimiento web.
          </p>
        </div>
      </section>

      {/* Componente con Lazy Loading */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Componente con Lazy Loading
        </h2>
        <Suspense fallback={<div className="text-center">Cargando...</div>}>
          <LargeComponent />
        </Suspense>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mi Proyecto SEO",
            "url": "https://mi-proyecto-seo.com",
            "description": "Aplicación web optimizada con Next.js",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mi-proyecto-seo.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </div>
  )
}