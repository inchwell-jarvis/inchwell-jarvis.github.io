webpackJsonp([229],{WJt1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),l=a.n(i),r={data:function(){return{SubordinateCompany:[{value:"",label:"全部"},{value:"服务公司",label:"服务公司"},{value:"技术公司",label:"技术公司"}],options:[{value:-1,label:"全部"},{value:1,label:"申请付款中"},{value:2,label:"已付款"},{value:3,label:"已驳回"}],auditstateList:[{value:-1,label:"全部"},{value:1,label:"等待财务请款"},{value:2,label:"等待财务经理审核请款"},{value:3,label:"等待总经理批准付款"},{value:4,label:"等待财务确认打款"}],retrieval:{search:"",buyer:"",paystate:1,invoicestate:-1,auditstate:-1,belongCompany:"",memo:"",pageNum:1,numPerPage:this.$store.state.NewDisplayNumber,orderField:"",orderDirection:""},total:0,tableData:[],GuidList:[]}},created:function(){this.start()},computed:{retrievalJT:function(){return l()(this.retrieval)}},watch:{retrievalJT:function(t,e){this.WatchFenYe(t,e)?this.$refs.SaxoFenYe.ReviseConNumber1():this.start()}},methods:{ConfirmMSOPayment:function(t){console.log(t),t.Merge&&2!=t.PayState?this.$router.push({path:"/purchasec-ollection-edit-merge",query:{row:t}}):this.$router.push({path:"/purchasec-ollection-edit",query:{row:t}})},MPOReceiveAnInvoice:function(t){var e=this;this.API_POST("MachineSO/MPOReceiveAnInvoice",{ID:t.ID}).then(function(t){e.$message.success("开票成功！"),e.start()})},printer:function(){var t=this,e=JSON.parse(l()(this.retrieval));e.pageNum=1,e.numPerPage=9999999,this.API_GET("MachineSO/GetFinanceMPOPays",e).then(function(e){for(var a=e.MachinePOPayDtos,i=0;i<a.length;i++){var l=a[i];l.CreateDate=l.CreateDate.split("T")[0],l.ConfirmDt&&(l.ConfirmDt=l.ConfirmDt.split("T")[0]),l.AuditorA&&(l.AuditorA=l.AuditorA.split("/")[0].slice(0,l.AuditorA.split("/")[0].length-4)),l.AuditorB&&(l.AuditorB=l.AuditorB.split("/")[0].slice(0,l.AuditorB.split("/")[0].length-4)),l.AuditorC&&(l.AuditorC=l.AuditorC.split("/")[0].slice(0,l.AuditorC.split("/")[0].length-4)),l.AuditorD&&(l.AuditorD=l.AuditorD.split("/")[0].slice(0,l.AuditorD.split("/")[0].length-4))}var r={th:["供应商名称","隶属公司","创建时间","付款金额","付款","审核付款","批准付款","采购员","采购单编号","备注"]};r.td=a.map(function(e){return[e.CusFullName,e.BelongCompany,e.CreateDate,t.FinancialAmountFormat(e.Amount,t.FinancialAmountSymbol(e.BuyingCurrency)),e.AuditorA,e.AuditorB,e.AuditorC,e.Buyer,e.POCode,e.Memo]}),t.NewDownloadTable(r,t.$route.meta.title)})},start:function(){var t=this;this.API_GET("MachineSO/GetFinanceMPOPays",this.retrieval).then(function(e){t.tableData=e.MachinePOPayDtos,t.total=e.DataBars;for(var a=0;a<t.tableData.length;a++){var i=t.tableData[a],l=t.GuidList.indexOf(i.ID);t.$set(i,"merge",-1!==l),i.CreateDate=i.CreateDate.split("T")[0],i.ConfirmDt&&(i.ConfirmDt=i.ConfirmDt.split("T")[0]),i.AuditorA&&(i.AuditorA=i.AuditorA.split("/")[0].slice(0,i.AuditorA.split("/")[0].length-4)),i.AuditorB&&(i.AuditorB=i.AuditorB.split("/")[0].slice(0,i.AuditorB.split("/")[0].length-4)),i.AuditorC&&(i.AuditorC=i.AuditorC.split("/")[0].slice(0,i.AuditorC.split("/")[0].length-4)),i.AuditorD&&(i.AuditorD=i.AuditorD.split("/")[0].slice(0,i.AuditorD.split("/")[0].length-4))}console.log(t.tableData)})},func:function(t,e){this.retrieval.numPerPage=t,this.retrieval.pageNum=e,this.start()},changeCheckbox:function(t){if(console.log(t.merge),t.merge)this.GuidList.push(t.ID);else{var e=this.GuidList.indexOf(t.ID);-1!==e&&this.GuidList.splice(e,1)}console.log(this.GuidList)},CreatePOPayMerge:function(){var t=this;console.log(this.GuidList),this.API_POST("Finance/CreatePOPayMerge",{GuidList:this.GuidList}).then(function(e){t.$message.success("已合并付款"),t.GuidList=[],t.start()})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:t.start}}),t._v(" "),a("div",{staticClass:"retrieve"},[a("div",{staticClass:"leftSpan"},[t._v("\n            "+t._s(t.$route.meta.title)+"\n            "),a("i",{staticClass:"el-icon-printer",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.printer()}}})]),t._v(" "),a("div",{staticClass:"ConView"},[a("div",{staticClass:"department"},[a("span",[t._v("供应商、单号")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入供应商、单号",size:"mini"},model:{value:t.retrieval.search,callback:function(e){t.$set(t.retrieval,"search",e)},expression:"retrieval.search"}})],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("采购员")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入采购员",size:"mini"},model:{value:t.retrieval.buyer,callback:function(e){t.$set(t.retrieval,"buyer",e)},expression:"retrieval.buyer"}})],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("付款状态：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择付款状态",size:"mini"},model:{value:t.retrieval.paystate,callback:function(e){t.$set(t.retrieval,"paystate",e)},expression:"retrieval.paystate"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("隶属公司")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择隶属公司",size:"mini"},on:{change:function(e){return t.start()}},model:{value:t.retrieval.belongCompany,callback:function(e){t.$set(t.retrieval,"belongCompany",e)},expression:"retrieval.belongCompany"}},t._l(t.SubordinateCompany,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("审核状态：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择审核状态",size:"mini"},model:{value:t.retrieval.auditstate,callback:function(e){t.$set(t.retrieval,"auditstate",e)},expression:"retrieval.auditstate"}},t._l(t.auditstateList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",{staticClass:"department"},[a("span",[t._v("备注")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入备注",size:"mini"},model:{value:t.retrieval.memo,callback:function(e){t.$set(t.retrieval,"memo",e)},expression:"retrieval.memo"}})],1)]),t._v(" "),this.GuidList.length>0?a("saxo-button",{staticStyle:{float:"right","margin-top":"13px"},attrs:{mini:""},on:{click:function(e){return t.CreatePOPayMerge()}}},[t._v("合并付款 ("+t._s(this.GuidList.length)+")")]):t._e()],1),t._v(" "),a("div",{staticClass:"content2"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":t.$store.state.headerCellStyle,"cell-style":t.$store.state.cellStyle,stripe:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"CusFullName",label:"供应商名称","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"BelongCompany",label:"隶属公司",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CreateDate",label:"创建时间",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{label:"付款金额",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{float:"right"}},[t._v(" "+t._s(t.FinancialAmountFormat(e.row.Amount,t.FinancialAmountSymbol(e.row.BuyingCurrency))))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"PayBy",label:"付款资金源",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AuditorA",label:"付款",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AuditorB",label:"审核付款",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"AuditorC",label:"批准付款",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Buyer",label:"采购员",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"POCode",label:"采购单编号",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Memo",label:"备注",width:"200","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{width:"84"},scopedSlots:t._u([{key:"default",fn:function(e){return["挂账款"!=e.row.PayBy?a("nav",{staticStyle:{display:"flex","justify-content":"center"}},[e.row.Merge?a("i",{staticClass:"el-icon-check",staticStyle:{color:"#67C23A","font-weight":"bolder"}}):t._e(),t._v(" "),e.row.Merge?t._e():a("el-checkbox",{on:{change:function(a){return t.changeCheckbox(e.row)}},model:{value:e.row.merge,callback:function(a){t.$set(e.row,"merge",a)},expression:"scope.row.merge"}})],1):t._e()]}}])},[a("template",{slot:"header"},[a("span",[t._v("合并付款")])])],2),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return["申请付款中"==e.row.PayStateStr?a("saxo-button",{attrs:{mini:"",type:"primary"},on:{click:function(a){return t.ConfirmMSOPayment(e.row)}}},[t._v("付款")]):t._e(),t._v(" "),"申请付款中"!==e.row.PayStateStr?a("saxo-button",{attrs:{mini:"",type:"info"},on:{click:function(a){return t.ConfirmMSOPayment(e.row)}}},[t._v("查看")]):t._e(),t._v(" "),1==e.row.InvoiceState?a("saxo-button",{attrs:{mini:"",type:"info"},on:{click:function(a){return t.MPOReceiveAnInvoice(e.row)}}},[t._v("收到发票")]):t._e()]}}])})],1)],1),t._v(" "),a("SaxoFenYe",{ref:"SaxoFenYe",attrs:{total:t.total},on:{func:t.func}})],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);e.default=n.exports}});