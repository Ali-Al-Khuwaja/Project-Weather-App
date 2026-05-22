export function normalizeWeather(data) {
  // Get only needed data
  return {
    city: data.resolvedAddress,
    date: data.currentConditions.datetime,
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    conditions: data.currentConditions.conditions,
    uvIndex: data.currentConditions.uvindex,
    humidity: data.currentConditions.humidity,
  };
}
