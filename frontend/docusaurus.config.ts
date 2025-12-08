import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {

  
  title: 'ROBOTICS ERA',
  tagline: 'The Future of Physical AI, Embodied Intelligence, and Humanoid Robotics',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
future: {
  v4: true,
},


  // Set the production url of your site here
  url: 'https://HezziCode.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/physical-ai-and-humanoid-robotics-book/',   // ya '/hackathon-book/'
  organizationName: 'HezziCode',
  projectName: 'physical-ai-and-humanoid-robotics-book',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ur'],
  path: 'i18n',
},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: './docs',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ROBOTICS ERA',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
footer: {

  links: [
    {
      title: 'Learn',
      items: [
        { label: 'Start Your Journey', to: '/docs' },
        { label: 'Full Curriculum', to: '/docs' },
        { label: 'Learning Path', to: '/docs' },
      ],
    },
    {
      title: 'Community',
      items: [
        { label: 'YouTube', href: 'https://www.youtube.com/@Huzaifasys' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/huzaifasys/' },
        { label: 'Instagram', href: 'https://www.instagram.com/huzaifasys' },
        { label: 'Facebook', href: 'https://www.facebook.com/huzaifasys' },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'GitHub Repository',
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
        {
          label: 'AI Native Specification',
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
        {
          label: 'Example Projects',
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          label: 'HezziCode',
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
        {
          label: 'Our Mission',
          href: 'https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built by Huzaifa.`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
