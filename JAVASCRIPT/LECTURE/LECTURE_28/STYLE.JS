// javascript Promise and callback hell

// callback function

// const stock=(process)=>{
//     setTimeout(()=>{console.log('stock is here')
//     process()
// },3000)
// }

// const production=()=>{
//     console.log('production was started');
// }

// stock(production)

// callback hell

// recipe in icecream

  /*backend */

// let process={
//     stock:['stock in here'],
//     production:['production was started'],
//     fruits:['strawberry'],
//     addingridiant:['milk','suger'],
//     toppings:['chocolate','strawberrypiece' ],
//     packaging:['cone'],
//     afterpack:['serve icecream']
// }

// // /*kitchen */ /*frontend */

// const stock = (flavour_name,production)=>{
//     setTimeout(()=>{
//         console.log(${process.stock[0]})
//         console.log(${flavour_name} flavour production);
//         production()
//     },2000)
// }

// const productionprocess=()=>{
//     setTimeout(()=>{
//         console.log(${process.production})
//         setTimeout(()=>{
//             console.log(production with added some ingrediant was name called ${process.addingridiant[0]}and${process.addingridiant[1]})
//             setTimeout(()=>{
//                 console.log(add toppings was ${process.toppings[0]} and ${process.toppings[1]})
//                 setTimeout(() => {
//                     console.log(icecream was package with ${process.packaging[0]})
//                     setTimeout(()=>{
//                         console.log(after packaging was ${process.afterpack[0]});
//                     },5000)
//                 },2000)    
//             },3000)
//         },2000)
//     },1000)
// }

// stock(process.fruits[0],productionprocess)

// class sum{
//     constructor(){
//         this.name="a"
//         this.lastname="b"
//     }
// }

// let sums=new sum()
// console.log(sum.name);
// console.log(sums.lastname);


/*------PROMISES--------- */

// recipe in icecream

// stock  /*backend */

let process={
    stock:['stock in here'],
    production:['production was started'],
    fruits:['strawberry' , 'Mango' ,'Orange' ],
    addingridiant:['milk','suger' , 'Milkpowder'],
    toppings:['chocolate','strawberry' ],
    packaging:['cone' , 'Cup' , 'Stick'],
    afterpack:['serve icecream']
}

let promise = new Promise(function(resolve,reject){
    setTimeout(()=> {
        console.log(`${process.stock[0]}`);
        console.log(`${process.fruits[1]} Flavour`);
        resolve()
   } , 2000)
})

promise.then(()=>{
    console.log(`${process.production[0]}`);
},3000)

promise.then(()=>{
    console.log(`Production with added some ingrediant was name called ${process.addingridiant[0]} and ${process.addingridiant[1]} and ${process.addingridiant[2]}`);
},2000)

promise.then(() => {
     console.log(`add toppings was ${process.toppings[0]} and ${process.toppings[1]}`)
 } , 3000)

 promise.then(() => {
     console.log(`IceCream was packed with ${process.packaging[0]} and ${process.packaging[1]} and ${process.packaging[2]}`)
 } , 2000)
     
 promise.then(() => {
    console.log(`after package ${process.afterpack[0]}`);
 } , 5000)
    