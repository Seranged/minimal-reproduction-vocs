import { defineConfig } from 'vocs'

export default defineConfig({
  font: { 
    google: 'Inter' 
  }, 
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
