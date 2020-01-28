import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Content from './content';
export default class App extends React.Component {
  state = {
    people : [
      { name: 'Goku', age: 10, belt: 'black', id: 1 },
      { name: 'Vegita', age: 20, belt: 'red', id: 2 },
      { name: 'Gorian', age: 24, belt: 'blue', id: 3 },
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello bisha!</h1>
        <Content people = {this.state.people} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


