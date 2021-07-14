import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <People
        fName={"Brian"}
        lName={"Clark"}
        age={45}
        hairColor={"Blond"} />
      <People
        fName={"Ethan"}
        lName={"Clark"}
        age={16}
        hairColor={"Blond"} />
      <People
        fName={"Aries"}
        lName={"Clark"}
        age={12}
        hairColor={"Black and Tan"} />
      <People
        fName={"Atlas"}
        lName={"Clark"}
        age={6}
        hairColor={"Brindle"} />
    </div>
  );
}

export default App;
