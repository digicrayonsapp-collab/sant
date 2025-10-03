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
        // 1. Patch published order with new rating
        await client
          .patch(orderBaseId)
          .set({ ratingsAndReviews: { rating } })
          .commit({ autoGenerateArrayKeys: true })
        console.log(`✏️ Updated published order rating for: ${orderBaseId}`)

        // 2. Delete order draft if exists
        const orderDraftExists = await client.getDocument(orderDraftId)
        if (orderDraftExists) {
          await client.delete(orderDraftId)
          console.log(`🗑️ Deleted order draft: ${orderDraftId}`)
        }

        // 3. Delete influencer draft if exists
        const influencerDraftExists = await client.getDocument(draftId)
        if (influencerDraftExists) {
          await client.delete(draftId)
          console.log(`🗑️ Deleted influencer draft: ${draftId}`)
        }

        // 4. Fetch all published orders for influencer (including current order)
        const query = `
          *[_type == "Orders" && influencerId._ref == $influencerId && !(_id in path("drafts.**"))] {
            _id,
            ratingsAndReviews { rating }
          }
        `
        const publishedOrders = await client.fetch(query, {
          influencerId: baseId,
        })

        // 5. Replace old rating of current order with new rating and filter invalid ratings
        const allRatings = publishedOrders
          .map(order => {
            if (order._id === orderBaseId) {
              return rating // use new rating
            }
            const r = order?.ratingsAndReviews?.rating
            return typeof r === 'number' && !isNaN(r) ? r : null
          })
          .filter(r => r !== null)

        // 6. Calculate average rating
        const avg =
          allRatings.length > 0
            ? Number((allRatings.reduce((sum, r) => sum + r, 0) / allRatings.length).toFixed(2))
            : 0

        await client
          .patch(baseId)
          .set({ averageRating: avg })
          .commit({ autoGenerateArrayKeys: true })

        console.log(`📢 Updated influencer averageRating to ${avg} for: ${baseId}`)
      } catch (error) {
        console.error('❌ Error updating rating:', error)
      }
    }

    processRatingUpdate()
  }, [rating, influencerRef, currentOrderId, client])

  return null
}
