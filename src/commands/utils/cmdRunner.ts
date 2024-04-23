import { exec } from "child_process";

export function runCommandAsync(command: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }
      console.log(stdout);
      if (stderr) {
        console.error(`Command stderr: ${stderr}`);
      }
      resolve();
    });
  });
}

export function runCommand(command: string): void {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    console.log(stdout);
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
    }
  });
}
