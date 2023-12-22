import axios from 'axios';

import { storageHelper } from '../../../shared/helpers';

const getAddress = async (queryString: string) => {
  const lang = storageHelper('local').get('lng');

  const url = `https://nominatim.openstreetmap.org/?addressdetails=1&format=geojson&limit=50&extratags=1&namedetails=1&q=${queryString}&accept-language=${lang}`;

  const response = await axios.get(url);

  return response.data;
};

export { getAddress };
