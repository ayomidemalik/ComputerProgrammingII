//console.log("Now trying out ES6+");

import logger, {appName, dummyFunction} from './tools.js';

logger("I am logging using tools module");

logger("Welcome! The application name is" + appName + ". There is a function that returns'" + dummyFunction() +"'");