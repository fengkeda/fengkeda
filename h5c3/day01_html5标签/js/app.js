document.addEventListener('DOMContentLoaded',function(){
	// 获取页面元素
	var ePlayer = document.querySelector('.player');
	var eList = ePlayer.querySelector('.list');
	var btnPlay = ePlayer.querySelector('#btnPlay');
	var btnPrev = ePlayer.querySelector('#btnPrev');
	var btnNext = ePlayer.querySelector('#btnNext');
	var btnVolume = ePlayer.querySelector('#btnVolume');
	var eTitle = ePlayer.querySelector('h1.title');
	var eProgress = ePlayer.querySelector('progress');

	// 获取下一个/上一个元素节点
	// nextElementSibling/previousElementSibling
	var eTime = eProgress.nextElementSibling;

	// 全局变量
	var playlist = [];
	var index = 0;

	var player = new Audio();

	// 1）ajax加载数据,并写入.list
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			var res = JSON.parse(xhr.responseText);

			playlist = res;

			var ol = document.createElement('ol');

			/*for(var i=0;i<res.length;i++){
				res[i]
			}*/
			// ES5数组方法：forEach，用于遍历数组
			res.forEach(function(item,idx){
				// 这里的item就是for循环中的res[i]
				console.log(item,idx);
				var li = document.createElement('li');
				li.innerHTML = item.singer + ' - ' + item.name;

				ol.appendChild(li);
			});

			// 写入页面
			eList.appendChild(ol);
			
		}
	}
	xhr.open('get','playlist.json',true);
	xhr.send(null);


	// 播放歌曲
	btnPlay.onclick = function(){
		player.src = playlist[index].src;

		player.play();
	}
})
