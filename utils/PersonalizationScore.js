import React, { useEffect } from 'react'
import { TextInput } from '@sanity/ui'
import { set, unset, useClient, useFormCallbacks, useFormValue } from 'sanity'

export default function PersonalizationScoreInput(props) {
  const { value, onChange } = props

  const client = useClient({ apiVersion: '2021-10-21' })
  const { setFieldValue } = useFormCallbacks()

  const reviewCount = useFormValue(['reviewCount'])
  const profileScore = useFormValue(['profileScore'])
  const followers = useFormValue(['followers'])
  const location = useFormValue(['location'])
  const categories = useFormValue(['categories'])
  const tags = useFormValue(['tags'])
  const orders = useFormValue(['orders'])
  const averageRating = useFormValue(['averageRating'])

  useEffect(() => {
    let followersNum = 0

    if (typeof followers === 'string') {
      if (followers === '1K - 10K') followersNum = 5000
      else if (followers === '10K - 100K') followersNum = 50000
      else if (followers === '100K - 500K') followersNum = 300000
      else if (followers === '500K - 1M') followersNum = 750000
      else if (followers === '1M+') followersNum = 1000000
    }

    const locationMatch = location === 'Delhi' ? 1 : 0
    const tagsMatch = Array.isArray(tags) && tags.includes('Dcrayons Choice') ? 1 : 0

    const normalizationFactor = 1000
    const scaledReviewCount =
      Math.log10((reviewCount || 1) + 1) / Math.log10(normalizationFactor + 1)

    const orderCount = Array.isArray(orders) ? orders.length : 0
    const normalizedOrderCount = Math.min(orderCount, 100) / 100
    const orderScore = normalizedOrderCount * 3

    const normalizedProfileScore = (profileScore || 0) / 100
    const normalizedFollowers = followersNum / 1000000

    const personalizationScore =
      (averageRating || 0) * 2.0 +
      scaledReviewCount * 3 +
      normalizedProfileScore * 5 +
      normalizedFollowers * 5 +
      locationMatch * 2 +
      tagsMatch * 3 +
      orderScore

    const roundedScore = Number(personalizationScore.toFixed(2))

    if (value !== roundedScore) {
      onChange(roundedScore === 0 ? unset() : set(roundedScore))
    }
  }, [
    averageRating,
    reviewCount,
    profileScore,
    followers,
    location,
    categories,
    tags,
    orders,
    value,
    onChange,
  ])

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(TextInput, {
      value: value ?? 0,
      readOnly: true,
      onChange,
    }),
    React.createElement(
      'p',
      { style: { color: 'gray' } },
      'Debug: Score component loaded'
    )
  )
}
