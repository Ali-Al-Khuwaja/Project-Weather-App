// import { getWeather } from '../api/weatherapi';
import { normalizeWeather } from '../domain/weather';

export async function init() {
  //   const raw = await getWeather();
  const weather = normalizeWeather();
  console.log(weather);
}
