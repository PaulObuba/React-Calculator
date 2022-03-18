import React, {useState, useEffect} from 'react'
import NumberFormat from 'react-number-format'
import './App.css';

const App = () => {
  const [curState, setCurState] = useState('')
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState(null)
  const [prevState, setPrevState] = useState(null)

  const inputNum = (e) => {
    if (curState.includes('.') && e.target.innerText === '.') return

   setCurState(prev => prev + e.target.innerText)
  }

useEffect(() => {
  setInput(curState)
}, [curState])

useEffect(() => {
  setInput('0')
}, [])

 const reset = () => {
   setPrevState('');
   setCurState('');
   setOperator('')
   setInput('0')
 }

 const operatorType = (e) => {
  setOperator(e.target.innerText)
   if (curState === '') return
   if (prevState !== '') {
     equal()
   }else {
    setPrevState(curState);
    setCurState('')
   }
 };

 const equal = (e) => {
   let cal;
   switch (operator) {
     case '+':
        cal = String(parseFloat(prevState) + parseFloat(curState));
      break;
     case '/':
        cal = String(parseFloat(prevState) / parseFloat(curState));
      break;
     case 'x':
        cal = String(parseFloat(prevState) * parseFloat(curState));
      break;
     case '-':
        cal = String(parseFloat(prevState) - parseFloat(curState));
      break;
      default: return
   }
   setInput('');
   setCurState('')
   setPrevState(cal);
 }

 const addMinusPlus = () => {
  if (curState.charAt(0) === '-') {
     setCurState(curState.substring(1));
  }else {
    setCurState('-' + curState);
  }
 }

 const deleteBtn = () => {
   if (curState !== '') {
     return setCurState(curState.slice(0, -1));
   }
 }



  return (
    <div className='body'>
      <div className="container">
        <div className="wrapper">
          <div className="screen">{input !== '' || input === '0' ? 
          <NumberFormat value={input} displayType='text' thousandSeparator={true} /> : 
          <NumberFormat value={prevState} displayType='text' thousandSeparator={true} />}</div>
          <div className="btn gray" onClick={reset}>AC</div>
          <div className="btn red" onClick={deleteBtn}>DEL</div>
          <div className="btn gray" onClick={addMinusPlus}>+/-</div>
          <div className="btn orange" onClick={operatorType}>/</div>
          <div className="btn" onClick={inputNum}>7</div>
          <div className="btn" onClick={inputNum}>8</div>
          <div className="btn" onClick={inputNum}>9</div>
          <div className="btn orange" onClick={operatorType}>x</div>
          <div className="btn" onClick={inputNum}>4</div>
          <div className="btn" onClick={inputNum}>5</div>
          <div className="btn" onClick={inputNum}>6</div>
          <div className="btn orange" onClick={operatorType}>+</div>
          <div className="btn" onClick={inputNum}>1</div>
          <div className="btn" onClick={inputNum}>2</div>
          <div className="btn" onClick={inputNum}>3</div>
          <div className="btn orange" onClick={operatorType}>-</div>
          <div className="btn zero" onClick={inputNum}>0</div>
          <div className="btn" onClick={inputNum}>.</div>
          <div className="btn" onClick={equal}>=</div>
        </div>
      </div>
    </div>
  )
}
export default App;
