(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{4577:function(e,t,r){"use strict";var i,o,n=Object.create,a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,c=(e,t,r,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of s(t))d.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(i=l(t,o))||i.enumerable});return e},f=(e,t,r)=>(r=null!=e?n(u(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>x}),e.exports=c(a({},"__esModule",{value:!0}),p);var g=f(r(2555)),m=f(r(7294)),h=e=>"string"==typeof e?e:void 0!==e.default?e.default.src:e.src,v=["jpeg","jpg","png","webp","avif"],b=e=>v.some(t=>t===e),w=e=>{let t=e.split(/\.([^.]*$)/)[0],r=(e.split(/\.([^.]*$)/)[1]||"").split("?")[0];if(!t||!r)throw Error(`Invalid path or no file extension: ${e}`);let i=t.split("/").slice(0,-1).join("/"),o=t.split("/").slice(-1).toString();return e.startsWith("http")&&(i=i.replace(/^https?:\/\//,"").split("/").slice(1).join("/")),{pathWithoutName:i,name:o,extension:r}},y=({src:e,width:t,config:r})=>{let i=e;void 0!==r.basePath&&(i=e.replace(r.basePath,""));let o=r.sourceImageParser?r.sourceImageParser({src:i,defaultParser:w}):w(i),{extension:n}=o,{pathWithoutName:a,name:l,extension:s}=o;if(void 0!==r.convertFormat){let e=r.convertFormat.find(([e])=>e===n);if(void 0!==e){if(!b(e[0]))throw Error(`Unauthorized format specified in \`configFormat\`. beforeConvert: ${e[0]}`);if(!b(e[1]))throw Error(`Unauthorized format specified in \`configFormat\`. afterConvert: ${e[1]}`);n=e[1]}}let u=`/${r.imageDir?r.imageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/chunks/images"}`,d=`${r.externalImageDir?r.externalImageDir.replace(/^\//,"").replace(/\/$/,""):"_next/static/media"}`,c=[...new Set([...r.generateFormats??["webp"],n])];return c.map((e,o)=>{if(c.length!==o+1&&!b(e))throw Error(`Unauthorized extension specified in \`generateFormats\`: ${e}`);let n=void 0!==r.filenameGenerator?r.filenameGenerator({path:a,name:l,width:t,extension:e}):`${a}/${l}_${t}.${e}`,f=`${u}/${n.replace(/^\//,"")}`;return{output:f,src:i,extension:e,originalExtension:s,externalOutputDir:d}})},_=r(3370),j=e=>({src:t,width:r})=>{let i=y({src:t,width:r,config:_}).at(e??-1);if(void 0===i)throw Error(`No output info found for ${t}`);return`${_.basePath??""}${i.output}`};i=r(2555),o=e.exports,c(p,i,"default"),o&&c(o,i,"default");var x=(0,m.forwardRef)((e,t)=>{let r=h(e.src);return m.default.createElement(g.default,{...e,ref:t,loader:e.loader||j(),blurDataURL:e.blurDataURL||("string"==typeof e.src&&"blur"===e.placeholder&&void 0===e.loader?j()({src:e.src,width:8,quality:10}):void 0),unoptimized:void 0!==e.unoptimized?e.unoptimized:r.endsWith(".svg")})})},3370:function(e){e.exports={}},1754:function(e,t,r){e.exports=r(4577)},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(8754),o=r(1757),n=o._(r(7294)),a=r(3935),l=i._(r(2636)),s=r(5471),u=r(3735),d=r(3341);r(4210);let c=r(9955),f=i._(r(7746)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,o,n){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=n.version.split("."),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:a,width:l,decoding:s,className:u,style:d,fetchPriority:c,placeholder:f,loading:p,unoptimized:h,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:_,onLoad:j,onError:x,...P}=e;return n.default.createElement("img",{...P,...m(c),loading:p,width:l,height:a,decoding:s,"data-nimg":v?"fill":"1",className:u,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,f,b,w,y,h))},[r,f,b,w,y,x,h,t]),onLoad:e=>{let t=e.currentTarget;g(t,f,b,w,y,h)},onError:e=>{_(!0),"blur"===f&&y(!0),x&&x(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t?((0,a.preload)(r.src,i),null):n.default.createElement(l.default,null,n.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let b=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(c.RouterContext),i=(0,n.useContext)(d.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=p||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,g=(0,n.useRef)(a);(0,n.useEffect)(()=>{g.current=a},[a]);let m=(0,n.useRef)(l);(0,n.useEffect)(()=>{m.current=l},[l]);let[b,w]=(0,n.useState)(!1),[y,_]=(0,n.useState)(!1),{props:j,meta:x}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:b,showAltText:y});return n.default.createElement(n.default.Fragment,null,n.default.createElement(h,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:_,ref:t}),x.priority?n.default.createElement(v,{isAppRouter:!r,imgAttributes:j}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(4210);let i=r(7757),o=r(3735);function n(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:v,height:b,fill:w=!1,style:y,onLoad:_,onLoadingComplete:j,placeholder:x="empty",blurDataURL:P,fetchPriority:S,layout:E,objectFit:z,objectPosition:C,lazyBoundary:O,lazyRoot:I,...R}=e,{imgConf:$,showAltText:k,blurComplete:M,defaultLoader:D}=t,A=$||o.imageConfigDefault;if("allSizes"in A)l=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);l={...A,allSizes:e,deviceSizes:t}}let F=R.loader||D;delete R.loader,delete R.srcSet;let N="__next_img_default"in F;if(N){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let W="",L=a(v),U=a(b);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,P=P||e.blurDataURL,W=e.src,!w){if(L||U){if(L&&!U){let t=L/e.width;U=Math.round(e.height*t)}else if(!L&&U){let t=U/e.height;L=Math.round(e.width*t)}}else L=e.width,U=e.height}}let G=!p&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),l.unoptimized&&(f=!0),N&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(S="high");let B=a(h),T=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:C}:{},k?{}:{color:"transparent"},y),V="blur"===x&&P&&!M?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:U,blurWidth:s,blurHeight:u,blurDataURL:P,objectFit:T.objectFit})+'")'}:{},q=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:n,width:s[d]})}}({config:l,src:d,unoptimized:f,width:L,quality:B,sizes:c,loader:F}),J={...R,loading:G?"lazy":g,fetchPriority:S,width:L,height:U,decoding:"async",className:m,style:{...T,...V},sizes:q.sizes,srcSet:q.srcSet,src:q.src},Y={unoptimized:f,priority:p,placeholder:x,fill:w};return{props:J,meta:Y}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=i||t,s=o||r,u=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(i&&o?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let i=r(8754),o=r(5471),n=r(4210),a=r(8872),l=i._(r(7746)),s=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=a.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r}}]);