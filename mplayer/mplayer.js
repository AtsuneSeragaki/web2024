// プレイリストを取得
var listitems = document.querySelectorAll('li');
for(var i = 0; i < listitems.length; i++){
    // clickイベントを設定
    listitems[i].addEventListener('click',  // clickイベントを設定
        (ev)=>{
            var li = ev.target;  // クリックされた要素を取得
            playMusic(li);
        }
    );
}

// 音楽の再生
function playMusic(li){
    var file = li.getAttribute('data-file');      // ファイル名を取得
    var audio = document.querySelector('audio');  // audio要素を選択
    audio.setAttribute('src',file);               // src属性をセット
    audio.play();                                 // 再生開始

    // activeな項目を変更
    var activeli = document.querySelector('.active');
    activeli.className = '';    // class属性を空文字列にする
    li.className = 'active';
}

// 再生中と停止中でイラストを切り替える
var audio = document.querySelector('audio');  // audio要素を取得
audio.addEventListener('play',                // playイベントを設定
    (ev)=>{
        var img = document.querySelector('img');  // img要素を取得
        img.setAttribute('src','pict_play.png');  // 画像を変更
    }
);
audio.addEventListener('pause',               // pauseイベントを設定                  
    (ev)=>{
        var img = document.querySelector('img');  // img要素を取得
        img.setAttribute('src','pict_stop.png');  // 画像を変更
    }
);

// 曲を最後まで再生したいとき
audio.addEventListener('ended',               // endedイベントを設定
    (ev)=>{
        var img = document.querySelector('img');  // img要素を取得
        img.setAttribute('src','pict_stop.png');  // 画像を変更

        // 次の曲に切り替え
        var activeli = document.querySelector('.active');  // activeつきの要素を取得
        var nextli = activeli.nextElementSibling;

        if(nextli != null){
            playMusic(nextli);
        }

        console.log('active' + activeli + activeli.getAttribute('data-file'));
        console.log('next' + nextli + nextli.getAttribute('data-file'));
    }
);

// ランダム選曲機能
var random = document.querySelector('#random');  // 要素を取得
random.addEventListener('click',   // clickイベントを設定
    (ev)=>{
        ev.preventDefault();                               // a要素本来の機能を無効にする
        var listitems = document.querySelectorAll('li');   // li要素を取得
        var len = listitems.length;                        // 長さを調べる
        var rnd = Math.floor(Math.random() * len);         // ランダムに選ぶ
        playMusic(listitems[rnd]);                         // 曲を再生
        console.log('ランダム！');
    }
)

