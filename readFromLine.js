const readline = require('readline');

let rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Please enter your name: ', name=>{
    console.log(`Hello ${name}`);
    rl.close();
})