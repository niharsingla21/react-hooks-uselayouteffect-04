import React, { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  const isCurrent = useRef(true);

  useEffect(() => {
    isCurrent.current = true;
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        console.log(y);
        if (isCurrent.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url]);

  return state;
};
