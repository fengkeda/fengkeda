function xiding(){
				var $top = $(".ximenu").offset().top;				
				var $goodslist = $('.good').height();				
				var $back = $('.backtop');
				$back.hide();
			
				$(window).scroll(function(){
					
					
					var scotop = $(document).scrollTop();
//					var $food_top = $('.foot').offset().top;
					var $ul = $('.moregoods').offset().top;
//					console.log(scotop);
                    console.log($ul);
					if(scotop >= $top - 20 && scotop <= $ul){
						$(".ximenu").css({"position":"fixed","top":"-10px","margin-left":"0"});
						
					}
					else{
						$(".ximenu").css({"position":""});
					}
					
					if(scotop >700){
						$back.fadeIn();
					}
					else{$back.fadeOut();}
					
					
				})	
					
}

	$(function(){
		    var $good = $('.good') ;
			var $ul = $('.goodslist');
			$.ajaxSetup({
				url:'js/data/goodslist.json',
				success:function(res){
					console.log(res);

					// 生成一个ul
					$.each(res,function(idx,item){
						var $li = $('<li/>');
						var $div = $('<div/>');
						$('<a/>').attr({href:item.url}).html('<img src="'+item.imgurl+'"/>').appendTo($div);
						var $time = $('<div/>').addClass('time').appendTo($div);
						var $p = $('<p/>').addClass('time_p').appendTo($time);
						var $span = $('<span/>').addClass('countdown').html('剩余：').appendTo($p);
						var $em1 = $('<em/>').addClass('day').html(item.day).appendTo($span);
						$('<b/>').html('天').appendTo($span);
						var $em1 = $('<em/>').addClass('hour').html(item.hour).appendTo($span);
						$('<b/>').html('时').appendTo($span);
						var $em1 = $('<em/>').addClass('minute').html(item.minute).appendTo($span);
						$('<b/>').html('分').appendTo($span);
						var $em1 = $('<em/>').addClass('second').html(item.second).appendTo($span);
						$('<b/>').html('秒').appendTo($span);
						$('<i/>').html(item.guanzhu + '关注').appendTo($p);
						var $goods = $('<div/>').addClass('goods');
						$('<a/>').attr({href:item.url}).html(item.title).addClass('goodstitle').appendTo($goods);
						$('<p/>').html(item.text).appendTo($goods);

                        var price = (item.price*item.off).toFixed(2)
                        $('<span/>').addClass('price fl').html(price).appendTo($goods);
                         $('<span/>').addClass('oldprice fl').html('￥'+item.price).appendTo($goods);
                         var $off = (item.off * 10).toFixed(1);
                         $('<span/>').addClass('discount fl').html($off + '折').appendTo($goods);
                          $('<span/>').addClass('fr qiang').html('马上抢').appendTo($goods);   
                        $goods.appendTo($div);
                        $div.appendTo($li);
						$li.appendTo($ul);
					});
					$good.append($ul);
				}
			});

			$.ajax();
			
			$('.moregoods').on('click',function(){
				$.ajax();
			})



		})