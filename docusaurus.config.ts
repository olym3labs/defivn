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

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'defi.vn'}],

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
    metadata: [
      {name: 'description', content: 'Bách khoa toàn thư về tài chính phi tập trung'},
      {name: 'og:title', content: 'DeFi.vn'},
      {name: 'og:description', content: 'Bách khoa toàn thư về tài chính phi tập trung'},
      {name: 'og:image', content: 'img/defivn-social-card.png'},
      {name: 'og:url', content: 'https://defi.vn'},
      {name: 'og:type', content: 'website'},
      {name: 'twitter:image', content: 'img/defivn-social-card.png'},
      {name: 'twitter:title', content: 'DeFi.vn'},
      {name: 'twitter:description', content: 'Bách khoa toàn thư về tài chính phi tập trung'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:domain', content: 'defi.vn'},
      {name: 'twitter:url', content: 'https://defi.vn'},
    ],
    // Replace with your project's social card
    image: 'img/defivn-social-card.png',
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
      style: 'light',
      links: [
        {
          title: 'Nội dung',
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
          title: 'Cộng đồng',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/892179592453953',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/defivn/defivn/discussions',
            }
          ],
        },
        {
          title: 'Mã nguồn',
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
