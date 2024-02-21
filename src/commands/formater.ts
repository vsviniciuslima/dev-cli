import inquirer from "inquirer";

interface TaskAnswers {
  name: string;
  detail: string;
}

// Define an async function to prompt for task details
const promptForTaskDetails = async (input: String): Promise<TaskAnswers> => {
  try {
    const answers: TaskAnswers = await inquirer.prompt([
      { name: "name", message: "Enter the name of the task:", type: "input" },
      {
        name: "detail",
        message: "Enter the details of the task:",
        type: "input",
      },
    ]);
    console.log("answers:", answers);

    const checkbox = await inquirer.prompt([
      {
        type: "checkbox",
        message: "Select toppings",
        name: "toppings",
        choices: ["Pepperoni", "Cheese", "Mushroom", "Bacon"],
      },
    ]);
    console.log("checkbox:", checkbox);

    const list = await inquirer.prompt([
      {
        type: "list",
        message: "Select a drink",
        name: "drink",
        choices: ["Coke", "Pepsi", "Sprite", "Water"],
      },
    ]);
    console.log("list:", checkbox);

    const confirm = await inquirer.prompt([
      {
        type: "confirm",
        message: "Are you sure?",
        name: "confirmation",
      },
    ]);
    console.log("confirm:", confirm);

    const password = await inquirer.prompt([
      {
        type: "password",
        message: "Enter your password",
        name: "password",
      },
    ]);
    console.log("password", password);
    return answers;
  } catch (error: any) {
    // Handle any errors that might occur during the prompt
    throw new Error(`Error prompting for task details: ${error.message}`);
  }
};

export default promptForTaskDetails;
