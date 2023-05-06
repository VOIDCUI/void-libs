import React from 'react';

import { ISliderProps } from './interface';
import RectCode from './rectCode';
import SliderJigsaw from './sliderJigsaw';

interface VerifyCodeType extends React.FC<ISliderProps> {
  SliderJigsaw: typeof SliderJigsaw;
  RectCode: typeof RectCode;
}
export const VerifyCode = SliderJigsaw as VerifyCodeType;
VerifyCode.SliderJigsaw = SliderJigsaw;
VerifyCode.RectCode = RectCode;

export default VerifyCode;
