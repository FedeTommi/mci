import{A as ot,B as St,C as D,D as T,E as a,F as r,G as m,H as b,I as f,J as I,K as $,L as j,M as w,N as Xt,O as H,P as Jt,Q as te,R as s,S as R,T as ee,U as v,V as G,W as ne,X as ie,Y as at,a as A,b as wt,ba as rt,c as Ht,d as Gt,e as Wt,ea as st,f as Zt,g as Yt,ga as S,i as M,j as d,l as Et,m as Y,n as O,p as $t,q as Kt,r as Qt,s as F,t as B,u as h,v as it,w as Ot,x as c,z as q}from"./chunk-Y5J4PHOY.js";function K(n){return n.buttons===0||n.detail===0}function Q(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Pt;function oe(){if(Pt==null){let n=typeof document<"u"?document.head:null;Pt=!!(n&&(n.createShadowRoot||n.attachShadow))}return Pt}function Ft(n){if(oe()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function E(n){return n.composedPath?n.composedPath()[0]:n.target}var Dt;try{Dt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Dt=!1}var k=(()=>{class n{_platformId=d($t);isBrowser=this._platformId?ie(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Dt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var X;function ae(){if(X==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>X=!0}))}finally{X=X||!1}return X}function W(n){return ae()?n:!!n.capture}function L(n){return n instanceof B?n.nativeElement:n}var re=new M("cdk-input-modality-detector-options"),se={ignoreKeys:[18,17,224,91,16]},le=650,Tt={passive:!0,capture:!0},de=(()=>{class n{_platform=d(k);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ht(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=E(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<le||(this._modality.next(K(t)?"keyboard":"mouse"),this._mostRecentTarget=E(t))};_onTouchstart=t=>{if(Q(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=E(t)};constructor(){let t=d(O),e=d(Y),o=d(re,{optional:!0});if(this._options=A(A({},se),o),this.modalityDetected=this._modality.pipe(Zt(1)),this.modalityChanged=this.modalityDetected.pipe(Wt()),this._platform.isBrowser){let l=d(it).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[l.listen(e,"keydown",this._onKeydown,Tt),l.listen(e,"mousedown",this._onMousedown,Tt),l.listen(e,"touchstart",this._onTouchstart,Tt)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})(),J=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(J||{}),ce=new M("cdk-focus-monitor-default-options"),lt=W({passive:!0,capture:!0}),It=(()=>{class n{_ngZone=d(O);_platform=d(k);_inputModalityDetector=d(de);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=d(Y);_stopInputModalityDetector=new wt;constructor(){let t=d(ce,{optional:!0});this._detectionMode=t?.detectionMode||J.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=E(t);for(let o=e;o;o=o.parentElement)t.type==="focus"?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=L(t);if(!this._platform.isBrowser||o.nodeType!==1)return Gt();let l=Ft(o)||this._document,p=this._elementInfo.get(o);if(p)return e&&(p.checkChildren=!0),p.subject;let C={checkChildren:e,subject:new wt,rootNode:l};return this._elementInfo.set(o,C),this._registerGlobalListeners(C),C.subject}stopMonitoring(t){let e=L(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let l=L(t),p=this._document.activeElement;l===p?this._getClosestElementsInfo(l).forEach(([C,V])=>this._originChanged(C,e,V)):(this._setOrigin(e),typeof l.focus=="function"&&l.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===J.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===J.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?le:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),l=E(t);!o||!o.checkChildren&&e!==l||this._originChanged(e,this._getFocusOrigin(l),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,lt),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,lt)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Yt(this._stopInputModalityDetector)).subscribe(l=>{this._setOrigin(l,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,lt),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,lt),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,l)=>{(l===t||o.checkChildren&&l.contains(t))&&e.push([l,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let l=t.labels;if(l){for(let p=0;p<l.length;p++)if(l[p].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var me=new Set,U,kt=(()=>{class n{_platform=d(k);_nonce=d(Qt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oe}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Ee(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();function Ee(n,i){if(!me.has(n))try{U||(U=document.createElement("style"),i&&U.setAttribute("nonce",i),U.setAttribute("type","text/css"),document.head.appendChild(U)),U.sheet&&(U.sheet.insertRule(`@media ${n} {body{ }}`,0),me.add(n))}catch(t){console.error(t)}}function Oe(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Se=new M("MATERIAL_ANIMATIONS"),ue=null;function Pe(){return d(Se,{optional:!0})?.animationsDisabled||d(Kt,{optional:!0})==="NoopAnimations"?"di-disabled":(ue??=d(kt).matchMedia("(prefers-reduced-motion)").matches,ue?"reduced-motion":"enabled")}function dt(){return Pe()!=="enabled"}var _=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(_||{}),At=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=_.HIDDEN;constructor(i,t,e,o=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}},fe=W({passive:!0,capture:!0}),Rt=class{_events=new Map;addHandler(i,t,e,o){let l=this._events.get(t);if(l){let p=l.get(e);p?p.add(o):l.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,fe)})}removeHandler(i,t,e){let o=this._events.get(i);if(!o)return;let l=o.get(t);l&&(l.delete(e),l.size===0&&o.delete(t),o.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,fe)))}_delegateEventHandler=i=>{let t=E(i);t&&this._events.get(i.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(l=>l.handleEvent(i))})}},tt={enterDuration:225,exitDuration:150},Fe=800,pe=W({passive:!0,capture:!0}),be=["mousedown","touchstart"],he=["mouseup","mouseleave","touchend","touchcancel"],De=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),ct=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Rt;constructor(i,t,e,o,l){this._target=i,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=L(e)),l&&l.get(st).load(De)}fadeInRipple(i,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),l=A(A({},tt),e.animation);e.centered&&(i=o.left+o.width/2,t=o.top+o.height/2);let p=e.radius||Te(i,t,o),C=i-o.left,V=t-o.top,N=l.enterDuration,g=document.createElement("div");g.classList.add("mat-ripple-element"),g.style.left=`${C-p}px`,g.style.top=`${V-p}px`,g.style.height=`${p*2}px`,g.style.width=`${p*2}px`,e.color!=null&&(g.style.backgroundColor=e.color),g.style.transitionDuration=`${N}ms`,this._containerElement.appendChild(g);let jt=window.getComputedStyle(g),we=jt.transitionProperty,Ut=jt.transitionDuration,Ct=we==="none"||Ut==="0s"||Ut==="0s, 0s"||o.width===0&&o.height===0,z=new At(this,g,e,Ct);g.style.transform="scale3d(1, 1, 1)",z.state=_.FADING_IN,e.persistent||(this._mostRecentTransientRipple=z);let nt=null;return!Ct&&(N||l.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Vt=()=>{nt&&(nt.fallbackTimer=null),clearTimeout(qt),this._finishRippleTransition(z)},Mt=()=>this._destroyRipple(z),qt=setTimeout(Mt,N+100);g.addEventListener("transitionend",Vt),g.addEventListener("transitioncancel",Mt),nt={onTransitionEnd:Vt,onTransitionCancel:Mt,fallbackTimer:qt}}),this._activeRipples.set(z,nt),(Ct||!N)&&this._finishRippleTransition(z),z}fadeOutRipple(i){if(i.state===_.FADING_OUT||i.state===_.HIDDEN)return;let t=i.element,e=A(A({},tt),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=_.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=L(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,be.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{he.forEach(t=>{this._triggerElement.addEventListener(t,this,pe)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===_.FADING_IN?this._startFadeOutTransition(i):i.state===_.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=_.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=_.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=K(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fe;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Q(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===_.VISIBLE||i.config.terminateOnPointerUp&&i.state===_.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(be.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(he.forEach(t=>i.removeEventListener(t,this,pe)),this._pointerUpEventsRegistered=!1))}};function Te(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+o*o)}var ge=new M("mat-ripple-global-options");var Ie={capture:!0},ke=["focus","mousedown","mouseenter","touchstart"],Lt="mat-ripple-loader-uninitialized",Nt="mat-ripple-loader-class-name",ve="mat-ripple-loader-centered",mt="mat-ripple-loader-disabled",_e=(()=>{class n{_document=d(Y);_animationsDisabled=dt();_globalRippleOptions=d(ge,{optional:!0});_platform=d(k);_ngZone=d(O);_injector=d(Et);_eventCleanups;_hosts=new Map;constructor(){let t=d(it).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ke.map(e=>t.listen(this._document,e,this._onInteraction,Ie)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Lt,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Nt))&&t.setAttribute(Nt,e.className||""),e.centered&&t.setAttribute(ve,""),e.disabled&&t.setAttribute(mt,"")}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(mt,""):t.removeAttribute(mt)}_onInteraction=t=>{let e=E(t);if(e instanceof HTMLElement){let o=e.closest(`[${Lt}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Nt)),t.append(e);let o=this._globalRippleOptions,l=this._animationsDisabled?0:o?.animation?.enterDuration??tt.enterDuration,p=this._animationsDisabled?0:o?.animation?.exitDuration??tt.exitDuration,C={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(mt),rippleConfig:{centered:t.hasAttribute(ve),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:l,exitDuration:p}}},V=new ct(C,this._ngZone,e,this._platform,this._injector),N=!C.rippleDisabled;N&&V.setupTriggerEvents(t),this._hosts.set(t,{target:C,renderer:V,hasSetUpEvents:N}),t.removeAttribute(Lt)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var xe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2})}return n})();var Ae=["*",[["","progressIndicator",""]]],Re=["*","[progressIndicator]"];function Le(n,i){n&1&&(b(0,"div",1),w(1,1),f())}var Ne=new M("MAT_BUTTON_CONFIG");function ye(n){return n==null?void 0:ne(n)}var zt=(()=>{class n{_elementRef=d(B);_ngZone=d(O);_animationsDisabled=dt();_config=d(Ne,{optional:!0});_focusMonitor=d(It);_cleanupClick;_renderer=d(Ot);_rippleLoader=d(_e);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=v(!1,{transform:G});constructor(){d(st).load(xe);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=q({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(e,o){e&2&&(St("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),te(o.color?"mat-"+o.color:""),H("mat-mdc-button-progress-indicator-shown",o.showProgress())("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",G],disabled:[2,"disabled","disabled",G],ariaDisabled:[2,"aria-disabled","ariaDisabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],tabIndex:[2,"tabIndex","tabIndex",ye],_tabindex:[2,"tabindex","_tabindex",ye],showProgress:[1,"showProgress"]}})}return n})(),et=(()=>{class n extends zt{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ot],ngContentSelectors:Re,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(j(Ae),I(0,"span",0),w(1),D(2,Le,2,0,"div",1),I(3,"span",2)(4,"span",3)),e&2&&(h(2),T(o.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var ze=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],Be=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function je(n,i){n&1&&(b(0,"div",2),w(1,3),f())}var Ce=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),P=(()=>{class n extends zt{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Ue(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?Ce.get(this._appearance):null,l=Ce.get(t);o&&e.remove(...o),e.add(...l),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=c({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ot],ngContentSelectors:Be,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,o){e&1&&(j(ze),I(0,"span",0),w(1),b(2,"span",1),w(3,1),f(),w(4,2),D(5,je,2,0,"div",2),I(6,"span",3)(7,"span",4)),e&2&&(H("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab),h(5),T(o.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function Ue(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var ut=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-header"]],decls:28,vars:0,consts:[[1,"width-container","floating"],[1,"content","menu"],[1,"logo"],["routerLink","/"],["alt","MCI logo","height","60","width","60","ngSrc","images/logo.svg","priority","1"],[1,"navigation"],["mat-button",""],["mat-icon-button","","href","https://www.facebook.com/profile.php?id=61583487631617"],["svgIcon","facebook"],["mat-icon-button","","routerLink","/"],["svgIcon","instagram"]],template:function(t,e){t&1&&(a(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),m(4,"img",4),r()(),a(5,"div",5)(6,"button",6),s(7,"Home"),r(),a(8,"button",6),s(9,"Storia"),r(),a(10,"button",6),s(11,"Parroci"),r(),a(12,"button",6),s(13,"Pfarramt"),r(),a(14,"button",6),s(15,"Galleria"),r(),a(16,"button",6),s(17,"Contatti"),r(),a(18,"button",6),s(19,"Calendario messe"),r(),a(20,"button",6),s(21,"Notizie"),r(),a(22,"button",6),s(23,"Carlo Acutis"),r()(),a(24,"a",7),m(25,"mat-icon",8),r(),a(26,"a",9),m(27,"mat-icon",10),r()()())},dependencies:[P,et,at,rt,S],styles:["[_nghost-%COMP%]   header[_ngcontent-%COMP%]{padding-top:2rem}[_nghost-%COMP%]   header.floating[_ngcontent-%COMP%]{position:absolute;right:0;left:0;top:0}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:auto}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:revert;color:#28341d}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]{padding-right:20px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:end}[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#28341d}@media(max-width:950px){[_nghost-%COMP%]   .navigation[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:none}}"]})};var ft=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-hero"]],decls:9,vars:0,consts:[[1,"hero","width-container"],[1,"content","hero-title"]],template:function(t,e){t&1&&(b(0,"div",0)(1,"div",1)(2,"h1")(3,"div"),s(4,"Missione Cattolica"),f(),b(5,"div"),s(6,"Italiana"),f()(),b(7,"h2"),s(8,"Augsburg"),f()()())},styles:["[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]{height:840px;max-height:100vh;overflow:hidden;padding:100px 0;background-image:linear-gradient(to bottom,transparent 0%,transparent 30%,rgba(0,0,0,.7) 100%),url(https://www.augsburg.de/fileadmin/_processed_/d/8/csm_250717_Website_2025_Titelbild_v01_1661366e19.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{margin-top:auto;color:#fff}@media(max-width:700px){[_nghost-%COMP%]   .hero[_ngcontent-%COMP%]{padding-bottom:40px}}"]})};var pt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-footer"]],decls:39,vars:0,consts:[[1,"full-bleed","width-container"],[1,"content","footer-content"],["routerLink","/",2,"grid-area","logo"],["alt","MCI logo","height","100","width","100","ngSrc","images/logo.svg","priority","1"],[1,"contacts",2,"grid-area","contacts"],[1,"info-box"],[1,"location",2,"grid-area","location"],[2,"grid-area","connected"],[1,"social-media"],["mat-icon-button","","href","https://www.facebook.com/profile.php?id=61583487631617"],["svgIcon","facebook"],["mat-icon-button","","routerLink","/"],["svgIcon","instagram"],[2,"grid-area","buttons"],["mat-button",""]],template:function(t,e){t&1&&(a(0,"footer",0)(1,"div",1)(2,"a",2),m(3,"img",3),r(),a(4,"div",4)(5,"h5"),s(6,"Contatti"),r(),a(7,"div",5)(8,"div"),s(9,"Tel. 0821 513030"),r(),a(10,"div"),s(11,"Fax 0821 312718"),r(),a(12,"div"),s(13,"info@mci-augsburg.de"),r()()(),a(14,"div",6)(15,"h5"),s(16,"Posizione"),r(),a(17,"div",5)(18,"div"),s(19,"Kobelweg 1"),r(),a(20,"div"),s(21,"86156 Augsburg"),r()()(),a(22,"div",7)(23,"h3"),s(24,"Resta connesso"),r(),a(25,"div",8)(26,"a",9),m(27,"mat-icon",10),r(),a(28,"a",11),m(29,"mat-icon",12),r()()(),a(30,"div",13)(31,"button",14),s(32,"Home"),r(),a(33,"button",14),s(34,"Pfarramt"),r(),a(35,"button",14),s(36,"Contatti"),r(),a(37,"button",14),s(38,"Notizie"),r()()()())},dependencies:[P,at,rt,S,et],styles:['[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{min-height:400px;background-color:var(--mat-sys-surface-container-highest);color:var(--mat-sys-primary);padding-top:var(--xl)}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{gap:0;display:grid;grid-template-areas:"logo . connected" "contacts location connected" "buttons . ."}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#28341d}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]{padding-left:var(--mat-button-text-horizontal-padding, 12px)}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#28341d}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%]{margin-top:24px}@media(max-width:700px){[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{grid-template-areas:". logo ." "connected connected connected" "contacts contacts contacts" "location location location" "buttons buttons buttons";gap:20px;align-items:center;justify-items:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]{padding-left:0}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%], [_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{width:100%;text-align:center}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{margin-bottom:40px}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{display:flex;justify-content:center}}']})};function Ve(n,i){if(n&1&&(a(0,"button",4),s(1),r()),n&2){let t=$();h(),R(t.buttonText())}}var Z=class n{title=v.required();text=v.required();imgUrl=v.required();buttonText=v(void 0);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-card"]],inputs:{title:[1,"title"],text:[1,"text"],imgUrl:[1,"imgUrl"],buttonText:[1,"buttonText"]},decls:7,vars:5,consts:[[1,"card"],[1,"card-content"],[1,"card-title"],[1,"card-text"],["matButton","tonal"]],template:function(t,e){t&1&&(a(0,"div",0)(1,"div",1)(2,"h4",2),s(3),r(),a(4,"p",3),s(5),r(),D(6,Ve,2,1,"button",4),r()()),t&2&&(Jt(`background-image: url(${e.imgUrl()})`),h(3),R(e.title()),h(2),R(e.text()),h(),T(e.buttonText()?6:-1))},dependencies:[P],styles:['[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{background-position:center center;background-repeat:no-repeat;background-size:cover;border-radius:30px;height:520px;position:relative}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#00000080;border-radius:inherit}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{position:absolute;inset:0;padding:40px;height:100%;display:flex;flex-direction:column;justify-content:flex-end;color:var(--mat-sys-on-primary);z-index:1}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary)}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-fixed)}']})};var bt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-welcome"]],decls:32,vars:0,consts:[[1,"width-container"],[1,"content"],[1,"section-content"],[1,"title"],[1,"row"],[1,"highlight"],[1,"subtitle","size-default"],[1,"italic-container"],[1,"italic","italic-size-big"],[1,"card-group"],["imgUrl","https://images.pexels.com/photos/5418308/pexels-photo-5418308.jpeg","title","Sono nuovo","text","Siamo felici che tu sia qui. Nella nostra comunit\xE0 puoi trovare un luogo in cui sentirti accolto, condividere la fede e conoscere nuove persone.","buttonText","Vieni a trovarci"],["imgUrl","https://de.terencehill.com/images/this_and_that/interview_2/header_image.jpg","title","Parliamone insieme","text","Hai domande o desideri un consiglio? Il nostro parroco \xE8 qui per ascoltarti e accompagnarti nel tuo cammino di fede.","buttonText","Contatta il parroco"],["imgUrl","https://temple-of-god.cmsmasters.studio/church/wp-content/uploads/sites/3/2023/02/home-4.jpg","title","Vivi la comunit\xE0","text","La fede cresce anche attraverso le relazioni. Scopri le occasioni per incontrarsi e condividere esperienze mantenendo viva la lingua italiana.","buttonText","Scopri le attivit\xE0"]],template:function(t,e){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3)(4,"div",4)(5,"span"),s(6,"Una Chiesa che crede in"),r()(),a(7,"div",4)(8,"span"),s(9,"Dio, "),r(),a(10,"span",5),s(11,"una Chiesa che accoglie e"),r()(),a(12,"div",4)(13,"span",5),s(14,"costruisce "),r(),a(15,"span"),s(16,"comunit\xE0."),r()()(),a(17,"div",6)(18,"span"),s(19,"Viviamo la nostra fede come comunit\xE0 di italiani ad Augsburg, pregando e"),r(),a(20,"span"),s(21,"celebrando insieme, nella bellezza della nostra tradizione italiana e nella "),r(),a(22,"span"),s(23,"realt\xE0 della vita qui in Germania."),r()()(),a(24,"div")(25,"div",7)(26,"span",8),s(27,"Qui sei sempre il benvenuto."),r()(),a(28,"div",9),m(29,"mci-card",10)(30,"mci-card",11)(31,"mci-card",12),r()()()())},dependencies:[Z],styles:["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{margin-top:80px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]{max-width:825px;margin:auto}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin:auto;text-align:center}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{color:var(--mat-sys-inverse-primary)}[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-top:40px;text-align:center;display:flex;flex-direction:column}[_nghost-%COMP%]   .italic-container[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .card-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px}"]})};var qe=["*"];function He(n,i){if(n&1&&(b(0,"div",2)(1,"span",3),s(2),f()()),n&2){let t=$();h(2),R(t.subtitle())}}var y=class n{title=v.required();subtitle=v(void 0);backgroundColor=v.required();textColor=v.required();static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-section"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],backgroundColor:[1,"backgroundColor"],textColor:[1,"textColor"]},ngContentSelectors:qe,decls:6,vars:6,consts:[[1,"full-bleed","width-container"],[1,"content","section-content"],[1,"subtitle-container"],[1,"italic","italic-size-small"]],template:function(t,e){t&1&&(j(),b(0,"section",0)(1,"div",1)(2,"h2"),s(3),f(),D(4,He,3,1,"div",2),w(5),f()()),t&2&&(Xt("--section-background-color",e.backgroundColor())("--section-color",e.textColor()),h(3),R(e.title()),h(),T(e.subtitle()?4:-1))},styles:["[_nghost-%COMP%]   section[_ngcontent-%COMP%]{background-color:var(--section-background-color);color:var(--section-color);min-height:640px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .subtitle-container[_ngcontent-%COMP%]{transform:translateY(-50%);padding-left:40px;opacity:.6}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .subtitle-container[_ngcontent-%COMP%]   .italic[_ngcontent-%COMP%]{color:var(--section-color)}@media(max-width:700px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .subtitle-container[_ngcontent-%COMP%]{transform:translateY(0);padding-bottom:40px}}"]})};var ht=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-our-pastors"]],decls:15,vars:0,consts:[["title","Il Nostro Parroco","subtitle","Padre Bruno Zuchowski","backgroundColor","var(--mat-sys-on-tertiary-container)","textColor","var(--mat-sys-on-tertiary)"],[1,"priest-presentation"],["alt","Don Bruno","src","https://www.aclibaviera.altervista.org/MISSIONE.KE/Bruno.jpg"],[1,"priest-letter"],["svgIcon","quotes-end",1,"quotes-start"]],template:function(t,e){t&1&&(a(0,"mci-section",0)(1,"div",1),m(2,"img",2),a(3,"div",3),m(4,"mat-icon",4),a(5,"p"),s(6,"Cari Italiani,"),r(),a(7,"p"),s(8," senza una lunga preparazione, inaspettatamente per me e per tutti, sono arrivato ad Augsburg per essere pastore per Voi e con Voi, per credere con Voi, per avere cura di Voi e gioire insieme al pensiero che Dio \xE8 l\u2019amore che ci unisce. "),r(),a(9,"p"),s(10," Noi siamo stati chiamati e scelti per muovere \u201Ela nave\u201C e per riprendere a bordo coloro i quali sono caduti in acqua. "),r(),a(11,"p"),s(12," Il Santo Padre Benedetto XVI ha scritto nell\u2019Enciclica \u201CDio \xE8 amore\u201D: \u201CL'amore del prossimo, radicato nell'amore di Dio, \xE8 anzitutto un compito per ogni singolo fedele, ma \xE8 anche un compito per l'intera comunit\xE0 ecclesiale, e questo a tutti i suoi livelli: dalla comunit\xE0 locale alla Chiesa particolare fino alla Chiesa universale nella sua globalit\xE0. Amore di Dio e amore del prossimo si fondono insieme: nel pi\xF9 piccolo incontriamo Ges\xF9 stesso e in Ges\xF9 incontriamo Dio. Per questo rimane compito della Chiesa interpretare sempre di nuovo questo collegamento tra lontananza e vicinanza in vista della vita pratica dei suoi membri.\u201D "),r(),a(13,"p"),s(14," Il messaggio centrale del Cristianesimo \xE8: Dio ha interesse in te e nell\u2019umanit\xE0 e per questo Lui si impegna per te e per gli uomini. Noi non lo dobbiamo dimenticare. "),r()()()())},dependencies:[y,S],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}[_nghost-%COMP%]   .priest-presentation[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:60px;padding-bottom:60px}[_nghost-%COMP%]   .priest-presentation[_ngcontent-%COMP%]   .priest-letter[_ngcontent-%COMP%]{flex:1;position:relative}[_nghost-%COMP%]   .priest-presentation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex:1;max-width:500px}[_nghost-%COMP%]   .priest-presentation[_ngcontent-%COMP%]   .quotes-start[_ngcontent-%COMP%]{--size: 250px;height:var(--size);width:var(--size);opacity:.5;position:absolute;top:0;right:0;transform:translateY(-60%) translate(30%)}@media(max-width:700px){[_nghost-%COMP%]   .priest-presentation[_ngcontent-%COMP%]{flex-direction:column}}"]})};var Ge=new M("MatPrefix"),Bt=(()=>{class n{set _isTextSelector(t){this._isText=!0}_isText=!1;static \u0275fac=function(e){return new(e||n)};static \u0275dir=q({type:n,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[ee([{provide:Ge,useExisting:n}])]})}return n})();var gt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-our-story"]],decls:14,vars:0,consts:[["title","La Nostra Storia","subtitle","Oltre sessant'anni di presenza e comunit\xE0","backgroundColor","transparent","textColor","var(--mat-sys-primary)"],[1,"story-container"],[1,"story-image",2,"background-image","url(https://images.pexels.com/photos/31574916/pexels-photo-31574916.jpeg)"],[1,"story-short"],["matButton","filled"],["matPrefix",""],["svgIcon","arrow-forward"]],template:function(t,e){t&1&&(a(0,"mci-section",0)(1,"div",1),m(2,"div",2),a(3,"div",3)(4,"p"),s(5," La Missione Cattolica Italiana di Augsburg accompagna la comunit\xE0 italiana dal 1962, offrendo sostegno spirituale, accoglienza e un punto di riferimento per generazioni di emigrati e delle loro famiglie. "),r(),a(6,"p"),s(7," Nata per rispondere alle esigenze religiose degli italiani giunti in Germania negli anni del dopoguerra, la Missione \xE8 cresciuta insieme alla comunit\xE0, diventando nel tempo un luogo di incontro, fede e integrazione. "),r(),a(8,"p"),s(9," Dai primi sacerdoti inviati per assistere i lavoratori italiani fino alle attivit\xE0 pastorali e culturali di oggi, la nostra storia \xE8 fatta di persone, relazioni e servizio al Vangelo. Una presenza che continua a rinnovarsi, mantenendo vive le radici italiane e costruendo ponti con la Chiesa e la societ\xE0 di Augsburg. "),r(),a(10,"button",4)(11,"span",5),s(12,"Scopri la storia completa della Missione"),r(),m(13,"mat-icon",6),r()()()())},dependencies:[y,P,S,Bt],styles:["[_nghost-%COMP%]   .story-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:40px;padding-bottom:60px}[_nghost-%COMP%]   .story-image[_ngcontent-%COMP%]{height:500px;width:500px;background-position:center center;background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]   .story-short[_ngcontent-%COMP%]{max-width:50%}@media(max-width:700px){[_nghost-%COMP%]   .story-container[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .story-short[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .story-image[_ngcontent-%COMP%]{max-width:100%}}"]})};var vt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-our-values"]],decls:44,vars:0,consts:[["title","La Nostra Missione","subtitle","Una fede da condividere","backgroundColor","transparent","textColor","var(--mat-sys-secondary)"],[1,"values-grid"],[1,"value-container"],[1,"size-default","message"]],template:function(t,e){t&1&&(a(0,"mci-section",0)(1,"div",1)(2,"div",2)(3,"h2"),s(4,"01"),r(),a(5,"h4"),s(6,"La fede ci guida"),r(),a(7,"p",3),s(8," Annunciamo il Vangelo e accompagniamo le persone nel loro cammino di fede attraverso la preghiera, la catechesi e la vita sacramentale. "),r()(),a(9,"div",2)(10,"h2"),s(11,"02"),r(),a(12,"h4"),s(13,"Comunit\xE0 che accoglie"),r(),a(14,"p",3),s(15," Accogliamo ogni persona con spirito fraterno, creando spazi di incontro, ascolto e condivisione per famiglie, giovani e anziani. "),r()(),a(16,"div",2)(17,"h2"),s(18,"03"),r(),a(19,"h4"),s(20,"Le nostre radici"),r(),a(21,"p",3),s(22," Valorizziamo la cultura, la lingua e le tradizioni italiane come dono da custodire e condividere all'interno della societ\xE0 in cui viviamo. "),r()(),a(23,"div",2)(24,"h2"),s(25,"04"),r(),a(26,"h4"),s(27,"Servire con amore"),r(),a(28,"p",3),s(29," Collaboriamo con le Chiese locali, le istituzioni e le realt\xE0 del territorio per rispondere ai bisogni delle persone e promuovere il bene comune. "),r()(),a(30,"div",2)(31,"h2"),s(32,"05"),r(),a(33,"h4"),s(34,"Crescere insieme"),r(),a(35,"p",3),s(36," Aiutiamo gli emigrati a inserirsi nella vita sociale ed ecclesiale, nel rispetto della propria storia, della propria fede e dei propri valori. "),r()(),a(37,"div",2)(38,"h2"),s(39,"06"),r(),a(40,"h4"),s(41,"Costruire fraternit\xE0"),r(),a(42,"p",3),s(43," Promuoviamo dialogo, comprensione reciproca e rispetto della dignit\xE0 di ogni persona, contribuendo a una convivenza pi\xF9 giusta, solidale e pacifica. "),r()()()())},dependencies:[y],styles:["[_nghost-%COMP%]   .values-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px}[_nghost-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#733425}[_nghost-%COMP%]   .values-grid[_ngcontent-%COMP%]   .value-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{color:#ae6351}"]})};var _t=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-prayer"]],decls:14,vars:0,consts:[[1,"full-bleed","width-container"],[1,"content"],[1,"italic","italic-size-big","title"],[1,"image-container"],[1,"prayer-container"],["src","https://images.pexels.com/photos/5206842/pexels-photo-5206842.jpeg","alt","preghiera"]],template:function(t,e){t&1&&(b(0,"section",0)(1,"div",1)(2,"span",2),s(3,"Preghiera per gli emigranti"),f(),b(4,"div",3)(5,"div",4)(6,"p"),s(7," O Ges\xF9, che fin dai primi giorni della vostra vita terrena doveste lasciare con Maria vostra tenera Madre e con Giuseppe, il luogo natio, e sopportare in Egitto le pene e i disagi dei poveri emigranti, volgete pietoso lo sguardo sui nostri fratelli costretti dal bisogno ad abbandonare la diletta patria . "),f(),b(8,"p"),s(9," Lontani da tutto quello che a loro \xE8 pi\xF9 caro, in cerca di onesto lavoro, essi vivono fra disagi e talvolta fra pericoli per la loro vita e per la salvezza dell'anima. "),f(),b(10,"p"),s(11," Deh! siate ad essi guida nell'incerto cammino, aiuto nella fatica, conforto nei dolori; conservateli nell'integrit\xE0 della fede, nella santit\xE0 dei costumi, nell'affetto ai figli, alle spose, ai genitori lontani, e fate che, dopo il duro pellegrinaggio di questa terra, tutti possiamo raggiungere la patria beata. Cos\xEC sia. Pater, Ave, Gloria. "),f()(),b(12,"div"),I(13,"img",5),f()()()())},styles:["[_nghost-%COMP%]{background-color:#561f11;display:block}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:40px;align-items:center;justify-content:space-between;padding-bottom:60px}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:350px;height:auto}[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .prayer-container[_ngcontent-%COMP%]{max-width:500px;color:#fff}@media(max-width:700px){[_nghost-%COMP%]   section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{flex-direction:column}}"]})};var xt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-join-us-on-sunday"]],decls:32,vars:0,consts:[["title","Insieme nella fede","subtitle","Ogni domenica","backgroundColor","var(--mat-sys-inverse-primary)","textColor","var(--mat-sys-on-primary-fixed)"],[1,"description-image-container"],[1,"description"],[1,"size-default"],[1,"image-container"],["src","https://images.pexels.com/photos/10325963/pexels-photo-10325963.jpeg","alt","mass"],[1,"invitation"],[1,"invitation-title"],["matButton","filled"],["svgIcon","arrow-forward"],[1,"quote"],[1,"italic","italic-size-big"]],template:function(t,e){t&1&&(a(0,"mci-section",0)(1,"div",1)(2,"div",2)(3,"p",3),s(4," La celebrazione eucaristica ci riunisce come comunit\xE0 e ci accompagna nella vita di ogni giorno. Attraverso la preghiera e i sacramenti, custodiamo la nostra fede, rafforziamo i legami tra le famiglie e portiamo la ricchezza della nostra tradizione nella Chiesa che vive ad Augsburg. "),r(),a(5,"p",3),s(6," Nessuno vi giudicher\xE1. "),a(7,"b"),s(8,"Le porte sono sempre aperte per tutti"),r(),s(9,". A chi si era allontanato e adesso sente il bisogno di riavvicinarsi come anche a chi si avvicina per la prima volta. "),r()(),a(10,"div",4),m(11,"img",5),r()(),a(12,"div",6)(13,"div",7)(14,"h4"),s(15,"Ci trovi ogni domenica"),r()(),a(16,"div",3),s(17,"Ore 11:00 \xB7 Santa Messa in italiano"),r(),a(18,"div",3),s(19,"Chiesa di St. Canisius, Hochfeldstr. 63, Augsburg"),r(),m(20,"br"),a(21,"p"),s(22," Ogni terza domenica del mese celebriamo la Santa Messa anche a Lauingen, alle ore 16:00, nella Spitalkirche. "),r(),a(23,"button",8)(24,"span"),s(25,"Scopri il calendario delle messe"),r(),m(26,"mat-icon",9),r()(),a(27,"div",10)(28,"div",11),s(29,"Non abbiate paura"),m(30,"br"),s(31,"aprite le porte a Cristo"),r()()())},dependencies:[y,P,S],styles:["[_nghost-%COMP%]{display:contents}[_nghost-%COMP%]   .italic[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary-fixed);opacity:.8}[_nghost-%COMP%]   .description[_ngcontent-%COMP%]{text-align:center;max-width:1000px;margin:auto;padding-block:40px}[_nghost-%COMP%]   .description-image-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;justify-content:center;align-items:center;gap:40px}[_nghost-%COMP%]   .description-image-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{align-self:center;justify-self:center}[_nghost-%COMP%]   .description-image-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:600px;height:auto}[_nghost-%COMP%]   .invitation[_ngcontent-%COMP%]{text-align:center;max-width:1000px;margin:60px auto 0}[_nghost-%COMP%]   .invitation[_ngcontent-%COMP%]   .invitation-title[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;padding:24px}[_nghost-%COMP%]   .quote[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:-20px}[_nghost-%COMP%]   .quote[_ngcontent-%COMP%]   .italic[_ngcontent-%COMP%]{text-align:right;margin-right:-20px;margin-bottom:-40px}@media(max-width:700px){[_nghost-%COMP%]   .description-image-container[_ngcontent-%COMP%]{grid-template-columns:1fr}[_nghost-%COMP%]   .description[_ngcontent-%COMP%]{padding-block:20px 0}}"]})};var yt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-our-groups"]],decls:6,vars:0,consts:[["title","Le Nostre Attivit\xE1","subtitle","Occasioni per costruire legami autentici","backgroundColor","transparent","textColor","var(--mat-sys-tertiary)"],[1,"groups-grid"],["imgUrl","https://images.pexels.com/photos/5887653/pexels-photo-5887653.jpeg","title","Giovani e famiglie","text","Uno spazio per dialogo, riflessione e fraternit\xE0. Incontri mensili, il sabato pomeriggio oppure la domenica dopo la Santa Messa. Contatta cat.franzese@gmail.com per informazioni"],["imgUrl","https://media.istockphoto.com/id/187092120/de/foto/dirigent-und-seniorschors%C3%A4nger.jpg?s=1024x1024&w=is&k=20&c=8jTztH7yK9mVK3RlpmClW81yeMyjZkCVpxeh4MHtDCA=","title","Il coro","text","Cantando rendiamo pi\xF9 vive le nostre celebrazioni. Per informazioni, spartiti e i file dei canti contatta Alexander (015233853381) o Silvia (0172 8847786)."],["imgUrl","https://images.pexels.com/photos/8422248/pexels-photo-8422248.jpeg","title","Pomeriggio insieme (gruppo bambini)","text","Giochi, attivit\xE0 creative e una preghiera in italiano: uno spazio per divertirsi, fare amicizia e crescere insieme."],["imgUrl","https://images.pexels.com/photos/5709255/pexels-photo-5709255.jpeg","title","Noi e la nostra fede","text","Un luogo aperto a tutti per approfondire la fede, condividere esperienze e sostenerci nel cammino cristiano."]],template:function(t,e){t&1&&(a(0,"mci-section",0)(1,"div",1),m(2,"mci-card",2)(3,"mci-card",3)(4,"mci-card",4)(5,"mci-card",5),r()())},dependencies:[y,Z],styles:["[_nghost-%COMP%]   .groups-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(450px,1fr));gap:40px;margin-bottom:130px;margin-top:60px}@media(max-width:700px){[_nghost-%COMP%]   .groups-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;margin-top:20px;margin-bottom:60px}}"]})};var Me=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=c({type:n,selectors:[["mci-app"]],decls:11,vars:0,consts:[[1,"height-container"]],template:function(t,e){t&1&&(m(0,"mci-header")(1,"mci-hero"),a(2,"div",0),m(3,"mci-welcome")(4,"mci-join-us-on-sunday")(5,"mci-our-values")(6,"mci-prayer")(7,"mci-our-story")(8,"mci-our-pastors")(9,"mci-our-groups"),r(),m(10,"mci-footer"))},dependencies:[ut,ft,pt,bt,ht,gt,vt,_t,xt,yt],styles:["[_nghost-%COMP%]   .full-bleed[_ngcontent-%COMP%]  .section-content{margin-top:60px}"]})};export{Me as AppComponent};
