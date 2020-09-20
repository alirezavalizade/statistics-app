export const timeDiffSeconds = (end = +new Date(), start = +new Date()) => {
  return (end - start) / 1000;
};
