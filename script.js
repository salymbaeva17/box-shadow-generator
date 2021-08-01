const r1 = document.querySelector("#r1")
const offsetX = document.querySelector("#offsetX")
const offsetY = document.querySelector("#offsetY")
const blur = document.querySelector("#blur")
const spread = document.querySelector("#spread")
const color = document.querySelector("#color")
const boxBgColor = document.querySelector("#bg-color")
const box = document.querySelector(".box")
const shadowResult = document.querySelector(".shadow-result")
const inset = document.querySelector("#inset")
const outset = document.querySelector("#outset")
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

function generateBoxBackgroundColor (){
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
    shadowResult.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    shadowResult.innerHTML = shadowResult.innerHTML +  `<br> -webkit-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    shadowResult.innerHTML = shadowResult.innerHTML +  `<br> -moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    box.style.borderRadius = r1.value + "%"
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}`
}
generateBoxShadow()
