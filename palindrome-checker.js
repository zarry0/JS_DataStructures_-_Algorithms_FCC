function palindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/ig, '');
  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) return false;
  }
  console.log(cleanStr)
  return true;
}

palindrome("2_A3*3#A2");