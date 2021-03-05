
document.getElementById('tombol').addEventListener('click',function(){
    document.querySelector('.popup').style.display = "flex";
});


function getNama(){
    var name = document.getElementById("mynama").value;
    localStorage.setItem("nama", name);
}

function timeoutData() {
    setTimeout(function(){
        window.location.href = "whatsapp://open";
    },82000)
}

