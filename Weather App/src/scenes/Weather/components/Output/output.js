import WeatherAPI from 'Services/api/weather';
import ProcessWeatherData from 'Scenes/Weather/components/Output/services/processWeatherData';
import NotificationsAlert from 'Components/notifications/alert/alert';

let DOM = {};

class WeatherOutput {

  getComponent() {
    this.initDOM();
    return this.initComponent();    
  }

  initDOM() {
    const container = document.createElement('div');
    container.setAttribute('id', 'weather-output-content');
    container.setAttribute('class', 'weather-output-content');

    DOM = {
      container: container
    }
  }

  initComponent() {
    this.updateOutput();
    return DOM.container;
  }

  async updateOutput(location = 'Barcelona') {    
    DOM.container.innerHTML = '';
    if(DOM.container.classList.contains('show'))
      DOM.container.classList.remove('show');
    
    const notificationsAlert = new NotificationsAlert();
    notificationsAlert.show();
 
    setTimeout(async () => { 
      const weatherAPI = new WeatherAPI();
      const weatherData = await weatherAPI.getWeather(location);
      
      notificationsAlert.hide();
      
      if(weatherData.type === 'error') {
        DOM.container.innerHTML = weatherData.message;
      }
      else {
        DOM.container.innerHTML = `<h1>Weather ${location}</h1>`;
        
        const processWeatherData = new ProcessWeatherData();
        const weatherOutput = await processWeatherData.getAnimatedList(weatherData.main);

        DOM.container.appendChild(weatherOutput);
      }
      
      DOM.container.classList.add('show');      
    }, 750);
  }
}

export default WeatherOutput;