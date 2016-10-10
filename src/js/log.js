//onload = function(){
//	var oform = document.getElementById('form');
//	var oinput = oform.getElementsByTagName('input');
//	
//	var oldphone = getCookie("phone");
// 	var oldpassword = getCookie("password"); 
// 	
// 	if(oldphone && oldpassword){
// 		
// 		if(oldphone == oinput[0].value &)
// 	}
//}


$(function(){
	var $input = $('#form').find('input');
	var $txt = $('.txt');
	var oldphone = getCookie("phone");
	var oldpassword = getCookie("password"); 
	$txt.hide();
	
	$input.eq(0).on('blur',function(){
		if(oldphone !== $input.eq(0).val() ){
			$txt.show();
			$txt.html('手机号不存在');
		}else{
			$txt.hide();
			$txt.html('');
		}
	})
	
	$input.eq(1).on('blur',function(){
		if(oldpassword !== $input.eq(1).val() ){
			$txt.show();
			$txt.html('密码不正确');
		}else{
			$txt.hide();
			$txt.html('');
		}
	})
	
	$input.eq(2).on('click',function(){
	if(oldphone == $input.eq(0).val() && oldpassword == $input.eq(1).val()){
		$txt.show();
	    $txt.html('登录成功！');
	    location.assign("../index.html");
	}else{
		$txt.show();
	    $txt.html('用户名或密码不正确！');
	}
	})
})
