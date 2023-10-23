const BAR_FRONT = document.getElementById("progfront")

var value = 0
function increment() {
    setTimeout(() => {
        if (value <10) {
            value++
        }
        BAR_FRONT.style.width = (value * (10)) + "%"

        increment()
    }, 250);
}

increment()

setTimeout(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self")
}, 2500)