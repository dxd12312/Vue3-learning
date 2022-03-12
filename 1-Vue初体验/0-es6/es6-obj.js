class Player{
    // 
    constructor (name,age){
         this.name=name;
         this.age=age;
    }
    // 
    toPrint(){
        console.log(this.name + "------" + this.age);
    }
   
}
var player1= new Player('zhangsan',22);
player1.toPrint();


