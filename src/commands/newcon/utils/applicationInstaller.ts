import { Application, ApplicationType } from "../model.js";

export async function installApplication(
  application: Application,
  installPath: string
): Promise<any> {
  switch (application.type) {
    case ApplicationType.Rest:
      await installRestApplication(application, installPath);
      break;
    case ApplicationType.Binary:
      await installBinaryApplication(application, installPath);
      break;
    case ApplicationType.Web:
      await installWebApplication(application, installPath);
      break;
    default:
      console.error("Tipo de aplicação não suportado");
      return;
  }
}

async function installRestApplication(
  application: Application,
  path: string
): Promise<any> {
  console.log("instalando aplicação rest", application.name, path);
  return Promise.resolve();
}

async function installWebApplication(
  application: Application,
  path: string
): Promise<any> {
  console.log("instalando aplicação web", application);
  return Promise.resolve();
}

async function installBinaryApplication(
  application: Application,
  path: string
): Promise<any> {
  console.log("instalando aplicação binaria", application);
  return Promise.resolve();
}
