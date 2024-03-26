import inquirer from "inquirer";
const _prompt = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: 'Enter the first number: ',
    },
    {
        type: "number",
        name: "secondNumber",
        message: 'Enter the second number: ',
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the math operation you want to perform:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);
let result;
switch (_prompt.operator) {
    case 'Add':
        result = _prompt.firstNumber + _prompt.secondNumber;
        console.log("The prompt for addition is: " + result);
        break;
    case 'Subtract':
        result = _prompt.firstNumber - _prompt.secondNumber;
        console.log("The prompt for subtraction is: " + result);
        break;
    case 'Multiply':
        result = _prompt.firstNumber * _prompt.secondNumber;
        console.log("The prompt for multiplication is: " + result);
        break;
    case 'Divide':
        result = _prompt.firstNumber / _prompt.secondNumber;
        console.log("The prompt for division is: " + result);
        break;
}
