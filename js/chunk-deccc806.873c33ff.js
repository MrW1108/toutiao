(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-deccc806"],{"0248":function(e,t,n){},"25f0":function(e,t,n){"use strict";var r=n("e330"),a=n("5e77").PROPER,i=n("6eeb"),o=n("825a"),s=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),d="toString",p=RegExp.prototype,f=p[d],h=r(l),m=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),v=a&&f.name!=d;(m||v)&&i(RegExp.prototype,d,(function(){var e=o(this),t=c(e.source),n=e.flags,r=c(void 0===n&&s(p,e)&&!("flags"in p)?h(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"50f8":function(e,t,n){"use strict";var r=n("2b0e");t["a"]=new r["a"]},"524b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{staticClass:"page-navbar",attrs:{title:"个人信息","left-arrow":""},on:{"click-left":function(t){return e.$router.replace("/my")}}}),n("van-cell-group",[n("van-cell",{attrs:{title:"头像","is-link":"",center:""},on:{click:e.onShowFile}},[n("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:e.user.photo}})],1),n("input",{ref:"file",attrs:{type:"file",hidden:"",accept:"image/*"},on:{change:e.onFileChange}}),n("van-cell",{attrs:{title:"昵称",value:e.user.name,"is-link":""},on:{click:e.onEditNameShow}}),n("van-cell",{attrs:{title:"性别",value:0===e.user.gender?"男":"女","is-link":""},on:{click:function(t){e.isEditGenerShow=!0}}}),n("van-cell",{attrs:{title:"生日",value:e.user.birthday,"is-link":""},on:{click:function(t){e.isEditBirthdayShow=!0}}})],1),n("van-popup",{staticClass:"intro-popup",staticStyle:{height:"100%"},attrs:{position:"bottom","get-container":"body"},on:{opened:function(t){return e.$refs.name.focus()}},model:{value:e.isEditNameShow,callback:function(t){e.isEditNameShow=t},expression:"isEditNameShow"}},[n("van-nav-bar",{attrs:{title:"昵称","left-text":"取消","right-text":"完成"},on:{"click-left":function(t){e.isEditNameShow=!1},"click-right":e.onNameConfirm}}),n("div",{staticClass:"intro-field-wrap"},[n("van-field",{ref:"name",attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"7",placeholder:"请输入昵称","show-word-limit":"",id:"name"},model:{value:e.inputName,callback:function(t){e.inputName=t},expression:"inputName"}})],1)],1),n("van-popup",{attrs:{position:"bottom","get-container":"body"},model:{value:e.isEditGenerShow,callback:function(t){e.isEditGenerShow=t},expression:"isEditGenerShow"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"性别",columns:e.columns,"default-index":e.user.gender},on:{cancel:function(t){e.isEditGenerShow=!1},change:e.onPickerChange,confirm:function(t){return e.saveProfile("gender",e.selectedGender)}}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:e.isEditBirthdayShow,callback:function(t){e.isEditBirthdayShow=t},expression:"isEditBirthdayShow"}},[n("van-datetime-picker",{attrs:{type:"date","min-date":e.minDate,"confirm-button-text":"完成"},on:{confirm:e.onBirthdayConfirm,cancel:function(t){e.isEditBirthdayShow=!1}},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1),n("van-popup",{staticStyle:{height:"100%","background-color":"#000"},attrs:{position:"bottom"},model:{value:e.isPreviewPhotoShow,callback:function(t){e.isPreviewPhotoShow=t},expression:"isPreviewPhotoShow"}},[e.isPreviewPhotoShow?n("img-cropper",{ref:"img-cropper",attrs:{src:e.previewImage}}):e._e(),n("div",{staticClass:"crop-bottom"},[n("span",{on:{click:function(t){e.isPreviewPhotoShow=!1}}},[e._v("取消")]),n("span",{on:{click:e.onPhotoConfirm}},[e._v("完成")])])],1)],1)},a=[],i=n("ade3"),o=n("1da1"),s=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("96cf"),n("c24f")),c=n("5a0c"),u=n.n(c),l=n("50f8"),d=n("d62c"),p={name:"UserProfile",components:{ImgCropper:d["a"]},data:function(){return{user:{},isEditNameShow:!1,isNameShow:!1,inputName:"",isEditGenerShow:!1,actions:[{name:"男",value:0},{name:"女",value:1}],isEditBirthdayShow:!1,currentDate:new Date,minDate:new Date(1970,1,1),isPreviewPhotoShow:!1,previewImages:[],previewImage:"",columns:["男","女"],selectedGender:0}},computed:{file:function(){return this.$refs.file}},created:function(){this.loadUserProfile()},methods:{onPickerChange:function(e,t,n){this.selectedGender=n},loadUserProfile:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])();case 2:n=t.sent,r=n.data,e.user=r.data,e.currentDate=new Date(e.user.birthday);case 6:case"end":return t.stop()}}),t)})))()},onEditNameShow:function(){this.inputName=this.user.name,this.isEditNameShow=!0},onShowFile:function(){this.file.click()},onFileChange:function(){var e=URL.createObjectURL(this.file.files[0]);this.previewImages=[],this.previewImages.push(e),this.previewImage=e,this.isPreviewPhotoShow=!0,this.file.value=""},saveProfile:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.$toast.loading({duration:0,forbidClick:!0,message:"保存中..."}),r.prev=1,r.next=4,Object(s["k"])(Object(i["a"])({},e,t));case 4:n.$toast.success("保存成功"),n.user[e]=t,l["a"].$emit("user-update"),n.isEditGenerShow=!1,r.next=14;break;case 10:return r.prev=10,r.t0=r["catch"](1),n.$toast.success("保存失败"),r.abrupt("return",Promise.reject(r.t0));case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},onNameConfirm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.saveProfile("name",e.inputName);case 3:e.user.name=e.inputName,e.isEditNameShow=!1,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),n=t.t0.response,400===n.status?e.$toast.fail("昵称必须在1-7个字符之间"):409===n.status&&e.$toast.fail("昵称已存在");case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onGenerSelect:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.saveProfile("gender",e.value);case 2:t.user.gender=e.value,t.isEditGenerShow=!1;case 4:case"end":return n.stop()}}),n)})))()},onBirthdayConfirm:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=u()(e).format("YYYY-MM-DD"),n.next=3,t.saveProfile("birthday",r);case 3:t.user.birthday=r,t.isEditBirthdayShow=!1;case 5:case"end":return n.stop()}}),n)})))()},onUpdatePhoto:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$toast.loading({duration:0,forbidClick:!0,message:"保存中..."}),t.prev=1,n=new FormData,r=e.file.files[0],n.append("photo",r),t.next=7,Object(s["j"])(n);case 7:e.user.photo=URL.createObjectURL(r),e.isPreviewPhotoShow=!1,e.$toast.success("保存成功"),l["a"].$emit("user-update"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),e.$toast.success("保存失败");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},onPhotoConfirm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$toast.loading({duration:0,forbidClick:!0,message:"保存中..."}),t.prev=1,n=new FormData,t.next=5,e.$refs["img-cropper"].getCroppedBlob();case 5:return r=t.sent,console.log(r),n.append("photo",r),t.next=10,Object(s["j"])(n);case 10:e.user.photo=URL.createObjectURL(r),e.isPreviewPhotoShow=!1,e.$toast.success("保存成功"),l["a"].$emit("user-update"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1),e.$toast.success("保存失败");case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))()}}},f=p,h=(n("62f3"),n("2877")),m=Object(h["a"])(f,r,a,!1,null,"7491f446",null);t["default"]=m.exports},"62f3":function(e,t,n){"use strict";n("0248")},c24f:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return h}));n("d3b7"),n("25f0");var r=n("b775");function a(e){return Object(r["a"])({method:"POST",url:"/example/user/login",data:e})}function i(){return Object(r["a"])({method:"GET",url:"/example/user/UserInfo"})}function o(){return Object(r["a"])({method:"GET",url:"/example/channel/channels"})}function s(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:e}})}function c(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})}function u(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}function l(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:e})}function d(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:e})}function p(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(e)})}function f(e,t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followings",params:t,data:{target:e.toString()}})}function h(e,t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followers",params:t,data:{target:e.toString()}})}}}]);
//# sourceMappingURL=chunk-deccc806.873c33ff.js.map