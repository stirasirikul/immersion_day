import React from 'react';
import ReactDOM from 'react-dom';
import MyTable from './myTable';
export default class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    render() {
      return (
        <MyTable />
      );
    }
}
