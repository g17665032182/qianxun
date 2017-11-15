/*
* @Author: 62599
* @Date:   2017-08-08 10:57:32
* @Last Modified by:   62599
* @Last Modified time: 2017-08-08 11:21:00
*/

'use strict';
         $(function(){
         	var a=0;
         	var timer;
        //定义自动播放函数
    	function aa(){
    		clearInterval(timer);
			timer=setInterval(function(){
			a=a+1;
			if(a>3){a=0}
			$('.ct-right>ul').css('left', -747*a+'px');
	        },2000)}
         	aa();
         //显示箭头
         	$('.ct-right').hover(function() {
         		clearInterval(timer);
         		$(this).children('div').stop().fadeIn(500);
         	}, function() {
         		clearInterval(timer);
         		aa();
         		$(this).children('div').stop().fadeOut(500);
         	});


           //左边箭头
         	$('#left-button').click(function(event) {
         		a=a+1;
         		if(a>3){
         			a=3;
         		}
         		$(this).siblings('ul').css('left', -747*a+'px');
         	});


         	//右边箭头
         	$('#right-button').click(function(event) {
         		a=a-1;
         		if(a<0){
         			a=0;
         		}
         		$(this).siblings('ul').css('left', -747*a+'px');
         	});







         })	


