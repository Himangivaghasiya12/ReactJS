// Javascript Promise and CallBack Hell

// CallBack Function

// const stock = (process) => {
//     setTimeout(() => { console.log('Stock is Here')
//     process()
// }, 2000)
// }

// const production = () => {
//     console.log('Production was Started');
// }

// stock(production)

// CallBack Hell

// Recipe in IceCream

// Stock Backend

// let process = {
//     stock : ['Stock is Availble'],
//     production : ['Production was Started'],
//     Fruits : ['Mango' , 'StrawBerry' ,'Orange'],
//     AddIngrediant : ['Milk' , 'Milkpowder'],
//     Toppings : ['Chocolate' , 'Nuts'],
//     Packing : ['Cone' , 'Cup' , 'Stick'],
//     AfterPack : ['Serve IceCream']
// }


// // Kitchen FrontEnd

// const stock = (flavour_name , production) => {
//     setTimeout (() => {
//         console.log(`${process.stock[0]}`);
//         console.log(`${flavour_name} Flavour Production`);
//         production()
//     }, 2000)
// }

const productionProcess = () => {
    setTimeout(() => {
        console.log(`${process.production[0]}`)
        setTimeout(() => {
            console.log(`Production with added some ingrediant was name called ${process.AddIngrediant[0]} and ${process.AddIngrediant[1]}`)
            setTimeout(() => {
                console.log(`add toppings was ${process.Toppings[0]} and ${process.Toppings[1]}`)
                setTimeout(() => {
                    console.log(`IceCream was packed with ${process.Packing[0]} and ${process.Packing[1]} and ${process.Packing[2]}`)
                    setTimeout(() => {
                        console.log(`after Packing ${process.AfterPack[0]}`);
                    } , 5000)
                } , 2000)
            } , 1000)
        } , 2000)
    } , 1000)
}

// stock(process.Fruits[0] , productionProcess)

// Javascript Class with Constructor

// class sum{
//     constructor(){
//         this.name = "Hello";
//         this.lastName = "How are you?";
//     }
// }

// let sum1 = new sum()
// console.log(sum1.name);
// console.log(sum1.lastName);

// Javascript Promises task


let process1 = {
    stock : ['Stock is Availble'],
    production : ['Production was Started'],
    Fruits : ['Mango' , 'StrawBerry' ,'Orange'],
    AddIngrediant : ['Milk' , 'Milkpowder'],
    Toppings : ['Chocolate' , 'Nuts'],
    Packing : ['Cone' , 'Cup' , 'Stick'],
    AfterPack : ['Serve IceCream']
}


const process  = (time , work) => {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve(work())
        } , time)
    })
}

process(2000 , () => {
    console.log(`${process1.stock[0]}`);
    console.log(`${process1.Fruits[0]} Flavour Production`);
})



.then(() => {
  return process(2000 , () => {
    console.log(`${process1.stock[0]}`);
    console.log(`${process1.Fruits[0]} Flavour Production`);
})

} , 1000)

promise1.then(() => {
    console.log(`Production with added some ingrediant was name called ${process1.AddIngrediant[0]} and ${process1.AddIngrediant[1]}`)
} , 2000)

promise1.then(() => {
    console.log(`add toppings was ${process1.Toppings[0]} and ${process1.Toppings[1]}`)
} , 1000)

promise1.then(() => {
    console.log(`IceCream was packed with ${process1.Packing[0]} and ${process1.Packing[1]} and ${process1.Packing[2]}`)
} , 2000)

promise1.then(() => {
    console.log(`after Packing ${process1.AfterPack[0]}`);
} , 5000)