webpackJsonp([78],{AwyY:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("G0J2"),i={data:function(){return{Product:{ProductCode:"",Manufacturer:"",Characteristics:"",proType:"8"},restaurants:[],editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["12","14","16","18","20","22","24","28","32","36"]}],[{header:[1,2,3,4,5,6]}],[{color:[]},{background:[]}],[{font:["SimSun","SimHei","Microsoft-YaHei","KaiTi","FangSong","Arial","sans-serif","Times-New-Roman"]}],[{align:[]}],["clean"]]},placeholder:"请输入正文"}}},created:function(){this.start();var t=o.Quill.import("formats/font");t.whitelist=["Microsoft-YaHei","SimSun","SimHei","KaiTi","FangSong","Arial","sans-serif","Times-New-Roman"],o.Quill.register(t,!0)},methods:{start:function(){var t=this;this.API_GET("Product/GetProduct",{Id:this.$route.query.Id}).then(function(e){var r=e.ProductCode,o=e.BarcodeMemo,i=e.Unit,a=e.Characteristics,s=e.MaintainContent,n=e.Barcode,c=e.Manufacturer;t.Product={ProductCode:r,BarcodeMemo:o,Unit:i,Characteristics:a,MaintainContent:s,Barcode:n,Manufacturer:c,ID:t.$route.query.Id}})},UpdateProduct:function(){var t=this;return""==this.Product.ProductCode?this.$message.warning("请输入名称/编号！"):""==this.Product.BarcodeMemo?this.$message.warning("请输入测量范围！"):""==this.Product.Unit?this.$message.warning("请输入准确度等级 ！"):""==this.Product.Characteristics?this.$message.warning("请输入证书编号！"):""==this.Product.MaintainContent?this.$message.warning("请输入证书有效期！"):""==this.Product.Barcode?this.$message.warning("请输入上级溯源机构名称！"):void this.API_POST("Product/UpdateProduct",this.Product).then(function(e){t.$emit("refresh"),t.$router.push({path:"/laboratory-ledger"}),t.$message.success("修改成功！")})}}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SaxoPage",{scopedSlots:t._u([{key:"title",fn:function(){return[r("saxo-button",{staticStyle:{float:"right"},attrs:{mini:""},on:{click:function(e){return t.UpdateProduct()}}},[t._v("保 存")])]},proxy:!0},{key:"content",fn:function(){return[r("div",{staticClass:"From"},[r("span",[t._v("名称/编号")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.ProductCode,callback:function(e){t.$set(t.Product,"ProductCode",e)},expression:"Product.ProductCode"}})],1),t._v(" "),r("div",{staticClass:"From2"},[r("span",[t._v("测量范围")]),t._v(" "),r("div",{staticClass:"From2_content"},[r("quill-editor",{ref:"myQuillEditor",staticClass:"ql-editor",attrs:{options:t.editorOption},model:{value:t.Product.BarcodeMemo,callback:function(e){t.$set(t.Product,"BarcodeMemo",e)},expression:"Product.BarcodeMemo"}})],1)]),t._v(" "),r("div",{staticClass:"From2"},[r("span",[t._v("准确度等级")]),t._v(" "),r("div",{staticClass:"From2_content"},[r("quill-editor",{ref:"myQuillEditor",staticClass:"ql-editor",attrs:{options:t.editorOption},model:{value:t.Product.Unit,callback:function(e){t.$set(t.Product,"Unit",e)},expression:"Product.Unit"}})],1)]),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("证书编号")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.Characteristics,callback:function(e){t.$set(t.Product,"Characteristics",e)},expression:"Product.Characteristics"}})],1),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("证书有效期")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.MaintainContent,callback:function(e){t.$set(t.Product,"MaintainContent",e)},expression:"Product.MaintainContent"}})],1),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("上级溯源机构名称")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.Barcode,callback:function(e){t.$set(t.Product,"Barcode",e)},expression:"Product.Barcode"}})],1)]},proxy:!0}])})},staticRenderFns:[]};var s=r("VU/8")(i,a,!1,function(t){r("H4bF")},"data-v-74120d72",null);e.default=s.exports},H4bF:function(t,e){}});