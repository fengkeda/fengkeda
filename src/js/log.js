
$(function(){
	var $input = $('#form').find('input');
	var $txt = $('.txt');
	var oldphone = getCookie("phone");
	var oldpassword = getCookie("password"); 
	$txt.hide();
	
	$input.eq(0).on('blur',function(){
		if($input.eq(0).val()==''){
			$txt.show();
			$txt.html('请输入用户名');
		}
		else if(oldphone !== $input.eq(0).val() && $input.eq(0).val() !==''){
			$txt.show();
			$txt.html('手机号不存在');
		}else{
			$txt.hide();
			$txt.html('');
		}
	})
	
	$input.eq(1).on('blur',function(){
		if($input.eq(1).val()==''){
			$txt.show();
			$txt.html('请输入密码');
		}
		else if(oldpassword !== $input.eq(1).val() && $input.eq(1).val() !==''){
			$txt.show();
			$txt.html('密码不正确');
		}else{
			$txt.hide();
			$txt.html('');
		}
	})
	
	$input.eq(2).on('click',function(){
	if(oldphone == $input.eq(0).val() && oldpassword == $input.eq(1).val()&&$input.eq(1).val()!==''){
		$txt.show();
	    $txt.html('登录成功！');
	    location.assign("../index.html");
	}else if($input.eq(0).val() == ''&& $input.eq(1).val()==''){
			$txt.show();
		 $txt.html('请输入用户名或密码！');
	}
	else{
		$txt.show();
	    $txt.html('用户名或密码不正确！');
	}
	})
})
