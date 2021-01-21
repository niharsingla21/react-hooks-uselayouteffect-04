import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  // const renders = useRef(0);
  // console.log("Hello renders : " + renders.current++);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    return () => {
      localStorage.setItem("count", 0);
    };
  }, [count]);

  const divRef = useRef();
  const rect = useMeasure(divRef, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "Loading..." : data}</div>
        <div>
          <pre>{JSON.stringify(rect, null, 2)}</pre>
        </div>
      </div>

      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
