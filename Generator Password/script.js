var size = document.querySelector('input[name="passwordlength"]');

var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!@#$%^&*()";

var upp_i_position = true;
var low_i_position = true;
var num_i_position = true;
var sym_i_position = true;

var sum = "";

var upp_i = document.querySelector(".upp-i");
var low_i = document.querySelector(".low-i");
var num_i = document.querySelector(".num-i");
var sym_i = document.querySelector(".sym-i");


////FUNCTIONS/////

function Change (element , value){

    let Element = element;
    let Value = value;
    if(!Value){
        Element.childNodes[1].classList.replace('bx-check','bx-x');
        Element.childNodes[1].style.background = "gray";
        Element.style.alignItems = "start";
    }
    else{
        Element.childNodes[1].style.background = "#7F27FF";
        Element.childNodes[1].classList.replace('bx-x','bx-check');
        Element.style.alignItems = "end";
    }
}

function random_pass (value , size){

    let Value = value;
    let Size = size;
    let password = '';
    for (let i = 0 ; i < Size ; i++){
        const randomIndex = Math.floor(Math.random() * Value.length);
        password += Value.charAt(randomIndex);
    }

    document.querySelector('.text').value = password;
    document.querySelector('.text').style.fontSize = "15px";
}


window.onload = () =>{

    var button = document.querySelector('#btn');

    upp_i.addEventListener("click" , () => {
        upp_i_position = !upp_i_position;
        Change(upp_i , upp_i_position);
    }); 
    
    num_i.addEventListener("click" , () => {
        num_i_position = !num_i_position;
        Change(num_i , num_i_position);
    }); 

    low_i.addEventListener("click" , () => {
        low_i_position = !low_i_position;
        Change(low_i , low_i_position);
    }); 

    sym_i.addEventListener("click" , () => {
        sym_i_position = !sym_i_position;
        Change(sym_i , sym_i_position);
    }); 

    button.addEventListener("click" , () => {
        sum = "0123456789";
        if(upp_i_position){
            sum += upp;
        }

        if(low_i_position){
            sum += low;
        }  

        if(num_i_position){
            sum += num;
        } 
        else{
            sum = sum.replace("0123456789" , '');
        }

        if(sym_i_position){
            sum += sym;
        }

        random_pass(sum , size.value);
        
    });

    let copytext = document.querySelector('.div-p');

    copytext.querySelector('button').addEventListener('click' , () => {
        let input = copytext.querySelector('input.text');
        input.select();
        let content =document.querySelector('.text').value;
        document.execCommand('copy');
        document.querySelector('.text').value = "copied";
        
        setTimeout(() => {
            document.querySelector('.text').value = content;
            window.getSelection().removeAllRanges();
        }, 2000);
    });
}


