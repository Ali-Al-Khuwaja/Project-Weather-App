export async function getWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current&key=V3S4XTWZG6S9BK8V8W7FBBB3G&contentType=json`
  );
  if (!response.ok) {
    throw new Error('An error occurred when fetching the api');
  }

  const data = await response.json();
  return data;
}
