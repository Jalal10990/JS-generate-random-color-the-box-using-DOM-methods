console.log("Script.js initializing")
// target by class 
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
let boxes = document.querySelector(".container").children

function getRandomColor(){
    
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})


// JS logic 
// Math.random()
// 0.11003953826671498
// 0 + Math.random()* 255
// 100.1609707886908
// 0 + Math.random()* 255
// 185.38368510800825
// Math.ceil(0 + Math.random()* 255)
// 139
// Math.ceil(4.33)
// 5