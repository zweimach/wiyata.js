export function checkCashRegister(price, cash, cid) {
  let totalChange = cash - price;

  let totalInDrawer =
    Math.round(cid.reduce((acc, [, cash]) => acc + cash, 0) * 100) / 100;

  const currencyList = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let change = cid
    .reverse()
    .map(([currency, available]) => {
      if (
        available > 0 &&
        totalChange > 0 &&
        totalChange >= currencyList[currency]
      ) {
        if (available === totalChange || available < totalChange) {
          totalChange = (totalChange * 100 - available * 100) / 100;
          totalInDrawer = totalInDrawer - available;

          return [currency, available];
        } else {
          const portion = Math.trunc(totalChange / currencyList[currency]);
          const remainder = portion * currencyList[currency];

          totalChange = Math.round((totalChange - remainder) * 100) / 100;
          totalInDrawer = totalInDrawer - remainder;

          return [currency, remainder];
        }
      }
    })
    .filter(array => array !== undefined);

  if (totalChange !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalInDrawer === 0) {
    return { status: "CLOSED", change: cid.reverse() };
  }

  return { status: "OPEN", change };
}
