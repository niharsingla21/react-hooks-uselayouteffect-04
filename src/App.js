import "./App.css";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const inputRef = useRef();
  const hello = useRef(() => {
    console.log("hello");
  });
  const [showHello, setShowHello] = useState(true);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);

  // const { rect, inputRef2 } = useMeasure([]);
  return (
    <div className="App">
      <button onClick={() => setShowHello(!showHello)}>Toggle Hello</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      ></input>
      <input
        // ref={inputRef2}
        name="email"
        value={values.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        Focus
      </button>
    </div>
  );
}

export default App;
