// Javascript method object method

// new Map()
// set method
// get method
// delete method
// clear method
// key method
// hash method
// forEach method
// values method
// size method
// entries method

// let object = {id:1 , Fname : "Jisha" , Lname: "Vadera" , Age : 19};
// let Dataobject = object.Age
// console.log(Dataobject);

// Map object

// let Mapobject = new Map();

// Set method

// Mapobject.set("id",1)
// Mapobject.set("Fname" , "Jisha")
// Mapobject.set("Lname","Vadera")
// Mapobject.set("Age",19)

// console.log(Mapobject);

// get method

// let Dataobject = Mapobject.get("Lname");
// let Dataobject1 = Mapobject.get("Age");
// console.log(Dataobject);
// console.log(Dataobject1);

// Delete method

// let deleteMap = Mapobject.delete("Age");
// console.log(Mapobject);

// size method 

// let SizeMap =  Mapobject.size;
// console.log(SizeMap);

// values method

// let ValueMap = Mapobject.values();
// console.log(ValueMap);

// console.log(ValueMap.next().value);
// console.log(ValueMap.next().value);
// console.log(ValueMap.next().value);

// Key Method

// let Mapobject = new Map([["id",1],["Fname","Jisha"],
// ["Lname","Vadera"],["Age",19]])
// let KeyData = Mapobject.keys();

// console.log(KeyData);
// console.log(KeyData.next().value);
// console.log(KeyData.next().value);
// console.log(KeyData.next().value);
// console.log(KeyData.next().value);

// hash method it will give ans in boolean value

// let Mapobject = new Map([["id",1],["Fname","Jisha"],
// ["Lname","Vadera"],["Age",19]])

// let hashmap = Mapobject.has("object")
// console.log(hashmap);

// clear() method

// let Mapobject = new Map([["id",1],["Fname","Jisha"],
// ["Lname","Vadera"],["Age",19]])

// let ClearMap = Mapobject.clear();
// console.log(Mapobject);

// ForEach method

// let Mapobject = new Map([["id",1],["Fname","Jisha"],
// ["Lname","Vadera"],["Age",19]]).forEach(DataPrint)

// // set method

// Mapobject.set("id",1)
// Mapobject.set("Fname","Jisha")
// Mapobject.set("Lname","Vadera")
// Mapobject.set("Age",19)

// console.log(Mapobject);
// function DataPrint(value,key){
//     console.log(`${key} = ${value}`);
// }

// entries () method

// let Mapobject = new Map([["id",1],["Fname","Jisha"],
// ["Lname","Vadera"],["Age",19]])

// let Entries = Mapobject.entries()
// console.log(Entries);

// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);

// Javascript Set object

// add method

// let SetObject = new Set();

// let Addsets = SetObject.add("Orange");
// let Addsets1 = SetObject.add("PineApple");
// let Addsets2 = SetObject.add("Lemon");
// let Addsets3 = SetObject.add("Mango");


// console.log(Addsets);
// entries method


// let Entries = SetObject.entries()
// console.log(Entries);

// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);

// console.log(Addsets);

// hash method

// let GetSets = SetObject.has("Mango")
// console.log(GetSets);

// Key method

// let KeySets = SetObject.keys();
// console.log(KeySets);

// console.log(KeySets.next().value);
// console.log(KeySets.next().value);
// console.log(KeySets.next().value);
// console.log(KeySets.next().value);

// value method

// let ValueSets = SetObject.values();
// console.log(ValueSets);

// console.log(ValueSets.next().value);
// console.log(ValueSets.next().value);
// console.log(ValueSets.next().value);
// console.log(ValueSets.next().value);

// Size method

// let SizeSets = SetObject.size
// console.log(SizeSets);

// Delete Method
// let  DeleteSets = SetObject.delete("Mango")
// console.log(SetObject);

// Clear Method

// let ClearSets = SetObject.clear()
// console.log(SetObject);

// ForEach Method

// let ForEachSets = SetObject.forEach(PrintSets)

// function PrintSets(value, key){
//     console.log(`${key} = ${value}`);
// }