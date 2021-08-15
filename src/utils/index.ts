export const defaultToString = (p: any) => {
  if (p === null) {
    return "NULL";
  } else if (p === undefined) {
    return "undefined";
  } else {
    return p.toString();
  }
};

export const factorialIterative = (n: number): number => {
  if (n > 1) {
    return n * factorialIterative(n - 1);
  } else {
    return 1;
  }
};

export const fibonacciIterative = (n: number): number => {
  if (n < 1) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let f1 = 0;
  let f2 = 1;
  let fi: number = 1;
  for (let i = 2; i <= n; i++) {
    fi = f1 + f2;
    f1 = f2;
    f2 = fi;
  }

  return fi;
};

/**
 * 斐波那契数列
 */
export const fibonacciMemoization = () => {
  let memo = [0, 1];
  const fibonacci = (n: number): number => {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
  };
  return fibonacci;
};
