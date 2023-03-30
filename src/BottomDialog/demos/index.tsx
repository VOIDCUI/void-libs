/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-24 15:50:17
 * @LastEditors  : VOIDCUI
 * @LastEditTime : 2023-03-30 14:23:36
 * @Description  : Description
 */

import React, { useState } from 'react';
import { BottomDialog } from 'void-libs';

const Demo = () => {
  const [show, setShow] = useState(false);
  const onClose = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  return (
    <>
      <button onClick={open} type="button">
        打开
      </button>
      {show}

      <BottomDialog
        show={show}
        title="分享课程"
        intro="看看这是啥玩意"
        afterClose={onClose}
      >
        <div className="shareIntroduceModal-container-header">
          <span>分享课程</span>
        </div>
      </BottomDialog>
    </>
  );
};

export default Demo;
