import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme';
import Logo from "./components/Logo"


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'OSCAR_Content_Studio',
  title: "OSCAR Content Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],
  studio: {
    // components: {
    //   logo: Logo
    // }
  },

  schema: {
    types: schemaTypes,
  },
  theme: myTheme
})
