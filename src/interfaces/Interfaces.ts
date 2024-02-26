// Person interface definition
interface Person {
  name: string;
  age: string;
}

interface Arguments {
  [x: string]: unknown;
  a: boolean;
  b: string;
  c: number | undefined;
  d: (string | number)[] | undefined;
  e: number;
  f: string | undefined;
}

export default Arguments;
