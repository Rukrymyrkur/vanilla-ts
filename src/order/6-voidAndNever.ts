const sum = (a: number, b: number): number => {
  return a + b;
}

const sumVoid = (a: number, b: number): void => {
  a + b;
  console.log(a + b);
}

const raiseErr = (msg: string): never => {
  throw new Error(msg);
}

const sumNever = (a: number, b: number): void => {
  a + b;
}