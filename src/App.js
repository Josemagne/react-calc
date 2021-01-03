import './styles/style.min.css';
import React,{ Component } from 'react';
import Zahl from './components/Zahl/Zahl';
import Operator from './components/Operator/Operator';

class App extends Component {
  state = {
    zahlen: [
      {nummer : 1, id : 'nummer1'},
      {nummer : 2, id : 'nummer2'},
      {nummer : 3, id : 'nummer3'},
      {nummer : 4, id : 'nummer4'},
      {nummer : 5, id : 'nummer5'},
      {nummer : 6, id : 'nummer6'},
      {nummer : 7, id : 'nummer7'},
      {nummer : 8, id : 'nummer8'},
      {nummer : 9, id : 'nummer9'}
    ],
    operatoren: [
      {operator: '+', id: 'operator1'},
      {operator: '-', id: 'operator2'},
      {operator: '*', id: 'operator3'},
      {operator: ':', id: 'operator4'},
      {operator: '.', id: 'operator5'}
    ],
    operation: '',
  }



  addNummer = (nummer) => { // add the number to the textarea
    const operation = this.state.operation + nummer;
    this.setState({operation});
  }

  addOperator = (operator) => {
    // add space for readability
    const operation = this.state.operation + ' ' + operator + ' ';
    this.setState({operation});
  }

  calculate = () => { // : becomes /
        // delete all whitespace
    const input = this.state.operation.replaceAll(' ', '');
    const operatoren = /[*/:+]/;
    let expressions = {};
    let delimiter = {};
    let delimiterIndex = 1;
    let lastPosition = 0;
    let expressionIndex = 1;
    for (let i=1; i<input.length; i++) {
      if (operatoren.test(input[i])) {
        expressions[expressionIndex] = input.slice(lastPosition, i);
        expressionIndex++;
        delimiter[delimiterIndex] = input[i];
        delimiterIndex++;
        lastPosition = i+1;
      }
    }
    if (!operatoren.test(input[input.length-1])) {
      expressions[expressionIndex] = input.slice(lastPosition, input.length);
    }
    let groups = createGroups;
    const createGroups = () => {
      let finalGroups = [];
      let length = Object.keys(delimiter);
    }

    const result = () => {
      
    }
  }

  render() {
    return (
      <section className="container">
        <article className="result">
          <textarea className="inputField" defaultValue={this.state.operation}>
          </textarea>
        </article>
        <article className="clear">
          <button type="button" className="clearButton" onClick={
            () => this.setState({operation: ''})
          }>clear</button>
        </article>
        <article className="content">
          <ul className="zahlen">
            {this.state.zahlen.map(
              (zahl) => {
                const { nummer, id } = zahl;
                return <Zahl nummer={nummer}
                key={id} id={id} addNummer={this.addNummer}/>
              }
            )}
          </ul>
          <ul className="operatoren">
            {this.state.operatoren.map( (elem) => {
              const { operator, id } = elem;
              return <Operator key={id} id={id} operator={operator}
              addOperator={this.addOperator} />
            }
            )}
            <li><button type="button" onClick={
              () => this.calculate()
            }>=</button></li>
          </ul>
        </article>
      </section>
  );
  }

}

export default App;
