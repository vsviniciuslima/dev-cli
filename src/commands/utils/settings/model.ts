// Define the interface for your settings
export interface UserSettings {
  applicationPaths: {
    [appName: string]: string; // Assuming helper applications are stored as key-value pairs
  };
}

// Example default settings
export const defaultSettings: UserSettings = {
  applicationPaths: {},
};
