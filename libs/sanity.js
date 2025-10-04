import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fw9wz9er'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published'
})

const serverToken = process.env.SANITY_API_TOKEN || process.env.SANITY_STUDIO_TOKEN || ''

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: serverToken || undefined,
  useCdn: false,
  perspective: 'published'
})

export function getPreviewClient(token = serverToken) {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
    perspective: 'previewDrafts'
  })
}
