// fetch() Method

fetch('http://localhost:3000/posts')
.then(reasponse => reasponse.json())
.then(data => console.log(data))