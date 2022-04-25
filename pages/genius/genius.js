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

async function startGame() {
    let lost = false
    document.getElementById("startButton").disabled = 'true';
    // buttonElements.forEach((element)=>{
    //     setActive(element, false)
    // })
    while(!lost) {
        console.log("LISTA => ", randomSequence)
        time = randomSequence.length * 1000;
        await setTimeout(() => {
            runSequence(randomSequence)
        }, time)
        randomSequence.push(getRandomInt(4));
        alert("You are trash")
        //rodar função de comprarção de jogadas
    }
    //runSequence()
}

async function runSequence(elements) {
    let a = 1
        
    for(let element of elements) {
        setTimeout (()=> {
            setActive (element, true)
        },800*a)
        a=a+1
    }

    for(let element of elements) {
        setTimeout (()=> {
            setActive (element, false)
        },1000*a)
        a=a+1
    }
}

function initialPresentation () {
    runSequence(buttonElements);

    setTimeout(()=>{
        startButton.innerHTML="COMEÇAR"
        document.getElementById("startButton").disabled = false;
    },2000)
}

initialPresentation()