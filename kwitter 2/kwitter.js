function addUser(){
    var k = document.getElementById("User_Name").value;
    localStorage.setItem("k",k);
    window.location= "kwitter_room.html";
}