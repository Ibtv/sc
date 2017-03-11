// JavaScript Document


 $(function() {
                $("#webwidget_slideshow_common1").webwidget_slideshow_common({
                    slideshow_transition_effect: 'slide_down',//slide_left slide_down fade_in
                    slideshow_time_interval: '4000',
                    slideshow_window_width: '300',
                    slideshow_window_height: '23',
                    slideshow_border_style: 'solid',//dashed dotted double groove hidden inset none outset ridge solid
                    slideshow_border_size: '0',
                    slideshow_border_color: '#000',
                    slideshow_border_radius: '5',
                    slideshow_padding_size: '3',
                    soldeshow_background_color: '#fff'
                });
            });
//
$(function(){
	
		
		$('#marquee').marquee({
		
		isEqual:true,//所有滚动的元素长宽是否相等,true,false
	    loop: 0,//循环滚动次数，0时无限
		direction: 'left',//滚动方向，'left','right','up','down'
		scrollAmount:1,//步长
		scrollDelay:20//时长
		
		});
		
		$('#marquee1').marquee({
		
		isEqual:true,//所有滚动的元素长宽是否相等,true,false
	    loop: 0,//循环滚动次数，0时无限
		direction: 'left',//滚动方向，'left','right','up','down'
		scrollAmount:1,//步长
		scrollDelay:20//时长
		
		});
		
		//
		$(function(){
					$(".tty").hide();
				  $(".try").hover(function(){
				  $(this).find(".tty").toggle();
				  });
					  })
		
	})
	
	
	
	$(function () {
var outer_keleyi_com = $("#outer_ke"+"leyi_com");
var inner01 = $("#inner01");
var inner02 = $("#inner02");
inner02.html(inner01.html());
	function que() {
	//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
	if (outer_keleyi_com.scrollLeft() >= inner01.width()) {
	//alert(outer_keleyi_com.scrollLeft() +" "+ inner01.width());
	outer_keleyi_com.scrollLeft(0);
	}
	else {
	outer_keleyi_com.scrollLeft(outer_keleyi_com.scrollLeft() + 1);
	}
	}
setInterval(que, 25);

//



var speed=30 
marquePic2.innerHTML=marquePic1.innerHTML 
function Marquee(){ 
if(demo.scrollLeft>=marquePic1.scrollWidth){ 
demo.scrollLeft=0 
}else{ 
demo.scrollLeft++ 
}} 
var MyMar=setInterval(Marquee,speed) 
demo.onmouseover=function() {clearInterval(MyMar)} 
demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 

})
	
	
	
