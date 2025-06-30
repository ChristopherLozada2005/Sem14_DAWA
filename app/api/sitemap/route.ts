import { NextResponse } from 'next/server'

// Simulación de datos de una base de datos o CMS
const blogPosts = [
  { slug: 'guia-seo-nextjs', lastmod: '2025-01-15' },
  { slug: 'optimizacion-imagenes-web', lastmod: '2025-01-10' },
  { slug: 'lazy-loading-react-nextjs', lastmod: '2025-01-05' }
]

const products = [
  { slug: 'servicio-seo', lastmod: '2025-01-20' },
  { slug: 'desarrollo-web', lastmod: '2025-01-18' },
  { slug: 'consultoria-digital', lastmod: '2025-01-12' }
]

export async function GET() {
  const baseUrl = 'https://mi-proyecto-seo.com'
  
  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contacto`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7'
    }
  ]

  // Páginas dinámicas del blog
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.lastmod,
    changefreq: 'weekly',
    priority: '0.6'
  }))

  // Páginas de productos/servicios
  const productPages = products.map(product => ({
    url: `${baseUrl}/servicios/${product.slug}`,
    lastmod: product.lastmod,
    changefreq: 'monthly',
    priority: '0.5'
  }))

  // Combinar todas las páginas
  const allPages = [...staticPages, ...blogPages, ...productPages]

  // Generar XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

// Función para regenerar el sitemap (puede ser llamada por webhooks)
export async function POST(request: Request) {
  try {
    const { secret } = await request.json()
    
    // Verificar token de seguridad
    if (secret !== process.env.SITEMAP_REVALIDATION_SECRET) {
      return NextResponse.json(
        { error: 'Token de acceso inválido' }, 
        { status: 401 }
      )
    }

    // Aquí podrías agregar lógica para refrescar datos desde una base de datos
    // o CMS cuando se publique nuevo contenido
    
    return NextResponse.json(
      { 
        message: 'Sitemap regenerado correctamente',
        timestamp: new Date().toISOString()
      }, 
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al regenerar sitemap' }, 
      { status: 500 }
    )
  }
}