import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Programming Notes",
  tagline: "The way to coding, from beginner to master",
  favicon: "img/favicon.ico",

  url: "https://pro.tomartisan.com",
  baseUrl: "/",

  organizationName: "tomartisan",
  projectName: "programming-notes",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/tomartisan/programming-notes/tree/master/doc-site",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-KKPJWZERMC",
          anonymizeIP: false,
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
    image: "img/docusaurus-social-card.jpg",
    docs: {
      versionPersistence: "localStorage",
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "Home",
      logo: {
        alt: "Programming Notes Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "golangSidebar",
          position: "left",
          label: "Go",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar",
          position: "left",
          label: "Python",
        },
        {
          type: "docSidebar",
          sidebarId: "rustSidebar",
          position: "left",
          label: "Rust",
        },
        {
          type: "docSidebar",
          sidebarId: "kotlinSidebar",
          position: "left",
          label: "Kotlin",
        },
        {
          type: "docSidebar",
          sidebarId: "swiftSidebar",
          position: "left",
          label: "Swift",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://github.com/tomartisan/programming-notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Help",
          items: [
            {
              label: "What is this",
              to: "/docs/intro",
            },
            {
              label: "How to use",
              to: "/docs/usage",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "X",
              href: "https://x.com/tomartisan",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@itomartisan",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Chinese Posts",
              href: "https://tomartisan.com",
            },
            {
              label: "English Posts",
              href: "https://tomartisan.medium.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Programming Notes, Inc. Built with Docusaurus.`,
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
