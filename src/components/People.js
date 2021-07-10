import React, { useState } from 'react';

const People = (props) => {
    const [age, setAge] = useState(props.initialAge); //getter and setter
    return (
        <div>
            <h3>{props.lName}, {props.fName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={(event) => setAge(age + 1)}>{props.fName}'s Birthday</button>
        </div>
    )
}

export default People;