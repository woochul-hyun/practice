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
    });
});
