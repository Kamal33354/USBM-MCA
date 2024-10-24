//function is a reusable block of code to perfom some certain task.
// Declaration
// function Name() {
    //    code 
//      }

//Write a function to print your name..
// function printName(){
//     console.log(`My name is Kamal`);
// }

// printName() //Function Call;

//                Arguments and parameters

// function printName(name,age,city){ //parameter
//     console.log(`My name is ${name}`);
//     console.log(`My age is ${age}`);
//     console.log(`My city is ${city}`);
// }

// printName("Kamal,20,bbsr"); //Arguments


//Return -Keyword
// Stop the execution process
// Return the value to the caller

// function printName(name,age,city){ //parameter
    
//         // console.log(`My name is ${name}`);
//         // console.log(`My age is ${age}`);
//         // console.log(`My city is ${city}`);
//         return `My name is ${name},${age},${city}`;
//         console.log(`I am Stop Here`);
    //     }
    
//     console.log(printName("Kamal",45,"bbsr")); //Arguments

    
    //     function printName(name,age,city){
    //     return(`My name is ${name},${age},${city}`)
    //     }
    //     let output = printName("Kamal",25,"BBSR");
    // console.log(output); //Traitioal way to delcare a function ES6+        


    //Syntax:
    // console.log(printName("Kamal"));//Before
    // const printName=(name)=>{
    //     return(`My name is ${name}`);

    // }

    // console.log(printName("Kamal")); //AFter

    //Eample:
        //Write a function to print gettings to user.
    // const greeting=(name,time) => {
    //     if(time<12){
    //         return `Good Morning ${name}`;
    //     } else if  (time<18){
    //         return `Good After noon ${name}`;
    //     }else {
    //         return (`Good evening ${name}`);
    //     }
    // }

    // const output = greeting("Kamal",15);
    // console.log(output);
 
    // const calc =(a,b,operater)=>{
    //     switch(operater){
    //         case "+" :
    //           return a + b;
    //           break;
    //         case "-" :
    //             return a - b;
    //             break;               
    //         case "*" :
    //           return a * b;
    //           break;
    //         case "/" :
    //           return a / b;
    //           break;
    //     }
    // }
    // const output =calc(5,2,"-");
    // console.log(output);

// Example 3:
    //const add = (a,b) => console.log(add(5,6));
    // const add = (a,b) => a+b;
    // console.log(add(5,7));

                             //Rest Parameter
//     function printNumber( ...number) {
//         return number;
//         };
    
// let output=printNumber(1,2,3,4,5,6);
// console.log(output);

                     // Callback Function

    //   When a function is called as an argument is another function.
    //Syntax :
        // function say(name,callback){
        //     console.log(`My name ${name}`);
        //     return callback;
        // }
        
        // function hello(){
        //     return"Hello";
        // }


        //to do : Make a user outhentication system user call back function.


        // const users = [];

        // function registerUser(username, password, callback) {

        //     const userExists = users.some(user => user.username === username);
        //     if (userExists) {
        //         return callback('Error: User already exists.');
        //     }
        //     users.push({ username, password });
        //     callback(null, 'Success: User registered successfully!');
        // }
        // function loginUser(username, password, callback) {
        //     const user = users.find(user => user.username === username);
        //     if (!user) {
        //         return callback('Error: User not found.');
        //     }

        //     if (user.password !== password) {
        //         return callback('Error: Incorrect password.');
        //     }

        //     callback(null, 'Success: Login successful!');
        // }
        // function exampleUsage() {
    
        //     registerUser = 'Alice', 'password123', (err, message)  => {
        //         if (err) {
        //             console.error(err);
        //         } else {
        //             console.log(message);
        //             loginUser('Alice', 'password123', (err, message) => {
        //                 if (err) {
        //                     console.error(err);
        //                 } else {
        //                     console.log(message);
        //                 }
        //             })
        //         }
        //     }
        // }   

 //What is sync ?
     //Line  by line

     //Async-->
     //SetTimeout(() =>{""});
     //SetInterval(() =>{""});

     //EX:-
    //  setTimeout(()=>{
    //     console.log("Hey Usbm Students");}, 5000); 
    setInterval(() => {
        console.log("Hey")
        
    }, 10000);

     


