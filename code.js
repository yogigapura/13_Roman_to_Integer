/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;
  let r = 0;
  let num = 0;

  for (j = s.length - 1; j >= 0; j--) {
    if (s[j] === "I") {
      num = num + I;
    } else if (s[j] === "V") {
      if (s[j - 1] === "I") {
        V = V - 2;
      }
      num = num + V;
      V = 5;
    } else if (s[j] === "X") {
      if (s[j - 1] === "I") {
        X = X - 2;
      }
      num = num + X;
      X = 10;
    } else if (s[j] === "L") {
      if (s[j - 1] === "X") {
        L = L - 20;
      }
      num = num + L;
      L = 50;
    } else if (s[j] === "C") {
      if (s[j - 1] === "X") {
        C = C - 20;
      }
      num = num + C;
      C = 100;
    } else if (s[j] === "D") {
      if (s[j - 1] === "C") {
        D = D - 200;
      }
      num = num + D;
      D = 500;
    } else if (s[j] === "M") {
      if (s[j - 1] === "C") {
        M = M - 200;
      }
      num = num + M;
      M = 1000;
    }
  }

  return num;
};
