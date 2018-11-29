import 'Scenes/Weather/weather.scss';

import WeatherMenu from 'Scenes/Weather/components/Menu/menu';
import WeatherOutput from 'Scenes/Weather/components/Output/output';
import NotificationsAlert from 'Components/notifications/alert/alert';

let DOM = {};

class ScenesWeather {

  getComponent() {
    this.initDOM();
    return this.initComponent();    
  }

  initDOM() {
    const container = document.createElement('div');
    container.setAttribute('id', 'scenes-weather');
    container.setAttribute('class', 'scenes-weather');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'weather-menu');
    menu.setAttribute('class', 'weather-menu');

    const output = document.createElement('div');
    output.setAttribute('id', 'weather-output');
    output.setAttribute('class', 'weather-output');

    DOM = {
      container: container,
      menu: menu,
      output: output
    };
  }

  initComponent() {
    const notificationsAlert = new NotificationsAlert();
    DOM.container.appendChild(notificationsAlert.getComponent());

    const weatherMenu = new WeatherMenu();
    DOM.menu.appendChild(weatherMenu.getComponent());
    DOM.container.appendChild(DOM.menu);

    const weatherOutput = new WeatherOutput();
    DOM.output.appendChild(weatherOutput.getComponent());
    DOM.container.appendChild(DOM.output);

    return DOM.container;
  }
}

export default ScenesWeather;