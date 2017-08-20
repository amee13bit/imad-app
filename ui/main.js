console.log('Loaded!');;
var element = document.getElementById("main.text");
element.innerHTML = "newvalue";
var img = document .getElementById("madi");
var marginLeft = 0;
function moveright(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft+ 'px' 
}
img.onclick = function() {
    var interval = set interval(moveright, 100) 
}