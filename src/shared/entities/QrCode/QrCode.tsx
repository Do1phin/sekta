import { QRCodeSVG } from 'qrcode.react';
import React, { FC } from 'react';

import css from './QrCode.module.scss';

interface IQrCodeProps {
  icon?: string;
  sizePx?: number;
  title?: string;
  value: string;
}

const QrCode: FC<IQrCodeProps> = (props) => {
  const { title, value, icon, sizePx } = props;

  return (
    <div className={css['qr-codes-wrapper']}>
      <div className={css.code}>
        <QRCodeSVG
          value={value}
          size={sizePx}
          bgColor={'#ffffff'}
          fgColor={'#2b2b2b'}
          level={'L'}
          includeMargin={false}
          imageSettings={
            icon
              ? {
                  excavate: true,
                  height: 24,
                  src: icon,
                  width: 24,
                  x: undefined,
                  y: undefined,
                }
              : undefined
          }
        />
      </div>
      <span className={css.title}>{title}</span>
    </div>
  );
};

export { QrCode };
