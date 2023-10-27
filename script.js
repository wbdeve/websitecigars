
var typed = new Typed(".text", { 
    strings: ["Mogoton Tobacco Company"],
    typeSpeed:100,
    backSSpeed:100,
    backDelay: 1000,
    loop: true 
});

function imgSlider(anything) {
    document.querySelector('.starbucks').src=anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


