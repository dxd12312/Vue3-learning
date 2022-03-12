let values = [1,2,5,10,19]
values.reverse()  //数组倒序方法
console.log(values.toString()) //数组倒序
values.sort()
console.log(values.toString()) //数组正序

function compare(value1,value2) { //定义比较规则的函数
    return value1 - value2//返回值三种可能
}
values.sort(compare)  //使用比较规则
console.log(values.toString())  //排序结果

let players = [{name:"james",age:36},
               {name:"curry",age:31},
               {name:"kobe",age:39}]
function comparePlayer(player1,player2) {
    return player1.age - player2.age
}

players.sort(comparePlayer)
console.log(players)