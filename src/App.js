import { useState } from 'react';


//modifies frontend https://codepen.io/kalpeshsingh/pen/wMNpLp

function App() {

  const operations = ["+", "-", "*", "/"];
  const [calc, setCalc] = useState("");
  const [result, setRes] = useState("");

  const updateCalc = value => {
    if (
      operations.includes(value) && calc === '' ||
      operations.includes(value) && operations.includes(calc.slice(-1))
    ) { return; }

    setCalc(calc + value);

    if (!operations.includes(value)) {
      setRes(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 3; i > 0; i--) {
      digits.push(
        <div class="calc-button-row">

          <div class="button" key={i * 3} value={i * 3} onClick={() => updateCalc((i * 3).toString())}>{i * 3}</div>
          <div class="button" key={i * 3 - 1} value={i * 3 - 1} onClick={() => updateCalc((i * 3 - 1).toString())}>{i * 3 - 1}</div>
          <div class="button" key={i * 3 - 2} value={i * 3 - 2} onClick={() => updateCalc((i * 3 - 2).toString())}>{i * 3 - 2}</div>

        </div>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const deleteLast = () => {
    if (calc == '') { return 'hi'; }
    const value = calc.slice(0, -1);
    setCalc(value);

  }

  return (
    <div className="App">
      <div class="container">
        <div class="calc-body">

          <div class="calc-screen">
            <div class="calc-operation"> {result ? (result) : ""}</div>
            <div class="calc-typed">{calc || "0"}</div>
          </div>

          <div class="calc-button-row">
            <div class="button l" onClick={() => updateCalc('+')}>+</div>
            <div class="button l" onClick={() => updateCalc('-')}>-</div>
            <div class="button l" onClick={() => updateCalc('*')}>x</div>
            <div class="button l" onClick={() => updateCalc('/')}>/</div>
            <div class="button c" onClick={deleteLast}>C</div>
          </div>

          {createDigits()}

          <div class="calc-button-row">
            <div class="button" value="." onClick={() => updateCalc('.')}>.</div>
            <div class="button" value="0" onClick={() => updateCalc('0')}>0</div>
            <div class="button" value="<" onClick={calculate}> = </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;