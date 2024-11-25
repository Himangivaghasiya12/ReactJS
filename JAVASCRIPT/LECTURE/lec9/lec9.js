// Javascript Number Method

// it is into number value


// {
//     let newNumber = false;
//     console.log(typeof(newNumber));

//     let ConvertNum = Number(newNumber);
//     console.log(ConvertNum);
//     console.log(typeof(ConvertNum)); 
// }

// number  convert into string

// {
//     let Num = 10;
//     let StringNum = Num.toString();
//     console.log(StringNum);
//     console.log(typeof(StringNum));
// }

// float number convert into precision number

// {
    // let Num = 263.35698223;

    // let Num1 = Num.toPrecision();

    // console.log(Num1);

//     let Num2 = Num.toPrecision(5);

//     console.log(Num2);
// }

// to fixed value

// {
// let Num = 45.549658

// let Num1 = Num.toFixed();

// console.log(Num1);

// let Num2 = Num.toFixed(4);

// console.log(Num2);
// }

// to convert Exponential notattion
// {
// let Num = 2602000

// let Num1 = Num.toExponential();

// console.log(Num1);
// }

// string

// {
//     let Num = 25659232326598629;
//     let Num1 = Num.toLocaleString();
//     let Num2 = Num.toString();
//     console.log(Num1);
//     console.log(typeof(Num1));
//     console.log(Num2);
// }

// You should be carefull

// {
//     let Num = "10";
//     console.log(Number(Num));

//     let Num1 = "10 10";
//     console.log(Number(Num1));
//     console.log(Number.Num1);

//     let Num2 = "10 items";
//     let CountNum = Number("10 items");
//     console.log(Number(Num2));
//     console.log(CountNum);
// }


//valueof  

// {
//     let Num = (15+5) + "9";
//     let Num1 = Num.valueOf();
//     console.log(Num1);
// }

// Finite value

{
    let Num = 145.55;
    let Num1 = Number.isFinite(Num);
    let Num2 = Number.isSafeInteger(Num);
    let Num3 = Number.isInteger(Num);
    console.log(Num1);
    console.log(Num2);
    console.log(Num3);
}

// Javascript Date() object

// 1 Jan 1970 started
// Month 0 to 11

{
    const now = new Date();
    console.log(now);
    console.log(typeof(now));
    console.log(now.toDateString());
    console.log(now.toISOString());
    console.log(now.toJSON());
    console.log(now.toLocaleDateString());
    console.log(now.toLocaleString());
    let now1 = now.toString();
    console.log(now1);
    console.log(typeof(now1));
    console.log(now.toTimeString());
    console.log(now.toUTCString());
}




