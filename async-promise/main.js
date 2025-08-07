function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms}ミリ秒経過`);
      resolve("完了");
    }, ms)
  });
}

const result = wait(1000);
console.log(result);
