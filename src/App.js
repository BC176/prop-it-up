import './App.css';
// import People from './components/People';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        fName={"Brian"}
        lName={"Clark"}
        age={45}
        hairColor={"Blond"} />
      <PersonCard
        fName={"Ethan"}
        lName={"Clark"}
        age={16}
        hairColor={"Blond"} />
      <PersonCard
        fName={"Aries"}
        lName={"Clark"}
        age={12}
        hairColor={"Black and Tan"} />
      <PersonCard
        fName={"Atlas"}
        lName={"Clark"}
        age={6}
        hairColor={"Brindle"} />
    </div>
  );
}

export default App;
