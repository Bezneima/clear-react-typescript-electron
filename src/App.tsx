import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const ButtonStyle = {
    padding:'5px'
  };
  function sendEvent() {
    window.api.receive("fromMain", (data:any) => {
      console.log(`Received ${data} from main process`);
    });
    window.api.send("toMain", "some your data");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Open console and click button below.
        </p>
        <button onClick={sendEvent} style={ButtonStyle}>Send Event to main!</button>
      </header>
    </div>
  );
}

export default App;
