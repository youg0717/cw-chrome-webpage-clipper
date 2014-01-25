(function(self){
  var option = {};
  var id_list = ['token', 'room_id'];

  // 設定値の保存
  option.save = function() {
    var id;
    for (var i = 0, len = id_list.length; i < len; i++) {
      id = id_list[i];
      localStorage[id] = document.getElementById(id).value
    }
  };

  // 保存されている設定値をフォームに入れる
  option.restore = function() {
    var id;
    for (var i = 0, len = id_list.length; i < len; i++) {
      id = id_list[i];
      document.getElementById(id).value = localStorage[id] || '';
    }
  };

  // optionページを開いた時の動作
  self.onload = function() {
    option.restore();

    document.getElementById('save').onclick = function() {
      option.save();
    }
  }

}(this));

