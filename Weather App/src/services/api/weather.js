class WeatherAPI {
  async getWeather(location) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=de79534b42363ebe7ef8777844701ab3`;
    const fetchResponse = await fetch(url).catch(error => error);

    let response = {};

    if(fetchResponse.status === 200) {
      response = fetchResponse.json();
    }
    else {
      response = {
        type: 'error',
        message: 'Error - The weather API does not respond!'
      };
    }
    
    return response;
  }
}

export default WeatherAPI;