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
});

$(".ZMenu-left-nav-a").click(function () {
	zeroModal.show({
        title: 'hello world',
        iframe: true,
        url: 'http://localhost:8080/tao/adduser.html',
        width: '80%',
        height: '80%',
        cancel: true
    });
});

var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
$('.reg_user').blur(function(){
  if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("×").css("color","red");
    user_Boolean = false;
  }
});
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("×").css("color","red");
    password_Boolean = false;
  }
});


// password_confirm
$('.reg_confirm').blur(function(){
  if (($(".reg_password").val())==($(".reg_confirm").val())){
    $('.confirm_hint').html("✔").css("color","green");
    varconfirm_Boolean = true;
  }else {
    $('.confirm_hint').html("×").css("color","red");
    varconfirm_Boolean = false;
  }
});


// Email
$('.reg_email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".reg_email").val())){
    $('.email_hint').html("✔").css("color","green");
    emaile_Boolean = true;
  }else {
    $('.email_hint').html("×").css("color","red");
    emaile_Boolean = false;
  }
});


// Mobile
$('.reg_mobile').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
    $('.mobile_hint').html("✔").css("color","green");
    Mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("×").css("color","red");
    Mobile_Boolean = false;
  }
});


// click
$('.red_button').click(function(){
  if(user_Boolean && password_Boolea && varconfirm_Boolean && emaile_Boolean && Mobile_Boolean == true){
    alert("注册成功");
  }else {
    alert("请完善信息");
  }
});




