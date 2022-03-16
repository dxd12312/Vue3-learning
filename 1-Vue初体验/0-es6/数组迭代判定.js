let players= [{name:"james", age: 36,},
              {name: "curry", age: 31},
              {name: "kobe", age: 39}]

let isGt30 = players.every(function(value,index,arr){
    return value.age > 30
})
console.log(isGt30)

let isContainCu = players.some(function(value,index,arr){
    return value.name.includes("cu") 
})

console.log(isContainCu)