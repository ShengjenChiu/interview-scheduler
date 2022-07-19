import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(next, replace = false) {
    if (replace) {
      history.pop();
      setHistory(history);
    }
    setHistory((prev) => [...prev, next]);
    setMode(next);
  }


  function back() {

    if (history.length === 0) {
      setMode(initial);
    }
    if (history.length > 1) {
      history.pop(); 
      setMode(history[history.length - 1]);
    }
  }

  return { mode,
           transition,
           back
          };
}

//onchange: (event) => setMode(event.target.mode)


// module.exports = {
//   useVisualMode
// };