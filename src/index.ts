#!/usr/bin/env node

import yargs, { Argv, ArgumentsCamelCase } from "yargs";
import { hideBin } from "yargs/helpers";

import { fetchData, fetchDataAsync } from "./commands/simple-command.js";
import promptForTaskDetails from "./commands/formatter.js";
import { MyCommand, MyOptions } from "./commands/command.js";
import { NewconCommand } from "./commands/newcon/newcon.js";
import { NewconOptions } from "./commands/newcon/model.js";
import { LogstashCommand } from "./commands/logstash/logstash.js";
import { LogstashOptions } from "./commands/logstash/model.js";

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

const yargsInstance = yargs(hideBin(process.argv));

// Create an instance of MyCommand
const myCommand = new MyCommand<MyOptions>();
const newcon = new NewconCommand<NewconOptions>();
const logstash = new LogstashCommand<LogstashOptions>();
yargs(hideBin(process.argv))
  .command(myCommand)
  .command(newcon)
  .command(logstash)
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

  .parse();
