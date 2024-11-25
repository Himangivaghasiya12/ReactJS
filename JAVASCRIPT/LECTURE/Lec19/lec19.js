// Javascript object method

// isFrozen() Method

// This method is used for check that the value is freeze or not....

// {
//     let obj = {Key1:52 , Key2:78 , Key3:45 , Key4:98 };

//     console.log(obj);

//     obj.Key1 = 60;

//     console.log(obj);

//     delete obj.Key1;

//     console.log(obj);

//     Object.freeze(obj);

//     obj.Key1 = 10;

//     console.log(obj);

//     delete obj.Key2

//     console.log(obj);

//     let Data = Object.isFrozen(obj);

//     console.log(obj);

//     console.log(Data);
// }

// Object.seal() Method

// This method work as freeze method when the values are sealed once then u can't change the values 

// isSealed() method is used for chehck values that are sealed or not

// {
//     let obj = {Key1:52 , Key2:78 , Key3:45 , Key4:98 };

//     Object.seal(obj);

//     delete obj.Key1;

//     console.log(obj);

//     let Data = Object.isSealed(obj);

//     console.log(Data);

// }

// hasOWn() Method

{
    // let obj = {Key1:"javascript", Key2:"html", Key3:"Css" , Key4:"NodeJs"}

    // let Data = Object.hasOwn(obj, "Key1");

    // console.log(Data);

    // console.log(obj.hasOwnProperty("Key9"));
}

// Object.entries() Method

// {

//     let obj = {Key1:"javascript", Key2:"html", Key3:"Css" , Key4:"NodeJs"}
    
//     for (const [key , value] of Object.entries(obj)) 
//     {
//         console.log(`This Object Key are  ${key} and It's Value is ${value}`);
//     }

//     let array = [ 12 , 36 , 24 , 50 , 100 ];

//     for (const value of array) 
//     {
//         console.log(`${value}`);
//     }
// }

// Object.Keys()

// {
//     let obj = {Key1:"javascript", Key2:"html", Key3:"Css" , Key4:"NodeJs"}

//     let Data = Object.keys(obj);

//     console.log(Data);
// }

// Object.value() method

// {
//     let obj = {Key1:"javascript", Key2:"html", Key3:"Css" , Key4:"NodeJs"}

//     let Data = Object.values(obj);

//     console.log(Data);
// }

// Object.groupBy() method

    // {
    //     let  Gross = [
    //         {name:"Potato" , type:"vegetables" , price :40 , quantity :5},
    //         {name:"CauliFlower" , type:"vegetables" , price :50 , quantity :6},
    //         {name:"StawBerry" , type:"fruit" , price :50 , quantity :10},
    //         {name:"Orange" , type:"fruit" , price :120 , quantity :35},
    //         {name:"Chicken" , type:"meat" , price :40 , quantity :5},
    //     ]

    //     console.log(Gross);

    //     let Data = Object.groupBy(Gross , ({name}) => name)

    //     console.log(Data);

    //     let Data1 = Object.groupBy(Gross , ({type}) => type)

    //     console.log(Data1);

    //     function stock(quantity) 
    //     {
    //         return quantity > 10 ? "enough stock" : "not enough"
    //     }

    //     let Data3 = Object.groupBy(Gross , stock)

    //     console.log(Data3);

    // }