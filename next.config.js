/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes optimizadas
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Optimizaciones de compilación
  compiler: {
    // Eliminar console.log en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Configuración experimental
  experimental: {
    // Mejoras de rendimiento
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Seguridad
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // SEO y rendimiento
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ],
      },
      // Headers específicos para el sitemap
      {
        source: '/api/sitemap',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ],
      },
      // Headers para robots.txt
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ],
      },
      // Headers para archivos estáticos
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ]
  },

  // Redirects permanentes
  async redirects() {
    return [
      // Ejemplo de redirect de URLs antiguas
      {
        source: '/old-blog/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      }
    ]
  },

  // Configuración de trailing slash
  trailingSlash: false,

  // Optimizaciones de bundle
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders } = options;
    
    // Análisis de bundle en desarrollo
    if (process.env.ANALYZE === 'true') {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: true,
      })
      return withBundleAnalyzer(config)
    }

    // Optimizaciones adicionales
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname),
      }
    }

    return config
  },

  // Variables de entorno públicas
  env: {
    SITE_URL: process.env.SITE_URL || 'https://mi-proyecto-seo.com',
    SITE_NAME: 'Mi Proyecto SEO',
  },

  // Configuración de salida (para exportación estática si es necesario)
  // output: 'export', // Descomenta si necesitas exportación estática
  
  // Configuración de Power
  poweredByHeader: false,

  // Configuración de compresión
  compress: true,

  // Configuración de internacionalización (opcional)
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },
}

module.exports = nextConfig