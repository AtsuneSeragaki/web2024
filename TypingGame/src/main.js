/*
   タイピングゲーム　アプリケーションクラス
   
   作成者: 島袋 叶望
   作成日: 24/07/11

   必要な外部ライブラリ: なし

   内容: タイピングゲーム（出題データはjsに直接記載）
 */

   class App {
    // コンストラクター
    constructor() {
        this.eventHandlers = []; // イベントハンドラー管理用
        this.intervals     = []; // インターバル管理用

        // ページのロードが完了したとき、タイトル画面を描画する関数を実行する
        window.addEventListener('load', () => {
            this.title();
        });
    }



    // 「1」を「01」にしてくれる関数
    twoDigit(num) {
        return num < 10 ? `0${num}` : num.toString();
    }



    // タイトル
    title() {
        // 全てのイベントハンドラーを解除（この関数の前に実行された関数でリスナーされたイベントのハンドラーは全て不要なため）
        if(this.eventHandlers.length) {
            for(let i = 0; i < this.eventHandlers.length; i++) {
                if(this.eventHandlers[i]) document.removeEventListener(this.eventHandlers[i].typeName,this.eventHandlers[i].callback);
            }

            this.eventHandlers = [];
        }

        // UIを構築し描画
        let titleElement     = `<div class="title"><h1>タイピングゲーム</h1><button onclick="app.playTypingGame();">ゲーム開始</button></div>`;
        let containerElement = `<div class="container">${titleElement}</div>`;
        let mainElement      = `<main>${containerElement}</main>`;

        document.querySelector('body').innerHTML = mainElement;

        return true;
    }

    // タイピングゲームを準備（Enterキーが押されたらゲームの初期化と開始を行う）
    playTypingGame() {
        // タイピングゲームのデータがない場合、出題データファイルをフェッチして自分をコールバックする
        if(!this.typingGame_data) {
            this.typingGame_data = {
                questionContents: [
                    {
                        "string": "吾輩は猫である",
                        "characters": [
                            {
                                "text": "吾",
                                "hiragana": "わが",
                                "katakana": "ワガ",
                                "romaji": "waga" 
                            },
                            {
                                "text": "輩",
                                "hiragana": "はい",
                                "katakana": "ハイ",
                                "romaji": "hai" 
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha" 
                            },
                            {
                                "text": "猫",
                                "hiragana": "ねこ",
                                "katakana": "ネコ",
                                "romaji": "neko" 
                            },
                            {
                                "text": "で",
                                "hiragana": "で",
                                "katakana": "デ",
                                "romaji": "de" 
                            },
                            {
                                "text": "あ",
                                "hiragana": "あ",
                                "katakana": "ア",
                                "romaji": "a" 
                            },
                            {
                                "text": "る",
                                "hiragana": "る",
                                "katakana": "ル",
                                "romaji": "ru" 
                            }
                        ]
                    },
                    {
                        "string": "雨ニモマケズ風ニモマケズ",
                        "characters": [
                            {
                                "text": "雨",
                                "hiragana": "あめ",
                                "katakana": "アメ",
                                "romaji": "ame" 
                            },
                            {
                                "text": "ニ",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni" 
                            },
                            {
                                "text": "モ",
                                "hiragana": "も",
                                "katakana": "モ",
                                "romaji": "mo" 
                            },
                            {
                                "text": "マ",
                                "hiragana": "ま",
                                "katakana": "マ",
                                "romaji": "ma" 
                            },
                            {
                                "text": "ケ",
                                "hiragana": "け",
                                "katakana": "ケ",
                                "romaji": "ke" 
                            },
                            {
                                "text": "ズ",
                                "hiragana": "ず",
                                "katakana": "ズ",
                                "romaji": "zu" 
                            },
                            {
                                "text": "風",
                                "hiragana": "かぜ",
                                "katakana": "カゼ",
                                "romaji": "kaze" 
                            },
                            {
                                "text": "ニ",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni" 
                            },
                            {
                                "text": "モ",
                                "hiragana": "も",
                                "katakana": "モ",
                                "romaji": "mo" 
                            },
                            {
                                "text": "マ",
                                "hiragana": "ま",
                                "katakana": "マ",
                                "romaji": "ma" 
                            },
                            {
                                "text": "ケ",
                                "hiragana": "け",
                                "katakana": "ケ",
                                "romaji": "ke" 
                            },
                            {
                                "text": "ズ",
                                "hiragana": "ず",
                                "katakana": "ズ",
                                "romaji": "zu" 
                            }
                        ]
                    },
                    {
                        "string": "こんにちは、世界！",
                        "characters": [
                            {
                                "text": "こ",
                                "hiragana": "こ",
                                "katakana": "コ",
                                "romaji": "ko" 
                            },
                            {
                                "text": "ん",
                                "hiragana": "ん",
                                "katakana": "ン",
                                "romaji": "nn" 
                            },
                            {
                                "text": "に",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni" 
                            },
                            {
                                "text": "ち",
                                "hiragana": "ち",
                                "katakana": "チ",
                                "romaji": "ti" 
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha" 
                            },
                            {
                                "text": "、",
                                "hiragana": "、",
                                "katakana": "、",
                                "romaji": "," 
                            },
                            {
                                "text": "世",
                                "hiragana": "せ",
                                "katakana": "セ",
                                "romaji": "se" 
                            },
                            {
                                "text": "界",
                                "hiragana": "かい",
                                "katakana": "カイ",
                                "romaji": "kai" 
                            },
                            {
                                "text": "!",
                                "hiragana": "!",
                                "katakana": "!",
                                "romaji": "!"
                            }
                        ]
                    },
                    {
                        "string": "早起きは三文の徳",
                        "characters": [
                            {
                                "text": "早",
                                "hiragana": "はや",
                                "katakana": "ハヤ",
                                "romaji": "haya" 
                            },
                            {
                                "text": "起",
                                "hiragana": "お",
                                "katakana": "オ",
                                "romaji": "o" 
                            },
                            {
                                "text": "き",
                                "hiragana": "き",
                                "katakana": "キ",
                                "romaji": "ki"
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha" 
                            },
                            {
                                "text": "三",
                                "hiragana": "さん",
                                "katakana": "サン",
                                "romaji": "san" 
                            },
                            {
                                "text": "文",
                                "hiragana": "もん",
                                "katakana": "モン",
                                "romaji": "mon" 
                            },
                            {
                                "text": "の",
                                "hiragana": "の",
                                "katakana": "ノ",
                                "romaji": "no"
                            },
                            {
                                "text": "徳",
                                "hiragana": "とく",
                                "katakana": "トク",
                                "romaji": "toku"
                            }
                        ]
                    },
                    {
                        "string": "こんにちは、今日はいい天気ですね",
                        "characters": [
                            {
                                "text": "こ",
                                "hiragana": "こ",
                                "katakana": "コ",
                                "romaji": "ko" 
                            },
                            {
                                "text": "ん",
                                "hiragana": "ん",
                                "katakana": "ン",
                                "romaji": "nn" 
                            },
                            {
                                "text": "に",
                                "hiragana": "に",
                                "katakana": "ニ",
                                "romaji": "ni" 
                            },
                            {
                                "text": "ち",
                                "hiragana": "ち",
                                "katakana": "チ",
                                "romaji": "ti" 
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha" 
                            },
                            {
                                "text": "、",
                                "hiragana": "、",
                                "katakana": "、",
                                "romaji": "," 
                            },
                            {
                                "text": "今日",
                                "hiragana": "きょう",
                                "katakana": "キョウ",
                                "romaji": "kyou" 
                            },
                            {
                                "text": "は",
                                "hiragana": "は",
                                "katakana": "ハ",
                                "romaji": "ha" 
                            },
                            {
                                "text": "良",
                                "hiragana": "い",
                                "katakana": "イ",
                                "romaji": "i"
                            },
                            {
                                "text": "い",
                                "hiragana": "い",
                                "katakana": "イ",
                                "romaji": "i" 
                            },
                            {
                                "text": "天",
                                "hiragana": "てん",
                                "katakana": "テン",
                                "romaji": "ten" 
                            },
                            {
                                "text": "気",
                                "hiragana": "き",
                                "katakana": "キ",
                                "romaji": "ki" 
                            },
                            {
                                "text": "で",
                                "hiragana": "で",
                                "katakana": "デ",
                                "romaji": "de" 
                            },
                            {
                                "text": "す",
                                "hiragana": "す",
                                "katakana": "ス",
                                "romaji": "su"
                            },
                            {
                                "text": "ね",
                                "hiragana": "ね",
                                "katakana": "ネ",
                                "romaji": "ne" 
                            }
                        ]
                    }
                ]
            };

            return this.playTypingGame();
        }

        // UIを構築し描画
        let typingGameElement = `<div class="typingGame"><div class="time">00:00.00</div><h2></h2><p>Enterキーを押すとゲームが始まります。</p><button onclick="app.title();">やめる</button></div>`;
        let containerElement  = `<div class="container">${typingGameElement}</div>`;
        let mainElement       = `<main>${cocntainerElement}</main>`;

        document.querySelector('body').innerHTML = mainElement;

        // キー入力イベントリスナーを追加（Enterキーが押されたらゲームを開始する）
        let eventHandlers = {
            typeName: 'keydown',
            callback: event => {
                if(event.key === 'Enter') {
                    this.typingGame_data.time = [ 0, 0, 0]; // クリアタイム（00:00.00）

                    this.typingGame_data.typingCount = 0; // 総タイプ数
                    this.typingGame_data.missCount   = 0; // 誤タイプ数
                    this.typingGame_data.clearCount  = 0; // 正タイプ数

                    this.typingGame_data.currentQuestionIndex = 0; // 現在の問題のインデックス（.questionContentsに対応）
                    this.typingGame_data.mustEnteredKeys = [];     // 現在の問題の入力をしなければならないキーの状態が入る変数

                    this.starTypingGame(); // Enterキー押下でゲーム開始
                }
                
            }
        };

        this.eventHandlers[0] = eventHandler;
        document.addEventListener(eventHandler.typeName,eventHandler.callback);

        return true;
    }

    // タイピングゲームを開始（タイム、入力の判定などゲームの進行を行う）
    starTypingGame() {
        // 全てのイベントハンドラーを解除（この関数の前に実行された関数でリスナーされたイベントのハンドラーは全て不要なため）
        if(this.eventHandlers.length) {
            for(let i = 0; i < this.eventHandlers.length; i++) {
                if(this.eventHandlers[i]) document.removeEventListener(this.eventHandlers[i].typeName,this.eventHandlers[i].callback);
            }

            this.eventHandlers = [];
        }

        
    }
   }