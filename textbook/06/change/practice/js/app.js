// 要素を取得
let practice = document.getElementById('practice');

// 内容を書き換え
practice.innerHTML = '<h1>れんしゅう</h1>';

// スタイルを変更
practice.style.backgroundColor = '#999999';
practice.style.fontSize = '30px';
practice.style.color = '#FFFFFF';

// 要素を追加
// 新しいdiv要素を作成
let first = document.createElement('div');

// 属性と内容を設定
first.setAttribute('id','first');
first.innerHTML = '<p>要素を追加</p>';

// 要素をHTMLに追加
practice.insertBefore(first,null);

// 更に要素を追加
// 要素を作成
let second = document.createElement('div');
second.setAttribute('id','second');
second.innerHTML = '<p>さらに要素を追加</p>';

// 要素を追加
practice.insertBefore(second,first);

// 要素を削除
// 親要素を取得
let parent = first.parentElement;

// 要素を削除
parent.removeChild(first);