var tentokun;

window.onload = function(){
    start();
};

function start(){
    tentokun = document.getElementById("gazo");
    tentokun.onclick = function(){
        tentokun.src = "naki.png";
    }
}
