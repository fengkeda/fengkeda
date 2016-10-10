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
						var $goods = $('<div/>').addClass('goods');
						$('<a/>').attr({href:item.url}).html(item.title).addClass('goodstitle').appendTo($goods);
						$('<p/>').html(item.text).appendTo($goods);

                        var price = (item.price*item.off).toFixed(2)
                        $('<span/>').addClass('price fl').html('<i>￥</i>'+price).appendTo($goods);
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

			// 懒加载效果
			// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
//			$(window).on('scroll',function(){
//				// 获取滚动条滚动过的距离
//				var scrollTop = $(window).scrollTop();
//
//				// 当差不多滚动到底部是加载更多内容
//				if(scrollTop >= $(document).height() - $(window).height() - 100){
//					$.ajax();
//				}
//			})

		})