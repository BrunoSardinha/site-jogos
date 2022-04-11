const buttonElements = document.querySelectorAll(".clickable")
const startButton = document.getElementById("startButton")
let randomSequence = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setActive(element, activate) {
    if(activate) {
        element.classList.add("active")
    }
    else {
        element.classList.remove("active")
    }
}

async function runSequence() { 
    console.log("LISTA => ", randomSequence) 
    const size = randomSequence.length
    for(let count = 1; count <= size; count++) { 
        console.log(randomSequence[count-1]);
        await round(buttonElements[randomSequence[count-1]])
    }
    randomSequence.push(getRandomInt(4));
}

async function startGame() {
    let lost = false
    document.getElementById("startButton").disabled = 'true';
    buttonElements.forEach((element)=>{
        setActive(element, false)
    })
    while(!lost) {
        await runSequence()
        alert("You are trash")
        //rodar função de comprarção de jogadas
    }
    //runSequence()
}

async function round (button) {
    await setTimeout(async()=>{
        setActive(button, true)
        await setTimeout (()=> {
            setActive(button,false)
        },1000)
    },1000)
}

function initialPresentation () {
    let a = 1
    for(let element of buttonElements) {
        setTimeout (()=> {
            setActive (element, true)
        },250*a)
        a=a+1
    }
    setTimeout(()=>{
        startButton.innerHTML="COMEÇAR"
        document.getElementById("startButton").disabled = false;
    },2000)
}

initialPresentation()