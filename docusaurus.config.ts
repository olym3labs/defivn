import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DeFi.vn',
  tagline: 'Bách khoa toàn thư về tài chính phi tập trung',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://defi.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'defivn', // Usually your GitHub org/user name.
  projectName: 'defivn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/defivn/defivn/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/defivn/defivn/tree/main',
          blogSidebarTitle: 'Tất cả bài viết',
          blogSidebarCount: 20,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/defi-vn-social-card.jpg',
    navbar: {
      title: 'DeFi.vn',
      logo: {
        alt: 'DeFi-vn-logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defivnSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
        {to: '/blog', label: 'Bài viết', position: 'left'},
        {
          href: 'https://github.com/defivn/defivn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tài liệu',
              to: '/docs/gioi-thieu',
            },
            {
              label: 'Bài viết',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/892179592453953',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/defivn/defivn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DeFivn. Xây dựng bởi Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
