console.log("Hello bhai")

const display = document.getElementById("display");

const keys = document.getElementById("keys");

const buttons = Array.from(document.getElementsByTagName('button'));

display.innerHTML = "";

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);

        switch(e.target.innerText){
            case 'RESET':
                display.innerText = "";
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText = "Error!";
                }
                break;
            default :
                display.innerText += e.target.innerText;    
                
        }
    })

});

