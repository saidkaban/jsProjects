const currencyMap = {
    "ONE HUNDRED": 100.0,
    "TWENTY": 20.0,
    "TEN": 10.0,
    "FIVE": 5.0,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
}

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let cidValue = cid.map(cur => cur[1])
    .reduce((a, b) => a + b)

  if (cidValue == changeDue) {
    return {
      status: "CLOSED",
      change: cid
    };
  }
  let answer = {
      status: "OPEN",
      change: []
      }
    
  for (let i = cid.length - 1; i >= 0; i--){
    let curName = cid[i][0]
    let curAmount = cid[i][1]
    let curSize = currencyMap[curName]
    let curChange = 0
    while (curSize <= changeDue && curAmount > 0) {
      console.log(curName, curAmount, changeDue);
      curChange += curSize;
      changeDue -= curSize;
      curAmount -= curSize;
	    changeDue = Math.round(changeDue * 100) / 100;
    }
    if (curChange > 0) {
      answer["change"].push([curName, curChange])
    }
  }
  if (changeDue !== 0) {
      answer["status"] = "INSUFFICIENT_FUNDS";
      answer["change"] = [];
      return answer;
    }
  return answer
}