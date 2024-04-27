import { useState } from "react";
import SampleList from "./SampleList";
import "./App.css";

function App() {
  const [sampleText, setSampleText] = useState("Znam 25 wróżek - i co z tego?");
  const fonts = [
    "Cormorant",
    "Playfair",
    "EB Garamond",
    "Bona Nova",
    "Josefin Sans",
    "Space Grotesk",
    "Nova Mono",
    "Quicksand",
    "Raleway",
    "Rajdhani",
    "Labrada",
    "Texturina",
  ];

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
      <SampleList fonts={fonts}>{sampleText}</SampleList>
    </>
  );
}

export default App;
