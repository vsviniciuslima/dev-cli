import inquirer from "inquirer";

export async function getInstallPath(): Promise<string> {
  const installPath = await inquirer.prompt({
    type: "list",
    message: "Escolha onde instalar a aplicação",
    name: "directory",
    choices: [
      "Escolher um diretorio",
      "Instalar no diretorio padrão",
      "Instalar no diretorio atual",
    ],
  });

  switch (installPath.directory) {
    case "Escolher um diretorio":
      const directory = await inquirer.prompt({
        type: "input",
        message: "Digite o nome do diretorio",
        name: "directory",
      });
      return directory.directory;
    case "Instalar no diretorio padrão":
      return "/usr/local/bin";
    case "Instalar no diretorio atual":
      return process.cwd();
    default:
      return "/usr/local/bin";
  }
}
