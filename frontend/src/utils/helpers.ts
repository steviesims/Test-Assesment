export const getInitials = (...params: string[]) => {
  return params.map((param) => param.slice(0, 1)).join("");
};
