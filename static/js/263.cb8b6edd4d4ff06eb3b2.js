webpackJsonp([263],{WRzm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{Data:[],loading:!0,checked:!0,DataTimer:null,retrieval:{search:"",state:9,pageNum:1,numPerPage:this.$store.state.NewDisplayNumber,orderField:"",orderDirection:"",enable:0,forTo:"index"}}},created:function(){this.start()},methods:{ApproveIMDt:function(t,e){var a=this;this.$confirm(1==e?"确定要批准本次挂账款吗？":"确定要驳回本次挂账款吗？","提示",{confirmButtonText:1==e?"批准":"驳回",cancelButtonText:"取消",type:"warning"}).then(function(){a.API_POST("CRM/EnableBBOC",{Id:t.ID}).then(function(t){a.$message({message:"审核成功！",type:"success"}),a.start()})}).catch(function(){a.$message.info("已取消操作！")})},start:function(){var t=this;this.API_GET("CRM/GetBBOCs",this.retrieval).then(function(e){console.log(e),t.Data=e.Dtos;for(var a=0;a<t.Data.length;a++){var n=t.Data[a];n.CreateDate=n.CreateDate.split("T")[0],n.SystemInfo?n.SystemInfo2=n.SystemInfo.split("@"):n.SystemInfo2=[]}console.log(t.Data),t.loading=!1})}},beforeDestroy:function(){this.checked="end",clearTimeout(this.DataTimer)},destroyed:function(){this.checked="end",clearTimeout(this.DataTimer)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ContentCon_template"},[a("div",{staticClass:"TopName"},[t._t("default")],2),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"BomCon",attrs:{"element-loading-text":"加载中","element-loading-spinner":"el-icon-loading"}},[t._l(t.Data,function(e,n){return a("div",{key:n,staticClass:"Engineer"},[a("div",{staticClass:"leftView"}),t._v(" "),a("div",{staticClass:"ConView"},[a("p",{staticClass:"Literal"},[t._v(t._s(e.BusinessLicenseName)+" ")]),t._v(" "),a("p",{staticClass:"Literal"},[t._v(t._s(t.FinancialAmountFormat(e.Amount))+" "),a("span",[t._v(t._s(e.CreateDate))])]),t._v(" "),a("p",{staticClass:"Literal"},[t._v(t._s(e.InvoiceStateStr)+" "),a("span",[t._v(t._s(e.Creater))])])]),t._v(" "),a("div",{staticClass:"rightView"},[a("saxo-button",{staticStyle:{float:"right","margin-top":"30px"},attrs:{mini:"",type:"primary"},on:{click:function(a){return t.ApproveIMDt(e,1)}}},[t._v("批准")])],1)])}),t._v(" "),0==t.Data.length&&0==t.loading?a("el-empty",{attrs:{"image-size":200,description:"无待处理事项"}}):t._e()],2)])},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("ieWo")},"data-v-432e45fe",null);e.default=s.exports},ieWo:function(t,e){}});