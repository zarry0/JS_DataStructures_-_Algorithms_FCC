function checkCashRegister(price, cash, cid) {
  const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let changeObj = {}, change = cash - price, cidTotal = 0;
  let cidResult = [], current = 0;

  for(let i = cid.length - 1; i >= 0; i--) {
    cidTotal += cid[i][1];
    cidTotal = Math.round(cidTotal * 100)/ 100;
    if (change < values[i]) continue;
    
    current = 0;
    while (current < change && current < cid[i][1]) {
      if (current + values[i] > change) break;
      current += values[i];
      current = Math.round(current * 100)/ 100;
    }
    cidResult.push([cid[i][0], current]);
    change -= current;
    change = Math.round(change * 100)/ 100;
    if (change === 0) break;
  }

  changeObj = (change !== 0) ? {status: 'INSUFFICIENT_FUNDS', change: []} :
              ((cidTotal === cash - price) ? {status: 'CLOSED', change: cid} : 
              {status: 'OPEN', change: cidResult});

  return changeObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);