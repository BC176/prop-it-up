import React, { useState } from 'react';

const People = (props) => {
    const { fName, lName, age, hairColor } = props;
    const [initialAge, setInitialAge] = useState(age); //getter and setter
    return (
        <div>
            <h3>{lName}, {fName}</h3>
            <p>Age: {initialAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setInitialAge(initialAge + 1)}>{fName}'s Birthday</button>
        </div>
    )
}

export default People;