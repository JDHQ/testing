window.onload = callingModules;

function callingModules(){
    moHeader();
    moFooter();
}
function moHeader(){
    var xhttpz = new XMLHttpRequest();
    xhttpz.onload = function(){
        document.getElementsByTagName("header")[0].innerHTML = xhttpz.responseText;
    }
    xhttpz.open("GET", "/pagesModules/moHeader.html");
    xhttpz.send();
}
function moFooter(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementsByTagName("footer")[0].innerHTML = xhttp.responseText;
    }
    xhttp.open("GET", "/pagesModules/moFooter.html");
    xhttp.send();
}