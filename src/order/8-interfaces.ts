interface Person {
  name: string;
  age: number,
  preferences?: {
    likes: string[];
    dislikes?: string[];
  }
}

const person1: Person = {
  name: 'Alice',
  age: 24,
}

const preferences: string[] | undefined = person1.preferences?.dislikes;
const preferences2: string[] = person1.preferences!.dislikes!;


interface IGreeting {
  (name: string): string;
}

const greet: IGreeting = (name: string) => `Hello, ${name}!`;

// Extending interfaces
interface AfternoonPerson extends Person {
  hungry: boolean,
}

const person3: AfternoonPerson = {
  name: 'Bob',
  age: 42,
  hungry: true,
}

interface AfternoonPerson {
  coffee: boolean;
}