(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[537],{2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return h}});var n=r(7294),o=r(9008),i=r.n(o);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var u=["keyOverride"],s=["crossOrigin"],c={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=function(e,t,r){void 0===t&&(t=[]);var o=void 0===r?{}:r,i=o.defaultWidth,a=o.defaultHeight;return t.reduce(function(t,r,o){return t.push(n.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:r.url})),r.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.width.toString()})):i&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:i.toString()})),r.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:r.height.toString()})):a&&t.push(n.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:a.toString()})),t},[])},f=function(e){var t,r,o,i,f,d=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var h="";e.title?(h=e.title,c.templateTitle&&(h=c.templateTitle.replace(/%s/g,function(){return h}))):e.defaultTitle&&(h=e.defaultTitle),h&&d.push(n.createElement("title",{key:"title"},h));var m=void 0===e.noindex?c.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,y=void 0===e.nofollow?c.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,v=e.norobots||c.norobots,g="";if(e.robotsProps){var b=e.robotsProps,_=b.nosnippet,k=b.maxSnippet,O=b.maxImagePreview,S=b.maxVideoPreview,E=b.noarchive,G=b.noimageindex,w=b.notranslate,j=b.unavailableAfter;g=(_?",nosnippet":"")+(k?",max-snippet:"+k:"")+(O?",max-image-preview:"+O:"")+(E?",noarchive":"")+(j?",unavailable_after:"+j:"")+(G?",noimageindex":"")+(S?",max-video-preview:"+S:"")+(w?",notranslate":"")}if(e.norobots&&(c.norobots=!0),m||y?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),d.push(n.createElement("meta",{key:"robots",name:"robots",content:(m?"noindex":"index")+","+(y?"nofollow":"follow")+g}))):(!v||g)&&d.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),e.description&&d.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&d.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&d.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){d.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&d.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&d.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&d.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&d.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||h)&&d.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(i=e.openGraph)?void 0:i.title)||h})),(null!=(r=e.openGraph)&&r.description||e.description)&&d.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(f=e.openGraph)?void 0:f.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&d.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();d.push(n.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&d.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&d.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&d.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&d.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){d.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&d.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&d.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&d.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&d.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&d.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){d.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&d.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&d.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&d.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&d.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&d.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){d.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&d.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&d.push.apply(d,p("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&d.push.apply(d,p("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.audio&&d.push.apply(d,p("audio",e.openGraph.audio)),e.openGraph.locale&&d.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&d.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&d.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,o=e.keyOverride,i=l(e,u);d.push(n.createElement("meta",a({key:"meta:"+(null!=(t=null!=(r=null!=o?o:i.name)?r:i.property)?t:i.httpEquiv)},i)))}),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach(function(e){var t,r=e.crossOrigin,o=l(e,s);d.push(n.createElement("link",a({key:"link"+(null!=(t=o.keyOverride)?t:o.href)+o.rel},o,{crossOrigin:"anonymous"===r||"use-credentials"===r||""===r?r:void 0})))}),d},d=function(e){return n.createElement(i(),null,f(e))},h=function(e){var t=e.title,r=e.themeColor,o=e.noindex,i=e.nofollow,a=e.robotsProps,l=e.description,u=e.canonical,s=e.openGraph,c=e.facebook,p=e.twitter,f=e.additionalMetaTags,h=e.titleTemplate,m=e.defaultTitle,y=e.mobileAlternate,v=e.languageAlternates,g=e.additionalLinkTags;return n.createElement(n.Fragment,null,n.createElement(d,{title:t,themeColor:r,noindex:o,nofollow:i,robotsProps:a,description:l,canonical:u,facebook:c,openGraph:s,additionalMetaTags:f,twitter:p,titleTemplate:h,defaultTitle:m,mobileAlternate:y,languageAlternates:v,additionalLinkTags:g}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},1277:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return p}});var r,n,o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",s="fast-refresh",c="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1592:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(694),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8945:function(e,t,r){"use strict";var n=r(968),o=r(3171),i=r(7069),a=["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});var s=r(8754),c=r(5893),p=s._(r(7294)),f=r(7597),d=r(664),h=r(4897),m=r(9090),y=r(6782),v=r(7318),g=r(5162),b=r(804),_=r(1592),k=r(5182),O=r(1277),S=new Set;function E(e,t,r,n,o,i){if(i||(0,d.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(S.has(a))return;S.add(a)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(function(e){})}}function G(e){return"string"==typeof e?e:(0,h.formatUrl)(e)}var w=p.default.forwardRef(function(e,t){var r,n,l=e.href,s=e.as,h=e.children,S=e.prefetch,w=void 0===S?null:S,j=e.passHref,T=e.replace,x=e.shallow,P=e.scroll,C=e.locale,A=e.onClick,R=e.onMouseEnter,I=e.onTouchStart,M=e.legacyBehavior,F=void 0!==M&&M,z=i(e,a);r=h,F&&("string"==typeof r||"number"==typeof r)&&(r=(0,c.jsx)("a",{children:r}));var L=p.default.useContext(v.RouterContext),N=p.default.useContext(g.AppRouterContext),H=null!=L?L:N,U=!L,D=!1!==w,V=null===w?O.PrefetchKind.AUTO:O.PrefetchKind.FULL,W=p.default.useMemo(function(){if(!L){var e=G(l);return{href:e,as:s?G(s):e}}var t=o((0,f.resolveHref)(L,l,!0),2),r=t[0],n=t[1];return{href:r,as:s?(0,f.resolveHref)(L,s):n||r}},[L,l,s]),q=W.href,B=W.as,K=p.default.useRef(q),$=p.default.useRef(B);F&&(n=p.default.Children.only(r));var Q=F?n&&"object"==typeof n&&n.ref:t,Y=o((0,b.useIntersection)({rootMargin:"200px"}),3),J=Y[0],X=Y[1],Z=Y[2],ee=p.default.useCallback(function(e){($.current!==B||K.current!==q)&&(Z(),$.current=B,K.current=q),J(e),Q&&("function"==typeof Q?Q(e):"object"==typeof Q&&(Q.current=e))},[B,Q,q,Z,J]);p.default.useEffect(function(){H&&X&&D&&E(H,q,B,{locale:C},{kind:V},U)},[B,q,X,C,D,null==L?void 0:L.locale,H,U,V]);var et={ref:ee,onClick:function(e){F||"function"!=typeof A||A(e),F&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,l,u){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((s=e.currentTarget.getAttribute("target"))&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!u&&!(0,d.isLocalURL)(r)))){e.preventDefault();var s,c=function(){var e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};u?p.default.startTransition(c):c()}}(e,H,q,B,T,x,P,C,U)},onMouseEnter:function(e){F||"function"!=typeof R||R(e),F&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),H&&(D||!U)&&E(H,q,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:V},U)},onTouchStart:function(e){F||"function"!=typeof I||I(e),F&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),H&&(D||!U)&&E(H,q,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:V},U)}};if((0,m.isAbsoluteUrl)(B))et.href=B;else if(!F||j||"a"===n.type&&!("href"in n.props)){var er=void 0!==C?C:null==L?void 0:L.locale,en=(null==L?void 0:L.isLocaleDomain)&&(0,_.getDomainLocale)(B,er,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);et.href=en||(0,k.addBasePath)((0,y.addLocale)(B,er,null==L?void 0:L.defaultLocale))}return F?p.default.cloneElement(n,et):(0,c.jsx)("a",u(u(u({},z),et),{},{children:r}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},804:function(e,t,r){"use strict";var n=r(3171);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});var o=r(7294),i=r(2310),a="function"==typeof IntersectionObserver,l=new Map,u=[];function s(e){var t=e.rootRef,r=e.rootMargin,s=e.disabled||!a,c=n((0,o.useState)(!1),2),p=c[0],f=c[1],d=(0,o.useRef)(null),h=(0,o.useCallback)(function(e){d.current=e},[]);return(0,o.useEffect)(function(){if(a){if(!s&&!p){var e,n,o,c,h=d.current;if(h&&h.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(c=e.elements).set(h,function(e){return e&&f(e)}),o.observe(h),function(){if(c.delete(h),o.unobserve(h),0===c.size){o.disconnect(),l.delete(n);var e=u.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&u.splice(e,1)}}}}else if(!p){var m=(0,i.requestIdleCallback)(function(){return f(!0)});return function(){return(0,i.cancelIdleCallback)(m)}}},[s,r,t,p,d.current]),[h,p,(0,o.useCallback)(function(){f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8925:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(8754)._(r(7294)).default.createContext({})},6452:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},90:function(e,t,r){"use strict";var n=r(968);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return v}});var i=r(8754),a=r(1757),l=r(5893),u=a._(r(7294)),s=i._(r(6807)),c=r(8925),p=r(1295),f=r(6452);function d(e){void 0===e&&(e=!1);var t=[(0,l.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,l.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(3696);var m=["name","httpEquiv","charSet","itemProp"];function y(e,t){var r,i,a,l,s=t.inAmpMode;return e.reduce(h,[]).reverse().concat(d(s).reverse()).filter((r=new Set,i=new Set,a=new Set,l={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var c=m[u];if(e.props.hasOwnProperty(c)){if("charSet"===c)a.has(c)?t=!1:a.add(c);else{var p=e.props[c],f=l[c]||new Set;("name"!==c||!n)&&f.has(p)?t=!1:(f.add(p),l[c]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!s&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,u.default.cloneElement(e,i)}return u.default.cloneElement(e,{key:r})})}var v=function(e){var t=e.children,r=(0,u.useContext)(c.AmpStateContext),n=(0,u.useContext)(p.HeadManagerContext);return(0,l.jsx)(s.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(7294),o=n.useLayoutEffect,i=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},3696:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}},4320:function(e,t,r){var n=r(3454);r(1479);var o=r(7294),i=o&&"object"==typeof o&&"default"in o?o:{default:o};function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=void 0!==n&&n.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,i=void 0===o?l:o;c(u(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a=document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return l||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){l||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];c(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return r?o.insertBefore(n,r):o.appendChild(n),n},a(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&a(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var p=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},f={};function d(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return f[n]||(f[n]="jsx-"+p(e+"-"+r)),f[n]}function h(e,t){var r=e+t;return f[r]||(f[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=n||new s({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),n&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=i,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var o=d(n,r);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return h(o,e)}):[h(o,t)]}}return{styleId:d(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),y=o.createContext(null);y.displayName="StyleSheetContext";var v=i.default.useInsertionEffect||i.default.useLayoutEffect,g=new m;function b(e){var t=g||o.useContext(y);return t&&v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}b.dynamic=function(e){return e.map(function(e){return d(e[0],e[1])}).join(" ")},t.style=b},4254:function(e,t,r){e.exports=r(4320).style},3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},1479:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u=[],s=!1,c=-1;function p(){s&&n&&(s=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!s){var e=l(p);s=!0;for(var t=u.length;t;){for(n=u,u=[];++c<t;)n&&n[c].run();c=-1,t=u.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||s||l(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},9008:function(e,t,r){e.exports=r(90)},1664:function(e,t,r){e.exports=r(8945)},1163:function(e,t,r){e.exports=r(4285)},3967:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}}]);