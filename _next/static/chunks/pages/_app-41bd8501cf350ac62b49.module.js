(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("lB6z"),n("VxdY"),n("8Kt/")),c=n.n(o),i=n("t4m3"),l=a.a.createElement;t.default=function(e){var{Component:t,pageProps:n}=e;return a.a.useEffect(()=>{!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof document){var n=document.createElement("script");n.async=!0,n.defer=!0,Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n.src=e,document.body.appendChild(n)}}("https://buttons.github.io/buttons.js")},[]),l(a.a.Fragment,null,l(c.a,null,l("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"}),l("style",{dangerouslySetInnerHTML:{__html:"\n        @media (max-width: 390px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          @media (max-height: 740px) {\n            .formkit-slide-in {\n              display: none;\n            }\n          }\n          "}})),l(i.a,null,l(t,n)))}},VxdY:function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("7KCV");t.__esModule=!0,t.default=void 0;var a,o=r(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=new Map,s=window.IntersectionObserver,u={};var f=(e,t)=>{var n=a||(s?a=new s(e=>{e.forEach(e=>{if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),l.delete(e.target),t())}})},{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),()=>{try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):()=>{}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch(e=>{0}),u[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,[n,r]=o.default.useState(),a=(0,i.useRouter)(),l=a&&a.pathname||"/",{href:d,as:h}=o.default.useMemo(()=>{var t=(0,c.resolveHref)(l,e.href);return{href:t,as:e.as?(0,c.resolveHref)(l,e.as):t}},[l,e.href,e.as]);o.default.useEffect(()=>{if(t&&s&&n&&n.tagName&&(0,c.isLocalURL)(d)&&!u[d+"%"+h])return f(n,()=>{p(a,d,h)})},[t,n,d,h,a]);var{children:v,replace:y,shallow:g,scroll:m}=e;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=o.Children.only(v),w={ref:e=>{e&&r(e),b&&"object"===typeof b&&b.ref&&("function"===typeof b.ref?b.ref(e):"object"===typeof b.ref&&(b.ref.current=e))},onClick:e=>{b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){var{nodeName:l}=e.currentTarget;("A"!==l||!function(e){var{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then(e=>{e&&i&&(window.scrollTo(0,0),document.body.focus())}))}(e,a,d,h,y,g,m)}};return t&&(w.onMouseEnter=e=>{(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),p(a,d,h,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(w.href=(0,c.addBasePath)(h)),o.default.cloneElement(b,w)};t.default=d},lB6z:function(e,t,n){},mrum:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={editUrl:"https://github.com/tannerlinsley/react-query/edit/master/docs/src/pages",copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Tanner Linsley. All Rights Reserved."),repoUrl:"https://github.com/tannerlinsley/react-query",algolia:{appId:"BH4D9OD16A",apiKey:"c97369bb0f67e99c8acf34bfd732cca7",indexName:"tanstack_react-query"}}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},t4m3:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return O}));var r=n("wx14"),a=n("rePB"),o=n("q1tI"),c=n.n(o),i=n("i8i4"),l=n("nOHt"),s=n.n(l),u=n("8Kt/"),f=n.n(u),p=n("YFqc"),d=n.n(p);var h=n("mrum"),v=c.a.createElement;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=c.a.createContext(),b=null,w=()=>c.a.useContext(m);function O(e){var{children:t,searchParameters:a={hitsPerPage:5}}=e,[o,l]=c.a.useState(!1),u=c.a.useCallback((function(){(b?Promise.resolve():n.e(18).then(n.bind(null,"m3sE")).then(e=>{var{DocSearchModal:t}=e;return b=t})).then(()=>{l(!0)})}),[]),p=c.a.useCallback(()=>l(!1),[]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose;c.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey))&&(e.preventDefault(),t?r():n())}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r])}({isOpen:o,onOpen:u,onClose:p});var d={appId:h.a.algolia.appId,apiKey:h.a.algolia.apiKey,indexName:h.a.algolia.indexName,renderModal:!0};return v(c.a.Fragment,null,v(f.a,null,v("link",{key:"algolia",rel:"preconnect",href:"https://".concat(d.appId,"-dsn.algolia.net"),crossOrigin:"true"})),v(m.Provider,{value:{DocSearchModal:b,onOpen:u}},t),o&&Object(i.createPortal)(v(b,Object(r.a)({},d,{searchParameters:a,onClose:p,navigator:{navigate(e){var{suggestionUrl:t}=e;s.a.push(t)}},transformItems:e=>e.map(e=>{var t=new URL(e.url);return g(g({},e),{},{url:e.url.replace(t.origin,"").replace("#__next","").replace("/docs/#","/docs/overview#")})}),hitComponent:E})),document.body))}function E(e){var{hit:t,children:n}=e;return v(d.a,{href:t.url.replace()},v("a",null,n))}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[[0,0,2,1]]]);