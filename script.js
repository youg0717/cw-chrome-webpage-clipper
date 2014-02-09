(function(){
    chrome.contextMenus.create({
      title: "このリンクのタイトルとURLをChatWorkへ送信する",
      contexts: ['link'],
      onclick: function(info) {
        var link_url = info.linkUrl;

        getTitleFromUrl(link_url, info.selectionText, function(title) {
             var content = title + '\n' + link_url;
             sendToChatWork(content);
        })
      }
    });

    chrome.contextMenus.create({
      title: "このページのタイトルとURLをChatWorkへ送信する",
      onclick: function(info, tab) {
        var content = tab.title + '\n' + tab.url;
        sendToChatWork(content);
      }
    });
    
    var sendToChatWork = function(content) {
        var xhr = new XMLHttpRequest();
        var api_token = localStorage.token;
        var room_id = localStorage.room_id;
        xhr.open("POST", 'https://api.chatwork.com/v1/rooms/' + room_id + '/messages', true);

        xhr.setRequestHeader('X-ChatWorkToken', api_token);
        xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
        xhr.send('body=' + encodeURIComponent(content));  
    };

    var getTitleFromUrl = function(url, default_title, callback) {
        var title = default_title || 'unknown';

        try {
            $.get(url, function(data){
                var matches = data.match(/<title[^>]*>([^<]+)</i);
                if (matches) {
                    title = matches[1];
                }
                callback(title);
            });
        } catch(e) {
            callback(title);
        }
    }
}());


