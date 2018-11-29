import WeatherOutput from 'Scenes/Weather/components/Output/output';

let DOM = {};

class WeatherMenu {

  getComponent() {
    this.initDOM();
    return this.initComponent();    
  }

  initDOM() {
    const container = document.createElement('div');
    container.setAttribute('id', 'weather-menu-content');
    container.setAttribute('class', 'weather-menu-content');
    
    DOM = {
      container: container,
      menuButtons: [] 
    }
  }

  initComponent(){
    DOM.menuButtons = this.initMenu();
    return DOM.container;
  }

  initMenu() {
    let buttons = [];
    
    const locations = [
      {
        id: 'Barcelona',
        location: 'Barcelona'
      },
      {
        id: 'Madrid',
        location: 'Madrid'
      },
      {
        id: 'Paris',
        location: 'Paris'
      },
      {
        id: 'Berlin',
        location: 'Berlin'
      }
    ];

    locations.map(({ id, location }) => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('data-id', location);
      button.innerHTML = location;
      buttons.push(button);
    });

    buttons.map(button => {
      DOM.container.appendChild(button);
    });

    this.eventHandlers();

    return buttons;
  }

  eventHandlers() {
    DOM.container.addEventListener('click', (event) => {
      if(event.target.type === 'button') {
        const button = event.target;
        
        DOM.menuButtons.map(button => {
          button.classList.remove('selected');
        });
        button.classList.toggle('selected');
        
        const location = event.target.getAttribute('data-id');
        
        const weatherOutput = new WeatherOutput();
        weatherOutput.updateOutput(location);
      }
    });
  }

}

export default WeatherMenu;