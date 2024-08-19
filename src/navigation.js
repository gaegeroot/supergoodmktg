import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
    links: [
    {
      text: 'Start Here',
      href: getPermalink('/#problems'),
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    },
    {
        text: "Services",
        href: getPermalink('/#services'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#problems'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    },
     {
      text: 'The Nug',
      href: getBlogPermalink()
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Category Page',
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faqs')
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    },
   
  ],
    //   actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
    links: [
        // // {
        // //     title: 'Product',
        // //     links: [
        // //         { text: 'Features', href: '#' },
        // //         { text: 'Security', href: '#' },
        // //         { text: 'Team', href: '#' },
        // //         { text: 'Enterprise', href: '#' },
        // //         { text: 'Customer stories', href: '#' },
        // //         { text: 'Pricing', href: '#' },
        // //         { text: 'Resources', href: '#' },
        // //     ],
        // // },
        // {
        //     title: 'Platform',
        //     links: [
        //         { text: 'Developer API', href: '#' },
        //         { text: 'Partners', href: '#' },
        //         { text: 'Atom', href: '#' },
        //         { text: 'Electron', href: '#' },
        //         { text: 'AstroWind Desktop', href: '#' },
        //     ],
        // },
        // {
        //     title: 'Support',
        //     links: [
        //         { text: 'Docs', href: '#' },
        //         { text: 'Community Forum', href: '#' },
        //         { text: 'Professional Services', href: '#' },
        //         { text: 'Skills', href: '#' },
        //         { text: 'Status', href: '#' },
        //     ],
        // },
        // {
        //     title: 'Company',
        //     links: [
        //         { text: 'About', href: '#' },
        //         { text: 'Blog', href: '#' },
        //         { text: 'Careers', href: '#' },
        //         { text: 'Press', href: '#' },
        //         { text: 'Inclusion', href: '#' },
        //         { text: 'Social Impact', href: '#' },
        //         { text: 'Shop', href: '#' },
        //     ],
        // },
    ],
    secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
        { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/supergoodmktg' },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/supergaege/' },
        { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCXJp0sjyJRqXjraL_AhB8mg' },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: `
    Made by Gaege · All rights reserved
  `,
};
