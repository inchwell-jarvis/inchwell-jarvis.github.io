webpackJsonp([197],{"5o8d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),i=a.n(l),n={data:function(){return{retrieval:{pageNum:1,numPerPage:this.$store.state.NewDisplayNumber,orderField:"",orderDirection:"",Time:"",begin:"",end:"",appliedby:"",state:"-1",id:""},Data:[],total:0,StateList:[{name:"全部",value:"-1"},{name:"申请中",value:"1"},{name:"部门(区域)经理已审批",value:"2"},{name:"出纳已审核",value:"3"},{name:"总经理已审批",value:"4"},{name:"出纳已请款",value:"5"},{name:"财务经理已复核",value:"6"},{name:"已完成",value:"9"},{name:"已驳回",value:"10"}]}},computed:{retrievalJT:function(){return i()(this.retrieval)}},watch:{retrievalJT:function(e,t){this.WatchFenYe(e,t)?this.$refs.SaxoFenYe.ReviseConNumber1():this.start()}},created:function(){this.start()},methods:{pick:function(e){console.log(e),e&&(this.retrieval.begin=e[0],this.retrieval.end=e[1])},start:function(){var e=this;this.retrieval.month=this.retrieval.month||"",this.API_GET("Finance/GetReimbursements",this.retrieval).then(function(t){console.log(t),e.Data=t.Dtos,e.total=t.DataBars;for(var a=0,l="",i=0;i<e.Data.length;i++){var n=e.Data[i];l+=n.Amount+"+",a+=n.Amount,0==n.IsManQin?n.IsManQinStr="否":1==n.IsManQin?n.IsManQinStr="是":n.IsManQinStr="无",1==n.Status?n.StatusStr="已初核":n.StatusStr="已复核",n.JaJa="",null!=n.SpecialJia&&""!=n.SpecialJia&&(n.JaJa+="["+n.SpecialJiaM+" 加 "+n.SpecialJia+"]"),null!=n.SpecialJian&&""!=n.SpecialJia&&(n.JaJa+="["+n.SpecialJianM+" 减 "+n.SpecialJian+"]")}console.log(l),console.log(a)})},func:function(e,t){this.retrieval.numPerPage=e,this.retrieval.pageNum=t,this.start()},edit:function(e){this.$router.push({path:"expense-edit",query:{ID:e.ID}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:function(t){return e.start()}}}),e._v(" "),a("div",{staticClass:"retrieve"},[a("div",{staticClass:"leftSpan"},[e._v("\n            "+e._s(e.$route.meta.title)+"\n\n            "),a("i",{staticClass:"el-icon-s-data",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$router.push("/expense-data")}}})]),e._v(" "),a("div",{staticClass:"ConView"},[a("div",{staticClass:"department"},[a("span",[e._v("申请人")]),e._v(" "),a("el-input",{attrs:{placeholder:"申请人",size:"mini"},model:{value:e.retrieval.appliedby,callback:function(t){e.$set(e.retrieval,"appliedby",t)},expression:"retrieval.appliedby"}})],1),e._v(" "),a("div",{staticClass:"department",staticStyle:{width:"500px"}},[a("span",[e._v("时间")]),e._v(" "),a("el-date-picker",{attrs:{size:"mini",type:"daterange","range-separator":"至","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.pick},model:{value:e.retrieval.Time,callback:function(t){e.$set(e.retrieval,"Time",t)},expression:"retrieval.Time"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("选择状态：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择状态",size:"mini"},model:{value:e.retrieval.state,callback:function(t){e.$set(e.retrieval,"state",t)},expression:"retrieval.state"}},e._l(e.StateList,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})}),1)],1)]),e._v(" "),a("router-link",{attrs:{to:"/expense-create"}},[a("saxo-button",{staticStyle:{float:"right","margin-top":"13px"},attrs:{mini:"",type:"success"}},[e._v("创 建")])],1)],1),e._v(" "),a("div",{staticClass:"content2"},[a("el-table",{attrs:{data:e.Data,"header-cell-style":e.$store.state.headerCellStyle,"cell-style":e.$store.state.cellStyle,stripe:"",height:"100%"}},[a("el-table-column",{attrs:{label:"时间",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.Date.split("T")[0])+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金额",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{float:"right"}},[e._v(" "+e._s("￥"+t.row.Amount.toFixed(2)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"Address",label:"地点","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"Appliedby",label:"申请人",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Objective",label:"目的",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ReiType",label:"类型",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"StateStr",label:"状态",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("saxo-button",{attrs:{mini:""},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")])]}}])})],1)],1),e._v(" "),a("SaxoFenYe",{ref:"SaxoFenYe",attrs:{total:e.total},on:{func:e.func}})],1)},staticRenderFns:[]},s=a("VU/8")(n,r,!1,null,null,null);t.default=s.exports}});