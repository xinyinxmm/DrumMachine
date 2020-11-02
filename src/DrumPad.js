import React from "react";
import { initialText, playAudio } from "./utils";

export function DrumPad({ setText, id }) {
  return (
    <>
      <button
        className="drum-pad"
        id={initialText[id]}
        onClick={playAudio(id, setText)}
      >
        <audio
          className="clip"
          id={id}
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ></audio>
        {id}
      </button>
    </>
  );
}
