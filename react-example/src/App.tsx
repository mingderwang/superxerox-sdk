import React, { useState, useEffect } from 'react';
import './App.css';
import { Point, SuperXEROX } from 'superxerox-sdk'

function App() {
  const point = new Point()
  console.log(point)
  point.scale(6)
  const sx = new SuperXEROX()

  const [id, setId] = useState(point.printX())
  const [version] = useState(sx.vers())
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
        <h2>{version}</h2>
      </header>
    </div>
  );
}

export default App;
