import React from "react";
import { Spectrum2 } from "./Spectrum2";

import "@react-spectrum/s2/page.css";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState("s2");

  return <>{view === "s2" && <Spectrum2 />}</>;
}
