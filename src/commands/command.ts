import { CommandModule, Argv, Options, ArgumentsCamelCase } from "yargs";

export interface MyOptions extends Options {
  interactive: boolean;
  env: string;
  color: string;
}

export class MyCommand<U extends MyOptions> implements CommandModule<{}, U> {
  public command = "my-cmd";
  public describe = "Just a simple generics example";

  public builder = (args: Argv): Argv<U> => {
    args.option("interactive", {
      boolean: true,
      alias: "i",
      describe: "get interactive with it!",
    });
    args.option("env", { string: true, alias: "e", describe: "Environment" });
    args.option("color", {
      boolean: true,
      describe: "disable color",
      default: true,
    });
    return args as unknown as Argv<U>;
  };

  public handler = async (args: ArgumentsCamelCase<U>) => {
    // type hinting works with the following!
    // --interactive --env=test --color
    console.log(args.color, args.env, args.interactive);
  };
}
