#!/user/bin/env node

const {execSync} = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (error) {
        console.log(error);
        return false
    }
    return true
        
}

const repoName = process.argv[2];
const cloneCommand = `git clone --depth 1 https://github.com/TheWisePigeon/express-ts-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating new express-ts-starter repo: ${repoName}`);
const clone = runCommand(cloneCommand);
if (!clone) {
    console.log('Failed to clone repo');
    process.exit(1);
}
console.log('Cloned repo');
console.log('Installing dependencies');
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
    console.log('Failed to install dependencies');
    process.exit(1);
}
console.log('Installed dependencies');
console.log('Run npm run dev to start the app');