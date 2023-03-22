---
title: CountdownButton 倒计时按钮
nav:
  title: 组件
---

# CountdownButton 倒计时按钮

倒计时按钮常应用于获取手机、邮箱验证码等业务场景。

## 基础使用

```jsx
import React, { useState } from 'react';
import { CountdownButton } from 'void-libs';

function CountdownButtonDemo() {
  const [loading, setLoading] = useState < boolean > false;

  const getCode = async () => {
    setLoading(true);
    try {
      return await new Promise((resolve) =>
        setTimeout(() => {
          resolve(123);
        }, 1000),
      );
    } catch (err) {
      throw new Error('failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CountdownButton
      loading={loading}
      onClick={async (completeCallback) => {
        const code = await getCode();
        console.log(`验证码：${code}`);
        completeCallback();
      }}
    >
      获取验证码
    </CountdownButton>
  );
}

export default CountdownButtonDemo;
```

<API id="CountdownButtonDemo"></API>

除以上 API 外，倒计时按钮还支持 Button 组件（Ant Design）的所有 API 。
