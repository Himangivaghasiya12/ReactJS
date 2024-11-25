// Javascript Array Method

/*

shift 
Filter
Map
indecof
lastindexof
slice
splice
copywrittenin
entries
keys()
values()

fill 
some
every
reduce
reduceRight
find
findIndex
findLastIndex
include
Array.isArray
flat
flatMap
*/

// Shift method in array
// it will delete from starting

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    console.log(array);

    array.shift();

    array.shift();

    console.log(array);
}

// Filter Method in array

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    let filter1 = array.filter((any) => any == "Javascript") 
    
    console.log(filter1);

    let ArrayObject = [

    { id:1 , item : "mobile" , name :"iphone13" , color :"gray" , price : 10000 , discount : "10%"},
    
    { id:2 , item : "mobile" , name :"iphone13pro" , color :"black" , price : 20000 , discount : "10%"},

    { id:3 , item : "mobile" , name :"iphone14" , color :"yellow" , price : 30000 , discount : "10%"},

    { id:4 , item : "mobile" , name :"iphone15" , color :"blue" , price : 40000 , discount : "10%"},

    { id:5 , item : "mobile" , name :"iphone15pro" , color :"white" , price : 50000 , discount : "10%"},

    { id:6 , item : "mobile" , name :"iphone12" , color :"gray" , price : 10000 , discount : "10%"},

    { id:7 , item : "mobile" , name :"Samsung" , color :"gray" , price : 10000 , discount : "10%"},

    { id:8 , item : "laptop" , name :"Dell" , color :"gray" , price : 80000 , discount : "10%"},

    { id:9 , item : "laptop" , name :"HP" , color :"white" , price : 90000 , discount : "10%"},

    { id:10 , item : "laptop" , name :"Lenovo" , color :"black" , price : 100000 , discount : "10%"},

    { id:11 , item : "laptop" , name :"Gaming" , color :"black" , price : 980000 , discount : "10%"},

    { id:12 , item : "laptop" , name :"Dell" , color :"black" , price : 400000 , discount : "10%"},

    { id:13 , item : "pendrive" , name :"iphone13" , color :"red" , price : 10000 , discount : "10%"},

    { id:14 , item : "pendrive" , name :"iphone13" , color :"gray" , price : 10000 , discount : "10%"},

    { id:15 , item : "pendrive" , name :"iphone13" , color :"white" , price : 10000 , discount : "10%"}

    ]

    let filter2 = ArrayObject.filter((data) => data.item === "laptop")

    console.log(filter2);

    let filter3 = ArrayObject.filter((data) => data.color === "red")

    console.log(filter3);    
}

// map method in array

{
    let num = [10 , 60 , 50 , 80 , 40 , 1];

    let map1 = num.map((data) => data = 100);

    console.log(map1);
}

// indexof and lastIndexof method in Array

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    let Index = array.indexOf("css" ,4);

    console.log(Index);

    let LastIndex = array.lastIndexOf("css" , 6);

    console.log(LastIndex);

}

// slice and splice method in array

 {
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    let Slice = array.slice(2);

    console.log(Slice);

    let Slice1 = array.slice( 2 , 4);

    console.log(Slice1);

    let Splice = array.splice(2 , 2 , "nan" , "SQL");

    console.log(Splice);

    console.log(array);

}

// Sorting in array

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    let  num = [ 10 , 3 , 0.5 , 89 , 65 , 102 , 45 , 115 , 100 , 55 , 9];

    let Sort = array.sort();

    console.log(Sort);

    // let Num = num.sort((a , b) => a - b);

    // let Num = num.sort();

    // console.log(Num);

}

// entries() , keys() and values() method in Array

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    let Entries = array.entries();

    console.log(Entries.next().value);

    console.log(Entries.next().value);

    console.log(Entries.next().value);

    console.log(Entries.next().value);

    console.log(Entries.next().value);

    let Key = array.keys();

    console.log(Key.next().value);

    console.log(Key.next().value);

    console.log(Key.next().value);
    
    console.log(Key.next().value);

    let Value  = array.values();

    console.log(Value.next().value);

    console.log(Value.next().value);

    console.log(Value.next().value);

    console.log(Value.next().value);

    console.log(Value.next().value);

    console.log(Value.next().value);

}

// Copywithin method in array

{
    let array = ["Javascript" , "Jquery" , "html" , "css" , "bootstrap" , "Sass" , "nodejs" , "java"];

    console.log(array);

    let copy1 = array.copyWithin(3);

    console.log(copy1);

    let copy2 = array.copyWithin( 3 , 6 );

    console.log(copy2);

    let copy3 = array.copyWithin( 3 , 6 , 5);

    console.log(copy3);


}

