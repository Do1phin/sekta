import type { PermittedAmenities, PermittedCountries, PermittedPlaces } from '../api/types';
import type { Feature } from 'geojson';

import { OSMAmenities, OSMCountryCodes } from '../api/types';

interface IFilterPoint {
  list: Feature[];
  permittedAmenities: PermittedAmenities;
  permittedCountries: PermittedCountries;
  permittedPlaces: PermittedPlaces;
}

const pointFilteringHelper = (props: IFilterPoint) => {
  const { list, permittedAmenities, permittedCountries, permittedPlaces } = props;

  const filteredList = list.filter((feature) => {
    const countryCode = feature?.properties?.address?.country_code as OSMCountryCodes;

    if (countryCode && countryCode in permittedCountries) {
      return permittedCountries[countryCode];
    }
    return [];
  });

  const filteredList2 = filteredList.filter((feature) => {
    const addresstype = feature?.properties?.addresstype;
    const type = feature?.properties?.type as OSMAmenities;

    if (addresstype && addresstype in permittedPlaces && type && type in permittedAmenities) {
      return (
        // @ts-ignore
        (addresstype !== 'amenity' && permittedPlaces[addresstype]) ||
        (addresstype === 'amenity' && permittedAmenities[type])
      );
    }
    return [];
  });

  return filteredList2;
};

export { pointFilteringHelper };
