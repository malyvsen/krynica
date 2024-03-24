import { useState } from "react";
import Sample from "./Sample";
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
      <Sample fontName="Cormorant">{sampleText}</Sample>
      <Sample fontName="Playfair">{sampleText}</Sample>
      <Sample fontName="EB Garamond">{sampleText}</Sample>
      <Sample fontName="Bona Nova">{sampleText}</Sample>
      <Sample fontName="Josefin Sans">{sampleText}</Sample>
      <Sample fontName="Space Grotesk">{sampleText}</Sample>
      <Sample fontName="Nova Mono">{sampleText}</Sample>
      <Sample fontName="Quicksand">{sampleText}</Sample>
      <Sample fontName="Raleway">{sampleText}</Sample>
      <Sample fontName="Rajdhani">{sampleText}</Sample>
      <Sample fontName="Labrada">{sampleText}</Sample>
      <Sample fontName="Texturina">{sampleText}</Sample>
    </>
  );
}

export default App;
