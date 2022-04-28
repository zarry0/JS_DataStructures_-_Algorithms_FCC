function convertToRoman(num) {
  let numerals = {};
  let numElements = [], n;
  for (let i = 0; i < `${num}`.length; i++) {
    n = (num % Math.pow(10, i + 1) - num % Math.pow(10, i)) / Math.pow(10,i);
    if (n === 0) continue;
    switch (i) {
      case 0:
        numerals = {1: 'I', 5: 'V', 10: 'X'};
        break;
      case 1:
        numerals = {1: 'X', 5: 'L', 10: 'C'};
        break;
      case 2:
        numerals = {1: 'C', 5: 'D', 10: 'M'};
        break;
      case 3:
        numerals = {1: 'M'};
        break;
      default:
        break;
    }
    
    if (n <= 3){
      for (let j = 1; j <= n; j++) numElements.unshift(numerals['1']);
    }else if (n  === 4) {
      numElements.unshift(numerals['5']);
      numElements.unshift(numerals['1']);
    } else if (n > 8) {
      numElements.unshift(numerals['10']);
      numElements.unshift(numerals['1']);
    }else {
      for (let j = 1; j <= n - 5; j++) numElements.unshift(numerals['1']);
      numElements.unshift(numerals['5']);
    }
  }

 return numElements.join('');
}

convertToRoman(3999);