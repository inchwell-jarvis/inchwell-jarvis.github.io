webpackJsonp([169],{"2ezy":function(e,t){},lRk0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{Amount:"",query:{},Files:[],index:0,Id:""}},created:function(){this.query=this.$route.query,this.Amount=this.query.Amount,console.log(this.$route.query)},mounted:function(){},computed:{},watch:{},methods:{AtRedInvoice:function(){var e=this;console.log(this.Amount);var t=Number(this.Amount);if(t>this.query.Amount)return this.$message.warning("冲红金额不得大于总金额！");this.API_POST("Finance/AtRedInvoice",{ID:this.query.Id,Str:t,Append:"121212121212121212"}).then(function(t){console.log(t),e.Files.length>0?(e.$message.success("正在上传附件！"),e.Id=t,e.index=e.Files.length,e.UploadFinanceInvAtt2()):(e.$message.success("操作成功！"),e.$router.push({path:"/GS_Edit"}),e.$emit("refresh"))})},UploadFinanceInvAtt2:function(){0==this.index?(this.$message.success("操作成功！"),this.$router.push({path:"/GS_Edit"}),this.$emit("refresh")):(this.index-=1,this.UploadFinanceInvAtt())},UploadFinanceInvAtt:function(){var e=this;console.log(t);var t=this.Files[this.index],n={Id:this.Id,FileName:t.FileName,Type:t.FileType,FileStr:t.FileUrl};this.API_POST("Finance/UploadFinanceInvAtt",n).then(function(t){e.UploadFinanceInvAtt2()})},deleteFun:function(e){console.log(e),this.Files=this.Files.filter(function(t){return t.FileName!==e.FileName})},receive:function(e){console.log(e),this.Files.push({Creater:"updata",FileType:e.type.split("/")[1],FileName:e.name,CreateDate:e.lastModifiedDate,FileUrl:e.Base64})}},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SaxoPage",{scopedSlots:e._u([{key:"title",fn:function(){return[n("saxo-button",{attrs:{mini:""},on:{click:function(t){return e.AtRedInvoice()}}},[e._v("冲红")])]},proxy:!0},{key:"content",fn:function(){return[n("h3",[e._v("金额")]),e._v(" "),n("div",{staticClass:"From"},[n("span",[e._v("总金额")]),e._v(" "),n("span",[e._v(e._s(e.query.BuyingCurrency+e.query.Amount))])]),e._v(" "),n("div",{staticClass:"From"},[n("span",[e._v("冲红金额")]),e._v(" "),n("el-input",{attrs:{placeholder:"请输入冲红金额"},model:{value:e.Amount,callback:function(t){e.Amount=t},expression:"Amount"}})],1),e._v(" "),n("h3",[e._v("附件")]),e._v(" "),n("uploadFile",{staticStyle:{float:"left"},attrs:{FileData:e.Files,ShowDownload:!1,ShowLook:!1},on:{receive:e.receive,deleteFun:e.deleteFun}})]},proxy:!0}])})},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(e){n("2ezy")},"data-v-1b0a0ffe",null);t.default=s.exports}});