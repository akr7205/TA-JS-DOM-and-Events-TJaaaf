let ContainerDiv = document.querySelector('.container');
for (let i = 0; i < 500; i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    let h2 = document.createElement('h2');
    h2.innerText = Math.floor(Math.random() * 500);
    div.append(h2);
    ContainerDiv.append(div);
}

document.querySelector('.box').addEventListener('mousemove', function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
    document.querySelector('h2').innerText= Math.floor(Math.random() * 500);

});

