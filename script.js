const game = (comp,you) => {
    if (comp==you){
        return null
    }
    else if(comp=="s"){
        if(you=="w"){
            return false
        }
        else if(you=="g"){
            return true
        }
    }
    else if(comp=="w"){
        if(you=="g"){
            return false
        }
        else if(you=="s"){
            return true
        }
    }
    else if(comp=="g"){
        if(you=="s"){
            return false
        }
        else if(you=="w"){
            return true
        }
    }
}
let  runAgain = true;
console.log("Computer Choosed! Now YOur Turned")
let randNO = Math.floor(Math.random() * 3) + 1;
if (randNO==1){
    comp = "s";
}
else if(randNO==2){
    comp= "w";
}
else{
    comp=="g"
}
while(runAgain){
let you = prompt("Choose Snake(s) , Water (w) , Or Gun(g)")

console.log("Computer Choosed =  ",comp)
console.log("You Choosed = ",you)
a = game(comp,you)
if (a==null){
    alert("Match Tie!")
}
else if(a==true){
    alert("Congratulations! You Won")
}
else{
    alert("You Lost!")
}
runAgain = confirm("Do You Want To Play Again?")
if(runAgain==false){
    alert("Thanku! Have A Good Day");   
    break;
}
}

// const game = (comp,you) => {
//     if (comp==you){
//         return null
//     }
//     else if(comp=="s"){
//         if(you=="w"){
//             return false
//         }
//         else if(you=="g"){
//             return true
//         }
//     }
//     else if(comp=="w"){
//         if(you=="g"){
//             return false
//         }
//         else if(you=="s"){
//             return true
//         }
//     }
//     else if(comp=="g"){
//         if(you=="s"){
//             return false
//         }
//         else if(you=="w"){
//             return true
//         }
//     }
// }
// console.log("Computer Choosed! Now YOur Turned")
// let randNO = Math.floor(Math.random() * 3) + 1;
// if (randNO==1){
//     comp = "s";
// }
// else if(randNO==2){
//     comp= "w";
// }
// else{
//     comp=="g"
// }
// let you = prompt("Choose Snake(s) , Water (w) , Or Gun(g)")

// console.log("Computer Choosed =  ",comp)
// console.log("You Choosed = ",you)
// a = game(comp,you)
// if (a==null){
//     alert("Match Tie!")
// }
// else if(a==true){
//     alert("Congratulations! You Won")
// }
// else{
//     alert("You Lost!")
// }


