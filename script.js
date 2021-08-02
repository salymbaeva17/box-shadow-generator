const r1 = document.querySelector("#r1")
const offsetX = document.querySelector("#offsetX")
const offsetY = document.querySelector("#offsetY")
const blur = document.querySelector("#blur")
const spread = document.querySelector("#spread")
const color = document.querySelector("#color")
const boxBgColor = document.querySelector("#bg-color")
const box = document.querySelector(".generate__box")
const shadowResult = document.querySelector(".generate__shadow-result")
const inset = document.querySelector("#inset")
const outset = document.querySelector("#outset")
const borderRadius = document.querySelector(".r1-value")
const blurRadius = document.querySelector(".blur-radius")
const spreadRadius = document.querySelector(".spread-radius")
const hLength = document.querySelector(".h-length")
const vLength = document.querySelector(".v-length")

// r1.onchange = generateBoxShadow
r1.oninput = generateBoxShadow
offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
color.oninput = generateBoxShadow
boxBgColor.oninput = generateBoxBackgroundColor
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow
borderRadius.oninput = generateBoxShadow
hLength.oninput = generateBoxShadow
vLength.oninput = generateBoxShadow
blurRadius.oninput = generateBoxShadow
spreadRadius.oninput = generateBoxShadow

function generateBoxBackgroundColor () {
    box.style.backgroundColor = boxBgColor.value
}
generateBoxBackgroundColor()

function generateBoxShadow(){
    let type
    if (inset.checked){
        type = "inset"
    } else{
        type = ""
    }
    blurRadius.textContent = blur.value
   spreadRadius.textContent = spread.value
    hLength.textContent = offsetX.value
    vLength.textContent = offsetY.value
    borderRadius.textContent = r1.value
    shadowResult.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    shadowResult.innerHTML = shadowResult.innerHTML +  `<br> -webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    shadowResult.innerHTML = shadowResult.innerHTML +  `<br> -moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    box.style.borderRadius = r1.value + "%"
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}`
}
generateBoxShadow()