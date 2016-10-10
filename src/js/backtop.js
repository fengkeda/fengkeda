function move(obj){
	this.ele = document.getElementById(obj);
    this.ele .onclick = function(){
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