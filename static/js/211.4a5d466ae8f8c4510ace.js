webpackJsonp([211],{YA2S:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"",data:function(){return{Data:this.$route.query,GetMCPlistDataList:0,GetMCPlistData:[],reverse:!0,FinancialConfirmed:0,FinancialUnconfirmed:0,dialogVisible:!1,admin:"",value1:"",Id:"",Name:""}},created:function(){this.GetMCPlist()},components:{},methods:{GetMCPlist:function(){var t=this;this.API_GET("Maintain/GetMCPlist",{id:this.Data.MaintainId}).then(function(e){t.GetMCPlistData=e,t.GetMCPlistDataList=0;for(var i=0;i<t.GetMCPlistData.length;i++){var a=t.GetMCPlistData[i];t.GetMCPlistDataList+=a.Amount,2==a.State?t.FinancialConfirmed+=a.Amount:t.FinancialUnconfirmed+=a.Amount,a.KefuBounsDate=t.formatDate(a.KefuBounsDate),a.GcsBounsDate=t.formatDate(a.GcsBounsDate)}})},handleClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(i){t(),e.value1="",e.Name=""}).catch(function(t){})},UpdateMCBounsDate:function(){var t=this;if(console.log(this.value1),""==this.value1)return this.$message.warning("请选择时间"),!1;var e={id:this.Id,Date:this.value1,Name:this.Name,Role:this.admin};this.API_POST("Maintain/UpdateMCBounsDate",e).then(function(e){t.$emit("refresh"),t.$message.success("修改成功！"),t.GetMCPlist(),t.dialogVisible=!1,t.value1="",t.Name=""})}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SaxoPage",{scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0},{key:"content",fn:function(){return[i("h3",[t._v("基础信息")]),t._v(" "),i("el-descriptions",{attrs:{size:"mini",column:4,border:""}},[i("el-descriptions-item",{attrs:{label:"客户名称"}},[t._v(t._s(" "+t.Data.CusName))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"合同号"}},[t._v(t._s(" "+t.Data.MaintainCode))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"当前状态"}},[t._v(t._s(" "+t.Data.StateStr))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"创建时间"}},[t._v(t._s(" "+t.Data.CreateDate))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"财务确认人"}},[t._v(t._s(" "+t.Data.Confirmer))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"财务确认时间"}},[t._v(t._s(" "+t.Data.ConfirmeDate))])],1),t._v(" "),i("h3",[t._v("本次收款金额")]),t._v(" "),i("p",[i("span",{staticStyle:{"font-size":"50px",color:"red","font-family":"Arial","line-height":"100px","margin-left":"30px"}},[t._v(t._s(t.FinancialAmountFormat(t.Data.Amount,"")))])]),t._v(" "),i("h3",[t._v("收款记录\n            "),i("p",{staticStyle:{float:"right",color:"#909399","font-size":"14px"}},[t._v("(财务已确认："+t._s(t.FinancialConfirmed+" 元")+" )  ")]),t._v(" "),i("p",{staticStyle:{float:"right",color:"#909399","font-size":"14px"}},[t._v("(等待确认："+t._s(t.FinancialUnconfirmed+" 元")+" )  ")]),t._v(" "),i("p",{staticStyle:{float:"right",color:"#909399","font-size":"14px"}},[t._v("(合同总金额："+t._s(t.Data.ContractAmount+" 元")+" )  ")])]),t._v(" "),i("div",{staticClass:"timeline"},[i("el-timeline",{attrs:{reverse:t.reverse}},t._l(t.GetMCPlistData,function(e,a){return i("el-timeline-item",{key:a,attrs:{color:2==e.State?"#67C23A":"#909399"}},[t._v("\n                    "+t._s(e.Amount+" 元 - - "+e.StateStr)+"\n                    "),i("p",{staticClass:"p1",staticStyle:{color:"#909399",fontSize:"13px",marginTop:"10px",paddingLeft:"20px",cursor:"pointer"}},[t._v(" "+t._s(e.Other))]),t._v(" "),"财务已确认"==e.StateStr?i("p",{staticClass:"p1",staticStyle:{color:"#1a73e8",fontSize:"13px",marginTop:"10px",paddingLeft:"20px",cursor:"pointer"}},[i("span",{staticStyle:{marginRight:"40px"},on:{click:function(i){t.Id=e.Id,t.admin="sales",t.dialogVisible=!0}}},[t._v(t._s("销售归属: "+(e.BelongSales||"点击设置")))]),t._v(" "),i("span",{staticStyle:{marginRight:"40px"},on:{click:function(i){t.Id=e.Id,t.admin="kefu",t.dialogVisible=!0}}},[t._v(t._s("客服归属: "+(e.BelongKefu?e.BelongKefu+"   "+e.KefuBounsDate:"点击设置")))]),t._v(" "),i("span",{staticStyle:{marginRight:"40px"},on:{click:function(i){t.Id=e.Id,t.admin="gcs",t.dialogVisible=!0}}},[t._v(t._s("工程师归属: "+(e.BelongGcs?e.BelongGcs+"   "+e.GcsBounsDate:"点击设置")))])]):t._e()])}),1)],1),t._v(" "),i("el-dialog",{attrs:{title:"更新保养收款的工程师/客服奖金日期 ",visible:t.dialogVisible,width:"30%","before-close":t.handleClose,"modal-append-to-body":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",[i("div",{staticClass:"message_li_txt_FloatNo"},[i("span",[t._v("日期")]),t._v(" "),i("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期",size:"mini"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"message_li_txt_FloatNo"},[i("span",[t._v("姓名")]),t._v(" "),i("el-input",{staticStyle:{width:"220px"},attrs:{size:"mini",placeholder:"请输入姓名"},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}})],1)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogVisible=!1,t.value1=""}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.UpdateMCBounsDate()}}},[t._v("确 定")])],1)])]},proxy:!0}])})},staticRenderFns:[]},s=i("VU/8")(a,n,!1,null,null,null);e.default=s.exports}});