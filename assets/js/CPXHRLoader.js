/*

    This files uses parts of the LazyLoad library and the headJSlibrary.

    LazyLoad makes it easy and painless to lazily load one or more external
    JavaScript or CSS files on demand either during or after the rendering of a web
    page.
    Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
    Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
    are not officially supported.
    Visit https://github.com/rgrove/lazyload/ for more info.
    Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
    All rights reserved.
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 HeadJS- headJS.com
*/
cpXHRJSLoader=function(i){function n(a,b){var g=i.createElement(a),e;for(e in b)b.hasOwnProperty(e)&&g.setAttribute(e,b[e]);return g}function k(){var a=l,b;a&&(b=a.d,a=a.a,a.shift(),d=0,a.length||(b&&b.call(),l=null,o.length&&load()))}function r(a){var b;try{b=!!a.sheet.cssRules}catch(g){d+=1;200>d?setTimeout(function(){r(a)},50):b&&k();return}k()}function s(){var a=l,b;if(a){for(b=t.length;0<=--b;)if(t[b].href===a.a[0]){k();break}d+=1;a&&(200>d?setTimeout(s,50):k())}}var h,j,l,d=0,o=[],t=i.styleSheets;
eval('(function(f,w){function m(){}function g(a,b){if(a){"object"===typeof a&&(a=[].slice.call(a));for(var c=0,d=a.length;c<d;c++)b.call(a,a[c],c)}}function v(a,b){var c=Object.prototype.toString.call(b).slice(8,-1);return b!==w&&null!==b&&c===a}function k(a){return v("Function",a)}function h(a){a=a||m;a._done||(a(),a._done=1)}function n(a){var b={};if("object"===typeof a)for(var c in a)a[c]&&(b={name:c,url:a[c]});else b=a.split("/"),b=b[b.length-1],c=b.indexOf("?"),b={name:-1!==c?b.substring(0,c):b,url:a};return(a=p[b.name])&&a.url===b.url?a:p[b.name]=b}function q(a){var a=a||p,b;for(b in a)if(a.hasOwnProperty(b)&&a[b].state!==r)return!1;return!0}function s(a,b){b=b||m;a.state===r?b():a.state===x?d.ready(a.name,b):a.state===y?a.onpreload.push(function(){s(a,b)}):(a.state=x,z(a,function(){a.state=r;b();g(l[a.name],function(a){h(a)});j&&q()&&g(l.ALL,function(a){h(a)})}))}function z(a,b){var b=b||m,c;/.css[^.]*$/.test(a.url)?(c=e.createElement("link"),c.type="text/"+(a.type||"css"),c.rel="stylesheet",c.href=a.url):(c=e.createElement("script"),c.type="text/"+(a.type||"javascript"),c.src=a.url);c.onload=c.onreadystatechange=function(a){a=a||f.event;if("load"===a.type||/loaded|complete/.test(c.readyState)&&(!e.documentMode||9>e.documentMode))c.onload=c.onreadystatechange=c.onerror=null,b()};c.onerror=function(){c.onload=c.onreadystatechange=c.onerror=null;b()};c.async=!1;c.defer=!1;var d=e.head||e.getElementsByTagName("head")[0];d.insertBefore(c,d.lastChild)}function i(){e.body?j||(j=!0,g(A,function(a){h(a)})):(f.clearTimeout(d.readyTimeout),d.readyTimeout=f.setTimeout(i,50))}function t(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",t,!1),i()):"complete"===e.readyState&&(e.detachEvent("onreadystatechange",t),i())}var e=f.document,A=[],B=[],l={},p={},E="async"in e.createElement("script")||"MozAppearance"in e.documentElement.style||f.opera,C,j,D=f.head_conf&&f.head_conf.head||"head",d=f[D]=f[D]||function(){d.ready.apply(null,arguments)},y=1,x=3,r=4;d.load=E?function(){var a=arguments,b=a[a.length-1],c={};k(b)||(b=null);g(a,function(d,e){d!==b&&(d=n(d),c[d.name]=d,s(d,b&&e===a.length-2?function(){q(c)&&h(b)}:null))});return d}:function(){var a=arguments,b=[].slice.call(a,1),c=b[0];if(!C)return B.push(function(){d.load.apply(null,a)}),d;c?(g(b,function(a){if(!k(a)){var b=n(a);b.state===w&&(b.state=y,b.onpreload=[],z({url:b.url,type:"cache"},function(){b.state=2;g(b.onpreload,function(a){a.call()})}))}}),s(n(a[0]),k(c)?c:function(){d.load.apply(null,b)})):s(n(a[0]));return d};d.js=d.load;d.test=function(a,b,c,e){a="object"===typeof a?a:{test:a,success:b?v("Array",b)?b:[b]:!1,failure:c?v("Array",c)?c:[c]:!1,callback:e||m};(b=!!a.test)&&a.success?(a.success.push(a.callback),d.load.apply(null,a.success)):!b&&a.failure?(a.failure.push(a.callback),d.load.apply(null,a.failure)):e();return d};d.ready=function(a,b){if(a===e)return j?h(b):A.push(b),d;k(a)&&(b=a,a="ALL");if("string"!==typeof a||!k(b))return d;var c=p[a];if(c&&c.state===r||"ALL"===a&&q()&&j)return h(b),d;(c=l[a])?c.push(b):l[a]=[b];return d};d.ready(e,function(){q()&&g(l.ALL,function(a){h(a)});d.feature&&d.feature("domloaded",!0)});if("complete"===e.readyState)i();else if(e.addEventListener)e.addEventListener("DOMContentLoaded",t,!1),f.addEventListener("load",i,!1);else{e.attachEvent("onreadystatechange",t);f.attachEvent("onload",i);var u=!1;try{u=null==f.frameElement&&e.documentElement}catch(F){}u&&u.doScroll&&function b(){if(!j){try{u.doScroll("left")}catch(c){f.clearTimeout(d.readyTimeout);d.readyTimeout=f.setTimeout(b,50);return}i()}}()}setTimeout(function(){C=!0;g(B,function(b){b()})},300)})(window);');
return{css:function(a,b){function g(){k()}var e=[],c,m,f,p,d,q;h||(c=navigator.userAgent,h={async:!0===i.createElement("script").async},(h.c=/AppleWebKit\//.test(c))||(h.e=/MSIE/.test(c))||(h.opera=/Opera/.test(c))||(h.b=/Gecko\//.test(c))||(h.f=!0));a&&(a="string"===typeof a?[a]:a.concat(),o.push({a:a,d:b}));if(!l&&(p=l=o.shift())){j||(j=i.head||i.getElementsByTagName("head")[0]);d=p.a;c=0;for(m=d.length;c<m;++c)q=d[c],f=h.b?n("style"):n("link",{href:q,rel:"stylesheet"}),f.setAttribute("charset",
"utf-8"),h.b||h.c?h.c?(p.a[c]=f.href,s()):(f.innerHTML='@import "'+q+'";',r(f)):f.onload=f.onerror=g,e.push(f);c=0;for(m=e.length;c<m;++c)j.appendChild(e[c])}},js:function(){function a(){++f;f>=g.length||(f==g.length-1?g[f].call():b(g[f]))}function b(b){b=n("script",{src:b,async:!1});b.onload=a;j.appendChild(b)}for(var g=[],e=0;e<arguments.length;e++)if("[object Array]"===Object.prototype.toString.call(arguments[e]))for(var c=arguments[e],d=0;d<c.length;d++)g.push(c[d]);else g.push(arguments[e]);
var f=0;j||(j=i.head||i.getElementsByTagName("head")[0]);b(g[0])}}}(window.document);
