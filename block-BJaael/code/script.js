function randomNumber(max) {
    return Math.floor(Math.random() * max);
};
function colorGenerator() {
    let hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        color += hexCode[random]

    }
    return color;
};

let parentBox = document.querySelector('.container');
for(let i=0;i<500;i++){
    let div = document.createElement('div');
    div.classList.add('box');
    let h2 = document.createElement('h2');
    let randomNum=randomNumber(500);
    h2.innerText=randomNum;
    div.append(h2);
    parentBox.append(div);
};
let allBoxes=document.querySelectorAll('.box');
function handleMouseMove() {
  allBoxes.forEach((box) => {
      box.style.backgroundColor=colorGenerator();
      box.querySelector('h2').innerText=randomNumber(500);
  });
}
parentBox.addEventListener('mousemove', handleMouseMove);