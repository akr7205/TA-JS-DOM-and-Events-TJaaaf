let input = document.querySelector(`input[type="text"]`);
let rootList = document.querySelector('.movie-list');
let btn = document.querySelector('.btn');
// console.log(input);
let allMovies = [

];
input.addEventListener("keyup", (event) => {
    console.dir(event);
    console.log(event.target);
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        console.log(event.target.value);
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value='';
        createMoviesUI();
    }
});

function deleteMovie(event) {
    console.log(event.target);
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMoviesUI();
}
function handelChange(event) {
    // console.log(event);
    console.log(event.target);
    console.dir(event.target);
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
}
function createMoviesUI() {
    //     <li>
    //     <input class="styled-checkbox" id="1" type="checkbox">
    //     <label for="1">Checkbox</label>
    //     <span>-</span>
    //   </li>
    rootList.innerHTML = '';
    allMovies.forEach((movie, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('styled-checkbox');
        input.id = i;
        input.type = 'checkbox';
        input.checked = movie.watched;
        input.addEventListener('change', handelChange);
        let label = document.createElement('label');
        label.for = i;
        label.innerText = movie.name;
        let span = document.createElement('span');
        span.innerText = '-';
        span.setAttribute('data-id', i);
        span.addEventListener('click', deleteMovie);
        li.append(input, label, span);
        rootList.append(li);
    })
};

// createMoviesUI();