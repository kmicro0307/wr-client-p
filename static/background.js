
const parentMenu =  chrome.contextMenus.create({
    title: "main",
    id: 'hello',
    contexts: ["all"],
    type: "normal",
 
  });
chrome.contextMenus.create({
  title: "登録",
  id: 'reg',
  contexts: ["all"],
  type: "normal",
  parentId: parentMenu
});
chrome.contextMenus.create({
  title: "参照",
  id: 'ref',
  contexts: ["all"],
  type: "normal",
  parentId: parentMenu
}); 

chrome.contextMenus.onClicked.addListener(function(info){
  if (info.menuItemId == "ref") {
    chrome.tabs.executeScript({
      file: "./receiveMessageMain.js"
    });
  }
  if (info.menuItemId == "reg") {
    chrome.tabs.executeScript({
      file: "./sendMessageMain.js"
    });
  }
});