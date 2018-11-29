import 'Scenes/Header/header.scss';

let DOM = {};

class ScenesHeader {

  getComponent() {
    this.initDOM();
    return this.initComponent();
  }

  initDOM() {
    const container = document.createElement('div');
    container.setAttribute('id', 'scenes-header');
    container.setAttribute('class', 'scenes-header');

    const headline = document.createElement('div');

    DOM = {
      container: container,
      headline: headline
    }
  }

  initComponent() {
    DOM.headline.innerHTML = `<h1>Weather App</h1>`;
    DOM.container.appendChild(DOM.headline);
    
    return DOM.container;
  }

}

export default ScenesHeader;