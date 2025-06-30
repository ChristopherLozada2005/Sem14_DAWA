import { MetadataRoute } from 'next'

// Datos simulados (en producción vendrían de una base de datos)
const blogPosts = [
  { slug: 'guia-seo-nextjs', lastModified: new Date('2025-01-15') },
  { slug: 'optimizacion-imagenes-web', lastModified: new Date('2025-01-10') },
  { slug: 'lazy-loading-react-nextjs', lastModified: new Date('2025-01-05') }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mi-proyecto-seo.com'

  // Páginas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Páginas dinámicas del blog
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}

// Función adicional para generar sitemap con datos de API externa
export async function generateSitemapFromAPI(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mi-proyecto-seo.com'
  
  try {
    // Simular fetch de datos de una API o CMS
    // const response = await fetch('https://api.example.com/posts')
    // const posts = await response.json()
    
    // Por ahora usamos datos estáticos
    const posts = blogPosts
    
    const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    }))

    const staticRoutes: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/contacto`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
    ]

    return [...staticRoutes, ...dynamicRoutes]
  } catch (error) {
    console.error('Error generando sitemap desde API:', error)
    
    // Fallback a sitemap básico en caso de error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ]
  }
}