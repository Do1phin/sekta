import type { ISelectItemContent } from '../../../shared/ui/Select/Select.types';
import type { CountryCodeType, IOSMAddress, IWaypoint, PlaceNameType } from '../api/types';

import countries from '../../../shared/helpers/country-flag-emoji-json@2.0.0.json';

const selectFlagByCountryCode = (countryCode: CountryCodeType): string => {
  const flag = countries.filter((item) => {
    return item.code.toLowerCase() === countryCode.toLowerCase();
  });

  return flag ? flag[0].image : '';
};

const selectCountryNameByCountryCode = (countryCode: CountryCodeType): string => {
  const countryName = countries.filter((country) => {
    return country.code.toLowerCase() === countryCode.toLowerCase();
  });

  return countryName[0].name;
};

const convertWaypointDataToSelectContent = (waypoint: IWaypoint): ISelectItemContent => {
  const createSelectItemDescription = (address: IOSMAddress | undefined): string => {
    return address ? address.country : '';
  };

  const createSelectItemTitle = (address: IOSMAddress | undefined): string => {
    console.log('createTitle', address);

    if (!address) {
      return '';
    }

    const parts: string[] = [];

    if (address.town) {
      parts.push(`${address?.town}`);
    }
    if (address.city) {
      parts.push(`${address?.city}`);
    }
    if (address.village) {
      parts.push(`${address?.village}`);
    }
    if (address.hamlet) {
      parts.push(`${address?.hamlet}`);
    }
    if (address.isolated_dwelling) {
      parts.push(`${address?.isolated_dwelling}`);
    }

    return parts.join(', ');
  };

  const createSelectItemSubtitle = (address: IOSMAddress | undefined): string => {
    if (!address) {
      return '';
    }

    const parts: string[] = [];

    if (address.state) {
      parts.push(address.state);
    }
    if (address.county) {
      parts.push(`${address.county}`);
    }
    if (address.state_district) {
      parts.push(`${address.state_district}`);
    }
    if (address.district) {
      parts.push(`${address.district}`);
    }

    return parts.join(', ');
  };

  const selectIconNameByOSMPlace = (placeType: PlaceNameType) => {
    console.log('selectIconForCategory', placeType);
    const places = {
      // capital: 'capital',
      city: 'city',
      clinic: 'clinic',
      country: 'country',
      county: 'county',
      hamlet: 'hamlet',
      island: 'island',
      state: 'state',
      town: 'town',
      village: 'village',
    };

    // @ts-ignore
    return places[placeType] ?? 'alien';
  };

  return {
    description: createSelectItemDescription(waypoint.properties?.address),
    description_icon: selectFlagByCountryCode(waypoint.properties?.address?.country_code),
    icon: selectIconNameByOSMPlace(waypoint.properties?.addresstype),
    subtitle: createSelectItemSubtitle(waypoint.properties?.address),
    title: createSelectItemTitle(waypoint.properties?.address),
    value: waypoint.properties?.osm_id,
  };
};

export {
  selectCountryNameByCountryCode,
  selectFlagByCountryCode,
  convertWaypointDataToSelectContent,
};
