function getText() {
    var SelectedText = window.getSelection().toString();
    console.log(SelectedText);
    return SelectedText
}

function getMatchText() {
  var word = 'Java' 
  var SearchString = '(' + word + ')';
  var RegularExp = new RegExp(SearchString , 'g')
  console.log(RegularExp);
  return RegularExp
}

function getMatchText2() {
  $('.p-items_main').each(function() {
    var txt = $(this).html(); //html要素も含めて取得
    //txt = txt.replace(/usr/g,'test');
    txt = txt.replace(/usr/g, '<span class="paint_back">'+'test'+'</span>');
    $(this).html(txt)
  });
}

function addhighlight() {
  $('.paint_back').css({
    'background-color': '#FFCC00',
    'color':'black'
    });
}

function replacer( str, word , att  ) {
  var SearchString = '(' + word + ')';
  var RegularExp = new RegExp( SearchString, "g" );
  var ReplaceString = '<span class="' + att + '">$1</span>';
  var ResString = str.replace( RegularExp , ReplaceString );
  return ResString;
}