webpackJsonp([3],{I2pL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{RouData:"",Location:"",InchwellCode:"",Number2:"",Memo:"",disabled:!1,NewKu:""}},computed:{},watch:{},methods:{TransferStorage:function(){var t=this;if(!this.Location)return this.$message.error("没有输入旧库位！"),!1;if(!this.NewKu)return this.$message.error("没有输入新库位！"),!1;if(!this.Number2)return this.$message.error("没有输入数量！"),!1;var e={data:{OldKu:this.Location,NewKu:this.NewKu,Quantity:Number(this.Number2),Memo:this.Memo},api:"post",url:this.$store.state.http+"StorageRoom/TransferStorage"};this.$https(e).then(function(e){t.$message({message:t.RouData.State+"成功！",type:"success"}),t.$router.go(-1),t.$emit("refresh")})},CreateMSO:function(){var t=this;if(!this.Location)return this.$message.error("没有输入库位！"),!1;if(!this.InchwellCode)return this.$message.error("没有输入内部编码！"),!1;if(!this.Number2)return this.$message.error("没有输入数量！"),!1;var e={Location:this.Location,InchwellCode:this.InchwellCode,Number:this.Number2,Memo:this.Memo,to:this.RouData.to,ProductId:this.RouData.ProductId};console.log(e),"出库"==this.RouData.State&&(e.Storageid=this.RouData.row.Id),this.API_POST("StorageRoom/"+this.RouData.url,e).then(function(e){t.$message.success("成功！"),t.$router.go(-1),t.$emit("refresh")})}},created:function(){this.RouData=this.$route.query,this.RouData.url="入库"==this.RouData.State?"PutInStorage":"PutOutStorage","none"!=this.RouData.data&&(this.Location=this.RouData.data.Location,this.InchwellCode=this.RouData.data.InchwellCode,this.disabled=!0)},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box_s"},[a("div",{staticClass:"retrieve"},[a("span",{staticClass:"retrieveSpan"},[t._v(t._s(t.RouData.State))]),t._v(" "),"入库"==t.RouData.State?a("saxo-button",{staticStyle:{float:"right"},attrs:{type:"success",mini:""},on:{click:function(e){return t.CreateMSO()}}},[t._v("入 库")]):t._e(),t._v(" "),"出库"==t.RouData.State?a("saxo-button",{staticStyle:{float:"right"},attrs:{type:"primary",mini:""},on:{click:function(e){return t.CreateMSO()}}},[t._v("出 库")]):t._e(),t._v(" "),"转库"==t.RouData.State?a("saxo-button",{staticStyle:{float:"right"},attrs:{type:"primary",mini:""},on:{click:function(e){return t.TransferStorage()}}},[t._v("转 库")]):t._e()],1),t._v(" "),"入库"==t.RouData.State||"出库"==t.RouData.State?a("div",{staticClass:"From"},[a("span",[t._v("库位")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入库位",disabled:t.disabled},model:{value:t.Location,callback:function(e){t.Location=e},expression:"Location"}})],1):t._e(),t._v(" "),"入库"==t.RouData.State||"出库"==t.RouData.State?a("div",{staticClass:"From"},[a("span",[t._v("产品编码")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内部编码",disabled:t.disabled},model:{value:t.InchwellCode,callback:function(e){t.InchwellCode=e},expression:"InchwellCode"}})],1):t._e(),t._v(" "),"转库"==t.RouData.State?a("div",{staticClass:"From"},[a("span",[t._v("旧库位")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入旧库位",disabled:t.disabled},model:{value:t.Location,callback:function(e){t.Location=e},expression:"Location"}})],1):t._e(),t._v(" "),"转库"==t.RouData.State?a("div",{staticClass:"From"},[a("span",[t._v("新库位")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入新库位"},model:{value:t.NewKu,callback:function(e){t.NewKu=e},expression:"NewKu"}})],1):t._e(),t._v(" "),a("div",{staticClass:"From"},[a("span",[t._v("数量")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入数量"},model:{value:t.Number2,callback:function(e){t.Number2=e},expression:"Number2"}})],1),t._v(" "),a("div",{staticClass:"From"},[a("span",[t._v("备注")]),t._v(" "),a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",autosize:{minRows:4,maxRows:8}},model:{value:t.Memo,callback:function(e){t.Memo=e},expression:"Memo"}})],1)])},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(t){a("zet/")},"data-v-fdfaa532",null);e.default=i.exports},"zet/":function(t,e){}});