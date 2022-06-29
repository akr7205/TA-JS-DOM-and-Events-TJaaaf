//all card 
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());
let grid = document.querySelector('.grid');
let resultDisplay = document.getElementById('result');
let cardChoosen = [];
let cardChoosenID = [];
let cardWon = [];

//match card
function checkMatch() {
    let cards = document.querySelectorAll('img');
    let optionOneId = cardChoosenID[0];
    let optionTwoId = cardChoosenID[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].src = 'images/blank.png';
        cards[optionTwoId].src = 'images/blank.png';
        alert('You have clicked the same card');
    }
    else if (cardChoosen[0] == cardChoosen[1]) {
        alert('you found a match')
        
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click', flipcard);
        cards[optionTwoId].removeEventListener('click', flipcard);
        console.log(cardChoosen);
        cardWon.push(cardChoosen);
        // console.log(cardWon);
    }
    else {
        cards[optionOneId].src = 'images/blank.png';
        cards[optionTwoId].src = 'images/blank.png';
        alert('Sorry did not match');

    }
    cardChoosen=[];
    cardChoosenID=[];
    resultDisplay.innerHTML=cardWon.length;
    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML='You found all match';
    }

}
//create card 
function createCard() {
    for (let i = 0; i < cardArray.length; i++) {
        let img = document.createElement('img');
        img.src = 'images/blank.png';
        img.setAttribute('data-id', i);
        img.addEventListener('click', flipcard);
        grid.appendChild(img);
    }
}
//flipcard
function flipcard(event) {
    // let cardId=event.target.dataset.id;
    let cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenID.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChoosen.length == 2) {
        setTimeout(checkMatch, 500);
    }

}
createCard();