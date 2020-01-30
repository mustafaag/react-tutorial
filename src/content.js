import React from 'react'

const Content = ({ people }) => {
  const peopleList = people.map(person => {
    return (
      <div key={person.id}>
        <div> Name: {person.name}</div>
        <div> Age: {person.age}</div>
        <div> Belt {person.belt} </div>
      </div>
    )
  });
  return (
    <div className='person-list'>
      {peopleList}
    </div>
  );
}

export default Content
