import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('nimilista.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.henkilot))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      {data.map(person => (
        <div key={`${person.first}-${person.last}`} className="person">
          <h2>{person.first} {person.last}</h2>
          <p>Age: {person.age}</p>
          <p>Skills: {person.skills.join(', ')}</p>
          <p>Hobbies: {person.hobbies.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

