export const defaultToString = (p: any) => {
  if (p === null) {
    return "NULL";
  } else if (p === undefined) {
    return "undefined";
  } else {
    return p.toString();
  }
};
