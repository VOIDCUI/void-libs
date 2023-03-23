/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-22 10:57:26
 * @LastEditors  : error: git config user.name & please set dead value or install git
 * @LastEditTime : 2023-03-22 10:59:49
 * @Description  : Description
 */
import React, { useState } from 'react';
import { CountdownButton } from 'void-libs';

function CountdownButtonDemo() {
  const [loading, setLoading] = useState<boolean>(false);

  const getCode = async () => {
    setLoading(true);
    try {
      return await new Promise((resolve) =>
        // eslint-disable-next-line no-promise-executor-return
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
