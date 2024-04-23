export interface Application {
  name: string;
  repository: string;
  type: ApplicationType;
}

export enum ApplicationType {
  Rest,
  Binary,
  Web,
  Zip,
}
