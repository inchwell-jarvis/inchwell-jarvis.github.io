webpackJsonp([33],{b6NC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("uXZL"),r=n.n(a),i={data:function(){return{data:[],FileName:""}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{addInvCodes:function(){var t=this;if(!this.data.length)return this.$message.warning("表格好像没有数据！");this.API_POST("Finance/AddInvCodes",{StringList:this.data}).then(function(e){t.$message.success("上传成功！"),t.$router.push({path:"/invoice-number"}),t.$emit("refresh")})},exportData:function(t){var e=this,n=t.target.files[0];e.FileName=n.name,t.target.value="";var a=new FileReader;FileReader.prototype.readAsBinaryString=function(t){var n,a="",i=new FileReader;i.onload=function(t){for(var o=new Uint8Array(i.result),s=o.byteLength,c=0;c<s;c++)a+=String.fromCharCode(o[c]);if(n=r.a.read(a,{type:"binary"}),e.data=r.a.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{range:0}).map(function(t){return t["发票号"]}),console.log(e.data),!e.data.length)return e.$message.warning("表格好像没有数据！")},i.readAsArrayBuffer(t)},a.readAsBinaryString(n)}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SaxoPage",{scopedSlots:t._u([{key:"title",fn:function(){return[n("saxo-button",{staticStyle:{float:"right"},attrs:{type:"success",mini:""},on:{click:function(e){return t.addInvCodes()}}},[t._v("创 建")])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"From"},[n("span",[t._v("下载模板")]),t._v(" "),n("el-link",{staticStyle:{"margin-top":"15px",cursor:"pointer"},attrs:{type:"primary",href:"http://erp.inchwell.com.cn/mould/document/download/上传发票号模板.xlsx"},on:{click:function(e){return t.DownloadShippingList()}}},[t._v("下载模板")])],1),t._v(" "),n("div",{staticClass:"From"},[n("span",[t._v("上传")]),t._v(" "),t.FileName?n("span",{staticStyle:{"margin-top":"15px",cursor:"pointer",display:"block",float:"left",color:"#409EFF"}},[t._v(t._s(t.FileName)+"  ")]):t._e(),t._v(" "),n("el-link",{staticStyle:{"margin-top":"15px",cursor:"pointer"},attrs:{type:"success"}},[n("label",{staticStyle:{cursor:"pointer"},attrs:{for:"int"}},[n("i",{staticClass:"el-icon-upload2"}),t._v("\n                    上传\n                ")]),t._v(" "),n("input",{ref:"referenceUpload",staticStyle:{"margin-left":"70px",display:"none"},attrs:{id:"int",type:"file",accept:".xlsx, .xls"},on:{change:function(e){return t.exportData(e)}}})])],1)]},proxy:!0}])})},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(t){n("h5DM")},"data-v-f8d9a00e",null);e.default=s.exports},h5DM:function(t,e){}});