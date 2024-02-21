export async function fetchDataAsync(): Promise<string> {
  // Simulate a delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return a string as a placeholder for fetched data
  return "Simulated data fetched after 2 seconds";
}

export function fetchData(): String {
  return "Simulated data fetched instantly";
}
