$(function(){
	var $input = $('input');
	var otext = $('.txt');
	var $sheng = $('#sheng'); 
	var $shenglist = $('#shenglist');
	var $shi = $('#shi'); 
	var $shilist = $('#shilist');
	var $xian = $('#xian'); 
	var $xianlist = $('#xianlist'); 
	
	$input.eq(0).on('blur',function(){
		var txt = $input.eq(0).val();
		
		if(txt == ''){
			otext.html('你的小昵称呢？');
		}else{
		    var pattern = /^.{2,10}/;
		    var otxt = pattern.test(txt);
		    
		    if(otxt){
		    	otext.html('帅气的小名');
		    }else{
		    	otext.html('什么玩意！');
		    	$input.eq(1).val('');
		    }
		}
	})
	
	$input.eq(1).on('blur',function(){	    
	    var num = $input.eq(1).val();
	    
	    	if(num == '') {
			otext.html('请输入手机号');
		} else {
			var pattern = /^(134|155|180|150|138|156)\d{8}$/;
			var oname = pattern.test(num);
			if(oname) {
				otext.html('手机号输入合法');
			} else {
				otext.html('手机号输入不合法');
				$input.eq(1).val('');
			}

		}
	})
	
	$.ajax({
		url:'../js/region.json',
		success:function(res){
//			console.log(res);
			
			$.each(res,function(idx,item){								
				//<option value="广东" label="大陆">广东</option>
			
			$.each(item,function(idx,name){
				
				var $sheng_name = $('<option/>');
				$sheng_name.attr({value:name.name}).html(name.name).appendTo($shenglist);			             
			 $.each(name,function(idx,shi){
			 	console.log(shi);
			 	var $shi_name = $('<option/>');
				$shi_name.attr({value:shi.name}).html(shi.name).appendTo($shilist);			             
			 })
			}) 	
			var $shenglist_option = $shenglist.find('option');
			})
			
			
			
			
		}
	})
	
})
