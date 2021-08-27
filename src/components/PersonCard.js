import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        } 
    }

    addOne = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        const { fName, lName, age, hairColor } = this.props;
        // const [initialAge, setInitialAge] = useState(age); //getter and setter
        // this.state = {
        //     age: age
        // }
        // addOne = () => {
        //     age + 1
        // }
        return (
            <div>
                <h3>{lName}, {fName}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addOne}>{fName}'s Birthday</button>
            </div>
        )
    }
}

export default PersonCard;