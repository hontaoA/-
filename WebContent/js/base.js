$(".btn").click(function () {
    is_hide();
})
var u = $(".username").val()
var p = $(".password").val()
$("#submit").click(function () { 
    if (u !== '' && p !== '') {
        $("#ts").html("用户名或密码不能为空~");
        is_show();
        return false;
    } else {
        $.ajax({
            url:"user/login",     
            type:"POST",
            dataType:"text",
            data: {
                username: $(".username").val(),
                password: $(".password").val()
            }
        })
        .done(function(data){
            if(data == 'success'){
//            	这里是组件控制
            	zeroModal.show({
                    title: '欢迎管理员',
                    width: '50%',  
                    height: '20%',
                    esc:true, 
                    buttons: [{
                        className: 'zeromodal-btn zeromodal-btn-primary',
                        name: '管理用户',
                        fn: function(opt) {
                        	location.href = "./zc.html";
                        }
                    }, {
                        className: 'zeromodal-btn zeromodal-btn-default',
                        name: '进入系统',
                        fn: function(opt) {
                        	location.href = "./main.html";
                        }
                    }]
                });
            }else if(data == '你的用户名错误'){
            	console.log(data);
            }
        })
        .fail(function(){
        	   console.log("服务器故障");
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

$("#zc").click( function () {
    location.href = "./zc.html";
    return false;
})






