---
title: RankList 排行榜
nav:
  title: 组件
---

# RankList 排行榜

排行榜组件用于简易排行榜业务场景。

## 基础使用

```jsx
import { RankList } from 'void-libs';
import React from 'react';

function RankListDemo() {
  const data = Array.from(new Array(10)).map((_, idx) => ({
    label: `选项${idx + 1}`,
    value: 10 - idx,
  }));

  return (
    <div>
      <RankList data={data}></RankList>
    </div>
  );
}

export default RankListDemo;
```
