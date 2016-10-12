$(function(){
	
	$('.tishi').show();
//	$('.goods_table').hide();
	var $goodstable = $('.goods_table');
		$('.table_title').hide();
	var oldSrc = getCookie('Src');	
	var oldprice = getCookie('Price');
	var oldtitle = getCookie('title');
	var ocount = getCookie('i');
      
//  var goods_list=JSON.parse($.cookie("good"));
//	console.log(goods_list); 
	//console.log(oldprice);
//	var goods_list=getCookie('good');
////	var goods_list2 = JSON.parse(goods_list);
//	console.log(goods_list);
//	
//	if(goods_list){
//		$('.tishi').hide();
//		$('.table_title').show();
//		var $table = $('<table/>').addClass('table');
//	$.each(goods_list, function(idx,item) {
//		var $tr = $('<tr/>');
//		var $td1 = $('<td/>').addClass('first_td').appendTo($tr);
//		var $tdimg = $('<div/>').addClass('first_img').html('<img src="'+item.pic+'"/>').appendTo($td1);
//	    var $tdtitle = $('<div/>').addClass('first_txt').appendTo($td1);
//	    $('<a/>').attr({href:"#"}).html(title).appendTo($tdtitle);
//	    var $td2 = $('<td/>').addClass('price').html(dazhejia).appendTo($tr);
//	    var $td3 = $('<td/>').addClass('count').html(shuliang).appendTo($tr);
//	    var Allprice = parseInt(dazhejia*shuliang);
//	    var $td4 = $('<td/>').addClass('all_price').html(Allprice).appendTo($tr);
//	    var $td5 = $('<td/>').html("等待卖家付款").appendTo($tr);
//	    var $td6 = $('<td/>').addClass('buynow').appendTo($tr);
//	    var $td6_a = $('<a/>').attr({href:"#"}).html('去付款').appendTo($td6);
//		var $td6_span = $('<span/>').html('删除').appendTo($td6);
//		$tr.appendTo($table);
//		
//		$table.appendTo($goodstable);
//	})
//	}
	if(oldSrc && oldtitle && oldprice){
		$('.tishi').hide();
//		$('.goods_table').hide();
		$('.table_title').show();
		var $table = $('<table/>').addClass('table');
		var $tr = $('<tr/>');
		var $td1 = $('<td/>').addClass('first_td').appendTo($tr);
		var $tdimg = $('<div/>').addClass('first_img').html('<img src="'+oldSrc+'"/>').appendTo($td1);
		var $tdtitle = $('<div/>').addClass('first_txt').appendTo($td1);
		$('<a/>').attr({href:"#"}).html(oldtitle).appendTo($tdtitle);
		var $td2 = $('<td/>').addClass('price').html(oldprice).appendTo($tr);
		var $td3 = $('<td/>').addClass('count').html(ocount).appendTo($tr);
		var Allprice = (oldprice*ocount).toFixed(2);;
		console.log(Allprice);
		var $td4 = $('<td/>').addClass('all_price').html(Allprice).appendTo($tr);
		var $td5 = $('<td/>').html("等待卖家付款").appendTo($tr);
		var $td6 = $('<td/>').addClass('buynow').appendTo($tr);
		var $td6_a = $('<a/>').attr({href:"#"}).html('去付款').appendTo($td6);
		var $td6_span = $('<span/>').html('删除').appendTo($td6);
		$tr.appendTo($table);
		
		
		$table.appendTo($goodstable);
		
		var $delete = $('.buynow').find('span');
	
		$delete.on('click',function(){
			$('.table_title').hide();
			$table.remove();
			$('.tishi').show();
			setCookie('oldSrc','');
			var d = new Date();
	    	d.setDate(d.getDate() + 10);
		    setCookie('Src','',d);
		    setCookie("Price", '', d);
		})
	}
	
	
	
})
