webpackJsonp([142],{DVoV:function(t,e){},zWrn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{areaS:[],options:[{label:"全部",value:-1,index:-1},{label:"寄回途中",value:1,index:1},{label:"已寄回",value:2,index:2}],GetRecoverysData:{search:"",area:"",state:-1,pageNum:1,numPerPage:10,orderField:"",orderDirection:""},total:0,Data:[]}},computed:{},watch:{},methods:{init:function(t){var e=this;1==t&&(this.GetRecoverysData.pageNum=1);var a={url:this.$store.state.http+"WO/GetRecoverys",api:"get",data:this.GetRecoverysData};this.$https(a).then(function(t){console.log(t.Data.Dtos),e.Data=t.Data.Dtos,e.total=t.Data.DataBars;for(var a=0;a<e.Data.length;a++)e.Data[a].CreateDate=e.Data[a].CreateDate.split("T")[0]})},Dit:function(t){this.$store.state.Vuex.Id=t.Id,this.$router.push({path:"/SendBackDetails"})},func:function(t,e){this.GetRecoverysData.numPerPage=t,this.GetRecoverysData.pageNum=e,this.init()},initGetArea:function(){var t=this,e={url:this.$store.state.http+"System/GetArea",api:"get"};this.$https(e).then(function(e){t.areaS=e.Data})}},created:function(){this.GetRecoverysData.numPerPage=this.$store.state.DisplayNumber,this.initGetArea(),this.init()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:t.init}}),t._v(" "),a("div",{staticClass:"TopSerch"},[a("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"请输入客户名称  物流单号"},on:{change:function(e){return t.init(1)}},model:{value:t.GetRecoverysData.search,callback:function(e){t.$set(t.GetRecoverysData,"search",e)},expression:"GetRecoverysData.search"}}),t._v(" "),a("el-select",{staticStyle:{width:"100px"},attrs:{size:"mini",placeholder:"请选择"},on:{change:function(e){return t.init(1)}},model:{value:t.GetRecoverysData.state,callback:function(e){t.$set(t.GetRecoverysData,"state",e)},expression:"GetRecoverysData.state"}},t._l(t.options,function(t){return a("el-option",{key:t.index,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),a("el-select",{staticStyle:{width:"120px"},attrs:{size:"mini",clearable:"",placeholder:"请选择区域"},on:{change:function(e){return t.init(1)}},model:{value:t.GetRecoverysData.area,callback:function(e){t.$set(t.GetRecoverysData,"area",e)},expression:"GetRecoverysData.area"}},t._l(t.areaS,function(t){return a("el-option",{key:t.Value+"1",attrs:{label:t.Value,value:t.Value}})}),1),t._v(" "),a("el-button",{attrs:{type:"primary",loading:this.$store.state.Vuex.loading,size:"mini"},on:{click:function(e){return t.init(1)}}},[t._v("检索")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Data,size:"mini",height:this.$store.state.TableOptimumHeight,"highlight-current-row":"",border:"","header-cell-style":{background:"#e1e1e1"}}},[a("el-table-column",{attrs:{prop:"CusFullName",label:"客户全称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"Area",label:"区域",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"EquInstallOrderCode",label:"安装任务编号",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Creater",label:"创建者",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Receiver",label:"回收者",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"StateStr",label:"状态",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CreateDate",label:"寄回日期",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.Dit(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("SaxoFenYe",{attrs:{total:t.total},on:{func:t.func}})],1)},staticRenderFns:[]};var n=a("VU/8")(r,i,!1,function(t){a("DVoV")},"data-v-365fbfa0",null);e.default=n.exports}});