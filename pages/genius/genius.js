const buttonElements = document.querySelectorAll(".clickable")
console.log(buttonElements)

function setActive(element) {
    element.classList.add("active")
}

function startGame() {
    console.log("startGame")
}

function initialPresentation () {
    let a = 1
    for(let element of buttonElements) {
        setTimeout (()=> {
            setActive (element)
        },1000*a)
        a=a+1
    }
}

initialPresentation()