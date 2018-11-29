import React, { Component } from 'react';

const InputField = ({currency, amount, onInputChange}) => {
  function handleChange(e) {
    onInputChange(e.target.value);
  }
  
  return(
    <input type="text" value={amount} onChange={handleChange} />
  );
};

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: 'EUR'
    };
  }

  handleEuroChange(amount) {
    this.setState({
      amount,
      currency: 'EUR'
    });
  }
  
  handleDollarChange(amount) {
    this.setState({
      amount,
      currency: 'USD'
    });
  }

  render() {
    const amount = this.state.amount;
    const currency = this.state.currency;

    const euros = currency === 'USD' ? convertAmount(amount, toEuros) : amount;
    const dollars = currency === 'EUR' ? convertAmount(amount, toDollars) : amount;

    return (
      <div>
        <div className="forex-input">
          <label>Euros</label>
          <br />
          <InputField currency="EUR" amount={euros} onInputChange={(amount) => this.handleEuroChange(amount)} />
          <br />
          <br />
          <label>Dollars</label>
          <br />
          <InputField currency="USD" amount={dollars} onInputChange={(amount) => this.handleDollarChange(amount)} />
        </div>
        <div className="forex-advisor">
          <p>Buy Dollars!</p>
        </div>
        <div></div>
      </div>
    );
  };
}

const toEuros = (amount) => {
  return amount / 2;
};

const toDollars = (amount) => {
  return amount * 2;
};

const convertAmount = (amount, convert) => {
  const value = parseFloat(amount);
  
  if(Number.isNaN(value)) {
    return '';
  }
  
  const output = convert(amount);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
};

export default App;