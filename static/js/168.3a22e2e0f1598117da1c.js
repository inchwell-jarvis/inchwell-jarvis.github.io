webpackJsonp([168],{"16+L":function(e,t){},"b+K1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("uXZL"),r=n.n(a),o={data:function(){return{BelongCompany:"",data:[],FileName:""}},computed:{},watch:{},methods:{Create:function(){var e=this;if(!this.data.length)return this.$message.warning("请上传表格！");if(!this.BelongCompany)return this.$message.warning("请选择隶属公司！");var t=this.data.map(function(t){return{BelongCompany:e.BelongCompany,BankId:t["流水号"]||"",TransactionType:t["交易类型"]||"",TransactionDt:t.numericDate2||"",AmountJ:t["借方金额"]||"",AmountD:0,Summary:t["摘要"]||"",ToName:t["收(付)方名称"]||"",ToAccount:t["收(付)方账号"]||""}});console.log(t),this.API_POST("Finance/AddFTJie",t).then(function(t){e.$message.success("创建成功！"),e.$emit("refresh"),e.$router.push({path:"/online-banking-expenses"})})},exportData:function(e){var t=this,n=e.target.files[0];t.FileName=n.name,e.target.value="";var a=new FileReader;FileReader.prototype.readAsBinaryString=function(e){var n,a="",o=new FileReader;o.onload=function(e){for(var i=new Uint8Array(o.result),s=i.byteLength,c=0;c<s;c++)a+=String.fromCharCode(i[c]);var l=(n=r.a.read(a,{type:"binary"})).Sheets[n.SheetNames[0]].E5.v;"北京英之杰天祥汽车服务有限公司"===l&&(t.BelongCompany="服务公司"),"北京英之杰天祥汽车技术服务有限公司"===l&&(t.BelongCompany="技术公司"),t.BelongCompany||t.$message.warning("隶属公司识别错误！");var u=r.a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{range:12});console.log(u);var p=u.map(function(e){return e.hasOwnProperty("交易日")&&(e.numericDate2=e["交易日"].replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3")),e});t.data=p,t.data.length||t.$message.warning("表格好像没有数据！")},o.readAsArrayBuffer(e)},a.readAsBinaryString(n)}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box_s"},[n("div",{staticClass:"retrieve"},[n("span",{staticClass:"retrieveSpan"},[e._v(" "+e._s(e.$route.meta.title))]),e._v(" "),n("saxo-button",{staticStyle:{float:"right"},attrs:{type:"success",mini:""},on:{click:function(t){return e.Create()}}},[e._v("创 建")])],1),e._v(" "),n("div",{staticClass:"From"},[n("span",[e._v("上传")]),e._v(" "),e.FileName?n("span",{staticStyle:{"margin-top":"15px",cursor:"pointer",display:"block",float:"left",color:"#409EFF"}},[e._v(e._s(e.FileName)+"  ")]):e._e(),e._v(" "),n("el-link",{staticStyle:{"margin-top":"15px",cursor:"pointer"},attrs:{type:"success"}},[n("label",{staticStyle:{cursor:"pointer"},attrs:{for:"int"}},[n("i",{staticClass:"el-icon-upload2"}),e._v("\n                上传\n            ")]),e._v(" "),n("input",{ref:"referenceUpload",staticStyle:{"margin-left":"70px",display:"none"},attrs:{id:"int",type:"file",accept:".xlsx, .xls"},on:{change:function(t){return e.exportData(t)}}})])],1),e._v(" "),n("div",{staticClass:"From"},[n("span",[e._v("隶属公司")]),e._v(" "),e.BelongCompany?e._e():n("span",{staticStyle:{"line-height":"50px",color:"#909399"}},[e._v("等待上传")]),e._v(" "),e.BelongCompany?n("span",{staticStyle:{"line-height":"50px",color:"#409EFF"}},[e._v(e._s(e.BelongCompany))]):e._e()])])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(e){n("16+L")},"data-v-1b32cb00",null);t.default=s.exports}});