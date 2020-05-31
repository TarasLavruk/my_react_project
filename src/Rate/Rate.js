import React from 'react';
import './Rate.css';
import Convert from '../Convert/Convert'

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {

      }
    }
    this.currency = ['USD', 'CAD', 'GBP', 'HUF', 'INR', 'JPY', 'CNY']
    this.getRate();
  }
  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
    // fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange')
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data);
      this.setState({date: data.date})
      let result = {};
      for (let i=0; i<this.currency.length; i++) {
        result[this.currency[i]] = data.rates[this.currency[i]];
      }
      console.log(result);
      this.setState({currencyRate: result});
    });
  }
  render() {
  return (
    <div className="">
      <h3>Currency rate on {this.state.date}</h3>
      <div className="">
        {Object.keys(this.state.currencyRate).map((keyName, i) => 
          ( 
            <div className="" key={keyName}>
              <div className="">{keyName}</div>
              <div className="">{this.state.currencyRate[keyName].toFixed(3)}</div>
              <p>Can buy for 1 EUR</p>
            </div>
          )
        )}
      </div>
      <Convert rate={this.state.currencyRate}/>
    </div>
   );
  }
}

export default Rate;
