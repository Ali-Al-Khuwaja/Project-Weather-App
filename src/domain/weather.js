export function normalizeWeather() {
  //   return {
  //     city: data.resolvedAddress,
  //     temperature: data.currentConditions.temp,
  //     conditions: data.currentConditions.conditions,
  //     uvIndex: data.currentConditions.uvindex,
  //   };
  return {
    resolvedAddress: 'Test City',
    currentConditions: {
      temp: 20,
      feelslike: 18,
      uvindex: 5,
      conditions: 'Sunny',
    },
  };
}
