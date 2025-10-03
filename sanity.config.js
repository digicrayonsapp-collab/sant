import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Dcrayons Main website',
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || 'fw9wz9er',
  dataset: "production",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})