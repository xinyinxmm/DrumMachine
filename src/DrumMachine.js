import React, { useState, useEffect } from "react";
import { playAudio } from "./utils";
import { DrumPad } from "./DrumPad";

export function DrumMachine() {
  const [text, setText] = useState("");

  useEffect(() => {
    const onKeyPress = (e) => {
      console.log(e.code);
      console.log("KeyQ");
      if (e.code === "KeyQ") {
        playAudio("Q", setText)();
      } else if (e.code === "KeyW") {
        playAudio("W", setText)();
      } else if (e.code === "KeyE") {
        playAudio("E", setText)();
      } else if (e.code === "KeyA") {
        playAudio("A", setText)();
      } else if (e.code === "KeyS") {
        playAudio("S", setText)();
      } else if (e.code === "KeyD") {
        playAudio("D", setText)();
      } else if (e.code === "KeyZ") {
        playAudio("Z", setText)();
      } else if (e.code === "KeyX") {
        playAudio("X", setText)();
      } else if (e.code === "KeyC") {
        playAudio("C", setText)();
      }
    };
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  }, []);

  return (
    <>
      <div id="drum-machine">
        <div id="display">{text}</div>
        {["Q", "W", "E", "A", "S", "D", "Z", "X", "C"].map((item) => (
          <DrumPad id={item} setText={setText} />
        ))}
      </div>
    </>
  );
}
