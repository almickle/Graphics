const scaleUp = document.getElementById("plusScale")
const scaleDown = document.getElementById("minusScale")
const slideRight = document.getElementById("plusPosX")
const slideLeft = document.getElementById("minusPosX")
const slideUp = document.getElementById("plusPosY")
const slideDown = document.getElementById("minusPosY")
const drawButton = document.getElementById("draw")


scaleUp.addEventListener("click", event => {
    scale *= 2
    translateX = 0
    translateY = 0

    console.log("scale value:")
    console.log(scale)
})

scaleDown.addEventListener("click", event => {
    scale /= 2
    translateX = 0
    translateY = 0

    console.log("scale value:")
    console.log(scale)
})

drawButton.addEventListener("click", event => {
    renderPolygon()
})