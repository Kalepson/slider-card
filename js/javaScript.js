const button_html = document.querySelector(".html")
const button_css = document.querySelector(".css")
const button_js = document.querySelector(".js")
const body = document.querySelector("body")
const slideLine = document.querySelector(".slide-line")
let poziti = 0;

button_html.addEventListener("click" ,  () =>{
    body.style.backgroundColor = "#EFADC3FF"
    button_html.classList.toggle("html1")
    button_js.className ="js"
    poziti = poziti + 400;
    if (poziti > 400){
        poziti =0;
    }
    slideLine.style.right = -poziti + 'px';
})

button_css.addEventListener("click" , () => {
    body.style.backgroundColor = "#9C94E0FF"
    button_css.classList.toggle("css1")
    button_html.className ="html";
    poziti = poziti + 400;
    if (poziti > 800){
        poziti =0;
    }
    slideLine.style.right = -poziti + 'px';
})

button_js.addEventListener("click" ,  () =>{
    body.style.backgroundColor = "#F5E54AFF"
    button_js.classList.toggle("js1")
    button_css.className = "css";
    poziti = poziti + 400;
    if (poziti > 800){
        poziti =0;
    }
    slideLine.style.left = -poziti + 'px';
})

