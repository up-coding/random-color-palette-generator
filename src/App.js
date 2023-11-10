import { useState } from "react";
import "./App.css";
import { SingleColor } from "./Components/SingleColor/SingleColor";

import Button from "react-bootstrap/Button";

function App() {
  const [colors, setColors] = useState([]);

  const generateRandomColors = () => {
    let arr = [];
    for (let index = 0; index < 24; index++) {
      let hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0);
      arr[index] = `#${hexColor}`;
    }
    setColors(arr);
  };

  window.onload = () => generateRandomColors();

  return (
    <div className="container pt-5">
      <div className="text-center">
        <Button
          variant="warning"
          size="lg"
          onClick={() => generateRandomColors()}
        >
          Refresh
        </Button>
      </div>

      <ul className="d-flex justify-content-center flex-wrap gap-4 mt-5 p-0">
        {colors.map((color, index) => (
          <SingleColor key={index} color={color}></SingleColor>
        ))}
      </ul>
    </div>
  );
}

export default App;
