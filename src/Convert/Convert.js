import React from 'react';
import './Convert.css';

class Convert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0

      }
    }
    
    static getDerivedStateFromProps(props, state) {
      return {rate: props.rate};
    }

    calcRate = (e) => {
      e.preventDefault();
      let elements = e.target.elements;
      let countCurrency = elements['count-currency'].value;
      let typeCurrency = elements['type-currency'].value;
      this.setState({result: (countCurrency / this.state.rate[typeCurrency]) })
    }
  
  render() {
  return (
    <div className="convert">
      <h3>Currency Convertor</h3>
          <div className="block">
            <div>
              <form onSubmit={this.calcRate}>
                <input type="number" name="count-currency"/>
                <select name="type-currency" id="">
                  {Object.keys(this.props.rate).map((keyName, i) => 
                    ( 
                      <option key={keyName} value={keyName}>{keyName}</option>
                    )
                  )}
                </select>
                <input type="submit" defaultValue="calc" />
              </form>  
            </div>
            <div>
              <h4>Result</h4>
              <div className="calc-res">
                <p>EUR {this.state.result.toFixed(2)}</p>
              </div>
            </div>
        </div>
        
    </div>
   );
  }
}

export default Convert;
