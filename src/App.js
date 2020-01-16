import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

export default class  App extends React.Component {
  state = {
    name: 'Goku',
    age: 15
  };
  eventHandler(e){
    console.log(e.target);
  }
  handleMouseOver(e){
    console.log(e.target,  e.pageX);
  }
  handleCopy(e){
    console.log("original", e);
  }
  render(){
    return(
      <div className="App">
        <h1>Hello bisha!</h1>
        <p>My name is {this.state.name} and I am {this.state.age} old</p>   
        <button onClick={this.eventHandler}> Click me!</button>
        <button onMouseOver={this.handleMouseOver}> Hover me!</button>
        <p onCopy={this.handleCopy}>What we think, we do!</p>
      </div>
    )
  } 
}
 

ReactDOM.render(<App />, document.getElementById('root'));


  