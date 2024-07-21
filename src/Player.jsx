import React, { useState } from "react";

const Player = ({ isOpen, setIsOpen }) => {
  const [username, setUserName] = useState("");
  const [score, setScore] = useState("");
  const [closeModal, isCloseModal] = useState(false);
  const handleUserScore = (e) => {
    const inputValue = e.target.value;
    const regex = /^([0-5][0-9]):([0-5][0-9]):([0-5][0-9])$/;
    setScore(inputValue);
    if (regex.test(inputValue)) {
      console.log("success");
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className=" relative flex flex-col bg-black bg-opacity-50 h-60 justify-center items-center w-60 rounded gap-2">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 absolute top-2 right-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <label className="text-white ">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className=" bg-transparent border bg-white bg-opacity-10 text-white"
          />
          <label className="text-white">Score</label>
          <input
            type="text"
            label="score"
            placeholder="MM:SS:MS"
            value={score}
            onChange={handleUserScore}
            className="bg-transparent border bg-white bg-opacity-10"
          />
          <button className="bg-black border rounded bg-opacity-30 w-16 text-white text-sm mt-2">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Player;
