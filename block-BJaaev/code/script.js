let input = document.querySelector(`input[type="text"]`);
let rootList = document.querySelector('.todo-list');
let btn = document.querySelector('.btn');
// console.log(input);
let allTodo = [
];

input.addEventListener("keyup", (event) => {
    console.dir(event);
    console.log(event.target);
    console.log(event.keyCode);
    if (event.keyCode === 13) {
        console.log(event.target.value);
        allTodo.push({
            name: event.target.value,
             isDone: false,
        });
        event.target.value='';
        createTodoUI();
    }
});

function deleteTodo(event) {
    console.log(event.target);
    let id = event.target.dataset.id;
    allTodo.splice(id, 1);
    createTodoUI();
}
function handelChange(event) {
    // console.log(event);
    console.log(event.target);
    console.dir(event.target);
    let id = event.target.id;
    allTodo[id].isDone = !allTodo[id].isDone;
}
function createTodoUI() {
    //     <li>
    //     <input class="styled-checkbox" id="1" type="checkbox">
    //     <label for="1">Checkbox</label>
    //     <span>-</span>
    //   </li>
    rootList.innerHTML = '';
    allTodo.forEach((todo, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('styled-checkbox');
        input.id = i;
        input.type = 'checkbox';
        input.checked = todo.watched;
        input.addEventListener('change', handelChange);
        let label = document.createElement('label');
        label.for = i;
        label.innerText = todo.name;
        let span = document.createElement('span');
        span.innerText = '-';
        span.setAttribute('data-id', i);
        span.addEventListener('click', deleteTodo);
        li.append(input, label, span);
        rootList.append(li);
    })
};

// createMoviesUI();