window.onload = function(){
    var activite = document.querySelector('.activite');
    var button1 = document.querySelector('button[name="create"]');

    button1.onclick = function(){
        var parent_div = document.createElement('div');
        parent_div.id = 'row_info';

        activite.appendChild(parent_div);

        var child_div = document.createElement('div');
        var child_nav = document.createElement('nav');
        var child_article = document.createElement('article');

        parent_div.appendChild(child_div);
        parent_div.appendChild(child_nav);
        parent_div.appendChild(child_article);

        var button2 = document.createElement('button');
        button2.className = 'delete';
        parent_div.appendChild(button2);
        parent_div.insertBefore(button2 , child_nav);
        button2.innerHTML = "Delete";

        button2.onclick = function(){
            const element = document.getElementById("row_info");
            element.remove();
            console.log(element);
        }
    }
}


// var button = document.querySelector('button');

// button.onclick = function(){

//     var grid = document.querySelector('.grid_item');

//     grid.setTimeout(function(){

//         grid.addEventListener('change' , function(){
//             grid.remove();
//             var p = document.createElement('p');
//             p.innerHTML = "deleted";

//         })
//     } , 2000);  
// }

        // grid.addEventListener('change' , function(){

        //     grid
        //     div.setTimeout(function(){

        //         var p = document.createElement('p');
        //         p.innerHTML = "post deleted!";
        //         p.parentNode.removeChild(p);

        //     }, 2000);/* <div class='grid-item'>

/* <nav>
    <h2> $Uname </h2>
    <button type='button'>Delete</button>
</nav>
<div>
    $post
</div>
<article>
    $labels
</article>
</div> */ 