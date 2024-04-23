import inquirer from "inquirer";
import { applications } from "../newcon/model.js";
import { Application } from "./model.js";

export async function getApplication(): Promise<Application> {
  const applicationAnswer = await inquirer.prompt([
    {
      type: "list",
      message: "Selecione uma aplicação para instalar",
      name: "name",
      choices: Array.from(applications.keys()),
    },
  ]);

  const application: Application | undefined = applications.get(
    applicationAnswer.name
  );

  if (!application) {
    throw new Error("Aplicação não encontrada");
  }

  return application;
}
