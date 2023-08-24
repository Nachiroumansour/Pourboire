
import { useState } from 'react';
import '../App.css';

function Calculatrice() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleNumberClick = (number) => {
        setInputValue(inputValue + number);
    };

    const handleOperateurClick = (operator) => {
        setInputValue(inputValue + operator);
    };
    const handleEfface = () => {
        setInputValue('');
        setResult('');
    };

    const handleCalcul = () => {
        try {
            const calculResultat = eval(inputValue);
            setResult(calculResultat);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculatrice">
            <input type="text" value={inputValue} readOnly />
            <div className="button-grid">
                {[...Array(10).keys()].map((number) => (
                    <button className='number' key={number} onClick={() => handleNumberClick(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <div className="button-grid1">
                <button className="operator-button" onClick={() => handleOperateurClick('+')}>+</button>
                <button className="operator-button" onClick={() => handleOperateurClick('-')}>-</button>
                <button className="operator-button" onClick={() => handleOperateurClick('*')}>*</button>
                <button className="operator-button" onClick={() => handleOperateurClick('/')}>/</button>
            </div>
            <div className="button-grid1">
                <button onClick={handleEfface} className='clear'>Effacer</button>
                <button onClick={handleCalcul}>=</button>
            </div>
            <div className="result">{result}</div>
        </div>
    );
}
export default Calculatrice;
// import '../App.css'


// function Calculatrice({
//     setCurrentValue,
//     setDisplayValue,
//     setOperator,
//     currentValue,
//     displayValue,
//     setResult,
//     operator,
//     result,
// }) {
//     const HandleClicke = ((number) => {
//         if (displayValue === '0' || currentValue === null) {
//             setDisplayValue(parseFloat(number));
//             setCurrentValue(parseFloat(number));

//             console.log(number)

//         } else if (displayValue === '0' && currentValue !== null) {
//             setDisplayValue(parseFloat(number));
//             setCurrentValue(parseFloat(+(number)));
//         } else if(displayValue !=='0' || currentValue !== null) {
//             setDisplayValue(parseFloat(displayValue + number));
//             setCurrentValue(parseFloat(displayValue + number));
//         }
//     });
//     const HandleOperator = ((operatore) => {
//         if (currentValue !== null) {
//             setOperator(operatore);
//             // setCurrentValue(parseFloat(displayValue));
//             setDisplayValue('0');

//         }
//     });
//     const handleEqualClick = () => {
//         if (currentValue !== null && operator !== null) {
//             let newResult;

//             switch (operator) {
//                 case '+':
//                     newResult = currentValue + parseFloat(displayValue);
//                     break;
//                 case '-':
//                     newResult = currentValue - parseFloat(displayValue);
//                     break;
//                 case '*':
//                     newResult = currentValue * parseFloat(displayValue);
//                     break;
//                 case '/':
//                     newResult = currentValue / parseFloat(displayValue);
//                     break;
//                 default:
//                     break;
//             }

//             // Mettre à jour le résultat et l'affichage
//             setResult(newResult);
//             setDisplayValue(newResult.toString());

//             // Réinitialisation pour une nouvelle opération
//             setCurrentValue(null);
//             setOperator(null);
//         }
//     };

//     const handleClearClick = () => {
//         setDisplayValue('0');
//         setCurrentValue(null);
//         setOperator(null);
//     };

//     return (
//         <>
//             <div className="apk">
//                 <div className="containeur">
//                     <form action="" className='form'>
//                         <input type="text" value={displayValue} onChange={(e) => setDisplayValue(e.target.value)} />
//                     </form>
//                     <div className="calcule">
//                         <button className='ac del' onClick={handleClearClick}>AC</button>
//                         <button className='del'>DEL</button>
//                         <button onClick={() => HandleOperator('/')} >/</button>
//                         <button onClick={() => HandleClicke('1')}>1</button>
//                         <button onClick={() => HandleClicke('2')}>2</button>
//                         <button onClick={() => HandleClicke('3')}>3</button>
//                         <button onClick={() => HandleOperator('*')}>x</button>
//                         <button onClick={() => HandleClicke('4')}>4</button>
//                         <button onClick={() => HandleClicke('5')}>5</button>
//                         <button onClick={() => HandleClicke('6')}>6</button>
//                         <button onClick={() => HandleOperator('-')}>-</button>
//                         <button onClick={() => HandleClicke('7')}>7</button>
//                         <button onClick={() => HandleClicke('8')}>8</button>
//                         <button onClick={() => HandleClicke('9')}>9</button>
//                         <button onClick={() => HandleOperator('+')}>+</button>
//                         <button onClick={() => HandleClicke('0')}>0</button>
//                         <button onClick={() => HandleOperator('.')}>.</button>
//                         <button className='equal' onClick={handleEqualClick}>=</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Calculatrice;