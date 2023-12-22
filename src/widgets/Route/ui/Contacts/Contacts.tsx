import React from 'react';
import { useTranslation } from 'react-i18next';

import css from './Contacts.module.scss';
import { Button } from '../../../../shared/ui';

const Contacts = () => {
  const { t } = useTranslation();

  const image = '';

  return (
    <div className={css['contacts-wrapper']}>
      <p className={css.title}>{t('component.cargo-settings.contact-persons')}</p>
      <div className={css.person}>
        <div className={css.avatar}>{image && <img src='' alt='Person avatar' />}</div>
        <div className={css.names}>
          <p className={css.position}>Менеджер</p>
          <p className={css.name}>Чепуха Елена Викторовна</p>
          <p className={css.company}>SkyPolymer Co</p>
        </div>
        <div className={css.buttons}>
          <Button
            onClick={() => alert('#')}
            icon={'phone'}
            type={'secondary'}
            size={'extra-large'}
          />
          <Button
            onClick={() => alert('#')}
            icon={'messenger'}
            type={'secondary'}
            size={'extra-large'}
          />
        </div>
      </div>
    </div>
  );
};

export { Contacts };
