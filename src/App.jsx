
import './App.css'
import Calculatrice from './components/Calculatrice';
function App() {
  return (
    <div className="app">
      <h1>React Calculatrice de pourboire</h1>
      <Calculatrice />
    </div>
  );
}

export default App;
// function App() {

//   const [displayValue, setDisplayValue] = useState('0');
//   const [currentValue, setCurrentValue] = useState(null);
//   const [operator, setOperator] = useState(null);
//   const [result, setResult] = useState(null);

//   const stateFunctions = {
//     setCurrentValue,
//     setDisplayValue,
//     setOperator,
//     setResult,
//   };
//   return (
//     <>
//       <div className="App">
//         <Calculatrice {...stateFunctions} displayValue={displayValue} currentValue={currentValue}operator={operator} result={result}/>
//       </div>
//     </>
//   )
// }

// export default App
