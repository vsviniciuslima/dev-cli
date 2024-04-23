import fs from "fs";
import { UserSettings, defaultSettings } from "./model.js";

// File path for storing settings

const settingsFilePath = `${process.env.APPDATA}/yz-cli/settings.json`;

// Function to load settings from JSON file
export function loadSettings(): UserSettings {
  try {
    const settingsData = fs.readFileSync(settingsFilePath, "utf-8");
    return JSON.parse(settingsData);
  } catch (error) {
    // console.error("Error loading settings:", error);
    console.log("Ainda não tem preferências, retornando default");
    // Return default settings if file doesn't exist or parsing fails
    return defaultSettings;
  }
}

// Function to save settings to JSON file
export function saveSettings(settings: UserSettings): void {
  try {
    if (!fs.existsSync(`${process.env.APPDATA}/yz-cli`)) {
      console.log("A pasta de configuração não existe ainda. Criando...");
      fs.mkdirSync(`${process.env.APPDATA}/yz-cli`, { recursive: true });
    }
    const settingsJson = JSON.stringify(settings, null, 2);
    fs.writeFileSync(settingsFilePath, settingsJson, "utf-8");
    console.log("Settings saved successfully.");
  } catch (error) {
    console.error("Error saving settings:", error);
  }
}
