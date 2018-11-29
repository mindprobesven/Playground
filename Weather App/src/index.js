import App from './app';

if (process.env.NODE_ENV !== 'production') {
  console.log('Development Mode...');
}
else {
  console.log('Production Mode...');
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});