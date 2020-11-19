window.onload = function(){
    var httpRequest = new XMLHttpRequest();
    var searchbutton = document.getElementById("lookup");
    

    searchbutton.addEventListener("click",function(element){
        element.preventDefault();
        var url = "world.php";
        var country = document.getElementById("country").value;
        httpRequest.open('GET',url+"?country="+country,false);
        httpRequest.send();
        httpRequest.onreadystatechange = getMsg();
        

    });

    var searchbutton2 = document.getElementById("city");
    `2`

    searchbutton2.addEventListener("click",function(element){
        element.preventDefault();
        var url = "world.php";
        var country = document.getElementById("country").value;
        httpRequest.open('GET',url+"?country="+country+"&context=cities",false);
        httpRequest.send();
        httpRequest.onreadystatechange = getMsg();
        

    });

function getMsg() {
    if (httpRequest.readyState == XMLHttpRequest.DONE)
        if (httpRequest.status == 200) {
            var response = httpRequest.responseText;
            var space = document.getElementById("result");
            space.innerHTML=response;
     } 
    } 
}