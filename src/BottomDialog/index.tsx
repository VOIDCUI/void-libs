/*
 * @Author       : cuiguiming
 * @Date         : 2023-03-24 11:08:19
 * @LastEditors  : VOIDCUI
 * @LastEditTime : 2023-03-30 14:30:02
 * @Description  : Description
 */

type Timer = ReturnType<typeof setTimeout>;

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './index.less';

interface BottomDialogProps {
  show: boolean;
  isAnimate?: boolean;
  hideOnClickBg?: boolean;
  afterClose?: () => void;
  className?: string;
  title?: string;
  intro?: string;
  displayReturnButton?: boolean;
  bghide?: boolean;
  children?: React.ReactNode;
}

const BottomDialog = (options: BottomDialogProps) => {
  const {
    show,
    isAnimate = true,
    hideOnClickBg = true,
    afterClose = () => {},
    className = '',
    title = '',
    intro = '',
    displayReturnButton = true,
    children,
  } = options;

  const [dialogShow, setDialogShow] = useState(show); // 是否展示dialog
  const [displayDialogContent, setDisplayDialogContent] = useState(!isAnimate); // 是否展示dialog的内容区域

  let timer: Timer | undefined = undefined;

  /**
   * 关闭dialog
   */
  const close = () => {
    if (isAnimate) {
      setDisplayDialogContent(false);
      timer = setTimeout(() => {
        setDialogShow(false);
        afterClose?.();
      }, 300);
    } else {
      setDialogShow(false);
      afterClose?.();
    }
  };

  /**
   * 点击dialog的背景
   */
  const clickBgHandler = () => {
    if (hideOnClickBg) {
      close();
    }
  };

  /**
   * 打开dialog
   */
  const open = () => {
    setDialogShow(true);
    if (isAnimate) {
      setDisplayDialogContent(true);
    }
  };

  useEffect(() => {
    if (show) {
      !dialogShow && open();
    } else {
      dialogShow && close();
    }
    return timer && clearTimeout(timer);
  }, [show]);

  return createPortal(
    <section
      className={`co-bottom-dialog ${className} ${
        dialogShow ? 'visible-dialog' : 'hidden-dialog'
      }`}
    >
      <div
        className={`dialog-bg ${
          isAnimate && displayDialogContent && 'animate-show-bg'
        } ${isAnimate && !displayDialogContent && 'animate-hide-bg'}`}
        onClick={clickBgHandler}
      />
      <section
        className={`main ${
          isAnimate && displayDialogContent && 'animate-show-main'
        } ${isAnimate && !displayDialogContent && 'animate-hide-main'}`}
      >
        {title || intro ? (
          <header className="dialog-header">
            <h1 className="title elli">{title}</h1>
            {displayReturnButton && (
              <div className="return-btn" onClick={close} />
            )}
          </header>
        ) : null}
        <main className="content">{children}</main>
      </section>
    </section>,
    document.body,
  );
};

export default BottomDialog;
