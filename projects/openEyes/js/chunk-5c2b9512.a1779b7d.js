(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c2b9512"],{"0db7":function(t,e,a){},"12ec":function(t,e,a){},2766:function(t,e,a){"use strict";var i=a("0db7"),n=a.n(i);n.a},"3e6c":function(t,e,a){"use strict";var i=a("12ec"),n=a.n(i);n.a},a90c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-item-card",on:{click:function(e){return t.$emit("VideoItemCardClick",t.item)}}},[a("div",{staticClass:"img"},[a("van-image",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.data.cover.detail,expression:"item.data.cover.detail"}],attrs:{src:t.item.data.cover.detail},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])})],1),a("div",{staticClass:"text"},[a("div",{staticClass:"author-icon"},[a("img",{attrs:{src:t.item.data.author.icon,alt:""}})]),a("div",{staticClass:"information"},[a("div",{staticClass:"title-name"},[t._v(t._s(t.item.data.title))]),a("div",{staticClass:"author-name"},[a("span",[t._v(t._s(t.item.data.author.name))]),a("span",{staticClass:"category"},[t._v("#"+t._s(t.item.data.category))])])]),a("div",{staticClass:"share"},[a("van-icon",{attrs:{name:"share"}})],1)])])},n=[],s={name:"videoitemcard",props:["item"],computed:{authorIcon:function(){return this.item.data}}},o=s,c=(a("2766"),a("2877")),r=Object(c["a"])(o,i,n,!1,null,"001c0598",null);e["a"]=r.exports},f410:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-name"},[t._v("每日开眼精选")]),a("div",{staticClass:"other",on:{click:function(e){return t.$router.push("/home/daily")}}},[t._v("查看往期")])]),t._l(t.RecommendVideosList,(function(e,i){return a("VideoItemCard",{key:i,attrs:{item:e},on:{VideoItemCardClick:function(e){return t.VideoItemCardClick(e)}}})}))],2)},n=[],s=a("a90c"),o={name:"recommend",data:function(){return{RecommendData:{}}},methods:{VideoItemCardClick:function(t){this.$router.push("/playingdetailpage"),this.$store.commit("setPlayingPageDate",t),this.$store.commit("setShowBottomBar",!1)}},computed:{RecommendVideos:function(){return this.RecommendData.issueList?this.RecommendData.issueList[0]:[]},RecommendVideosList:function(){var t=[];for(var e in this.RecommendVideos.itemList)"video"==this.RecommendVideos.itemList[e].type&&t.push(this.RecommendVideos.itemList[e]);return t}},created:function(){var t=this;this.RecommendData=this.$store.state.RecommendedToday,this.axios.get("https://api.kele8.cn/agent/http://baobab.kaiyanapp.com/api/v2/feed").then((function(e){t.RecommendData=e.data,t.$store.commit("setRecommendedToday",e.data)})).catch((function(e){e&&t.axios.get("/api/v2/feed").then((function(e){t.RecommendData=e.data,t.$store.commit("setRecommendedToday",e.data)}))}))},components:{VideoItemCard:s["a"]}},c=o,r=(a("3e6c"),a("2877")),d=Object(r["a"])(c,i,n,!1,null,"055d19aa",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5c2b9512.a1779b7d.js.map