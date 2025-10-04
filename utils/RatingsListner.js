import { useEffect } from 'react'
import { useClient, useFormValue } from 'sanity'

export default function RatingListener() {
  const client = useClient({ apiVersion: '2023-12-01' })

  const rating = useFormValue(['ratingsAndReviews', 'rating'])
  const influencerRef = useFormValue(['influencerId'])
  const currentOrderId = useFormValue(['_id'])

  useEffect(() => {
    if (!influencerRef || !influencerRef._ref || typeof rating !== 'number') return

    const influencerId = influencerRef._ref
    const baseId = influencerId.replace(/^drafts\./, '')
    const draftId = `drafts.${baseId}`

    const orderId = typeof currentOrderId === 'string' ? currentOrderId : ''
    const orderBaseId = orderId.replace(/^drafts\./, '')
    const orderDraftId = `drafts.${orderBaseId}`

    const processRatingUpdate = async () => {
      try {
        await client
          .patch(orderBaseId)
          .set({ ratingsAndReviews: { rating } })
          .commit({ autoGenerateArrayKeys: true })
        console.log(`[ratings] Updated published order rating for ${orderBaseId}`)

        const orderDraftExists = await client.getDocument(orderDraftId)
        if (orderDraftExists) {
          await client.delete(orderDraftId)
          console.log(`[ratings] Deleted order draft ${orderDraftId}`)
        }

        const influencerDraftExists = await client.getDocument(draftId)
        if (influencerDraftExists) {
          await client.delete(draftId)
          console.log(`[ratings] Deleted influencer draft ${draftId}`)
        }

        const query = `
          *[_type == "Orders" && influencerId._ref == $influencerId && !(_id in path("drafts.**"))] {
            _id,
            ratingsAndReviews { rating }
          }
        `
        const publishedOrders = await client.fetch(query, {
          influencerId: baseId,
        })

        const allRatings = publishedOrders
          .map((order) => {
            if (order._id === orderBaseId) {
              return rating
            }
            const existing = order?.ratingsAndReviews?.rating
            return typeof existing === 'number' && !Number.isNaN(existing) ? existing : null
          })
          .filter((entry) => entry !== null)

        const avg =
          allRatings.length > 0
            ? Number((allRatings.reduce((sum, entry) => sum + entry, 0) / allRatings.length).toFixed(2))
            : 0

        await client
          .patch(baseId)
          .set({ averageRating: avg })
          .commit({ autoGenerateArrayKeys: true })

        console.log(`[ratings] Updated influencer averageRating to ${avg} for ${baseId}`)
      } catch (error) {
        console.error('[ratings] Error updating rating', error)
      }
    }

    processRatingUpdate()
  }, [rating, influencerRef, currentOrderId, client])

  return null
}
