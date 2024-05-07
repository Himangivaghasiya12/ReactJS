let process={
    stock:['stock in here'],
    production:['production was started'],
    fruits:['strawberry' , 'Mango' ,'Orange' ],
    addingridiant:['milk','suger' , 'Milkpowder'],
    toppings:['chocolate','strawberry' ],
    packaging:['cone' , 'Cup' , 'Stick'],
    afterpack:['serve icecream']
}

let store_open = true

let order = (time , Work) =>  {
    return new Promise(function(resolve , reject){
        if(store_open == true){
            setTimeout(() => {
                resolve(Work())
            },time)
        }else{
            reject('store Has Been Closed!')
        }
    })
}

order(2000 , () => {
    console.log(`${process.stock[0]}`);
    console.log(`${process.stock[0]} Flavour Production`);
})

.then(() => {
    return order(2000 , () => {
        console.log(`Production with added some ingrediant was name 
        called ${process.addingridiant[0]}and${process.addingridiant[1]}`)
    })
})