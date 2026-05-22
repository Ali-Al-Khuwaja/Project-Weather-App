import { getWeather } from '../api/weatherapi';
import { normalizeWeather } from '../domain/weather';

export async function loadWeather(city) {
  const raw = await getWeather(city);

  // Inject API logic into Domain logic
  const weather = normalizeWeather(raw);
  return weather;
}
