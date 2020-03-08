export default class {
    constructor(url, text){
        this.url = url
        this.text = text
    }
    //ユニークなデータをJSONで受け取る
    //Promiseで同期的に行う
    receiveProcess (){
      return new Promise(resolve =>{
        $.ajax({
          type: 'GET',
          url: this.url,
          data: {'result': 'data'}
        })
        .done( function(data){
          console.log('success_get');
          let test = data
          resolve(test.result)
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
      })
      }
  }