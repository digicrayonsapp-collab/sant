import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'fw9wz9er',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
