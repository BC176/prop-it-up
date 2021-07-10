import React from 'react';

const People = (props) => {
    return (
        <div>
            <h3>{props.lName}, {props.fName}</h3>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default People;