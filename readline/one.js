const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1回だけ質問して終了するコード
rl.question('あなたの名前は？ ', (name) => {
  console.log(`こんにちは、${name}さん！`);
  rl.close();
});

// 2回目の質問を書いても動かない例（コメントアウト）
// rl.question('あなたの年齢は？ ', (age) => {
//   console.log(`年齢は${age}歳ですね！`);
//   rl.close();
// });

