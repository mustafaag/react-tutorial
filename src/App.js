import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Content from './content';
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
        <Content name="Goku" age="21212" belt="black"/>       
        <Content name="Gorian" age="100" belt="white"/>       
      </div>
    )
  } 
}
 

ReactDOM.render(<App />, document.getElementById('root'));


  