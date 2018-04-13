$(".btn").click(function () {
    is_hide();
})
var u = $(".username").val()
var p = $(".password").val()
$("#submit").live('click', function () {
    if (u !== '' && p !== '') {
        $("#ts").html("用户名或密码不能为空~");
        is_show();
        return false;
    } else {
        console.log($(".username").val());
        console.log($(".password").val());
        $.ajax({
            url:"user/login",
            type:"POST",
            data: {
                username: $(".username").val(),
                password: $(".password").val()
            }
        })
        .done((data) => {
            console.log(data);
        })
        .fail((data) => {
            console.log(data);
        })
    }
});
window.onload = function () {
    $(".connect p").eq(0).animate({
        "left": "0%"
    }, 600);
    $(".connect p").eq(1).animate({
        "left": "0%"
    }, 400);
}

function is_hide() {
    $(".alert").animate({
        "top": "-40%"
    }, 300)
}

function is_show() {
    $(".alert").show().animate({
        "top": "45%"
    }, 300)
}

$("#zc").live('click', function () {
    location.href = "./zc.html"
    return false;
})