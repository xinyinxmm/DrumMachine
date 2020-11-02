export const initialText = {
  Q: "heater1",
  W: "heater2",
  E: "heater3",
  A: "heater4",
  S: "heater5",
  D: "heater6",
  Z: "heater7",
  X: "heater8",
  C: "heater9"
};

export const playAudio = (id, setText) => {
  return () => {
    let x = document.getElementById(id);
    if (x) {
      x.play();
      setText(initialText[id]);
    }
  };
};
