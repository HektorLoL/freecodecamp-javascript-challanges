// Options:
// 1- Proccess it, invert the string, and check if it's the same as the normal string.
// 2- Process it, for all characters from its midle check if the character n to left is equal to the character n to right.

// Regex for non-alphanumeric characters:
const nonAlphanumeric = /[^A-Z0-9]/gi;

// option 2 (vecause it's cooler to code)
function palindrome(str) {
  // process the string
  str = str
    .replace(nonAlphanumeric, "")
    .toLowerCase();

  // takes the middle index
  let midleIndex = Math.ceil(str.length / 2);
  let nToLeft = midleIndex - Math.floor(str.length / 2) + 1;

  // i = how much you move right, and i+1 = how much you move left
  for (let i = 0; i < midleIndex; i++) {
    // if char from midle + i != char from midle - (i+ 2) return false
    if (str[midleIndex + i] != str[midleIndex - (i + nToLeft)]) return false;
  }

  return true;
}

// console.log(palindrome("racecar"));