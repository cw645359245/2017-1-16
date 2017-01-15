  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    var swiper = new Swiper('.swiper-container2', {
        // pagination: '.swiper-pagination',
        paginationClickable: true
    });










$(function(){
	$('.dowebok').vTicker({
		showItems:1,
		pause: 2000
	});
});

var  starttimes=document.getElementsByClassName("starttime");
console.log(starttimes)
var  is=starttimes[0].getElementsByTagName('i',starttimes);
    console.log(is)
     setInterval(times,1000)
     times();
     function times(){
       var arr=[];
     var nowDate= new Date();
     var newyear=new Date(2017,0,16,12,0,0);
     var shicha=Math.floor((newyear.getTime()-nowDate.getTime())/1000);
     // var day=Math.floor(shicha/60/60/24);
     //   arr.push(day)
     // shicha=shicha%(60*60*24);
     var hours=Math.floor(shicha/60/60);
         arr.push(hours)
     shicha=shicha%(60*60);
     var minutes=Math.floor(shicha/60);
       arr.push(minutes)
     var seconds=shicha%60
     arr.push(seconds)
		  // hours=hours<=9 ? "00" + hours:hours;
   	// 	  minutes=minutes<=9 ? "00" + minutes:minutes;
   	// 	  seconds=seconds<=9 ? "00" + seconds:seconds;
   	// 	  return hours+":"+minutes+":"+seconds;

     for(var i=0;i<arr.length;i++){
     	is[i].innerHTML=arr[i]
     }
  
    /* document.write(day+"---"+hours+"---"+minutes+"---"+seconds)
*/	 
  	}