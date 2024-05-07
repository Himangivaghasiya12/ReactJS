// JAVASCRIPT HTML DOM METHOD

// DOM Selection method

let dom1 = document.getElementById('demo')

console.log(dom1);

let dom2 = document.getElementById('demo').id   

console.log(dom2);

let dom3 = document.getElementById('demo').className

console.log(dom3);

document.getElementById('demo').style.color="pink"

// let dom4=document.getElementsByClassName("headimg").style.backgroundColor="orange"

// console.log(dom4 );

let dom4 = document.getElementsByClassName("heading")

dom4[0].style.color = "green"
console.log(dom4);

let dom5=document.getElementsByClassName("heading")

console.log(dom5);

// textcontact , innnerText and innerhtml

let dom6 = document.getElementById('demo').textContent

console.log(dom6);

let dom7=document.getElementById('demo').innerText

console.log(dom7);

let dom8 = document.getElementById('demo').innerHTML

console.log(dom8);

// querySelector And querySelectorAll

let data1 = document.querySelector('h1')

console.log(data1);

let data2 = document.querySelector('li')

console.log(data2);

data2.style.color = "red" 

let data3 = document.querySelectorAll("li")

console.log(data3);

data3.forEach((li) => {
    li.style.color = "orange"
})

let data4 = document.querySelector('input[type="password"]')
console.log(data4);

data4.style.backgroundColor = "purple"




