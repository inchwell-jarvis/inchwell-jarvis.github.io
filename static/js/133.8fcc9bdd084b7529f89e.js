webpackJsonp([133],{Dxz9:function(t,a){},"K+ab":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{query:{},Data:[],title:""}},created:function(){this.query=this.$route.query,this.GetASBonus()},mounted:function(){},computed:{},watch:{},methods:{StateIf:function(t,a){return Number(t)<=Number(a)?"target target_success":"target target_danger"},GetASBonus:function(){var t=this;this.API_GET("Finance/GetASBonus",this.query).then(function(a){console.log(a),t.Data=a,t.Data.forEach(function(a){t.$set(a,"HT",!1)}),t.title=t.Data[0].Name})}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},s={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("SaxoPage",{scopedSlots:t._u([{key:"content",fn:function(){return[n("h2",[t._v(t._s(t.title))]),t._v(" "),t._l(t.Data,function(a,e){return n("div",{key:e,staticClass:"module"},[n("p",{staticClass:"head1"},[t._v(t._s(a.Quarter))]),t._v(" "),n("div",{staticClass:"bottom_content"},[n("div",{class:t.StateIf(a.TargetCCJiaCount,a.JiaCount)},[n("span",[t._v("目标家数 "+t._s(a.TargetCCJiaCount))]),t._v(" "),n("span",[t._v("业绩家数 "+t._s(a.JiaCount))]),t._v(" "),"target target_success"==t.StateIf(a.TargetCCJiaCount,a.JiaCount)?n("span",[n("i",{staticClass:"el-icon-success"})]):t._e(),t._v(" "),"target target_success"!=t.StateIf(a.TargetCCJiaCount,a.JiaCount)?n("span",[n("i",{staticClass:"el-icon-warning"})]):t._e()]),t._v(" "),n("div",{class:t.StateIf(a.TargetCCPriceAmount,a.PriceAmount)},[n("span",[t._v("目标金额 "+t._s(t.FinancialAmountFormat(a.TargetCCPriceAmount)))]),t._v(" "),n("span",[t._v("业绩金额 "+t._s(t.FinancialAmountFormat(a.PriceAmount)))]),t._v(" "),"target target_success"==t.StateIf(a.TargetCCPriceAmount,a.PriceAmount)?n("span",[n("i",{staticClass:"el-icon-success"})]):t._e(),t._v(" "),"target target_success"!=t.StateIf(a.TargetCCPriceAmount,a.PriceAmount)?n("span",[n("i",{staticClass:"el-icon-warning"})]):t._e()]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"JiangJinGS"},[t._v(" 奖金系数 ： "+t._s(a.Percentage+"%"))]),t._v(" "),n("br"),t._v(" "),3!=e?n("p",{staticClass:"JiangJinGS"},[t._v("\n                    最终奖金 ：\n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.PriceAmount,"")))]),t._v("\n                     × \n                    "+t._s(a.Percentage+"%")+"\n                     = \n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.BonusAmount,""))+"\n                    ")])]):t._e(),t._v(" "),3==e?n("p",{staticClass:"JiangJinGS",staticStyle:{"margin-bottom":"20px"}},[t._v("\n                    全年奖金 ：\n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.PriceAmount,"")))]),t._v("\n                     × \n                    "+t._s(a.Percentage+"%")+"\n                     = \n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.AllYearAmount,"")))])]):t._e(),t._v(" "),3==e?n("p",{staticClass:"JiangJinGS"},[t._v("\n                    最终奖金 ：\n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.AllYearAmount,"")))]),t._v("\n                     - \n                    （\n                    "+t._s(t.FinancialAmountFormat(t.Data[0].BonusAmount,""))+"  + \n                    "+t._s(t.FinancialAmountFormat(t.Data[1].BonusAmount,""))+"  + \n                    "+t._s(t.FinancialAmountFormat(t.Data[2].BonusAmount,""))+"\n                    ）\n                     = \n                    "),n("span",{staticClass:"JiangJin"},[t._v(t._s(t.FinancialAmountFormat(a.BonusAmount,""))+"\n                    ")])]):t._e(),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"see",on:{click:function(t){a.HT=!a.HT}}},[t._v("查看相关合同 （"+t._s(a.Details.length)+"）")]),t._v(" "),n("br"),t._v(" "),n("transition",{attrs:{name:"el-zoom-in-top"}},[n("el-table",{directives:[{name:"show",rawName:"v-show",value:a.HT,expression:"item.HT"}],attrs:{data:a.Details,size:"mini","header-cell-style":t.$store.state.headerCellStyle}},[n("el-table-column",{attrs:{prop:"CusName",label:"客户名称",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Area",label:"区域",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ContractCode",label:"合同号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ConfirmDate",label:"确认日期",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Year",label:"年限",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{prop:"JiaShu",label:"家数",width:"60"}}),t._v(" "),n("el-table-column",{attrs:{label:"合同金额",width:"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{staticStyle:{float:"right"}},[t._v(" "+t._s(t.FinancialAmountFormat(a.row.ContractAmount)))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"付款日期",width:"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",[t._v(" "+t._s(a.row.PayDate))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"返点金额",width:"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{staticStyle:{float:"right"}},[t._v(" "+t._s(t.FinancialAmountFormat(a.row.RebateAmount)))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"有效金额",width:"110"},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{staticStyle:{float:"right"}},[t._v(" "+t._s(t.FinancialAmountFormat(Number(a.row.ContractAmount)-Number(a.row.RebateAmount))))])]}}],null,!0)})],1)],1)],1)])})]},proxy:!0}])})},staticRenderFns:[]};var i=n("VU/8")(e,s,!1,function(t){n("Dxz9")},"data-v-426dfa42",null);a.default=i.exports}});