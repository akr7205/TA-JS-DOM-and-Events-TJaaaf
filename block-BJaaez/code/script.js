let input = document.querySelector(`input[type="text"]`);
let rootList = document.querySelector('.todo-list');
let btn = document.querySelector('.btn');
let all=document.querySelector('.all');
let active=document.querySelector('.active');
let completed=document.querySelector('.completed');
let clear=document.getElementById('clear');
// console.log(input);
let allTodo = localStorage.getItem('allTodo') ? JSON.parse(localStorage.getItem('allTodo')) : [];

input.addEventListener("keyup", (event) => {
    // console.dir(event);
    // console.log(event.target);
    // console.log(event.keyCode);
    if (event.keyCode === 13 && event.target.value) {
        console.log(event.target.value);
        allTodo.push({
            name: event.target.value,
             isDone: false,
        });
        event.target.value='';
        createTodoUI();
        localStorage.setItem('allTodo', JSON.stringify(allTodo));
    }
});

function deleteTodo(event) {
    // console.log(event.target);
    let id = event.target.dataset.id;
    allTodo.splice(id, 1);
    createTodoUI();
    localStorage.setItem('allTodo', JSON.stringify(allTodo));

}
function handelChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.dir(event.target);
    let id = event.target.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    localStorage.setItem('allTodo', JSON.stringify(allTodo));

}
function createTodoUI(data=allTodo) {
    //     <li>
    //     <input class="styled-checkbox" id="1" type="checkbox">
    //     <label for="1">Checkbox</label>
    //     <span>-</span>
    //   </li>
    rootList.innerHTML = '';
    data.forEach((todo, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.classList.add('styled-checkbox');
        input.id = i;
        input.type = 'checkbox';
        input.checked = todo.isDone;
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

clear.addEventListener('click', (event) => {
    // console.log(event.target);
    allTodo=allTodo.filter((todo) => !todo.isDone);
    createTodoUI();
    updateButton(clear);
    localStorage.setItem('allTodo', JSON.stringify(allTodo));

});
active.addEventListener('click', (event) => {
    // console.log(event.target);
    let notCompleted=allTodo.filter((todo) => !todo.isDone);
    createTodoUI(notCompleted);
    updateButton(active);

})
completed.addEventListener('click', (event) => {
    let Completed=allTodo.filter((todo) => todo.isDone);
    createTodoUI(Completed);
    updateButton(completed);

})
all.addEventListener('click', (event) => {
    createTodoUI();
    updateButton(all);

})

function updateButton(btn){
all.classList.remove('selected');
completed.classList.remove('selected');
clear.classList.remove('selected');
active.classList.remove('selected');

btn.classList.add('selected');
}
createTodoUI();