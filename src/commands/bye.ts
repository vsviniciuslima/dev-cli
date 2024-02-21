import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { name: "name", message: "Enter name of the task:", type: "input" },
  {
    name: "detail",
    message: "Enter the details of the task:",
    type: "input",
  },
]);

console.log(answers);

export default answers;
