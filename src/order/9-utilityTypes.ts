type House = {
  id: number;
  street: string;
  forSale: boolean;
  color?: 'blue' | 'red' | 'green';
}

interface HouseWithoutId {
  id: number;
}

const updateHouse = (id: number, house: Partial<House>) => { };
updateHouse(1, { forSale: true });

const updateHouse2 = (id: number, house: Required<House>) => { };
updateHouse2(1, { street: 'Baker street', forSale: false });


const paintHouse = (id: number, color: NonNullable<House['color']>) => { };
paintHouse(1, 'blue');

type StreetName = Pick<House, 'street'>;

type ForSale = Omit<House, 'color' | 'street' | 'pool'>;

const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20,
};

const houses: Record<string, House> = {
  House1: {
    id: 1,
    street: 'Baker street',
    forSale: true,
  },
  House2: {
    id: 2,
    street: 'Baker street',
    forSale: false,
  },
};

type Menu = 'Fish & Chips' | 'Caesar salad' | 'Avocado toast' | 'Lemonade';
let customerPick: Menu;
customerPick = 'Caesar salad';


type HasAllergens = 'Avocado toast';
let safePick: Exclude<Menu, HasAllergens>;
safePick = 'Fish & Chips';


type HasDiscount = 'Orange juice' | 'Lemonade' | 'Fish fingers';
type CheaperOptions = Extract<Menu, HasDiscount>;