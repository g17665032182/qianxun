/*
* @Author: 62599
* @Date:   2017-08-07 10:26:13
* @Last Modified by:   62599
* @Last Modified time: 2017-08-08 10:44:54
*/

'use strict';
$(function(){
	var num=0;
	$('.screen1').children('.title').removeClass('no');	
	$('.side li').click(function(event) {
		num=$(this).index();
		$('section').animate({'top': -100*num+'%'}, 500)
		$(this).addClass('current').siblings('li').removeClass('current');
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
		
	});
	//滚轮事件
	var timer;
	$(document).mousewheel(function(e,d){
		//向下滚动d=-1，向上滚动d=1；
		clearTimeout(timer);
		timer=setTimeout(function(){       
 		num=num-d;
		if(num>6){num=6}
	    if(num<0){num=0}
		$('section').animate({'top': -100*num+'%'}, 500)
		$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
		},100)


	})

	//音乐按钮
	$('.music').click(function(event) {
		$(this).toggleClass('play');
		var i=$(this).hasClass('play');
		//hasClass()判断是否有该类名，返回值是布尔型true/false//
		if(i){
			$('audio').get(0).play()
		}
		else{
			$('audio').get(0).pause()
		}       
	});
	//气球
	$('.screen4>img').hover(function() {
		$(this).removeClass('ballon').addClass('ballon1');
	}, function() {
		$(this).removeClass('ballon1').addClass('ballon');
	});



	
	 
	































})