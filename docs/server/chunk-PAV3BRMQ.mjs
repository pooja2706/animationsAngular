import './polyfills.server.mjs';
import{A as u,B as h,C as ge,D as y,E as me,F as ve,G as _,H as S,I as N,K as ye,Q as _e,R as K,T as Ce,U as x,V as Ve,Y as De,a as ae,b as le,c as ue,ca as be,d as w,e as b,f as M,g as I,h as L,i as c,j as de,k as ce,l as W,m as he,n as $,o as g,p as O,q,r as fe,s as z,t as a,u as Y,v as m,w as pe,x as Z,y as X,z as f}from"./chunk-TPO67HQA.mjs";import{a as d,b as p}from"./chunk-VVCT4QZE.mjs";var xe=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(Y),a(W))},e.\u0275dir=c({type:e});let n=e;return n})(),lt=(()=>{let e=class e extends xe{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=fe(e)))(o||e)}})(),e.\u0275dir=c({type:e,features:[m]});let n=e;return n})(),Pe=new g("");var ut={provide:Pe,useExisting:O(()=>R),multi:!0};function dt(){let n=K()?K().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ct=new g(""),R=(()=>{let e=class e extends xe{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!dt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(Y),a(W),a(ct,8))},e.\u0275dir=c({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&y("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[S([ut]),m]});let n=e;return n})();var ke=new g(""),Ge=new g("");function Te(n){return n!=null}function je(n){return ye(n)?ae(n):n}function Be(n){let e={};return n.forEach(i=>{e=i!=null?d(d({},e),i):e}),Object.keys(e).length===0?null:e}function Ue(n,e){return e.map(i=>i(n))}function ht(n){return!n.validate}function Re(n){return n.map(e=>ht(e)?e:i=>e.validate(i))}function ft(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(i){return Be(Ue(i,e))}}function He(n){return n!=null?ft(Re(n)):null}function pt(n){if(!n)return null;let e=n.filter(Te);return e.length==0?null:function(i){let t=Ue(i,e).map(je);return ue(t).pipe(le(Be))}}function Le(n){return n!=null?pt(Re(n)):null}function Me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function We(n){return n._rawValidators}function $e(n){return n._rawAsyncValidators}function J(n){return n?Array.isArray(n)?n:[n]:[]}function k(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ae(n,e){let i=J(e);return J(n).forEach(r=>{k(i,r)||i.push(r)}),i}function Ee(n,e){return J(e).filter(i=>!k(n,i))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=He(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},V=class extends G{get formDirective(){return null}get path(){return null}},F=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},sn=p(d({},gt),{"[class.ng-submitted]":"isSubmitted"}),qe=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(F,2))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&X("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[m]});let n=e;return n})(),ze=(()=>{let e=class e extends T{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(V,10))},e.\u0275dir=c({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&X("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[m]});let n=e;return n})();var A="VALID",P="INVALID",C="PENDING",E="DISABLED";function te(n){return(H(n)?n.validators:n)||null}function mt(n){return Array.isArray(n)?He(n):n||null}function ne(n,e){return(H(e)?e.asyncValidators:n)||null}function vt(n){return Array.isArray(n)?Le(n):n||null}function H(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ye(n,e,i){let t=n.controls;if(!(e?Object.keys(t):t).length)throw new w(1e3,"");if(!t[i])throw new w(1001,"")}function Ze(n,e,i){n._forEachChild((t,r)=>{if(i[r]===void 0)throw new w(1002,"")})}var D=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===P}get pending(){return this.status==C}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(t=>{t.disable(p(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(t=>{t.enable(p(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(d({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let i=je(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((t,r)=>t&&t._find(r),this)}getError(e,i){let t=i?this.get(i):this;return t&&t.errors?t.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(P)?P:A}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}},j=class extends D{constructor(e,i,t){super(te(i),ne(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,t={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Ze(this,!0,e),Object.keys(e).forEach(t=>{Ye(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,t)=>(e[t]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,t)=>t._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let t=this.controls[i];t&&e(t,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,t]of Object.entries(this.controls))if(this.contains(i)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,t,r)=>((t.enabled||this.disabled)&&(i[r]=t.value),i))}_reduceChildren(e,i){let t=e;return this._forEachChild((r,o)=>{t=i(t,r,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Q=class extends j{};var Xe=new g("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function yt(n,e){return[...e.path,n]}function Fe(n,e,i=ie){re(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Ct(n,e),Dt(n,e),Vt(n,e),_t(n,e)}function we(n,e,i=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),U(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function B(n,e){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function _t(n,e){if(e.valueAccessor.setDisabledState){let i=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(i),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}function re(n,e){let i=We(n);e.validator!==null?n.setValidators(Me(i,e.validator)):typeof i=="function"&&n.setValidators([i]);let t=$e(n);e.asyncValidator!==null?n.setAsyncValidators(Me(t,e.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function U(n,e){let i=!1;if(n!==null){if(e.validator!==null){let r=We(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(i=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=$e(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(i=!0,n.setAsyncValidators(o))}}}let t=()=>{};return B(e._rawValidators,t),B(e._rawAsyncValidators,t),i}function Ct(n,e){e.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ke(n,e)})}function Vt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ke(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Ke(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Dt(n,e){let i=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};n.registerOnChange(i),e._registerOnDestroy(()=>{n._unregisterOnChange(i)})}function bt(n,e){n==null,re(n,e)}function Mt(n,e){return U(n,e)}function At(n,e){if(!n.hasOwnProperty("model"))return!1;let i=n.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Et(n){return Object.getPrototypeOf(n.constructor)===lt}function Ft(n,e){n._syncPendingControls(),e.forEach(i=>{let t=i.control;t.updateOn==="submit"&&t._pendingChange&&(i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function wt(n,e){if(!e)return null;Array.isArray(e);let i,t,r;return e.forEach(o=>{o.constructor===R?i=o:Et(o)?t=o:r=o}),r||t||i||null}function It(n,e){let i=n.indexOf(e);i>-1&&n.splice(i,1)}function Ie(n,e){let i=n.indexOf(e);i>-1&&n.splice(i,1)}function Oe(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var v=class extends D{constructor(e=null,i,t){super(te(i),ne(t,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ie(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ie(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ot=n=>n instanceof v;var Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=c({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let n=e;return n})();var Qe=new g("");var St={provide:V,useExisting:O(()=>oe)},oe=(()=>{let e=class e extends V{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new b,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return Fe(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){we(t.control||null,t,!1),It(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Ft(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,o=this.form.get(t.path);r!==o&&(we(r||null,t),Ot(o)&&(Fe(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);bt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Mt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){re(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(ke,10),a(Ge,10),a(Xe,8))},e.\u0275dir=c({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&y("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:[M.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([St]),m,q]});let n=e;return n})();var Nt={provide:F,useExisting:O(()=>se)},se=(()=>{let e=class e extends F{set isDisabled(t){}constructor(t,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new b,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=wt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),At(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return yt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(V,13),a(ke,10),a(Ge,10),a(Pe,10),a(Qe,8))},e.\u0275dir=c({type:e,selectors:[["","formControlName",""]],inputs:{name:[M.None,"formControlName","name"],isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[S([Nt]),m,q]});let n=e;return n})();var xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=$({});let n=e;return n})(),ee=class extends D{constructor(e,i,t){super(te(i),ne(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,t={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,i={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){Ze(this,!1,e),e.forEach((t,r)=>{Ye(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,t)=>t._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,t)=>{e(i,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Se(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var et=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let o=this._reduceControls(t),s={};return Se(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new j(o,s)}record(t,r=null){let o=this._reduceControls(t);return new Q(o,r)}control(t,r,o){let s={};return this.useNonNullable?(Se(r)?s=r:(s.validators=r,s.asyncValidators=o),new v(t,p(d({},s),{nonNullable:!0}))):new v(t,r,o)}array(t,r,o){let s=t.map(l=>this._createControl(l));return new ee(s,r,o)}_reduceControls(t){let r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){if(t instanceof v)return t;if(t instanceof D)return t;if(Array.isArray(t)){let r=t[0],o=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(r,o,s)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var tt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Qe,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Xe,useValue:t.callSetDisabledState??ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=L({type:e}),e.\u0275inj=$({imports:[xt]});let n=e;return n})();function kt(n,e){if(n&1&&h(0,"div",15),n&2){let i=e.index;ve("--distance: ",i*8,"0px;")}}var nt=(()=>{let e=class e{constructor(t){this.fb=t,this.cardimage=["./card1.svg","./card2.svg","./card3.svg","./card4.svg"],this.values=[1,2,3,4],this.colors=["red","green","purple","yellow","blue"],this.cardvalues=[{header:"hello",content:"content"},{header:"hello",content:"content"},{header:"hello",content:"content"},{header:"hello",content:"content"}],this.addingform=t.group({header:new v(""),content:new v("")})}add(){this.cardvalues.push(this.addingform.value)}};e.\u0275fac=function(r){return new(r||e)(a(et))},e.\u0275cmp=I({type:e,selectors:[["app-cards"]],standalone:!0,features:[N],decls:29,vars:2,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"screen-container"],[1,"display-container"],[3,"click"],["open",""],["dialognew",""],[3,"formGroup"],["placeholder","header","formControlName","header"],["placeholder","content","formControlName","content"],[1,"iphone-btn"],[1,"card-container"],["class","card",3,"style",4,"ngFor","ngForOf"],[1,"card"]],template:function(r,o){if(r&1){let s=ge();f(0,"html",0)(1,"head"),h(2,"meta",1)(3,"meta",2)(4,"meta",3),f(5,"title"),_(6,"Document"),u()(),f(7,"body")(8,"div",4)(9,"div",5)(10,"button",6),y("click",function(){de(s);let at=me(13);return ce(at.show())}),_(11,"Add"),u(),f(12,"dialog",7,8)(14,"form",9)(15,"label"),_(16,"dfdfd"),u(),h(17,"input",10),f(18,"label"),_(19,"dfdfd"),u(),h(20,"input",11),u(),f(21,"button",6),y("click",function(){return o.add()}),_(22,"Save"),u()()(),h(23,"div",12),u(),f(24,"div",4)(25,"div",5)(26,"div",13),pe(27,kt,1,3,"div",14),u()(),h(28,"div",12),u()()()}r&2&&(z(14),Z("formGroup",o.addingform),z(13),Z("ngForOf",o.cardvalues))},dependencies:[x,Ce,tt,Je,R,qe,ze,oe,se],styles:['body[_ngcontent-%COMP%]{display:flex}.screen-container[_ngcontent-%COMP%]{margin:10px 200px}form[_ngcontent-%COMP%]{margin:10px}input[_ngcontent-%COMP%]{margin-bottom:10px;height:40px;border-style:none}dialog[_ngcontent-%COMP%]{height:200px;width:200px;border-radius:20px;margin:auto;position:absolute;top:25%;display:grid}.display-container[_ngcontent-%COMP%]{height:635px;width:-webkit-fill-available;display:flex;margin-right:30px;overflow:hidden}.card-container[_ngcontent-%COMP%]{width:fit-content;height:inherit;width:340px;position:absolute;top:0%;overflow:hidden}dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:gray;margin:auto auto 2px;height:40px;width:100px}button[_ngcontent-%COMP%]{background-color:gray;margin:auto;height:40px;width:100px}input[_ngcontent-%COMP%]:focus{background-color:#c0d6e9;border-style:solid;border-color:#18ffff;outline:none}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translateY(-100px)}.card[_ngcontent-%COMP%]{width:260px;height:280px;margin:auto;position:absolute;left:48px;top:10%;margin-top:var(--distance)}.card[_ngcontent-%COMP%]:nth-child(1){animation-delay:.4s;animation:_ngcontent-%COMP%_move .8s 1;background:url("./media/card14-STBWVF3Q.svg")}.card[_ngcontent-%COMP%]:nth-child(2){animation-delay:.8s;animation:_ngcontent-%COMP%_move 1.2s 1;background:url("./media/card2-ORMA4BDY.svg")}.card[_ngcontent-%COMP%]:nth-child(3){animation-delay:1.2s;animation:_ngcontent-%COMP%_move 1.6s 1;background:url("./media/card3-EPW2MZE7.svg")}.card[_ngcontent-%COMP%]:nth-child(4){animation-delay:1.6s;animation:_ngcontent-%COMP%_move 2s 1;background:url("./media/card4-YBTA2WAM.svg")}@keyframes _ngcontent-%COMP%_move{0%{transform:translateY(50pc)}}@keyframes _ngcontent-%COMP%_moveout{0%{transform:translateY(-50pc)}}']});let n=e;return n})();var it=(()=>{let e=class e{constructor(){this.title="animationsAngular"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:1,vars:0,template:function(r,o){r&1&&h(0,"app-cards")},dependencies:[x,nt]});let n=e;return n})();var rt=[];var ot={providers:[be(rt)]};var Gt={providers:[De()]},st=_e(ot,Gt);var Tt=()=>Ve(it,st),Fn=Tt;export{Fn as a};
