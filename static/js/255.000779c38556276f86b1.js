webpackJsonp([255],{EvtX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{Data:[],loading:!0,checked:!0,DataTimer:null}},created:function(){this.start()},methods:{path:function(t){console.log(t),"MPO"==t.SourceType&&this.$router.push({path:"apply-to-change-equipment-review-mpo",query:{ID:t.ID}}),"PO"==t.SourceType&&this.$router.push({path:"apply-to-change-equipment-review-po",query:{ID:t.ID}})},start:function(){var t=this;this.API_GET("MachineSO/GetMpoEquChanges",{forTo:"index",Id:"",state:"1"}).then(function(e){console.log(e.Dtos),t.Data=e.Dtos,t.loading=!1,t.DataTimer=setTimeout(function(){1==t.checked&&t.start()},1e4)})}},beforeDestroy:function(){this.checked="end",clearTimeout(this.DataTimer)},destroyed:function(){this.checked="end",clearTimeout(this.DataTimer)}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ContentCon_template"},[a("div",{staticClass:"TopName"},[t._t("default")],2),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"BomCon",attrs:{"element-loading-text":"加载中","element-loading-spinner":"el-icon-loading"}},[t._l(t.Data,function(e,i){return a("div",{key:i,staticClass:"Engineer maintain"},[a("div",{staticClass:"leftView"}),t._v(" "),a("div",{staticClass:"ConView"},[a("p",{staticClass:"Literal"},[t._v(t._s(e.CusFullName)+"\n                ")]),t._v(" "),a("p",{staticClass:"Literal"},[t._v(t._s(e.ContractCode)+"\n                    "),a("span",[t._v(t._s(e.Creater))])])]),t._v(" "),a("div",{staticClass:"LeftView"},[a("saxo-button",{staticStyle:{float:"right","margin-top":"18px"},attrs:{mini:"",type:"primary"},on:{click:function(a){return t.path(e)}}},[t._v("去审批")])],1)])}),t._v(" "),0==t.Data.length&&0==t.loading?a("el-empty",{attrs:{"image-size":200,description:"无待处理事项"}}):t._e()],2)])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(t){a("qMmm")},"data-v-faee6bc4",null);e.default=s.exports},qMmm:function(t,e){}});