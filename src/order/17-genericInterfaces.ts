interface Tab {
  id: string;
  position: number;
  data: any;
}

type NumberTabTyped = {
  id: string;
  position: number;
  data: number;
}

interface TabGeneric<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = TabGeneric<number>;
type StringTab = TabGeneric<string>;


