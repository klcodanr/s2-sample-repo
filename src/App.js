import React from "react";
import { Spectrum2 } from "./Spectrum2";
import {ReactSpectrum3} from "./ReactSpectrum3";

import { useState } from "react";

import "./styles.css";

export default function App() {
  const [view, setView] = useState("s2");


  return <>
    <div style={{display: 'flex', gap: '8px'}}>
      <button onClick={() => setView("s2")}>Spectrum 2</button>
      <button onClick={() => setView("rs3")}>React Spectrum 3</button>
    </div>
    {view === "s2" && <Spectrum2 />}
    {view === "rs3" && <ReactSpectrum3 />}
  </>;
}
