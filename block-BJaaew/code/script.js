let root = document.getElementById("root");
let card = document.querySelector(".card");
let starks = document.querySelector(".starks");
let lannisters=document.querySelector(".lannisters");
let baratheons=document.getElementById('2');
let targaryen=document.querySelector(".targaryen");
let greyjoys=document.querySelector(".greyjoys");
let tyrells=document.querySelector(".tyrells");
let tullys=document.querySelector(".tullys");
let redwyne=document.querySelector(".redwyne");
let freys=document.querySelector(".freys");
let arryns=document.querySelector(".arryns");
let dothrakis=document.querySelector(".dothrakis");

let allPeople=got.houses.reduce((acc,cv) =>{
    acc=acc.concat(cv.people);
    return acc;
},[]);
/* <div class="card">
<img
  src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg">
<h2>John Snow</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit aperiam quas expedita deserunt
  exercitationem.</p>
<a href="">Know More</a>
</div> */
got.houses.forEach((house) => {
    house.people.forEach((person) => {
        let div = document.createElement('div');
        div.classList.add('card');
        let img = document.createElement('img');
        img.src=person.image;
        let h2 = document.createElement('h2');
        h2.innerText=person.name;
        let p = document.createElement('p');
        p.innerText=person.description;
        let a = document.createElement('a');
        a.innerText='Know More';
        div.append(img,h2,p,a);
        root.append(div); 

    })
})

let arr = got.houses;
function createCardUI(e, id, arr) {
    console.log(e.target);
    root.innerHTML = '';
    arr[id].people.forEach((person) => {
        let div=document.createElement('div');
        div.classList.add('card');
        let img=document.createElement('img');
        img.src = person.image;
        let h2= document.createElement('h2');
        h2.innerText = person.name;
        let p=document.createElement('p');
        p.innerText = person.description;
        let a=document.createElement('a');
        a.innerText = 'Know More';
        div.append(img, h2, p, a);
        root.append(div);
    })
}


starks.addEventListener("click", function (event) {
    createCardUI(event, 0, arr);
});
lannisters.addEventListener("click", function (event) {
    createCardUI(event, 1, arr);
});
baratheons.addEventListener("click", function (event) {
    createCardUI(event, 2, arr);
});
targaryen.addEventListener("click", function (event) {
    createCardUI(event, 3, arr);
});
greyjoys.addEventListener("click", function (event) {
    createCardUI(event, 4, arr);
});
tyrells.addEventListener("click", function (event) {
    createCardUI(event, 5, arr);
});
tullys.addEventListener("click", function (event) {
    createCardUI(event, 6, arr);
});
redwyne.addEventListener("click", function (event) {
    createCardUI(event, 7, arr);
});
freys.addEventListener("click", function (event) {
    createCardUI(event, 8, arr);
});
arryns.addEventListener("click", function (event) {
    createCardUI(event, 9, arr);
});
dothrakis.addEventListener("click", function (event) {
    createCardUI(event, 10, arr);
});

let input = document.querySelector(`input[type="text"]`);
function createNewcardUI(arr){
    root.innerHTML = '';
    arr.forEach((person) => {
        let div=document.createElement('div');
        div.classList.add('card');
        let img=document.createElement('img');
        img.src = person.image;
        let h2= document.createElement('h2');
        h2.innerText = person.name;
        let p=document.createElement('p');
        p.innerText = person.description;
        let a=document.createElement('a');
        a.innerText = 'Know More';
        div.append(img, h2, p, a);
        root.append(div);
    })
}

function handelSearch(event) {
    // console.dir(event.target);
    // console.log(event.target.value);
    let searchtext=event.target.value;
    console.log(searchtext);
    let filterPeople=allPeople.filter((p) => p.name.toLowerCase().includes(searchtext.toLowerCase()));
    console.log(filterPeople);
    createNewcardUI(filterPeople);
};

input.addEventListener('input',handelSearch);


