webpackJsonp([91],{BWlV:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("mvHQ"),n=r.n(a),s={data:function(){return{Product:{ProductCode:"",Manufacturer:"",Characteristics:"",CalibrationTechniques2:[],CalibrationTechniques:"",proType:"7"},restaurants:[],options:["力学 L","电磁 D","长度 C","专用设备 Z"]}},mounted:function(){this.GetManufacturer(),this.GetCEJSWJs()},methods:{GetManufacturer:function(){var t=this;this.API_GET("Product/GetManufacturer").then(function(e){t.optionss=e;for(var r=[],a=0;a<e.length;a++)r.push({value:e[a].Name,address:e[a].ID});t.restaurants=r})},querySearch:function(t,e){var r=this.restaurants;e(t?r.filter(this.createFilter(t)):r)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){this.Product.ManufacturerAddress=t.address},Create:function(){var t=this;return""==this.Product.ProductCode?this.$message.warning("请输入型号！"):""==this.Product.Manufacturer?this.$message.warning("请输入品牌！"):0==this.Product.CalibrationTechniques2.length?this.$message.warning("请选择 校准技术！"):""==this.Product.Characteristics?this.$message.warning("请输入产品描述！"):(this.Product.CalibrationTechniques=n()(this.Product.CalibrationTechniques2),void this.API_POST("Product/AddProduct",this.Product).then(function(e){t.$emit("refresh"),t.$router.push({path:"/laboratory-equipment"}),t.$message.success("添加成功！")}))},GetCEJSWJs:function(){var t=this;this.API_GET("Bill/GetCEJSWJs").then(function(e){console.log(e),t.options=e.Dtos})}}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SaxoPage",{scopedSlots:t._u([{key:"title",fn:function(){return[r("saxo-button",{staticStyle:{float:"right"},attrs:{type:"success",mini:""},on:{click:function(e){return t.Create()}}},[t._v("创 建")])]},proxy:!0},{key:"content",fn:function(){return[r("div",{staticClass:"From"},[r("span",[t._v("名称")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.Characteristics,callback:function(e){t.$set(t.Product,"Characteristics",e)},expression:"Product.Characteristics"}})],1),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("型号")]),t._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.Product.ProductCode,callback:function(e){t.$set(t.Product,"ProductCode",e)},expression:"Product.ProductCode"}})],1),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("品牌")]),t._v(" "),r("el-autocomplete",{staticClass:"inline-input input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.Product.Manufacturer,callback:function(e){t.$set(t.Product,"Manufacturer",e)},expression:"Product.Manufacturer"}})],1),t._v(" "),r("div",{staticClass:"From"},[r("span",[t._v("技术文件")]),t._v(" "),r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:t.Product.CalibrationTechniques2,callback:function(e){t.$set(t.Product,"CalibrationTechniques2",e)},expression:"Product.CalibrationTechniques2"}},t._l(t.options,function(t){return r("el-option",{key:t.ValueStr1,attrs:{label:t.ValueStr1,value:t.ValueStr1}})}),1)],1)]},proxy:!0}])})},staticRenderFns:[]};var o=r("VU/8")(s,i,!1,function(t){r("ZQUz")},"data-v-6908b826",null);e.default=o.exports},ZQUz:function(t,e){}});