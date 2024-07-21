import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Player from "./Player";
import image1 from "./assets/image.png";
import image2 from "./assets/BANER-SHANNH 1.png";
import PlayerList from "./PlayerList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-black flex justify-center">
        <div className="relative bg-[url('./assets/image.png')] bg-cover no-repeat w-2/3 h-full">
          <button
            className="absolute right-5 top-5 bg-yellow-600 bg-opacity-80 text-gray-300 font-semibold  rounded-md w-36 h-14 border text-xl"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Add a Player
          </button>
          {isOpen ? <Player isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
          <PlayerList/>
        </div>
      </div>
    </>
  );
}

export default App;
