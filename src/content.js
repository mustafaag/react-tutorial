import React from 'react'

const Content = ({ people }) => {
  const peopleList = people.map(person => {
    // Conditial output IF
    if (person.age >= 18) {
      return (
        <div key={person.id}>
          <div> Name: {person.name}</div>
          <div> Age: {person.age}</div>
          <div> Belt {person.belt} </div>
        </div>
      )
    } else {
      return null;
    }
  });
    // Ternary operation 
  const peopleList2 = people.map(person => {
    return person.age >= 18 ? (
      <div key={person.id}>
        <div> Name: {person.name}</div>
        <div> Age: {person.age}</div>
        <div> Belt {person.belt} </div>
      </div>) : null
  });
  return (
    <div className='person-list'>
      { people.map(person => {
        return person.age >= 18 ? (
          <div key={person.id}>
            <div> Name: {person.name}</div>
            <div> Age: {person.age}</div>
            <div> Belt {person.belt} </div>
          </div>) : null
      })
      }
    </div>
  )
}

export default Content
