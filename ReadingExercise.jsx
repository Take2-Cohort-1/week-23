import { useState } from "react";

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("");

  const someFunc = () => {
    setIsLightOn(!isLightOn);
  };

  const someOtherFunc = () => {
    setCounter(counter + 1);
  };

  const blaFunction = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React State Demo</h1>

      <div>
        <h2>Light Switch</h2>
        <p>The light is currently: {isLightOn ? "ON" : "OFF"}</p>
        <button onClick={someFunc}>Turn {isLightOn ? "OFF" : "ON"}</button>
      </div>

      <div>
        <h2>Counter</h2>
        <p>Count: {counter}</p>
        <button onClick={someOtherFunc}>Increment Counter</button>
        <button onClick={() => setCounter(0)}>Reset Counter</button>
      </div>

      <div>
        <h2>Username</h2>
        <p>Current username: {username}</p>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={blaFunction}
        />
      </div>

      <div>
        <button onClick={() => setCounter(0)}>Reset Light</button>
      </div>
    </div>
  );
}

export default App;
