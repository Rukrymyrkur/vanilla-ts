
const fooAny = (input: any) => {
  parseInt(input, 10)
  input.toLowerCase();
  input.i.can.do.anything.and.no.one.can.stop.me();
}

const fooUnknownBroken = (input: unknown) => {
  parseInt(input, 10)
  input.toLowerCase();
}

const fooUnknown = (input: unknown) => {
  if (typeof input === 'string') {
    parseInt(input, 10);
    input.toLowerCase();
  }

  else if (typeof input === 'number') {
    const a = input + 10;
  }
}

const isString = (input: unknown): input is string => typeof input === 'string';
const isNumber = (input: unknown): input is number => typeof input === 'number';

const foCheckedUnknown = (input: unknown) => {
  if (isString(input)) {
    parseInt(input, 10);
    input.toLowerCase();
  } else if (isNumber(input)) {
    const a = input + 10;
  }
}
