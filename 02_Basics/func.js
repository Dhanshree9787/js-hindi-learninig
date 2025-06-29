// function sumNum(num1, num2){
//     let result = num1 + num2
//     return result
// }
// const result = sumNum(5, 3.26)
//  console.log("Dhanshree: ", {result});

// function userMessage(username){
//     return `${username} is logged in`
// }
// console.log(userMessage("Dhanshree"));

// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200,400,600))

// const user = {
//     userName : "shailesh",
//     salary : 75000
// }
// function handleObject(anyobject){
//     console.log(`Our new developer ${anyobject.userName} is ${anyobject.age} years old and has salary of ${anyobject.salary} `);
// }
// handleObject({
//     userName:"Sam",
//     age: 22,
//     salary: 60000
// })

// const myNewArr = [200,300,400,500]
// function returnsecArray(getArray){
//     return getArray[1]
// }
// console.log(returnsecArray(myNewArr));

// function addOne(num){
//     return num * 5
// }
// console.log(addOne(7))

// function chai(){
//     console.log(this)
// }
// chai()

// arrow function...

// const addTwo = (num1, num2) => {
//     return(num1 + num2)
// }
// const addTwo = (num1, num2) => (num1 * num2)
// console.log(72 * 0);

//name IIFE
// (function chai(){
//     console.log('DB Connected');
// })();

// (function chai(name){
//     console.log(`DB Connected to ${name}` );
// })("sammie")

// let marks = 82;
// if(marks > 90){
//    console.log("Grade A");
// }
// else if(80 < marks < 90){
//     console.log("Grade B");
// }
// else if( marks < 80){
//     console.log("Garde C");
// }
// else {
//     console.log("only pass");
    
// }

// const userLoggedIn = true
// const isWorking = true
// const loggedIngog = false
// const loggedInemail = false

// if(userLoggedIn && isWorking){
//   console.log("User is approved");
// }
// if(loggedIngog || loggedInemail || userLoggedIn){
//     console.log("user logged")
// }
// else{
//     console.log("user not logged");
// }
 let month = 8
switch (month) {
    case 1:
        console.log("Jan");
        break;
     case 2:
        console.log("Feb");
        break;
     case 3:
        console.log("March");
        break;
     case 4:
        console.log("April");
        break;
     case 5:
        console.log("May");
        break;
     case 6:
        console.log("June");
        break;
     case 7:
        console.log("July");
        break

    default:
        console.log("default match found");
        
        break;
}