'use strict';

var pizza;

var pizzaListController = {
  pizzas: [],
  generateID: function() {
    if(this.pizzas.length < 1) {
      return 1;
    }
  }
};

function Pizza() {
  this.id = null;
  this.name = '';
  this.size = 'Small';
  this.ingredients = [];

  this.initPizza = function(id) {
    this.id = id;
    
    console.log(this.id + " : " + this.size);
  };
}

window.onload = initApp();

function initApp() {
  console.log('Init...');

  pizza = new Pizza();
  pizza.initPizza(pizzaListController.generateID());

  initFormHandler();
}

function initFormHandler() {
  var form = document.getElementById('pizza-maker-form');
  var ingredients = [];

  form.onkeyup = function(event) {
    var obj = event.target;

    if(obj.type == 'text' && obj.name == 'pizzaName') {
      pizza.name = obj.value;
      updatePizzaPreview();
    }
  }

  form.onclick = function(event) {
    var obj = event.target;
    var filteredResults;

    if(obj.type == 'checkbox' && obj.name == 'ingredients') {
      if(obj.checked == true) { 
        
        filteredResults = ingredients.filter(function(ingredient) {
          if(ingredient == obj.getAttribute('data-id')) {
            return ingredient;
          }
        });

        if(filteredResults.length < 1) {
          ingredients.push(obj.getAttribute('data-id'));
        }
      }
      else if(obj.checked == false) {
        
        filteredResults = ingredients.filter(function(ingredient) {
          if(ingredient != obj.getAttribute('data-id')) {
            return ingredient;
          }
        });

        ingredients = filteredResults;
      }

      pizza.ingredients = ingredients;
      updatePizzaPreview();
    }
  }
}

function updatePizzaPreview() {
  var pizzaPreview = document.getElementById('pizza-data');
  pizzaPreview.innerHTML = JSON.stringify(pizza);
}

