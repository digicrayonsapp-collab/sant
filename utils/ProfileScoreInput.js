import React, { useEffect } from 'react'
import { TextInput } from '@sanity/ui'
import { set, unset, useFormValue } from 'sanity'

export default function ProfileScoreInput(props) {
  const { value, onChange } = props

  const nameValue = useFormValue(['name'])
  const emailValue = useFormValue(['email'])
  const introVideoValue = useFormValue(['introVideo'])
  const phoneValue = useFormValue(['phone'])
  const taglineValue = useFormValue(['tagline'])
  const socialMediaUrlsValue = useFormValue(['socialMediaUrls'])
  const languageSpokenValue = useFormValue(['languageSpoken'])
  const categoriesValue = useFormValue(['categories'])
  const imageValue = useFormValue(['image'])
  const followersValue = useFormValue(['followers'])
  const ratingReviewValue = useFormValue(['ratingReview'])
  const averageRatingValue = useFormValue(['averageRating'])
  const reviewCountValue = useFormValue(['reviewCount'])
  const ageGroupValue = useFormValue(['ageGroup'])
  const topPicksValue = useFormValue(['topPicks'])
  const userReachDemographicsValue = useFormValue(['userReachDemographics'])
  const aboutValue = useFormValue(['about'])
  const locationValue = useFormValue(['location'])
  const engagementRateValue = useFormValue(['engagementRate'])
  const avgViewsValue = useFormValue(['avgViews'])
  const avgLikesValue = useFormValue(['avgLikes'])
  const avgCommentsValue = useFormValue(['avgComments'])
  const tagsValue = useFormValue(['tags'])
  const genderValue = useFormValue(['gender'])
  const contentValue = useFormValue(['content'])
  const typeValue = useFormValue(['type'])
  const plansValue = useFormValue(['plans'])
  const productDetailsValue = useFormValue(['productDetails'])
  const globalMetaValue = useFormValue(['globalMeta'])

  useEffect(() => {
    let score = 0

    const hasValue = (val) => val !== null && val !== undefined && val !== ''
    const hasArrayValue = (arr) => Array.isArray(arr) && arr.length > 0

    if (hasValue(nameValue)) score += 1
    if (hasValue(emailValue)) score += 2
    if (hasValue(introVideoValue)) score += 1
    if (hasValue(phoneValue)) score += 1
    if (hasValue(taglineValue)) score += 2

    if (socialMediaUrlsValue) {
      if (hasValue(socialMediaUrlsValue.instaURl)) score += 1
      if (hasValue(socialMediaUrlsValue.facebookURl)) score += 1
      if (hasValue(socialMediaUrlsValue.youtubeURl)) score += 1
    }

    if (hasArrayValue(languageSpokenValue)) score += 2
    if (hasArrayValue(categoriesValue)) score += 2
    if (hasValue(imageValue)) score += 2
    if (hasValue(followersValue)) score += 2
    if (ratingReviewValue === true) score += 1
    if (hasValue(averageRatingValue)) score += 1
    if (hasValue(reviewCountValue)) score += 1
    if (hasValue(ageGroupValue)) score += 1

    if (topPicksValue) {
      if (hasValue(topPicksValue.url1)) score += 1
      if (hasValue(topPicksValue.url2)) score += 1
      if (hasValue(topPicksValue.url3)) score += 1
    }

    if (userReachDemographicsValue) {
      const city = userReachDemographicsValue.cityWiseDistribution
      if (city) {
        if (hasValue(city.delhi)) score += 1
        if (hasValue(city.mumbai)) score += 1
        if (hasValue(city.bangalore)) score += 1
      }
      const age = userReachDemographicsValue.ageWiseDistribution
      if (age) {
        if (hasValue(age.age18_24)) score += 1
        if (hasValue(age.age25_34)) score += 1
        if (hasValue(age.age35_44)) score += 1
      }
      const platform = userReachDemographicsValue.platformWiseDistribution
      if (platform) {
        if (hasValue(platform.instagram)) score += 1
        if (hasValue(platform.youtube)) score += 1
        if (hasValue(platform.facebook)) score += 1
      }
    }

    if (hasValue(aboutValue)) score += 2
    if (hasValue(locationValue)) score += 2
    if (hasValue(engagementRateValue)) score += 1
    if (hasValue(avgViewsValue)) score += 1
    if (hasValue(avgLikesValue)) score += 1
    if (hasValue(avgCommentsValue)) score += 1
    if (hasArrayValue(tagsValue)) score += 1
    if (hasValue(genderValue)) score += 2
    if (hasArrayValue(contentValue)) score += 10
    if (hasValue(typeValue)) score += 1
    if (hasArrayValue(plansValue)) score += 15

    if (productDetailsValue) {
      if (hasValue(productDetailsValue.ratingValue)) score += 1
      if (hasValue(productDetailsValue.reviewCount)) score += 1
      if (hasValue(productDetailsValue.servicePrice)) score += 1
      if (productDetailsValue.serviceAvailability === true) score += 1
    }

    if (globalMetaValue) {
      if (hasValue(globalMetaValue.metaTitle)) score += 1
      if (hasValue(globalMetaValue.metaDescription)) score += 1
      if (hasValue(globalMetaValue.metaImage)) score += 1
    }

    if (value !== score) {
      onChange(score === 0 ? unset() : set(score))
    }
  }, [
    nameValue,
    emailValue,
    introVideoValue,
    phoneValue,
    taglineValue,
    socialMediaUrlsValue,
    languageSpokenValue,
    categoriesValue,
    imageValue,
    followersValue,
    ratingReviewValue,
    averageRatingValue,
    reviewCountValue,
    ageGroupValue,
    topPicksValue,
    userReachDemographicsValue,
    aboutValue,
    locationValue,
    engagementRateValue,
    avgViewsValue,
    avgLikesValue,
    avgCommentsValue,
    tagsValue,
    genderValue,
    contentValue,
    typeValue,
    plansValue,
    productDetailsValue,
    globalMetaValue,
  ])

  return React.createElement(TextInput, {
    value: value ?? 0,
    readOnly: true,
    onChange,
  })
}
