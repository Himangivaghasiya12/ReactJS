// Javascript Function Apply() , Call() , and bind() Method

// Apply() Method

{
    // const human = {
    //     firstName:"Jhon",
    //     lastName:"Walker",
    //     age:20
    // }

    // const person = {
    //     firstName:"rohit",
    //     lastName:"Sharma",
    // }
    
    // function intro(messge , pro){
    //     console.log(`${messge} My FirstName is${this.firstName} And My LatName is ${this.lastname}`);
    // }

    //  console.log(intro());

    //  let result = intro.apply(person , ["Hi" , "I am Cricketer" ])

    //  console.log(result);
}

// Call() Method

{
    // function sum(a , b){
    //     return a + b
    // }

    // let result = sum.call(null , 50 , 50)

    // console.log(result);

}

{
    // let human = {
    //     firstName:"John",
    //     lastName:"Walker",
    //     age:20
    // }

    // function intro(message){
    //     console.log(message + this.firstNmae + this.lastName);

    // }

    // let result = intro.call(human , "hi")

    // console.log(result);
}

// Bind() Method

{
//     const human = {
//          firstName:"John",
//          lastName:"Walker",
//          intro:function (){
//             console.log(`${this.firstName} ${this.lastName}`);
//         }
//     } 

//     const person = {
//         firstName:"rohit",
//         lastNAme:"Sharma",
//     }

//     let result = human.intro.bind(person)

//     console.log(result()); {
    
}

// Asyncronous Function

// setInterval
// setTimeout
// clearInterval
// clearTimeout


// SetTimeout
// setTimeout(multi , 4000 , arg1 , arg2 , argN...)

{
    // setTimeout(() => console.log("Hello") , 5000)

    // setTimeout(() => {
    //     console.log("hello");
    // } , 5000)
    // setInterval(() => console.log("Hi") , 3000)
}

{
//     function multi(){
//         console.log("setTimeOut");
//     }

//     setTimeout( multi , 4000 )
//     console.log("After setTimeout")

}   

