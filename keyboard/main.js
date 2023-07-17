const btns = document.querySelectorAll(".letter");
const btnEl = Array.from(btns);
const display = document.getElementById("display");
const exit = document.getElementById("exit");
const upperCase = document.getElementById("uppercase");
const space = document.getElementById("space");
console.log(document.getElementsByTagName("input"))
btnEl.forEach(btn => 
    btn.addEventListener("click", e => {
        const char = e.target.textContent.toLowerCase()
        console.log("Button handler",e.target.textContent.toLowerCase());
        console.log(document.getElementsByTagName("input"))
        display.value += e.target.textContent;
        // display.textContent.value += e.target.textContent
    })
)

upperCase.addEventListener("click", e => {
    console.log("uppercase", e.target)
    if(e.target.classList.contains("dark")) {
        console.log("dark exist")
        e.target.classList.remove("dark")
        btns.forEach(btn => {
            const btnEl = btn.textContent;
            // console.log("change btn", btn.textContent.toLowerCase())
            return btn.textContent = btn.textContent.toUpperCase()
        })
    } else {
        e.target.classList.add("dark")
        console.log("not dark exist")
        btns.forEach(btn => {
            const btnEl = btn.textContent;
            // console.log("change btn", btn.textContent.toLowerCase())
            return btn.textContent = btn.textContent.toLowerCase()
        })
    }
    
})
exit.addEventListener("click", e => {
    const displayEl = Array.from(display.value);
    displayEl.pop()
    display.value = displayEl.join("")
})
space.addEventListener("click", e => {
    display.value += " ";
})
