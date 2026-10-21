import{o as e}from"./chunk-SurKiIAj.js";import{E as t,O as n,b as r}from"./chunk-B910qiNY.js";import{t as i}from"./chunk-CqxD-R0F.js";var a=e(n(),1),o=t();i();var s=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`,c=[16,32,48,64,96,128,256,384],l=[640,750,828,1080,1200,1920,2048,3840],u=[...c,...l],d=(e,t)=>{if(t){let e=/(^|\s)(1?\d?\d)vw/g,n=[];for(let r;r=e.exec(t);)n.push(Number.parseInt(r[2],10));if(n.length){let e=Math.min(...n)*.01;return{widths:u.filter(t=>t>=l[0]*e),kind:`w`}}return{widths:u,kind:`w`}}if(e==null)return{widths:l,kind:`w`};let n=u.findIndex(t=>t>=2*e);return n=n<0?u.length:n,{widths:u.slice(0,n+1),kind:`w`}},f=({src:e,width:t,quality:n,sizes:r,loader:i})=>{let{widths:a,kind:o}=d(t,r);return{sizes:!r&&o===`w`?`100vw`:r,srcSet:a.map((t,r)=>`${i({src:e,quality:n,width:t})} ${o===`w`?t:r+1}${o}`).join(`, `),src:i({src:e,quality:n,width:a[a.length-1]})}},p=e=>{if(typeof e==`number`)return Math.round(e);if(typeof e==`string`){let t=Number.parseFloat(e);if(!Number.isNaN(t))return Math.round(t)}},m=`(min-width: 1280px) 50vw, 100vw`,h=80,g=e=>{try{return new URL(e),!0}catch{return!1}},_=e=>{let t=p(e.width),n=Math.max(Math.min(p(e.quality)??h,100),0);if(e.src!=null&&e.src!==``){if(e.src.startsWith(`data:`))return{src:e.src};if(e.srcSet==null&&e.optimize){let r=e.sizes??(e.width==null?m:void 0);return f({src:e.src,width:t,quality:n,sizes:r,loader:e.loader})}let r={src:g(e.src)?e.src:e.loader({src:e.src,format:`raw`})};return e.srcSet!=null&&(r.srcSet=e.srcSet),e.sizes!=null&&(r.sizes=e.sizes),r}},v=({quality:e,loader:t,optimize:n=!0,loading:r=`lazy`,decoding:i=`async`,...a})=>{let o=_({src:a.src,srcSet:a.srcSet,sizes:a.sizes,width:a.width,quality:e,loader:t,optimize:n})??{src:s};return{alt:``,...a.alt===void 0?{}:{alt:a.alt},...a.width===void 0?{}:{width:a.width},...a.height===void 0?{}:{height:a.height},...o,decoding:i,loading:r}},y=({props:e,imageLoader:t,renderer:n})=>{let{loading:r=`lazy`,width:i,height:a,optimize:o=!0,decoding:s,quality:c,$webstudio$canvasOnly$assetId:l,alt:u,sizes:d,srcSet:f,src:p,...m}=e,h=String(p??``),g=h;return n===`canvas`&&(r=`eager`,s=`sync`,g=l??h,i!==void 0&&a!==void 0&&Number.isNaN(i)&&Number.isNaN(a)&&(o=!1,i=void 0,a=void 0)),{key:g,imageProps:{...m,...v({alt:u,width:i,height:a,sizes:d,src:h,srcSet:f,quality:c,loader:t,optimize:o,loading:r,decoding:s})}}},b=(0,a.forwardRef)((e,t)=>{let{imageLoader:n,renderer:i}=(0,a.useContext)(r),{key:s,imageProps:c}=y({props:e,imageLoader:n,renderer:i});return(0,o.jsx)(`img`,{...c,ref:t},s)});b.displayName=`Image`;export{b as t};