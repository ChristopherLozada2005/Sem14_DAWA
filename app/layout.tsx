import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: {
    default: 'Mi Proyecto SEO - Aplicación Web Optimizada',
    template: '%s | Mi Proyecto SEO'
  },
  description: 'Aplicación web desarrollada con Next.js optimizada para SEO con meta tags dinámicos y sitemap automático',
  keywords: ['Next.js', 'SEO', 'React', 'Web Development', 'Optimización'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  publisher: 'Mi Proyecto SEO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mi-proyecto-seo.com',
    siteName: 'Mi Proyecto SEO',
    title: 'Mi Proyecto SEO - Aplicación Web Optimizada',
    description: 'Aplicación web desarrollada con Next.js optimizada para SEO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mi Proyecto SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Proyecto SEO',
    description: 'Aplicación web desarrollada con Next.js optimizada para SEO',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'tu-codigo-de-verificacion-de-google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <link rel="canonical" href="https://mi-proyecto-seo.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <nav className="nav">
          <div className="container">
            <h1 className="nav-brand">Mi Proyecto SEO</h1>
            <div className="nav-links">
              <a href="/" className="nav-link">Inicio</a>
              <a href="/blog" className="nav-link">Blog</a>
              <a href="/contacto" className="nav-link">Contacto</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Mi Proyecto SEO. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}