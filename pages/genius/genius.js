const buttonElements = document.querySelectorAll(".clickable")
const startButton = document.getElementById("startButton")

let plays = []
let user_choices = []
var chosen_button

async function blink (button, time) {
    setActive(button, true)
    await setTimeout(() => {console.log('Ativado')}, time/2)
    setActive(button, false)
    await setTimeout(() => {console.log('Desativado')}, time/2)
}

async function showPlays(lista) {
    lista.forEach(async (button, index) => {
        await setTimeout(() => {
            setActive(button, true)
        }, index*1000)
        
        await setTimeout(() => {
            setActive(button, false)
        }, index*1000 + 500)
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setActive(element, activate) {
    console.log(element)
    if(activate) {
        element.classList.add("active")
    }
    else {
        element.classList.remove("active")
    }
}

async function addPlay() {
    plays.push(getRandomInt(4));
    await showPlays(plays)
}

async function getPlay() {    
    let counter = 0
    while(counter < plays.length) {
        let userPlayed = false
        while(!userPlayed) {
            await setTimeout(() => {
                //rodar função que pega click de usuario (deve retornar um elemento ou undefined)
                //userPlayed = true
                console.log('Desativado por 5')
            }, 500)

        }
        if(plays[counter] !== user_choices[counter]) {
            return(true)
        }
        counter++
    }
    return(false)
}

async function startGame() {
    let lost = false
    document.getElementById("startButton").disabled = 'true';

    while(!lost) {
        await addPlay();
        lost = getPlay()
    }
    console.log("GAME OVER")
    //game over presentation
}


function initialPresentation () {
    showPlays(buttonElements);

    setTimeout(()=>{
        startButton.innerHTML="COMEÇAR"
        document.getElementById("startButton").disabled = false;
    },4000)
}

async function processClick(element){
    console.log('FUNCIONA')
    user_choices.push(element)
    await setTimeout(() => {
        setActive(element, true)
    }, 500)
    
    await setTimeout(() => {
        setActive(element, false)
    }, 1000)
}
initialPresentation()


for(let element of buttonElements){
    element.onclick= () => processClick(element)
}