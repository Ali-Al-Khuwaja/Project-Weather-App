import { loadWeather } from './src/app/app';
import { setupWeatherForm } from './src/ui/dom';

// inject app logic into ui logic
setupWeatherForm(loadWeather);
