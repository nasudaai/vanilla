const rawData = ["Taro", "Jiro", "Saburo"];

// 通常の書き方：keyと変数名を別々に書く
const users1 = rawData.map(name => {
  return { name: name }; // key: 変数名 の明示的記述
});

// 省略記法：key名と変数名が同じなので省略できる
const users2 = rawData.map(name => ({ name }));

console.log(users1);
// [ { name: 'Taro' }, { name: 'Jiro' }, { name: 'Saburo' } ]

console.log(users2);
// [ { name: 'Taro' }, { name: 'Jiro' }, { name: 'Saburo' } ]

