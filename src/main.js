function returnHelloWorld() {
  return "hello world";
}

const input = "1 + 2 + 3";
const rawTokens = input.match(/\d+|\+/g);

const tokens = rawTokens.map(value => ({value}));
console.log(tokens);




function main() {
//comment
  console.log("main");
  console.log(returnHelloWorld());
}
/*
  comment
*/

main();
