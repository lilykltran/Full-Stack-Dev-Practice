function reset(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    console.log("name: " + name + "\nemail: " + email + "\nmessage: " + comment);
}
