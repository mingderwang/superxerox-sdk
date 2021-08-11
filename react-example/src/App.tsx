import React, { useState, useEffect } from 'react';
import './App.css';
import { SuperXEROX } from 'superxerox-sdk'

function App() {
  const sx = new SuperXEROX()
  const [version] = useState(sx.vers())
  useEffect(() => {
    const timer = window.setInterval(() => {
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{version}</h1>
      </header>
    </div>
  );
}

export default App;
