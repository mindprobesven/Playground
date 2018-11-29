import 'Components/notifications/alert/alert.scss';

let DOM = {};

class NotificationsAlert {
  getComponent() {
    this.initDOM();
    return this.initComponent();
  }

  initDOM() {
    const container = document.createElement('div');
    container.setAttribute('id', 'notifications');
    container.setAttribute('class', 'notifications');

    const alert = document.createElement('div');
    alert.setAttribute('id', 'alert');
    alert.setAttribute('class', 'alert');

    DOM = {
      container: container,
      alert: alert
    };
  }

  initComponent() {
    DOM.container.appendChild(DOM.alert);
    return DOM.container;
  }

  show() {
    DOM.alert.innerHTML = `
      <div class="message">Loading...</div>
      <div class="icon">
      <i class="fa fa-spinner"></i>
      <i class="fa fa-check-circle-o"></i>
      </div>
    `;

    if(DOM.container.classList.contains('hide')) {
      DOM.container.classList.remove('hide');
    }

    DOM.container.classList.add('show');

  }

  hide() {
    if(DOM.container.classList.contains('show')) {
      DOM.container.classList.remove('show');
    }

    DOM.container.classList.add('hide');
  }
}

export default NotificationsAlert;