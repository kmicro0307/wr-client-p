import SendMessage from "./sendMessage.js";
import ReceiveMessage from "./receiveMessage.js";
const env = require("./env.js");
const gasUrl = env.GAS_KEY


if (BROWSER == "CHROME") {
  //const gasUrl = "https://script.google.com/macros/s/AKfycbzxbdMdOHZ0q3dk4FvdQzEfEbp5Ps5caJOtlIVRx6jjYYmPjdM/exec";
    
  $('body').prepend('<input type="button" id="postBtn" value="リストに保存">');
  $('body').prepend('<input type="button" id="refBtn" value="リストの参照">');
  
  // 単語を送る
  document.getElementById('postBtn').addEventListener("click", function() {
    //const url = gasUrl;
    const selectedText = getText();
    console.log(selectedText);
    const sendMessage = new SendMessage(gasUrl, selectedText)
    sendMessage.sendProcess()
    //alert('登録')
  }, false);
   
  //単語を参照する
  document.getElementById('refBtn').addEventListener("click", function() {
    //const url   = gasUrl;
    const receiveMessage = new ReceiveMessage(gasUrl)
    receiveMessage.receiveProcess()
      .then((array)=>{
        //console.log('参照')
        //console.log(array)
        let body_html = document.body.innerHTML  //html要素も含めて取得
        for (let i of array){
          if ( i != null && i != ''){        
            //console.log('書き換え')
            console.log(i)
            body_html =getMatchText2(i,body_html)    
          }
        }
        document.body.innerHTML = body_html //html更新
        //$('body').html(body_html)  
      })
      .then(() =>{
        addhighlight()
        console.log('参照終了')
        
      })
      console.log('参照終了2')
      
  }, false);
  
function getText() {
  const SelectedText = window.getSelection().toString();
  //console.log(SelectedText);
  return SelectedText
}

function getMatchText2(test, body_html) {
  const test_str = String(test)
  const RegularExp = new RegExp(test_str, "g" );
  body_html = body_html.replace(RegularExp , "<span class='paint_back'>"+test_str+"</span>");  //一致する単語にクラスを追加する
  return body_html
}

function addhighlight() {
  $('.paint_back').css({
    'background-color': '#FFCC00',
    'color':'black'
    });
  }
}


if (BROWSER == "FIREFOX") {
  alert("hello, world!(FIREFOX)");
}
