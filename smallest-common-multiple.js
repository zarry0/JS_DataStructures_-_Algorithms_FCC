function smallestCommons(arr) {

  let inputArr = [...arr].sort((a,b) => a - b);
  let factorArr = [], minFactorArr = [], factors = [], factorObj = {};
  let answer = 1;
  
  for (let i = inputArr[0]; i <= inputArr[1]; i++) factorArr.push(factorize(i));
  //console.log(factorArr);
  for (let j = 0; j < factorArr.length; j++) {
    minFactorArr.push(amountOf(factorArr[j]));
    for (let k = 0; k < factorArr[j].length; k++){
      if (!factors.includes(factorArr[j][k])) factors.push(factorArr[j][k]);
    }
  }
  factorObj = amountOf(factors);
  for (let i = 0; i < factors.length; i++) {
    for (let j = 0; j < minFactorArr.length; j++){
     if (minFactorArr[j][factors[i]] > factorObj[factors[i]]){
        factorObj[factors[i]] = minFactorArr[j][factors[i]]; 
     }
    }
  }

  //console.log(minFactorArr);
  //console.log(factors);
  console.log(factorObj);
  for (let factor in factorObj) {
    answer *= Math.pow(parseInt(factor,10), factorObj[factor]);
  }
  console.log(answer);
  return answer;

  function factorize(n){
    let factors = [], num = n;
    if (n <= 1) return [1];
    let i = 2;
    while(i <= n){
      if (isPrime(i) && num % i === 0) {
        num /= i;
        factors.push(i); 
      }else {
        i++;
      }
    }
    
    return factors;
  }

  function isPrime(n){
    if (n <= 1) return true;
    for (let i = 2; i < n; i++){
      if (n % i === 0) return false;
    }
    return true
  }

function amountOf(arr) {
 let counter = {};
 arr.forEach((element) => {
   if (counter[element]){
      counter[element] += 1;
   }else {
     counter[element] = 1;
   }
 });
 return counter;
}

}

smallestCommons([23, 18]);