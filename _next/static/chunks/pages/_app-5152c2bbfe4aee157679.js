_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("lB6z"),n("VxdY"),n("8Kt/")),i=n.n(a),c=n("t4m3"),u=o.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps;return o.a.useEffect((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof document){var n=document.createElement("script");n.async=!0,n.defer=!0,Object.keys(t).forEach((function(e){return n.setAttribute(e,t[e])})),n.src=e,document.body.appendChild(n)}}("https://buttons.github.io/buttons.js")}),[]),u(o.a.Fragment,null,u(i.a,null,u("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),u("style",{dangerouslySetInnerHTML:{__html:"\n        @media (max-width: 390px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          @media (max-height: 740px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          "}})),u(c.a,null,u(t,n)))}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},VxdY:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),u=n("nOHt"),l=new Map,s=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var y=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],l=o[1],y=(0,u.useRouter)(),h=y&&y.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href);return{href:t,as:e.as?(0,c.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),m=v.href,b=v.as;i.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,c.isLocalURL)(m)&&!f[m+"%"+b])return p(a,(function(){d(y,m,b)}))}),[t,a,m,b,y]);var g=e.children,O=e.replace,w=e.shallow,j=e.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var E=i.Children.only(g),P={ref:function(e){e&&l(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,y,m,b,O,w,j)}};return t&&(P.onMouseEnter=function(e){(0,c.isLocalURL)(m)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),d(y,m,b,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(P.href=(0,c.addBasePath)(b)),i.default.cloneElement(E,P)};t.default=y},lB6z:function(e,t,n){},mrum:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={editUrl:"https://github.com/tannerlinsley/react-query/edit/master/docs/src/pages",copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Tanner Linsley. All Rights Reserved."),repoUrl:"https://github.com/tannerlinsley/react-query",algolia:{appId:"BH4D9OD16A",apiKey:"c97369bb0f67e99c8acf34bfd732cca7",indexName:"tanstack_react-query"}}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},t4m3:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return j}));var r=n("wx14"),o=n("rePB"),a=n("ODXe"),i=n("q1tI"),c=n.n(i),u=n("i8i4"),l=n("nOHt"),s=n.n(l),f=n("8Kt/"),p=n.n(f),d=n("YFqc"),y=n.n(d);var h=n("mrum"),v=c.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=c.a.createContext(),O=null,w=function(){return c.a.useContext(g)};function j(e){var t=e.children,o=e.searchParameters,i=void 0===o?{hitsPerPage:5}:o,l=c.a.useState(!1),f=Object(a.a)(l,2),d=f[0],y=f[1],m=c.a.useCallback((function(){(O?Promise.resolve():n.e(18).then(n.bind(null,"m3sE")).then((function(e){var t=e.DocSearchModal;return O=t}))).then((function(){y(!0)}))}),[]),w=c.a.useCallback((function(){return y(!1)}),[]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey))&&(e.preventDefault(),t?r():n())}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r])}({isOpen:d,onOpen:m,onClose:w});var j={appId:h.a.algolia.appId,apiKey:h.a.algolia.apiKey,indexName:h.a.algolia.indexName,renderModal:!0};return v(c.a.Fragment,null,v(p.a,null,v("link",{key:"algolia",rel:"preconnect",href:"https://".concat(j.appId,"-dsn.algolia.net"),crossOrigin:"true"})),v(g.Provider,{value:{DocSearchModal:O,onOpen:m}},t),d&&Object(u.createPortal)(v(O,Object(r.a)({},j,{searchParameters:i,onClose:w,navigator:{navigate:function(e){var t=e.suggestionUrl;s.a.push(t)}},transformItems:function(e){return e.map((function(e){var t=new URL(e.url);return b(b({},e),{},{url:e.url.replace(t.origin,"").replace("#__next","").replace("/docs/#","/docs/overview#")})}))},hitComponent:E})),document.body))}function E(e){var t=e.hit,n=e.children;return v(y.a,{href:t.url.replace()},v("a",null,n))}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[[0,0,2,1]]]);