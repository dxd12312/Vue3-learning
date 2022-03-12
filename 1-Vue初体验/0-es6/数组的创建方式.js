var players = new Array();
let players = new Array(20); //length为20的数组
let players = new Array("curry","james","kobe"); //创建带有三个初始化项的数组
// 关键字new可以省略
let players = Array();
let players = Array(20);
let players = Array(20).fill(0);//创建并填充一个20项初始值都为0的数组
let players = Array("curry","james","kobe");

let players = [];
let players = ["curry","james","kobe"];//创建带有三个初始化项的数组

let players = Array.of("curry","james","kobe")
console.log(players);//["curry","james,"kobe]

let players = ["curry","james","kobe"];
// 原始长度是3，将数组长度修改为2，相当于删除了末尾的一项。因此可以使用该属性完成数组末尾数据删除功能
players.length = 2;
console.log(players[2]) //数组下标是2 （第三项，0开始），打印结果是undefined
let players = ["curry","janes","kobe"];//创建带有3个初始化项的数组
players[7] = "jorden";// 设置数组中第8项
console.log(players.length);  //输出结果为8
console.log(players[5]) //undefined

console.log(Array.isArray(players))//true,ES5方法，推荐使用
console.log(players instanceof Array)  //true，多个js前端框架共用环境下可能有问题


let players = ["curry","james","kobe"]; //创建带有三个初始化项的数组
console.log(players.toString());  //curry，james，kobe。默认使用逗号分隔
console.log(players.toLocaleString()) //curry，james，kobe
console.log(players.join("&"));//curry&james&kobe,如果想自定义分隔符号使用join
