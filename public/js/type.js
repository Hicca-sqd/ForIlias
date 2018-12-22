var mainText = [
                'Ваша личная <br> пиар компания <br> уже через один клик',
                'Результат <br> уже через неделю',
                'Лучшие специалисты <br> своего дела'
               ];
var textIndx = 0;
var main__text = document.getElementById('main-span');

function runText() {

  var str = '';
  var textJndx = 0;
  var intrval = setInterval(function(){
    str += mainText[textIndx][textJndx];
    main__text.innerHTML = str + '|';
    if(mainText[textIndx].length == str.length) {
      clearInterval(intrval);
      setTimeout(function() {
        clearText()
      }, 1000);
    } else {
      textJndx++;
    }
  }, 90)

}

function clearText() {

  var textJndx = mainText[textIndx].length-1;
  var str = mainText[textIndx];
  var intrval = setInterval(function() {
    str = str.substring(0, textJndx);
    main__text.innerHTML = str + '|';
    if(str.length == 0) {
      clearInterval(intrval)
      if(textIndx != mainText.length-1) {
        textIndx++;
        setTimeout(function() {
          runText()
        }, 200);
      } else {
        textIndx = 0;
        setTimeout(function() {
          runText()
        }, 200);
      }
    } else {
      textJndx--;
    }

  }, 35)
}

runText();