window.onload = function(){
    var sbtn = document.querySelector('.btn');
    var xhr; 

    sbtn.onclick = function(element){
        element.preventDefault();

        xhr = new XMLHttpRequest();

        var url =  "superheroes.php";
        xhr.onreadystatechange = printInfo;
        xhr.open("GET", url);
        xhr.send();
        console.log("After send");
        // fetch("superheroes.php")
        //     .then(response => response.text())
        //     .then(data =>{
        //         alert(data)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    function printInfo(){
        console.log("PrintInfo");
        //if (xhr.readyState === XMLHttpRequest.DONE){
        if (xhr.readyState === 4){
            console.log("Done");
            if(xhr.status === 200){
                console.log("200");
                var response = xhr.responseText;
                alert(response);
            }
            else {
                console.log("Else");
                alert('An error occurred with the request.');
            }
        }
    }
}