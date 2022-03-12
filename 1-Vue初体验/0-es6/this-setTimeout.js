class Player{
    // 
    constructor (name,age){
         this.name=name;
         this.age=age;
    }
       // 
//        toPrint(){
//            setTimeout(function(){
//                console.log(_his.name + "------" + _this.age);
//            },1000)
        
//     }
   
// }
toPrint(){
    setTimeout(() => {
            console.log(this.name + "------" + this.age);
  
    
    },1000)
 
}

}
var player1= new Player('zhangsan',22)
player1.toPrint()
