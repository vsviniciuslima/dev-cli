import { spawn } from "child_process";
import { loadSettings } from "../../utils/settings/settings.js";
import { runCommand } from "../../utils/cmdRunner.js";

export function startLogstash(): void {
  process.chdir(
    `${loadSettings().applicationPaths["logstash"]}/logstash-8.13.2`
  );

  const logstashPath = loadSettings().applicationPaths["logstash"];
  const logstashVersion = "logstash-8.13.2";

  // Concatenate the path to the Logstash executable
  const logstashExecutable = `${logstashPath}/${logstashVersion}/bin/logstash`;

  console.log(`Starting Logstash from: ${logstashExecutable}`);

  // Spawn the Logstash process
  // const logstashProcess = spawn("bin/logstash", ["-f", "logstashsimple.conf"], {
  const logstashProcess = spawn("bin/logstash", [], {
    detached: true, // Detach the child process from the parent
    stdio: "inherit", // Inherit stdio streams from the parent
    shell: true,
  });

  // Handle process errors
  logstashProcess.on("error", (err) => {
    console.error("Error starting Logstash:", err);
  });

  // Handle process exit
  logstashProcess.on("exit", (code, signal) => {
    console.log(
      `Logstash process exited with code ${code} and signal ${signal}`
    );
  });
}
