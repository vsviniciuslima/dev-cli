import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";
import { getInstallPath } from "../utils/installPathResolver.js";
import { loadSettings, saveSettings } from "../utils/settings/settings.js";
import { LogstashOptions } from "./model.js";
import { installLogstash } from "./service/install.js";
import { startLogstash } from "./service/run.js";

export class LogstashCommand<U extends LogstashOptions>
  implements CommandModule<{}, U>
{
  public command = "logstash";
  public describe = "Execute o logstash localmente";

  public builder = (args: Argv): Argv<U> => {
    args.option("install", {
      boolean: true,
      alias: "i",
      describe: "Executa a instalação do logstash",
    });
    args.option("installPath", {
      string: true,
      alias: "p",
      describe: "Local de instalação do logtash",
    });
    return args as unknown as Argv<U>;
  };

  public handler = async (args: ArgumentsCamelCase<U>) => {
    var installPath;
    const userSettings = loadSettings();

    if (args.install) {
      console.log("Instalando o logstash...");

      if (args.installPath) {
        installPath = args.installPath;
      } else {
        console.log("O diretório padrão dessa aplicação é /usr/local/bin.");
        installPath = await getInstallPath();
      }

      userSettings.applicationPaths["logstash"] = installPath;
      saveSettings(userSettings);

      await installLogstash()
        .then(() => console.log("acaboooou!"))
        .catch((err) => console.error("fodeu!!!", err));
    }

    startLogstash();
  };
}
