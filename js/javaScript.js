const slideContainer = document.querySelector(".slide_content")
const body = document.querySelector("body")
const buttons = document.querySelectorAll('.btn');

const cardsStyle = [
    { position: '600px', color: '#EFADC3FF' },
    { position: '0', color: '#9392E2FF' },
    { position: '-800px', color: '#EDE34DFF' },
];

const initialPosition = () => {
    buttons[0].classList.add('active');
    body.style.backgroundColor = cardsStyle[0].color;
    slideContainer.style.marginLeft = cardsStyle[0].position;
}

const slideshow = () => {
    initialPosition()
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            buttons.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            body.style.backgroundColor = cardsStyle[idx].color;
            slideContainer.style.marginLeft = cardsStyle[idx].position;
        });
    });
};

slideshow()


