// Javascript Dom New Element
// createElement
// textContent
// appendChild

// let element = document.createElement("marquee");
// element.setAttribute("bgcolor","green")
// element.textContent = "Hello";
// document.body.appendChild(element)

// let image = document.createElement('img');
// image.setAttribute('src',"./img/krishna.jpg");
// image.setAttribute("alt","radhakrishna");
// image.setAttribute("height","200px");
// image.setAttribute("width","200px");
// document.body.appendChild(image);
// console.log(image);

/*
addeventListeners
attributes
appendChild
blur()
focus()
childElementCount()
childNodes
classList
className
click()
firstChild
hasAttributes
hasAttribute
removeChild
*/

// document.getElementById('clicks').addEventListener("mouseover" , size)

// function size(){
//     document.getElementById('demobox').style.height = "200px";
//     document.getElementById('demobox').style.width = "200px";
//     document.getElementById('demobox').style.backgroundColor = "blue";
// }

// document.getElementById('headtext').addEventListener("click" , size)

// function size(){
//     document.getElementById('headtext').style.display = "none"; 
// }

// let image = document.getElementById("img").attributes
// let image1 = document.getElementById("img").attributes.length

// console.log(image);
// console.log(image1);

// let inputs = document.getElementById("text").focus()
// function blur(){
//     document.getElementById('text').blur()
// }

document.getElementById("focuss").addEventListener("click" , function(){
    document.getElementById('text').focus()
})

document.getElementById("blur").addEventListener("click",function()
{
    document.getElementById('text').blur()
})

// let element = document.getElementById("demo").childElementCount

// console.log(element);

// let elements = document.getElementById("demo").childNodes

// console.log(elements);

// let data = document.getElementById("demo").classList
// data.add('heading');