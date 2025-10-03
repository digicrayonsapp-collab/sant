// libs/sanity.js
// Next.js-friendly Sanity client helpers (no tokens in the browser)

// Use NEXT_PUBLIC_* for values that must be readable by the browser.
// Keep tokens server-only (never NEXT_PUBLIC_*).
import {createClient} from 'next-sanity'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fw9wz9er'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Pin to a date; bump when you depend on newer fields/APIs
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-01'

// Anonymous read client (safe for client components and edge)
// Uses CDN in production for speed; no token here.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published'
})

// Server-only token for privileged reads/writes (get it from env on the server)
// Do not import this into client components.
const serverToken =
  process.env.SANITY_API_TOKEN || process.env.SANITY_STUDIO_TOKEN || ''

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: serverToken || undefined, // omit if empty
  useCdn: false,
  perspective: 'published'
})

// Preview client (drafts). Call only on the server with a valid token.
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

// Small helpers
export async function fetchSanity(query, params = {}, options = {}) {
  return client.fetch(query, params, options)
}

export async function fetchSanityServer(query, params = {}, options = {}) {
  return serverClient.fetch(query, params, options)
}
