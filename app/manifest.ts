import { MetadataRoute } from 'next'
import { siteMetadata } from '@/config/content'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.author,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
    icons: [],
  }
}
