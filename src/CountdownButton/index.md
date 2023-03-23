---
title: CountdownButton 倒计时按钮
nav:
  title: 移动端
  path: /mobile
group:
  title: 移动端
---

# CountdownButton 倒计时按钮

倒计时按钮常应用于获取手机、邮箱验证码等业务场景。

## 基础使用

<code src="./demos/index.tsx"></code>

## 参数

| 参数         | 说明                                                                                                 | 类型                                    | 默认值                                        |
| ------------ | ---------------------------------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------- |
| maxSecondNum | 最大秒数                                                                                             | number                                  | 60                                            |
| txt          | 按钮默认文本                                                                                         | string                                  | 获取验证码                                    |
| loadingTxt   | 加载时按钮文本                                                                                       | string                                  | 发送中                                        |
| disabledTxt  | 禁用时按钮文本                                                                                       | (s: number) => string;                  | (s) => `${s} 秒后重试`                        |
| onClick      | 点击按钮时触发的函数，其参数 completeCallback 需要在接口请求完毕后调用，用于告知组件接口请求已完成。 | (completeCallback: () => void) => void; | (completeCallback) => { completeCallback(); } |

除以上 API 外，倒计时按钮还支持 Button 组件（Ant Design）的所有 API 。
