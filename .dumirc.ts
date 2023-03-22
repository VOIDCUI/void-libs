import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'void-libs',
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
