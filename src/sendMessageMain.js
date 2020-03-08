import SendMessage from "./sendMessage.js";
import ReceiveMessage from "./receiveMessage.js";
const env = require("./env.js");
const gasUrl = env.GAS_KEY

if (BROWSER == "CHROME") {
  // 単語を送る
  //const url = gasUrl;
  const selectedText = getText();
  console.log(selectedText);
  const sendMessage = new SendMessage(gasUrl, selectedText)
  const data = sendMessage.sendProcess()
  

  function getText() {
    const SelectedText = window.getSelection().toString();
    //console.log(SelectedText);
    return SelectedText
  }

}