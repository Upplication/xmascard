!function(t,s){function e(t){this.setLevels=function(){this.docWidth>1500?(this.levels=6.2,this.verticalTranslate=3e3):this.docWidth>1350?(this.levels=6,this.verticalTranslate=2750):this.docWidth>1250?(this.levels=5.8,this.verticalTranslate=2450):this.docWidth>1150?(this.levels=5.7,this.verticalTranslate=2350):this.docWidth>1050?(this.levels=5.5,this.verticalTranslate=2100):this.docWidth>950?(this.levels=5.35,this.verticalTranslate=1900):this.docWidth>850?(this.levels=5.15,this.verticalTranslate=1700):(this.levels=4.9,this.verticalTranslate=1520)},this.content=t,this.header=s(".page-header"),this.body=s("body"),this.town=s(".illust-level--town"),this.townSymbols=s(".illust-level--symbolsTown"),this.house=s(".svg-house"),this.carollers=s(".svg-carollers"),this.star=s(".svg-star"),this.scrolled=0;var e=document.body,i=document.documentElement;this.docHeight=Math.max(e.scrollHeight,e.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight),this.docWidth=i.clientWidth,this.setLevels(),window.addEventListener("scroll",this,!1)}s(function(){t.UI.init()}),t.UI={scrollActive:!1,supports:{transform3d:!1},init:function(){this.handleZooming()},handleZooming:function(){var t=s(".illust-container");ZUI=new e(t),window.scrollTo(0,0)}},e.prototype.handleEvent=function(t){this[t.type]&&this[t.type](t)},e.prototype.scroll=function(t){this.recalculatePositions()},e.prototype.recalculatePositions=function(){var s=350,e=320,i=80,l=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||""),a=l?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop;this.scrolled=a/(this.docHeight-window.innerHeight);var n,h,r;this.checkStates();var c=this.scrolled<.5?this.scrolled:.5,d=Math.pow(3,c*this.levels),m=Math.round(d*e),v=Math.round(d*s),y=Math.round(d*i)-i;if(c<.5){var f=Math.round(m/2+y);t.UI.supports.transform3d?(n="translate3d(0, 0, 0) scale("+d+")",h="translate3d(-50%, -"+f+"px, 0)",r="translate3d(-"+v/2+"px, -"+f+"px, 0) scale("+d+")"):(n="translate(0, 0) scale("+d+")",h="translate(-50%, -"+f+"px)",r="translate(-"+v/2+"px, -"+f+"px) scale("+d+")")}else{var u=(this.scrolled-.5)/.5,w=u*this.verticalTranslate,f=Math.round(m/2+y-w);t.UI.supports.transform3d?(n="translate3d(0, 0, 0) scale("+d+")",h="translate3d(-50%, -"+f+"px, 0)"):(n="translate(0, 0) scale("+d+")",h="translate(-50%, -"+f+"px)")}this.town[0].style.width=v+"px",this.town[0].style.height=m+"px",this.town[0].style.WebkitTransform=h,this.town[0].style.MozTransform=h,this.town[0].style.msTransform=h,this.town[0].style.transform=h,this.content[0].style.WebkitTransform=n,this.content[0].style.MozTransform=n,this.content[0].style.msTransform=n,this.content[0].style.transform=n,this.townSymbols[0].style.WebkitTransform="scale("+d+")",this.townSymbols[0].style.MozTransform="scale("+d+")",this.townSymbols[0].style.msTransform="scale("+d+")",this.townSymbols[0].style.transform="scale("+d+")"},e.prototype.checkStates=function(){this.scrolled>0?this.header.addClass("scaled"):this.header.removeClass("scaled"),this.scrolled>.15?this.body.addClass("night"):this.body.removeClass("night"),this.scrolled<.5?(this.house.removeClass("inactive"),this.carollers.removeClass("inactive"),this.star.addClass("inactive"),this.townSymbols.find(".symbols--inside").addClass("inactive"),this.townSymbols.find(".symbols--outside").removeClass("inactive")):(this.house.addClass("inactive"),this.carollers.addClass("inactive"),this.star.removeClass("inactive"),this.townSymbols.find(".symbols--inside").removeClass("inactive"),this.townSymbols.find(".symbols--outside").addClass("inactive"))}}(window.KO=window.KO||{},jQuery);