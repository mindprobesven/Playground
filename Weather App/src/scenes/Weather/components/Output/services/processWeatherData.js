class ProcessWeatherData {
  getAnimatedList(weatherData) {
    return new Promise((resolve, reject) => {
      const list = document.createElement('ul');
      
      let counter = 0;
      for(const keys in weatherData) {        
        const item = document.createElement('li');
        item.innerHTML = `${keys} : ${weatherData[keys]}`;
        list.appendChild(item);
        
        counter++;
        setTimeout(() => {
          item.classList.add('animate');
        }, 100 * counter);
      }

      resolve(list);
    });
  }
}

export default ProcessWeatherData;