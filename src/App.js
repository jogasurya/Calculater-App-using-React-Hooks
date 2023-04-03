import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
  function handlerClick(e) {
    setResult(result.concat(e.target.name));
  }
  function backspace() {
    setResult(result.slice(0, -1));
  }
  function clear() {
    setResult("");
  }
  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  return (
    <div className="cal-App">
      <h2> Calculater</h2>
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>
      <div class="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={handlerClick}>
          +
        </button>
        <button name="7" onClick={handlerClick}>
          7
        </button>
        <button name="8" onClick={handlerClick}>
          8
        </button>
        <button name="9" onClick={handlerClick}>
          9
        </button>
        <button name="-" onClick={handlerClick}>
          -
        </button>
        <button name="4" onClick={handlerClick}>
          4
        </button>
        <button name="5" onClick={handlerClick}>
          5
        </button>
        <button name="6" onClick={handlerClick}>
          6
        </button>
        <button name="*" onClick={handlerClick}>
          *
        </button>
        <button name="1" onClick={handlerClick}>
          1
        </button>
        <button name="2" onClick={handlerClick}>
          2
        </button>
        <button name="3" onClick={handlerClick}>
          3
        </button>
        <button name="/" onClick={handlerClick}>
          /
        </button>
        <button name="0" onClick={handlerClick}>
          0
        </button>
        <button name="." onClick={handlerClick}>
          .
        </button>
        <button id="result" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
  );
}
