// counter = document.getElementById("value")

// console.log(counter)

// document.getElementById("increase").onclick = function() {
//     counter.innerHTML = parseFloat(counter.innerText) + 1
// }

// document.getElementById("decrease").onclick = function() {
//     counter.innerHTML = parseFloat(counter.innerText) - 1
// }

// document.getElementById("reset").onclick = function() {
//     counter.innerHTML = 0
// }

let counter = 0
buttons = document.querySelectorAll("button")
value = document.querySelector(".value")

console.log(value)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        classes = button.classList

        if (classes.contains("increase")) {
            counter += 1
        } else if (classes.contains("decrease")) {
            counter -= 1
        } else {
            counter = 0
        }

        value.innerHTML = counter // value.textContent

        if (counter > 0) {
            value.style.color = "green"
        } else if (counter < 0) {
            value.style.color = "red"
        } else {
            value.style.color = "black"
        }
    })
});