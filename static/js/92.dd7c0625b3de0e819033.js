webpackJsonp([92],{"4nVd":function(t,n){},EyVZ:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={data:function(){return{show:!1,input:"",year:2022}},created:function(){this.GetJT()},computed:{},watch:{},mounted:function(){document.addEventListener("click",this.handleClickOutside)},beforeUnmount:function(){document.removeEventListener("click",this.handleClickOutside)},methods:{GetJT:function(){this.year=Number(this.GetDate("-").split("-")[0]);var t=Math.floor((new Date).getMonth()/3)+1;this.input=this.year+"-"+t,this.$emit("update-value",this.input),this.show=!1},handleClickOutside:function(t){var n=this.$el;t.target===n||n.contains(t.target)||(this.show=!1)},focus:function(){this.show=!this.show},QuarterFun:function(t){this.input=this.year+"-"+t,this.show=!1,console.log(this.input),this.$emit("update-value",this.input)}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},destroyed:function(){},activated:function(){}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"Quarter"},[e("div",{staticClass:"Quarter_input",on:{click:t.focus}},[t._v("\n        "+t._s(t.input||"请选择季度")+"\n    ")]),t._v(" "),e("transition",{attrs:{name:"el-zoom-in-top"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"QuarterSelecet",attrs:{id:"myDiv"},on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"year"},[e("span",{on:{click:function(n){t.year-=1}}},[e("i",{staticClass:"el-icon-minus"})]),t._v(" "),e("span",[t._v(t._s(t.year))]),t._v(" "),e("span",{on:{click:function(n){t.year+=1}}},[e("i",{staticClass:"el-icon-plus"})])]),t._v(" "),e("div",{staticClass:"Quarter_content"},[e("div",{staticClass:"Quarter_li",on:{click:function(n){return n.stopPropagation(),t.QuarterFun(1)}}},[t._v("Q1")]),t._v(" "),e("div",{staticClass:"Quarter_li",on:{click:function(n){return n.stopPropagation(),t.QuarterFun(2)}}},[t._v("Q2")]),t._v(" "),e("div",{staticClass:"Quarter_li",on:{click:function(n){return n.stopPropagation(),t.QuarterFun(3)}}},[t._v("Q3")]),t._v(" "),e("div",{staticClass:"Quarter_li",on:{click:function(n){return n.stopPropagation(),t.QuarterFun(4)}}},[t._v("Q4")])]),t._v(" "),e("div",{staticClass:"Quarter_content"},[e("div",{staticClass:"JT",on:{click:function(n){return t.GetJT()}}},[t._v("今天")])])])])],1)},staticRenderFns:[]};var i={data:function(){return{Sales:[],quarter:""}},components:{quarter:e("VU/8")(a,o,!1,function(t){e("4nVd")},"data-v-68b80618",null).exports},created:function(){},mounted:function(){},computed:{},watch:{},methods:{exportExcel:function(t){var n=this,e=this.$refs.tableb2.selection;if(console.log(e),!e.length)return this.$message.warning("未选择数据"),!1;var a="<tr>\n                            <th>姓名</th>\n                            <th>季度</th>\n                            <th>业绩家数</th>\n                            <th>业绩金额</th>\n                            <th>冲刺目标家数</th>\n                            <th>冲刺目标金额</th>\n                            <th>奖金系数</th>\n                            <th>最终奖金</th>\n                        </tr>";e.forEach(function(e){a+="<tr>\n                            <td>"+e.Name+"</td>\n                            <td>"+e.Quarter+"&nbsp;</td>\n                            <td>"+e.JiaCount+"</td>\n                            <td>"+n.FinancialAmountFormat(e.PriceAmount,"")+"</td>\n                            <td>"+e.TargetCCJiaCount+"</td>\n                            <td>"+n.FinancialAmountFormat(e.TargetCCPriceAmount,"")+"</td>\n                            <td>"+e.Percentage+"</td>\n                            <td>"+n.FinancialAmountFormat(e.BonusAmount,"")+"</td>\n                        </tr>\n\n                        ",t&&(a+="\n                            \n                        <tr>\n                            <th></th>\n                            <th>客户名称</th>  \n                            <th>合同号</th>  \n                            <th>确认日期</th>  \n                            <th>年限</th>  \n                            <th>家数</th>  \n                            <th>合同金额</th>  \n                            <th>付款日期</th>  \n                            <th>返点金额</th>  \n                            <th>有效金额</th>\n                        </tr>",e.Details.forEach(function(t){a+="<tr>\n                                        <td></td>\n                                        <td>"+t.CusName+"</td>\n                                        <td>"+t.ContractCode+"</td>\n                                        <td>"+t.ConfirmDate+"</td>\n                                        <td>"+t.Year+"</td>\n                                        <td>"+t.JiaShu+"</td>\n                                        <td>"+n.FinancialAmountFormat(t.ContractAmount)+"</td>\n                                        <td>"+t.PayDate+"</td>\n                                        <td>"+n.FinancialAmountFormat(t.RebateAmount)+"</td>\n                                        <td>"+n.FinancialAmountFormat(Number(t.ContractAmount)-Number(t.RebateAmount))+"</td>\n                                    </tr>"}),a+="<tr><td></td></tr><tr><td></td></tr>")}),this.downloadTable(a,"销售服务部-宝马大包奖金")},handleUpdateValue:function(t){this.quarter=t,this.GetSales()},GetSales:function(){var t=this;this.API_GET("System/GetEmployeeMini",{type:9}).then(function(n){t.Sales=[],n.map(function(n){t.GetASBonus(n.UserName)})})},GetASBonus:function(t){var n=this;this.API_GET("Finance/GetASBonus",{cusType:1,username:t,quarter:this.quarter}).then(function(e){var a=e[e.length-1];a.obj={cusType:1,username:t,quarter:n.quarter},n.Sales.push(a)})},enumeration:function(t){console.log(t),this.$router.push({path:"XS_BMW_AS_MX",query:t.obj})}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("SaxoPage",{attrs:{title:"宝马大包奖金"},scopedSlots:t._u([{key:"title",fn:function(){return[e("div",{staticClass:"department",staticStyle:{"z-index":"99"}},[e("span",[t._v("季度")]),t._v(" "),e("quarter",{on:{"update-value":t.handleUpdateValue}})],1),t._v(" "),e("saxo-button",{attrs:{mini:"",type:"info"},on:{click:function(n){return t.exportExcel(!1)}}},[t._v("导出当前")]),t._v(" "),e("saxo-button",{attrs:{mini:"",type:"info"},on:{click:function(n){return t.exportExcel(!0)}}},[t._v("导出明细")])]},proxy:!0},{key:"content",fn:function(){return[e("router-view"),t._v(" "),e("el-table",{ref:"tableb2",staticStyle:{width:"100%"},attrs:{data:t.Sales,"header-cell-style":t.$store.state.headerCellStyle,"cell-style":t.$store.state.cellStyle,stripe:"",height:"100%"}},[e("el-table-column",{attrs:{prop:"Name",label:"姓名","show-overflow-tooltip":!0}}),t._v(" "),e("el-table-column",{attrs:{prop:"Quarter",label:"季度",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"JiaCount",label:"业绩家数",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{label:"回款金额",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.FinancialAmountFormat(n.row.PriceAmount2)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"业绩金额",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.FinancialAmountFormat(n.row.PriceAmount)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"TargetCCJiaCount",label:"冲刺目标家数",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{label:"冲刺目标金额",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.FinancialAmountFormat(n.row.TargetCCPriceAmount)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"Percentage",label:"奖金系数",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{label:"最终奖金",width:"120"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{float:"right"}},[t._v(t._s(t.FinancialAmountFormat(n.row.BonusAmount)))])]}}])}),t._v(" "),e("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("saxo-button",{attrs:{mini:"",type:"primary"},on:{click:function(e){return t.enumeration(n.row)}}},[t._v("明细")])]}}])})],1)]},proxy:!0}])})},staticRenderFns:[]},u=e("VU/8")(i,r,!1,null,null,null);n.default=u.exports}});