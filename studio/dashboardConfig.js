export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd6957d05c7691f26f09273',
                  title: 'Sanity Studio',
                  name: 'sanity-studio-pst6up9k',
                  apiId: 'b1ff2ce7-8942-4104-a1d7-4238f083568e'
                },
                {
                  buildHookId: '5dd6957dee6385177a4e877b',
                  title: 'Landing pages Website',
                  name: 'sanity-web',
                  apiId: '7273e1e5-452c-43d0-ad05-01fe13404e43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haugenandre/sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
