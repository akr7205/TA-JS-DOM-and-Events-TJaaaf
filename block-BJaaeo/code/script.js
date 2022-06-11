let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (event.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;

        }
        else if (event.target.innerHTML == '%'){
            
            string=string+'/';
            document.querySelector('input').value = string;


        }
        else{
            console.log(event.target);
            string=string+event.target.innerHTML;
            console.log(string);
            document.querySelector('input').value = string;

        }
    })
})