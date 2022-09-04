function match(){
  var text = document.getElementById("word-input").value;
  if (!text) {
    return;
  }
  var highlight = document.getElementById("paragraph-input");
  const checkBox = document.getElementById("ignore-case");
  const wordCount = document.getElementById("words-counter");
  let counter = 0;
  let HTML = highlight.innerText;
  let checkFlag = "g";
  if (checkBox.checked) {
    checkFlag += "i";
  }
  highlight.innerHTML = HTML.replace(new RegExp(text, checkFlag), (match) => {
    counter++;
    return "<span class='highlighted-txt'>" + match + "</span>";
  });
  wordCount.innerText = counter;
    
}
