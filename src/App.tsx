import {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  const [people, setPeople] = useState([
    {name: 'Aidai', age: 25, hobby: 'Hobby: Drawing', id: 'a1'},
    {name: 'John', age: 30, hobby: 'Likes drinking alone', id: 'j1'},
    {name: 'Jack', age: 69, hobby: 'Collects post stamps', id: 'j2'},
    {name: 'Haru-kun', age: 19, hobby: 'Otaku desu!', id: 'h1'},
  ]);

  const [showPeople, setShowPeople] = useState(false);

  const changeName = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const peopleCopy = [...people];
    const personCopy = {...people[index]};
    personCopy.name = event.target.value;
    peopleCopy[index] = personCopy;
    setPeople(peopleCopy);
  };

  const changeAge = () => {
    const peopleCopy = people.map(person => {
      return {
        ...person,
        age: person.age + 1,
      }
    });
    setPeople(peopleCopy);
  }

  const increaseAge = (index: number) => {
    const peopleCopy = [...people];
    const personCopy = {...people[index]};
    personCopy.age++;
    peopleCopy[index] = personCopy;
    setPeople(peopleCopy);
  }

  const togglePeople = () => {
    setShowPeople(!showPeople);
  }

  let peopleList: React.ReactNode = null;

  if (showPeople) {
    peopleList = people.map((person,index) => (
      <Person key={person.id} name={person.name} age={person.age}
              onHeaderClick={() => increaseAge(index)} onNameChange={event => changeName(event, index)}>
        <b>Hobby: </b>
        <span>{person.hobby}</span>
      </Person>
      )
      // <div>
      //   <Person name={people[0].name} age={people[0].age}
      //           onHeaderClick={() => increaseAge(0)}
      //           onNameChange={event => changeName(event, 0)}>
      //     <b>Hobby: </b>
      //     <span>{people[0].hobby}</span>
      //   </Person>
      //   <Person name={people[1].name} age={people[1].age}
      //           onHeaderClick={() => increaseAge(1)}
      //           onNameChange={event => changeName(event, 1)}>
      //   </Person>
      // </div>
    );
  }

  return (
    <div className="App">
      {peopleList}
      <div>
        <button onClick={changeAge}>Change age!</button>
        <button onClick={togglePeople}>Toggle people</button>
      </div>
    </div>
  );
}

export default App;
