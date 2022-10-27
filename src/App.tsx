import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
    const [people, setPeople] = useState([
        {name: 'Aidai', age: 25, hobby: 'Draw'},
        {name: 'Jhon', age: 28, hobby: 'Football'}
    ]);
    const changeName = () => {
        setPeople([
            {name: 'Aidai', age: 25, hobby: 'Drawing'},
            {name: 'Jhon Doe', age: 28, hobby: 'Football'}
        ]);
    };

    return (
        <div className="App">
            <Person name={people[0].name} age={people[0].age}>
                <b>Hobby:{people[0].hobby}</b>
            </Person>
            <Person name={people[1].name} age={people[1].age}>
                <b>Hobby:{people[1].hobby}</b>
            </Person>
           <div>
               <button onClick={changeName}>Change Name</button>
           </div>

        </div>
    );
}

export default App;
