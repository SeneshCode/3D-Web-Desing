import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";

function App() {
  const [count, setCount] = useState(200);

  // Increment function
  function setCountIncrease() {
    setCount(count+1); // Correctly increment the count
  }

  return (
    <>
      {/* <button
        className="px-5 py-2 bg-red-500 hover:bg-yellow-700"
        onClick={setCountIncrease}
      >
        Increase
      </button> */}

      {/* Render the Canvas and Scene with the updated count */}
      <Canvas key={count}> {/* Key forces rerender */}
        <Scene count={count} />
      </Canvas>
    </>
  );
}

export default App;
