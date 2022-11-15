function convertToRoman(num) {

  function parse(res) {
    const roman = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M",
    };
    const inRoman = [];

    for (const num of res)
      inRoman.push(roman[num])

    return inRoman.join("");
  } 

  const combinations = [
    1, 5, 10, 50, 100, 500, 1000
  ].reverse();
  const result = [];
  let rest = num;
  
  while(rest > 0) {
    inner: for (let i in combinations) {
      const candidate = combinations[i];
      // the nearest number like (1, 10, 100) to the candidate
      let closestDecimal;
      let closestIndex = parseInt(i) + (parseInt(i) % 2);
      if (combinations[closestIndex] == candidate && candidate !== 1)
        closestIndex += 2;
      closestDecimal = combinations[closestIndex];
      
      if (rest - candidate >= 0) {
        result.push(candidate);
        rest -= candidate;
        break inner;
      } else if (rest - (candidate - closestDecimal) >= 0) {
        result.push(closestDecimal);
        result.push(candidate);
        rest -= candidate - closestDecimal;
        break inner;
      }
    }
  }

  return parse(result);
}

console.log(convertToRoman(9));