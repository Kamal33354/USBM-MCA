//syntax : for(initialzaiton:condition; inc or dec)

// for(let i=5;i>=1;i--)
//     {
//         console.log(i);
// }

// Task-1:
//Generate random numbers and add them upto 5 Time

// let sum =0;
// for (let i=0;i<15;i++){
//     let randomNumber = Math.floor(Math.random() *10) + 1;
//     console.log(`Random Number ${i+1} : ${randomNumber}`);
//     sum += randomNumber;
// }

// console.log(`Total sum : after adding ${sum} `)

//Nested loop:
    //A loop inside another loop
//Example:
//Syntax : 
//for (initilization;condition;increment/Decrement){
    //code to be executed
   // for (initilization;condition;increment/Decrement) {
   // code to be executed
   //}
//}

// for(let i =1;i<=5;i++){
//     for (let j=1;j<=2;j++){
//         console.log(j);
//     }

//     console.log(i);
// }


//Examples:
//Pattern Printing 
for (let i=1;i<=5;i++){
    let pattern = "";
    for(let j =1;j<=i;j++){
        pattern += "*";
    }
    console.log(pattern);
}
