import React from 'react'

const Content = ({ people, deletePerson }) => {
  const peopleList = people.map(person => {
    // Conditial output IF
    if (person.age >= 18) {
      return (
        <div key={person.id}>
          <div> Name: {person.name}</div>
          <div> Age: {person.age}</div>
          <div> Belt {person.belt} </div>
          <button onClick={() => { deletePerson(person.id) } }>Delete Person</button>
        </div>
      )
    } else {
      return null;
    }
  });
 
  return (
    <div className='person-list'>
      {peopleList}
    </div>
  )
}

export default Content
