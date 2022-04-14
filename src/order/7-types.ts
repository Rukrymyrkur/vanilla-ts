type Hungry = boolean;
type Greet = (name: string) => string;
const greetPerson: Greet = (name: string) => `Hello, ${name}!`;

const isAliceHungry: Hungry = true;

type PersonType = {
  name: string;
  hungry: boolean;
}

// Extending types
type PersonType2 = {
  name: string;
} & { programmer: boolean; };

const person4: PersonType = {
  name: 'Alice',
  hungry: true,
};

const person5: PersonType2 = {
  name: 'Bob',
  programmer: true,
};

// Unions
type PersonType3 = PersonType | PersonType2;

const people: PersonType3[] = [
  {
    name: 'Alice',
    programmer: true,
  },
  {
    name: 'Bob',
    hungry: true,
  }];