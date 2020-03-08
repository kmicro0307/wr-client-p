export default class {
  constructor(url, text){
      this.url = url
      this.text = text
  }

  //非同期でデータをサーバに送る
  sendProcess (){
      $.ajax({
        type: 'POST',
        url: this.url,
        dataType: 'json',
        data: JSON.stringify(this.text)
      })
      .done( function(data){
        let date = new Date();
        alert('登録:' + data.w + '\n' +'日付:' + date)
        //alert('登録:' + data.w)
        console.log('success_post');
        console.log(data);
        console.log("return: " + data.success);
      })
      .fail( function(jqXHR, textStatus, errorThrown) {
        console.log("失敗");
        console.log("XMLHttpRequest : " + jqXHR.status);
        console.log("textStatus : " + textStatus);
        console.log("errorThrown : " + errorThrown);
      })
      .always( (data) => {
        console.log("処理終了");
      });
    }
}