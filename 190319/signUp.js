$(function() {
    $("#zipcode_search").click(function() {
        console.log("테스트");
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
                $("#address").val(data.address);
            }
        }).open();
    });

    $("#join_form").submit(function(e) {
        console.log("test");
        var username = /^[가-힣]{2,4}$/i.test($("#name").val());
        var userId = /^[a-z]+[a-z0-9]{5,19}$/.test($("#idname").val());
        var userPass = /^[a-zA-Z0-9]{4,12}$/.test($("#userpass").val());
        var userEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
            $("#useremail").val()
        );
        var userAddr = document.getElementById("address").value.length;

        while (
            username === false ||
            userId === false ||
            userPass === false ||
            userEmail === false ||
            userAddr === 0
        ) {
            if (username === false) {
                e.preventDefault();
                alert("'이름을 확인하세요.(한글 2~4자 이내)");
                break;
            }
            if (userId === false) {
                e.preventDefault();
                alert(
                    "아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다."
                );
                break;
            }
            if (userPass === false) {
                e.preventDefault();
                alert(
                    "패스워드는 4~12자의 영문 대소문자와 숫자로만 입력해야 합니다."
                );
                break;
            }
            if (userEmail === false) {
                e.preventDefault();
                alert("적합하지 않은 이메일 형식입니다.");
                break;
            }
            if (userAddr === 0) {
                e.preventDefault();
                alert("주소를 입력해 주세요.");
                break;
            }
        }

        var storage_key = "content";
        var userInfo = {};

        $("#btn_save").click(function() {
            var form_content = $("#join_form").serialize();
            form_content = decodeURIComponent(form_content);

            var split_data = form_content.split("&");
            for (var i = 0; i < split_data.length; i++) {
                var content_data = split_data[i].split("=");
                var data0 = content_data[0];
                userInfo[data0] = content_data[1];
            }
            var form_content_Object = userInfo;
            var content_string = JSON.stringify(form_content_Object);
            localStorage.setItem(storage_key, content_string);

            return false;
        });

        $("#btn_load").click(function() {
            var content_string_load = localStorage.getItem(storage_key);
            var content_dict = JSON.parse(content_string_load);
            for (var key in content_dict) {
                $("#" + key).val(content_dict[key]);
            }
            //var form_content = localStorage.getItem(storage_key);
            //var split_data = form_content.split("&");
            //console.log(split_data);
            //
            //for (var i in split_data) {
            //    var content_data = split_data[i].split("=");
            //    var key = content_data[0];
            //    var data = content_data[1];
            //    $("#" + key).val(data);
            //}
            return false;
        });
    });
});
