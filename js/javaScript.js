const button_html = document.querySelector(".button_html")
const button_css = document.querySelector(".button_css")
const button_js = document.querySelector(".button_js")
const slide_container = document.querySelector(".slide_content")
const body = document.querySelector("body")

button_css.addEventListener("click", () => {
    button_css.className = "button_active"
    body.style.backgroundColor = "#9392E2FF"
    slide_container.style.marginLeft = "0px"
    button_html.className = "button_passive"
    button_js.className = "button_passive"
})

button_html.addEventListener("click", () => {
    button_html.className = "button_active"
    button_html.className = "button_active";
    body.style.backgroundColor = "#EFADC3FF"
    button_js.className = "button_passive"
    button_css.className = "button_passive"
    slide_container.style.marginLeft = "600px"
})

button_js.addEventListener("click", () => {
    button_js.className = "button_active"
    body.style.backgroundColor = "#EDE34DFF"
    button_css.className = "button_passive"
    button_html.className = "button_passive"
    slide_container.style.marginLeft = "-800px"
})


