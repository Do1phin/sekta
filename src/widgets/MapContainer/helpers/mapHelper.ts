import { Feature } from 'geojson';

import { IInitialWaypoint, IWaypoint } from '../../../features/find-address/api/types';
import { storageHelper } from '../../../shared/helpers';

const createLocalityAlternativeName = (waypoint: IWaypoint | IInitialWaypoint) => {
  const langPage = storageHelper('local').get('i18nextLng');

  const namedetails = 'properties' in waypoint && waypoint.properties?.namedetails;

  if (!namedetails) {
    return '';
  } else {
    const parts: string[] = [];

    if (namedetails?.['name:' + langPage]) {
      parts.push(`${namedetails?.['name:' + langPage]}`);
    }
    if (namedetails?.['name:' + langPage + ':word_stress']) {
      parts.push(`, ${namedetails?.['name:' + langPage]}`);
    }
    if (namedetails?.['alt_name:' + langPage]) {
      parts.push(`, ${namedetails?.['alt_name:' + langPage]}`);
    }
    if (namedetails?.['int_name:']) {
      parts.push(`, ${namedetails?.['int_name:']}`);
    }
    if (namedetails?.['_place_name:' + langPage]) {
      parts.push(`, ${namedetails?.['_place_name:' + langPage]}`);
    }
    if (namedetails?.['name:UN:' + langPage]) {
      parts.push(`, ${namedetails?.['name:UN:' + langPage]}`);
    }
    if (namedetails?.['official_name:' + langPage]) {
      parts.push(`, ${namedetails?.['official_name:' + langPage]}`);
    }

    return parts.join('');
  }
};

const convertOSMFeatureToWaypoint = (
  feature: Feature,
  currentWaypoint: IInitialWaypoint,
): IWaypoint => {
  return {
    ...feature,
    system_properties: currentWaypoint.system_properties,
  };
};

export { createLocalityAlternativeName, convertOSMFeatureToWaypoint };
