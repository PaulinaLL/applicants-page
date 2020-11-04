export function getInitialLetters(x, y) {
  const firstLetterFirstName = x.split("")[0];
  const firstLetterLastName = y.split("")[0];
  const initials = firstLetterFirstName + firstLetterLastName;
  return initials;
}

export function colorGenerator() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ", 0.5" + ")";
}
