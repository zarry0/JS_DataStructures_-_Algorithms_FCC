function telephoneCheck(str) {
  if (/[^0-9\)\(-\s]|\)$|^\-/ig.test(str)) return false;
  if (/\(|\)/g.test(str) && str.match(/\(|\)/g).length % 2 !== 0) return false;
  let numArr = str.split(/-|\s|[()]/).filter(num => num !== '');
  let num;
  if (numArr.length === 1) {
    if (numArr[0].length < 10) return false;
    if (numArr[0].length === 11 && numArr[0][0] !== '1') return false;
  }else {
    num = numArr.join('');
    if (num.length < 3 || numArr.length > 4) return false;
    if (num.length < 10 || num.length > 11) return false;
    if (num.length === 11 && num[0] !== '1') return false;
  }

  return true;
}

telephoneCheck("2(757)6227382");