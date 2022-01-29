const slide_container = document.querySelector(".slide_content")
const body = document.querySelector("body")
let buttons = document.querySelectorAll('.btn');
body.style.backgroundColor = "#EFADC3FF"

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

buttons[0].addEventListener("click", () => {
    body.style.backgroundColor = "#EFADC3FF"
    slide_container.style.marginLeft = "600px"
})

buttons[1].addEventListener("click", () => {
    body.style.backgroundColor = "#9392E2FF"
    slide_container.style.marginLeft = "0px"
})

buttons[2].addEventListener("click", () => {
    body.style.backgroundColor = "#EDE34DFF"
    slide_container.style.marginLeft = "-800px"
})


