import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Counter from './components/Counter'

function App() {
  const person =[{
    id:1,
    name: 'Ayush',
  },
{
  id:2,
  name: 'Prince',
},
{id:3,
  name:'sahil',
}]

  return (
    <div className="App">
      <header className="App-header">
      <Greet/>
        <h1> Tatvasoft Project </h1>
        <h2>This is week1 task:</h2>
        <h3> This is created using functional and class component</h3>
        <h3>we have made a functional component and class component </h3>
        <h3>and also create event and renderig </h3>


      </header>
    </div>
  );
}

export default App;
