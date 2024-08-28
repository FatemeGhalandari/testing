import React from "react";
function App() {
  const a = 10;
  const b = 20;
  return (
    <>
      <div>
        <p>learn react</p>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
        </ul>

        <h1 data-testid="test1">Hello</h1>
        <span title="sum">{a + b}</span>
      </div>
    </>
  );
}

export default App;
