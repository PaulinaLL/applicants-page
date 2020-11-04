export function getInitialLetters(x, y) {
  const firstLetterFirstName = x.split("")[0];
  const firstLetterLastName = y.split("")[0];
  const initials = firstLetterFirstName + firstLetterLastName;
  return initials;
}

export function colorGenerator() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  let t = 0.5;
  return "rgb(" + r + ", " + g + ", " + b + ", " + t + ")";
}
