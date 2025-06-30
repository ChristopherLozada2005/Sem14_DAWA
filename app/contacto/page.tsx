import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Ponte en Contacto con Nosotros',
  description: 'Contáctanos para consultas sobre desarrollo web, SEO y optimización. Estamos aquí para ayudarte con tu proyecto digital.',
  keywords: ['contacto', 'consultas', 'desarrollo web', 'SEO', 'servicios', 'ayuda'],
  openGraph: {
    title: 'Contacto - Mi Proyecto SEO',
    description: 'Ponte en contacto con nosotros para consultas sobre desarrollo web y SEO',
    url: 'https://mi-proyecto-seo.com/contacto',
    type: 'website',
    images: [
      {
        url: '/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacto - Mi Proyecto SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Mi Proyecto SEO',
    description: 'Ponte en contacto con nosotros',
    images: ['/og-contacto.jpg'],
  },
}

export default function ContactoPage() {
  return (
    <div className="container py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Contacto
        </h1>
        <p className="text-xl text-light" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          ¿Tienes preguntas sobre desarrollo web, SEO o necesitas ayuda con tu proyecto? 
          Estamos aquí para ayudarte.
        </p>
      </header>

      <div className="grid lg-grid-cols-2" style={{ gap: '3rem' }}>
        {/* Formulario de Contacto */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Envíanos un Mensaje
          </h2>
          
          <form className="space-y-6">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="form-input"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto" className="form-label">
                Asunto *
              </label>
              <select
                id="asunto"
                name="asunto"
                required
                className="form-select"
              >
                <option value="">Selecciona un asunto</option>
                <option value="seo">Consulta sobre SEO</option>
                <option value="desarrollo">Desarrollo Web</option>
                <option value="optimizacion">Optimización de Sitio</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">
                Mensaje *
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                required
                className="form-textarea"
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Enviar Mensaje
            </button>
          </form>
        </section>

        {/* Información de Contacto */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Información de Contacto
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-light">contacto@mi-proyecto-seo.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-light">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-light">
                  123 Calle Principal<br />
                  Ciudad, País 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Horario de Atención</h3>
                <p className="text-light">
                  Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">¿Necesitas ayuda inmediata?</h3>
            <p className="text-light mb-4">
              Para consultas urgentes o soporte técnico, no dudes en contactarnos 
              directamente por teléfono o email. Respondemos en menos de 24 horas.
            </p>
            <a 
              href="mailto:contacto@mi-proyecto-seo.com"
              className="btn btn-primary"
              style={{ fontSize: '0.875rem' }}
            >
              Enviar Email Directo
              <svg style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* Schema.org JSON-LD para Contacto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto - Mi Proyecto SEO",
            "url": "https://mi-proyecto-seo.com/contacto",
            "description": "Página de contacto para consultas sobre desarrollo web y SEO",
            "mainEntity": {
              "@type": "Organization",
              "name": "Mi Proyecto SEO",
              "email": "contacto@mi-proyecto-seo.com",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Calle Principal",
                "addressLocality": "Ciudad",
                "addressCountry": "País",
                "postalCode": "12345"
              }
            }
          })
        }}
      />
    </div>
  )
}