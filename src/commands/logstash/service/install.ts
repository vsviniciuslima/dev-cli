import fs from "fs";
import { runCommand } from "../../utils/cmdRunner.js";
import { loadSettings } from "../../utils/settings/settings.js";
import { request } from "https";

export async function installLogstash(): Promise<any> {
  const userSettings = loadSettings();
  const installPath = userSettings.applicationPaths["logstash"];

  const applicationUrl =
    // "https://artifacts.elastic.co/downloads/logstash/logstash-8.13.2-windows-x86_64.zip";
    "https://drive.usercontent.google.com/u/0/uc?id=1-pw5K4tF5d5FPcwhGqsMRvZhV0oWR4tQ&export=download";
  console.log(`Instalando o logstash em ${installPath}\n\n`);
  console.log(`Indo para o diretório de instalação... ${installPath}`);

  process.chdir(installPath);
  console.log(`Iniciando download... em ${process.cwd()}`);
  return request(applicationUrl, (res) => {
    res
      .pipe(fs.createWriteStream("obsidian.zip"))
      .on("close", function () {
        console.log("File written!");
      })
      .on("error", function (err) {
        console.error("Error writing file:", err);
      });
  });
}

async function downloadFile(url: string, filePath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const fileStream = fs.createWriteStream(filePath);

    fileStream.on("error", (err) => {
      console.error("Error writing to file:", err);
      reject(err);
    });

    const req = request(url);

    req.on("error", (err) => {
      console.error("Error downloading file:", err);
      reject(err);
    });

    req.on("response", (response) => {
      console.log("Response headers:", response.headers);
    });

    req
      .pipe(fileStream)
      .on("close", () => {
        console.log("Downloaded successfully!");
        resolve();
      })
      .on("error", (err) => {
        console.error("Error downloading file:", err);
        reject(err);
      });
  });
}
