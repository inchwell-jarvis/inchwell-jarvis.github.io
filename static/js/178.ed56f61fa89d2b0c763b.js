webpackJsonp([178],{h46m:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("t4zo"),l=a.n(i),n=a("uXZL"),r=a.n(n),s={name:"Ech",data:function(){return{msg:"赵鸿飞",area:"",areaS:[],Brandi:"",Brand:[],CustomerType:"",mcType:"",mcTypes:["MC","AS"],TimeData:[],ValueData:[],year:"",monthrange:"",begin:"",end:"",Time:"",myChart2data:[],seriesdata:[],Timetable:"",TimetableYU:"",ValueDataS:0,BIgtext:"",TableData:[],TimetableYUData:[],TableData2:[],nameExcel:""}},mounted:function(){this.init(),this.initGetArea(),this.GetBrand()},methods:{init:function(t){var e=this;"monthrange"===t&&null!=this.monthrange&&(this.begin=this.monthrange[0],this.end=this.monthrange[1],this.Timetable=this.begin+"-"+this.end,this.year=""),"year"===t&&null!=this.year&&(console.log(this.year),this.begin=this.year,(new Date).getFullYear()==this.year.split("-")[0]?this.end=(new Date).getFullYear()+"-"+(Number((new Date).getMonth())+1):this.end=this.year.split("-")[0]+"-12",this.Timetable=this.begin.split("-")[0]),""==this.begin&&(this.year=(new Date).getFullYear()+"-1",this.begin=(new Date).getFullYear()+"-1",this.end=(new Date).getFullYear()+"-"+(Number((new Date).getMonth())+1),this.Timetable=this.begin.split("-")[0]);var a={begin:this.begin,end:this.end,cusType:this.CustomerType,area:this.area,brand:this.Brandi,mcType:this.mcType};this.API_GET("Statistic/MCSalesVolume",a).then(function(t){console.log(t.StatDtos),e.TimeData=[],e.ValueData=[],e.ValueDataS=0;var a=0,i="";e.TimetableYUData=[];for(var l=Number(e.begin.split("-")[0]),n=Number(e.begin.split("-")[1]),r=0;r<t.StatDtos.length;r++){var s=t.StatDtos[r].Key,o=t.StatDtos[r].Value;e.TimeData.push(s),e.ValueData.push(o),e.ValueDataS+=Number(o),o>a&&(a=o,i=r),n+r<13&&e.TimetableYUData.push(l+"-"+(n+r)),n+r>12&&n+r<25&&e.TimetableYUData.push(l+1+"-"+(n+r-12)),n+r>24&&n+r<37&&e.TimetableYUData.push(l+2+"-"+(n+r-24))}console.log(e.TimetableYUData),e.BIgtext=0==a?"没有最佳销售额":e.TimeData[i]+"销售额最多:"+e.ValueData[i],console.log(e.begin),e.drawLine()})},initGetArea:function(){var t=this;this.API_GET("System/GetArea").then(function(e){t.areaS=e})},GetBrand:function(){var t=this;this.API_GET("System/GetBrand").then(function(e){t.Brand=e;for(var a=0;a<t.Brand.length;a++)t.Brand[a].value=t.Brand[a].Value;console.log(t.Brand)})},querySearch:function(t,e){if(console.log(t),void 0==t)return t="",!1;if(""==t)return e(this.Brand),this.init(),!1;for(var a=t,i=this.Brand,l=[],n=(a.split("")[0],0);n<i.length;n++){var r=i[n];-1!=r.value.indexOf(a)&&l.push(r)}console.log(l),e(l)},handleSelect:function(t){this.init()},drawLine:function(){var t=this,e=t.$echarts.init(document.getElementById("myChart1"));e.off("click"),e.setOption({color:["#3398DB"],xAxis:{type:"category",data:t.TimeData},yAxis:{type:"value"},title:{x:"center",text:t.Timetable+"年保养订单统计（总计："+t.ValueDataS.toFixed(2)+"）",subtext:t.BIgtext,subtextStyle:{color:"red"}},tooltip:{},series:[{data:t.ValueData,name:"",type:"bar",itemStyle:{normal:{color:function(t){return["#cca272","#74608f","#d7a02b","#c8ba23","#9bca63","#fe8463","#fcce10","#cca272","#74608f","#d7a02b","#c8ba23","#9bca63","#fe8463","#fcce10","#FF0099","#cca272","#74608f","#d7a02b","#c8ba23","#9bca63","#fe8463","#fcce10","#FF0099","#FF0099","#d8a056","#909399","#67C23A","#F56C6C"][t.dataIndex]}},label:{show:!0,rotate:70,position:"top",distance:20,verticalAlign:"middle",textStyle:{color:"black",fontSize:12}}}}]}),e.on("click",function(e){console.log(e),t.TimetableYU=t.TimetableYUData[e.dataIndex];var a=t.begin.split("-")[0]+"-"+Number(e.name.split("")[0])+"-1";t.SOSalesByArea(a)})},drawLinerwo:function(){var t=this.$echarts.init(document.getElementById("myChart2"));t.off("click"),t.setOption({title:{text:this.TimetableYU+"月保养客户签约比例",x:"center"},color:["#cca272","#74608f","#d7a02b","#c8ba23","#9bca63","#fe8463","#fcce10","#FF0099","#d8a056","#909399","#67C23A","#F56C6C"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:this.myChart2data},series:[{name:"标题!",type:"pie",radius:"55%",center:["50%","60%"],data:this.seriesdata,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0}}}]})},SOSalesByArea:function(t){var e=this;console.log("SOSalesByArea");var a={date:this.TimetableYU,cusType:this.CustomerType,brand:"",mcType:this.mcType};this.API_GET("Statistic/MCSalesByArea",a).then(function(t){console.log(t.StatDtos);var a=t.StatDtos;e.myChart2data=[],e.seriesdata=[];for(var i=0;i<a.length;i++)e.myChart2data.push(a[i].Key),e.seriesdata.push({value:a[i].Value,name:a[i].Key});console.log(e.myChart2data),e.drawLinerwo()})},Delwd:function(t){var e=this,a="Statistic/MCSalesDetail";this.nameExcel="#out-table","2"==t&&(a="Statistic/MCSalesDetail2",this.nameExcel="#out-table2");var i={begin:this.begin,end:this.end,cusType:this.CustomerType,area:this.area,brand:this.Brandi,mcType:this.mcType};this.API_GET(a,i).then(function(a){console.log(a),e.TableData=a,setTimeout(function(){console.log(t),e.exportExcel(t)},500)})},exportExcel:function(){var t=r.a.utils.table_to_book(document.querySelector(this.nameExcel),{raw:!0});console.log(t);var e=r.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{l.a.saveAs(new Blob([e],{type:"application/octet-stream"}),"保养销售额.xlsx")}catch(t){"undefined"!=typeof console&&console.log(t,e)}return e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"top_init_data_INWEll",staticStyle:{borderBottom:"1px solid #ccc",paddingBottom:"5px"}},[a("el-date-picker",{staticStyle:{width:"100px"},attrs:{size:"mini","value-format":"yyyy-MM",type:"year",placeholder:"选择年"},on:{change:function(e){return t.init("year")}},model:{value:t.year,callback:function(e){t.year=e},expression:"year"}}),t._v(" "),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"monthrange",size:"mini","value-format":"yyyy-MM","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},on:{change:function(e){return t.init("monthrange")}},model:{value:t.monthrange,callback:function(e){t.monthrange=e},expression:"monthrange"}}),t._v(" "),a("el-select",{staticStyle:{width:"120px"},attrs:{size:"mini",clearable:"",placeholder:"请选择区域"},on:{change:function(e){return t.init()}},model:{value:t.area,callback:function(e){t.area=e},expression:"area"}},t._l(t.areaS,function(t){return a("el-option",{key:t.Value,attrs:{label:t.Value,value:t.Value}})}),1),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{size:"mini",clearable:"",placeholder:"请选择客户类型"},on:{change:function(e){return t.init(1)}},model:{value:t.CustomerType,callback:function(e){t.CustomerType=e},expression:"CustomerType"}},t._l(this.$store.state.Vuex.CustomerTypes,function(t){return a("el-option",{key:t+"2",attrs:{label:t,value:t}})}),1),t._v(" "),a("el-autocomplete",{staticClass:"inline-input",staticStyle:{width:"200px"},attrs:{size:"mini","show-overflow-tooltip":!0,"fetch-suggestions":t.querySearch,placeholder:"请选择品牌",clearable:""},on:{select:t.handleSelect},model:{value:t.Brandi,callback:function(e){t.Brandi=e},expression:"Brandi "}}),t._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{size:"mini",clearable:"",placeholder:"请选择合同类型"},on:{change:function(e){return t.init(1)}},model:{value:t.mcType,callback:function(e){t.mcType=e},expression:"mcType"}},t._l(t.mcTypes,function(t){return a("el-option",{key:t+"4",attrs:{label:t,value:t}})}),1),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini",loading:this.$store.state.Vuex.loading},on:{click:function(e){return t.init()}}},[t._v("检索")])],1),t._v(" "),a("div",{style:{width:"600px",height:"400px"},attrs:{id:"myChart1"}}),t._v(" "),a("div",{style:{width:"480px",height:"320px"},attrs:{id:"myChart2"}}),t._v(" "),a("div",{staticStyle:{width:"80%",paddingBottom:"5px",float:"left",paddingLeft:"50px"}},[a("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.Delwd()}}},[t._v("下载明细")]),t._v(" "),a("el-button",{staticStyle:{float:"left"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.Delwd(2)}}},[t._v("下载明细2")]),t._v(" "),a("span",{staticStyle:{lineHeight:"28px"}},[t._v("  取值范围：付款日期在检索范围内的保养订单")])],1),t._v(" "),a("div",{staticClass:"table",staticStyle:{display:"none"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:t.TableData,"highlight-current-row":"",height:this.$store.state.TableOptimumHeight,border:"",id:"out-table","header-cell-style":{background:"#e1e1e1"}}},[a("el-table-column",{attrs:{prop:"CusFullName",width:"100",label:"客户名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"MaintainCode",width:"100",label:"订单单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PayDate",width:"100",label:"付款日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ProductCode",width:"100",label:"产品型号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Number",width:"100",label:"数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"RealUnitPrice",width:"100",label:"价格"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Characteristics",width:"100",label:"产品描述"}})],1)],1),t._v(" "),a("div",{staticClass:"table",staticStyle:{display:"none"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{size:"mini",data:t.TableData,"highlight-current-row":"",height:this.$store.state.TableOptimumHeight,border:"",id:"out-table2","header-cell-style":{background:"#e1e1e1"}}},[a("el-table-column",{attrs:{prop:"CusFullName",width:"100",label:"客户名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"CusType",width:"100",label:"客户类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Area",width:"100",label:"区域"}}),t._v(" "),a("el-table-column",{attrs:{prop:"PayDate",width:"100",label:"付款日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"MaintainCode",width:"100",label:"合同编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ConrtractType",width:"100",label:"合同类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Amount",width:"100",label:"合同金额"}})],1)],1)])},staticRenderFns:[]};var c=a("VU/8")(s,o,!1,function(t){a("mEkH")},"data-v-150ce9fa",null);e.default=c.exports},mEkH:function(t,e){}});