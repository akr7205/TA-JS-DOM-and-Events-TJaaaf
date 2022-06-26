let root = document.getElementById("root");
let card = document.querySelector(".card");
let starks = document.querySelector(".starks");
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
