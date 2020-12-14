export default {
  widgets: [
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
                  buildHookId: '5fd7772f30106d57bad716f2',
                  title: 'Sanity Studio',
                  name: 'prospective-studio',
                  apiId: '4c315105-1097-4c0e-8abc-5dd8c9035a02'
                },
                {
                  buildHookId: '5fd7772f358b5a4ade5f5b6b',
                  title: 'Blog Website',
                  name: 'prospective-web',
                  apiId: '1e708095-9bf1-4355-8661-f800e03d0874'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/prospective',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://prospective-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
