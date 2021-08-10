import React, { useState, useEffect } from 'react';
import './App.css';
import { Point } from 'superxerox-sdk'

function App() {
  const point = new Point()
  console.log(point)
  point.scale(6)

  const [id, setId] = useState(point.printX())
  useEffect(() => {
    const timer = window.setInterval(() => {
      setId(id + 1)
    }, 1000);
    return () => window.clearInterval(timer);
  }, [id]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{id}</h1>
      </header>
    </div>
  );
}

export default App;
