export default {
  widgets: [
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
                  buildHookId: '5f4f6416e3b6fa84c10f89f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wv9kj7jp',
                  apiId: '38088efd-88f5-48a1-8aac-09213bf28d54'
                },
                {
                  buildHookId: '5f4f6417e3b6fa85fa0f9053',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vz319xcv',
                  apiId: '084cc36a-9f42-4ade-85da-058a2c2316c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chipsterss/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vz319xcv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
