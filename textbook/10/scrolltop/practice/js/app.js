$(function (){
    // 上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function (){
    if($(this).scrollTop() > 200){
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
  });

    // クリックで上に戻るボタン
    topBtn.click(function (event){
        event.preventDefault(); // 動作をキャンセル
        $('body,html').animate({
            scrollTop: 0
        },500);
    });
});



