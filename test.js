inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
inquirer.prompt([{
  type: 'autocomplete',
  name: 'from',
  message: 'Select a state to travel from',
  source: function (answersSoFar, input) {
    return myApi.searchStates(input)
  }
}]).then(function (answers) {
  // etc
})
