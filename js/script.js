
document.getElementById('tombol').addEventListener('click',function(){
    document.querySelector('.popup').style.display = "flex";
});


function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
}

