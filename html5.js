/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-video
 */
;window.Modernizr=function(a,b,c){function w(a,b){return!!~(""+a).indexOf(b)}function v(a,b){return typeof a===b}function u(a,b){return t(prefixes.join(a+";")+(b||""))}function t(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k,l=Object.prototype.toString,m={},n={},o={},p=[],q,r={}.hasOwnProperty,s;!v(r,c)&&!v(r.call,c)?s=function(a,b){return r.call(a,b)}:s=function(a,b){return b in a&&v(a.constructor.prototype[b],c)},m.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c};for(var x in m)s(m,x)&&(q=x.toLowerCase(),e[q]=m[x](),p.push((e[q]?"":"no-")+q));t(""),i=k=null,e._version=d;return e}(this,this.document);

$(function() {
	
	if(Modernizr.video) {
		
		$("#main").append('<video id="pt" width="800" height="500"><source src="video/page_transition.mp4" type="video/mp4"/><source src="video/page_transition.webm" type="video/webm"/><source src="video/page_transition.ogv" type="video/ogg"/></video>');
		
		var video = document.getElementById('pt');
		
		$("#about").css("display","none");
		$("#gallery").css("display","none");
		$("#contact").css("display","none");
		
		var $animation = true;
		
		$("#nav a").click(function() {
			
			$page = $(this).attr('title');
			
			$id = $('#' + $page);
			
			$checker = $(".cp").attr('title');
			
			if($animation == true && $checker!=$page) {
				
				$animation = false;
			
				$(".cp").fadeOut(100, function() {
					
					video.play();
					
					$(this).removeClass();
					
				});
				
				$id.addClass("cp").delay(5000).fadeIn(100, function() {$animation = true;});
			
			}
			
			
		});
		
	}
	
});
