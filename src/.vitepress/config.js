export default {
    title: "Lightning Docs",
    outDir: '../docs',
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'Lightning Docs' }],
        ['meta', { property: 'og:title', content: 'Lightning Docs' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:image:alt', content: 'Lightning Docs' }],
        ['meta', { property: 'og:image:type', content: 'image/png' }]
    ],
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        siteTitle: "Lightning Docs",
        logo: '/favicon.png',
        lastUpdated: true,
        footer: {
            message: 'Released under the MIT License',
            copyright: `Copyright © 2023 - Lightning`
        },
        algolia: {
            appId: 'T3PMIFY1UE',
            apiKey: '5f80b0fffb765a7ac2fc6859fca2c82e',
            indexName: 'lightning-bot'
        },
        nav: [
            {
                text: 'Introduction',
                link: '/intro/'
            },
            {
                text: 'FAQ',
                link: '/faq/'
            }
        ],
        sidebar: [
            {
                text: 'Information',
                collapsible: true,
                items: [
                    { text: '👋 Introduction', link: '/intro/' },
                    { text: '❓ Frequently Asked Questions', link: '/faq/' },
                ],
            },
            {
                text: 'Commands',
                collapsible: true,
                items: [
                    { text: '⚙ Admin', link: '/commands/admin.md' },
                    { text: '🐺 Anime', link: '/commands/anime.md' },
                    { text: '💸 Economy', link: '/commands/economy.md' },
                    { text: '🎈 Fun', link: '/commands/fun.md' },
                    { text: '🎁 Giveaways', link: '/commands/giveaways.md' },
                    { text: '📷 Image', link: '/commands/image.md' },
                    { text: '📄 Information', link: '/commands/information.md' },
                    { text: '📨 Invites', link: '/commands/invites' },
                    { text: '🔨 Moderation', link: '/commands/moderation' },
                    { text: '👩🏻‍🤝‍🧑🏼 Social', link: '/commands/social.md' },
                    { text: '💡 Suggestions', link: '/commands/suggestions' },
                    { text: '🎫 Tickets', link: '/commands/tickets' },
                    { text: '🏗 Utility', link: '/commands/utility.md' },
                ]
            }
        ]
    }
}
