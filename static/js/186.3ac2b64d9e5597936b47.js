webpackJsonp([186],{Rl7N:function(e,t){},wFha:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("mvHQ"),o=i.n(a),l={data:function(){return{formLabelAlign:{Title:"",Content:"",BeginTime:"",For:""},uploadFileUrlapp:"https://httpbin.org/post",imageUrlList:[],imgVideoBase64List:[],dialogVisibleMainGraph:!1,imageUrl:{}}},computed:{},watch:{},methods:{Good:function(){var e=this,t=JSON.parse(o()(this.formLabelAlign));t.For="内部员工"==t.For?1:"客户"==t.For?2:3,console.log(t);var i={api:"post",url:this.$store.state.http+"System/AddJournalism",data:t};this.$https(i).then(function(t){console.log(t),e.$emit("refresh"),e.$router.push({path:"./NewsListings"})})},beforeuploadMainGraph:function(e){var t=(e.size/1024/1024).toFixed(3);if(console.log(t+"MB"),console.log(e),t>10&&"video/mp4"==e.type)return this.$message.warning("视频文件大小不得超过10MB"),!1;var i=this,a=new FileReader;a.readAsDataURL(e),a.onload=function(t){var o=a.result;i.imgVideoBase64List.push({uid:e.uid,base64:o})}},handleSuccessMainGraph:function(e,t,i){this.imageUrlList=i,console.log(this.imgVideoBase64List)},UpImgLeng:function(){if(0==this.imgVideoBase64List.length)return!1;for(var e=0;e<this.imgVideoBase64List.length;e++){var t=this.imgVideoBase64List[e];this.Upimg(t)}this.imageUrlList=[],this.imgVideoBase64List=[]},Upimg:function(e){var t=this,i=e.base64.split("base64")[0];console.log(i.split("video/mp4").length);var a={api:"post",url:this.$store.state.http+"System/UploadJournalism",data:{FileStr:e.base64,Type:i.split("video/mp4").length}};this.$https(a).then(function(e){console.log(e.Data),1==e.Data.split("mp4").length?t.formLabelAlign.Content+="<img src='http://icms.inchwell.com.cn/file/Message/"+e.Data+"'> ":t.formLabelAlign.Content+="<video src='http://icms.inchwell.com.cn/file/Message/"+e.Data+'\' controls="controls"  >您的浏览器不支持 video 标签。</video> '})},handlePreviewMainGraph:function(e){this.imageUrl.type=e.raw.type,this.imageUrl.url=e.url,console.log(e),this.$refs.primary.start()},beforeremoveMainGraph:function(e,t){},handleRemoveMainGraph:function(e,t){console.log(e.uid);for(var i=0;i<this.imgVideoBase64List.length;i++){this.imgVideoBase64List[i].uid===e.uid&&this.imgVideoBase64List.splice(i,1)}console.log(this.imgVideoBase64List)}},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box_s"},[i("div",{staticClass:"view"},[i("el-form",{attrs:{"label-width":"80px",model:e.formLabelAlign}},[i("el-form-item",{attrs:{label:"标题"}},[i("el-input",{attrs:{size:"mini"},model:{value:e.formLabelAlign.Title,callback:function(t){e.$set(e.formLabelAlign,"Title",t)},expression:"formLabelAlign.Title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"开始日期"}},[i("el-date-picker",{attrs:{size:"mini","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:e.formLabelAlign.BeginTime,callback:function(t){e.$set(e.formLabelAlign,"BeginTime",t)},expression:"formLabelAlign.BeginTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"目标群体"}},[i("el-radio-group",{model:{value:e.formLabelAlign.For,callback:function(t){e.$set(e.formLabelAlign,"For",t)},expression:"formLabelAlign.For"}},[i("el-radio",{attrs:{label:"内部员工"}}),e._v(" "),i("el-radio",{attrs:{label:"客户"}}),e._v(" "),i("el-radio",{attrs:{label:"全部"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"内容"}},[i("el-input",{staticClass:"textarea",attrs:{type:"textarea",size:"mini",autosize:{minRows:2,maxRows:9999},placeholder:"请输入内容"},model:{value:e.formLabelAlign.Content,callback:function(t){e.$set(e.formLabelAlign,"Content",t)},expression:"formLabelAlign.Content"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"上传"}},[i("el-upload",{attrs:{action:e.uploadFileUrlapp,data:{attachType:0},name:"appFile",limit:10,multiple:!0,accept:"image/*,video/*","before-upload":e.beforeuploadMainGraph,"on-success":e.handleSuccessMainGraph,"on-preview":e.handlePreviewMainGraph,"before-remove":e.beforeremoveMainGraph,"on-remove":e.handleRemoveMainGraph,"list-type":"picture-card","file-list":e.imageUrlList}},[i("i",{staticClass:"el-icon-plus spc1"})]),e._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.UpImgLeng()}}},[e._v("上传")])],1)],1),e._v(" "),i("saxo-pop",{ref:"primary",attrs:{type:"primary",title:"查看",width:"600px"},on:{close:function(t){return e.$refs.primary.start()}}},["video/mp4"!=e.imageUrl.type?i("img",{attrs:{width:"100%",src:e.imageUrl.url,alt:""}}):e._e(),e._v(" "),"video/mp4"==e.imageUrl.type?i("video",{staticClass:"avatar video-avatar",attrs:{src:e.imageUrl.url,controls:"controls"}},[e._v("\n        您的浏览器不支持视频播放\n      ")]):e._e()]),e._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.Good()}}},[e._v("添加")])],1),e._v(" "),i("div",{staticClass:"view_html"},[i("div",{staticClass:"iphone",domProps:{innerHTML:e._s(e.formLabelAlign.Content)}}),e._v(" "),i("div",{staticClass:"head"},[e._v(e._s(e.formLabelAlign.Title)+" ")])])])},staticRenderFns:[]};var r=i("VU/8")(l,s,!1,function(e){i("Rl7N")},"data-v-097e4525",null);t.default=r.exports}});