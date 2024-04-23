import { Options } from "yargs";
import { Application, ApplicationType } from "../utils/model.js";

export interface NewconOptions extends Options {
  interactive: boolean;
  env: string;
  color: string;
}

export const applications = new Map<string, Application>([
  [
    "Newcon Mensageria API",
    {
      name: "Newcon Mensageria API",
      repository: "Newcon Mensageria API",
      type: ApplicationType.Rest,
    },
  ],
  [
    "Newcon Reports API",
    {
      name: "Newcon Reports API",
      repository: "Newcon Reports API",
      type: ApplicationType.Rest,
    },
  ],
  [
    "Newcon Santander API",
    {
      name: "Newcon Santander API",
      repository: "Newcon Santander API",
      type: ApplicationType.Rest,
    },
  ],
  [
    "Newcon Web API",
    {
      name: "Newcon Web API",
      repository: "Newcon Web API",
      type: ApplicationType.Rest,
    },
  ],
  [
    "Newcon Web API",
    {
      name: "Newcon Web API",
      repository: "Newcon Web API",
      type: ApplicationType.Rest,
    },
  ],
  [
    "Newcon Client",
    {
      name: "Newcon Client",
      repository: "Newcon Client",
      type: ApplicationType.Binary,
    },
  ],
  [
    "Newcon Batch",
    {
      name: "Newcon Batch",
      repository: "Newcon Batch",
      type: ApplicationType.Binary,
    },
  ],
  [
    "Newcon Web",
    {
      name: "Newcon Web",
      repository: "Newcon Web",
      type: ApplicationType.Web,
    },
  ],
]);
