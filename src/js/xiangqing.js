function xiding() {
	var $top = $(".lately").offset().top;
	var $back = $('.backtop');

	//删除二维码
	var $Code = $('.fixed_code');
	var $shanchu = $Code.find('.shanchu');
	$shanchu.on('click', function() {
		$Code.hide();
	})

	$back.hide();
	//				$('.hiding').hide();
	//				console.log($food_top);
	$(window).scroll(function() {

		var scotop = $(document).scrollTop();
		var $lbtbottom_top = $('.lbt-bottom').offset().top;
		var $food_top = $('.foot').offset().top - 450;
		console.log($lbtbottom_top);
		//					console.log(scotop);
		if(scotop >= $top && scotop <= $food_top) {
			$('.hiding').show();
			$(".fixedbox").css({
				"position": "fixed",
				"top": "-25px",
				"margin-right": "0"
			});

		} else {
			//						$('.hiding').hide();
			$(".fixedbox").css({
				"position": ""
			});

		}

		if(scotop >= $lbtbottom_top) {
			$(".left-list").css({
				"position": "fixed",
				"top": "0px",
				"margin-left": "0"
			});
		} else {
			$(".left-list").css({
				"position": ""
			});
		}

		if(scotop > 700) {
			$back.fadeIn();
		} else {
			$back.fadeOut();
		}

	})
}

$(function() {
	var $go = $('.buynow');
	var $title = $('.goods-txt').find('h3');
	var SRC = getCookie('src');
	var $goods = $('.goods-img');
	var $Img = $('<img/>').attr('src', SRC).attr('xzoom-big', SRC);
	$Img.appendTo($goods);
	//获取cookie里的时间
	var Day = getCookie('oldday');
	var Hour = getCookie('oldhour');
	var Minute = getCookie('oldminute');
	var Second = getCookie('oldsecond');

	$('.countdown').find("em").eq(0).html(Day);
	$('.countdown').find("em").eq(1).html(Hour);
	$('.countdown').find("em").eq(2).html(Minute);
	$('.countdown').find("em").eq(3).html(Second);

	var oPrece = getCookie('oldPrice');
	var oldprice = getCookie('oldprice');
	var odazhe = getCookie('olddazhe');
	//	 var otitle = getCookie('oldtitle');
	//	 console.log(otitle);

	$('.now-price').html('￥' + "<i>" + oPrece + "</i>");
	$('.oldprice').html(oldprice);
	$('.discount').html(odazhe);
	//	$('.goods_title').html(otitle);

	var $img = $('.goods-img').find('img').attr('src');
	console.log($img);
	var $price = $('.now-price');

	var $goodsImg = $('.goods-img');
	var $dingdan = $('.head-list li').eq(3);
	//	console.log($goodsImg.html());
	//数量
	var i = 0;
	var goods = [];
	var str_goods;
	var $go2 = $('.gogo');
	$go.on('click', function() {
		i++;
		var good = {};
		var title = $title.html();
		var Src = $img;
		var Price = $price.find('i').html();
		var d = new Date();
		console.log(Price);
		d.setDate(d.getDate() + 10);

//		goods.push({
//			pic: Src,
//			dazhejia: Price,
//			shuliang: i,
//			title: title
//		});
        good.pic = Src;
        good.dazhejia = Price;
        good.shuliang = i;
        good.title = title;
        
        goods.push(good);

		str_goods = JSON.stringify(goods);
		console.log(str_goods);

		setCookie('good', str_goods,d,"/");
		console.log(JSON.parse(getCookie("good")));
				setCookie("title", title, d);
				setCookie("Src", Src, d);
				setCookie("Price", Price, d);
				setCookie('i',i,d);

		var $oImg = $goodsImg.find("img");
		var $oimg = $oImg.clone();
		//		console.log($oImg.lenth);

		//获取图片偏移量和宽高
		var oleft = $oImg.offset();
		var owidth = $oImg.width();
		var oheight = $oImg.height();

		// 给克隆的图片样式
		$oimg.css({
			"position": "absolute",
			left: oleft.left,
			top: oleft.top,
			width: owidth,
			height: oheight
		});
		//追加到body中
		$oimg.appendTo("body");
		//ul的偏移量
		var $right = $dingdan.offset().left + 50;
		var $top = $dingdan.offset().top;
		//图片开始运动
		$oimg.animate({
			left: $right,
			top: $top,
			"width": "0",
			"height": "0",
			"opacity": "0.2"
		}, 500, function() {
			//	 			   	$dingdan.css({
			//	 			   		'background':'red',
			//	 			   		'color':'#fff'
			//	 			   	}) 
			$oimg.remove();
			$dingdan.html("<a href='shoppingcart.html'>" + '我的订单(' + i + ')' + '</a>');
		})

		var $i = getCookie('i');
		console.log($i);

	})
	
	$go2.on('click', function() {
		i++;
		var good = {};
		var title = $title.html();
		var Src = $img;
		var Price = $price.find('i').html();
		var d = new Date();
		console.log(Price);
		d.setDate(d.getDate() + 10);

//		goods.push({
//			pic: Src,
//			dazhejia: Price,
//			shuliang: i,
//			title: title
//		});
        good.pic = Src;
        good.dazhejia = Price;
        good.shuliang = i;
        good.title = title;
        
        goods.push(good);

		str_goods = JSON.stringify(goods);
		console.log(str_goods);

		setCookie('good', str_goods,d,"/");
		console.log(JSON.parse(getCookie("good")));
				setCookie("title", title, d);
				setCookie("Src", Src, d);
				setCookie("Price", Price, d);
				setCookie('i',i,d);

		var $oImg = $goodsImg.find("img");
		var $oimg = $oImg.clone();
		//		console.log($oImg.lenth);

		//获取图片偏移量和宽高
		var oleft = $oImg.offset();
		var owidth = $oImg.width();
		var oheight = $oImg.height();

		// 给克隆的图片样式
		$oimg.css({
			"position": "absolute",
			left: oleft.left,
			top: oleft.top,
			width: owidth,
			height: oheight
		});
		//追加到body中
		$oimg.appendTo("body");
		//ul的偏移量
		var $right = $dingdan.offset().left + 50;
		var $top = $dingdan.offset().top;
		//图片开始运动
		$oimg.animate({
			left: $right,
			top: $top,
			"width": "0",
			"height": "0",
			"opacity": "0.2"
		}, 500, function() {
			//	 			   	$dingdan.css({
			//	 			   		'background':'red',
			//	 			   		'color':'#fff'
			//	 			   	}) 
			$oimg.remove();
			$dingdan.html("<a href='shoppingcart.html'>" + '我的订单(' + i + ')' + '</a>');
		})

		var $i = getCookie('i');
		console.log($i);

	})
	
})