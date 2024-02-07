window.onload= function(){
    var img = document.querySelector('img');
    var count = 1;


    var buttons = document.querySelectorAll('button');
    
    buttons.forEach(function(el){
        el.addEventListener('click' , (e)=>{
            if(e.target.innerHTML == 'Next'){
                count++;
                if(count > 3 ){
                    count = 1;
                }
                console.log(count);
                img.src = "./Images/img"+count+".jpg";
                
            }
            else{
                count--;
                if(count < 1 ){
                    count = 3;
                }
                console.log(count);
                img.src = "./Images/img"+count+".jpg";
            }
            
        })
    })
    setInterval(function(){

        count++;
        if(count > 3){
            count = 1;
        }
        img.src ="./Images/img"+count+".jpg";

    },5000);

}