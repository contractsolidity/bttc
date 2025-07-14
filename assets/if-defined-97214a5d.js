import{Y as k,Z as B,_ as A,i as P,r as R,I as j,b as O,x as E,$ as r,U as M}from"./index-b83e453d.js";const d={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:a}){return t.length<=e+i?t:a==="end"?`${t.substring(0,e)}...`:a==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(i),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),l=`${s}% ${s}% at 65% 40%`,_=[];for(let w=0;w<5;w+=1){const m=this.tintColor(a,.15*w);_.push(`rgb(${m[0]}, ${m[1]}, ${m[2]})`)}return`
    --local-color-1: ${_[0]};
    --local-color-2: ${_[1]};
    --local-color-3: ${_[2]};
    --local-color-4: ${_[3]};
    --local-color-5: ${_[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,a=e>>8&255,n=e&255;return[i,a,n]},tintColor(t,e){const[i,a,n]=t,o=Math.round(i+(255-i)*e),s=Math.round(a+(255-a)*e),l=Math.round(n+(255-n)*e);return[o,s,l]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function U(t,e){const{kind:i,elements:a}=e;return{kind:i,elements:a,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function H(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(i){return typeof i=="function"?H(t,i):U(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:B},F=(t=N,e,i)=>{const{kind:a,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),a==="accessor"){const{name:s}=i;return{set(l){const _=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,_,t)},init(l){return l!==void 0&&this.C(s,void 0,t,l),l}}}if(a==="setter"){const{name:s}=i;return function(l){const _=this[s];e.call(this,l),this.requestUpdate(s,_,t)}}throw Error("Unsupported decorator location: "+a)};function c(t){return(e,i)=>typeof i=="object"?F(t,e,i):((a,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,a),s?Object.getOwnPropertyDescriptor(n,o):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return c({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,a){this._$Ct=e,this._$AM=i,this._$Ci=a}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=(t,e)=>{var a;const i=t._$AN;if(i===void 0)return!1;for(const n of i)(a=n._$AO)==null||a.call(n,e,!1),v(n,e);return!0},$=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),q(e)}};function Y(t){this._$AN!==void 0?($(this),this._$AM=t,z(this)):this._$AM=t}function Z(t,e=!1,i=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(a))for(let o=i;o<a.length;o++)v(a[o],!1),$(a[o]);else a!=null&&(v(a,!1),$(a));else v(this,t)}const q=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=Z),t._$AQ??(t._$AQ=Y))};class K extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,a){super._$AT(e,i,a),z(this),this.isConnected=e._$AU}_$AO(e,i=!0){var a,n;e!==this.isConnected&&(this.isConnected=e,e?(a=this.reconnected)==null||a.call(this):(n=this.disconnected)==null||n.call(this)),i&&(v(this,e),$(this))}setValue(e){if(W(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class X{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=t=>!G(t)&&typeof t.then=="function",b=1073741823;class J extends K{constructor(){super(...arguments),this._$Cwt=b,this._$Cbt=[],this._$CK=new X(this),this._$CX=new Q}render(...e){return e.find(i=>!L(i))??A}update(e,i){const a=this._$Cbt;let n=a.length;this._$Cbt=i;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<i.length&&!(l>this._$Cwt);l++){const _=i[l];if(!L(_))return this._$Cwt=l,_;l<n&&_===a[l]||(this._$Cwt=b,n=0,Promise.resolve(_).then(async w=>{for(;s.get();)await s.get();const m=o.deref();if(m!==void 0){const T=m._$Cbt.indexOf(_);T>-1&&T<m._$Cwt&&(m._$Cwt=T,m.setValue(w))}}))}return A}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const S=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var f=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};const D={add:async()=>(await r(()=>import("./add-b12e7e5b.js"),["./add-b12e7e5b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).addSvg,allWallets:async()=>(await r(()=>import("./all-wallets-ed45ec3a.js"),["./all-wallets-ed45ec3a.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await r(()=>import("./arrow-bottom-circle-eb7dee76.js"),["./arrow-bottom-circle-eb7dee76.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await r(()=>import("./app-store-353f51d2.js"),["./app-store-353f51d2.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).appStoreSvg,apple:async()=>(await r(()=>import("./apple-fcbc3a0c.js"),["./apple-fcbc3a0c.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).appleSvg,arrowBottom:async()=>(await r(()=>import("./arrow-bottom-08cae853.js"),["./arrow-bottom-08cae853.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await r(()=>import("./arrow-left-e52d295a.js"),["./arrow-left-e52d295a.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await r(()=>import("./arrow-right-3e785ad1.js"),["./arrow-right-3e785ad1.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).arrowRightSvg,arrowTop:async()=>(await r(()=>import("./arrow-top-d47b32de.js"),["./arrow-top-d47b32de.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).arrowTopSvg,bank:async()=>(await r(()=>import("./bank-97fd364e.js"),["./bank-97fd364e.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).bankSvg,browser:async()=>(await r(()=>import("./browser-509c9f72.js"),["./browser-509c9f72.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).browserSvg,card:async()=>(await r(()=>import("./card-ae73cb7f.js"),["./card-ae73cb7f.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).cardSvg,checkmark:async()=>(await r(()=>import("./checkmark-12f67316.js"),["./checkmark-12f67316.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await r(()=>import("./checkmark-bold-33384220.js"),["./checkmark-bold-33384220.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await r(()=>import("./chevron-bottom-1ccd148d.js"),["./chevron-bottom-1ccd148d.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await r(()=>import("./chevron-left-b7bc01ad.js"),["./chevron-left-b7bc01ad.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await r(()=>import("./chevron-right-3a882aa0.js"),["./chevron-right-3a882aa0.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).chevronRightSvg,chevronTop:async()=>(await r(()=>import("./chevron-top-7ceb5e4b.js"),["./chevron-top-7ceb5e4b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).chevronTopSvg,chromeStore:async()=>(await r(()=>import("./chrome-store-8caa6460.js"),["./chrome-store-8caa6460.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).chromeStoreSvg,clock:async()=>(await r(()=>import("./clock-a44c734f.js"),["./clock-a44c734f.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).clockSvg,close:async()=>(await r(()=>import("./close-81a3230c.js"),["./close-81a3230c.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).closeSvg,compass:async()=>(await r(()=>import("./compass-93f74ef2.js"),["./compass-93f74ef2.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).compassSvg,coinPlaceholder:async()=>(await r(()=>import("./coinPlaceholder-003fb903.js"),["./coinPlaceholder-003fb903.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).coinPlaceholderSvg,copy:async()=>(await r(()=>import("./copy-9e0d3931.js"),["./copy-9e0d3931.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).copySvg,cursor:async()=>(await r(()=>import("./cursor-4139f772.js"),["./cursor-4139f772.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).cursorSvg,cursorTransparent:async()=>(await r(()=>import("./cursor-transparent-05917a2d.js"),["./cursor-transparent-05917a2d.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).cursorTransparentSvg,desktop:async()=>(await r(()=>import("./desktop-28a2159e.js"),["./desktop-28a2159e.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).desktopSvg,disconnect:async()=>(await r(()=>import("./disconnect-49aa6924.js"),["./disconnect-49aa6924.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).disconnectSvg,discord:async()=>(await r(()=>import("./discord-19fe6b10.js"),["./discord-19fe6b10.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).discordSvg,etherscan:async()=>(await r(()=>import("./etherscan-63807b23.js"),["./etherscan-63807b23.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).etherscanSvg,extension:async()=>(await r(()=>import("./extension-6026a887.js"),["./extension-6026a887.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).extensionSvg,externalLink:async()=>(await r(()=>import("./external-link-1bb6961d.js"),["./external-link-1bb6961d.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).externalLinkSvg,facebook:async()=>(await r(()=>import("./facebook-383a30af.js"),["./facebook-383a30af.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).facebookSvg,farcaster:async()=>(await r(()=>import("./farcaster-a562babe.js"),["./farcaster-a562babe.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).farcasterSvg,filters:async()=>(await r(()=>import("./filters-014b21b8.js"),["./filters-014b21b8.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).filtersSvg,github:async()=>(await r(()=>import("./github-c75cfe8b.js"),["./github-c75cfe8b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).githubSvg,google:async()=>(await r(()=>import("./google-90cd36aa.js"),["./google-90cd36aa.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).googleSvg,helpCircle:async()=>(await r(()=>import("./help-circle-28d9b626.js"),["./help-circle-28d9b626.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).helpCircleSvg,image:async()=>(await r(()=>import("./image-420609b6.js"),["./image-420609b6.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).imageSvg,id:async()=>(await r(()=>import("./id-dcf9df0e.js"),["./id-dcf9df0e.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).idSvg,infoCircle:async()=>(await r(()=>import("./info-circle-23d8f31b.js"),["./info-circle-23d8f31b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).infoCircleSvg,lightbulb:async()=>(await r(()=>import("./lightbulb-b4f51c6a.js"),["./lightbulb-b4f51c6a.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).lightbulbSvg,mail:async()=>(await r(()=>import("./mail-e90d917f.js"),["./mail-e90d917f.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).mailSvg,mobile:async()=>(await r(()=>import("./mobile-a4572ff9.js"),["./mobile-a4572ff9.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).mobileSvg,more:async()=>(await r(()=>import("./more-eaaa0c17.js"),["./more-eaaa0c17.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).moreSvg,networkPlaceholder:async()=>(await r(()=>import("./network-placeholder-1cc72363.js"),["./network-placeholder-1cc72363.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(()=>import("./nftPlaceholder-5c2d68ee.js"),["./nftPlaceholder-5c2d68ee.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).nftPlaceholderSvg,off:async()=>(await r(()=>import("./off-45ecfa25.js"),["./off-45ecfa25.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).offSvg,playStore:async()=>(await r(()=>import("./play-store-70d16c37.js"),["./play-store-70d16c37.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).playStoreSvg,plus:async()=>(await r(()=>import("./plus-e587b81a.js"),["./plus-e587b81a.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).plusSvg,qrCode:async()=>(await r(()=>import("./qr-code-66ba0dc3.js"),["./qr-code-66ba0dc3.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await r(()=>import("./recycle-horizontal-c2488702.js"),["./recycle-horizontal-c2488702.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await r(()=>import("./refresh-e09744da.js"),["./refresh-e09744da.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).refreshSvg,search:async()=>(await r(()=>import("./search-93e69471.js"),["./search-93e69471.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).searchSvg,send:async()=>(await r(()=>import("./send-37e3110b.js"),["./send-37e3110b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).sendSvg,swapHorizontal:async()=>(await r(()=>import("./swapHorizontal-5078a121.js"),["./swapHorizontal-5078a121.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(()=>import("./swapHorizontalMedium-146cd8ba.js"),["./swapHorizontalMedium-146cd8ba.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(()=>import("./swapHorizontalBold-ca501a98.js"),["./swapHorizontalBold-ca501a98.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(()=>import("./swapHorizontalRoundedBold-f2c71de6.js"),["./swapHorizontalRoundedBold-f2c71de6.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(()=>import("./swapVertical-cc633f2c.js"),["./swapVertical-cc633f2c.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).swapVerticalSvg,telegram:async()=>(await r(()=>import("./telegram-d171af22.js"),["./telegram-d171af22.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).telegramSvg,threeDots:async()=>(await r(()=>import("./three-dots-f0b771c3.js"),["./three-dots-f0b771c3.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).threeDotsSvg,twitch:async()=>(await r(()=>import("./twitch-64a4c73f.js"),["./twitch-64a4c73f.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).twitchSvg,twitter:async()=>(await r(()=>import("./x-f96a7ac3.js"),["./x-f96a7ac3.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).xSvg,twitterIcon:async()=>(await r(()=>import("./twitterIcon-9331bd4b.js"),["./twitterIcon-9331bd4b.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).twitterIconSvg,verify:async()=>(await r(()=>import("./verify-a4ba699e.js"),["./verify-a4ba699e.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).verifySvg,verifyFilled:async()=>(await r(()=>import("./verify-filled-7f06c86e.js"),["./verify-filled-7f06c86e.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).verifyFilledSvg,wallet:async()=>(await r(()=>import("./wallet-ec1d6aac.js"),["./wallet-ec1d6aac.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).walletSvg,walletConnect:async()=>(await r(()=>import("./walletconnect-a50b8634.js"),["./walletconnect-a50b8634.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await r(()=>import("./walletconnect-a50b8634.js"),["./walletconnect-a50b8634.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(()=>import("./walletconnect-a50b8634.js"),["./walletconnect-a50b8634.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(()=>import("./wallet-placeholder-708a2b03.js"),["./wallet-placeholder-708a2b03.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await r(()=>import("./warning-circle-684b1aaa.js"),["./warning-circle-684b1aaa.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).warningCircleSvg,x:async()=>(await r(()=>import("./x-f96a7ac3.js"),["./x-f96a7ac3.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).xSvg,info:async()=>(await r(()=>import("./info-ed1d8c04.js"),["./info-ed1d8c04.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).infoSvg,exclamationTriangle:async()=>(await r(()=>import("./exclamation-triangle-3743a387.js"),["./exclamation-triangle-3743a387.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).exclamationTriangleSvg,reown:async()=>(await r(()=>import("./reown-logo-ce8e01da.js"),["./reown-logo-ce8e01da.js","./index-b83e453d.js","./index-dc0753e5.css"],import.meta.url)).reownSvg};async function rt(t){if(S.has(t))return S.get(t);const i=(D[t]??D.copy)();return S.set(t,i),i}let h=class extends O{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,E`${tt(rt(this.name),E`<div class="fallback"></div>`)}`}};h.styles=[R,j,it];f([c()],h.prototype,"size",void 0);f([c()],h.prototype,"name",void 0);f([c()],h.prototype,"color",void 0);f([c()],h.prototype,"aspectRatio",void 0);h=f([I("wui-icon")],h);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=C(class extends x{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var a,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((a=this.nt)!=null&&a.has(o))&&this.st.add(o);return this.render(e)}const i=t.element.classList;for(const o of this.st)o in e||(i.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(n=this.nt)!=null&&n.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return A}}),at=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let g=class extends O{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,E`<slot class=${ot(e)}></slot>`}};g.styles=[R,at];y([c()],g.prototype,"variant",void 0);y([c()],g.prototype,"color",void 0);y([c()],g.prototype,"align",void 0);y([c()],g.prototype,"lineClamp",void 0);g=y([I("wui-text")],g);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var p=globalThis&&globalThis.__decorate||function(t,e,i,a){var n=arguments.length,o=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,a);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(n<3?s(o):n>3?s(e,i,o):s(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let u=class extends O{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&d.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&d.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&d.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&d.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&d.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&d.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&d.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&d.getSpacingStyles(this.margin,3)};
    `,E`<slot></slot>`}};u.styles=[R,nt];p([c()],u.prototype,"flexDirection",void 0);p([c()],u.prototype,"flexWrap",void 0);p([c()],u.prototype,"flexBasis",void 0);p([c()],u.prototype,"flexGrow",void 0);p([c()],u.prototype,"flexShrink",void 0);p([c()],u.prototype,"alignItems",void 0);p([c()],u.prototype,"justifyContent",void 0);p([c()],u.prototype,"columnGap",void 0);p([c()],u.prototype,"rowGap",void 0);p([c()],u.prototype,"gap",void 0);p([c()],u.prototype,"padding",void 0);p([c()],u.prototype,"margin",void 0);u=p([I("wui-flex")],u);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=t=>t??M;export{d as U,C as a,I as c,ot as e,K as f,c as n,mt as o,lt as r};
