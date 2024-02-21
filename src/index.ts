#!/usr/bin/env node

import yargs, { Argv, ArgumentsCamelCase } from "yargs";
import { hideBin } from "yargs/helpers";

import { fetchData, fetchDataAsync } from "./commands/command.js";
import promptForTaskDetails from "./commands/formater.js";

// Define your command and options
// yargs
//   .command(
//     "bye [name] [age]",
//     "Print a farewell message",
//     (yargs: any) => {
//       yargs.positional("name", {
//         describe: "The name of the person to say goodbye to",
//         type: "string",
//         default: "world",
//       });
//       yargs.positional("age", {
//         describe: "The age of the person to say goodbye to",
//         type: "string",
//         default: "11",
//       });
//     },
//     (person: Person) => answers()
//   )
//   .help().argv;

console.log("Dev CLI");
yargs(hideBin(process.argv))
  .command(
    "select <color>",
    "Select a color to display",
    (args: Argv) => {
      args.positional("color", {
        describe: "The color to display. e.g.) Blue to display blue",
      });
    },
    ({ color }: ArgumentsCamelCase<{ color: string }>) => {
      fetchDataAsync().then((res) => console.log(res));
      console.log(fetchData());
      console.log(`Your color is ${color}!`);
    }
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })

  .command(
    "format <input>",
    "Format an input",
    (args: Argv) => {
      args.positional("input", {
        describe: "The input to format. e.g.) foo",
      });
    },
    async ({ input }) => {
      console.log("input", input);
      const taskDetails = await promptForTaskDetails(input as string);
      console.log("Task details:", taskDetails);
    }
  )
  .help()

  .command(
    "newcon <input>",
    "Format an input",
    (args: Argv) => {
      args.positional("input", {
        describe: "The input to format. e.g.) foo",
      });
    },
    async ({ input }) => {
      console.log("input", input);
      const taskDetails = await promptForTaskDetails(input as string);
      console.log("Task details:", taskDetails);
    }
  )
  .help()

  .parse();
