let answer: number = 42;
let isTheSkyBlue: boolean = true;
let assignedVariable: null = null;
let unassignedVariable: undefined = undefined;

// Type inference
let firstName = 'Alice';
firstName = 0;

// Type unions
let id: string | number = '42';
id = 22;

// Arrays
let arrayOfStrings: string[] = ['a', 'b', 'c'];
arrayOfStrings.push(true);

let arrayOfAnything: any[] = [1, true, 'a'];

// Tuples
let personTuple: [number, string, boolean] = [1, 'a', true];
let employee: [string, boolean][] = [['Alice', true], ['Bob', false]];
