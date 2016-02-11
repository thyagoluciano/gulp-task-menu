var inquirer = require("inquirer");

function ignore(ignoreList, task) {
  for (var key in ignoreList) {
    if (ignoreList[key] == task)
      return true;
  }

  return false;
};

module.exports = function (gulp, ignoreList) {

  var choices = [];

  for (var key in gulp.tasks) {
    if (!ignore(ignoreList, key)) {
      choices.push(key);
    }
  }

  choices.push('-- Quit --');

  var question = {
        type: "list",
        name: "gulp",
        message: "What do you want to do?",
        choices: choices
    };

  inquirer.prompt([question], function (answers) {
    if (answers.gulp === '-- Quit --') {
      process.exit(0);
    } else {
      gulp.start(answers.gulp);
    }
  });
};
