import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

export default class  App extends React.Component {
  state = {
    name: 'Goku',
    age: 15
  };
  eventHandler = (e) =>{
    this.setState({
      name: 'Vegita'
    });
  }
  handleChange = (e) =>{
    this.setState({
      name: e.target.value
    });
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submited',this.state.name);
    
  }
  render(){
    return(
      <div className="App">
        <h1>Hello bisha!</h1>
        <p>My name is {this.state.name}</p>   
        <form onSubmit={this.handleFormSubmit}> 
          <input type="text" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
       
      </div>
    )
  } 
}
 

ReactDOM.render(<App />, document.getElementById('root'));


  