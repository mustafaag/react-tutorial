import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

export default class  App extends React.Component {  
  render(){
    return(
      <div className="App">
        <h1>Hello bisha!</h1>
        <h2>{Math.random() * 10} </h2>
      </div>
    )
  } 
}
 

ReactDOM.render(<App />, document.getElementById('root'));


  