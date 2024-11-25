const textInput = document.getElementById('textInput');
const reset = document.querySelector('.reset');

textInput.addEventListener('input', ()=>{
    let text = textInput.value.trim();

    let words = text ? text.split(/\s+/).length : 0;
    let characters = text ? text.length : 0;
    let sentences = text ? text.split(/[.!?]+/).length : 0;
    let paragraphs = text ? text.split(/\n+/).length : 0;

    const wordElements = document.querySelectorAll('.words');
    const characterElements = document.querySelectorAll('.characters');

    for(let i = 0; i < wordElements.length; i++){
        wordElements[i].innerHTML = words;
    }

    for(let i = 0; i < characterElements.length; i++){
        characterElements[i].innerHTML = characters;
    }

    document.getElementById('sentences').innerHTML = sentences;
    document.getElementById('paragraphs').innerHTML = paragraphs;
})

reset.addEventListener('click', ()=>{
    textInput.value = "";

    const wordElements = document.querySelectorAll('.words');
    const characterElements = document.querySelectorAll('.characters');

    for(let i = 0; i < wordElements.length; i++){
        wordElements[i].innerHTML = 0;
    }

    for(let i = 0; i < characterElements.length; i++){
        characterElements[i].innerHTML = 0;
    }

    document.getElementById('sentences').innerHTML = 0;
    document.getElementById('paragraphs').innerHTML = 0;
})