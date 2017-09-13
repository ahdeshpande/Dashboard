// import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import products from './json/Products.json'
import associate from './json/Associate.json'
import sales from './json/Sales.json'
import stores from './json/Stores.json'
import cities from './json/Cities.json'
import DateInput from './components/DateInput'
import DataTable from './components/DataTable';

// var products = require('../json/Products.json');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productData: products,
      startDate:''
    };

    console.log(products);
    console.log(associate);
    console.log(sales);
    console.log(stores);
    console.log(cities);
  }

  setStartDate(date){
    this.setState({
      startDate: date
    })
  }

  getData() {
    return this.state.productData;
  }

  render() {

    return (
      <div className="row">
      <div className="col-md-1">Duration:</div>
      <div className="col-md-5"><DateInput onDateChanged={this.setStartDate}/></div>
      <div className="col-md-5"><DateInput /></div>

      <div>What!!{this.state.startDate}</div>

      <div className="row"><DataTable data={this.state.productData}/></div>

      </div>
      );
    }
  }

  ReactDOM.render(<App/>, document.querySelector('.container'));
