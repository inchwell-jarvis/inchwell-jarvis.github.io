webpackJsonp([6],{KcXo:function(t,e){},Rv9I:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{gridData:[],dialogTableVisible:!1,dialogTableVisible2:!1,search:"",POCode:"",SBData:[],POConsignee:{Name:"",EnginnerName:"",Mobile:"",Address:""},Memo:"",emptyText:"数据较多,必须输入检索项(右上角)",drawer:!1,dialogTableVisible3:!1,GetProducts2:{pageNum:"1",numPerPage:10,orderField:"",orderDirection:"",proType:1,productCode:"",barcodeMemo:"",man:"",desc:"",memo:""},Datatable:[],total:0,BrandList:[]}},computed:{},watch:{},methods:{GetCusLinkmanMini:function(){var t=this;if(""==this.search)return this.gridData=[],this.emptyText="必须输入检索项",!1;this.emptyText="正在查询 ··· ···";var e={api:"get",url:this.$store.state.http+"System/GetCusLinkmanMini",data:{search:this.search}};this.$https(e).then(function(e){console.log(e),t.gridData=e.Data,0==t.gridData.length&&(t.emptyText="未查询到相关人员，请尝试切换检索项")})},GetEmployeeMini:function(){var t=this;this.dialogTableVisible=!0;var e={api:"get",url:this.$store.state.http+"System/GetEmployeeMini",data:{type:4}};this.$https(e).then(function(e){console.log(e),t.gridData=e.Data})},Choose:function(t){console.log(t),this.POConsignee=t,this.dialogTableVisible=!1,this.dialogTableVisible2=!1},handleClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(i){t(),e.Datatable=[]}).catch(function(t){})},deleteOK:function(t){for(var e=0;e<this.SBData.length;e++){this.SBData[e].ID==t.ID&&this.SBData.splice(e,1)}},initss:function(t){var e=this;"1"==t&&(this.GetProducts2.pageNum="1");var i={api:"get",url:this.$store.state.http+"Product/GetProducts2",data:this.GetProducts2};this.$https(i).then(function(t){console.log(t),e.Datatable=t.Data.Dtos;for(var i=0;i<e.Datatable.length;i++){var a=e.Datatable[i];e.$set(a,"Number",1)}e.total=t.Data.DataBars})},func:function(t,e){this.GetProducts2.numPerPage=t,this.GetProducts2.pageNum=e,this.initss()},GetBrand:function(){var t=this,e={api:"get",url:this.$store.state.http+"System/GetBrand"};this.$https(e).then(function(e){console.log(e),t.BrandList=e.Data;for(var i=0;i<t.BrandList.length;i++)t.BrandList[i].value=t.BrandList[i].Value;console.log(t.BrandList)})},querySearch:function(t,e){if(void 0==t)return t="",e(this.BrandList),!1;if(""==t)return e(this.BrandList),!1;for(var i=t,a=this.BrandList,o=[],n=(i.split("")[0],0);n<a.length;n++){var s=a[n];-1!=s.value.indexOf(i)&&o.push(s)}e(o)},adds:function(t){if(0==this.SBData.length)this.SBData.push(t);else{for(var e=!0,i=0;i<this.SBData.length;i++){var a=this.SBData[i];a.ID==t.ID&&(e=!1,a.Number+=t.Number)}e&&this.SBData.push(t)}this.drawer=!1},addscheck:function(){var t=this.$refs.multipleTable.selection;if(console.log(t),0==this.SBData.length)this.SBData=t;else for(var e=0;e<t.length;e++){for(var i=t[e],a=!0,o=0;o<this.SBData.length;o++){var n=this.SBData[o];n.ID==i.ID&&(a=!1,n.Number+=i.Number)}a&&this.SBData.push(i)}this.drawer=!1},AddPO:function(){for(var t=this,e=[],i=0;i<this.SBData.length;i++){var a=this.SBData[i];e.push({ProductId:a.ID,Number:a.Number})}if(""==this.POCode)return this.$message.warning("请输入采购单号！"),!1;if(""==this.POConsignee.Name)return this.$message.warning("请输入收货人姓名！"),!1;if(""==this.POConsignee.EnginnerName)return this.$message.warning("请输入收货人英文名！"),!1;if(""==this.POConsignee.Mobile)return this.$message.warning("请输入收货人手机号！"),!1;if(""==this.POConsignee.Address)return this.$message.warning("请输入收货人地址！"),!1;var o={api:"post",url:this.$store.state.http+"PO/AddPO",data:{POCode:this.POCode,Memo:this.Memo,POConsignee:this.POConsignee,POGoodDtos:e}};this.$https(o).then(function(e){console.log(e),t.$emit("refresh"),t.$router.push({path:"/ListOfPurchaseOrders"})})}},created:function(){this.GetBrand()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box_s"},[i("div",{staticClass:"segmentation"},[t._v("\n        选择设备\n        "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.drawer=!0,t.initss()}}},[t._v("选择设备")])],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.SBData,size:"mini","highlight-current-row":"",border:"","header-cell-style":{background:"#e1e1e1"}}},[i("el-table-column",{attrs:{prop:"ProductCode",label:"产品编号",width:"170","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"BarcodeMemo",label:"内部编码",width:"140","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"OriginalCurrencyUnitPrice",label:"原币种单价",width:"150","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"BuyingUnitPrice",label:"购买单价",width:"100","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"Rate",label:"汇率",width:"100","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"Manufacturer",label:"品牌",width:"120","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"Characteristics",label:"产品描述","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{staticStyle:{float:"left"},attrs:{fixed:"right",label:"添加数量",width:"154"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input-number",{attrs:{min:1,size:"mini"},model:{value:e.row.Number,callback:function(i){t.$set(e.row,"Number",i)},expression:"scope.row.Number"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(i){return t.deleteOK(e.row)}}})]}}])})],1),t._v(" "),i("div",{staticClass:"segmentation"},[t._v("\n        收货人信息\n        "),i("el-button-group",{staticStyle:{float:"right"}},[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.emptyText="数据较多,必须输入检索项(右上角)",t.search="",t.dialogTableVisible2=!0,t.gridData=[]}}},[t._v("选择客户联系人")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.GetEmployeeMini()}}},[t._v("选择内部员工")])],1)],1),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("采购单号:")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POCode,callback:function(e){t.POCode=e},expression:"POCode"}})],1),t._v(" "),i("div",{staticStyle:{width:"100%",float:"left"}}),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("姓名：")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POConsignee.Name,callback:function(e){t.$set(t.POConsignee,"Name",e)},expression:"POConsignee.Name"}})],1),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("英文名：")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POConsignee.EnginnerName,callback:function(e){t.$set(t.POConsignee,"EnginnerName",e)},expression:"POConsignee.EnginnerName"}})],1),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("手机：")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POConsignee.Mobile,callback:function(e){t.$set(t.POConsignee,"Mobile",e)},expression:"POConsignee.Mobile"}})],1),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("电话：")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POConsignee.Tel,callback:function(e){t.$set(t.POConsignee,"Tel",e)},expression:"POConsignee.Tel"}})],1),t._v(" "),i("div",{staticClass:"consignee"},[i("span",[t._v("邮箱：")]),t._v(" "),i("el-input",{attrs:{size:"mini"},model:{value:t.POConsignee.Email,callback:function(e){t.$set(t.POConsignee,"Email",e)},expression:"POConsignee.Email"}})],1),t._v(" "),i("div",{staticStyle:{width:"100%",float:"left"}}),t._v(" "),i("div",{staticClass:"consignee",staticStyle:{width:"800px"}},[i("span",[t._v("地址：")]),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"请输入内容"},model:{value:t.POConsignee.Address,callback:function(e){t.$set(t.POConsignee,"Address",e)},expression:"POConsignee.Address"}})],1),t._v(" "),i("div",{staticStyle:{width:"100%",float:"left"}}),t._v(" "),i("div",{staticClass:"consignee",staticStyle:{width:"800px"}},[i("span",[t._v("备注：")]),t._v(" "),i("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"请输入内容"},model:{value:t.Memo,callback:function(e){t.Memo=e},expression:"Memo"}})],1),t._v(" "),i("div",{staticStyle:{width:"100%",float:"left"}}),t._v(" "),i("el-button",{staticStyle:{float:"right",marginRight:"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.AddPO()}}},[t._v("创建")]),t._v(" "),i("el-dialog",{attrs:{title:"选择收货人",visible:t.dialogTableVisible,"modal-append-to-body":!1},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.gridData,height:"400",size:"mini"}},[i("el-table-column",{attrs:{label:"姓名",prop:"Name",width:"70"}}),t._v(" "),i("el-table-column",{attrs:{label:"区域",prop:"Area",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"手机",prop:"Mobile",width:"140"}}),t._v(" "),i("el-table-column",{attrs:{label:"地址",prop:"Address","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.Choose(e.row)}}},[t._v("选择")])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"选择收货人",visible:t.dialogTableVisible2,"modal-append-to-body":!1,size:"mini"},on:{"update:visible":function(e){t.dialogTableVisible2=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.gridData,height:"400","empty-text":t.emptyText}},[i("el-table-column",{attrs:{label:"姓名",prop:"Name",width:"70"}}),t._v(" "),i("el-table-column",{attrs:{label:"区域",prop:"Area",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"手机",prop:"Mobile",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"公司名称",prop:"CusFullName","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"header",fn:function(e){return[i("el-input",{staticStyle:{color:"red"},attrs:{size:"mini",placeholder:"输入关键字"},on:{input:t.GetCusLinkmanMini},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.Choose(e.row)}}},[t._v("选择")])]}}])})],1)],1),t._v(" "),i("el-drawer",{staticStyle:{width:"200%"},attrs:{visible:t.drawer,direction:"ltr",modal:!1,title:"选择设备","before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[i("div",{staticClass:"top_init_data",staticStyle:{marginbottom:"10px"}},[i("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"请输入产品编码"},on:{change:function(e){return t.initss(1)}},model:{value:t.GetProducts2.productCode,callback:function(e){t.$set(t.GetProducts2,"productCode",e)},expression:"GetProducts2.productCode"}}),t._v(" "),i("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"请输入内部编码"},on:{change:function(e){return t.initss(1)}},model:{value:t.GetProducts2.barcodeMemo,callback:function(e){t.$set(t.GetProducts2,"barcodeMemo",e)},expression:"GetProducts2.barcodeMemo"}}),t._v(" "),i("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"请输入产品描述"},on:{change:function(e){return t.initss(1)}},model:{value:t.GetProducts2.desc,callback:function(e){t.$set(t.GetProducts2,"desc",e)},expression:"GetProducts2.desc"}}),t._v(" "),i("el-input",{staticStyle:{width:"193px"},attrs:{size:"mini",placeholder:"请输入产品备注"},on:{change:function(e){return t.initss(1)}},model:{value:t.GetProducts2.memo,callback:function(e){t.$set(t.GetProducts2,"memo",e)},expression:"GetProducts2.memo"}}),t._v(" "),i("el-autocomplete",{attrs:{size:"mini","show-overflow-tooltip":!0,"fetch-suggestions":t.querySearch,placeholder:"请选择品牌",clearable:""},on:{input:function(e){return t.initss(1)}},model:{value:t.GetProducts2.man,callback:function(e){t.$set(t.GetProducts2,"man",e)},expression:"GetProducts2.man"}}),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.initss(1)}}},[t._v("检索")])],1),t._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{marginbottom:"10px"},attrs:{data:t.Datatable,size:"mini",height:this.$store.state.Vuex.TableOptimumHeight,border:"","header-cell-style":{background:"#e1e1e1"}}},[i("el-table-column",{attrs:{prop:"ProductCode",label:"产品编号",width:"170","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"BarcodeMemo",label:"内部编码",width:"140","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"Manufacturer",label:"品牌",width:"120","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{prop:"Characteristics",label:"产品描述","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{staticStyle:{float:"left"},attrs:{fixed:"right",type:"selection",width:"55"}}),t._v(" "),i("el-table-column",{staticStyle:{float:"left"},attrs:{fixed:"right",label:"添加数量",width:"154"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input-number",{attrs:{min:1,size:"mini"},model:{value:e.row.Number,callback:function(i){t.$set(e.row,"Number",i)},expression:"scope.row.Number"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.adds(e.row)}}},[t._v("添加")])]}}])})],1),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addscheck()}}},[t._v("添加选择")]),t._v(" "),i("SaxoFenYe",{attrs:{total:t.total},on:{func:t.func}})],1)],1)},staticRenderFns:[]};var n=i("VU/8")(a,o,!1,function(t){i("KcXo")},"data-v-1bdd05fe",null);e.default=n.exports}});