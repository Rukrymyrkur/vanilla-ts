const sports: string[] = [
  'basketball',
  'football',
  'tennis',
  'basketball',
  'bowling',
  'tennis',
  'swimming'
];

const countBy = (array: string[]) => {
  return array.reduce((obj: { [key: string]: number }, item: string) => {
    if (item in obj) {
      obj[item] += 1;
    } else {
      obj[item] = 1
    }

    return obj
  }, {})
};

const countedBy = countBy(sports);
console.log(countedBy);

/// { basketball: 1, football: 1, ...}

//////

interface Team {
  team: string;
  titles: number;
}

const teams: Team[] = [
  { team: 'PHX', titles: 10 },
  { team: 'HOU', titles: 1 },
  { team: 'UTA', titles: 0 },
  { team: 'DEN', titles: 2 },
  { team: 'LAL', titles: 0 },
  { team: 'PIX', titles: 15 },
];

const filter = (array: Team[], predicate: (value: Team) => boolean) => {
  return array.reduce((filteredArray: Team[], value: Team) => {
    if (predicate(value)) {
      filteredArray.push(value);
    };

    return filteredArray;
  }, [])
};

const filtered = filter(teams, (teamInfo) => teamInfo.titles > 0);
console.log(filtered);

//////

const pairs: [string, string][] = [
  ['sun', 'Sunday'],
  ['mon', 'Monday'],
  ['tue', 'Tuesday'],
]

const fromPairs = (array: [string, string][]) => {
  return array.reduce((obj: Record<string, string>, value: [string, string]) => {
    obj[value[0]] = value[1];

    return obj;
  }, {})
};

// { sun: 'Sunday', mon: 'Monday', ... }

const gotTuples = fromPairs(pairs);
// console.log(gotTuples);

/////

const keyBy = (array: Team[], propName: keyof Team) => {
  return array.reduce((lookup: { [key: string]: Team }, value: Team) => {
    lookup[value[propName]] = value;

    return lookup;
  }, {})
}

const keyedBy = keyBy(teams, 'team');
console.log(keyedBy);
/*
{
  PHX: { team: 'PHX', titles: 10 },
  PHX: { team: 'PHX', titles: 10 },
  PHX: { team: 'PHX', titles: 10 },
  ...
}
*/

/////

const some = (array: number[], predicate: (num: number) => boolean) => {
  return array.reduce((passes, value) => {
    if (!passes) {
      return predicate(value)
    };

    return true;
  }, false)
}

const somed = some([2, 3, 14, 8, 11], (n) => n > 10);
console.log(somed);
