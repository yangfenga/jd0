webpackJsonp([1],{106:function(t,i){},107:function(t,i,n){"use strict";function e(t){o||n(108)}var s=n(69),a=n(109),o=!1,c=n(15),r=e,l=c(s.a,a.a,!1,r,"data-v-213e96f7",null);l.options.__file="src/views/list/list_header.vue",i.a=l.exports},108:function(t,i){},109:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"list_header ovf"},[n("div",{staticClass:"lt",on:{click:t.back}},[n("i",{staticClass:"iconfont icon-jiantou2",staticStyle:{color:"#848181"}})]),t._v(" "),n("div",{staticClass:"search_box lt"},[n("span",{staticClass:"iconfont icon-sousuo lt"}),t._v(" "),n("span",{staticClass:"text_box lt",on:{click:t.go}},[t._v("茅台京东超级品牌日")])]),t._v(" "),t._m(0)])},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"rt"},[n("i",{staticClass:"iconfont icon-more",staticStyle:{color:"#848181"}})])}];e._withStripped=!0;var a={render:e,staticRenderFns:s};i.a=a},110:function(t,i,n){"use strict";function e(t){o||n(111)}var s=n(70),a=n(115),o=!1,c=n(15),r=e,l=c(s.a,a.a,!1,r,"data-v-4be8b225",null);l.options.__file="src/views/list/content/index.vue",i.a=l.exports},111:function(t,i){},112:function(t,i,n){"use strict";function e(t){o||n(113)}var s=n(71),a=n(114),o=!1,c=n(15),r=e,l=c(s.a,a.a,!1,r,"data-v-7ef6e228",null);l.options.__file="src/views/list/content/tab.vue",i.a=l.exports},113:function(t,i){},114:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{ref:"left_inner",staticClass:"left_inner",style:{transform:"translateY("+t.y+"px)",transition:t.time+"s"}},[n("ul",t._l(t.tabAry,function(i){return n("li",{class:{current:t.id==i.id},on:{click:function(n){t.fn(i)}}},[t._v(t._s(i.til))])}))])},s=[];e._withStripped=!0;var a={render:e,staticRenderFns:s};i.a=a},115:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"tabs_box ovf",style:{height:this.h+"px"}},[n("div",{staticClass:"left_box lt"},[n("Tab",{attrs:{tabAry:t.tabAry},on:{click:t.fn}})],1),t._v(" "),n("div",{staticClass:"right_box rt"},[n("div",{staticClass:"right_inner"},t._l(t.ary,function(i){return n("div",{staticClass:"jd_div"},[n("h2",[t._v(t._s(i.til))]),t._v(" "),n("ul",{staticClass:"ovf"},t._l(10,function(i){return n("li",{staticClass:"lt"},[n("img",{attrs:{src:"https://img14.360buyimg.com/focus/s140x140_jfs/t13090/243/1346860411/3202/d2be91c4/5a1eb13eN06688863.jpg",alt:""}}),t._v(" "),n("div",[t._v("吸顶灯")])])}))])}))])])},s=[];e._withStripped=!0;var a={render:e,staticRenderFns:s};i.a=a},116:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("list_header"),t._v(" "),n("myContent"),t._v("\n\n\n    这是分类\n")],1)},s=[];e._withStripped=!0;var a={render:e,staticRenderFns:s};i.a=a},47:function(t,i,n){"use strict";function e(t){o||n(106)}Object.defineProperty(i,"__esModule",{value:!0});var s=n(68),a=n(116),o=!1,c=n(15),r=e,l=c(s.a,a.a,!1,r,"data-v-31499d3b",null);l.options.__file="src/views/list/index.vue",i.default=l.exports},68:function(t,i,n){"use strict";var e=n(107),s=n(110);i.a={components:{list_header:e.a,myContent:s.a}}},69:function(t,i,n){"use strict";i.a={data:function(){return{}},mounted:function(){},methods:{go:function(){this.$router.push("/search")},back:function(){this.$router.back()}}}},70:function(t,i,n){"use strict";var e=n(112);i.a={data:function(){return{tabAry:[{id:1,til:"热门推荐"},{id:2,til:"手机数码"},{id:3,til:"家用电器"},{id:4,til:"电脑办公"},{id:5,til:"美妆护肤"},{id:6,til:"汽车用品"},{id:7,til:"京东超市"},{id:8,til:"男装"},{id:9,til:"男鞋"},{id:10,til:"女装"},{id:11,til:"女鞋"},{id:12,til:"手机数码"},{id:13,til:"家用电器"},{id:14,til:"电脑办公"},{id:15,til:"美妆护肤"},{id:16,til:"汽车用品"},{id:17,til:"京东超市"},{id:18,til:"男装"},{id:19,til:"男鞋"},{id:20,til:"女装"},{id:21,til:"女鞋"}],h:0,ary:[{til:"热卖推荐"},{til:"热卖推荐2"},{til:"热卖推荐3"},{til:"热卖推荐4"}]}},components:{Tab:e.a},mounted:function(){this.setHeight()},methods:{setHeight:function(){var t=document.documentElement.clientHeight||document.body.height,i=parseFloat(getComputedStyle(document.documentElement,null).fontSize);this.h=t-55/37.5*i,this.rem=i},fn:function(t){this.ary.forEach(function(i){i.til=t.til+t.id})}}}},71:function(t,i,n){"use strict";i.a={data:function(){return{id:1,time:0,y:0,rem:0,h:0}},props:["tabAry"],mounted:function(){this.setHeight(),this.bindmoveEvent()},methods:{setHeight:function(){var t=document.documentElement.clientHeight||document.body.height,i=parseFloat(getComputedStyle(document.documentElement,null).fontSize);this.h=t-55/37.5*i,this.rem=i},bindmoveEvent:function(){var t=this.$refs.left_inner,i=!1,n=this;t.ontouchstart=function(t){this.sy=t.touches[0].pageY,this.startY=n.y,n.time=0,i=!0},t.ontouchmove=function(t){if(t.preventDefault(),t.stopPropagation(),i){this.my=t.touches[0].pageY;var e=this.my-this.sy;n.y=e+this.startY}},t.ontouchend=function(){n.y>0&&(n.y=0),i=!1}},fn:function(t){var i=this.tabAry.indexOf(t);this.$refs.left_inner;this.y=45*-i*rem/37.5,this.id=t.id,this.$emit("click",t),this.time=.5,console.log(this.tabAry.indexOf(t))}}}}});