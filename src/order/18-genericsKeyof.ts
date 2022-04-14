const listProperties = <Data, Key extends keyof Data>(items: Data[], key: Key): Data[Key][] => {
  return items.map(item => item[key]);
}

const musicians = [
  { name: 'Jimi Hendrix', born: 1942 },
  { name: 'Britney Spears', born: 1981 },
  { name: 'Celine Dion', born: 1968 },
];

console.log(listProperties(musicians, 'name'));

const plants = [
  { name: 'Begonia', color: 'red' },
  { name: 'Monstera', color: 'green' },
  { name: 'Fiddly fig', color: 'green' },
];

console.log(listProperties(plants, 'color'));
