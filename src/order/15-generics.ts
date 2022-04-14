const diffNumberArray = (arr1: number[], arr2: number[]): number[] =>
  [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));

const diffStringArray = (arr1: string[], arr2: string[]): string[] =>
  [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));

const diffArray = <T>(arr1: T[], arr2: T[]): T[] =>
  [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));

diffArray<number>([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray<string>(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);