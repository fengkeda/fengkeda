	
function xiding(){
				var $top = $(".ximenu").offset().top;
				var $back = $('.backtop');
				$back.hide();
				console.log($top);
				$(window).scroll(function(){
					
					
					var scotop = $(document).scrollTop();
					console.log(scotop);
					if(scotop >= $top - 20){
						$(".ximenu").css({"position":"fixed","top":"-10px","margin-left":"0"});
						$back.fadeIn();
					}
					else{
						$(".ximenu").css({"position":""});
						$back.fadeOut();
					}
					
				})	
}

function move(){
	 var go = document.getElementById('back');
     go.onclick = function(){
				clearInterval(timer);
				var timer = setInterval(function(){
					var scrolltop = document.documentElement.scrollTop||document.body.scrollTop;
					//设置速度
					var y = (0 - scrolltop) / 8;
					y = Math.floor(y);
					if(scrolltop == 0){
						clearInterval(timer);
						return;
					}
					document.documentElement.scrollTop = document.body.scrollTop = scrolltop + y;
				},50)
				
			}
}		
	
	$(function(){
		//导航菜单隐藏
		var $firstli = $('.daohang h3');
		var $daohanglist1 = $('.daohang-list1');
		$daohanglist1.hide();
//		console.log($daohanglist1li.length)
		$firstli.on('mouseenter',function(){
			$daohanglist1.show();
		})
		$daohanglist1.on('mouseenter',function(){
			$daohanglist1.show();
		}).on('mouseleave',function(){
			$daohanglist1.fadeOut();
		})
//		$firstli.on('mouseleave',function(){
//			$daohanglist1.fadeOut();
//		})
		
		
		//创建列表节点
		    var $good = $('.good') ;
			var $ul = $('.goodslist');
			$.ajaxSetup({
				url:'../js/data/phonelist.json',
				success:function(res){
					console.log(res);
                    $(".goodslist").empty();
					// 生成一个ul
					$.each(res,function(idx,item){
						var $li = $('<li/>');
						var $div = $('<div/>');
						$('<a/>').attr({href:item.url}).html('<img src="'+"../"+item.imgurl+'"/>').appendTo($div);
//						$('<img src="'+item.imgurl+'"/>').appendTo($div);
						var $goods = $('<div/>').addClass('goods');
						$('<a/>').attr({href:item.url}).html(item.title).addClass('goodstitle').appendTo($goods);
						$('<p/>').html(item.text).appendTo($goods);
//						<span class="price fl"><i>￥</i>2888</span>
//								<span class="oldprice fl">￥3159</span>
//								<span class="discount fl">9.1折</span>
//								<span class="fr qiang">马上抢</span>
                        var price = (item.price*item.off).toFixed(2)
                        $('<span/>').addClass('price fl').html('<i>￥</i>'+price).appendTo($goods);
                         $('<span/>').addClass('oldprice fl').html('￥'+item.price).appendTo($goods);
                         var $off = (item.off * 10).toFixed(1);
                         $('<span/>').addClass('discount fl').html($off + '折').appendTo($goods);
                          $('<span/>').addClass('fr qiang').html('马上抢').appendTo($goods);
						// 计算折扣后的价格
						
//						$('<p/>').addClass('price').html( '<span>&yen;' + price + '</span><del>&yen;'+item.price.toFixed(2) + '</del>').appendTo($li);    
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
			$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();

				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 100){
					$.ajax();
				}
			})

		})