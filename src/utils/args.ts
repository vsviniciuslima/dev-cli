import yargs, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";

export function getArgs(): any {
  return yargs(hideBin(process.argv)).argv;
}
