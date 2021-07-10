import './App.css';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <People
        fName={"Brian"}
        lName={"Clark"}
        age={45}
        hairColor={"Blond"}
        initialAge={45} />
      <People
        fName={"Ethan"}
        lName={"Clark"}
        age={16}
        hairColor={"Blond"}
        initialAge={16} />

      <People
        fName={"Aries"}
        lName={"Clark"}
        age={12}
        hairColor={"Black and Tan"}
        initialAge={12} />
      <People
        fName={"Atlas"}
        lName={"Clark"}
        age={6}
        hairColor={"Brindle"}
        initialAge={6} />
    </div>
  );
}

export default App;
