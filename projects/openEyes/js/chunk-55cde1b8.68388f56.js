(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55cde1b8"],{"121e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"historical-rank"},[t.historicalData?[t._l(t.historicalData,(function(a,n){return e("RankItem",{key:n+"d",attrs:{item:a},on:{RankItemClick:function(a){return t.RankItemClick(a)}}})})),e("div",{staticClass:"end"},[t._v("——the end——")])]:[e("van-loading",{attrs:{type:"spinner",color:"#6b6b6b"}})]],2)},i=[],s=e("e9c4"),r={name:"historicalRank.vue",data:function(){return{historicalData:null}},beforeRouteEnter:function(t,a,e){e((function(t){t.historicalData=t.$store.state.DayRank}))},methods:{RankItemClick:function(t){this.$router.push("/playingdetailpage"),this.$store.commit("setPlayingPageDate",t),this.$store.commit("setShowBottomBar",!1)}},components:{RankItem:s["a"]}},c=r,o=(e("639f"),e("2877")),l=Object(o["a"])(c,n,i,!1,null,"56a2c47e",null);a["default"]=l.exports},2163:function(t,a,e){},"3cae":function(t,a,e){"use strict";var n=e("c961"),i=e.n(n);i.a},"639f":function(t,a,e){"use strict";var n=e("2163"),i=e.n(n);i.a},c961:function(t,a,e){},e9c4:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank-item",on:{click:function(a){return t.$emit("RankItemClick",t.item)}}},[e("div",{staticClass:"img"},[e("van-image",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.data.cover.feed,expression:"item.data.cover.feed"}],attrs:{src:t.item.data.cover.feed},scopedSlots:t._u([{key:"loading",fn:function(){return[e("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(t.item.data.title))]),e("div",{staticClass:"author"},[e("div",{staticClass:"user"},[e("span",[t._v("#"+t._s(t.item.data.category))]),e("span",[t._v(t._s(t.item.data.author.name))])]),e("div",{staticClass:"share"},[e("van-icon",{attrs:{name:"share"}})],1)])])])},i=[],s={name:"RankItem",props:["item"]},r=s,c=(e("3cae"),e("2877")),o=Object(c["a"])(r,n,i,!1,null,"67d42842",null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-55cde1b8.68388f56.js.map