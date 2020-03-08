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
        data: JSON.stringify(this.text)
      })
      .done( function(data){
        console.log('success_post');
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