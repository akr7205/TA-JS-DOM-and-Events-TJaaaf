let form = document.querySelector('form');
let input = document.getElementById('movie');
let list = document.querySelector('.list');
function handelclick(e) {
    e.preventDefault();
    console.dir(e.target);
    let movieName = e.target.elements.movie;
    console.log(movieName.value);
    // let li = document.createElement('li');
    // li.innerText = movieName.value;
    // list.appendChild(li);
}
input.addEventListener('click', handelclick);