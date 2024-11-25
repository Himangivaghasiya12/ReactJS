// assginment operator

{
    let x=10
    let y=20
    
    let z= x+=y;
    console.log(z);
    console.log(x);
    
    let a= x-=y;
    console.log(a);
    
    let b= x*=y;
    console.log(b);
    
    let c= x/=y;
    console.log(c);
    
    let d= x%=y;
    console.log(d);
    
    let e= x**=y;
    console.log(e);
}

// comparison operator

{
    let j=10
    let s=20
    
    let a= j==s;
    console.log(a);
    
    let b= j!=s;
    console.log(b);
    
    let c= j===s;
    console.log(c);
    
    let d= j!==s;
    console.log(d);
    
    let e= j<s;
    console.log(e);
    
    let f= j<=s;
    console.log(f);
    
    let g= j>s;
    console.log(g);
    
    let h= j>=s;
    console.log(h);
}

// typeof operator

{
    let str = "Hello"
    let num = 12345
    let boolean = true
    let array = []
    let obj = {}
    let big = 123456889n
    
    console.log(typeof(str));
    console.log(typeof(num));
    console.log(typeof(boolean));
    console.log(typeof(array));
    console.log(typeof(obj));
    console.log(typeof(big));
}

// string operator

{
    let a = 10
    let b = "10"
    let c = 20
    let d = 6
    let e = 2

    let j = a + b + a + a + a + b + d + e + d + e - a / b * e - d

    let s = d/d;

    console.log(j);
    console.log(s);
    console.log(1/0);
    console.log(0/1);
    console.log(-1/0);
    console.log("1"/0);
    console.log("1"/"1");
    console.log("1"+("1"*20));
    
}