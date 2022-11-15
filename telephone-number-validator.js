function telephoneCheck(str) {
  const match = /(^\(\d{3}\)((\s|)\d{3}-\d{4})|^\d{3}(-\d{3}-\d{4}|\s\d{3}\s\d{4}|\d{3}\d{4}))/;
  
  const nums = str.match(/\d/g).length;
  if (nums > 10) {
    if (str[0] !== "1") return false;
    str = str.slice(1).trim();
  }

  return match.test(str);
}

console.log(telephoneCheck("(555)-555-5555"));