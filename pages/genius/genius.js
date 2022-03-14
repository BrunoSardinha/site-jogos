const buttonElements = document.querySelectorAll(".clickable")
const startButton = document.getElementById("startButton")
let randomSequence = []

function setActive(element, activate) {
    if(activate) {
        element.classList.add("active")
    }
    else {
        element.classList.remove("active")
    }
}

function startGame() {
    console.log("startGame")
    document.getElementById("startButton").disabled = 'true';
    buttonElements.forEach((element)=>{
        setActive(element, false)
    })
}

function initialPresentation () {
    let a = 1
    for(let element of buttonElements) {
        setTimeout (()=> {
            setActive (element, true)
        },1000*a)
        a=a+1
    }
    setTimeout(()=>{
        startButton.innerHTML="COMEÇAR"
        document.getElementById("startButton").disabled = false;
    },5000)
}

function runSequence(){
    const size = randomSequence.length
    for(let counter = 0; counter<=size; counter++){

    }
}

initialPresentation()