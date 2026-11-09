import{$ as Y,A as Me,At as he,B as Rc,Bt as le$1,C as KE,Ct as er,D as LE,E as Kf,F as PN,G as Sy,Gt as np,Ht as mD,K as Tw,Kt as om,N,Nt as io,O as Ls,Pt as jE,Qt as sn$1,R as Qa,S as K,St as ep,U as Se,Ut as mc,W as Sw,Wt as ne,Xt as qu,Yt as qM,Z as WE,Zt as sD,_ as Ho,_n as z,an as ve$1,b as J,bt as eD,c as Dc,d as En,dt as bT,et as YE,g as HN,gt as cw,hn as yc,i as Ba,in as vc,j as Mi,jt as ho,kt as h,l as E,ln as wp,lt as aw,nn as tn$1,o as Bs,on as vr,p as Eu,pt as cN,qt as on,rn as tp,rt as Zf,sn as vt,st as aN,t as $f,tn as tI,tt as YM,u as Ec,x as Jf,xt as en$1,y as Ir,yt as de,z as Qf}from"./chunk-ZZ9HoQbQ.js";import{i as _,n as A,r as F,t as yt}from"./main-J62I6RXN.js";import{t as f}from"./chunk-DjcAgKLN.js";import{c as ge,d as p,i as P,l as k,n as Kt$1,o as Zt$1,p as ue}from"./chunk-BC2s7Eca.js";import{t as b}from"./chunk-D1SZbloK.js";import{a as j,c as se$1,i as ct,n as Q,o as le$2,r as at,s as lt,t as O,u}from"./chunk-Ciajzu5z.js";var re=(()=>{class n{_listeners=[];notify(e,t){for(let a of this._listeners)a(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||n)};static ɵprov=Y({token:n,factory:n.ɵfac})}return n})();var Ne=new E(`CdkAccordion`);var Nt=(()=>{class n{_stateChanges=new J;_openCloseAllActions=new J;id=h(P).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,sn$1]},exportAs:[`cdkAccordion`],features:[HN([{provide:Ne,useExisting:n}]),tn$1]})}return n})();var Tt=(()=>{class n{accordion=h(Ne,{optional:!0,skipSelf:!0});_changeDetectorRef=h(Ir);_expansionDispatcher=h(re);_openCloseAllSubscription=K.EMPTY;closed=new Se;opened=new Se;destroyed=new Se;expandedChange=new Se;id=h(P).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ne(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,sn$1],disabled:[2,`disabled`,`disabled`,sn$1]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[HN([{provide:Ne,useValue:void 0}])]})}return n})();var Pt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ho({type:n});static ɵinj=er({})}return n})();var _e=class{applyChanges(c,e,t,a,i){c.forEachOperation((l,d,m)=>{let u$1,h;if(l.previousIndex==null){let g=t(l,d,m);u$1=e.createEmbeddedView(g.templateRef,g.context,g.index),h=u.INSERTED}else m==null?(e.remove(d),h=u.REMOVED):(u$1=e.get(d),e.move(u$1,m),h=u.MOVED);i&&i({context:u$1?.context,operation:h,record:l})})}detach(){}};var Te=new E(`MAT_ACCORDION`);var It=new E(`MAT_EXPANSION_PANEL`);var sn=(()=>{class n{_template=h(io);_expansionPanel=h(It,{optional:!0});static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return n})();var Ft=new E(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Pe=(()=>{class n extends Tt{_viewContainerRef=h(vr);_animationsDisabled=Kt$1();_document=h(z);_ngZone=h(he);_elementRef=h(vt);_renderer=h(en$1);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new Se;afterCollapse=new Se;_inputChanges=new J;accordion=h(Te,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=h(P).getId(`mat-expansion-panel-header-`);constructor(){super();let e=h(Ft,{optional:!0});this._expansionDispatcher=h(re),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(qu(null),Me(()=>this.expanded&&!this._portal),En(1)).subscribe(()=>{this._portal=new O(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`body`],t=[`bodyWrapper`],a=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]],i=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function l(d,m){}return $f({type:n,selectors:[[`mat-expansion-panel`]],contentQueries:function(m,u,h){if(m&1&&Ec(h,sn,5),m&2){let g;tp(g=np())&&(u._lazyContent=g.first)}},viewQuery:function(m,u){if(m&1&&eD(e,5)(t,5),m&2){let h;tp(h=np())&&(u._body=h.first),tp(h=np())&&(u._bodyWrapper=h.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(m,u){m&2&&sD(`mat-expanded`,u.expanded)(`mat-expansion-panel-spacing`,u._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,sn$1],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[HN([{provide:Te,useValue:void 0},{provide:It,useExisting:n}]),LE,tn$1],ngContentSelectors:i,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(m,u){m&1&&(aN(a),cN(0),Qa(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),cN(6,1),jE(7,l,0,0,`ng-template`,5),Zf(),cN(8,2),Zf()()),m&2&&(bT(),mc(`inert`,u.expanded?null:``),bT(2),WE(`id`,u.id),mc(`aria-labelledby`,u._headerId),bT(4),WE(`cdkPortalOutlet`,u._portal))},dependencies:[se$1],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})})()}return n})();var Ie=(()=>{class n{panel=h(Pe,{host:!0});_element=h(vt);_focusMonitor=h(ge);_changeDetectorRef=h(Ir);_parentChangeSubscription=K.EMPTY;constructor(){h(_).load(Zt$1);let e=this.panel,t=h(Ft,{optional:!0}),a=h(new Rc(`tabindex`),{optional:!0}),i=e.accordion?e.accordion._stateChanges.pipe(Me(l=>!!(l.hideToggle||l.togglePosition))):le$1;this.tabIndex=parseInt(a||``)||0,this._parentChangeSubscription=Sw(e.opened,e.closed,i,e._inputChanges.pipe(Me(l=>!!(l.hideToggle||l.disabled||l.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Me(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:ue(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`],t=[`mat-panel-title`,`mat-panel-description`,`*`];function a(i,l){i&1&&(Kf(0,`span`,1),om(),Kf(1,`svg`,2),YE(2,`path`,3),Qf()())}return $f({type:n,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(l,d){l&1&&vc(`click`,function(){return d._toggle()})(`keydown`,function(u){return d._keydown(u)}),l&2&&(mc(`id`,d.panel._headerId)(`tabindex`,d.disabled?-1:d.tabIndex)(`aria-controls`,d._getPanelId())(`aria-expanded`,d._isExpanded())(`aria-disabled`,d.panel.disabled),Dc(`height`,d._getHeaderHeight()),sD(`mat-expanded`,d._isExpanded())(`mat-expansion-toggle-indicator-after`,d._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,d._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,i=>i==null?0:wp(i)]},ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(l,d){l&1&&(aN(e),Kf(0,`span`,0),cN(1),cN(2,1),cN(3,2),Qf(),qM(4,a,3,0,`span`,1)),l&2&&(sD(`mat-content-hide-toggle`,!d._showToggle()),bT(4),YM(d._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})})()}return n})();var At=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return n})();var zt=(()=>{class n extends Nt{_keyManager;_ownHeaders=new Ba;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(qu(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new k(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[`mat-accordion`]],contentQueries:function(t,a,i){if(t&1&&Ec(i,Ie,5),t&2){let l;tp(l=np())&&(a._headers=l)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(t,a){t&2&&sD(`mat-accordion-multi`,a.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,sn$1],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[HN([{provide:Te,useExisting:n}]),LE]})}return n})();var Ht=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ho({type:n});static ɵinj=er({imports:[Pt,le$2,F]})}return n})();var I=new E(`CDK_TABLE`);var ve=(()=>{class n{template=h(io);static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var De=(()=>{class n{template=h(io);static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var Vt=(()=>{class n{template=h(io);static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var te=(()=>{class n{_table=h(I,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,a,i){if(t&1&&Ec(i,ve,5)(i,De,5)(i,Vt,5),t&2){let l;tp(l=np())&&(a.cell=l.first),tp(l=np())&&(a.headerCell=l.first),tp(l=np())&&(a.footerCell=l.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,sn$1],stickyEnd:[2,`stickyEnd`,`stickyEnd`,sn$1]}})}return n})();var be=class{constructor(c,e){e.nativeElement.classList.add(...c._columnCssClassName)}};var jt=(()=>{class n extends be{constructor(){super(h(te),h(vt))}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[LE]})}return n})();var qt=(()=>{class n extends be{constructor(){let e=h(te),t=h(vt);super(e,t);let a=e._table?._getCellRole();a&&t.nativeElement.setAttribute(`role`,a)}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[LE]})}return n})();var Ae=(()=>{class n{template=h(io);_differs=h(tI);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof le?e.headerCell.template:this instanceof ze?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,features:[tn$1]})}return n})();var le=(()=>{class n extends Ae{_table=h(I,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,sn$1]},features:[LE,tn$1]})}return n})();var ze=(()=>{class n extends Ae{_table=h(I,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,sn$1]},features:[LE,tn$1]})}return n})();var Re=(()=>{class n extends Ae{_table=h(I,{optional:!0});when;static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[LE]})}return n})();var $=(()=>{class n{_viewContainer=h(vr);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var He=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=$f({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&KE(0,0)},dependencies:[$],encapsulation:2,changeDetection:1})}return n})();var Le=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=$f({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&KE(0,0)},dependencies:[$],encapsulation:2,changeDetection:1})}return n})();var Ut=(()=>{class n{templateRef=h(io);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var Lt=[`top`,`bottom`,`left`,`right`];var Fe=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(c=>this._updateCachedSizes(c)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(c,e,t=!0,a=!0,i,l,d){this._isNativeHtmlTable=c,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=a,this.direction=i,this._positionListener=l,this._tableInjector=d,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(c,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(c);let t=[];for(let a of c)a.nodeType===a.ELEMENT_NODE&&t.push(a,...Array.from(a.children));Mi({write:()=>{for(let a of t)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(c,e,t,a=!0,i=!0){if(!c.length||!this._isBrowser||!(e.some(N=>N)||t.some(N=>N))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let l=c[0],d=l.children.length,m=this.direction===`rtl`,u=m?`right`:`left`,h=m?`left`:`right`,g=e.lastIndexOf(!0),w=t.indexOf(!0),_,Qe,We;i&&this._updateStickyColumnReplayQueue({rows:[...c],stickyStartStates:[...e],stickyEndStates:[...t]}),Mi({earlyRead:()=>{_=this._getCellWidths(l,a),Qe=this._getStickyStartColumnPositions(_,e),We=this._getStickyEndColumnPositions(_,t)},write:()=>{for(let N of c)for(let M=0;M<d;M++){let Ke=N.children[M];e[M]&&this._addStickyStyle(Ke,u,Qe[M],M===g),t[M]&&this._addStickyStyle(Ke,h,We[M],M===w)}this._positionListener&&_.some(N=>!!N)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:_.slice(0,g+1).map((N,M)=>e[M]?N:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:w===-1?[]:_.slice(w).map((N,M)=>t[M+w]?N:null).reverse()}))}},{injector:this._tableInjector})}stickRows(c,e,t){if(!this._isBrowser)return;let a=t===`bottom`?c.slice().reverse():c,i=t===`bottom`?e.slice().reverse():e,l=[],d=[],m=[];Mi({earlyRead:()=>{for(let u=0,h=0;u<a.length;u++){if(!i[u])continue;l[u]=h;let g=a[u];m[u]=this._isNativeHtmlTable?Array.from(g.children):[g];let w=this._retrieveElementSize(g).height;h+=w,d[u]=w}},write:()=>{let u=i.lastIndexOf(!0);for(let h=0;h<a.length;h++){if(!i[h])continue;let g=l[h],w=h===u;for(let _ of m[h])this._addStickyStyle(_,t,g,w)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:d,offsets:l,elements:m}):this._positionListener?.stickyFooterRowsUpdated({sizes:d,offsets:l,elements:m})}},{injector:this._tableInjector})}updateStickyFooterContainer(c,e){this._isNativeHtmlTable&&Mi({write:()=>{let t=c.querySelector(`tfoot`);t&&(e.some(a=>!a)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(c,e){if(!c.classList.contains(this._stickCellCss))return;for(let a of e)c.style[a]=``,c.classList.remove(this._borderCellCss[a]);Lt.some(a=>e.indexOf(a)===-1&&c.style[a])?c.style.zIndex=this._getCalculatedZIndex(c):(c.style.zIndex=``,this._needsPositionStickyOnElement&&(c.style.position=``),c.classList.remove(this._stickCellCss))}_addStickyStyle(c,e,t,a){c.classList.add(this._stickCellCss),a&&c.classList.add(this._borderCellCss[e]),c.style[e]=`${t}px`,c.style.zIndex=this._getCalculatedZIndex(c),this._needsPositionStickyOnElement&&(c.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(c){let e={top:100,bottom:10,left:1,right:1},t=0;for(let a of Lt)c.style[a]&&(t+=e[a]);return t?`${t}`:``}_getCellWidths(c,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],a=c.children;for(let i=0;i<a.length;i++){let l=a[i];t.push(this._retrieveElementSize(l).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(c,e){let t=[],a=0;for(let i=0;i<c.length;i++)e[i]&&(t[i]=a,a+=c[i]);return t}_getStickyEndColumnPositions(c,e){let t=[],a=0;for(let i=c.length;i>0;i--)e[i]&&(t[i]=a,a+=c[i]);return t}_retrieveElementSize(c){let e=this._elemSizeCache.get(c);if(e)return e;let t=c.getBoundingClientRect(),a={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(c,a),this._resizeObserver.observe(c,{box:`border-box`})),a}_updateStickyColumnReplayQueue(c){this._removeFromStickyColumnReplayQueue(c.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(c)}_removeFromStickyColumnReplayQueue(c){let e=new Set(c);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(c){let e=!1;for(let t of c){let a=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};a.width!==this._elemSizeCache.get(t.target)?.width&&mn(t.target)&&(e=!0),this._elemSizeCache.set(t.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function mn(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(c=>n.classList.contains(c))}var se=new E(`STICKY_POSITIONING_LISTENER`);var Be=(()=>{class n{viewContainer=h(vr);elementRef=h(vt);constructor(){let e=h(I);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var Ve=(()=>{class n{viewContainer=h(vr);elementRef=h(vt);constructor(){let e=h(I);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var je=(()=>{class n{viewContainer=h(vr);elementRef=h(vt);constructor(){let e=h(I);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var qe=(()=>{class n{viewContainer=h(vr);elementRef=h(vt);constructor(){let e=h(I);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=on({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var Ue=(()=>{class n{_differs=h(tI);_changeDetectorRef=h(Ir);_elementRef=h(vt);_dir=h(A,{optional:!0});_platform=h(p);_viewRepeater;_viewportRuler=h(lt);_injector=h(de);_virtualScrollViewport=h(at,{optional:!0,host:!0});_positionListener=h(se,{optional:!0})||h(se,{optional:!0,skipSelf:!0});_document=h(z);_data;_renderedRange;_onDestroy=new J;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new J;_footerRowStickyUpdates=new J;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new J;_dataStream=new J;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Se;viewChange=new ve$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){h(new Rc(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ho(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new j:new _e,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Q(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(a,i,l)=>this._getEmbeddedViewArgs(a.item,l),a=>a.item.data,a=>{a.operation===u.INSERTED&&a.context&&this._renderCellTemplateForItem(a.record.item.rowDef,a.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(a=>{let i=t.get(a.currentIndex);i.context.$implicit=a.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=Bt(this._headerRowOutlet,`thead`);a&&(a.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=Bt(this._footerRowOutlet,`tfoot`);a&&(a.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...a],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((i,l)=>{this._addStickyColumnStyles([i],this._headerRowDefs[l])}),this._rowDefs.forEach(i=>{let l=[];for(let d=0;d<t.length;d++)this._renderRows[d].rowDef===i&&l.push(t[d]);this._addStickyColumnStyles(l,i)}),a.forEach((i,l)=>{this._addStickyColumnStyles([i],this._footerRowDefs[l])}),Array.from(this._columnDefsByName.values()).forEach(i=>i.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let i=this._renderedRange.start;i<t;i++){let l=this._data[i],d=this._getRenderRowsForData(l,i,a.get(l));this._cachedRenderRowsMap.has(l)||this._cachedRenderRowsMap.set(l,new WeakMap);for(let m=0;m<d.length;m++){let u=d[m],h=this._cachedRenderRowsMap.get(u.data);h.has(u.rowDef)?h.get(u.rowDef).push(u):h.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,a){return this._getRowDefs(e,t).map(l=>{let d=a&&a.has(l)?a.get(l):[];if(d.length){let m=d.shift();return m.dataIndex=t,m}else return{data:e,rowDef:l,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ce(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ce(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ce(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ce(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(l,d)=>{let m=!!d.getColumnsDiff();return l||m},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let i=this._footerRowDefs.reduce(e,!1);return i&&this._forceRenderFooterRows(),t||a||i}_switchDataSource(e){this._data=[],Q(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Q(this.dataSource)?e=this.dataSource.connect(this):Ls(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=N(this.dataSource)),this._renderChangeSubscription=Bs([e,this.viewChange]).pipe(Ho(this._onDestroy)).subscribe(([t,a])=>{this._data=t||[],this._renderedRange=a,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let a=Array.from(t?.columns||[]).map(d=>{return this._columnDefsByName.get(d)}),i=a.map(d=>d.sticky),l=a.map(d=>d.stickyEnd);this._stickyStyler.updateStickyColumns(e,i,l,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let a=0;a<e.viewContainer.length;a++){let i=e.viewContainer.get(a);t.push(i.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(i=>!i.when||i.when(t,e));else{let i=this._rowDefs.find(l=>l.when&&l.when(t,e))||this._defaultRowDef;i&&a.push(i)}return a.length,a}_getEmbeddedViewArgs(e,t){let a=e.rowDef,i={$implicit:e.data};return{templateRef:a.template,context:i,index:t}}_renderRow(e,t,a,i={}){let l=e.viewContainer.createEmbeddedView(t.template,i,a);return this._renderCellTemplateForItem(t,i),l}_renderCellTemplateForItem(e,t){for(let a of this._getCellTemplates(e))$.mostRecentCellOutlet&&$.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,a=e.length;t<a;t++){let l=e.get(t).context;l.count=a,l.first=t===0,l.last=t===a-1,l.even=t%2===0,l.odd=!l.even,this.multiTemplateDataRows?(l.dataIndex=this._renderRows[t].dataIndex,l.renderIndex=t):l.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let a=this._columnDefsByName.get(t);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,a)=>t||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Fe(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:N()).pipe(Ho(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?cw:aw;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Tw(0,t),Ho(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,i)=>this._measureRangeSize(a,i)}),Bs([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ho(this._onDestroy)).subscribe(([a,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let l=0;l<i.elements.length;l++){let d=i.elements[l];if(d){let m=i.offsets[l],u=a!==0?Math.max(a-m,m):-m;for(let h of d)h.style.top=`${-u}px`}}}),Bs([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ho(this._onDestroy)).subscribe(([a,i])=>{if(!(!i.sizes||!i.offsets||!i.elements))for(let l=0;l<i.elements.length;l++){let d=i.elements[l];if(d)for(let m of d)m.style.bottom=`${a+i.offsets[l]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(t){let i=a.createEmbeddedView(e.templateRef),l=i.rootNodes[0];if(i.rootNodes.length===1&&l?.nodeType===this._document.ELEMENT_NODE){l.setAttribute(`role`,`row`),l.classList.add(...e._contentClassNames);let d=l.querySelectorAll(e._cellSelector);for(let m=0;m<d.length;m++)d[m].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let a=this.viewChange.value,i=this._rowOutlet.viewContainer;e.start<a.start||(e.end,a.end);let l=e.start-a.start,d=e.end-e.start,m,u;for(let w=0;w<d;w++){let _=i.get(w+l);if(_&&_.rootNodes.length){m=u=_.rootNodes[0];break}}for(let w=d-1;w>-1;w--){let _=i.get(w+l);if(_&&_.rootNodes.length){u=_.rootNodes[_.rootNodes.length-1];break}}let h=m?.getBoundingClientRect?.(),g=u?.getBoundingClientRect?.();return h&&g?g.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function a(d,m){d&1&&cN(0,2)}function i(d,m){d&1&&(Qa(0,`thead`,0),KE(1,1),Zf(),Qa(2,`tbody`,0),KE(3,2)(4,3),Zf(),Qa(5,`tfoot`,0),KE(6,4),Zf())}function l(d,m){d&1&&KE(0,1)(1,2)(2,3)(3,4)}return $f({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(m,u,h){if(m&1&&Ec(h,Ut,5)(h,te,5)(h,Re,5)(h,le,5)(h,ze,5),m&2){let g;tp(g=np())&&(u._noDataRow=g.first),tp(g=np())&&(u._contentColumnDefs=g),tp(g=np())&&(u._contentRowDefs=g),tp(g=np())&&(u._contentHeaderRowDefs=g),tp(g=np())&&(u._contentFooterRowDefs=g)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(m,u){m&2&&sD(`cdk-table-fixed-layout`,u.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,sn$1],fixedLayout:[2,`fixedLayout`,`fixedLayout`,sn$1],recycleRows:[2,`recycleRows`,`recycleRows`,sn$1]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[HN([{provide:I,useExisting:n},{provide:se,useValue:null}])],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(m,u){m&1&&(aN(e),cN(0),cN(1,1),qM(2,a,1,0),qM(3,i,7,0)(4,l,4,0)),m&2&&(bT(2),YM(u._isServer?2:-1),bT(),YM(u._isNativeHtmlTable?3:4))},dependencies:[Ve,Be,qe,je],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})})()}return n})();function Ce(n,c){return n.concat(Array.from(c))}function Bt(n,c){let e=c.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let a=t.nodeType===1?t.nodeName:null;if(a===e)return t;if(a===`TABLE`)break;t=t.parentNode}return null}var Qt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ho({type:n});static ɵinj=er({imports:[ct]})}return n})();var Wt=(()=>{class n extends Ue{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵcmp=(function(){let e=[[[`caption`]],[[`colgroup`],[`col`]],`*`],t=[`caption`,`colgroup, col`,`*`];function a(d,m){d&1&&cN(0,2)}function i(d,m){d&1&&(Qa(0,`thead`,0),KE(1,1),Zf(),Qa(2,`tbody`,2),KE(3,3)(4,4),Zf(),Qa(5,`tfoot`,0),KE(6,5),Zf())}function l(d,m){d&1&&KE(0,1)(1,3)(2,4)(3,5)}return $f({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(m,u){m&2&&sD(`mat-table-fixed-layout`,u.fixedLayout)},exportAs:[`matTable`],features:[HN([{provide:Ue,useExisting:n},{provide:I,useExisting:n},{provide:se,useValue:null}]),LE],ngContentSelectors:t,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(m,u){m&1&&(aN(e),cN(0),cN(1,1),qM(2,a,1,0),qM(3,i,7,0)(4,l,4,0)),m&2&&(bT(2),YM(u._isServer?2:-1),bT(),YM(u._isNativeHtmlTable?3:4))},dependencies:[Ve,Be,qe,je],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})})()}return n})();var Kt=(()=>{class n extends ve{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`matCellDef`,``]],features:[HN([{provide:ve,useExisting:n}]),LE]})}return n})();var Gt=(()=>{class n extends De{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[HN([{provide:De,useExisting:n}]),LE]})}return n})();var $t=(()=>{class n extends te{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[HN([{provide:te,useExisting:n}]),LE]})}return n})();var Xt=(()=>{class n extends jt{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[LE]})}return n})();var Zt=(()=>{class n extends qt{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[LE]})}return n})();var Yt=(()=>{class n extends le{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,sn$1]},features:[HN([{provide:le,useExisting:n}]),LE]})}return n})();var Jt=(()=>{class n extends Re{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵdir=on({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[HN([{provide:Re,useExisting:n}]),LE]})}return n})();var en=(()=>{class n extends He{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵcmp=$f({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[HN([{provide:He,useExisting:n}]),LE],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&KE(0,0)},dependencies:[$],encapsulation:2,changeDetection:1})}return n})();var tn=(()=>{class n extends Le{static ɵfac=(()=>{let e;return function(a){return(e||(e=Sy(n)))(a||n)}})();static ɵcmp=$f({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[HN([{provide:Le,useExisting:n}]),LE],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,a){t&1&&KE(0,0)},dependencies:[$],encapsulation:2,changeDetection:1})}return n})();var nn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=ho({type:n});static ɵinj=er({imports:[Qt,F]})}return n})();function un(n,c){n&1&&(Qa(0,`th`,35),PN(1,`Giorno`),Zf())}function hn(n,c){if(n&1&&(Qa(0,`td`,36)(1,`b`),PN(2),Zf()()),n&2){let e=c.$implicit;bT(2),mD(e.day)}}function fn(n,c){n&1&&(Qa(0,`th`,35),PN(1,`Mattina`),Zf())}function gn(n,c){if(n&1&&(Qa(0,`td`,37),PN(1),Zf()),n&2){let e=c.$implicit;bT(),mD(e.morning)}}function yn(n,c){n&1&&(Qa(0,`th`,35),PN(1,`Pomeriggio`),Zf())}function xn(n,c){if(n&1&&(Qa(0,`td`,37),PN(1),Zf()),n&2){let e=c.$implicit;bT(),mD(e.afternoon)}}function wn(n,c){n&1&&yc(0,`tr`,38)}function _n(n,c){n&1&&yc(0,`tr`,39)}var an=class n{displayedColumns=[`day`,`morning`,`afternoon`];openingHours=[{day:`Lunedì`,morning:`8:00–12:00`,afternoon:`13:00–17:00`},{day:`Martedì`,morning:`8:00–13:00*`,afternoon:`—`},{day:`Mercoledì`,morning:`8:00–13:00`,afternoon:`—`},{day:`Giovedì`,morning:`8:00–13:00`,afternoon:`—`}];static ɵfac=function(e){return new(e||n)};static ɵcmp=$f({type:n,selectors:[[`mci-parish-office`]],decls:242,vars:3,consts:[[`imageUrl`,`https://images.pexels.com/photos/8296972/pexels-photo-8296972.jpeg`,`title`,`Ufficio parrocchiale`],[1,`height-container`],[`title`,`La segreteria parrocchiale`,`backgroundColor`,`var(--mat-sys-surface)`,`textColor`,`var(--mat-sys-on-surface)`],[`id`,`office-hours`],[`role`,`region`,`tabindex`,`0`,`aria-labelledby`,`office-hours`,1,`table-wrapper`],[`mat-table`,``,`aria-labelledby`,`office-hours`,`aria-describedby`,`tuesday-note`,3,`dataSource`],[`matColumnDef`,`day`],[`mat-header-cell`,``,`scope`,`col`,4,`matHeaderCellDef`],[`mat-cell`,``,`role`,`rowheader`,4,`matCellDef`],[`matColumnDef`,`morning`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`afternoon`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`id`,`tuesday-note`],[`title`,`Sacramenti`,`backgroundColor`,`var(--mat-sys-secondary)`,`textColor`,`var(--mat-sys-on-secondary)`],[`aria-hidden`,`true`,`svgIcon`,`sacrament-baptism`],[1,`sacrament-content`],[`src`,`https://images.unsplash.com/photo-1592346687232-aef0835b0a1e?auto=format&fit=crop&w=800&h=600&q=80`,`srcset`,`https://images.unsplash.com/photo-1592346687232-aef0835b0a1e?auto=format&fit=crop&w=480&h=360&q=80 480w, https://images.unsplash.com/photo-1592346687232-aef0835b0a1e?auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1592346687232-aef0835b0a1e?auto=format&fit=crop&w=1200&h=900&q=80 1200w`,`sizes`,`(max-width: 700px) calc(100vw - 96px), (max-width: 1376px) 30vw, 400px`,`alt`,`Un sacerdote solleva un bambino durante la celebrazione del Battesimo.`,`width`,`800`,`height`,`600`,`loading`,`lazy`,`decoding`,`async`],[1,`sacrament-text`],[`aria-hidden`,`true`,`svgIcon`,`sacrament-eucharist`],[`src`,`https://images.unsplash.com/photo-1547653515-9601f8b29f5c?auto=format&fit=crop&w=800&h=600&q=80`,`srcset`,`https://images.unsplash.com/photo-1547653515-9601f8b29f5c?auto=format&fit=crop&w=480&h=360&q=80 480w, https://images.unsplash.com/photo-1547653515-9601f8b29f5c?auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1547653515-9601f8b29f5c?auto=format&fit=crop&w=1200&h=900&q=80 1200w`,`sizes`,`(max-width: 700px) calc(100vw - 96px), (max-width: 1376px) 30vw, 400px`,`alt`,`Preparazione del calice e del vino per la celebrazione eucaristica.`,`width`,`800`,`height`,`600`,`loading`,`lazy`,`decoding`,`async`],[`aria-hidden`,`true`,`svgIcon`,`sacrament-confirmation`],[`src`,`https://images.unsplash.com/photo-1547843337-c59a53c2c0cf?auto=format&fit=crop&w=800&h=600&q=80`,`srcset`,`https://images.unsplash.com/photo-1547843337-c59a53c2c0cf?auto=format&fit=crop&w=480&h=360&q=80 480w, https://images.unsplash.com/photo-1547843337-c59a53c2c0cf?auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1547843337-c59a53c2c0cf?auto=format&fit=crop&w=1200&h=900&q=80 1200w`,`sizes`,`(max-width: 700px) calc(100vw - 96px), (max-width: 1376px) 30vw, 400px`,`alt`,`Una mano si protende verso la luce del sole.`,`width`,`800`,`height`,`600`,`loading`,`lazy`,`decoding`,`async`],[`aria-hidden`,`true`,`svgIcon`,`sacrament-marriage`],[`src`,`https://images.unsplash.com/photo-1474867985807-96ca17098cc9?auto=format&fit=crop&w=800&h=600&q=80`,`srcset`,`https://images.unsplash.com/photo-1474867985807-96ca17098cc9?auto=format&fit=crop&w=480&h=360&q=80 480w, https://images.unsplash.com/photo-1474867985807-96ca17098cc9?auto=format&fit=crop&w=800&h=600&q=80 800w, https://images.unsplash.com/photo-1474867985807-96ca17098cc9?auto=format&fit=crop&w=1200&h=900&q=80 1200w`,`sizes`,`(max-width: 700px) calc(100vw - 96px), (max-width: 1376px) 30vw, 400px`,`alt`,`Gli sposi inginocchiati davanti al sacerdote durante la celebrazione del matrimonio.`,`width`,`800`,`height`,`600`,`loading`,`lazy`,`decoding`,`async`],[`lang`,`de`],[`title`,`Contatti e come raggiungerci`,`backgroundColor`,`var(--mat-sys-surface)`,`textColor`,`var(--mat-sys-on-surface)`],[1,`address-container`],[1,`office`],[1,`size-default`],[1,`contact-details`],[`href`,`tel:+49821513030`],[`href`,`mailto:info@mci-augsburg.de`],[`routerLink`,`/contacts`],[`mat-header-cell`,``,`scope`,`col`],[`mat-cell`,``,`role`,`rowheader`],[`mat-cell`,``],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){e&1&&(yc(0,`mci-hero`,0),Qa(1,`div`,1)(2,`mci-section`,2)(3,`p`),PN(4,`La Segreteria della Missione Cattolica Italiana di Augsburg è a disposizione della comunità per informazioni, documenti e assistenza nelle pratiche religiose.`),Zf(),Qa(5,`p`),PN(6,`L’ufficio si trova al primo piano della casa parrocchiale, in Kobelweg 1, 86156 Augsburg.`),Zf(),Qa(7,`p`),PN(8,`La segreteria offre supporto per le pratiche relative ai sacramenti e mantiene i contatti con le parrocchie e gli uffici ecclesiastici in Italia, facilitando la richiesta e lo scambio di documenti.`),Zf(),Qa(9,`p`),PN(10,`La segreteria è affidata alla signora `),Qa(11,`strong`),PN(12,`Camilla Spieß`),Zf(),PN(13,`, che accoglie il pubblico con cordialità e disponibilità.`),Zf(),Qa(14,`h3`,3),PN(15,`Orari di apertura`),Zf(),Qa(16,`div`,4)(17,`table`,5),Jf(18,6),jE(19,un,2,0,`th`,7)(20,hn,3,1,`td`,8),ep(),Jf(21,9),jE(22,fn,2,0,`th`,7)(23,gn,2,1,`td`,10),ep(),Jf(24,11),jE(25,yn,2,0,`th`,7)(26,xn,2,1,`td`,10),ep(),jE(27,wn,1,0,`tr`,12)(28,_n,1,0,`tr`,13),Zf()(),Qa(29,`p`,14)(30,`em`),PN(31,`*Il martedì non è previsto il ricevimento del pubblico.`),Zf()()(),Qa(32,`mci-section`,15)(33,`p`),PN(34,`I sacramenti accompagnano i momenti più significativi del cammino cristiano. In questa sezione sono raccolte le principali informazioni sui documenti necessari e sui percorsi di preparazione per ricevere i sacramenti e celebrare il matrimonio.`),Zf(),Qa(35,`mat-accordion`)(36,`mat-expansion-panel`)(37,`mat-expansion-panel-header`)(38,`mat-panel-title`),yc(39,`mat-icon`,16),PN(40,` Battesimo `),Zf()(),Qa(41,`div`,17),yc(42,`img`,18),Qa(43,`div`,19)(44,`p`),PN(45,`Il Battesimo è il primo passo nel cammino di fede cristiana. Per preparare la celebrazione, sono necessari:`),Zf(),Qa(46,`ul`)(47,`li`),PN(48,`Certificato di nascita del bambino.`),Zf(),Qa(49,`li`),PN(50,`Certificato di Cresima dei padrini.`),Zf(),Qa(51,`li`),PN(52,`Nulla osta, per chi non appartiene alla parrocchia presso la quale si desidera celebrare il Battesimo. `),Zf(),Qa(53,`li`),PN(54,`Partecipazione al corso di preparazione al Battesimo.`),Zf()(),Qa(55,`p`),PN(56,`Per informazioni sulle modalità di iscrizione e sulla preparazione, è possibile rivolgersi alla segreteria.`),Zf()()()(),Qa(57,`mat-expansion-panel`)(58,`mat-expansion-panel-header`)(59,`mat-panel-title`),yc(60,`mat-icon`,20),PN(61,` Prima Comunione `),Zf()(),Qa(62,`div`,17),yc(63,`img`,21),Qa(64,`div`,19)(65,`p`),PN(66,`La Prima Comunione rappresenta una tappa importante nel percorso di fede dei bambini. Per accedere alla preparazione sono richiesti:`),Zf(),Qa(67,`ul`)(68,`li`),PN(69,`Certificato di Battesimo.`),Zf(),Qa(70,`li`),PN(71,`Frequenza del percorso di catechesi.`),Zf(),Qa(72,`li`),PN(73,`Eventuale nulla osta, qualora richiesto dalla parrocchia presso la quale verrà celebrato il sacramento. `),Zf()(),Qa(74,`p`),PN(75,`Per conoscere le modalità di iscrizione e il calendario degli incontri, si prega di contattare la segreteria.`),Zf()()()(),Qa(76,`mat-expansion-panel`)(77,`mat-expansion-panel-header`)(78,`mat-panel-title`),yc(79,`mat-icon`,22),PN(80,` Cresima `),Zf()(),Qa(81,`div`,17),yc(82,`img`,23),Qa(83,`div`,19)(84,`p`),PN(85,`La Cresima rafforza il cammino di fede e il legame con la comunità cristiana. Per la preparazione al sacramento sono necessari:`),Zf(),Qa(86,`ul`)(87,`li`),PN(88,`Certificato di Battesimo del candidato.`),Zf(),Qa(89,`li`),PN(90,`Attestato di frequenza del corso di preparazione alla Cresima.`),Zf(),Qa(91,`li`),PN(92,`Certificato di Cresima dei padrini.`),Zf()(),Qa(93,`p`),PN(94,`Per ulteriori informazioni sul percorso di preparazione e sui requisiti richiesti, è possibile rivolgersi alla segreteria.`),Zf()()()(),Qa(95,`mat-expansion-panel`)(96,`mat-expansion-panel-header`)(97,`mat-panel-title`),yc(98,`mat-icon`,24),PN(99,` Matrimonio `),Zf()(),Qa(100,`div`,17),yc(101,`img`,25),Qa(102,`div`,19)(103,`p`),PN(104,`La celebrazione del matrimonio cristiano è un momento importante nella vita di una coppia e richiede una preparazione sia spirituale sia documentale. Le procedure variano a seconda del luogo e del tipo di celebrazione.`),Zf(),Qa(105,`ul`)(106,`li`),PN(107,`Matrimonio religioso in Germania`),Zf(),Qa(108,`li`),PN(109,`Matrimonio religioso in Italia`),Zf(),Qa(110,`li`),PN(111,`Matrimonio civile in Germania`),Zf()()()(),Qa(112,`h4`),PN(113,`Matrimonio religioso in Germania`),Zf(),Qa(114,`p`),PN(115,`Per avviare la pratica matrimoniale sono generalmente richiesti:`),Zf(),Qa(116,`ul`)(117,`li`)(118,`strong`),PN(119,`Certificato di Battesimo`),Zf(),PN(120,`, rilasciato dalla parrocchia o dalla Missione presso cui è stato celebrato il Battesimo. `),Zf(),Qa(121,`li`)(122,`strong`),PN(123,`Certificato di Cresima`),Zf(),PN(124,`, rilasciato dalla parrocchia o dalla Missione presso cui è stata ricevuta la Cresima. `),Zf(),Qa(125,`li`)(126,`strong`),PN(127,`Certificato di stato libero.`),Zf(),PN(128,` Per chi risiede in Germania, può essere richiesta una copia del `),Qa(129,`em`,26),PN(130,`Meldebescheinigung`),Zf(),PN(131,` rilasciato dal Comune di residenza. Per chi risiede in Italia, è necessario informarsi presso la propria parrocchia circa il certificato di stato libero religioso e le eventuali vidimazioni della Curia Vescovile. `),Zf(),Qa(132,`li`)(133,`strong`),PN(134,`Documenti relativi al Battesimo e alla Cresima`),Zf(),PN(135,`, ove richiesti, per i fidanzati di confessione cattolica o evangelica tedesca (`),Qa(136,`em`,26),PN(137,`Taufschein`),Zf(),PN(138,` e `),Qa(139,`em`,26),PN(140,`Firmungsschein`),Zf(),PN(141,`). `),Zf(),Qa(142,`li`)(143,`strong`),PN(144,`Attestato di frequenza del corso di preparazione al matrimonio.`),Zf()()(),Qa(145,`p`),PN(146,`Si consiglia di contattare la segreteria con sufficiente anticipo per verificare i documenti necessari in base alla propria situazione.`),Zf(),Qa(147,`h4`),PN(148,`Matrimonio religioso in Italia`),Zf(),Qa(149,`p`),PN(150,`Per celebrare il matrimonio religioso in Italia sono generalmente necessari gli stessi documenti previsti per il matrimonio religioso in Germania, oltre al `),Qa(151,`strong`),PN(152,`nulla osta per la celebrazione del matrimonio fuori dalla Germania`),Zf(),PN(153,`.`),Zf(),Qa(154,`p`),PN(155,`Il documento viene richiesto dal parroco alla Curia Vescovile competente.`),Zf(),Qa(156,`p`),PN(157,`Per conoscere la procedura da seguire e i tempi necessari, è consigliabile rivolgersi alla segreteria.`),Zf(),Qa(158,`h4`),PN(159,`Matrimonio civile in Germania`),Zf(),Qa(160,`p`),PN(161,`Per celebrare il matrimonio civile in Germania, è importante informarsi preventivamente presso lo `),Qa(162,`em`,26),PN(163,`Standesamt`),Zf(),PN(164,` (ufficio di stato civile) del Comune di residenza e presso il Consolato italiano competente.`),Zf(),Qa(165,`p`)(166,`strong`),PN(167,`Documenti da richiedere in Italia`),Zf()(),Qa(168,`ul`)(169,`li`),PN(170,`Certificato internazionale di nascita, per chi è nato in Italia.`),Zf(),Qa(171,`li`),PN(172,`Certificato cumulativo relativo a cittadinanza, stato libero e residenza, secondo quanto richiesto dall'autorità competente. `),Zf()(),Qa(173,`p`)(174,`strong`),PN(175,`Documenti da procurare in Germania`),Zf()(),Qa(176,`ul`)(177,`li`),PN(178,`Certificato internazionale di nascita, per chi è nato in Germania.`),Zf(),Qa(179,`li`)(180,`em`,26),PN(181,`Meldebescheinigung zum Heiraten`),Zf(),PN(182,`, con data di rilascio conforme ai requisiti dell'ufficio competente. `),Zf()(),Qa(183,`p`),PN(184,`Occorre inoltre verificare con il Consolato la procedura per ottenere il certificato di capacità matrimoniale (`),Qa(185,`em`,26),PN(186,`Ehefähigkeitszeugnis`),Zf(),PN(187,`), da presentare allo `),Qa(188,`em`,26),PN(189,`Standesamt`),Zf(),PN(190,` secondo le indicazioni ricevute.`),Zf(),Qa(191,`p`),PN(192,`Poiché i documenti richiesti e i termini di validità possono variare in base alla situazione personale, è fondamentale verificare le indicazioni aggiornate presso le autorità competenti prima di avviare la pratica.`),Zf(),Qa(193,`h4`),PN(194,`Preparazione al matrimonio`),Zf(),Qa(195,`p`),PN(196,`La celebrazione del matrimonio cristiano, in Italia come in Germania, è un momento significativo che merita di essere preparato con cura.`),Zf(),Qa(197,`p`),PN(198,`Il percorso prematrimoniale offre ai fidanzati l'opportunità di riflettere sulla propria relazione, approfondire il significato del sacramento e prepararsi consapevolmente a un impegno di vita condiviso.`),Zf(),Qa(199,`p`),PN(200,`Non si tratta semplicemente di adempiere a una formalità necessaria per la celebrazione, ma di dedicare tempo al dialogo, alla conoscenza reciproca e alla costruzione di un progetto di vita fondato sulla fede, sull'amore e sulla responsabilità reciproca.`),Zf(),Qa(201,`p`),PN(202,`Il corso di preparazione al matrimonio prevede almeno dieci incontri con il sacerdote o con altre persone competenti e si svolge indicativamente nell'arco di tre mesi.`),Zf(),Qa(203,`p`),PN(204,`Per informazioni sul calendario e sulle modalità di partecipazione, è possibile contattare la segreteria della Missione.`),Zf()()()(),Qa(205,`mci-section`,27)(206,`div`,28)(207,`div`,29)(208,`h3`),PN(209,`L’ufficio della Missione`),Zf(),Qa(210,`p`,30),PN(211,`L’ufficio della Missione si trova in Kobelweg 1, 86156 Augsburg, al primo piano.`),Zf(),Qa(212,`dl`,31)(213,`div`)(214,`dt`),PN(215,`Telefono`),Zf(),Qa(216,`dd`)(217,`a`,32),PN(218,`0821 513030`),Zf()()(),Qa(219,`div`)(220,`dt`),PN(221,`Fax`),Zf(),Qa(222,`dd`),PN(223,`0821 312718`),Zf()(),Qa(224,`div`)(225,`dt`),PN(226,`E-mail`),Zf(),Qa(227,`dd`)(228,`a`,33),PN(229,`info@mci-augsburg.de`),Zf()()()()(),Qa(230,`div`)(231,`h3`),PN(232,`Come raggiungerci`),Zf(),Qa(233,`p`),PN(234,`Per consultare la mappa e trovare le indicazioni stradali, visita la pagina `),Qa(235,`a`,34),PN(236,`Contatti`),Zf(),PN(237,`.`),Zf(),Qa(238,`p`),PN(239,`Per informazioni sulle pratiche da svolgere e sui documenti necessari, è possibile contattare la segreteria durante gli orari di apertura.`),Zf(),Qa(240,`p`),PN(241,`Per qualsiasi informazione, la segreteria è a disposizione della comunità durante gli orari di apertura.`),Zf()()()()()),e&2&&(bT(17),WE(`dataSource`,t.openingHours),bT(10),WE(`matHeaderRowDef`,t.displayedColumns),bT(),WE(`matRowDefColumns`,t.displayedColumns))},dependencies:[b,f,Ht,zt,Pe,Ie,At,yt,nn,Wt,Gt,Yt,$t,Kt,Jt,Xt,Zt,en,tn,Eu],styles:[`[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{margin-block-start:var(--%NS%xl)}[_nghost-%COMP%]   mat-accordion[_ngcontent-%COMP%]{margin-top:60px;display:block}[_nghost-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-weight:600;font-size:22px;line-height:1.4em;letter-spacing:0;word-spacing:0}[_nghost-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{min-inline-size:0;gap:var(--%NS%md)}[_nghost-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none;inline-size:40px;block-size:40px}[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{height:auto;min-block-size:4rem;padding-block:var(--%NS%md)}@media(max-width:360px){[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding-inline:var(--%NS%sm)}[_nghost-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{margin-inline-end:var(--%NS%sm)}}[_nghost-%COMP%]   .sacrament-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);align-items:start;gap:var(--%NS%xl);margin-block-start:var(--%NS%md)}[_nghost-%COMP%]   .sacrament-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;inline-size:100%;block-size:auto;border-radius:var(--%NS%lg)}[_nghost-%COMP%]   .sacrament-content[_ngcontent-%COMP%] + h4[_ngcontent-%COMP%]{margin-block-start:var(--%NS%xl)}[_nghost-%COMP%]   .sacrament-text[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{margin-block-start:0}@media(max-width:700px){[_nghost-%COMP%]   .sacrament-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}[_nghost-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%mat-sys-primary);outline-offset:-2px}[_nghost-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-block-start:var(--%NS%sm)}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{color:#000;overflow-wrap:anywhere;text-underline-offset:.2em}[_nghost-%COMP%]   [_ngcontent-%COMP%]:is(a,.table-wrapper):focus-visible{outline:2px solid var(--%NS%mat-sys-primary);outline-offset:var(--%NS%xs)}[_nghost-%COMP%]   .table-wrapper[_ngcontent-%COMP%]{max-inline-size:100%;overflow-x:auto}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{inline-size:100%;border-collapse:collapse;margin-top:24px}[_nghost-%COMP%]   th[_ngcontent-%COMP%], [_nghost-%COMP%]   td[_ngcontent-%COMP%]{text-align:start;padding:var(--%NS%md);border-block-end:1px solid var(--%NS%mat-sys-outline-variant);white-space:nowrap}[_nghost-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-surface-container)}[_nghost-%COMP%]   .address-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px;margin-block:32px 48px}[_nghost-%COMP%]   .address-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.875rem;font-weight:600;line-height:1.3}[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--%NS%md);font-size:1.375rem;line-height:1.4}[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-secondary);font-size:.875rem;font-weight:700;line-height:1.6;letter-spacing:2px;text-transform:uppercase}[_nghost-%COMP%]   .contact-details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0}@media(max-width:900px){[_nghost-%COMP%]   .address-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}`]})};export{an as ParishOfficeComponent};