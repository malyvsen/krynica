import { useState } from "react";
import "./App.css";

function App() {
  const [sampleText, setSampleText] = useState("Znam 25 wróżek - i co z tego?");

  return (
    <>
      <h1>Krynica</h1>
      <p>A selection of fonts I like.</p>
      <input
        type="text"
        size={50}
        value={sampleText}
        onChange={(e) => setSampleText(e.target.value)}
      />
      <div className="cormorant-garamond-regular">{sampleText}</div>
    </>
  );
}

export default App;
