function rot13(str) {
  const shiffting = 13;

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shifted = alphabet.slice(shiffting) + alphabet.slice(0, shiffting);
  let res = str
    .toUpperCase()
    .split("")
    .map(letter => {
      if (alphabet.includes(letter))
        return shifted[alphabet.indexOf(letter)];
      else return letter;
    })
    .join("");

  return res;
}

console.log(rot13("SERR PBQR PNZC"));