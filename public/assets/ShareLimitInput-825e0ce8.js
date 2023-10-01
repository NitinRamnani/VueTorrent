import{W as h,X as c,F as u,Y as d,k as a,s as m,Z as p,r as _,$ as g,I as n,A as l,B as o,a as f}from"./index-90e29838.js";import{S as v}from"./index-d12b1238.js";import"./vue-b220ace6.js";const r=v.extend({name:"v-switch",directives:{Touch:h},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...c.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:s,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(u,{},[this.loading===!1?null:this.$slots.progress||this.$createElement(d,{props:{color:this.loading===!0||this.loading===""?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(s){(s.keyCode===a.left&&this.isActive||s.keyCode===a.right&&!this.isActive)&&this.onChange()}}}),b={name:"ShareLimitInput",props:["title","initialLimit"],data(){return{mdiPercent:p,mdiClose:_,mdiClockTimeEight:g,global:!1,unlimited:!1,limit:""}},created(){if(this.initialLimit===-2){this.global=!0;return}if(this.initialLimit===-1){this.unlimited=!0;return}this.limit=this.initialLimit},methods:{disableUnlimited(){this.unlimited=!1},disabledGlobal(){this.global=!1},export(){return this.global?-2:this.unlimited?-1:this.limit}}};var w=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{"min-width":"300px"}},[i("h3",[t._v(t._s(t.title))]),i(n,[i(l,{attrs:{dense:""}},[i(o,[i(r,{staticClass:"v-input--reverse pa-0 ma-0",attrs:{"hide-details":"",inset:"",label:t.$t("modals.shareLimit.input.globalLimit")},on:{change:t.disableUnlimited},model:{value:t.global,callback:function(e){t.global=e},expression:"global"}})],1)],1)],1),i(n,[i(l,{attrs:{dense:""}},[i(o,[i(r,{staticClass:"v-input--reverse pa-0 ma-0",attrs:{"hide-details":"",inset:"",label:t.$t("modals.shareLimit.input.unlimited")},on:{change:t.disabledGlobal},model:{value:t.unlimited,callback:function(e){t.unlimited=e},expression:"unlimited"}})],1)],1)],1),i(n,{staticClass:"mx-2"},[i(f,{attrs:{type:"number",autofocus:"",clearable:"",dense:"",label:`${t.title} Limit`,"prepend-inner-icon":t.title==="Ratio"?t.mdiPercent:t.mdiClockTimeEight},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1)],1)},C=[],S=m(b,w,C,!1,null,null,null,null);const L=S.exports;export{L as default};
