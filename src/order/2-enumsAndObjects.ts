// Enums
enum Airports {
  KUN = 'Kaunas',
  PLQ = 'Palanga',
  SQQ = 'Šiauliai',
  VNO = 'Vilnius',
}

const airport = Airports.KUN;

// Objects
const user1: { id: number, name: string } = {
  id: 1,
  name: 'Alice',
}

type User = {
  id: number,
  name: string,
}

const user2: User = {
  name: 'Bob',
  id: 2,
}

const user3: User = {
  name: 'Charlie',
}
