/**
 * 2个正整数字符串加法
 */
export const plus = (x: string, y: string) => {
  let xr = x.split("").reverse();
  let yr = y.split("").reverse();
  let len = Math.max(xr.length, yr.length);
  let items = [];
  for (let i = 0; i < len; i++) {
    let xv = xr[i] || "0";
    let yv = yr[i] || "0";
    items[i] = +xv + +yv + "";
  }

  let sum = items.reduce((sum, item, index) => {
    let sumlen = sum.length;

    // 如果之前相加进了一位
    if (sumlen > index) {
      let borrow = sum.substring(0, 1);
      let placed = sum.substring(1);
      let next = +borrow + +item + "";
      return next + placed;
    } else {
      return item + sum;
    }
  }, "");

  return sum;
};
