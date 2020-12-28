const category = "sqs-function";
const path = require("path");

async function executeAmplifyCommand(context) {
  let commandPath = path.normalize(path.join(__dirname, "commands"));
  if (context.input.command === "help") {
    commandPath = path.join(commandPath, category);
  } else {
    commandPath = path.join(commandPath, category, context.input.command);
  }

  console.log(context);
  console.log(commandPath);

  const commandModule = require(commandPath);
  console.log(commandModule);
  await commandModule.run(context);
}

module.exports = {
  executeAmplifyCommand
};
