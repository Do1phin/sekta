import type { IWaypoint } from '../../../../features/find-address/api/types';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import css from './WaypointPopup.module.scss';
import { getWaypointTypeName } from '../../../../features/create-waypoint/helpers/mapHelpers';
import { selectFlagByCountryCode } from '../../../../features/find-address/helpers/converting.helper';
import { QrCode } from '../../../../shared/entities';
import { storageHelper } from '../../../../shared/helpers';
import addressIcon from '../../../../shared/icons/address-location-map.svg';
import waypointPopupIcons from '../../../../shared/icons/waypoint_popup-icons.svg';
import { Button, Textarea } from '../../../../shared/ui';
import { createLocalityAlternativeName } from '../../helpers';

interface IWaypointPopupProps {
  waypoint: IWaypoint;
}

const WaypointPopup: FC<IWaypointPopupProps> = (props) => {
  const { waypoint } = props;

  const { t } = useTranslation();

  const [isShowQrCodes, setShowQrCodes] = useState(false);
  const [isEditableComment, setEditableComment] = useState(true);
  const [comment, setComment] = useState('some text');

  const langPage = storageHelper('local').get('i18nextLng');

  useEffect(() => {
    console.log('isShowQrCodes', isShowQrCodes);
  }, [isShowQrCodes]);

  const waypointMenuBtnClickHandler = () => {
    setEditableComment(!isEditableComment);
  };

  const qrCodesBtnClickHandler = () => {
    setShowQrCodes(!isShowQrCodes);
  };

  const cancelEditingCommentBtnClickHandler = () => {
    setEditableComment(!isEditableComment);
  };

  const copyWaypointInfoBtnClickHandler = () => {
    navigator.clipboard
      .writeText('copyText.value')
      .then(() => {
        return console.log('Content copied to clipboard');
      })
      .catch(() => {
        return console.error('Failed to copy');
      });
  };

  const saveCommentBtnClickHandler = () => {
    setEditableComment(!isEditableComment);
  };

  const flagIcon = selectFlagByCountryCode(waypoint.properties?.address?.country_code);

  return (
    <div className={css['waypoint-popup']}>
      <div className={css.header}>
        {waypoint.system_properties.waypoint_type && (
          <div className={css.type}>
            <picture className={css.icon}>
              <svg>
                <use
                  xlinkHref={`${waypointPopupIcons}#${waypoint.system_properties.waypoint_type}`}
                />
              </svg>
            </picture>
            <span>{t(getWaypointTypeName(waypoint.system_properties.waypoint_type))}</span>
          </div>
        )}

        <div className={css.controls}>
          <Button
            onClick={waypointMenuBtnClickHandler}
            icon={'edit'}
            size={'large'}
            type={isEditableComment ? 'secondary' : 'default'}
          />
          <Button
            onClick={copyWaypointInfoBtnClickHandler}
            icon={'copy'}
            size={'large'}
            type={'default'}
          />
          <Button
            onClick={qrCodesBtnClickHandler}
            icon={'qr-code'}
            size={'large'}
            type={isShowQrCodes ? 'secondary' : 'default'}
          />
        </div>
      </div>

      <div className={css.body}>
        <p className={css['body__raw']}>
          <span className={css['raw-title']}>{t('page.map.country')}:</span>
          <img src={flagIcon} className={css['country-flag']} alt='Country flag' />
          {waypoint.properties?.address?.country}
        </p>
        {waypoint.properties?.address?.state && (
          <p className={css['body__raw']}>
            <span className={css['raw-title']}>{t('page.map.state')}:</span>

            {waypoint.properties?.address?.state}
          </p>
        )}
        {waypoint.properties?.address?.district && (
          <p className={css['body__raw']}>
            <span className={css['raw-title']}>{t('page.map.district')}:</span>

            {waypoint.properties?.address?.district}
          </p>
        )}
        {waypoint.properties?.address?.state_district && (
          <p className={css['body__raw']}>
            <span className={css['raw-title']}>{t('page.map.state_district')}:</span>

            {waypoint.properties?.address?.state_district}
          </p>
        )}
        {waypoint.properties?.address?.municipality && (
          <p className={css['body__raw']}>
            <span className={css['raw-title']}>{t('page.map.municipality')}:</span>

            {waypoint.properties?.address?.municipality}
          </p>
        )}
        <p className={css['body__raw']} title={createLocalityAlternativeName(waypoint)}>
          <span className={css['raw-title']}>{t('page.map.locality')}:</span>

          {waypoint.properties?.namedetails?.['name:' + langPage]
            ? waypoint.properties?.namedetails?.['name:' + langPage]
            : waypoint.properties?.name}
        </p>
        <p className={css['body__raw']}>
          <span className={css['raw-title']}>{t('page.map.current-point')}:</span>

          {'coordinates' in waypoint.geometry &&
            waypoint.geometry?.coordinates?.length &&
            `N ${waypoint.geometry?.coordinates[1]}, E ${waypoint.geometry?.coordinates[0]}`}
        </p>

        <div className={css['body__comment']}>
          <span className={css['raw-title']}>{t('page.map.comment')}:</span>

          <Textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            disabled={!isEditableComment}
          />
          {isEditableComment && (
            <div className={css.buttons}>
              <Button
                onClick={cancelEditingCommentBtnClickHandler}
                type={'secondary'}
                style={'danger'}
                text={'Отмена'}
              />
              <Button onClick={saveCommentBtnClickHandler} style={'success'} text={'Сохранить'} />
            </div>
          )}
        </div>
      </div>

      {isShowQrCodes && (
        <div className={css['qr-codes']}>
          {waypoint.properties?.display_name && (
            <QrCode
              value={waypoint.properties?.display_name}
              icon={addressIcon}
              sizePx={100}
              title={'ADDRESS'}
            />
          )}
        </div>
      )}
    </div>
  );
};

export { WaypointPopup };
