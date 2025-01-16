import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PyLang',
  tagline: 'Python learning notes',
  favicon: 'img/favicon.ico',


  url: 'https://pylang.tomartisan.com',
  baseUrl: '/',

  organizationName: 'tomartisan',
  projectName: 'PyLang',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: "detect",
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/tomartisan/pylang/tree/master/pynotes',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 1080, // max resized image's size.
        min: 320, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'PyLang Home',
      logo: {
        alt: 'PyLang Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'basicSidebar',
          position: 'left',
          label: 'Basic',
        },
        {
          type: 'docSidebar',
          sidebarId: 'advancedSidebar',
          position: 'left',
          label: 'Advanced',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frameworksSidebar',
          position: 'left',
          label: 'Frameworks',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'For API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'aiSidebar',
          position: 'left',
          label: 'For AI',
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: 'https://github.com/tomartisan/pylang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: 'What is this',
              to: '/docs/intro',
            },
            {
              label: 'How to use',
              to: '/docs/usage',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/tomartisan',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@imtomartisan',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://tomartisan.com',
            },
            {
              label: 'Contact',
              href: 'mailto:hello@tangkunyin.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PyLang, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: "article img",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      config: {
        margin: 30,
        scrollOffset: 0,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
