// while-cli.js
// ユーザーが 'exit' と入力するまで繰り返す例

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let running = true;

function ask() {
  rl.question("何か入力してください（exitで終了）: ", (answer) => {
    if (answer.trim().toLowerCase() === "exit") {
      running = false;
      rl.close();
    } else {
      console.log(`あなたが入力したのは: ${answer}`);
      if (running) ask(); // まだ続く場合、再度質問
    }
  });
}

ask();

