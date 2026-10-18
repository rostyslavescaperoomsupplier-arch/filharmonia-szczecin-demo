import{t as e}from"./sheet-swipe.BOZAXUFD.js";import{n as t}from"./icons.CKfF9Q1l.js";var n=`fs-cart`,r=[];function i(){try{let e=JSON.parse(localStorage.getItem(`fs-cart`)||`null`),t=Array.isArray(e)?e:e?.lines;Array.isArray(t)&&(r=t.filter(e=>e&&typeof e.id==`string`&&Number.isFinite(e.qty)&&e.qty>0).map(e=>({...e,qty:Math.min(10,Math.floor(e.qty))})))}catch{}return r.map(e=>({...e}))}function a(e){r=e;try{localStorage.setItem(n,JSON.stringify({v:1,lines:e}))}catch{}window.dispatchEvent(new CustomEvent(`fs-cart`,{detail:{count:o(e)}}))}var o=e=>e.reduce((e,t)=>e+t.qty,0);function s(e){let t=i(),n=e.amount!=null,r=e.key??(n?`${e.id}:${Date.now().toString(36)}${Math.random().toString(36).slice(2,5)}`:e.id),o=t.find(e=>e.key===r);return o&&!n?o.qty=Math.min(10,o.qty+e.qty):o?Object.assign(o,e,{key:r}):t.push({...e,key:r,qty:Math.min(10,e.qty)}),a(t),r}function c(e,t){let n=i(),r=n.find(t=>t.key===e);r&&(r.qty=Math.max(1,Math.min(10,Math.floor(t))),a(n))}function l(e){let t=i(),n=t.findIndex(t=>t.key===e);if(n<0)return null;let[r]=t.splice(n,1);return a(t),{line:r,index:n}}function u(e,t){let n=i();n.splice(Math.min(t,n.length),0,e),a(n)}function d(){a([])}function f(e){window.addEventListener(`fs-cart`,e),window.addEventListener(`storage`,t=>{(t.key===`fs-cart`||t.key===null)&&e()})}var p={pl:`pl-PL`,en:`en-GB`,de:`de-DE`,uk:`uk-UA`};function m(e,t){let n=Math.round(e*100)%100==0;return new Intl.NumberFormat(p[t],{minimumFractionDigits:n?0:2,maximumFractionDigits:2}).format(e)+`\xA0zł`}var h=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function g(e,t,n,r,i){let a=n/i,o=`M${e} ${t}`;for(let n=0;n<i;n++){let i=e+a*n+a/2;o+=`L${(i+a*.08).toFixed(1)} ${(t-r*(n%2?.86:1)).toFixed(1)}L${(e+a*(n+1)).toFixed(1)} ${t}`}return o}function _(e,t,n,r,i,a=`sa-line`){let o=n/i;return Array.from({length:i+1},(n,i)=>`<path class="${a}" d="M${(e+o*i).toFixed(1)} ${t}v${r}"/>`).join(``)}var v=(e,t,n,r,i,a,o=`sa-line`,s=`sa-face`)=>`<path class="${s}" d="${g(e,t,n,r,a)}V${t+i}H${e}Z"/><path class="${o}" d="${g(e,t,n,r,a)}"/>`+_(e,t,n,i,a*2,o+` sa-thin`),y=(e,t,n)=>`<ellipse class="sa-shadow" cx="${e}" cy="${t}" rx="${n}" ry="${(n*.09).toFixed(1)}"/>`,b=(e,t,n,r,i=`sa-text`,a=`start`,o=.14)=>`<text class="${i}" x="${e}" y="${t}" font-size="${r}" letter-spacing="${o}em" text-anchor="${a}">${h(n)}</text>`;function x(e,t,n){let r=(r,i)=>`${(e+r*n).toFixed(1)} ${(t+i*n).toFixed(1)}`;return`
  <path class="sa-gull-body" d="M${r(-58,10)}C${r(-40,-6)} ${r(-18,-14)} ${r(4,-14)}C${r(18,-14)} ${r(22,-30)} ${r(30,-36)}C${r(42,-46)} ${r(60,-40)} ${r(60,-26)}C${r(60,-16)} ${r(52,-10)} ${r(46,-4)}C${r(52,12)} ${r(40,34)} ${r(14,38)}C${r(-12,42)} ${r(-40,30)} ${r(-58,10)}Z"/>
  <path class="sa-gull-wing" d="M${r(-44,8)}C${r(-24,0)} ${r(0,-2)} ${r(22,6)}C${r(10,20)} ${r(-18,26)} ${r(-44,8)}Z"/>
  <path class="sa-gull-beak" d="M${r(58,-24)}L${r(80,-20)}L${r(58,-15)}Z"/>
  <rect class="sa-gull-eye" x="${(e+44*n).toFixed(1)}" y="${(t-30*n).toFixed(1)}" width="${(4.5*n).toFixed(1)}" height="${(4.5*n).toFixed(1)}"/>
  <path class="sa-hat" d="M${r(28,-46)}L${r(62,-50)}L${r(62,-46)}L${r(28,-42)}Z"/>
  <path class="sa-hat" d="M${r(34,-46)}L${r(36,-82)}L${r(56,-84)}L${r(57,-49)}Z"/>
  <path class="sa-gold-fill" d="M${r(34.6,-54)}L${r(56.6,-56.5)}L${r(56.8,-51)}L${r(34.4,-48.6)}Z"/>
  <path class="sa-line" d="M${r(-6,38)}V${r(-6,54).split(` `)[1]}M${r(10,38)}V${r(10,54).split(` `)[1]}"/>`}function S(e){let t=e.tone===`dark`,n=e.tone===`gold`,r=t?`sa-deep`:n?`sa-goldface`:`sa-face`,i=t?`sa-line-inv`:`sa-line`,a=t?`sa-text-inv`:`sa-text`;return`${y(120,206,92)}
  <circle class="sa-disc" cx="152" cy="112" r="70"/><circle class="sa-line sa-thin" cx="152" cy="112" r="46"/><circle class="sa-bg-fill sa-line" cx="152" cy="112" r="11"/>
  <rect class="${r} sa-line" x="34" y="40" width="150" height="150"/>
  <path class="${i} sa-thin" d="M44 40v150"/>
  <g>${v(56,150,116,32,30,6,i,t?`sa-deep`:r)}</g>
  <path class="sa-gold" d="M56 180h116"/>
  ${b(56,68,e.label??``,e.label&&e.label.length>10?10:12,a+` sa-bold`)}
  ${e.sub?b(56,84,e.sub,8,a):``}`}function C(e){let t=e.tone===`dark`,n=t?`sa-deep`:`sa-face`,r=t?`sa-line-inv`:`sa-line`;return`${y(118,212,100)}
  <circle class="sa-vinyl" cx="160" cy="118" r="84"/>
  ${[70,58,46,34].map(e=>`<circle class="sa-groove" cx="160" cy="118" r="${e}"/>`).join(``)}
  <circle class="sa-gold-fill" cx="160" cy="118" r="22"/><circle class="sa-bg-fill" cx="160" cy="118" r="3"/>
  <rect class="${n} sa-line" x="22" y="30" width="176" height="176"/>
  ${v(38,168,144,46,38,7,r,n)}
  <path class="sa-gold" d="M38 54h40"/>
  ${b(38,76,e.label??``,12,(t?`sa-text-inv`:`sa-text`)+` sa-bold`,`start`,.2)}`}function w(e){let t=Array.from({length:6},(e,t)=>`<rect class="${t%2?`sa-deep`:`sa-face`} sa-line" x="${150+t*9}" y="70" width="9" height="122"/>`).join(``);return`${y(120,206,100)}
  <rect class="sa-deep sa-line-inv" x="34" y="52" width="114" height="146"/>
  ${v(46,176,90,24,16,5,`sa-line-inv`,`sa-deep`)}
  ${b(46,84,e.label??``,13,`sa-text-inv sa-bold`)}
  ${b(46,100,e.sub??``,8,`sa-text-inv`)}
  <path class="sa-gold" d="M46 112h40"/>
  ${t}
  <rect class="sa-face sa-line" x="70" y="150" width="72" height="48" transform="rotate(-6 106 174)"/>`}function T(e){let t=e.tone===`dark`,n=e.tone===`gold`,r=t?`sa-deep`:n?`sa-goldface`:`sa-face`,i=t?`sa-line-inv`:`sa-line`,a=t?`sa-text-inv`:`sa-text`;return`${y(124,212,84)}
  <path class="sa-face sa-line" d="M62 34h118v172H62Z" transform="translate(10 4)"/>
  <path class="sa-line sa-thin" d="M76 204h114M76 200h114M76 196h114" />
  <rect class="${r} sa-line" x="56" y="30" width="122" height="172"/>
  <path class="${i}" d="M66 30v172"/>
  ${v(80,168,86,34,22,5,i,r)}
  ${b(80,70,e.label??``,(e.label??``).length>8?12:18,a+` sa-bold`,`start`,.06)}
  ${b(80,86,e.sub??``,8,a)}
  <path class="sa-gold" d="M80 98h32"/>`}function E(e){let t=e.tone===`dark`;return`${y(120,206,86)}
  <rect class="${t?`sa-deep`:`sa-face`} sa-line" x="44" y="44" width="152" height="152"/>
  <path class="${t?`sa-line-inv`:`sa-line`}" d="M44 52h152M44 188h152" />
  ${t?`<path class="sa-face" d="M70 168 92 118l22 50 22-50 22 50 22-50v58H70Z"/><path class="sa-gold" d="M150 74l28-18"/><rect class="sa-gold-fill" x="146" y="72" width="8" height="8"/>`:`<path class="sa-goldface" d="M70 168 92 118l22 50 22-50 22 50 22-50v58H70Z"/><path class="sa-line" d="M70 168 92 118l22 50 22-50 22 50 22-50"/>`}
  ${b(64,84,e.label??``,11,(t?`sa-text-inv`:`sa-text`)+` sa-bold`)}
  ${b(64,98,e.sub??``,9,t?`sa-text-inv`:`sa-text`)}`}function D(){let e=Array.from({length:5},(e,t)=>{let n=26+t*38,r=t%2==0;return`<path class="${t===2?`sa-goldface`:`sa-face`} sa-line" d="M${n} ${r?64:72}L${n+38} ${r?72:64}V${r?186:178}L${n} ${r?178:186}Z"/>`}).join(``);return`${y(120,206,104)}${e}<path class="sa-line" d="M70 120h20M108 104v30M146 126h22"/><rect class="sa-ink-fill" x="104" y="130" width="8" height="8"/><rect class="sa-ink-fill" x="164" y="122" width="8" height="8"/><path class="sa-gold" d="M40 160h28"/><text class="sa-text sa-bold" x="40" y="96" font-size="18">7</text>`}function O(){return`${y(120,206,98)}
  <rect class="sa-face sa-line" x="28" y="56" width="184" height="134"/>
  ${v(48,160,92,40,30,4)}
  <path class="sa-line" d="M160 190V92l26-18M160 92h34M186 74v40"/>
  <path class="sa-gold" d="M196 112v14"/>
  <path class="sa-goldface sa-line" d="M118 30h10v-7h9v7h10v11h7v9h-7v11h-29Z" transform="rotate(-12 134 44)"/>
  <path class="sa-bg-fill sa-line sa-dash" d="M112 100h30v28h-30Z"/>`}function k(){return`${y(120,210,100)}
  <path class="sa-deep sa-line-inv" d="M30 70 120 40l90 30-90 30Z"/>
  <path class="sa-deep-2 sa-line-inv" d="M30 70v86l90 30v-86Z"/>
  <path class="sa-deep sa-line-inv" d="M210 70v86l-90 30v-86Z"/>
  <path class="sa-gold" d="M120 52c10 0 14 8 8 14s-16 4-16-4 10-10 12-2-4 16-4 26 6 12 6 18-8 6-8 0"/>
  ${v(48,150,56,18,18,3,`sa-line-inv`,`sa-deep-2`)}`}function ee(){return`${y(120,210,82)}
  <path class="sa-line" d="M88 74c0-40 64-40 64 0M80 74c0-50 80-50 80 0" />
  <path class="sa-deep sa-line-inv" d="M50 74h140l-8 130H58Z"/>
  ${v(76,166,88,34,24,5,`sa-line-inv`,`sa-deep`)}
  <path class="sa-line-inv" d="M76 190h88"/>
  <rect class="sa-gold-fill" x="114" y="112" width="12" height="3"/>`}function te(){return`${y(120,210,52)}
  <path class="sa-deep sa-line-inv" d="M86 46h68l-6 160H92Z"/>
  <path class="sa-face sa-line" d="M82 34h76v16H82Z"/>
  <path class="sa-line" d="M100 34v-6h40v6"/>
  ${v(90,150,60,30,34,3,`sa-line-inv`,`sa-deep`)}
  <path class="sa-gold" d="M92 194h56"/>`}function ne(){return`${y(120,208,64)}
  <path class="sa-gold-fill sa-flame" d="M120 54c8 10 8 20 0 26-8-6-8-16 0-26Z"/>
  <path class="sa-line" d="M120 80v14"/>
  <rect class="sa-glass sa-line" x="70" y="94" width="100" height="110"/>
  <rect class="sa-wax" x="74" y="122" width="92" height="78"/>
  <rect class="sa-face sa-line" x="66" y="84" width="108" height="12"/>
  <rect class="sa-face sa-line" x="88" y="140" width="64" height="40"/>
  ${v(96,172,48,14,0,3)}
  <path class="sa-gold" d="M96 150h22"/>`}function A(){return`${y(120,208,92)}
  <rect class="sa-deep sa-line-inv" x="40" y="80" width="160" height="122"/>
  <path class="sa-face sa-line" d="M34 64h172v22H34Z"/>
  <path class="sa-gold-fill" d="M112 64h16v138h-16Z"/>
  <path class="sa-gold" d="M120 64c-16-28-40-24-34-8 4 8 20 8 34 8 14 0 30 0 34-8 6-16-18-20-34 8Z"/>
  ${v(54,182,46,22,14,3,`sa-line-inv`,`sa-deep`)}`}function j(){return`${y(120,210,80)}
  <rect class="sa-face sa-line" x="58" y="30" width="126" height="176"/>
  <path class="sa-line" d="M162 30v176" />
  <path class="sa-deep" d="M168 30h8v176h-8Z"/>
  ${v(76,132,70,30,34,4)}
  <path class="sa-gold" d="M76 182h40"/>`}function M(){return`${y(120,206,100)}
  <rect class="sa-face sa-line" x="24" y="96" width="176" height="104" transform="rotate(-7 112 148)"/>
  <rect class="sa-night sa-line-inv" x="40" y="44" width="176" height="116" transform="rotate(4 128 102)"/>
  <g transform="rotate(4 128 102)">
    <path class="sa-glow" d="${g(62,132,132,40,6)}"/>
    <path class="sa-line-inv sa-thin" d="${g(62,132,132,40,6)}V148H62Z"/>
    <rect class="sa-gold-fill" x="188" y="56" width="16" height="20"/>
  </g>`}function N(){return`${y(120,196,76)}
  <rect class="sa-face sa-line" x="44" y="58" width="152" height="124"/>
  <path class="sa-line" d="${g(62,140,116,40,6)}V160H62Z"/>
  ${_(62,140,116,20,12,`sa-line sa-thin`)}
  <path class="sa-gold" d="M62 168h50"/>
  <text class="sa-text" x="178" y="172" font-size="6" text-anchor="end" letter-spacing=".12em">FILHARMONIA.SZCZECIN.PL</text>`}function P(e){let t=e.label??`100`;return`${y(120,204,104)}
  <path class="sa-face sa-line" d="M26 120 120 172l94-52v78H26Z"/>
  <rect class="sa-deep sa-line-inv" x="40" y="44" width="160" height="104" transform="rotate(-4 120 96)"/>
  <g transform="rotate(-4 120 96)">
    <rect class="sa-gold-line" x="48" y="52" width="144" height="88"/>
    ${b(60,76,`BON`,9,`sa-text-inv sa-bold`,`start`,.3)}
    ${b(60,116,t,30,`sa-text-inv sa-num`,`start`,-.02)}
    ${b(180,116,`zł`,12,`sa-text-inv`,`end`,0)}
    <path class="sa-line-inv sa-thin" d="${g(60,132,120,10,8)}"/>
  </g>
  <path class="sa-face sa-line" d="M26 120v78h188v-78L120 186Z"/>`}function F(e){let t=Number(e.label??4),n=Array.from({length:t},(e,n)=>{let r=56+n*20,i=42+n*8;return`<path class="${n===t-1?`sa-deep sa-line-inv`:`sa-face sa-line`}" d="M${i} ${r}h150v20l-6 6 6 6v20H${i}v-20l6-6-6-6Z"/>`}).join(``),r=56+(t-1)*20,i=42+(t-1)*8;return`${y(124,210,96)}${n}
  <path class="sa-gold" d="M${i+112} ${r+6}v60"/>
  ${b(i+18,r+32,`${t}×`,22,`sa-text-inv sa-num`,`start`,0)}
  <path class="sa-line-inv sa-thin" d="${g(i+18,r+58,80,12,5)}"/>`}function I(){return`${y(120,210,70)}
  <path class="sa-face sa-line" d="M74 36h100v168H74Z" transform="rotate(5 124 120)"/>
  <rect class="sa-face sa-line" x="66" y="34" width="104" height="168"/>
  ${b(80,62,`PROGRAM`,9,`sa-text sa-bold`,`start`,.24)}
  <path class="sa-line sa-thin" d="M80 82h76M80 92h60M80 102h70M80 112h52"/>
  ${v(80,178,76,26,12,4)}
  <path class="sa-gold" d="M80 70h24"/>`}function L(){return`${y(120,206,78)}${x(112,140,1.15)}`}function R(){let e=(e,t,n)=>{let r=n*.4142;return`M${e-r} ${t-n}H${e+r}L${e+n} ${t-r}V${t+r}L${e+r} ${t+n}H${e-r}L${e-n} ${t+r}V${t-r}Z`};return`${y(120,206,74)}
  <path class="sa-gold-fill" d="${e(120,118,82)}"/>
  <path class="sa-deep" d="${e(120,118,74)}"/>
  <g class="sa-on-deep">${x(112,134,.82)}</g>`}var z={cd:S,lp:C,box:w,book:T,kidsbook:E,accordion:D,puzzle:O,boardgame:k,tote:ee,tumbler:te,candle:ne,giftbox:A,notebook:j,postcard:M,magnet:N,voucher:P,pass:F,programme:I,plush:L,pin:R};function B(e,t={}){let n=t.amount!=null&&e.type===`voucher`?{...e,label:String(t.amount)}:e,r=(z[e.type]??T)(n);return`<svg class="sa ${t.cls??``}" viewBox="0 0 240 240" aria-hidden="true" focusable="false">${r}</svg>`}var V=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),H=(e,t={})=>Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,String(n)),e??``);function U(){return JSON.parse(document.getElementById(`shop-data`)?.textContent||`{}`)}function W(e){let t=(t,n)=>H(e.S[t]??t,n);return{D:e,t,money:t=>m(t,e.lang),itemsLabel:n=>{let r=n===1?`items_1`:G(n,e.lang)?`items_few`:`items_many`;return t(r,{n})}}}function G(e,t){if(t!==`pl`&&t!==`uk`)return!1;let n=e%10,r=e%100;return n>=2&&n<=4&&(r<12||r>14)}function K(e){let t=document.getElementById(`shop-live`);t&&(t.textContent=``,setTimeout(()=>{t.textContent=e},40))}var q=(e,t)=>(e.amount??t?.price??0)*e.qty;function J(e,t){return e.some(e=>!t.D.items[e.id]?.digital)}function Y(e,t){return e.some(e=>t.D.items[e.id]?.pickupOnly)}function X(e,t,n=null){let r=e.reduce((e,n)=>e+q(n,t.D.items[n.id]),0),i=e.filter(e=>!t.D.items[e.id]?.digital).reduce((e,n)=>e+q(n,t.D.items[n.id]),0),a=n===`courier`&&J(e,t)?i>=t.D.freeFrom?0:t.D.courierFee:0;return{sub:r,fee:a,total:r+a}}var Z=null;function re(e,t){let n=[];e.forName&&n.push(`${V(t.t(`voucher_for`))}: ${V(e.forName)}`),n.push(e.sendTo===`recipient`&&e.recipientEmail?V(t.t(`to_email`,{email:e.recipientEmail})):V(t.t(`to_me`)));let r=e.dedication?`<p class="cl-ded">„${V(e.dedication)}”</p>`:``;return`<p class="cl-meta">${n.join(`, `)}</p>${r}`}function Q(e,n,r){let i=e.map(e=>{let i=n.D.items[e.id];if(!i)return``;let a=e.amount==null?i.name:`${i.name}, ${n.money(e.amount)}`,o=`<span class="cl-art">${B(i.art,{amount:e.amount})}</span>`,s=e.amount==null?`<p class="cl-meta">${V(i.meta)}</p>`:re(e,n),c=``;return r.editable?c=`<div class="cl-ctl">${e.amount==null?`<div class="qty" role="group" aria-label="${V(n.t(`qty`))}: ${V(i.name)}">
            <button type="button" class="qty-b" data-dec="${V(e.key)}" aria-label="${V(n.t(`dec`,{name:i.name}))}" ${e.qty<=1?`aria-disabled="true"`:``}>${t(`minus`,16)}</button>
            <span class="qty-n" aria-hidden="true">${e.qty}</span><span class="sr-only">${V(n.t(`qty`))}: ${e.qty}</span>
            <button type="button" class="qty-b" data-inc="${V(e.key)}" aria-label="${V(n.t(`inc`,{name:i.name}))}" ${e.qty>=10?`aria-disabled="true"`:``}>${t(`plus`,16)}</button>
          </div>`:`<a class="cl-link" href="${i.href}?edit=${encodeURIComponent(e.key)}" aria-label="${V(n.t(`edit_l`,{name:a}))}">${t(`edit`,16)}<span>${V(n.t(`edit`))}</span></a>`}<button type="button" class="cl-link" data-remove="${V(e.key)}" aria-label="${V(n.t(`remove_l`,{name:a}))}">${t(`close`,16)}<span>${V(n.t(`remove`))}</span></button></div>`:e.amount??(c=`<p class="cl-meta">${V(n.t(`qty`))}: ${e.qty}</p>`),`<li class="cl" data-key="${V(e.key)}">
      ${o}
      <div class="cl-main">
        <p class="cl-name"><a href="${i.href}">${V(a)}</a></p>
        ${s}
        ${c}
      </div>
      <p class="cl-price">${n.money(q(e,i))}</p>
    </li>`});if(r.editable&&Z){let e=n.D.items[Z.line.id],r=`<li class="cl-undo"><p>${V(n.t(`removed`,{name:e?.name??``}))}</p><button type="button" class="cl-link" data-undo>${t(`restart`,16)}<span>${V(n.t(`undo`))}</span></button></li>`;i.splice(Math.min(Z.index,i.length),0,r)}return i.join(``)}function $(e,t,n){e.addEventListener(`click`,r=>{let a=r.target.closest(`button`);if(!a||a.getAttribute(`aria-disabled`)===`true`)return;let o=i(),s=e=>t.D.items[o.find(t=>t.key===e)?.id??``]?.name??``;if(a.dataset.inc||a.dataset.dec){let r=a.dataset.inc??a.dataset.dec,i=o.find(e=>e.key===r);if(!i)return;let l=i.qty+(a.dataset.inc?1:-1);c(r,l),Z=null,n(),K(t.t(`qty_now`,{name:s(r),q:Math.max(1,Math.min(10,l))})+(l>10?` `+t.t(`max_qty`,{n:10}):``)),e.querySelector(`[data-${a.dataset.inc?`inc`:`dec`}="${CSS.escape(r)}"]`)?.focus()}else if(a.dataset.remove){let r=s(a.dataset.remove);Z=l(a.dataset.remove),n(),K(t.t(`removed`,{name:r})),e.querySelector(`[data-undo]`)?.focus()}else if(`undo`in a.dataset&&Z){let{line:t,index:r}=Z;Z=null,u(t,r),n(),e.querySelector(`[data-key="${CSS.escape(t.key)}"] button, [data-key="${CSS.escape(t.key)}"] a`)?.focus()}})}var ie=()=>{Z=null};function ae(t){let n=document.getElementById(`cart-dialog`),r=document.getElementById(`cart-fab`);if(!n)return{open:()=>{},refresh:()=>{}};let a=n.querySelector(`[data-lines]`),s=n.querySelector(`[data-empty]`),c=n.querySelector(`[data-foot]`),l=n.querySelector(`[data-sum]`),u=n.querySelector(`[data-count]`),d=null,p=()=>{let e=i(),n=o(e);a.innerHTML=Q(e,t,{editable:!0});let d=a.children.length>0;s.hidden=n>0||d,c.hidden=n===0,a.hidden=!d,l.textContent=t.money(X(e,t).sub),u.textContent=n?`(${t.itemsLabel(n)})`:``,r&&(r.hidden=n===0,r.querySelector(`[data-fab-count]`).textContent=String(n),r.querySelector(`[data-fab-sum]`).textContent=t.money(X(e,t).sub),r.querySelector(`[data-fab-items]`).textContent=`: ${t.itemsLabel(n)},`)};$(a,t,p),f(p),p();let m=e=>{d=e??document.activeElement,ie(),p(),n.showModal(),n.querySelector(`[data-close]`)?.focus()},h=()=>{n.dataset.closing=``;let e=()=>{delete n.dataset.closing,n.close()};matchMedia(`(prefers-reduced-motion: reduce)`).matches||document.documentElement.dataset.motion===`reduce`?e():setTimeout(e,200)};n.addEventListener(`close`,()=>{d?.focus()}),n.addEventListener(`cancel`,e=>{e.preventDefault(),h()}),n.addEventListener(`click`,e=>{e.target===n&&h()}),n.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,h));let g=n.querySelector(`.dlg-head`);return g&&e(n,g,()=>n.close(),()=>matchMedia(`(max-width: 599px)`).matches),r?.addEventListener(`click`,()=>m(r)),document.querySelectorAll(`[data-open-cart]`).forEach(e=>e.addEventListener(`click`,t=>{t.preventDefault(),m(e)})),{open:m,refresh:p}}function oe(){document.querySelectorAll(`[data-bump]`).forEach(e=>{e.classList.remove(`is-bump`),e.offsetWidth,e.classList.add(`is-bump`)})}export{i as _,Q as a,Y as c,X as d,B as f,f as g,o as h,ae as i,U as l,d as m,oe as n,W as o,s as p,V as r,J as s,$ as t,K as u};