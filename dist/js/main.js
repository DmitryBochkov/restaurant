function equalHeights(t){var e=document.getElementsByClassName(t),n=0;for(i=0;i<e.length;i++){e[i].style.height="auto";var o=e[i],a=o.offsetHeight;n=a>n?a:n}for(i=0;i<e.length;i++)e[i].style.height=n+"px"}function equalContentAndImg(){for(var t=document.querySelectorAll(".service__content"),e=t[0].offsetHeight,n=document.querySelectorAll(".service__img"),o=0;o<n.length;o++)n[o].style.height=e+"px"}var tns=function(){function t(){for(var t,e,n,o=arguments[0]||{},i=1,a=arguments.length;i<a;i++)if(null!==(t=arguments[i]))for(e in t)n=t[e],o!==n&&void 0!==n&&(o[e]=n);return o}function e(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}function n(t){return void 0!==t.item}function o(t,e){var o,i=n(t)?t:[t];if(void 0!==e.nodeType&&1===e.nodeType)for(o=i.length;o--;)i[o].appendChild(e);else if("string"==typeof e)for(o=i.length;o--;)i[o].insertAdjacentHTML("beforeend",e);else if(n(e)){var a=document.createDocumentFragment();for(o=e.length;o--;)a.insertBefore(e[o],a.firstChild);for(var r=i.length;r--;)i[r].appendChild(a)}}function i(t,e){for(var o=n(t)?t:[t],i=o.length;i--;){var a=i>0?e.cloneNode(!0):e,r=o[i],c=r.parentNode,l=r.nextSibling;a.appendChild(r),l?c.insertBefore(a,l):c.appendChild(a)}}function a(t){for(var e=n(t)?t:[t],o=e.length;o--;){for(var i=e[o],a=i.parentNode;i.firstChild;)a.insertBefore(i.firstChild,i);a.removeChild(i)}}function r(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function c(t,e){return Math.atan2(t,e)*(180/Math.PI)}function l(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function s(t,e){return t.hasAttribute(e)}function u(t,e){return t.getAttribute(e)}function d(t){return void 0!==t.item}function f(t,e){if(t=d(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var o in e)t[n].setAttribute(o,e[o])}function m(t,e){t=d(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,o=t.length;o--;)for(var i=n;i--;)t[o].removeAttribute(e[i])}function h(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function v(t){s(t,"hidden")||f(t,{hidden:""})}function p(t){s(t,"hidden")&&m(t,"hidden")}function g(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function y(t){var e,n=document.createElement("fakeelement");for(e in t)if(void 0!==n.style[e])return[e,t[e][0],t[e][1]];return!1}function w(t,e){for(var n in e){var o=("touchstart"===n||"touchmove"===n)&&M;t.addEventListener(n,e[n],o)}}function b(t,e){for(var n in e){var o=("touchstart"===n||"touchmove"===n)&&M;t.removeEventListener(n,e[n],o)}}function T(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function E(t,e,n,o,i,a,r){function c(){a-=l,s+=u,t.style[e]=n+s+"px"+o,a>0?setTimeout(c,l):r()}var l=Math.min(a,10),s=Number(t.style[e].slice(n.length,-(o.length+2))),u=(i-s)/a*l;setTimeout(c,l)}function x(n){function s(){return"gallery"===Kt||"page"===n.slideBy?Qt:n.slideBy}function d(){return(Bt+ne)/Qt}function y(){if(Jt<=Qt){ae=!1;He="gallery"===Kt?0:ve,void 0!==He&&rn.emit("indexChanged",Ot()),Ae&&v(Ae),Me&&v(Me),Fe&&v(Fe)}else ae=n.arrowKeys,De&&p(Ae),Ce&&p(Me),ze&&p(Fe)}function x(){if(f(Xt,{"data-tns-role":"wrapper"}),f(Vt,{"data-tns-role":"content-wrapper"}),"vertical"===Ut?f(Vt,{"data-tns-hidden":"y"}):f(Xt,{"data-tns-hidden":"x"}),"carousel"===Kt){var t=ie&&oe?G():oe?oe+ne:0;Vt.style.cssText="horizontal"===Ut?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+oe+"px; height: "+X()+"px;"}}function C(){Bt=sn(),Qt=cn(),qt=pe-Qt-Ie,"horizontal"!==Ut||ie||(me=d()),zt=ln(),te=s()}function L(){""===Zt.id&&(Zt.id=fe),f(Zt,{"data-tns-role":"content","data-tns-mode":Kt,"data-tns-axis":Ut}),"horizontal"===Ut&&(Zt.style.width=(me+1)*pe+"px")}function M(){"carousel"===Kt&&(se&&f(Zt,{"data-tns-hidden":"y"}),Zt.style[Te]=Ee+Math.round(-Ht[He])+"px"+xe)}function A(){navigator.msMaxTouchPoints&&(Xt.classList.add("ms-touch"),w(Xt,{scroll:yt}))}function k(){for(var t=0;t<Jt;t++){var e=$t[t];e.id=fe+"-item"+t,"gallery"===Kt&&nn&&e.classList.add(nn),f(e,{"aria-hidden":"true"});var n="horizontal"===Ut?"right":"bottom",o="";"carousel"===Kt&&(o="margin-"+n+": "+ne+"px;"),"horizontal"===Ut&&(o="width: "+(me-ne)+"px; "+o),e.style.cssText+=o}if(le||oe){for(var i=document.createDocumentFragment(),a=document.createDocumentFragment(),r=ve;r--;){var c=r%Jt,l=$t[c].cloneNode(!0);if(m(l,"id"),a.insertBefore(l,a.firstChild),"carousel"===Kt){var s=$t[Jt-1-c].cloneNode(!0);m(s,"id"),i.appendChild(s)}}Zt.insertBefore(i,Zt.firstChild),Zt.appendChild(a),$t=Zt.children}}function z(){Ce&&(n.controlsContainer?(_t=Me.children[0],It=Me.children[1],f(Me,{"aria-label":"Carousel Navigation"}),f(_t,{"data-controls":"prev"}),f(It,{"data-controls":"next"}),f(Me.children,{"aria-controls":fe,tabindex:"-1"})):(o(Xt,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+fe+'" type="button">'+Le[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+fe+'" type="button">'+Le[1]+"</button></div>"),[].forEach.call(Xt.children,function(t){"controls"===t.getAttribute("data-tns-role")&&(Me=t)}),_t=Me.children[0],It=Me.children[1]))}function q(){if(De)if(n.navContainer)f(Ae,{"aria-label":"Carousel Pagination"}),Pt=Ae.children,[].forEach.call(Pt,function(t,e){f(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":fe+"-item"+e})});else{for(var t="",e=0;e<Jt;e++)t+='<button data-nav="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+fe+"-item"+e+'" type="button"></button>';t='<div data-tns-role="nav" aria-label="Carousel Pagination">'+t+"</div>",o(Xt,t),[].forEach.call(Xt.children,function(t){"nav"===t.getAttribute("data-tns-role")&&(Ae=t)}),Pt=Ae.children;for(var i=zt;i<Jt;i++)f(Pt[i],{hidden:""});ke=zt}}function B(){ze&&(Fe?f(Fe,{"data-action":"stop"}):(Ae||(o(Xt,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),Ae=Xt.querySelector('[data-tns-role="nav"]')),o(Ae,'<button data-action="stop" type="button">'+Ge+Ye[0]+"</button>"),Fe=Ae.querySelector("[data-action]")),lt())}function Y(){for(var t=He;t<He+Qt;t++){var e=$t[t];f(e,{"aria-hidden":"false"}),"gallery"===Kt&&(e.style.left=me*(t-He)+"px",e.classList.remove(nn),e.classList.add(tn))}Ce&&(f(It,{tabindex:"0"}),(He===Pe&&!le||ce)&&(_t.disabled=!0)),De&&f(Pt[0],{tabindex:"0","aria-selected":"true"})}function R(){if("carousel"===Kt){if(N){var t={};t[N]=nt,w(Zt,t)}Xe&&w(Zt,{touchstart:Et,touchmove:xt,touchend:Ct,touchcancel:Ct}),$e&&w(Zt,{mousedown:Et,mousemove:xt,mouseup:Ct,mouseleave:Ct})}if(De)for(var e=0;e<Jt;e++)w(Pt[e],{click:ct,keydown:gt});Ce&&(w(_t,{click:at,keydown:pt}),w(It,{click:rt,keydown:pt})),ze&&(w(Fe,{click:ft}),Re&&(w(Zt,{mouseover:function(){We&&(st(),je=!0)}}),w(Zt,{mouseout:function(){!We&&je&&(lt(),je=!1)}})),Ke&&w(document,{visibilitychange:mt})),ae&&w(document,{keydown:ht}),"inner"===ee?rn.on("outerResized",function(){St(),rn.emit("innerLoaded",Ot())}):(w(window,{resize:Nt}),"outer"===ee&&rn.on("innerLoaded",W))}function F(){var t=He,e=He+Qt;for(oe&&(t-=1,e+=1);t<e;t++)[].forEach.call($t[t].querySelectorAll('[data-tns-role="lazy-img"]'),function(t){var e={};e[N]=function(t){t.stopPropagation()},w(t,e),t.classList.contains("loaded")||(t.src=u(t,"data-src"),t.classList.add("loaded"))})}function W(){for(var t=[],e=He;e<He+Qt;e++)[].forEach.call($t[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?K():j(t)}function j(t){t.forEach(function(e,n){g(e)&&t.splice(n,1)}),0===t.length?K():setTimeout(function(){j(t)},16)}function G(){return(Bt%me+ne)/2}function K(){for(var t,e=[],n=He;n<He+Qt;n++)e.push($t[n].offsetHeight);t=Math.max.apply(null,e),Zt.style.height!==t&&(O&&Q(re),Zt.style.height=t+"px")}function U(){Ht=[0];for(var t,e=$t[0].getBoundingClientRect()[be],n=1;n<pe;n++)t=$t[n].getBoundingClientRect()[be],Ht.push(t-e)}function X(){return Ht[He+Qt]-Ht[He]}function V(){Xt.style.msScrollSnapPointsX="snapInterval(0%, "+me+")"}function Z(){var t,e,n,o;He!==_e&&(He>_e?(t=_e,e=Math.min(_e+Qt,He),n=Math.max(_e+Qt,He),o=He+Qt):(t=Math.max(He+Qt,_e),e=_e+Qt,n=He,o=Math.min(He+Qt,_e))),te%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),o=Math.round(o));for(var i=t;i<e;i++)f($t[i],{"aria-hidden":"true"});for(var a=n;a<o;a++)f($t[a],{"aria-hidden":"false"})}function $(){De&&(-1===Oe?n.navContainer?Se=He%Jt:(Se=Math.floor(He%Jt/Qt),le||Jt%Qt==0||He!==qt||(Se+=1)):(Se=Oe,Oe=-1),Se!==Ne&&(f(Pt[Ne],{tabindex:"-1","aria-selected":"false"}),f(Pt[Se],{tabindex:"0","aria-selected":"true"}),Ne=Se))}function J(){if(Ce&&!le){var t=[],e=[];He===Pe?(t.push(_t),e.push(It),vt(_t,It)):ce||He!==qt?e.push(_t,It):(t.push(It),e.push(_t),vt(It,_t)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0,f(t,{tabindex:"-1"}))}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1,f(t,{tabindex:"0"}))})}}function Q(t,e){t=t?t/1e3+"s":"",e=e||Zt,e.style[O]=t,"gallery"===Kt&&(e.style[H]=t),"vertical"===Ut&&(Vt.style[O]=t)}function tt(t,e){void 0===t&&(t=re),O&&Q(t),un(t,e)}function et(){f(Zt,{"aria-busy":"true"}),ye&&dn(),He!==_e&&rn.emit("indexChanged",Ot()),rn.emit("transitionStart",Ot()),tt()}function nt(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(rn.emit("transitionEnd",Ot(t)),"gallery"===Kt&&he.length>0)for(var n=0;n<Qt;n++){var o=he[n];O&&Q(0,o),on&&S&&(o.style[S]=o.style[_]=""),o.classList.remove(en),o.classList.add(nn),o.style.left=""}if(!t||"gallery"===Kt&&t.target.parentNode===Zt||t.target===Zt&&e(t.propertyName)===e(Te)){if(!ye){var i=He;dn(),He!==i&&(tt(0),rn.emit("indexChanged",Ot()))}Z(),$(),J(),de&&F(),se&&W(),"inner"===ee&&rn.emit("innerLoaded",Ot()),m(Zt,"aria-busy"),ot()}}function ot(){_e=He}function it(t){"true"!==u(Zt,"aria-busy")&&(He+=t*te,et())}function at(){it(-1)}function rt(){it(ce&&He===qt?-(qt-Pe)/te:1)}function ct(t){if("true"!==u(Zt,"aria-busy")){for(var o,i=t.target||t.srcElement;-1===e(Pt,i);)i=i.parentNode;o=Oe=Number(u(i,"data-nav"));var a="gallery"===Kt?0:ve;He=n.navContainer?o+a:o*Qt+a,He!==_e&&et()}}function lt(){dt(),f(Fe,{"data-action":"stop"}),Fe.innerHTML=Ge+Ye[1],We=!0}function st(){ut(),f(Fe,{"data-action":"start"}),Fe.innerHTML=Ge.replace("Stop","Start")+Ye[0],We=!1}function ut(){We="paused",clearInterval(Yt)}function dt(){!0!==We&&(clearInterval(Yt),Yt=setInterval(function(){it(Be)},qe))}function ft(){We?st():lt()}function mt(){Ue!=document.hidden&&!1!==We&&(document.hidden?ut():dt()),Ue=document.hidden}function ht(t){switch(t=t||window.event,t.keyCode){case P.LEFT:at();break;case P.RIGHT:rt()}}function vt(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function pt(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;switch(e){case P.LEFT:case P.UP:case P.HOME:case P.PAGEUP:n!==_t&&!0!==_t.disabled&&vt(n,_t);break;case P.RIGHT:case P.DOWN:case P.END:case P.PAGEDOWN:n!==It&&!0!==It.disabled&&vt(n,It);break;case P.ENTER:case P.SPACE:n===It?rt():at()}}function gt(t){t=t||window.event;var e=t.keyCode,n=document.activeElement,o=u(n,"data-nav");switch(e){case P.LEFT:case P.PAGEUP:o>0&&vt(n,n.previousElementSibling);break;case P.UP:case P.HOME:0!==o&&vt(n,Pt[0]);break;case P.RIGHT:case P.PAGEDOWN:o<zt-1&&vt(n,n.nextElementSibling);break;case P.DOWN:case P.END:o<zt-1&&vt(n,Pt[zt-1]);break;case P.ENTER:case P.SPACE:ct(t)}}function yt(){tt(0,Zt.scrollLeft()),ot()}function wt(t){return t.target||t.srcElement}function bt(t){return"a"===t.tagName.toLowerCase()}function Tt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Et(t){t=t||window.event,bt(wt(t))&&Tt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Ve=parseInt(e.clientX),Ze=parseInt(e.clientY);var n=D?[11,-3]:[0,-2];Rt=Number(Zt.style[Te].slice(n[0],n[1])),"touchstart"===t.type?rn.emit("touchStart",Ot(t)):(rn.emit("dragStart",Ot(t)),Je=!0)}function xt(t){if(t=t||window.event,Je&&"mousemove"===t.type&&!Qe&&(Qe=!0),null!==Ve){bt(wt(t))&&Tt(t);var e="touchmove"===t.type?t.changedTouches[0]:t;if(Ft=parseInt(e.clientX)-Ve,Wt=parseInt(e.clientY)-Ze,l(c(Wt,Ft),15)===Ut){jt=!0,"touchmove"===t.type?rn.emit("touchMove",Ot(t)):rn.emit("dragMove",Ot(t));var n="horizontal"===Ut?Rt+Ft:Rt+Wt;n+="px",D&&(n="translate"+we+"("+n+")",Q(0)),Zt.style[Te]=n}}}function Ct(t){if(t=t||window.event,Je&&(Je=!1),jt){jt=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Ft=parseInt(e.clientX)-Ve,Wt=parseInt(e.clientY)-Ze,Ve=Ze=null,"horizontal"===Ut)He=-(Rt+Ft)/me,He=Ft>0?Math.floor(He):Math.ceil(He);else{var n=-(Rt+Wt);if(n<=0)He=Pe;else if(n>=Ht[Ht.length-1])He=qt;else{var o=0;do{o++,He=Wt<0?o+1:o}while(o<pe&&n>=Math.round(Ht[o+1]))}}0===t.type.indexOf("touch")?rn.emit("touchEnd",Ot(t)):rn.emit("dragEnd",Ot(t)),et()}if(Qe){Qe=!1;var i=wt(t);bt(i)&&w(i,{click:function t(e){Tt(e),b(i,{click:t})}})}}function Lt(){Zt.style.width=(me+1)*pe+"px";for(var t=pe;t--;)$t[t].style.width=me-ne+"px"}function Mt(){for(var t=He+1,e=He+Qt;t<e;t++)$t[t].style.left=me*(t-He)+"px"}function Dt(){Vt.style.cssText="margin: 0px "+G()+"px"}function At(){Vt.style.height=X()+"px"}function kt(){if(zt!==ke)if(zt>ke)for(var t=ke;t<zt;t++)m(Pt[t],"hidden");else for(var e=zt;e<ke;e++)f(Pt[e],{hidden:""});ke=zt}function Ot(t){return{container:Zt,slideItems:$t,navItems:Pt,prevButton:_t,nextButton:It,items:Qt,index:He,indexCached:_e,navCurrent:Se,navCurrentCached:Ne,slideCount:Jt,cloneCount:ve,slideCountNew:pe,event:t||{}}}function St(){var t=He,e=Qt;C(),y(),dn(),"horizontal"===Ut?(ie&&oe?Dt():(Lt(),"gallery"===Kt&&Mt()),U()):(U(),At()),He!==t&&(rn.emit("indexChanged",Ot()),Z(),Ce&&!le&&J()),De&&Qt!==e&&!n.navContainer&&(kt(),$()),(He!==t||"carousel"===Kt&&!ie)&&tt(0),se&&W(),(de&&He!==t||Qt!==e)&&F(),navigator.msMaxTouchPoints&&V()}function Nt(t){clearTimeout(Gt),Gt=setTimeout(function(){Bt!==sn()&&(St(),"outer"===ee&&rn.emit("outerResized",Ot(t)))},100)}if(n=t({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,rewind:!1,nested:!1,onInit:!1},n||{}),"object"==typeof n.container&&null!==n.container){var Ht,_t,It,Pt,zt,qt,Bt,Yt,Rt,Ft,Wt,jt,Gt,Kt=n.mode,Ut=n.axis,Xt=document.createElement("div"),Vt=document.createElement("div"),Zt=n.container,$t=Zt.children,Jt=$t.length,Qt=n.items,te=s(),ee=n.nested,ne=n.gutter,oe="gallery"!==Kt&&n.edgePadding,ie=n.fixedWidth,ae=n.arrowKeys,re=n.speed,ce=n.rewind,le="gallery"===Kt||!n.rewind&&n.loop,se="gallery"===Kt||n.autoHeight,ue=!ie&&n.responsive,de=n.lazyload,fe=Zt.id||r(),me=ie?ie+ne:0,he=[],ve=le?2*Jt:oe?1:0,pe="gallery"===Kt?Jt+ve:Jt+2*ve,ge=!(!ie||le||oe),ye="gallery"===Kt||!le,we="horizontal"===Ut?"X":"Y",be="horizontal"===Ut?"left":"top",Te=be,Ee="",xe="",Ce=n.controls,Le=n.controlsText,Me=!!n.controlsContainer&&n.controlsContainer,De=n.nav,Ae=n.navContainer||!1,ke=Jt,Oe=-1,Se=0,Ne=0,He="gallery"===Kt?0:ve,_e=He,Ie=oe?1:0,Pe=Ie,ze=n.autoplay,qe=n.autoplayTimeout,Be="forward"===n.autoplayDirection?1:-1,Ye=n.autoplayText,Re=n.autoplayHoverPause,Fe=n.autoplayButton,We=!1,je=!1,Ge="<span hidden>Stop Animation</span>",Ke=n.autoplayResetOnVisibility,Ue=!1,Xe=n.touch,Ve=null,Ze=null,$e=n.mouseDrag,Je=!1,Qe=!1,tn=H?n.animateIn:"tns-fadeIn",en=H?n.animateOut:"tns-fadeOut",nn=H?n.animateNormal:"tns-normal",on=!!H&&n.animateDelay,an=n.onInit,rn=new T;D&&(Te=D,Ee="translate"+we+"(",xe=")");var cn=function(){return ie?function(){return Math.max(1,Math.min(Jt,Math.floor(Bt/ie)))}:function(){var t=n.items,e="object"==typeof ue&&Object.keys(ue);return e&&e.forEach(function(e){Bt>=e&&(t=ue[e])}),Math.max(1,Math.min(Jt,t))}}(),ln=function(){return n.navContainer?function(){return Jt}:function(){return Math.ceil(Jt/Qt)}}(),sn=function(){return"horizontal"===Ut&&!ie&&oe?function(){return Xt.clientWidth-2*(oe+ne)}:function(){return Xt.clientWidth}}();!function(){i(Zt,Vt),i(Vt,Xt),C(),L(),k(),U(),x(),M(),A(),z(),q(),B(),Y(),R(),y(),de&&F(),se&&W(),"function"==typeof an&&an(Ot()),"inner"===ee&&rn.emit("innerLoaded",Ot())}();var un=function(){return"carousel"===Kt?function(t,e){e||(e=-Ht[He]),ge&&He===qt&&(e=Math.max(e,-pe*me+Bt+ne)),O||!t?Zt.style[Te]=Ee+Math.round(e)+"px"+xe:E(Zt,Te,Ee,xe,e,re,nt),"vertical"===Ut&&(Vt.style.height=X()+"px")}:function(){he=[];var t={};t[N]=nt,t[I]=nt,b($t[_e],t);var e={};e[N]=nt,e[I]=nt,w($t[He],e),function(){for(var t=_e,e=_e+Qt;t<e;t++){var n=$t[t];if(O&&Q(re,n),on&&S){var o=on*(t-_e)/1e3;n.style[S]=o+"s",n.style[_]=o+"s"}n.classList.remove(tn),n.classList.add(en),he.push(n)}}(),function(){for(var t=He,e=He+Qt;t<e;t++){var n=$t[t];if(O&&Q(re,n),on&&S){var o=on*(t-He)/1e3;n.style[S]=o+"s",n.style[_]=o+"s"}n.classList.remove(nn),n.classList.add(tn),t>He&&(n.style.left=(t-He)*me+"px")}}()}}(),dn=function(){return le?function(){var t="carousel"===Kt?te+Pe:Pe,e="carousel"===Kt?qt-te:qt;if(ie&&Bt%me!=0&&(e-=1),He>e)for(;He>=t+Jt;)He-=Jt;else if(He<t)for(;He<=e-Jt;)He+=Jt}:function(){He=Math.max(Pe,Math.min(qt,He))}}();return{getInfo:Ot,events:rn,goTo:function(t){if("next"===t)He+=1;else if("prev"===t||"previous"===t)He-=1;else{var e,n=He%Jt;n<0&&(n+=Jt),"first"===t?e=0:"last"===t?e=Jt-1:"number"==typeof t&&(e=t%Jt),e<0&&(e+=Jt),He+=e-n}He!==_e&&(dn(),et())},destory:function(){if(a(Xt),a(Vt),Xt=Vt=null,m(Zt,["id","style","data-tns-role","data-tns-features"]),le)for(var t=ve;t--;)$t[0].remove(),$t[$t.length-1].remove();m($t,["id","style","aria-hidden"]),fe=Jt=null,Ce&&(n.controlsContainer?(m(Me,["aria-label"]),m(Me.children,["aria-controls","tabindex"]),h(Me)):(Me.remove(),Me=_t=It=null)),De&&(n.navContainer?(m(Ae,["aria-label"]),m(Pt,["aria-selected","aria-controls","tabindex"]),h(Ae)):(Ae.remove(),Ae=null),Pt=null),ze&&(n.navContainer||null===Ae?h(Fe):(Ae.remove(),Ae=null),b(document,{visibilitychange:mt})),h(Zt),ae&&b(document,{keydown:ht}),b(window,{resize:Nt})}}}}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var o=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(o+16,e);return setTimeout(function(){t(o=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";var t,e,n,o=window,i=document,a=Object,r="length",c="item contains add remove toggle toString toLocaleString".split(" "),l=c[2],s=c[3],u=c[4],d="prototype",f="defineProperty"in a||"__defineGetter__"in a[d]||null,m=function(t,e,n,o){a.defineProperty?a.defineProperty(t,e,{configurable:!1===f||!!o,get:n}):t.__defineGetter__(e,n)},h=function(t,e){var n=this,o=[],i={},d=0,f=0,h=function(){if(d>=f)for(;f<d;++f)!function(t){m(n,t,function(){return v(),o[t]},!1)}(f)},v=function(){var n,a,c=arguments,l=/\s+/;if(c[r])for(a=0;a<c[r];++a)if(l.test(c[a]))throw n=new SyntaxError('String "'+c[a]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(o=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===o[0]&&(o=[]),i={},a=0;a<o[r];++a)i[o[a]]=!0;d=o[r],h()};return v(),m(n,r,function(){return v(),d}),n[c[6]]=n[c[5]]=function(){return v(),o.join(" ")},n.item=function(t){return v(),o[t]},n.contains=function(t){return v(),!!i[t]},n[l]=function(){v.apply(n,a=arguments);for(var a,c,l=0,s=a[r];l<s;++l)c=a[l],i[c]||(o.push(c),i[c]=!0);d!==o[r]&&(d=o[r]>>>0,t[e]=o.join(" "),h())},n[s]=function(){v.apply(n,a=arguments);for(var a,c={},l=0,s=[];l<a[r];++l)c[a[l]]=!0,delete i[a[l]];for(l=0;l<o[r];++l)c[o[l]]||s.push(o[l]);o=s,d=s[r]>>>0,t[e]=o.join(" "),h()},n[u]=function(t,e){return v.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[s](t),!1):i[t]?(n[s](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,c[n],{enumerable:!1})}(n,a.defineProperty),n},v=function(t,e,n){m(t[d],e,function(){var t,o=this,a="__defineGetter__defineProperty"+e;if(o[a])return t;if(o[a]=!0,!1===f){for(var c,l=v.mirror=v.mirror||i.createElement("div"),s=l.childNodes,u=s[r],d=0;d<u;++d)if(s[d]._R===o){c=s[d];break}c||(c=l.appendChild(i.createElement("div"))),t=h.call(c,o,n)}else t=new h(o,n);return m(o,e,function(){return t}),delete o[a],t},!0)};if(o.DOMTokenList)t=i.createElement("div").classList,d=o.DOMTokenList[d],t[l].apply(t,c),2>t[r]&&(e=d[l],n=d[s],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[s]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:s](t),!!e});else{if(f)try{m({},"support")}catch(t){f=!1}h.polyfill=!0,o.DOMTokenList=h,v(o.Element,"classList","className"),v(o.HTMLLinkElement,"relList","rel"),v(o.HTMLAnchorElement,"relList","rel"),v(o.HTMLAreaElement,"relList","rel")}}();var C=!1;try{var L=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,L)}catch(t){}var M=!!C&&{passive:!0},D=function(t){for(var e=document.documentElement,n=0;n<t.length;n++)if(t[n]in e.style)return t[n]}(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),A={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},k={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},O=y(A)[0],S=y(A)[1],N=y(A)[2],H=y(k)[0],_=y(k)[1],I=y(k)[2],P={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return x}();!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,a=function(t){i=t},r=function(){clearTimeout(i),a(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},l=function(o,i,c){if(r(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var l=e.getY(),s=Math.max(0,o)-l,u=(new Date).getTime();i=i||Math.min(Math.abs(s),n),function t(){a(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-u)/i),o=Math.max(0,Math.floor(l+s*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(r,99),c&&c())},9))}()}},s=function(t,e,n){l(c(t),e,n)},u=function(t,n,i){var a=t.getBoundingClientRect().height,r=e.getTopOf(t)+a,u=e.getHeight(),d=e.getY(),f=d+u;c(t)<d||a+o>u?s(t,n,i):r+o>f?l(r-u+o,n,i):i&&i()},d=function(t,n,o,i){l(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:s,toY:l,intoView:u,center:d,stop:r,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var a="scrollRestoration"in history;a&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){a&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var r=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(a)try{history.replaceState({zenscrollY:i.getY()},"")}catch(t){}var n=e.getAttribute("href")||"";if(0===n.indexOf("#")&&!r.test(e.className)){var o=0,c=document.getElementById(n.substring(1));if("#"!==n){if(!c)return;o=i.getTopOf(c)}t.preventDefault();var l=function(){window.location=n},s=i.setup().edgeOffset;s&&(o=Math.max(0,o-s),l=function(){history.pushState(null,"",n)}),i.toY(o,null,l)}}},!1)}return i});var backToTopBtn=document.getElementById("toTopBtn"),body=document.body,docElem=document.documentElement,offset=100,scrollPos,winHeight,isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;winHeight=window.innerHeight||docElem.clientHeight,"undefined"!==winHeight&&(offset=winHeight),window.addEventListener("scroll",function(t){scrollPos=body.scrollTop||docElem.scrollTop,backToTopBtn.className=scrollPos>offset?"active top-btn":"top-btn"}),backToTopBtn.addEventListener("click",function(t){t.preventDefault(),zenscroll.toY(0)}),document.body.classList.remove("no-js");var preloader=document.getElementById("preloader");preloader.style.display="block",window.addEventListener("load",function(){preloader.className+=" fade",setTimeout(function(){preloader.style.display="none"},700)}),window.addEventListener("scroll",function(t){(document.body.scrollTop||document.documentElement.scrollTop)>62?document.body.classList.add("fixed-nav"):document.body.classList.remove("fixed-nav")}),document.addEventListener("DOMContentLoaded",function(t){var e=document.getElementById("sideNavToggle"),n=document.getElementById("pageOverlay");e.addEventListener("click",function(t){t.preventDefault(),document.body.classList.toggle("off-canvas"),e.classList.toggle("is-active")}),n.addEventListener("click",function(t){document.body.classList.contains("off-canvas")&&(document.body.classList.remove("off-canvas"),e.classList.remove("is-active"))});var o=tns({container:document.querySelector("#services-slider"),items:1,nav:!1,controls:!1,responsive:{600:2,900:3}}),i=document.querySelector(".prev--services"),a=document.querySelector(".next--services");i.onclick=function(){o.goTo("prev")},a.onclick=function(){o.goTo("next")};var r=tns({container:document.querySelector(".specialties__items"),items:1,navContainer:document.querySelector(".specialties__thumbs"),controlsContainer:document.querySelector(".specialties__controls")});document.querySelector(".specialties__items").onclick=function(){r.goTo("next")};tns({container:document.querySelector(".specialties__thumbs"),items:3,nav:!1,controlsContainer:document.querySelector(".specialties__thumbs-controls"),loop:!1,gutter:5,responsive:{450:5}}),tns({container:document.querySelector(".testimonials__slider"),items:1,nav:!0,speed:500,controls:!1,loop:!0,autoplay:!0,autoplayButton:!1,autoplayTimeout:8e3,mouseDrag:!0}),tns({container:document.querySelector(".clients__slider"),items:2,speed:500,nav:!1,gutter:20,controlsContainer:document.querySelector(".clients__slider-controls"),loop:!0,autoplay:!0,autoplayButton:!1,mouseDrag:!0,responsive:{480:3,768:4}});equalHeights("service__content"),equalContentAndImg()}),window.addEventListener("resize",function(){equalHeights("service__content"),equalContentAndImg()});