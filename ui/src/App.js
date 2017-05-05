// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './dist/fixed-data-table.css';
// import MyTable from './myTable';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default MyTable;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortExample from './SortExample';
import RestfulServices from './RestfulServices';
import ReactDOM from 'react-dom';
import './dist/fixed-data-table.css';
import MyTable from './myTable';
import {Table, Column, Cell} from 'fixed-data-table';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router >
    <div >
        <div className="table">
          <ul id="horizontal-list">
            <li><Link to="/">Home</Link></li><li>          </li>
            <li><Link to="/about">Add</Link></li><li>          </li>
            <li><Link to="/topics">Topics</Link></li><li>          </li>
          </ul>

          <hr/>

          <Route exact path="/" component={MyTable}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </div>
  </Router>
)

const Home = () => (
  <div style="width:100%;">
    <h2>Home456</h2>
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
  </div>

)

const About = () => (
  <div style="width:100%;">
    <h2>About</h2>
    <div className="App">
        <div className="App-logo">
          <h2>Welcome to React</h2>
        </div>
        <p >
        <Table
          rowHeight={50}
          rowsCount={rows.length}
          width={5000}
          height={5000}
          headerHeight={50}>
          <Column
            header={<Cell>Col 1</Cell>}
            cell={<Cell>Column 1 static content</Cell>}
            width={2000}
          />

          <Column
            header={<Cell>Col 3</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                Data for column 3: {rows[rowIndex][2]}
              </Cell>
            )}
            width={2000}
          />
        </Table>
        </p>
      </div>
  </div>

)

const Topics = ({ match }) => (
  <div style="width:1150;">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div style="width:1150;">
    <h3>{match.params.topicId}</h3>
  </div>
)

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];


export default BasicExample
