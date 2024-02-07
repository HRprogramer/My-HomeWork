var body = document.querySelector('body');
body.style.margin = 0;
body.style.padding = 0;
body.style.boxSizing ='border-box';
body.style.color = '#3E3232';
body.style.lineHeight = '1.8';
body.style.background = 'wheat';

// haeder
var header = document.createElement('header'); 
var main = document.createElement('main');
header.appendChild(main);
body.appendChild(header);

header.style.width = '100%';
header.style.position = 'fixed';
header.style.background = '#99BC85';
header.style.top = '0';
header.style.left = '0';
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
header.style.color = '#E1F0DA';
header.style.height = '100px';

main.style.width = '90%';
main.style.height = '100%';
main.style.display = 'flex';
main.style.flexDirection = 'row';
main.style.justifyContent = 'space-between';
main.style.alignItems = 'center';


var logo = document.createElement('div');
logo.style.fontFamily = '"Courier New", Courier, monospace';
main.appendChild(logo);
logo.style.flex = '2';

var h1 = document.createElement('h1');
h1.innerHTML = 'JS is beautiful.'
logo.appendChild(h1);


var navigation = document.createElement('nav');
var a1 = document.createElement('a');
var a2 = document.createElement('a');
var a3 = document.createElement('a');

a1.href = '#Session20';
a2.href = '#Session21'; 
a3.href = '#Session22'; 

navigation.appendChild(a1);
navigation.appendChild(a2);
navigation.appendChild(a3);

navigation.style.display = 'flex';
navigation.style.flexDirection = 'row';
navigation.style.justifyContent = 'space-between';
navigation.style.alignItems = 'center';
navigation.style.flex = '1';

a1.innerHTML = 'Session 20';
a2.innerHTML = 'Session 21';
a3.innerHTML = 'Session 22';

a1.style.textDecoration = 'none';
a2.style.textDecoration = 'none';
a3.style.textDecoration = 'none';
a1.style.color = '#ffff';
a2.style.color = '#ffff';
a3.style.color = '#ffff';

main.appendChild(navigation);



/////////////// SECTION ////////////////////


var sectoin = document.createElement('section');
body.appendChild(sectoin);

sectoin.style.background = 'wheat'; 
sectoin.style.width = '100%';
sectoin.style.minHeight = '100vh';
sectoin.style.letterSpacing = '1px';


/////frist article/////////////////////////


var article1 = document.createElement('article');
article1.id = 'Session20';

var div_article1 = document.createElement('div');
article1.appendChild(div_article1);

var h2_article1 = document.createElement('h2');
div_article1.appendChild(h2_article1);
h2_article1.innerHTML = 'Session 20';

var p_article11 = document.createElement('p');
var p_article12 = document.createElement('p');
var p_article13 = document.createElement('p');
p_article11.innerHTML = '<b>Console.log(value) : </b>It is used to print information.This information is displayed in the console section of the site.<br><b>VAR :</b>We use the word var to create variables in JavaScript.This word is an abbreviation of variable.<br><b>New Array</b> : a method to create a new array in JavaScript language.';
p_article12.innerHTML = "<b>Alert : </b>This function is used to create a message on the site page (For example :a warning message).<br><b>Prompt : </b>With the help of this function, a window can be created and input from the user.<br><b>Confirm : </b>This function is useful for asking the user a question.";
p_article13.innerHTML ="<b>This : </b>We determine the elements of a function with the help of (this).<br><b>function(){} : </b> Functions defined in a class are nameless!<br><b>New functoin_name : </b>To use a function of a class, we must first create it.";
div_article1.appendChild(p_article11);
div_article1.appendChild(p_article12);
div_article1.appendChild(p_article13);


/////CSS

article1.style.paddingTop = '12vh';
h2_article1.style.textAlign = 'center';
h2_article1.style.fontFamily = 'Arial, Helvetica, sans-serif';
p_article11.style.padding = '1% 3%';
p_article11.style.fontSize = '17px';
p_article12.style.padding = '1% 3%';
p_article12.style.fontSize = '17px';
p_article13.style.padding = '1% 3%';
p_article13.style.fontSize = '17px';


/////second article/////////////////////////


var article2 = document.createElement('article');
article2.id = 'Session21';

var div_article2 = document.createElement('div');
article2.appendChild(div_article2);

var h2_article2 = document.createElement('h2');
div_article2.appendChild(h2_article2);
h2_article2.innerHTML = 'Session 21';

