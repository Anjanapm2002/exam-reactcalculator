import { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setInput(input.concat(e.target.name))
  };

  const clear = () => {
    setInput('')
    setResult('')
  }

  const backspace = () => {
    setInput(input.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult('Error');
    }
  }

  return (
    <>
      <div id='body'>
        <div id="calculator">
        <form>
          <input type="text" value={input} readOnly placeholder='0' />
          <input type="text" value={result} readOnly placeholder='0'/>
        </form>

          <div class="buttons">
              <button onClick={handleClick} name='('>(</button>
              <button onClick={handleClick} name=')'>)</button>
              <button className="clear" onClick={clear}>AC</button>
              <button onClick={handleClick} name='/'>÷</button>
              <button onClick={handleClick} name='7'>7</button>
              <button onClick={handleClick} name='8'>8</button>
              <button onClick={handleClick} name='9'>9</button>
              <button onClick={handleClick} name='*'>x</button>
              <button onClick={handleClick} name='4'>4</button>
              <button onClick={handleClick} name='5'>5</button>
              <button onClick={handleClick} name='6'>6</button>
              <button onClick={handleClick} name='-'>-</button>
              <button onClick={handleClick} name='1'>1</button>
              <button onClick={handleClick} name='2'>2</button>
              <button onClick={handleClick} name='3' >3</button>
              <button onClick={handleClick} name='+'>+</button>
              <button onClick={handleClick} name='0'>0</button>
              <button onClick={handleClick} name='.'>.</button>
              <button className="equal" onClick={calculate}>=</button>
              <button className="backspace" onClick={backspace}>&#9003;</button>
          </div>
        </div> 
      </div> 
    </>
  )
}

export default App