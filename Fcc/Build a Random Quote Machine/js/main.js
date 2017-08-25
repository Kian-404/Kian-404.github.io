$(document).ready(function(){
 var quote, author; 
 
 function getNewQuote() { 
  $.ajax({ 
   type: "get", 
   url: "http://api.forismatic.com/api/1.0/", 
   jsonp: 'jsonp', 
   dataType: 'jsonp', 
   data: { 
    method: 'getQuote', 
    lang: 'en', 
    format: 'jsonp' 
   }, 
   success: function(response) { 
    quote = response.quoteText; 
    author = response.quoteAuthor; 
    $('.quote').text('\"' + quote + '\"'); 
    if (author) { 
     $('.author').text('by ' + author); 
    } else { 
     $('.author').text('by Unknown'); 
    } 
   } 
  }); 
 } 
 

 getNewQuote(); 
 
 function colors(){
 	return Math.floor(Math.random() * 255);
 }

 $('.change').on('click', 
 function(event) { 
  event.preventDefault(); 
  getNewQuote(); 
  var r=colors();
  var g=colors();
  var b=colors();
  console.log(r);

  $("body").animate({
  	backgroundColor:"rgb(" + r + "," + g + "," + b + ")"
  	}, 1000);
  $(".quote-text").animate({
  	color:"rgb(" + r + "," + g + "," + b + ")"
  });
  $(".btn").animate({
  	backgroundColor:"rgb(" + r + "," + g + "," + b + ")"
  },1000);
 }); 
 
 $('.twitter').on('click', 
 function(event) { 
  event.preventDefault(); 
  window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' by ' + author)); 
 }); 
 
 $('.weibo').on('click', 
 function(event) { 
  event.preventDefault(); 
  window.open('http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(quote + ' by ' + author)); 
 }) 
});