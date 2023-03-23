import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'CUI',
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: true,
    rtl: true,
    footer:
      'Copyright © 2022-2022 void-lib. All Rights Reserved. void-lib 版权所有. 苏ICP备2022018060号',
    nav: {
      'zh-CN': [
        {
          title: '指南',
          link: '/guide/introduce',
        },
        {
          title: '组件',
          link: '/components/countdown-button',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/VOIDCUI/void-tools',
        },
      ],
    },
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  //   apiParser:{},
  //   resolve: {
  //     // 配置入口文件路径，API 解析将从这里开始
  //     entryFile: './src/index.tsx',
  //   },
});
