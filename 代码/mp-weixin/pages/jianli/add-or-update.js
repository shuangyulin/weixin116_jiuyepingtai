(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianli/add-or-update"],{"0101":function(e,n,i){"use strict";i.r(n);var t=i("e1c3"),r=i.n(t);for(var u in t)"default"!==u&&function(e){i.d(n,e,(function(){return t[e]}))}(u);n["default"]=r.a},"0df5":function(e,n,i){"use strict";var t=i("4d44"),r=i.n(t);r.a},"14d1":function(e,n,i){"use strict";(function(e){i("fa65"),i("921b");t(i("66fd"));var n=t(i("d235"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},"4d44":function(e,n,i){},"60c2":function(e,n,i){"use strict";var t,r=function(){var e=this,n=e.$createElement;e._self._c},u=[];i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return t}))},d235:function(e,n,i){"use strict";i.r(n);var t=i("60c2"),r=i("0101");for(var u in r)"default"!==u&&function(e){i.d(n,e,(function(){return r[e]}))}(u);i("0df5");var a,o=i("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"109b20e0",null,!1,t["a"],a);n["default"]=s.exports},e1c3:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,i,t,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void i(c)}o.done?n(s):Promise.resolve(s).then(t,r)}function a(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var a=e.apply(n,i);function o(e){u(a,t,r,o,s,"next",e)}function s(e){u(a,t,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("976c"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{xueshengzhanghao:"",xueshengxingming:"",xingbie:"",nianling:"",xueli:"",zhuanye:"",biyexuexiao:"",qiwanggangwei:"",qiwangxingye:"",qiwangxinzi:"",dizhi:"",shouji:"",touxiang:"",userid:""},xingbieOptions:[],xingbieIndex:0,xueliOptions:[],xueliIndex:0,user:{},ro:{xueshengzhanghao:!1,xueshengxingming:!1,xingbie:!1,nianling:!1,xueli:!1,zhuanye:!1,biyexuexiao:!1,qiwanggangwei:!1,qiwangxingye:!1,qiwangxinzi:!1,dizhi:!1,shouji:!1,touxiang:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(t.default.mark((function n(i){var r,u,a,o;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(u=n.sent,this.user=u.data,this.ruleForm.xueshengzhanghao=this.user.xueshengzhanghao,this.ruleForm.xueshengxingming=this.user.xueshengxingming,this.xingbieOptions="男,女".split(","),this.xueliOptions="大专及以下,本科,研究生,研究生以上".split(","),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){n.next=17;break}return this.ruleForm.id=i.id,n.next=15,this.$api.info("jianli",this.ruleForm.id);case 15:u=n.sent,this.ruleForm=u.data;case 17:if(!i.cross){n.next=80;break}a=e.getStorageSync("crossObj"),n.t0=t.default.keys(a);case 20:if((n.t1=n.t0()).done){n.next=80;break}if(o=n.t1.value,"xueshengzhanghao"!=o){n.next=26;break}return this.ruleForm.xueshengzhanghao=a[o],this.ro.xueshengzhanghao=!0,n.abrupt("continue",20);case 26:if("xueshengxingming"!=o){n.next=30;break}return this.ruleForm.xueshengxingming=a[o],this.ro.xueshengxingming=!0,n.abrupt("continue",20);case 30:if("xingbie"!=o){n.next=34;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,n.abrupt("continue",20);case 34:if("nianling"!=o){n.next=38;break}return this.ruleForm.nianling=a[o],this.ro.nianling=!0,n.abrupt("continue",20);case 38:if("xueli"!=o){n.next=42;break}return this.ruleForm.xueli=a[o],this.ro.xueli=!0,n.abrupt("continue",20);case 42:if("zhuanye"!=o){n.next=46;break}return this.ruleForm.zhuanye=a[o],this.ro.zhuanye=!0,n.abrupt("continue",20);case 46:if("biyexuexiao"!=o){n.next=50;break}return this.ruleForm.biyexuexiao=a[o],this.ro.biyexuexiao=!0,n.abrupt("continue",20);case 50:if("qiwanggangwei"!=o){n.next=54;break}return this.ruleForm.qiwanggangwei=a[o],this.ro.qiwanggangwei=!0,n.abrupt("continue",20);case 54:if("qiwangxingye"!=o){n.next=58;break}return this.ruleForm.qiwangxingye=a[o],this.ro.qiwangxingye=!0,n.abrupt("continue",20);case 58:if("qiwangxinzi"!=o){n.next=62;break}return this.ruleForm.qiwangxinzi=a[o],this.ro.qiwangxinzi=!0,n.abrupt("continue",20);case 62:if("dizhi"!=o){n.next=66;break}return this.ruleForm.dizhi=a[o],this.ro.dizhi=!0,n.abrupt("continue",20);case 66:if("shouji"!=o){n.next=70;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,n.abrupt("continue",20);case 70:if("touxiang"!=o){n.next=74;break}return this.ruleForm.touxiang=a[o],this.ro.touxiang=!0,n.abrupt("continue",20);case 74:if("userid"!=o){n.next=78;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,n.abrupt("continue",20);case 78:n.next=20;break;case 80:this.styleChange();case 81:case"end":return n.stop()}}),n,this)})));function i(e){return n.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xueliChange:function(e){this.xueliIndex=e.target.value,this.ruleForm.xueli=this.xueliOptions[this.xueliIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=3;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("jianli",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("jianli",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,i("543d")["default"])}},[["14d1","common/runtime","common/vendor"]]]);