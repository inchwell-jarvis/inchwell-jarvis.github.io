webpackJsonp([161],{CAL5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{ApplicationData:{EnginnerId:"",Date:"",Days:0},EmployeeName:"",DateStr:"",AutomaticComputing:"",dialogTableVisible:!1,gcsData:[],gcsData2:[],search:"",GcsListWork:[]}},computed:{},watch:{},methods:{AddTA:function(){var t=this;""!=this.AutomaticComputing&&(this.ApplicationData.Days=this.AutomaticComputing);var e={api:"post",url:this.$store.state.http+"Pcenter/AddTA",data:this.ApplicationData};this.$https(e).then(function(e){t.$emit("refresh"),t.$router.push({path:"TravelAllowance"})})},SelectPersonnel:function(){var t=this,e={api:"get",url:this.$store.state.http+"System/GetEmployeeMini",data:{type:"2"}};this.$https(e).then(function(e){console.log(e),t.gcsData=e.Data,t.gcsData2=e.Data})},EachrGcs:function(t){console.log(this.search);for(var e=this.search,a=[],i=0;i<this.gcsData.length;i++){var s=this.gcsData[i];for(var n in s){if(console.log(s[n]),-1!=String(s[n]).indexOf(e)){a.push(s);break}}}this.gcsData2=a},Choose:function(t){console.log(t),this.ApplicationData.EnginnerId=t.EmployeeId,this.EmployeeName=t.Name,this.$refs.primary.start(),this.GetTATravelInfoData()},GetTATravelInfoData:function(){var t=this,e={api:"get",url:this.$store.state.http+"PCenter/GetTATravelInfoData",data:{enginnerId:this.ApplicationData.EnginnerId,date:this.ApplicationData.Date}};this.$https(e).then(function(e){console.log(e.Data),t.GcsListWork=e.Data;for(var a=0,i=0;i<t.GcsListWork.length;i++)a+=t.GcsListWork[i].Days;t.ApplicationData.Days=a})}},created:function(){var t=new Date;t.setMonth(t.getMonth()-1);var e=t.getFullYear(),a=t.getMonth()+1;t.getDate();this.ApplicationData.Date=e+"-"+a,this.DateStr=new Date(+new Date+288e5).toJSON().substr(0,19).replace("T"," "),this.SelectPersonnel()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box_s"},[a("table",{staticClass:"borderTable"},[a("tbody",[t._m(0),t._v(" "),a("tr",[a("td",{staticClass:"DJCCXXRY",on:{click:function(e){return t.$refs.primary.start()}}},[t._v("\n                    "+t._s(t.EmployeeName||"点击选择售后人员")+"\n                ")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("申请月份：")]),t._v(" "),a("td",[t._v("\n                    "+t._s(t.ApplicationData.Date)+"\n                ")])]),t._v(" "),t._m(1),t._v(" "),null==t.GcsListWork[0]?a("tr",[t._m(2)]):t._e(),t._v(" "),t._l(t.GcsListWork,function(e,i){return a("tr",{key:i},[a("td",{staticStyle:{width:"25%"}},[a("span",[t._v(t._s(e.Date.split("T")[0]))])]),t._v(" "),a("td",{staticStyle:{width:"60%","text-align":"left"}},[a("span",[a("span",[t._v(t._s(e.Info))]),a("br")])]),t._v(" "),a("td",{staticStyle:{width:"15%"}},[a("span",[t._v(t._s(e.Days))])])])}),t._v(" "),a("tr",[a("td",[t._v("合计")]),t._v(" "),t._m(3),t._v(" "),a("td",[a("el-input",{staticClass:"JS",attrs:{size:"mini",disabled:""},model:{value:t.ApplicationData.Days,callback:function(e){t.$set(t.ApplicationData,"Days",e)},expression:"ApplicationData.Days"}},[a("template",{staticStyle:{color:"#000"},slot:"prepend"},[t._v("自动计算天数：")])],2),t._v(" "),a("br"),t._v(" "),a("el-input",{staticClass:"JS",attrs:{size:"mini"},model:{value:t.AutomaticComputing,callback:function(e){t.AutomaticComputing=e},expression:"AutomaticComputing"}},[a("template",{slot:"prepend"},[t._v("手动修改天数：")])],2)],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"3"}},[t._v("    日期："+t._s(t.DateStr))])])],2)]),t._v(" "),a("el-button",{staticStyle:{float:"right",marginTop:"30px"},attrs:{type:"primary",loading:this.$store.state.Vuex.loading,size:"mini"},on:{click:function(e){return t.AddTA()}}},[t._v("初核")]),t._v(" "),a("saxo-pop",{ref:"primary",attrs:{type:"primary",title:"选择售后人员",width:"800px"},on:{close:function(e){return t.$refs.primary.start()}}},[a("el-table",{attrs:{data:t.gcsData2,size:"mini",height:"250"}},[a("el-table-column",{attrs:{property:"Name",label:"姓名",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{property:"Area",label:"区域",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{property:"UserName",label:"账号"}}),t._v(" "),a("el-table-column",{attrs:{align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return t.Choose(e.row)}}},[t._v("选择")])]}}])},[a("template",{slot:"header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"INput",attrs:{type:"text",placeholder:"输入关键字搜索"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.EachrGcs]}})])],2)],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"800"},attrs:{colspan:"3"}},[this._v("员工出差补助申请表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"font-weight":"800"}},[this._v("出差日期")]),this._v(" "),e("td",{staticStyle:{"font-weight":"800"}},[this._v("出差事由")]),this._v(" "),e("td",{staticStyle:{"font-weight":"800"}},[this._v("出差天数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"3"}},[e("span",{staticClass:"DJCCXXRY"},[this._v("选择售后员工后，自动调出工作日报")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left",color:"red"}},[e("span",[this._v("    【自动计算天数】是系统自送根据工作日报计算得出；")]),this._v(" "),e("br"),this._v(" "),e("span",[this._v("    【手动修改天数】是审核人根据实际情况核算天数，财务计算补助以【手动修改天数】为准；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"3"}},[this._v("    初核人：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"text-align":"left"},attrs:{colspan:"3"}},[this._v("    复核人：")])])}]};var n=a("VU/8")(i,s,!1,function(t){a("YAXB")},"data-v-230f1a1c",null);e.default=n.exports},YAXB:function(t,e){}});