# word_referencer

カーソルで選択した単語のgoogleスプレッドシートへの登録とサイト内で追加した単語の参照ができるchrome拡張機能です。
サーバー側->[wr-server-p](https://github.com/yohi0307/wr-server-p)

動作の流れとしては  
・単語追加  
client -> サーバー -> スプレッドシート
・単語参照
client -> サーバー -> スプレッドシート -> サーバー - > client

雛形としてwtetsuさんの[webextensions-webpack-boilerplate](https://qiita.com/wtetsu/items/ae009e70d1ee04c15836)を使わせていただきました。




