webpackJsonp([215],{yC4Z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box_s"},[a("router-view",{on:{refresh:t.start}}),t._v(" "),a("div",{staticClass:"retrieve"},[a("div",{staticClass:"leftSpan"},[t._v("\n            智能发货\n        ")]),t._v(" "),a("div",{staticClass:"ConView"},[a("div",{staticClass:"department"},[a("span",[t._v("发货方式：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择发货方式",size:"mini"},on:{change:function(e){return t.start()}},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("客户名称 合同号")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入检索项",size:"mini"},on:{input:function(e){return t.start()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)])]),t._v(" "),a("div",{staticClass:"content2"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":t.$store.state.headerCellStyle,"cell-style":t.$store.state.cellStyle,stripe:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"CusFullName",label:"客户名称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"ContractCode",label:"合同号",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Total_by",label:"购买数量",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Total_yf",label:"已发货数量",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Total_df",label:"待发货数量",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Total_kf",label:"库存可发货数量",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SendSeep",label:"发货进度",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PayDate",label:"付全款日期",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Score_Pay",label:"付款日期得分(满分50)",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Score_Sent",label:"发货进度得分(满分50)",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Score_Total",label:"总分(满分100)",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("saxo-button",{attrs:{mini:"",type:"primary"},on:{click:function(a){return t.MachineSO(e.row)}}},[t._v("去发货")])]}}])})],1)],1),t._v(" "),a("SaxoFenYe",{attrs:{total:t.total},on:{func:t.func}})],1)},staticRenderFns:[]},n=a("VU/8")({data:function(){return{options:[{label:"现货发货",value:1},{label:"在途发货",value:2}],type:1,search:"",tableData:[],total:0}},computed:{},watch:{},methods:{start:function(){var t=this,e={type:this.type,search:this.search};this.API_GET("MachineSO/GetMSOPriorityOfDelivery",e).then(function(e){t.tableData=e.Dtos,t.tableData.forEach(function(t){t.PayDate=t.PayDate.split("T")[0]}),t.total=e.DataBars})},func:function(t,e){this.retrieval.numPerPage=t,this.retrieval.pageNum=e,this.start()},MachineSO:function(t){if(0==t.ApplySent.length)return this.$message.warning("当前订单无可发货数量"),!1;this.$router.push({path:"/machine-sales-edit",query:{Id:t.Id,ApplySent:t.ApplySent}})}},created:function(){this.start()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},l,!1,null,null,null);e.default=n.exports}});