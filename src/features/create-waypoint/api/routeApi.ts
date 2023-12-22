import axios from 'axios';

const getRoute = async (coordinates: string) => {
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates}?alternatives=true&annotations=distance,duration,speed&continue_straight=false&geometries=geojson&language=de&overview=full&steps=true&access_token=pk.eyJ1IjoiZG8xcGhpbiIsImEiOiJjbDh2enpxd2MwOGxkM3ZwbDQ2bml0ZzZuIn0.4emq3XjT5Rj3x1wqPzUSDA`;

  const response = await axios.get(url);

  return response.data;
};

export { getRoute };
