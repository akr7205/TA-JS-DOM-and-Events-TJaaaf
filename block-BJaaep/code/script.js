let firstboxes=document.querySelectorAll('.first li');
let secondboxes=document.querySelector('.second');
//without event delegation
firstboxes.forEach((box,index)=>{
 box.addEventListener('click',(event)=>{
     event.target.innerText=index+1;

     setTimeout( ()=>{
     event.target.innerText='';

     },5000);
 })
})
//with event delegation
secondboxes.addEventListener('click',(event)=>{
    let number = event.target.dataset.number;
    event.target.innerText=number;
    setTimeout( ()=>{
        event.target.innerText='';
   
        },5000);
    
});