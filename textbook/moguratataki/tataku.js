var tentokun1;
var tentokun2;
var tentokun3;
var kieru;
var hyoji;
var botan;
var tensu = 0;
var saiko = 0;
var gameover = false;
var lastspurt = false;

window.onload = function(){
    start();
};

function start(){
    tentokun1 = document.getElementById("gazo1");
    tentokun2 = document.getElementById("gazo2");
    tentokun3 = document.getElementById("gazo3");
    hyoji = document.getElementById("ten");
    botan = document.getElementById("start");
    tentokun1.onclick = function(){
        tentokun1.src = "naki.png";
        setTimeout(modosu1,1000);
        tensu = tensu + 1;
        hyoji.innerHTML = tensu;
    }

    tentokun2.onclick = function(){
        tentokun2.src = "naki.png";
        setTimeout(modosu2,1000);
        tensu = tensu + 1;
        hyoji.innerHTML = tensu;
    }

    tentokun3.onclick = function(){
        tentokun3.src = "naki.png";
        setTimeout(modosu3,1000);
        tensu = tensu + 1;
        hyoji.innerHTML = tensu;
    }

    botan.onclick = function(){
        gameover = false;
        lastspurt = false;
        tensu = 0;
        hyoji.innerHTML = tensu;
        start();
    }

    var ransu3 = Math.random() * 3;
    setTimeout(kesu1,ransu3 * 1000);
    setTimeout(kesu2,ransu3 * 1000);
    setTimeout(kesu3,ransu3 * 1000);
    setTimeout(stop,60000);
    setTimeout(nokori10,50000);
}

function nokori10(){
    alert("もう、おこったぞ！");
    lastspurt = true;
}

function kesu1(){
    tentokun1.style.visibility = "hidden";
    var ransu3 = Math.random() * 3;
    if(lastspurt == true){
        setTimeout(dasu101,ransu3 * 1000);
    }else{
        setTimeout(dasu1,ransu3 * 1000);
    }
}

function kesu2(){
    tentokun2.style.visibility = "hidden";
    var ransu3 = Math.random() * 3;
    if(lastspurt == true){
        setTimeout(dasu102,ransu3 * 1000);
    }else{
        setTimeout(dasu2,ransu3 * 1000);
    }
}

function kesu3(){
    tentokun3.style.visibility = "hidden";
    var ransu3 = Math.random() * 3;
    if(lastspurt == true){
        setTimeout(dasu103,ransu3 * 1000);
    }else{
        setTimeout(dasu3,ransu3 * 1000);
    }
}

function dasu1(){
    if(gameover == false){
        tentokun1.style.visibility = "visible";
    }
    var ransu3 = Math.random() * 3;
    setTimeout(kesu1,ransu3 * 1000);
}

function dasu2(){
    if(gameover == false){
        tentokun2.style.visibility = "visible";
    }
    var ransu3 = Math.random() * 3;
    setTimeout(kesu2,ransu3 * 1000);
}

function dasu3(){
    if(gameover == false){
        tentokun3.style.visibility = "visible";
    }
    var ransu3 = Math.random() * 3;
    setTimeout(kesu3,ransu3 * 1000);
}

function dasu101(){
    if(gameover == false){
        tentokun1.style.visibility = "visible";
    }
    var ransu = Math.random();
    setTimeout(kesu1,ransu * 1000);
}

function dasu102(){
    if(gameover == false){
        tentokun2.style.visibility = "visible";
    }
    var ransu = Math.random();
    setTimeout(kesu2,ransu * 1000);
}

function dasu103(){
    if(gameover == false){
        tentokun3.style.visibility = "visible";
    }
    var ransu = Math.random();
    setTimeout(kesu3,ransu * 1000);
}

function modosu1(){
    tentokun1.src = "tento.png";
}

function modosu2(){
    tentokun2.src = "tento.png";
}

function modosu3(){
    tentokun3.src = "tento.png";
}

function stop(){
    alert("ゲームオーバー！");
    gameover = true;
    tentokun1.style.visibility = "hidden";
    tentokun2.style.visibility = "hidden";
    tentokun3.style.visibility = "hidden";
    if(tensu > saiko){
        saiko = tensu;
        kiroku = document.getElementById("saiko");
        kiroku.innerHTML = saiko;
    }
}