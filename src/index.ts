const number = document.querySelector("#number")
const downButton = document.querySelector("#downButton")
const resetButton = document.querySelector("#resetButton")
const upButton = document.querySelector("#upButton")

let count = 0;

console.log(resetButton)

downButton?.addEventListener("click", () => {
  count -= 1;
  if(number?.textContent == null || number.textContent == "") { //I always had to eliminate the possibility of number being null || undefined
    return 
  }
  number.textContent = count.toString()

  colourCheck()
  console.log(number)
})

resetButton?.addEventListener("click", () => {
  count = 0;
  if(number?.textContent == null || number.textContent == "") {
    return 
  }
  number.textContent = count.toString()
  // console.log("reset button clicked!!")
  colourCheck()
})

upButton?.addEventListener("click", (e) => {

  count += 1;

  if(number?.textContent == null || number.textContent == "") return

  number.textContent = count.toString()
  // console.log("up button clicked!!")
  colourCheck()
})

function colourCheck(): void {
  if(number?.textContent == null || number?.textContent == ""){
    return
  } 


  //it was a challenge to convert type Element to a number without throwing any errors
  
  let realNumber = +number.textContent
  

  if(number.textContent == "0") {
    number.className = "black"
  } else if (realNumber < 0) {
    number.className = "blue"
  } else if(realNumber > 0) {
    number.className = "red"
  }
}

//WHAT I LEARNT
//typeScript is VERY strict! i was sometimes annoyed at TS 
//because I knew i'd be able to get away with writing the same code in JS
//I had to remind myself that TS helps minimise errors and bugs.
//I'm getting used to TS syntax, although I need a little more pracitce to become comfortable with working a strict program,
//and still produce great, functioning code
