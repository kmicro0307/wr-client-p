import ReceiveMessage from "./receiveMessage.js";
const env = require("./env.js");
const gasUrl = env.GAS_KEY

if (BROWSER == "CHROME") {
  //単語を参照する
    //const url   = gasUrl;
  const receiveMessage = new ReceiveMessage(gasUrl)
  receiveMessage.receiveProcess()
    .then((array)=>{
      //console.log('参照')
      //console.log(array)
      //html要素も含めて取得
      let body_html = document.body.innerHTML  
      for (let i of array){
        if ( i != null && i != ''){        
          //console.log('書き換え')
          console.log(i)
          body_html =getMatchText(i,body_html)    
        }
      }
      //html更新
      document.body.innerHTML = body_html 
      //$('body').html(body_html)  
    })
    .then(() =>{
      addhighlight()
      console.log('参照終了')
    })
    console.log('参照終了2') 

function getMatchText(test, body_html) {
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
