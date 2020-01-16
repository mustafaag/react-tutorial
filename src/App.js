import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

export default class  App extends React.Component {
  state = {
    name: 'Goku',
    age: 15
  };

  render(){
    return(
      <div className="App">
        <h1>Hello bisha!</h1>
        <p>My name is {this.state.name} and I am {this.state.age} old</p>   
      </div>
    )
  } 
}
 

ReactDOM.render(<App />, document.getElementById('root'));


  