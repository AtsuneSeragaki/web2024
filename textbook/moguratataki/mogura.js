var tentokun;

window.onload = function(){
    start();
};

function start(){
    tentokun = document.getElementById("gazo");
    var ransu3 = Math.random() * 3;
    setTimeout(kesu,ransu3 * 1000)
}

function kesu(){
    tentokun.style.visibility = "hidden";
    var ransu3 = Math.random() * 3;
    setTimeout(dasu,ransu3 * 1000); 
}

function dasu(){
    tentokun.style.visibility = "visible";
    var ransu3 = Math.random() * 3;
    setTimeout(kesu,ransu3 * 1000); 
}