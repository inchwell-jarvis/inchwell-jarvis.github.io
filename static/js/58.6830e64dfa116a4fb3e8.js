webpackJsonp([58],{BUlK:function(e,t){},bJoF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{Kehu:"",CusId:"",RepairName:"",RepairNameEn:"",MobilePhone:"",Tel:"",Email:"",AddressDetail:"",POCode:"",BelongCompany:"",options:[{lable:"技术公司",value:"技术公司"},{lable:"服务公司",value:"服务公司"}],CFclick:!0}},computed:{},watch:{},methods:{CreateMSO:function(){var e=this;if(!this.CFclick)return this.$message.error("请勿连续点击！"),!1;this.CFclick=!1;var t=setTimeout(function(){e.CFclick=!0,clearTimeout(t)},3e3);if(!this.POCode)return this.$message.error("没有输入采购单编号！"),!1;if(!this.CusId)return this.$message.error("没有输入供应商！"),!1;if(!this.BelongCompany)return this.$message.error("没有选择隶属公司！"),!1;var s={POCode:this.POCode,CusId:this.CusId,CusLinkMan:{ChineseName:this.RepairName,Address:this.AddressDetail,MobilePhone:this.MobilePhone,EMail:this.Email},BelongCompany:this.BelongCompany,type:"MPO"};this.API_POST("MachineSO/CreateMPO",s).then(function(t){e.$message({message:"创建成功！",type:"success"}),e.$router.push({path:"/machine-purchase-edit",query:{Id:t}}),e.$emit("refresh")})},querySearch:function(e,t){if(console.log(e),void 0==e)return e="",!1;""==e&&(e="北京");var s={search:e,type:"供应商"};this.API_GET("CRM/GetCustomerMini",s).then(function(e){console.log(e.Dtos);if(0===e.Dtos.length)return t([]),!1;for(var s=0;s<e.Dtos.length;s++)e.Dtos[s].value=e.Dtos[s].FullName;t(e.Dtos)})},querySearchs:function(e,t){if(""==this.CusId)return!1;var s={cusId:this.CusId};this.API_GET("CRM/GetCusLinkManMini",s).then(function(e){console.log(e.Dtos);if(0===e.Dtos.length)return t([]),!1;for(var s=0;s<e.Dtos.length;s++)e.Dtos[s].value=e.Dtos[s].Name;t(e.Dtos)})},handleSelects:function(e){console.log(e),this.RepairName=e.Name,this.RepairNameEn=e.NameEn,this.MobilePhone=e.Mobile,this.Tel=e.Tel,this.Email=e.Email,this.AddressDetail=e.Address},handleSelect:function(e){console.log(e),this.CusId=e.CusId}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box_s"},[s("div",{staticClass:"retrieve"},[s("span",{staticClass:"retrieveSpan"},[e._v("创建整机采购")]),e._v(" "),s("saxo-button",{staticStyle:{float:"right"},attrs:{type:"success",mini:""},on:{click:function(t){return e.CreateMSO()}}},[e._v("创 建")])],1),e._v(" "),s("div",{staticClass:"From"},[s("span",[e._v("采购单编号")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.POCode,callback:function(t){e.POCode=t},expression:"POCode"}})],1),e._v(" "),s("div",{staticClass:"From"},[s("span",[e._v("供应商")]),e._v(" "),s("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.Kehu,callback:function(t){e.Kehu=t},expression:"Kehu"}})],1),e._v(" "),s("div",{staticClass:"From"},[s("span",[e._v("隶属公司")]),e._v(" "),s("el-select",{staticStyle:{width:"300px",marginTop:"5px"},attrs:{placeholder:"请选择客户类型",clearable:""},model:{value:e.BelongCompany,callback:function(t){e.BelongCompany=t},expression:"BelongCompany"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)])},staticRenderFns:[]};var i=s("VU/8")(n,o,!1,function(e){s("BUlK")},"data-v-9cb0e758",null);t.default=i.exports}});