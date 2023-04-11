import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";

function App() {
  const [mode, setkMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setkMode("dark");
      document.body.style.backgroundColor = "#373737";
    } else {
      setkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar titel="Text Analyizer" mode={mode} toggleMode={toggleMode} />
      <div className="container-sm">
        <Textform heading="Enter Text to Analyize" mode={mode} />
      </div>
    </>
  );
}

export default App;
