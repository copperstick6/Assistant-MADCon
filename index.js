'use strict';

const ApiAiApp = require('actions-on-google').ApiAiApp

const WELCOME_INTENT = 'input.welcome'; //this is the name rom the API.AI intent. check the API.AI event console.
const NAME_INTENT = 'input.name'
exports.silicon = (req, res) => {
  const app = new ApiAiApp({ request: req, response: res});
  function welcomeIntent(app){
    app.ask('Welcome to MADCon. Please say your name continue.')
    return
  }
  function getName(app){
	  let name = app.getArgument('name')
	  app.tell("Your name is " + name)
  }

  let actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent)
  actionMap.set(NAME_INTENT, getName)
  app.handleRequest(actionMap);
}
