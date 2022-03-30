 
ai = 0;
user = 0;
 
function askName() {
   var name = prompt("welcome to 21, What is your name")
   return name
}
 
 
function compTurn() {
   do {
       var numbers = Math.floor(Math.random() * 10+1);
       ai = ai + numbers;
       alert(`The AI has ${numbers}. The new total is ${ai}`);
    
     } while (ai <= 16);
}
 
function userTurn () {
   do {
       var go  = prompt("do you want to go again")
       if (go == "y"){
       var numbers = Math.floor(Math.random() * 10+1);
       user = user + numbers;
       alert(`You have ${numbers}. The new total is ${user}`);
       }
       alert(user)
 
    
     } while ((go == "y") && (user <= 20))
}
 
function compare(user, comp) {
   if (user > 21){
       alert("player lost")
       compscore++
   } else if (ai > 21){
       alert("ai lost")
       compscore++
   } else if (user < 21){
       alert("player won")
       compscore++
   } else if (ai < 21){
       alert("ai won")
       compscore++
   } else if (user == 21){
       alert("user won")
       compscore++
   } else if (ai == 21){
       alert("ai won")
       compscore++
   }
}
 
 
 
 
var n = askName()
 
 
 
 
compTurn()
userTurn()
compare()


