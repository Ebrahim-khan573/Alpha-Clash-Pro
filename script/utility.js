

function hideElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('bg-orange-300')
}

function getRandomAlphabets(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets) 

    // get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index]
    console.log(index, alphabet)
    return alphabet
}
