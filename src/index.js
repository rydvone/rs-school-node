import { parseArgs } from './app/args.js';
import { getHomedir } from './app/homedir.js';


const welcome = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const welcomeMsg = `Welcome to the File Manager, ${nickname}!`;
  console.log(welcomeMsg);
  return nickname;
}

const goodbye = () => {
  const usernameArg = '--username=';
  const startArgs = process.argv;
  const nickname = parseArgs(startArgs, usernameArg);
  const goodbyeMsg = `Thank you for using File Manager, ${nickname}, goodbye`;
  console.log(goodbyeMsg);
}


const app = () => {
  const nickname = welcome();
  const homeDir = getHomedir();
  console.log('Homedir: ', homeDir);
  goodbye(nickname);
}

app();