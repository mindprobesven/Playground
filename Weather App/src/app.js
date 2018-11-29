import './main.scss';

import ScenesHeader from 'Scenes/Header/header';
import ScenesWeather from 'Scenes/Weather/weather';

let DOM = {};

class App {
  
  init() {
    this.initDOM();
    this.initApp();
  }

  initDOM() {
    const header = document.createElement('div');
    header.setAttribute('id', 'app-header');
    header.setAttribute('class', 'app-header');
    
    const scene = document.createElement('div');
    scene.setAttribute('id', 'app-scene');
    scene.setAttribute('class', 'app-scene');
  
    DOM = {
      header: header,
      scene: scene
    };
  }

  initApp() {
    document.body.appendChild(DOM.header);
    document.body.appendChild(DOM.scene);
  
    const scenesHeader = new ScenesHeader();
    DOM.header.appendChild(scenesHeader.getComponent());

    const scenesWeather = new ScenesWeather();
    DOM.scene.appendChild(scenesWeather.getComponent());
  }
}

export default App;