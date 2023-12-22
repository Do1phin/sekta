import cx from 'classnames';
import React, { FC, useEffect, useState } from 'react';

import css from './MapLayers.module.scss';
import { storageHelper } from '../../../../shared/helpers';
import icon from '../../../../shared/icons/layers.svg';
import { Radio } from '../../../../shared/ui';
import { getMapLayerDataByOption, mapLayersData } from '../../helpers/tilesProviders';

interface IMapLayersProps {
  baseLayerName?: string;
  setBaseLayerName: (layerName: string) => void;
}

const MapLayers: FC<IMapLayersProps> = (props) => {
  const { baseLayerName, setBaseLayerName } = props;

  const [isLayersShow, setLayersShow] = useState(false);
  const [hoveredLayerName, setHoveredLayerName] = useState<string>('');

  const onMouseEnterHandler = () => {
    setLayersShow(true);
  };

  const onMouseLeaveHandler = () => {
    setLayersShow(false);
    setHoveredLayerName('');
  };

  // const getLayerPreviewByName = (layerName: string) => {
  //   return getMapLayerDataByOption(layerName, 'previewImage');
  // };

  useEffect(() => {
    const savedLayerName = storageHelper('local').get('baseLayer');

    if (baseLayerName && baseLayerName !== savedLayerName) {
      storageHelper('local').set('baseLayer', baseLayerName);
    }
  }, []);

  useEffect(() => {
    baseLayerName && storageHelper('local').set('baseLayer', baseLayerName);
  }, [baseLayerName]);

  return (
    <div
      className={cx(css['layers-control'], { [css.show]: isLayersShow })}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}>
      {!isLayersShow && <img src={icon} className={css.icon} alt='Layers' />}
      {isLayersShow && (
        <>
          <div className={css.content}>
            {mapLayersData.map((layer) => (
              <Radio
                onChange={() => setBaseLayerName(layer.name)}
                checked={baseLayerName === layer.name}
                onMouseEnter={() => setHoveredLayerName(layer.name)}
                key={layer.name}
                label={layer.name}
                value={layer.name}
              />
            ))}
          </div>
          {hoveredLayerName && (
            <div className={css.preview}>
              <picture>
                <img
                  src={
                    hoveredLayerName && getMapLayerDataByOption(hoveredLayerName, 'previewImage')
                  }
                  alt='Layer preview'
                />
              </picture>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { MapLayers };
