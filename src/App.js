import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Content from './content';
import AddPerson from './AddPerson';

export default class App extends React.Component {
  state = {
    people : [
      { name: 'Goku', age: 10, belt: 'black', id: 1 },
      { name: 'Vegita', age: 20, belt: 'red', id: 2 },
      { name: 'Gorian', age: 24, belt: 'blue', id: 3 },
    ]
  };

  addPerson = (person) => {
    person.id = Math.random();
    let pep = [...this.state.people, person];
    console.log(pep);
    this.setState({
      people: pep
    });
  }

  deletePerson = (id) =>{
    let pep = this.state.people.filter(person =>{
      return person.id !== id;
    });
    this.setState({
      people: pep
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello bisha!</h1>
        <Content people = {this.state.people} deletePerson={this.deletePerson} />
        <AddPerson addPerson = {this.addPerson} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


