enum GuitarType {
  Classical = "Classical",
  Electric = "Electric"
}

interface GuitarBase {
  stringCount: number;
  material: "walnut" | "maple" | "rosewood";
}

interface ClassicalGuitar extends GuitarBase {
  type: GuitarType.Classical;
};

interface ElectricGuitar extends GuitarBase {
  type: GuitarType.Electric;
};

type Guitar = ClassicalGuitar | ElectricGuitar;

const isClassicalGuitar = (guitar: Guitar): guitar is ClassicalGuitar => guitar.type === GuitarType.Classical;
const isElectricGuitar = (guitar: Guitar): guitar is ElectricGuitar => guitar.type === GuitarType.Electric;

const guitar1: Guitar = {
  type: GuitarType.Electric,
  material: "maple",
  stringCount: 6,
};

const guitar2: Guitar = {
  type: GuitarType.Classical,
  material: "rosewood",
  stringCount: 6,
};

isClassicalGuitar(guitar1);
isElectricGuitar(guitar1);

const playGuitar = (guitar: Guitar): string => {
  if (isElectricGuitar(guitar)) {
    return 'Playing Nothing Else Matters plugged in'
  } else {
    return 'Playing Tears in Heaven accoustically'
  }
}

console.log(playGuitar(guitar1))
console.log(playGuitar(guitar2))