// function play(){
//     const homeScreen = document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getRandomAlphabets();
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet
    setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}



