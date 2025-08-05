const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('何か入力してください: ', (answer) => {
  console.log(`あなたの入力は: ${answer}`);
  rl.close();
});

