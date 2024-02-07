window.onload = function() {
    var button_start = document.querySelector('#button1');
    button_start.addEventListener('click',()=>{
        var x  = new Create();
        x.Student();
    })
}

class Create {
    constructor(){

    }
    
    Student(){
        var div = document.querySelector('nav');
        ///////////////

        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        div.appendChild(h2);
        div.appendChild(p);

        h2.innerHTML = "Students <i><b>!</b></i>"
        p.innerHTML = "Please enter the number of students:";

        h2.style.color = "#000"
        p.style.textAlign = "center";

        //////////////  

        let form = document.createElement('form');
        div.appendChild(form);

        let label1 = document.createElement('label');        
        let label2 = document.createElement('label');
        form.appendChild(label1);
        form.appendChild(label2);

        let input_text = document.createElement('input');
        label1.appendChild(input_text);

        let input_submit = document.createElement('input');
        input_submit.type = "submit";
        input_submit.value = "Save";
        label2.appendChild(input_submit);

        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.justifyContent = "center";
        form.style.alignItems = "center";
        form.style.gap = "30px";

        input_text.style.width = "250px";
        input_text.style.height = "30px";
        input_text.style.borderRadius = "10px";
        input_text.style.border = "none";
        input_text.style.padding = "0 10px";
        input_text.style.fontSize = "17px";
        input_text.style.color = "#000";
        input_text.style.letterSpacing = "1px";

        input_submit.style.width = "100px";
        input_submit.style.height = "30px";
        input_submit.style.borderRadius = "10px";
        input_submit.style.border = "none";
        input_submit.style.padding = "0 10px";
        input_submit.style.fontSize = "17px";
        input_submit.style.color = "#000";
        input_submit.style.letterSpacing = "1px";

        var button_start = document.querySelector('#button1');
        div.removeChild(button_start);
        
        // input_submit.addEventListener("click" , ()=>{
        //     var v = input_text.value;
        //     const e = document.querySelector('.left_div nav');
        //     e.remove();
        //     this.Source(v);
        //     this.Scores();
        // })
    }

    Source(Number){
        this.Number = Number;
        // console.log(this.Number);

    }

    Scores(){
        var div = document.querySelector('.left_div');
        let nav = document.createElement('nav');
        div.appendChild(nav);

        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        h2.innerHTML = "Scores <i><b>!</b></i>";
        p.innerHTML = "Please enter student grades:";
        nav.appendChild(h2);
        nav.appendChild(p);

        h2.style.color = "#000"
        p.style.textAlign = "center";

        //////////////////////////////
        
        let form = document.createElement('form');
        div.appendChild(form);
        
        // let number = new this.Source();

        for(let i = 1 ; i = this.Number ; i++){
            // console.log("Hossein");
        }
    }

    Average (){

    }



}

