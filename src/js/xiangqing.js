function xiding(){
				var $top = $(".lately").offset().top;
				var $back = $('.backtop');
				$back.hide();
//				$('.hiding').hide();
//				console.log($food_top);
				$(window).scroll(function(){					
					
					var scotop = $(document).scrollTop();	
					var $lbtbottom_top = $('.lbt-bottom').offset().top;
					var $food_top = $('.foot').offset().top-450;
					console.log($lbtbottom_top);
//					console.log(scotop);
					if(scotop >= $top && scotop <= $food_top){
						$('.hiding').show();
						$(".fixedbox").css({"position":"fixed","top":"-25px","margin-right":"0"});
						
					}
					else{
//						$('.hiding').hide();
						$(".fixedbox").css({"position":""});
						
					}
					
					if(scotop >=$lbtbottom_top){
						$(".left-list").css({"position":"fixed","top":"0px","margin-left":"0"});
					}else{
						$(".left-list").css({"position":""});
					}
					
					if(scotop >700){
						$back.fadeIn();
					}
					else{$back.fadeOut();}
					
				})	
}