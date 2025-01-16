const numRandom = ({ max }: { max: number }): number => {
  return Math.floor(Math.random() * max + 1);
};

export { numRandom };
