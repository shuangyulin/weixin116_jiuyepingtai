(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiuzhixinxi/add-or-update"],{"05a6":function(e,n,i){"use strict";(function(e){i("fa65"),i("921b");t(i("66fd"));var n=t(i("8aca"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"26cb":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=u(i("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function r(e,n,i,t,u,r,a){try{var o=e[r](a),s=o.value}catch(h){return void i(h)}o.done?n(s):Promise.resolve(s).then(t,u)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(t,u){var a=e.apply(n,i);function o(e){r(a,t,u,o,s,"next",e)}function s(e){r(a,t,u,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("976c"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{xueshengzhanghao:"",xueshengxingming:"",zhanghao:"",qiyemingcheng:"",zhaopingangwei:"",xinzi:"",xueli:"",xiangmujingli:"",gongzuojingli:"",qiuzhizhuangtai:"",qiwangxingye:"",beizhu:"",touxiang:"",tupian:"",userid:""},xueliOptions:[],xueliIndex:0,qiuzhizhuangtaiOptions:[],qiuzhizhuangtaiIndex:0,user:{},ro:{xueshengzhanghao:!1,xueshengxingming:!1,zhanghao:!1,qiyemingcheng:!1,zhaopingangwei:!1,xinzi:!1,xueli:!1,xiangmujingli:!1,gongzuojingli:!1,qiuzhizhuangtai:!1,qiwangxingye:!1,beizhu:!1,touxiang:!1,tupian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(t.default.mark((function n(i){var u,r,a,o;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u=e.getStorageSync("nowTable"),n.next=3,this.$api.session(u);case 3:if(r=n.sent,this.user=r.data,this.ruleForm.xueshengzhanghao=this.user.xueshengzhanghao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.xueliOptions="大专及以下,本科,研究生,研究生以上".split(","),this.qiuzhizhuangtaiOptions="离校-随时到岗,在校-月内到岗,在校-考虑机会,在校-暂不考虑".split(","),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){n.next=17;break}return this.ruleForm.id=i.id,n.next=15,this.$api.info("qiuzhixinxi",this.ruleForm.id);case 15:r=n.sent,this.ruleForm=r.data;case 17:if(!i.cross){n.next=84;break}a=e.getStorageSync("crossObj"),n.t0=t.default.keys(a);case 20:if((n.t1=n.t0()).done){n.next=84;break}if(o=n.t1.value,"xueshengzhanghao"!=o){n.next=26;break}return this.ruleForm.xueshengzhanghao=a[o],this.ro.xueshengzhanghao=!0,n.abrupt("continue",20);case 26:if("xueshengxingming"!=o){n.next=30;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,n.abrupt("continue",20);case 30:if("zhanghao"!=o){n.next=34;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,n.abrupt("continue",20);case 34:if("qiyemingcheng"!=o){n.next=38;break}return this.ruleForm.qiyemingcheng=a[o],this.ro.qiyemingcheng=!0,n.abrupt("continue",20);case 38:if("zhaopingangwei"!=o){n.next=42;break}return this.ruleForm.zhaopingangwei=a[o],this.ro.zhaopingangwei=!0,n.abrupt("continue",20);case 42:if("xinzi"!=o){n.next=46;break}return this.ruleForm.xinzi=a[o],this.ro.xinzi=!0,n.abrupt("continue",20);case 46:if("xueli"!=o){n.next=50;break}return this.ruleForm.xueli=a[o],this.ro.xueli=!0,n.abrupt("continue",20);case 50:if("xiangmujingli"!=o){n.next=54;break}return this.ruleForm.xiangmujingli=a[o],this.ro.xiangmujingli=!0,n.abrupt("continue",20);case 54:if("gongzuojingli"!=o){n.next=58;break}return this.ruleForm.gongzuojingli=a[o],this.ro.gongzuojingli=!0,n.abrupt("continue",20);case 58:if("qiuzhizhuangtai"!=o){n.next=62;break}return this.ruleForm.qiuzhizhuangtai=a[o],this.ro.qiuzhizhuangtai=!0,n.abrupt("continue",20);case 62:if("qiwangxingye"!=o){n.next=66;break}return this.ruleForm.qiwangxingye=a[o],this.ro.qiwangxingye=!0,n.abrupt("continue",20);case 66:if("beizhu"!=o){n.next=70;break}return this.ruleForm.beizhu=a[o],this.ro.beizhu=!0,n.abrupt("continue",20);case 70:if("touxiang"!=o){n.next=74;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,n.abrupt("continue",20);case 74:if("tupian"!=o){n.next=78;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,n.abrupt("continue",20);case 78:if("userid"!=o){n.next=82;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,n.abrupt("continue",20);case 82:n.next=20;break;case 84:this.styleChange();case 85:case"end":return n.stop()}}),n,this)})));function i(e){return n.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xueliChange:function(e){this.xueliIndex=e.target.value,this.ruleForm.xueli=this.xueliOptions[this.xueliIndex]},qiuzhizhuangtaiChange:function(e){this.qiuzhizhuangtaiIndex=e.target.value,this.ruleForm.qiuzhizhuangtai=this.qiuzhizhuangtaiOptions[this.qiuzhizhuangtaiIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xueshengzhanghao){e.next=3;break}return this.$utils.msg("学生账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.xueshengxingming){e.next=6;break}return this.$utils.msg("学生姓名不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("qiuzhixinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("qiuzhixinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,u=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(i,"-").concat(t,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])},"4dd6":function(e,n,i){},"8aca":function(e,n,i){"use strict";i.r(n);var t=i("f65b"),u=i("c304");for(var r in u)"default"!==r&&function(e){i.d(n,e,(function(){return u[e]}))}(r);i("edf1");var a,o=i("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"52be7570",null,!1,t["a"],a);n["default"]=s.exports},c304:function(e,n,i){"use strict";i.r(n);var t=i("26cb"),u=i.n(t);for(var r in t)"default"!==r&&function(e){i.d(n,e,(function(){return t[e]}))}(r);n["default"]=u.a},edf1:function(e,n,i){"use strict";var t=i("4dd6"),u=i.n(t);u.a},f65b:function(e,n,i){"use strict";var t,u=function(){var e=this,n=e.$createElement;e._self._c},r=[];i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return t}))}},[["05a6","common/runtime","common/vendor"]]]);