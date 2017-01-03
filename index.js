window.onload=function(ev){
/****************定义创建xml对象*****************************/ 
	function create() {
			var xhr = null;
			try {
				xhr = new XMLHttpRequest();
			} catch(e) {
				try {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e1) {
					try{
						xhr = new ActiveXObject("Msxml2.XMLHTTP");
					} catch(e2) {

					}
				}
					
			}
			return xhr;
		}
/*-------------------创建标题-------------------------------*/ 
	// 创建标题，设置格式内容插入
	var h2 = document.createElement('h2');
	h2.style.height='.5rem';
	h2.style.lineHeight='.5rem';
	h2.style.fontSize='.3rem';
	h2.style.color='orange';
	h2.style.width='100%';
	h2.style.border='.02rem solid yellow';
	h2.style.textAlign='center';
	h2.innerHTML='小游戏';
	document.body.appendChild(h2);
/*--------------------创建  计时区域--left_times -----------*/ 
	// 创建计时区域，设置id为times
    var divtim = document.createElement('div');
    divtim.style.margin='.05rem 0';
    divtim.setAttribute('id','times');
	document.body.appendChild(divtim);
    var left_times =document.getElementById('times');

	/*---------------------创建剩余时间span,插入到里面----------------------*/
	    var span   = document.createElement('span');
	    span.innerHTML=' &nbsp;距离结束还有：<b>900</b> 秒';
	    // 获取其中的  b  设置样式，并且设置倒计时函数
		// 将倒计时文字段插入到  计时区域内
	    left_times.appendChild(span);

	    var lefttime = left_times.getElementsByTagName('b')[0];
		lefttime.style={fontSize:'.2rem',color:'orange'};
		var lefttimes=60*15-1;//剩余秒数
		function timeLeft(){
			setInterval(function(){
				if(lefttimes>=1){
					lefttime.innerHTML= --lefttimes;
				}
			},1000);
		}

	/*-----------------------------插入进度条--------------------------------*/
		//创建---进度条meter,设置宽高，value等值
		var times   = document.createElement('meter');
		// console.log(times);        前后插入的东西一模一样
		times.style.width='5rem',times.style.height='.3rem',
		times.style.marginLeft='.1rem';
		times.style.verticalAlign='top';
		times.min=0,times.max=900,times.low=500,times.high=800,times.value=0;
		left_times.appendChild(times);

		// 再获取插入的进度条，控制value值的变化
		var met=document.querySelector('meter');
		// 设置进度条定时器
		function meterLeft(){
			setInterval(function(){
				if(met.value<met.max){
					met.value++;
				}
			},1000);		
		}
	/*----------------创建音乐播放器---插入到计时区--------------------*/
		// 创建音频 audio  设置各类属性
		var audio = document.createElement('audio');
			//设置播放条，设置自动循环播放 
			audio.setAttribute('controls','controls');
			audio.setAttribute('loop','loop');
			//禁止自动播放，改为点击播放
			// audio.setAttribute('autoplay','autoplay');
			audio.style.verticalAlign='top';
			var music = Math.floor(Math.random()*10)
		var source1 = document.createElement('source');
			source1.src='./musics/'+music+'.mp3';
		var source2 = document.createElement('source');
			source2.src='./musics/gei_com.ogg';
		// 将资源插入到音频里面
		audio.appendChild(source1);
		audio.appendChild(source2);
		// 将音乐播放插入到文档里
		left_times.appendChild(audio);
		// 
		// 解决音乐在手机端自动播放--控制开关
		var begin = true;
		document.addEventListener('touchstart', function(){ 	
			if(begin){	
			    audio.play();
			    meterLeft(); 
			    timeLeft();
			    begin = false;
			}
		}, false);
/*-------------------设置定时器-------------------------------*/ 
	setTimeout(function(){
		alert('时间到，算了吧，你太笨了！');	
		clearInterval(auto);
	},60*15*1000);
/*---------------------设置答案区域------------------*/
	var spanAns   = document.createElement('p');
	var spanAnss1   = document.createElement('span');
	var spanAnss2   = document.createElement('span');
	spanAns.style.fontSize='10px';
	spanAns.style.opacity=0;
	spanAns.appendChild(spanAnss1);
	spanAns.appendChild(spanAnss2);
	divtim.appendChild(spanAns);
/*-----------------------创建按键区域---------并创建按钮--------*/
	// 创建按键区域，设置样式
	    var divbut = document.createElement('div');
	    divbut.style.position='fixed';
	    divbut.style.width='4rem';
	    divbut.style.padding='.05rem';
	    divbut.style.bottom='.05rem';
	    divbut.style.left='50%';
	    divbut.style.transform='translate(-50%)';
	    divbut.style.border='.01rem solid #000';
	    divbut.style.textAlign='center';
	    // divbut.style.display='none';
	    divbut.setAttribute('id','divbut');
		document.body.appendChild(divbut);
	    var divbut =document.getElementById('divbut');
	//创建6个按钮，插入到按钮区域里面
		var bts1 = document.createElement('button');
		bts1.innerHTML='往下走'; 
		var bts2 = document.createElement('button');
		bts2.innerHTML='往左走'; 
		var bts3 = document.createElement('button');
		bts3.innerHTML='往右走'; 
		var bts4 = document.createElement('button');
		bts4.innerHTML='往上走'; 
		var bts5 = document.createElement('button');
		bts5.innerHTML='快快走'; 
		var bts6 = document.createElement('button');
		bts6.innerHTML='慢慢走'; 
		var bts7 = document.createElement('button');
		bts7.innerHTML='显示出口'; 
		var bts8 = document.createElement('button');
		bts8.innerHTML='上一曲'; 
		var bts9 = document.createElement('button');
		bts9.innerHTML='下一曲'; 
		divbut.appendChild(bts6);
		divbut.appendChild(bts4);
		divbut.appendChild(bts5);
		divbut.appendChild(bts2);
		divbut.appendChild(bts1);
		divbut.appendChild(bts3);
		divbut.appendChild(bts8);
		divbut.appendChild(bts7);
		divbut.appendChild(bts9);
		var bts = divbut.getElementsByTagName('button');
		for(var i=0;i<bts.length;i++){
			bts[i].style.height='.4rem';
			bts[i].style.lineHeight='.3rem';
			bts[i].style.fontSize='.2rem';
			bts[i].style.margin='.1rem .1rem';
		}
/*----------------创建画布----设置画布各类样式-------------*/
	//得到canvas,设置宽高
	var canvass = document.createElement('canvas');
	canvass.style.width='6.4rem',canvass.style.height='4rem';
	
	canvass.style.border='.03rem solid green';
	canvass.setAttribute('id','canvas');

	// 插入到body里面 
	document.body.appendChild(canvass);
/*画布的宽高必须设置为行内式的 width--height，此处进行调整*/
	canvass.width=canvass.clientWidth,canvass.height=canvass.clientHeight;
	var canvas = document.getElementById('canvas');
	//当前关数
	// var grade=0;
	// 随机关卡
	var grade=Math.floor(Math.random()*20);
	var n=0,m=0,wid,heigh,Mwid,Mheight,v =100;

	//画布宽高为 左右最大距离
	var maxWid = canvass.clientWidth;
	var maxHeigh = canvass.clientHeight;

	//初始位置为中心点
	wid = Mwid = canvass.clientWidth/2;
	heigh = Mheight= canvass.clientHeight/2;

	//定义  上下前后事件
	var qian=null,hou=null,zuo=null,you=null,auto=null;
	var qian1=null,hou1=null,zuo1=null,you1=null;
	

	//关卡数判断
	var aaas =document.getElementsByTagName('a');
	for (var i = 0; i < aaas.length; i++) {
		aaas[i].index=i;
		//如果是第i关，则其a的索引值为a-1,
		if(aaas[i].className=='on'){
			grade=aaas[i].index+1;
		}
	};


	// 过关点--关卡黑点设置x , y
	var x=Math.floor(Math.random()*(Mwid-10));  //微调  头部 与 过关点的对应关系
	var y=Math.floor(Math.random()*(Mheight-10));
	var xq = Math.floor(Math.random()*10);
	var yq = Math.floor(Math.random()*10);
	var xx=yy=1;
	
	if(xq<5){
		xx=1;
	}else{
		xx = -1;
	}
	if(yq<5){
		yy=1;
	}else{
		yy = -1;
	}
/*-------------------答案计算------------------------------*/

	// 过关点计算   随机生成正负数，
	var Nx= Mwid-8+x*xx,Ny=Mheight-8+y*yy;
		console.log('过关点为 x:'+(Nx-5)+'-'+(Nx+5)+' ,y: '+ (Ny-5)+'-'+(Ny+5));
	canvas.style.background=
	'radial-gradient(.05rem .05rem, rgba(93,'+(10*grade)+',162,1),rgba(0,'+grade*10+',0,0.'+(20-grade)+') .'+(20-grade)+'%,rgba(0,0,0,0)) '+xx*x+'px '+y*yy+'px content-box,linear-gradient('+(grade)*30+'deg,red,orange,yellow,green,skyblue,purple) border-box';
/*-------------------绘画设置-----------------------*/
	//能力判断，得到画笔
	if(canvas.getContext){
		var canvass=canvas.getContext('2d');  //webGL 3d
		var img = new Image();

		//书写在js 里面， 路径不是从js开始的，而是从对应的html里面开始的
		//判断  关卡数，对应不同的人物
		img.src='./images/12/'+grade+'.png';
		img.onload=function(){
			//初始化画布
			zou();

			function zou(index){
				canvass.clearRect(0,0,canvas.width,canvas.height);
				//剪裁图片， 显示大小为 16*26
				canvass.drawImage(img,n*40,m*65,40,65,wid,heigh,16,26);
				n%=4;

				//当前位置------过关点 var Nx= Mwid-8+x*xx,Ny=Mheight+y*yy;
				console.log('当前的位置--wid:值为：'+wid+' ，heigh值为：'+heigh);
				spanAnss2.innerHTML='当前位置为'+wid+'--'+heigh;
				//过关点 区域性扩大
				if(wid> Nx-5 && wid< Nx+5 && heigh> Ny-5 && heigh < Ny+5){
					canvas.style.background='linear-gradient(0deg,purple,skyblue,green,yellow,orange,red)';
		    		clearInterval(auto);
		    		setTimeout(function(){
						alert('恭喜你，找到了出口！');
						window.location='index.html';
					},10);

				//判断在画布上的范围
				}else if(wid<=-16){   //进入到左边里面的时候，从右边出现
					console.info(canvass.width);
					wid= maxWid;
				}else if(wid>= maxWid){   //进入到右边里面的时候，从左边出现
					wid=-15;
				}else if(heigh<=-26){   //进入到上边里面的时候，从下边出现
					heigh = maxHeigh;
				}else if(heigh>=maxHeigh){   //进入到下边里面的时候，从上边出现
					heigh = -25;
				}
			}
/*-定时器的清除问题-每次设置定时器都要给定时器一个名称---
	-----否则清除时不认识这个定时器就是要清除的那个---------------*/
			//定义前后左右函数
			function qian(){heigh++;};
			function hou(){heigh--;};
			function zuo(){wid--;};
			function you(){wid++;};

			// 清除乱走动的函数
			function luan(){
				clearInterval(hou1);
				clearInterval(qian1);
				clearInterval(zuo1);
				clearInterval(you1);
			}
			//定义前走的函数
			function forrward(){
				m=0;
		    	clearInterval(auto);
				auto=setInterval(zou,v);
				luan();
				qian1=setInterval(qian,v);
			}//定义左走的函数
			function leftward(){
				m=1;
		    	clearInterval(auto);
				auto=setInterval(zou,v);
				luan();
				zuo1=setInterval(zuo,v);
			}//定义右走的函数
			function rightward(){
				m=2; 
		    	clearInterval(auto);
				auto=setInterval(zou,v);
				luan();
				you1=setInterval(you,v);
			}//定义后走的函数
			function backward(){
				m=3;
		    	clearInterval(auto);
				auto=setInterval(zou,v);
				luan();
				hou1=setInterval(hou,v);
			}
			// 定义按钮功能
			bts1.onclick=function(){
				forrward();
			}
			bts2.onclick=function(){
				leftward();	
			}
			bts3.onclick=function(){
				rightward();
			}
			bts4.onclick=function(){
				backward();
			}

			//添加  自定义插件    手机版滑动
			new $('canvas').on('touchmove',function(e){
				e.preventDefault();
			}).on('swipeLeft',function(e){
				leftward();
			}).on('swipeRight',function(e){
				rightward();
			}).on('swipeUp',function(e){
				backward();
			}).on('swipeDown',function(e){
				forrward();
			});
			// 假装快速
			bts5.onclick=function(){
				v -= 10;
				if(v<10){
					v=10;
				}
		    	clearInterval(auto);
				auto=setInterval(zou,v);
			}//假装慢速
			bts6.onclick=function(){
				v+=10;
				if(v>500){
					v=500;
				}
		    	clearInterval(auto);
				auto=setInterval(zou,v);
			}
			//显示答案
			bts7.onclick=function(){
				spanAns.style.opacity=1;
				spanAnss1.innerHTML='出口位置为 x:'+(Nx-5)+'-'+(Nx+5)+' ,y: '+ (Ny-5)+'-'+(Ny+5);
			}
		/*	bts8.onclick=function(){
				music--;
				music= (music+9)%10;
				source1.src='./musics/'+music+'.mp3';
				audio.play();
			}*/
			bts9.onclick=function(){
				music++;
				music%=10;

				source1.src='./musics/'+music+'.mp3';
				audio.play();
			}

			bts8.onclick = function(){
				music--;
				music= (music+9)%10;
				source1.src='./musics/'+music+'.mp3';
				audio.play();
			//第一步，创建xhr对象
			var xhr = new XMLHttpRequest();
			//console.log(xhr.readyState);
			//第二步，建立和服务器端的连接
			xhr.open('GET','/music');
			//console.log(xhr.readyState);
			//第三步，监听状态的变化，注册readystatechange事件
			xhr.onreadystatechange = handler;

			function handler () {
				//需要判断
				if (xhr.readyState == 4 && xhr.status == 200) {
					console.log( xhr.responseText);
				}
			}

			//第四步，发出请求
			xhr.send(null);
		}	








			//定义键盘事件
			document.onkeydown=function(ev){
				//转换成通用的参数
				var evt = ev?ev:window.event;
				console.log(evt.keyCode);
				switch(evt.keyCode){
				//（keyCode:ascci码值）←（37） 、↑（38）、 →（39）、 ↓（40） 空格 32   alt 18
					case 37:
						leftward();
						break;
					case 38:
						backward();
						break;
					case 39:
						rightward();
						break;
					case 40:
						forrward();
						break;
					case 32:
						v -=10;
						if(v<10){
							v=10;
						}
						break;
					case 18:
						v +=10;
						if(v>500){
							v=500;
						}
						break;
				}
					return false;//阻止网页随着按键的默认移动
			}
		}
	}
}