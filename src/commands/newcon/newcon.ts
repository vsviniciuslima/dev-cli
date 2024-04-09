import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";
import { Application, NewconOptions } from "./model.js";
import { installApplication } from "./utils/applicationInstaller.js";
import { getApplication } from "./utils/applicationResolver.js";
import { getInstallPath } from "./utils/installPathResolver.js";

export class NewconCommand<U extends NewconOptions>
  implements CommandModule<{}, U>
{
  public command = "newcon install";
  public describe = "Instale uma aplicação Newcon localmente";

  public builder = (args: Argv): Argv<U> => {
    args.option("interactive", {
      boolean: true,
      alias: "i",
      describe: "get interactive with it!",
    });
    args.option("env", { string: true, alias: "e", describe: "Ambiente" });
    return args as unknown as Argv<U>;
  };

  public handler = async (args: ArgumentsCamelCase<U>) => {
    const application: Application = await getApplication();
    let installPath = await getInstallPath();

    await installApplication(application, installPath).then(() =>
      console.log("Aplicação instalada com sucesso")
    );
  };
}
