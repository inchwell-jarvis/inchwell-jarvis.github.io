webpackJsonp([207],{"3eml":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),r=a.n(l),n={name:"",data:function(){return{retrieval:{pageNum:1,numPerPage:this.$store.state.NewDisplayNumber,orderField:"",orderDirection:"",search:"",state:"-1",cusFullName:"",area:"",cusType:"",begin:null,end:"",YearLife:0,YearLife2:"",onlyExecuting:void 0,selectDate:null},total:0,Data:[],options:[{label:"全部",value:"-1",index:1},{label:"创建中",value:"0",index:2},{label:"已确认保养设备",value:1,index:3},{label:"销售已报价",value:2,index:4},{label:"价格已确认",value:3,index:5},{label:"已收款",value:4,index:6},{label:"执行中",value:5,index:7},{label:"已撤销",value:6,index:11},{label:"客户拒绝价格",value:7,index:8},{label:"合同已结单",value:9,index:9}],exportData:[]}},created:function(){this.start()},computed:{retrievalJT:function(){return r()(this.retrieval)}},watch:{retrievalJT:function(e,t){this.WatchFenYe(e,t)?this.$refs.SaxoFenYe.ReviseConNumber1():this.start()}},components:{},methods:{create:function(){this.$router.push({path:"/maintenance_create",query:{CusId:"null"}})},edit:function(e){console.log(e.Id),this.$store.state.Vuex.MaintenanceContractDetailsID=e.Id,this.$router.push({path:"/ModificationOfCntract"})},lookma:function(e){console.log(e.Id),this.$store.state.Vuex.MaintenanceContractDetailsID=e.Id,this.$router.push({path:"/ViewContract"})},copyCreate:function(e){console.log(e),this.$router.push({path:"/maintenance_create",query:{CusId:e.CusId,CusFullName:e.CusFullName,Id:e.Id,MaintainCode:e.MaintainCode}})},func:function(e,t){this.retrieval.numPerPage=e,this.retrieval.pageNum=t,this.start()},start:function(){var e=this;""==this.retrieval.YearLife2.trim()?this.retrieval.YearLife=0:this.retrieval.YearLife=this.retrieval.YearLife2,null!=this.retrieval.selectDate?(this.retrieval.end=this.retrieval.selectDate[0],this.retrieval.begin=this.retrieval.selectDate[1]):(this.retrieval.end="",this.retrieval.begin=""),this.API_GET("Maintain/GetMCs",this.retrieval).then(function(t){console.log(t),e.total=t.DataBars,e.Data=t.Dtos;for(var a=0;a<e.Data.length;a++){var l=e.Data[a];l.CreateDate=l.CreateDate.split("T")[0],l.AcceptDate=null==l.AcceptDate?" - - ":l.AcceptDate.split("T")[0],l.PayDate=null==l.PayDate?" - - ":l.PayDate.split("T")[0]}})},ExportByXML:function(){this.API_POST("System/ExportByXML",{xml:'<Worksheet ss:Name="Sheet1">  <Table ss:ExpandedColumnCount="2" ss:ExpandedRowCount="2" x:FullColumns="1"   x:FullRows="1" ss:DefaultColumnWidth="54" ss:DefaultRowHeight="14.25">   <Row>    <Cell><Data ss:Type="Number">111</Data></Cell>   </Row>   <Row>    <Cell ss:Index="2" ss:StyleID="s62"><Data ss:Type="Number">222</Data></Cell>   </Row>  </Table>  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">   <PageSetup>    <Header x:Margin="0.3"/>    <Footer x:Margin="0.3"/>    <PageMargins x:Bottom="0.75" x:Left="0.7" x:Right="0.7" x:Top="0.75"/>   </PageSetup>   <Print>    <ValidPrinterInfo/>    <PaperSizeIndex>9</PaperSizeIndex>    <HorizontalResolution>600</HorizontalResolution>    <VerticalResolution>600</VerticalResolution>   </Print>   <Selected/>   <Panes>    <Pane>     <Number>3</Number>     <ActiveRow>4</ActiveRow>     <ActiveCol>8</ActiveCol>    </Pane>   </Panes>   <ProtectObjects>False</ProtectObjects>   <ProtectScenarios>False</ProtectScenarios>  </WorksheetOptions> </Worksheet>',styles:'<Styles><Style ss:ID="Default" ss:Name="Normal"> <Alignment ss:Vertical="Bottom"/> <Borders/> <Font ss:FontName="等线" x:CharSet="134" ss:Size="11" ss:Color="#000000"/> <Interior/> <NumberFormat/> <Protection/></Style><Style ss:ID="s62"> <Interior ss:Color="#FFFF00" ss:Pattern="Solid"/></Style></Styles>'}).then(function(e){console.log(e)})},handleCommand:function(e){var t=this;if(2==e){var a=JSON.parse(r()(this.retrieval));""==this.retrieval.YearLife2.trim()?this.retrieval.YearLife=0:this.retrieval.YearLife=this.retrieval.YearLife2,null!=this.retrieval.selectDate?(this.retrieval.end=this.retrieval.selectDate[0],this.retrieval.begin=this.retrieval.selectDate[1]):(this.retrieval.end="",this.retrieval.begin=""),a.numPerPage=99999999,a.onlyExecuting=!0,this.API_GET("Maintain/GetMCs",a).then(function(e){console.log(e),t.exportData=e.Dtos;for(var a=0;a<t.exportData.length;a++){var l=t.exportData[a];l.CreateDate=l.CreateDate.split("T")[0],l.AcceptDate=null==l.AcceptDate?" - - ":l.AcceptDate.split("T")[0],l.PayDate=null==l.PayDate?" - - ":l.PayDate.split("T")[0]}console.log(t.exportData);for(var r="<tr>\n                                        <th>合同类型</th>\n                                        <th>合同号</th>\n                                        <th>客户名称</th>\n                                        <th>区域</th>\n                                        <th>数量</th>\n                                        <th>创建日期</th>\n                                        <th>报价日期</th>\n                                        <th>付款日期</th>\n                                        <th>当前状态</th>\n                                        <th>优惠后金额</th>\n                                        <th>年数</th>\n                                        <th>销售员</th>\n                                        <th>金额合计</th>\n                                        <th>优惠比例</th>\n                                    </tr>",n=0;n<t.exportData.length;n++){var i=t.exportData[n];r+="<tr>\n                                        <td>"+i.ContractType+"</td>\n                                        <td>"+i.MaintainCode+"</td>\n                                        <td>"+i.CusFullName+"</td>\n                                        <td>"+i.Area+"</td>\n                                        <td>"+i.EquCount+"</td>\n                                        <td>"+i.CreateDate+"</td>\n                                        <td>"+i.AcceptDate+"</td>\n                                        <td>"+i.PayDate+"</td>\n                                        <td>"+i.StateStr+"</td>\n                                        <td>"+t.FinancialAmountFormat(i.PreferentialAmount,"")+"</td>\n                                        <td>"+i.YearLife+"</td>\n                                        <td>"+i.SalesPerson+"</td>\n                                        <td>"+t.FinancialAmountFormat(i.AmountTotal,"")+"</td>\n                                        <td>"+i.PreferentialRatio+"</td>\n                                    </tr>"}t.downloadTable(r,"已生效保养合同")})}}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("router-view",{on:{refresh:e.start}}),e._v(" "),a("div",{staticClass:"retrieve"},[a("div",{staticClass:"leftSpan"},[e._v("保养合同\n\n            "),a("el-dropdown",{attrs:{placement:"bottom-start"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-printer",staticStyle:{cursor:"pointer","font-size":"18px"}})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"1",icon:"el-icon-takeaway-box",disabled:""}},[e._v("导出保养执行汇总")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"2",icon:"el-icon-takeaway-box"}},[e._v("导出已生效保养合同")])],1)],1)],1),e._v(" "),a("div",{staticClass:"ConView"},[a("div",{staticClass:"department"},[a("span",[e._v("合同号、销售")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入合同号、销售",size:"mini"},model:{value:e.retrieval.search,callback:function(t){e.$set(e.retrieval,"search",t)},expression:"retrieval.search"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("客户名称")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入产品编码",size:"mini"},model:{value:e.retrieval.cusFullName,callback:function(t){e.$set(e.retrieval,"cusFullName",t)},expression:"retrieval.cusFullName"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("年数")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入产品编码",size:"mini"},model:{value:e.retrieval.YearLife2,callback:function(t){e.$set(e.retrieval,"YearLife2",t)},expression:"retrieval.YearLife2"}})],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("区域")]),e._v(" "),a("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择区域"},model:{value:e.retrieval.area,callback:function(t){e.$set(e.retrieval,"area",t)},expression:"retrieval.area"}},e._l(e.$store.state.Vuex.Area,function(e){return a("el-option",{key:e.Value,attrs:{label:e.Value,value:e.Value}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("客户类型")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择客户类型",size:"mini",clearable:""},model:{value:e.retrieval.cusType,callback:function(t){e.$set(e.retrieval,"cusType",t)},expression:"retrieval.cusType"}},e._l(e.$store.state.CustomerType,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"department"},[a("span",[e._v("选择状态")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择状态",size:"mini"},model:{value:e.retrieval.state,callback:function(t){e.$set(e.retrieval,"state",t)},expression:"retrieval.state"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"department",staticStyle:{width:"500px"}},[a("span",[e._v("选择日期")]),e._v(" "),a("el-date-picker",{attrs:{size:"mini",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.retrieval.selectDate,callback:function(t){e.$set(e.retrieval,"selectDate",t)},expression:"retrieval.selectDate"}})],1)]),e._v(" "),a("saxo-button",{staticStyle:{float:"right","margin-top":"13px"},attrs:{mini:"",type:"success"},on:{click:function(t){return e.create()}}},[e._v("创 建")]),e._v(" "),a("saxo-button",{staticStyle:{float:"right","margin-top":"13px"},attrs:{mini:"",type:"primary"},on:{click:function(t){return e.start()}}},[e._v("搜 索")])],1),e._v(" "),a("div",{staticClass:"content2"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.Data,"header-cell-style":e.$store.state.headerCellStyle,"cell-style":e.$store.state.cellStyle,stripe:"",height:"100%"}},[a("el-table-column",{attrs:{prop:"ContractType",label:"合同类型",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"MaintainCode",label:"合同号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"CusFullName",label:"客户名称","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"Area",label:"区域",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EquCount",label:"数量","show-overflow-tooltip":!0,width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"CreateDate",label:"创建日期",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"AcceptDate",label:"报价日期",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"PayDate",label:"付款日期",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"StateStr",label:"当前状态",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{label:"优惠后金额",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"fr"},[e._v(e._s(e.FinancialAmountFormat(t.row.PreferentialAmount,"")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"YearLife",label:"年数",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"SalesPerson",label:"销售员",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("saxo-button",{attrs:{mini:"",type:"primary"},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),a("saxo-button",{attrs:{mini:"",type:"info"},on:{click:function(a){return e.copyCreate(t.row)}}},[e._v("复制")])]}}])})],1)],1),e._v(" "),a("SaxoFenYe",{ref:"SaxoFenYe",attrs:{total:e.total},on:{func:e.func}})],1)},staticRenderFns:[]},s=a("VU/8")(n,i,!1,null,null,null);t.default=s.exports}});