webpackJsonp([206],{VPA1:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"",data:function(){return{fullname:"",state:"-1",monthrange:"",options:[{label:"全部",value:"-1"},{label:"等待指派",value:"1"},{label:"已指派",value:"2"},{label:"已接受",value:"3"},{label:"已出发",value:"4"},{label:"已到达",value:"5"},{label:"清点完成",value:"6"},{label:"已删除",value:"99"}],pageNum:1,pagesize:10,total:0,Data:[]}},created:function(){this.pagesize=this.$store.state.DisplayNumber,this.init(),console.log(this.$router)},watch:{$route:function(t,e){this.init()}},components:{},methods:{init:function(t){var e=this;void 0==t&&null==t||(this.pageNum=1),null!=this.monthrange&&""!=this.monthrange||(this.monthrange=["",""]);var l={fullname:this.fullname,state:this.state,begin:this.monthrange[0],end:this.monthrange[1],cusId:"",pageNum:this.pageNum,numPerPage:this.pagesize,orderField:"",orderDirection:""};this.API_GET("Bill/GetEquCheckBills",l).then(function(t){e.Data=t.Dtos,e.total=t.DataBars,console.log(e.Data);for(var l=0;l<e.Data.length;l++){var a=e.Data[l];a.CreateDate=a.CreateDate.split("T")[0]}})},func:function(t,e){this.pagesize=t,this.pageNum=e,this.init()},Edit:function(){this.$router.push({path:"/AddGetEquCheckBills"})},BJindex:function(t){console.log(t.ID),this.$store.state.Vuex.CountId=t.ID,this.$router.push({path:"/BJGetEquCheckBills"})}}},n={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"box"},[l("router-view",{on:{refresh:t.init}}),t._v(" "),l("div",{staticClass:"TopSerch"},[l("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"客户名称"},on:{change:function(e){return t.init(1)}},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}}),t._v(" "),l("el-select",{staticStyle:{width:"150px"},attrs:{size:"mini",placeholder:"请选择状态",clearable:""},on:{change:function(e){return t.init(1)}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),l("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"datetimerange",size:"mini","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:function(e){return t.init(1)}},model:{value:t.monthrange,callback:function(e){t.monthrange=e},expression:"monthrange"}}),t._v(" "),l("el-button",{attrs:{type:"primary",loading:this.$store.state.Vuex.loading,size:"mini"},on:{click:function(e){return t.init()}}},[t._v("检索")]),t._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini"},on:{click:function(e){return t.Edit()}}},[t._v("创建")])],1),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Data,size:"mini",height:this.$store.state.TableOptimumHeight,"highlight-current-row":"",border:"",stripe:"","header-cell-style":{background:"#e1e1e1"}}},[l("el-table-column",{attrs:{prop:"CusFullName",label:"客户全称",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"Area",label:"区域",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"StateStr",label:"状态","show-overflow-tooltip":!0}}),t._v(" "),l("el-table-column",{attrs:{prop:"Engineer",label:"工程师","show-overflow-tooltip":!0}}),t._v(" "),l("el-table-column",{attrs:{prop:"CreateDate",label:"创建时间","show-overflow-tooltip":!0}}),t._v(" "),l("el-table-column",{attrs:{prop:"Progress",label:"清点进度","show-overflow-tooltip":!0}}),t._v(" "),l("el-table-column",{attrs:{prop:"TotalEquipment",label:"设备总数","show-overflow-tooltip":!0}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){return t.BJindex(e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),l("SaxoFenYe",{attrs:{total:t.total},on:{func:t.func}})],1)},staticRenderFns:[]},i=l("VU/8")(a,n,!1,null,null,null);e.default=i.exports}});