# word_referencer
英語の単語勉強のために作ったchrome拡張機能です  
以下のことができます  
・カーソルで選択した単語のgoogleスプレッドシートへの登録  
・追加した単語のサイト内での参照  
サーバー側->[wr-server-p](https://github.com/yohi0307/wr-server-p)  
  
動作の流れとしては  
・単語追加  
client -> サーバー -> スプレッドシート  
・単語参照  
client -> サーバー -> スプレッドシート -> サーバー - > client

雛形としてwtetsuさんの[webextensions-webpack-boilerplate](https://qiita.com/wtetsu/items/ae009e70d1ee04c15836)を使わせていただきました。 
  
    
    デモ動画
![demo](https://github.com/yohi0307/wr-client-p/wiki/images/wr_movie.gif)



