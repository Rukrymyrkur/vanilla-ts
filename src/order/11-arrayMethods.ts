interface Human {
  name: string;
  age?: number
}

const humans: Human[] = [
  { name: 'Alice', age: 20 },
  { name: 'Bob' },
  { name: 'Charlie', age: 10 },
  { name: 'David', age: 50 },
  { name: 'Evan', age: 42 }
];

const someShortNames: boolean = humans.some(({ name }) => name.length <= 5);

const allShortNames: boolean = humans.every(({ name }) => name.length <= 5);

const longName: Human | undefined = humans.find(({ name }) => name.length > 5);

const charlie: Human | undefined = humans.find(({ name }) => name === 'Charlie');

const longNameIndex: number = humans.findIndex(({ name }) => name.length > 5);

const ageUnknown: Human[] = humans.filter(person => !person.hasOwnProperty('age'));


console.log(someShortNames)
console.log(allShortNames)
console.log(longName)
console.log(charlie)
console.log(longNameIndex)
console.log(ageUnknown)