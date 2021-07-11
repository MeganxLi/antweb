
  $(document).ready(function(){
    
});

$(function () {
 
  //列表滑動
  var onePageClick = function() {
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 50
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});
	};
  onePageClick();
  
  //mouseicon
  var mouseHere = function() {
		$('.mouse-icon').on('click', function(event){			
			event.preventDefault();

      var href = $.attr(this, 'href');
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 50
	    }, 500, function() {
	    //	window.location.hash = href;
	    });
		});
	};
  mouseHere();
  
  // 按鈕回頂端
  $('#to-top').click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
    return false;
  });
    /* 偵測卷軸滑動時，往下滑超過200px就讓按鈕出現 */
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 200){
          $('#to-top').fadeIn();
      } else {
          $('#to-top').fadeOut();
      }
  });
  
})


$(document).ready(function(){
  $(window).scroll( function(){  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){          
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      
        var experience = document.getElementById("experience_section").offsetTop; 
        var Portfolio = document.getElementById("portfolio_section").offsetTop;   
        
        /* If the object is completely visible in the window, fade it it */        
        if( experience  <bottom_of_window){
          $('#experience_section').animate({'left':'0','opacity':'1'},700);          
        }
        if( Portfolio  <bottom_of_window){
          $('#portfolio_section').animate({'top':'0','opacity':'1'},700);                
        }
          
      }); 
  
  });
  
  /*作品集按鈕*/
  $("#all").click(function(){
    $(".web").fadeIn(500);
    $(".design").fadeIn(500);
    $(".Key").fadeIn(500);
  })
  $("#web").click(function(){
    $(".web").fadeIn(500);
    $(".design").fadeOut(200);
    $(".Key").fadeOut(200);
  })
  $("#design").click(function(){
    $(".web").fadeOut(200);
    $(".design").fadeIn(500);
    $(".Key").fadeOut(200);
  })
  $("#Key").click(function(){
    $(".web").fadeOut(200);
    $(".design").fadeOut(200);
    $(".Key").fadeIn(500);
  })

  

  /*作品集圖片
  $(".itemImg").click(function(){
    alert("取得"+ $("img",this ).width() +"  "+$("img",this ).height());
    if($("img",this ).width()>$("img",this ).height()){
      $("modal-dialog.showimg").height(70);
    }
  })*/
});