var p_article21 = document.createElement('p');
var p_article22 = document.createElement('p');
var p_article23 = document.createElement('p');
p_article21.innerHTML ="<b>Selection Element:</b><br>1.Selection element by Class name => document.getElementsByClassName('class neme');<br>2.Selection element by Tag name =>document.getElementsByTagName('tag name');<br>3.Selection element by ID => document.getElementById('Id name');";
p_article22.innerHTML = "4.Selection element by query selectors (CSS selectors) :<br>For example => var myA = document.querySelector('#section .baner .baner a');";

div_article2.appendChild(p_article21);
div_article2.appendChild(p_article22);


/////CSS

article2.style.paddingTop = '12vh';
h2_article2.style.textAlign = 'center';
h2_article2.style.fontFamily = 'Arial, Helvetica, sans-serif';
p_article21.style.padding = '1% 3%';
p_article21.style.fontSize = '17px';
p_article22.style.padding = '1% 3%';
p_article22.style.fontSize = '17px';



/////third article/////////////////////////


var article3 = document.createElement('article'); 
article3.id = 'Session22';

var div_article3 = document.createElement('div');
article3.appendChild(div_article3);

var h2_article3 = document.createElement('h2');
div_article3.appendChild(h2_article3);
h2_article3.innerHTML = 'Session 22';

var p_article31 = document.createElement('p');
var p_article32 = document.createElement('p');

p_article31.innerHTML ="<b>1.setTimeout : </b>setTimeout(function() {}, value time);<br>After the specified time, the function is executed!<br><b>2.setInterval : </b>setInterval(function() {}, value time);<br>repeating the function after the set time (for example: repeating the function every three seconds)";
p_article32.innerHTML = "<b>3.innerHTML : </b>Change the content of an element <br>for example : p.innerTHML = 'hello world!'<br><b>4.appendChild : </b>Attaching elements to other elements.(for example : body.appendChild( header );<br><b>5.insertBefore(a , b) : </b>Placing the desired tag between two other tags(for example : body.insertBefore(p, image);)";

div_article3.appendChild(p_article31);
div_article3.appendChild(p_article32);



/////CSS

article3.style.paddingTop = '12vh';
h2_article3.style.textAlign = 'center';
h2_article3.style.fontFamily = 'Arial, Helvetica, sans-serif';
p_article31.style.padding = '1% 3%';
p_article31.style.fontSize = '17px';
p_article32.style.padding = '1% 3%';
p_article32.style.fontSize = '17px';

sectoin.appendChild(article1);
sectoin.appendChild(article2);
sectoin.appendChild(article3);


/////////////// FOOTER ////////////////////


var footer = document.createElement('footer');
body.appendChild(footer);

footer.style.width = '100%';
footer.style.background = '#99BC85';
footer.style.display = 'flex';
footer.style.flexDirection = 'column';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.color = '#E1F0DA';
footer.style.height = '100px';


var main_footer = document.createElement('main');
footer.appendChild(main_footer);

main_footer.style.width = '40%';
main_footer.style.display = 'flex';
main_footer.style.flexDirection = 'row';
main_footer.style.justifyContent = 'space-between';
main_footer.style.alignItems = 'center';
main_footer.style.height = '100%';  

var link_footer = document.createElement('ul');
main_footer.appendChild(link_footer);

link_footer.style.display = 'flex';
link_footer.style.flexDirection = 'row';
link_footer.style.justifyContent = 'space-between';
link_footer.style.alignItems = 'center';
link_footer.style.width = '100%';

var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

link_footer.appendChild(li1);
link_footer.appendChild(li2);
link_footer.appendChild(li3);

li1.style.listStyle = 'none';
li2.style.listStyle = 'none';
li3.style.listStyle = 'none';

var instagram = document.createElement('a');
var github = document.createElement('a');
var telegram = document.createElement('a');

instagram.style.color = '#ffff';
instagram.style.textDecoration = 'none';
instagram.style.fontSize = '19px';

github.style.color = '#ffff';
github.style.textDecoration = 'none';
github.style.fontSize = '19px';

telegram.style.color = '#ffff';
telegram.style.textDecoration = 'none';
telegram.style.fontSize = '19px';

instagram.innerHTML = 'instagram';
github.innerHTML = 'github';
telegram.innerHTML = 'telegram';

instagram.href = '#';
github.href = '#';
telegram.href = '#';

li1.appendChild(instagram);
li2.appendChild(github);
li3.appendChild(telegram);



