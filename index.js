
let keypad = document.getElementById("calkeypad");

let screen = document.getElementById("calscreen")

let num=0;
let arr = new Array();
keypad.addEventListener("click",
    (e)=>{
        let key = e.target.textContent;
        console.log(e.target.innerHTML);
         calculate(key);
        
    }
)
document.addEventListener('keydown', 
    (e)=>{
        let button = e.key;
        
        console.log(button);
        calculate(button)
    }
)


function calculate(key) {
    if (!isNaN(key)||key=="+"||key=="-"||key=="*"||key=="/") {
        screen.innerHTML+=key;
        
    }else if (key=="+"||key=="-"||key=="*"||key=="/"||key==".") {
        screen.innerHTML+=key;
        
    }
     else if (key=="clr"||key=="Delete"){
        screen.innerHTML="";
    }
    else if (key=="="||key=="Enter") {
        screen.innerHTML=eval(screen.innerHTML);
    }
    else if (key=="←"||key=="Backspace") {
        screen.innerHTML = screen.innerHTML.slice(0,-1);
        
    }
}

