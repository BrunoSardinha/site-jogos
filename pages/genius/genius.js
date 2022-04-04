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

function runSequence(){
    const size = randomSequence.length
    for(let counter = 0; counter<=size; counter++){
        //function runSequence() { console.log("LISTA => ", lista) const size = lista.length for(let count = 1; count <= size; count++) { console.log(lista[count-1]);
    }

    lista.push(size+1);
}
    }
}

function startGame() {
    let lost = false
    document.getElementById("startButton").disabled = 'true';
    buttonElements.forEach((element)=>{
        setActive(element, false)
    })
    while(!lost) {
        runSequence()
        //rodar função de comprarção de jogadas
    }
    runSequence()
}

function round (button) {
    setTimeout(()=>{
        setActive(button, true)
        setTimeout (()=> {
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