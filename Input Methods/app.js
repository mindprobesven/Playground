'use strict';

let initApp = () => {
  console.log('Init...');

  let form = document.getElementById('form1');

  form.onkeyup = (event) => {
    if (event.target.type == 'text') {
      console.log(event.target.name + ' : ' + event.target.value);
    }
  }

  form.onclick = (event) => {
    if(event.target.type == 'radio' && event.target.name == 'crust') {
      console.log(event.target.value);
    }
    else if(event.target.type == 'checkbox' && event.target.name == 'device') {
      console.log(event.target.getAttribute('data-id') + ' : ' + event.target.checked);
    }
  }

  form.onsubmit = (event) => {
    event.preventDefault();

    console.log('Submitting form...');
  }

  let selectOS = document.getElementById('selectOS');

  selectOS.onchange = () => {
    let selection = selectOS.options[selectOS.selectedIndex].text;
    console.log(selection);
  }
}

window.onload = initApp();