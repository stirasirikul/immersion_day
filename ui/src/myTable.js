import React, { Component } from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class MyTable extends React.Component {
  constructor(props) {
    super(props);
    //this.componentDidMount();
    this.rows = [{"id":1,"first_name":"William2","last_name":"Elliott","email":"welliott0@wisc.edu","country":"Argentina","ip_address":"247.180.226.89"}];
    //Restfulservices.get();
    //this.rows = {this.props.restfullist};
    this.state = {
       filteredDataList: [],
       sortBy: 'id',
       sortDir: null
    };
  }
  render() {
    var sortDirArrow = '';
    //this.rows = {this.props.restfullist};
    if (this.state.sortDir !== null){
      sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
    }
    //this.componentDidMount();
      // return <Table
      //   height={40+((this.state.filteredDataList.length+1) * 30)}
      //   width={1150}
      //   rowsCount={this.state.filteredDataList.length}
      //   rowHeight={30}
      //   headerHeight={30}
      //   rowGetter={function(rowIndex) {return this.state.filteredDataList[rowIndex]; }.bind(this)}>
      //   <Column dataKey="id" width={50} label={'id' + (this.state.sortBy === 'id' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
      //   <Column dataKey="userId" width={200} label={'userId' + (this.state.sortBy === 'userId' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
      //   <Column dataKey="title" width={200} label={'title' + (this.state.sortBy === 'title' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
      //   <Column dataKey="body" width={400} label={'body' + (this.state.sortBy === 'body' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
      // </Table>;
      return <Table
        height={40+((this.state.filteredDataList.length+1) * 30)}
        width={1150}
        rowsCount={this.state.filteredDataList.length}
        rowHeight={30}
        headerHeight={30}
        rowGetter={function(rowIndex) {return this.state.filteredDataList[rowIndex]; }.bind(this)}>
        <Column dataKey="street" width={200} label={'street' + (this.state.sortBy === 'street' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="city" width={150} label={'city' + (this.state.sortBy === 'city' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="zip" width={100} label={'zip' + (this.state.sortBy === 'zip' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="state" width={50} label={'state' + (this.state.sortBy === 'state' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="beds" width={50} label={'beds' + (this.state.sortBy === 'beds' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="baths" width={50} label={'baths' + (this.state.sortBy === 'baths' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="sq__ft" width={100} label={'sq__ft' + (this.state.sortBy === 'sq__ft' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="type" width={100} label={'type' + (this.state.sortBy === 'type' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="sale_date" width={300} label={'sale_date' + (this.state.sortBy === 'sale_date' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="price" width={100} label={'price' + (this.state.sortBy === 'price' ? sortDirArrow : 'price')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="latitude" width={100} label={'latitude' + (this.state.sortBy === 'latitude' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="longitude" width={100} label={'longitude' + (this.state.sortBy === 'longitude' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="createdAt" width={250} label={'createdAt' + (this.state.sortBy === 'createdAt' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="updatedAt" width={250} label={'updatedAt' + (this.state.sortBy === 'updatedAt' ? sortDirArrow : '')} headerRenderer={this._renderHeader.bind(this)}/>
        <Column dataKey="id" width={300} label={'id' + (this.state.sortBy === 'id' ? sortDirArrow : 'id')} headerRenderer={this._renderHeader.bind(this)}/>
      </Table>;
  }
  _renderHeader(label, cellDataKey) {
    return <div>
          <a onClick={this._sortRowsBy.bind(this, cellDataKey)}>{label}</a>
            <div>
              <br />
              <input type="text" style={{height:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
            </div>
        </div>;
  }

  _onFilterChange(cellDataKey, event) {
    if (!event.target.value) {
      this.setState({
        filteredDataList: this.rows,
      });
    }
    var filterBy = event.target.value.toString().toLowerCase();
    var size = this.rows.length;
    var filteredList = [];
    for (var index = 0; index < size; index++) {
      var v = this.rows[index][cellDataKey];
      if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
        filteredList.push(this.rows[index]);
      }
    }
    this.setState({
      filteredDataList: filteredList,
    });
  }
  _sortRowsBy(cellDataKey) {
    var sortDir = this.state.sortDir;
    var sortBy = cellDataKey;
    if (sortBy === this.state.sortBy) {
      sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      sortDir = 'DESC';
    }
    var rows = this.state.filteredDataList.slice();
    rows.sort((a, b) => {
      var sortVal = 0;
      if (a[sortBy] > b[sortBy]) {
        sortVal = 1;
      }
      if (a[sortBy] < b[sortBy]) {
        sortVal = -1;
      }

      if (sortDir === 'DESC') {
        sortVal = sortVal * -1;
      }
      return sortVal;
    });

    this.setState({sortBy, sortDir, filteredDataList : rows});
  }
  componentDidMount() {
    //fetch('http://jsonplaceholder.typicode.com/posts/')
    fetch('http://bala0707-test.apigee.net/realestateca')
        .then((response) => response.json())
        .then((responseJson) => {
          //alert("this.rows : " +JSON.stringify(responseJson[2]));
            this.setState({filteredDataList:responseJson});
            this.rows = responseJson;
          //alert("this.rows : " +JSON.stringify(this.state.filteredDataList[0]));
        })
        .catch((error) => {
          console.error(error);
        });
  }

}

module.exports = MyTable;
