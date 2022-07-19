export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d6ee5c0266b70978a99780',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cfize8a1',
                  apiId: '6c27b12f-cd95-4a47-8af2-e86fa2ebea5a'
                },
                {
                  buildHookId: '62d6ee5d0f9013098a0da3c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h5mrsv4b',
                  apiId: 'c54b6be9-3d4d-4537-8594-9e3d740f1585'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mike-Cohen-KariusDX/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h5mrsv4b.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
