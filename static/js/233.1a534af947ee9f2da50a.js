webpackJsonp([233],{DgOi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),r=a.n(l),i={data:function(){return{options2:[{value:-1,label:"全部"},{value:1,label:"未开"},{value:2,label:"已开"},{value:3,label:"已作废"},{value:4,label:"不需要"},{value:8,label:"等待处理"}],options3:[{value:"",label:"全部"},{value:"MSO",label:"MSO"},{value:"SO",label:"SO"},{value:"MC",label:"MC"},{value:"AS",label:"AS"}],fanweiList:[{value:"-1",label:"全部"},{value:"1",label:"正数"},{value:"2",label:"零"},{value:"3",label:"负数"}],confirmationdates:[{value:"-1",label:"全部"},{value:"1",label:"2023年之前"},{value:"2",label:"2023年之后"}],retrieval:{search:"",invoicestate:1,creater:"",type:"",belong:"",pageNum:1,numPerPage:this.$store.state.NewDisplayNumber,orderField:"",orderDirection:"",id:"",fanwei:"1",dtFanwei:"-1"},subordinateList:["技术公司","服务公司"],tableData:[],total:0}},computed:{retrievalJT:function(){return r()(this.retrieval)}},watch:{retrievalJT:function(e,t){this.WatchFenYe(e,t)?this.$refs.SaxoFenYe.ReviseConNumber1():this.start()}},methods:{invoiceNumber:function(){this.$router.push({path:"/invoice-number"})},Router:function(e){this.$router.push({path:"/XiaoShou_bill_billEdit",query:{Id:e.ID}})},printer:function(){var e=this,t=JSON.parse(r()(this.retrieval));t.pageNum=1,t.numPerPage=9999999,this.API_GET("Finance/GetSOFinanceInvoices",t).then(function(t){var a=t.InvoiceDtos;console.log(a);var l={th:["客户名称","隶属公司","创建时间","类别","金额","申请人","财务确认人","发票号","单号","发票状态","联系人姓名","联系人电话","联系人邮箱","联系人地址","备注","物流单号"]};l.td=a.map(function(t){return[t.CusFullName,t.BelongCompany,e.formatDate(t.CreateDate),t.Type,e.FinancialAmountFormat(t.Amount),t.Creater,t.Confirmer,t.InvCode,t.POCode,t.InvoiceStateStr,t.Receiver,t.ReceiverTel,t.ReceiverEmail,t.ReceiverAddress,t.Memo,t.Logistics]}),e.NewDownloadTable(l,e.$route.meta.title)})},start:function(){var e=this;this.API_GET("Finance/GetSOFinanceInvoices",this.retrieval).then(function(t){e.tableData=t.InvoiceDtos,console.log(e.tableData),e.total=t.DataBars;for(var a=0;a<e.tableData.length;a++){var l=e.tableData[a];l.CreateDate=l.CreateDate.split("T")[0],l.ConfirmDt&&(l.ConfirmDt=l.ConfirmDt.split("T")[0])}})},func:function(e,t){this.retrieval.numPerPage=e,this.retrieval.pageNum=t,this.start()}},created:function(){this.start()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:e.start}}),e._v(" "),a("div",{staticClass:"retrieve"},[a("div",{staticClass:"leftSpan"},[e._v("\n            销售发票管理\n            "),a("i",{staticClass:"el-icon-printer",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.printer()}}}),e._v(" "),a("i",{staticClass:"el-icon-tickets",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.invoiceNumber()}}})]),e._v(" "),a("div",{staticClass:"ConView"},[a("div",{staticClass:"department"},[a("span",[e._v("供应商、单号")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入供应商、单号",size:"mini"},model:{value:e.retrieval.search,callback:function(t){e.$set(e.retrieval,"search",t)},expression:"retrieval.search"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("发票状态")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择付款状态",size:"mini"},model:{value:e.retrieval.invoicestate,callback:function(t){e.$set(e.retrieval,"invoicestate",t)},expression:"retrieval.invoicestate"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("业务类型")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择付款状态",size:"mini",clearable:""},model:{value:e.retrieval.type,callback:function(t){e.$set(e.retrieval,"type",t)},expression:"retrieval.type"}},e._l(e.options3,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("创建人")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入销售员",size:"mini"},model:{value:e.retrieval.creater,callback:function(t){e.$set(e.retrieval,"creater",t)},expression:"retrieval.creater"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("隶属公司")]),e._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"隶属公司",size:"mini"},model:{value:e.retrieval.belong,callback:function(t){e.$set(e.retrieval,"belong",t)},expression:"retrieval.belong"}},e._l(e.subordinateList,function(e){return a("el-option",{key:e+"rty",attrs:{label:e,value:e}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("发票金额")]),e._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"发票金额",size:"mini"},model:{value:e.retrieval.fanwei,callback:function(t){e.$set(e.retrieval,"fanwei",t)},expression:"retrieval.fanwei"}},e._l(e.fanweiList,function(e){return a("el-option",{key:e.value+"rty",attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("确认日期")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择确认日期",size:"mini",clearable:""},model:{value:e.retrieval.dtFanwei,callback:function(t){e.$set(e.retrieval,"dtFanwei",t)},expression:"retrieval.dtFanwei"}},e._l(e.confirmationdates,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)])]),e._v(" "),a("div",{staticClass:"content2"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":e.$store.state.headerCellStyle,"cell-style":e.$store.state.cellStyle,stripe:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"CusFullName",label:"客户名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"BelongCompany",label:"隶属公司",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"CreateDate",label:"创建时间",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Type",label:"类别",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{label:"金额",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{float:"right"}},[e._v(" "+e._s(e.FinancialAmountFormat(t.row.Amount)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"Creater",label:"申请人",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"Confirmer",label:"财务确认人",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"InvCode",label:"发票号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"POCode",label:"单号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"InvoiceStateStr",label:"发票状态",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("saxo-button",{attrs:{mini:"",type:"primary"},on:{click:function(a){return e.Router(t.row)}}},[e._v("操作")])]}}])})],1)],1),e._v(" "),a("SaxoFenYe",{ref:"SaxoFenYe",attrs:{total:e.total},on:{func:e.func}})],1)},staticRenderFns:[]},o=a("VU/8")(i,n,!1,null,null,null);t.default=o.exports}});