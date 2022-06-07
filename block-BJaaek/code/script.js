let banner = document.querySelector('.banner');
let second = document.querySelector('.second');



banner.addEventListener('click', function getmycolor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let first = document.querySelector('.first');

    first.style.backgroundColor = `rgb(${red},${green},${blue})`;


})

second.addEventListener('mouseover', function mouseover() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);


    second.style.backgroundColor = `rgb(${red},${green},${blue})`;

})