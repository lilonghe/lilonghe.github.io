!function(){"use strict";function t(t,e){var n=[];return t.forEach(function(t){var o=!1,l=[];t.content=t.content.replace(/<[^>]*>/g,""),e.forEach(function(e){var n=new RegExp(e,"i"),i=t.title.search(n),c=t.content.search(n);(i>-1||c>-1)&&(o=!0,l.push(e))}),o&&(t.matchKeyWords=l,n.push(t))}),n}function e(t){var e="";return t.forEach(function(t){var l;l=o(t.content,t.matchKeyWords),l=n(l,t.matchKeyWords),t.title=o(t.title,t.matchKeyWords),t='<li class="item"><a href="'+t.url+'"" target="_blank"><h3 class="title">'+t.title+'</h3></a><p class="post-content">'+l+"</h3></li>",e+=t}),e}function n(t,e){var n=!1,o=0;return e.forEach(function(e){var l=new RegExp(e,"i");o=t.search(l),o<0||(n=!0)}),t=n?o<120?t.substr(0,140):t.substr(o-60,200):t.substr(0,120)}function o(t,e){return t=t.replace(/<[^>]*>/g,""),e.forEach(function(e){var n=new RegExp("("+e+")","ig");t=t.replace(n,'<span class="color-hightlight">$1</span>')}),t}function l(){Util.addClass(u,"hide-dialog"),Util.removeClass(u,"show-dialog"),Util.addClass(r,"hide"),Util.removeClass(r,"show")}var i=(document.documentElement,document.body),c=document.getElementById("toc"),s=document.getElementById("backTop"),a=document.getElementById("toolbox-mobile"),r=document.getElementById("cover"),d=document.getElementById("close"),u=document.getElementById("modal-dialog"),m=0;if(function(){if(s&&(i.scrollTop>10?Util.addClass(s,"show"):Util.removeClass(s,"show")),c){var t=parseInt(window.getComputedStyle(c).height,10),e=document.documentElement.clientHeight;if(t+20>e)return;i.scrollTop>180?Util.addClass(c,"fixed"):Util.removeClass(c,"fixed")}}(),document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1),window.noZensmooth=!0,scrollSpy.init({nodeList:document.querySelectorAll(".toc-link"),scrollTarget:window}),Util.bind(window,"scroll",function(){if(m=i.scrollTop,c){var t=parseInt(window.getComputedStyle(c).height,10),e=document.documentElement.clientHeight;if(t+20>e)return;m>180?Util.addClass(c,"fixed"):Util.removeClass(c,"fixed")}s&&(m>10?Util.addClass(s,"show"):Util.removeClass(s,"show"))}),s&&Util.bind(s,"click",function(){zenscroll.to(i)}),c){var c=document.getElementById("toc"),h=document.querySelectorAll(".toc-link"),f=Array.prototype.slice.call(h);f.forEach(function(t){Util.bind(t,"click",function(t){var e=document.getElementById(this.hash.substring(1));zenscroll.to(e),t.preventDefault()})})}a&&(Util.bind(a,"click",function(){Util.addClass(u,"show-dialog"),Util.removeClass(u,"hide-dialog"),Util.addClass(r,"show"),Util.removeClass(r,"hide")}),Util.bind(r,"click",l),Util.bind(d,"click",l)),"/search/"===location.pathname&&Util.request("GET","/search.json",function(n){var o=document.getElementById("input-search");Util.bind(o,"keyup",function(){var o=this.value.trim().toLowerCase().split(/[\s\-]+/);if(!(this.value.trim().length<=0)){var l=t(n,o),i=document.getElementById("list-search");i.innerHTML=e(l)}})})}();