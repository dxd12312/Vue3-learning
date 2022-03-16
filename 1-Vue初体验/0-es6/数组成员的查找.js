let players =["curry","james","kobe","james","curry"];

console.log(players.indexOf("james"))
console.log(players.lastIndexOf("james"))

let findOne = players.find(function(value,index,arr){
    return value.include("cu")
})
console.log(findOne)

let findOneIndex = players.findIndex(function(value,index,arr){
    return value.include("cu")
})
console.log(findOneIndex)

// let findOne = players.find((value,index,arr) => value.include("cu"))

// let findOne = players.find((value) => value.include("cu"))
