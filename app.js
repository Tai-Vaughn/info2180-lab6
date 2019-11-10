window.onload = () => { 
    var httpRequest = new XMLHttpRequest();
    var searchBtn = document.getElementById('search');
    var basUrl = "http://localhost:8080/superheroes.php"
    
    httpRequest.open('GET','http://localhost:8080/superheroes.php')
    httpRequest.responseType = "document"
    httpRequest.setRequestHeader('Port', '')
    searchBtn.addEventListener("click" , function() {
        var dom = httpRequest.responseXML.getElementsByTagName("li")
        var txt = ""
        for( var i =0 ; i  < dom.length ; i++){
            txt += dom[i].innerHTML +"\n"
        }
        alert(txt);
    })
    httpRequest.send();
}
