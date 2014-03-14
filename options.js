(function(self){
    var option = {};
    var id_list = ['token', 'room_id'];

    // 設定値の保存
    option.save = function() {
        var id, saved_value, new_value;

        // 設定内容が更新されたかどうか
        var updated = false;

        for (var i = 0, len = id_list.length; i < len; i++) {
            id = id_list[i];

            // 現在値取得
            saved_value = localStorage[id] || '';

            // 入力されてた値
            new_value = document.getElementById(id).value;

            // 更新がない場合はスキップ
            if (saved_value == new_value) {
                continue;
            }

            // 保存
            localStorage[id] = new_value;
            updated          = true;
        }

        if (updated) {
            alert('設定を保存しました');
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

