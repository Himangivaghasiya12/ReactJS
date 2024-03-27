   // Assignement operators

{

    let x = 10;
    let y = 20;
    
    
    // ( (x+=y) = (x = x + y) )
    
    let a = x+=y
    console.log(a);
    console.log(x);
    let b = x-=y;
    console.log(b);
    let c = x*=y;
    console.log(c);
    let d = x/=y;
    console.log(d);
    let e = x%=y;
    console.log(e);
    let f = x**=y;
    console.log(f);
}

   // Comparision operators

{
    let x=20;
    let y=10;

    let a = x == y;
    console.log(a);
    let b = x != y;
    console.log(b);
    let c = x === y;
    console.log(c);
    let d = x != y;
    console.log(d);
    let e = x > y;
    console.log(e);
    let f = x >= y;
    console.log(f);
    let g = x < y;
    console.log(g);
    let h = x <= y;
    console.log(h);

}

// Typeof operators

let str ="skillqode";
let Num =36543222;
let bool =true;
let arry =[]
let obj ={}
let big =12345678987654n

console.log(typeof(str));
console.log(typeof(Num));
console.log(typeof(bool));
console.log(typeof(arry));
console.log(typeof(obj));
console.log(typeof(big));

// string operators
 

let x = 20;
let y = "20";
let z = 20 ;
let k = 4 ;
let v = 2 ;

let zz = z + z +  z + y + x + y + x + x + x + z - k * v / v;
let zzz = v/v

console.log(zz);
console.log(zzz);
console.log(1/0);
console.log(-1/0);
console.log("1"/0);
console.log("1"/"1");
console.log("1"+("1"*20));