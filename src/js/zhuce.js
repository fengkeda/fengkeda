onload = function() {
	var oform = document.getElementById('from');
	var oinput = oform.getElementsByTagName('input');
	var otxt = oform.getElementsByTagName('strong');
	var ochange = document.getElementById('change');
	var ocode = document.getElementById('yancode');

	//  var otext = otxt.getElementsByTagName('i');
	console.log(otxt.length);
	oinput[0].onblur = function() {
		var num = this.value;
		if(num == '') {
			otxt[0].innerHTML = '请输入手机号';
		} else {
			var pattern = /^\d{11}$/;
			var oname = pattern.test(num);
			if(oname) {
				otxt[0].innerHTML = '手机号输入合法';

			} else {
				otxt[0].innerHTML = '请输入正确的手机号';
				oinput[0].value = '';
			}

		}
	}

	// 密码验证
	ochange.onclick = function() {
			var str = "";
			for(i = 0; i < 4; i++) {
				var isnum = parseInt(Math.random() * 10) % 2;
				if(isnum == 0) {
					str += parseInt(Math.random() * 10);
				} else {
					str += String.fromCharCode(parseInt(Math.random() * 26) + 65);
				}

				ocode.innerHTML = str;

			}
		}
		//
	oinput[1].onblur = function() {
			if(this.value == '') {
				otxt[1].innerHTML = '请输入验证码';
			} else {
				if(oinput[1].value == ocode.innerHTML) {
					otxt[1].innerHTML = '验证码正确';
				} else {
					otxt[1].innerHTML = '验证码不正确';
					oinput[1].value = '';
				}
			}
		}
		//

	oinput[2].onblur = function() {

		var passd = this.value;
		if(passd == '') {
			otxt[2].innerHTML = '请输入密码';
		} else {
			var pattern = /^\w{6,16}/g;
			var pass = pattern.test(passd);

			if(pass) {
				otxt[2].innerHTML = "密码合法";

			} else {
				otxt[2].innerHTML = "6-16位字符，由字母数字和下划线组成";
				oinput[2].value = '';
			}
		}
	}
	oinput[3].onblur = function() {

		var passd2 = this.value;

		if(passd2 == '') {
			otxt[3].innerHTML = "请再次输入登录密码";
		} else {

			if(passd2 == oinput[2].value) {

				otxt[3].innerHTML = "登录密码一致";

			} else {
				otxt[3].innerHTML = "密码不一致";
			}
		}
	}
}

$(function() {
	var $input = $(".form").children().find('input');
    var $strong = $('.form').find('strong');
	$input.eq(5).on("click", function() {
		if($input.eq(0).val() == ''||$input.eq(1).val()== ''||$input.eq(2).val()== ''||$input.eq(3).val()== ''){
		//获取用户名 手机号码 和密码
		$strong.eq(4).html('请完善信息！');
		}else{
		var phone = $input.eq(0).val();
		var pass = $input.eq(3).val();
		var d = new Date();
		d.setDate(d.getDate() + 10);
		setCookie("phone", phone, d);
		setCookie("password", pass, d);
		var phone = getCookie("phone");
		console.log(phone);	
		
		$strong.html('');
		$input.eq(5).val("正在注册...");
	    location.assign("../index.html");
		}
		//	    $input.val('');
	});
})