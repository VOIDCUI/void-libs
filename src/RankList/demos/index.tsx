/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-22 11:03:45
 * @LastEditors  : error: git config user.name & please set dead value or install git
 * @LastEditTime : 2023-03-22 11:03:45
 * @Description  : Description
 */

import React from 'react';
import { RankList } from 'void-libs';

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
