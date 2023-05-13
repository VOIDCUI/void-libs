---
title: 滑块验证码
nav:
  title: 移动端
  path: /mobile
group:
  title: 移动端
---

# VerifyCode 滑块验证码

滑块验证码

## 基础使用

<code src="./demos/index.tsx"></code>

## 参数

| 参数         | 说明             | 类型                                           | 默认值      |
| ------------ | ---------------- | ---------------------------------------------- | ----------- |
| width        | 容器宽           | `number`                                       |             |
| height       | 容器高           | `number`                                       |             |
| jigsawSize   | 拼图大小         | `'medium &#124; small &#124; large'`           | small       |
| imgSource    | 背景图片集       | `string[]`                                     | [url1,url2] |
| isAutoReload | 验证失败自动刷新 | `boolean`                                      | true        |
| onRefresh    | 点击刷新按钮回调 | `() => void`                                   |             |
| onSuccess    | 验证成功回调     | `() => void`                                   |             |
| onRefresh    | 点击刷新按钮回调 | `() => void`                                   |             |
| onFail       | 验证失败回调     | `() => void`                                   |             |
| customVerify | 自定义验证规则   | `(current: number, target: number) => boolean` |             |
