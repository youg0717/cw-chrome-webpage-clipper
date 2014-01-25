chrome.contextMenus.create({
  title: "表示中のタイトルとURLをChatWorkへ送信する",
  onclick: function(info, tab) {
  	var body = tab.title + '\n' + tab.url;

    var xhr = new XMLHttpRequest();
    var api_token = localStorage.token;
    var room_id = localStorage.room_id;
    xhr.open("POST", 'https://api.chatwork.com/v1/rooms/' + room_id + '/messages', true);

    xhr.setRequestHeader('X-ChatWorkToken', api_token);
    xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
    xhr.send('body=' + encodeURIComponent(body)); 
  }
});