function Player (name,age) {
    this.name = name;
    this.age = age;

}
// 

Player.prototype.toPrint = function(){
    console.log(this.name + "------" + this.age);
}

var player1 = new Player("Tom",30);
var player2 = new Player("Jack",20);





