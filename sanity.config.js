// sanity.config.js
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/index.js'
import {defaultStructure} from './structure.js'

export default defineConfig({
  name: 'default',
  title: 'Dcrayons Main website',
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'fw9wz9er',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({structure: defaultStructure}),
    visionTool()
  ],
  schema: {
    types: schemaTypes
  }
})
