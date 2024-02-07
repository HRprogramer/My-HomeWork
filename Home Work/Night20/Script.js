var length = prompt ("Enter the length:");
var width = prompt ("Enter the width:");
var height = prompt ("Enter the height:");


function Computing (length , width , height){

this.length= length ;    
this.width = width ;
this.height = height;   
this.Volume = this.length * this.width * this.height ;
return Volume;
}


console.log(Computing(length , width ,height));