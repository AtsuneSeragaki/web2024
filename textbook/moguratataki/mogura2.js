var tento1;
var tento2;
var tento3;
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
    tento1 = document.getElementById("gazo1");
    tento2 = document.getElementById("gazo2");
    tento3 = document.getElementById("gazo3");
    hyoji = document.getElementById("ten");
    botan = document.getElementById("start");

    tento1.onclick = function(){
        click(tento1);
    }

    tento2.onclick = function(){
        click(tento2);
    }

    tento3.onclick = function(){
        click(tento3);
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

function click(gazou){
    gazou.src = "naki.png";
    setTimeout(function(){
        modosu(gazou);
    },1000);
    tensu = tensu + 1;
    hyoji.innerHTML = tensu;
}

function nokori10(){
    alert("もう、おこったぞ！");
    lastspurt = true;
}

function kesu(gazou){
    gazou.style.visibility = "hidden";
    var ransu3 = Math.random() * 3;
    if(lastspurt == true){
        setTimeout(function(){
            dasu(gazou,1);
        },ransu3 * 1000);
    }else{
        setTimeout(function(){
            dasu(gazou,3);
        },ransu3 * 1000);
    }
}

function kesu1(){
    kesu(tento1);
}

function kesu2(){
    kesu(tento2);
}

function kesu3(){
    kesu(tento3);
}

function dasu(gazou,timer){
    if(gameover == false){
        gazou.style.visibility = "visible";
    }
    var ransu = Math.random() * timer;
   setTimeout(function(){
    kesu(gazou);
   },ransu * 1000); 
}

function modosu(gazou){
    gazou.src = "tento.png";
}

function stop(){
    alert("ゲームオーバー！");
    gameover = true;
    tento1.style.visibility = "hidden";
    tento2.style.visibility = "hidden";
    tento3.style.visibility = "hidden";
    if(tensu > saiko){
        saiko = tensu;
        kiroku = document.getElementById("saiko");
        kiroku.innerHTML = saiko;
    }
}