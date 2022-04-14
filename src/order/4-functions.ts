const addNumbers = (x: number, y: number): number => x + y;
const addedNums = addNumbers('1', 1);

const log = (message: string | number): void => {
  console.log(message);
}

log(1);
log('a');

type MathFunc = (x: number, y: number) => number;

const add: MathFunc = (x: number, y: string): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;