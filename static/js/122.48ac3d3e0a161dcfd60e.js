webpackJsonp([122],{"11bS":function(e,t){},"D/qw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"",data:function(){return{Isitavailable:[{label:"可用",value:!0},{label:"不可用",value:!1}],Typeofcustomer:[{label:"宝马"},{label:"保时捷"},{label:"奥迪"},{label:"奔驰"},{label:"劳斯莱斯"},{label:"路虎"},{label:"自由市场"},{label:"其他"}],Region:[],pageNum:1,pagesize:10,search:"",area:"",type:"",enable:!0,data:[],total:0}},created:function(){this.pagesize=this.$store.state.DisplayNumber,this.initGetArea(),this.init()},components:{},methods:{init:function(e){var t=this;1==e&&(this.pageNum=1);var a={api:"get",url:this.$store.state.http+"CRM/GetCustomers",data:{pageNum:this.pageNum,numPerPage:this.pagesize,orderField:"",orderDirection:"",search:this.search,grade:"",area:this.area,type:this.type,enable:this.enable}};this.$https(a).then(function(e){console.log(e),t.data=e.Data.Dtos,t.total=e.Data.DataBars;for(var a=0;a<t.data.length;a++){var l=t.data[a];l.DeleteFlag=!l.DeleteFlag}})},initGetArea:function(){var e=this,t={url:this.$store.state.http+"System/GetArea",api:"get"};this.$https(t).then(function(t){console.log(t.Data),e.Region=t.Data})},Operation:function(e,t){1==t&&(this.$store.state.Vuex.Id=e.CusId,this.$router.push({path:"/BJCustomerMsg"}))},func:function(e,t){this.pagesize=e,this.pageNum=t,this.init()},Newcustomers:function(){this.$router.push({path:"/AddCustomerMsg"})},Switch:function(e){var t=this;console.log(e.CusId);var a={api:"post",url:this.$store.state.http+"CRM/SetCustomer",data:{Id:e.CusId}};this.$https(a).then(function(e){t.init()})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:e.init}}),e._v(" "),a("div",{staticClass:"TopSerch"},[a("el-input",{staticStyle:{width:"193px"},attrs:{clearable:"",size:"mini",placeholder:"客户全称、客户简称"},on:{change:function(t){return e.init(1)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),a("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",clearable:"",placeholder:"请选择区域"},on:{change:function(t){return e.init(1)}},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}},e._l(e.Region,function(e,t){return a("el-option",{key:t,attrs:{label:e.Value,value:e.Value}})}),1),e._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{size:"mini",clearable:"",placeholder:"请选择客户类型"},on:{change:function(t){return e.init(1)}},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(this.$store.state.Vuex.CustomerTypes,function(e){return a("el-option",{key:e+"2",attrs:{label:e,value:e}})}),1),e._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"是否可用"},on:{change:function(t){return e.init(1)}},model:{value:e.enable,callback:function(t){e.enable=t},expression:"enable"}},e._l(e.Isitavailable,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-button",{attrs:{type:"primary",loading:this.$store.state.Vuex.loading,size:"mini"},on:{click:function(t){return e.init(1)}}},[e._v("检索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini"},on:{click:function(t){return e.Newcustomers()}}},[e._v("新增客户")])],1),e._v(" "),a("div",{staticClass:"content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,size:"mini",height:this.$store.state.TableOptimumHeight,"highlight-current-row":"",border:"","header-cell-style":{background:"#e1e1e1"}}},[a("el-table-column",{attrs:{prop:"FullName",label:"客户全名","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"BusinessLicenseName",label:"营业执照名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"ShortName",width:"150",label:"客户简称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Type",width:"120",label:"客户类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ServiceRegional",label:"隶属区域",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"禁用/启用",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return e.Switch(t.row)}},model:{value:t.row.DeleteFlag,callback:function(a){e.$set(t.row,"DeleteFlag",a)},expression:"scope.row.DeleteFlag"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.Operation(t.row,1)}}},[e._v("编辑")])]}}])})],1)],1),e._v(" "),a("SaxoFenYe",{attrs:{total:e.total},on:{func:e.func}})],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(e){a("11bS")},"data-v-498ea4e0",null);t.default=n.exports}});