var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var me = ("./images/"+ randomNumber1 +".png");
you = document.querySelectorAll("img")[0];
you.setAttribute("src",me); 

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var me2 = ("./images/"+ randomNumber2 +".png");
you2 = document.querySelectorAll("img")[1];
you2.setAttribute("src",me2);

var randomNumber3 = Math.random();
randomNumber3 = Math.floor(randomNumber3*6)+1;
var me3 = ("./happy/happy"+ randomNumber3 +".png");
var me4 = ("./sad/sad"+ randomNumber3 +".png");
you3 = document.querySelectorAll("img")[2];
if (randomNumber1>randomNumber2) {
    you3.setAttribute("src",me3);
}else if (randomNumber1<randomNumber2) {
    you3.setAttribute("src",me4);
}else{
    you3.setAttribute("src",me3);
}

var randomNumber4 = Math.random();
randomNumber4 = Math.floor(randomNumber4*6)+1;
var me3 = ("./happy/happy"+ randomNumber4 +".png");
var me4 = ("./sad/sad"+ randomNumber4 +".png");
you3 = document.querySelectorAll("img")[3];
if (randomNumber1<randomNumber2) {
    you3.setAttribute("src",me3);
}else if (randomNumber1>randomNumber2) {
    you3.setAttribute("src",me4);
}else{
    you3.setAttribute("src",me3);
}