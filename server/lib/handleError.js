export const handleError = (error) => {
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
