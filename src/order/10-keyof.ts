interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  likes: string[],
}

const contacts: Contact[] = [
  {
    id: 1,
    firstName: 'Harry',
    lastName: 'Potter',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    id: 2,
    firstName: 'Sherlock',
    lastName: 'Holmes',
    likes: ['Intriguing Cases', 'Violin'],
  },
];

const lookUpProfile = (name: Contact['firstName'], prop: keyof Contact) => {
  const foundContact = contacts.find(contact => contact.firstName === name);
  if (!foundContact) {
    return `${name} not found.`;
  }

  return `${name} ${prop}: ${foundContact[prop]}`
};

console.log(lookUpProfile('Harry', 'lastName'));