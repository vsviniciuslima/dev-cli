import { Options } from "yargs";
import { Application, ApplicationType } from "../utils/model.js";

export interface LogstashOptions extends Options {
  install: boolean;
  installPath: string;
}

export const logstashApplication: Application = {
  name: "logstash",
  repository: "logstash",
  type: ApplicationType.Zip,
};
