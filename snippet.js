function onMessage(msg) {
        
};  

var messagesById = {};
setInterval(() => {
  document.querySelectorAll('a.messagesContent').forEach((msg) => {
    let content = $(msg).find('.content');
    console.log(content);
    let path = msg.pathname;
    let author = content.children('.author').children('span')[0].innerText;
    let time = content.children('.time').children('abbr').data('utime');
    let text = $(content.children()[1]).text();
    let id = path + "/" + time + "/" + text;
    if(!messagesById[id]) {
      message = [path, time, author, text];
      messagesById[id] = 1;
      onMessage(message);
      console.log(message);
    }
  });
}, 100);
