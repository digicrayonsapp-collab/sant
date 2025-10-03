// schemas/index.js
// Sanity v4 schema registry
// If you add a new schema file, import it here and add to schemaTypes.

import { singlePage } from './singlePage.js'
import { about } from './about.js'
import { testimonial } from './testimonialRepeater.js'
import { brandList } from './brand.js'
import { Achievements } from './achievement.js'
import { ServicesLanding } from './servicesLanding.js'
import { bannerImageTwoContent } from './bannerImageTwoContentComp.js'
import { testimonialBlock } from './testimonialComp.js'
import { contactUsBlock } from './contactUsBlockComp.js'
import { faq } from './faqRepeater.js'
import { faqArea } from './faqComponent.js'
import { faqPage } from './faqPage.js'
import { workFlow } from './workFlowComp.js'
import { serviceBannerBlock } from './serviceBannerComp.js'
import { servicePricing } from './pricingComp.js'
import { servicesDetail } from './serviceDetail.js'
import { ourClientsBlock } from './ourClientsComp.js'
import { careerDetail } from './careerDetail.js'
import { careerFieldsBlock } from './careerFieldsComp.js'
import { storyAreaBlock } from './storyAreaComp.js'
import { careerLanding } from './careerLanding.js'
import { jobsBlock } from './jobComponent.js'
import { careerBenefitsBlock } from './careerBenefitsComp.js'
import { postDetail } from './postDetail.js'
import { postLanding } from './postLanding.js'
import { workDetail } from './workDetail.js'
import { workLanding } from './workLanding.js'
import { workCategoriesBlock } from './workCategoryComp.js'
import { contact } from './contact.js'
import { contactUsAddressBlock } from './contactUsAddressComp.js'
import { footerDetailsBlock } from './footerDetailsComp.js'
import { socialMediaLinks } from './socialMediaLinksComp.js'
import { newsLetterBlock } from './newsLetterComp.js'
import { defaultTemplate } from './defaultTemplate.js'
import { homePage } from './homePage.js'
import { aboutArea2Block } from './aboutArea2Comp.js'
import { homeHero } from './homeHero.js'
import { serviceArea1Block } from './serviceArea1Comp.js'
import { primaryMenu } from './primaryMenu.js'
import { menuItem } from './menuItems.js'
import { secondaryMenu } from './secondaryMenu.js'
import { footerMenu } from './footerMenu.js'
import { landingPage } from './landingPage.js'
import { categoryBanner } from './categoryBanner.js'
import { blogCategoriesBlock } from './blogCategoryComp.js'
import { industryDetail } from './industryDetail.js'
import { toolsPage } from './toolsPage.js'
import { toolsComponentBlock } from './toolsComponentBlock.js'
import { titleWithTwoContentBlock } from './titleWithTwoContentComp.js'
import { influencerForm } from './influencerForm.js'
import { instagramViralHooks } from './instagramViralHooks.js'
import { influencerLanding } from './influencerLanding.js'
import { signup } from './signup.js'
import { Authentication } from './authentication.js'
import { Orders } from './order.js'
import { brandsDetail } from './brandsDetail.js'
import { influencerReviews } from './InfluencersReview.js'
import { message } from './message.js'
import { gigDetail } from './gigDetails.js'
import { gigLanding } from './gigLanding.js'
import { influencerRatings } from './influencerRatings.js'
import { ImageWithDescriptionComp } from './ImageWithDescriptionComp.js'
import { ClientsAndAwardsComp } from './ClientsAndAwardsComp.js'
import { serviceBlogsComp } from './ServiceBlogsComp.js'
import { serviceHero } from './serviceHero.jsx'
import { aiImage } from './aiImage.js'
import { aiLanding } from './aiPromptLanding.js'
import { toolDetail } from './tools.js'
import { toolLanding } from './toolLanding.js'
import { Videos } from './video.js'
import { Technologies } from './technology.js'
import { TechnologyLanding } from './technologyLanding.js'

// Grouped for sanity (ha)
export const schemaTypes = [
  // ***** Core pages *****
  homePage,
  singlePage,          // <-- previously missing; now registered
  landingPage,
  defaultTemplate,

  // ***** Navigation *****
  primaryMenu,
  menuItem,
  secondaryMenu,
  footerMenu,

  // ***** Blog / Work *****
  postLanding,
  postDetail,
  workLanding,
  workDetail,
  blogCategoriesBlock,
  workCategoriesBlock,

  // ***** Services *****
  ServicesLanding,
  servicesDetail,
  serviceHero,
  serviceArea1Block,
  serviceBannerBlock,
  servicePricing,
  serviceBlogsComp,

  // ***** Careers *****
  careerLanding,
  careerDetail,
  jobsBlock,
  careerFieldsBlock,
  careerBenefitsBlock,

  // ***** Influencers / Gigs *****
  influencerLanding,
  influencerForm,
  instagramViralHooks,
  influencerReviews,
  influencerRatings,
  gigLanding,
  gigDetail,

  // ***** Brands / Categories *****
  brandsDetail,
  brandList,
  categoryBanner,

  // ***** Company / About *****
  about,
  aboutArea2Block,
  Achievements,
  storyAreaBlock,
  ClientsAndAwardsComp,
  ourClientsBlock,
  testimonial,
  testimonialBlock,

  // ***** Contact / Footer *****
  contact,
  contactUsBlock,
  contactUsAddressBlock,
  footerDetailsBlock,
  socialMediaLinks,
  newsLetterBlock,

  // ***** FAQ / Flows *****
  faqPage,
  faq,
  faqArea,
  workFlow,

  // ***** Tools / Tech / Media *****
  toolsPage,
  toolsComponentBlock,
  toolLanding,
  toolDetail,
  Technologies,
  TechnologyLanding,
  Videos,
  ImageWithDescriptionComp,
  titleWithTwoContentBlock,

  // ***** AI *****
  aiLanding,
  aiImage,

  // ***** Auth / Orders / Messaging *****
  Authentication,
  signup,
  Orders,
  message,

  // ***** Home-specific *****
  homeHero,
  bannerImageTwoContent,

  // ***** Industry *****
  industryDetail
]

// optional default export if you prefer `import schemaTypes from './schemas'`
export default schemaTypes
