(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0149":function(t,e,s){"use strict";var i=s("ff64"),a=s.n(i);a.a},"057f":function(t,e,s){var i=s("fc6a"),a=s("241c").f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==n.call(t)?c(t):a(i(t))}},2179:function(t,e,s){},"2d3b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"top"},[s("div",{staticClass:"go-back",on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-arrow-left"})]),s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.text,expression:"text",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"单曲/歌手/专辑"},domProps:{value:t.text},on:{keydown:t.keydown,input:function(e){e.target.composing||(t.text=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.text,expression:"text"}],staticClass:"close",on:{click:t.clearInput}},[s("i",{staticClass:"fa fa-times"})])]),t._m(0)]),t.isShowResult?s("div",{staticClass:"result"},[s("SearchResult",{attrs:{Result:t.SearchResult,Recommend:t.Recommend},on:{playSearch:function(e){return t.$emit("playSearch",e)}}})],1):[t.text?s("Suggents",{attrs:{suggent:t.suggent},on:{searchSuggents:function(e){return t.searchSuggent(e)}}}):s("SearchHot",{attrs:{suggent:t.suggent,searchHots:t.searchHots},on:{searchHot:function(e){return t.searchSuggent(e)}}})]],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-user"})])}],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-hot"},[s("ul",{staticClass:"hot-list"},t._l(t.searchHots,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.$emit("searchHot",e.first)}}},[t._v(t._s(e.first))])})),0)])},r=[],c={name:"SearchHot",props:["text","searchHots","suggent"]},o=c,l=(s("0149"),s("2877")),u=Object(l["a"])(o,n,r,!1,null,null,null),f=u.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"suggents"},[s("ul",{staticClass:"suggents-list"},t._l(t.suggent,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.$emit("searchSuggents",e.keyword)}}},[s("i",{staticClass:"fa fa-search"}),s("span",[t._v(t._s(e.keyword))])])})),0)])},h=[],m={name:"Suggents",props:["suggent"]},v=m,p=(s("6688"),Object(l["a"])(v,d,h,!1,null,null,null)),b=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-result"},[t.Recommend&&t.Recommend!=={}?s("div",{staticClass:"recommend"},[s("h4",[t._v("你可能感兴趣")]),t.artist?s("div",{staticClass:"artist"},[s("div",{staticClass:"img",style:{backgroundImage:"url("+t.ExactSrc+")"}}),s("div",{staticClass:"artister"},[s("div",{staticClass:"name"},[t._v(" 歌手： "),s("span",[t._v(t._s(t.ExactName))])]),t.artist?s("div",{staticClass:"other"},[s("span",{staticClass:"fans-size"},[t._v("粉丝："+t._s(t.ExactFansSize))]),s("span",{staticClass:"music-size"},[t._v("歌曲："+t._s(t.MusicSize))]),s("span",{staticClass:"album-size"},[t._v("专辑："+t._s(t.AlbumSize))])]):t._e()])]):t._e(),t.album?s("div",{staticClass:"album"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.albumUrl,alt:""}})]),s("div",{staticClass:"infor"},[s("p",[t._v("专辑："+t._s(t.albumName))]),s("p",[t._v(t._s(t.albumAthor))])])]):t._e()]):t._e(),s("ul",{staticClass:"search-result-list"},t._l(t.Result.songs,(function(e,i){return s("ResultItem",{key:i,attrs:{Song:e,isShowIcon:!0},on:{playSearch:function(e){return t.$emit("playSearch",e)}}})})),1)])},y=[],S=(s("b0c0"),s("b680"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"result-item",on:{click:function(e){return t.$emit("playSearch",t.Song)}}},[s("div",{staticClass:"information"},[s("p",{staticClass:"name"},[t._v(t._s(t.Song.name))]),s("p",{staticClass:"athor"},[t._v(t._s(t.artist))])]),t.isShowIcon?s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-play-circle",on:{click:function(e){return t.$emit("playSearch",t.Song)}}}),s("i",{staticClass:"fa fa-ellipsis-v"})]):t._e()])}),_=[],C={name:"ResultItem",props:["Song","isShowIcon"],computed:{artist:function(){var t="";return this.Song.artists.forEach((function(e){t+=e.name+" "})),t}}},w=C,x=(s("9b0d"),Object(l["a"])(w,S,_,!1,null,"72843d3c",null)),k=x.exports,$={name:"SearchResult",props:["Result","Recommend"],data:function(){return{artist:null,album:null}},watch:{Recommend:function(){this.artist=this.Recommend.artist,this.album=this.Recommend.album}},computed:{albumAthor:function(){var t="";return this.album&&this.album.forEach((function(e){t+=e.artists[0].name})),t},albumName:function(){var t="";return this.album&&this.album.forEach((function(e){t+=e.name})),t},albumUrl:function(){var t="";return this.album&&this.album.forEach((function(e){t+=e.picUrl})),t},AlbumSize:function(){var t="";return this.artist&&this.artist.forEach((function(e){t+=e.albumSize})),t},MusicSize:function(){var t="";return this.artist&&this.artist.forEach((function(e){t+=e.musicSize})),t},ExactName:function(){var t="";return this.artist&&this.artist.forEach((function(e){t+=e.name})),t},ExactSrc:function(){var t="";return this.artist&&this.artist.forEach((function(e){t+=e.picUrl})),t},ExactFansSize:function(){var t=0;return this.artist&&this.artist.forEach((function(e){t+=e.fansSize})),t=t>99999999?(t/1e8).toFixed(1)+"亿":t>9999?(t/1e4).toFixed(1)+"万":t,t}},components:{ResultItem:k}},E=$,O=(s("e4ef"),Object(l["a"])(E,g,y,!1,null,"36104151",null)),R=O.exports,j={name:"Search",data:function(){return{text:"",SearchResult:{},suggent:[],searchHots:[],isShowResult:!1,Recommend:null}},created:function(){var t=this;this.axios.get("https://music.kele8.cn/search/hot").then((function(e){t.searchHots=e.data.result.hots}))},watch:{text:function(t){var e=this;t?this.axios.get("http://music.kele8.cn/search/suggest",{params:{keywords:this.text,type:"mobile"}}).then((function(t){e.suggent=t.data.result.allMatch})):this.isShowResult=!1}},methods:{searchSuggent:function(t){var e=this;this.axios.get("http://music.kele8.cn/search?keywords=".concat(t),{params:{limit:20}}).then((function(t){e.SearchResult=t.data.result})),this.text=t,this.isShowResult=!0},keydown:function(t){var e=this;t&&13==t.keyCode&&(this.axios.get("http://music.kele8.cn/search?keywords=".concat(this.text),{params:{limit:20}}).then((function(t){e.SearchResult=t.data.result})),this.axios.get("http://music.kele8.cn/search/multimatch",{params:{keywords:this.text}}).then((function(t){e.Recommend=t.data.result})),this.isShowResult=!0)},clearInput:function(){this.text=""}},components:{SearchHot:f,Suggents:b,SearchResult:R}},I=j,L=(s("a5bb"),Object(l["a"])(I,i,a,!1,null,"4bc3bc1a",null));e["default"]=L.exports},3303:function(t,e,s){"use strict";var i=s("2179"),a=s.n(i);a.a},"36c4":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"square"},[s("div",{staticClass:"top"},[s("span",{on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-arrow-left"})]),s("div",{staticClass:"title"},[t._v("歌单广场")])]),t.isLoading?s("div",{staticClass:"loading"},[t._v(t._s(t.loadingText))]):s("ul",{staticClass:"list"},t._l(t.SquareData,(function(e,i){return s("SongListItem",{key:i,attrs:{item:e},on:{showSetails:function(e){return t.showSetails(e)}}})})),1)])},a=[],n=s("16a2"),r={name:"SongListSquare",data:function(){return{SquareData:null,loadingText:"加载中",isLoading:!1}},methods:{showSetails:function(t){this.$router.push({path:"playlist",query:{id:t}})}},created:function(){var t=this;this.isLoading=!0,this.axios.get("https://music.kele8.cn/personalized").then((function(e){t.SquareData=e.data.result,t.isLoading=!1}))},components:{SongListItem:n["a"]}},c=r,o=(s("639c"),s("2877")),l=Object(o["a"])(c,i,a,!1,null,"0d956a9a",null);e["default"]=l.exports},"39a1":function(t,e,s){"use strict";var i=s("95ef"),a=s.n(i);a.a},"639c":function(t,e,s){"use strict";var i=s("f2e3"),a=s.n(i);a.a},6688:function(t,e,s){"use strict";var i=s("b5b9"),a=s.n(i);a.a},"746f":function(t,e,s){var i=s("428f"),a=s("5135"),n=s("c032"),r=s("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||r(e,t,{value:n.f(t)})}},"7ba3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recentList"},[t.ShowFull?t._e():s("div",{staticClass:"top"},[s("span",{on:{click:function(e){return t.$router.push("/mine")}}},[s("i",{staticClass:"fa fa-arrow-left"})]),s("div",{staticClass:"title"},[t._v("最近播放")])]),s("ul",{staticClass:"list"},t._l(t.recentList,(function(e,i){return s("SongItem",{key:i,attrs:{Song:e,index:i,isShowIcon:!0},on:{toPlay:function(e){return t.$emit("toPlay",e)},deleteSong:function(e){return t.$emit("deleteSong",e)}}})})),1)])},a=[],n=(s("fb6a0"),s("cf7e")),r={name:"recentList",data:function(){return{recentList:[]}},computed:{ShowFull:function(){return this.$parent.ShowFull}},created:function(){this.recentList=this.$parent.PlayingArr.slice(0,20)},components:{SongItem:n["a"]}},c=r,o=(s("3303"),s("2877")),l=Object(o["a"])(c,i,a,!1,null,"69760a58",null);e["default"]=l.exports},"95ef":function(t,e,s){},"9b0d":function(t,e,s){"use strict";var i=s("e7ba"),a=s.n(i);a.a},a4d3:function(t,e,s){"use strict";var i=s("23e7"),a=s("da84"),n=s("d066"),r=s("c430"),c=s("83ab"),o=s("4930"),l=s("fdbf"),u=s("d039"),f=s("5135"),d=s("e8b5"),h=s("861d"),m=s("825a"),v=s("7b0b"),p=s("fc6a"),b=s("c04e"),g=s("5c6c"),y=s("7c73"),S=s("df75"),_=s("241c"),C=s("057f"),w=s("7418"),x=s("06cf"),k=s("9bf2"),$=s("d1e7"),E=s("9112"),O=s("6eeb"),R=s("5692"),j=s("f772"),I=s("d012"),L=s("90e3"),D=s("b622"),T=s("c032"),P=s("746f"),A=s("d44e"),F=s("69f3"),q=s("b727").forEach,z=j("hidden"),H="Symbol",N="prototype",U=D("toPrimitive"),J=F.set,M=F.getterFor(H),Q=Object[N],W=a.Symbol,B=n("JSON","stringify"),G=x.f,K=k.f,V=C.f,X=$.f,Y=R("symbols"),Z=R("op-symbols"),tt=R("string-to-symbol-registry"),et=R("symbol-to-string-registry"),st=R("wks"),it=a.QObject,at=!it||!it[N]||!it[N].findChild,nt=c&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,s){var i=G(Q,e);i&&delete Q[e],K(t,e,s),i&&t!==Q&&K(Q,e,i)}:K,rt=function(t,e){var s=Y[t]=y(W[N]);return J(s,{type:H,tag:t,description:e}),c||(s.description=e),s},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ot=function(t,e,s){t===Q&&ot(Z,e,s),m(t);var i=b(e,!0);return m(s),f(Y,i)?(s.enumerable?(f(t,z)&&t[z][i]&&(t[z][i]=!1),s=y(s,{enumerable:g(0,!1)})):(f(t,z)||K(t,z,g(1,{})),t[z][i]=!0),nt(t,i,s)):K(t,i,s)},lt=function(t,e){m(t);var s=p(e),i=S(s).concat(mt(s));return q(i,(function(e){c&&!ft.call(s,e)||ot(t,e,s[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=b(t,!0),s=X.call(this,e);return!(this===Q&&f(Y,e)&&!f(Z,e))&&(!(s||!f(this,e)||!f(Y,e)||f(this,z)&&this[z][e])||s)},dt=function(t,e){var s=p(t),i=b(e,!0);if(s!==Q||!f(Y,i)||f(Z,i)){var a=G(s,i);return!a||!f(Y,i)||f(s,z)&&s[z][i]||(a.enumerable=!0),a}},ht=function(t){var e=V(p(t)),s=[];return q(e,(function(t){f(Y,t)||f(I,t)||s.push(t)})),s},mt=function(t){var e=t===Q,s=V(e?Z:p(t)),i=[];return q(s,(function(t){!f(Y,t)||e&&!f(Q,t)||i.push(Y[t])})),i};if(o||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),s=function(t){this===Q&&s.call(Z,t),f(this,z)&&f(this[z],e)&&(this[z][e]=!1),nt(this,e,g(1,t))};return c&&at&&nt(Q,e,{configurable:!0,set:s}),rt(e,t)},O(W[N],"toString",(function(){return M(this).tag})),O(W,"withoutSetter",(function(t){return rt(L(t),t)})),$.f=ft,k.f=ot,x.f=dt,_.f=C.f=ht,w.f=mt,T.f=function(t){return rt(D(t),t)},c&&(K(W[N],"description",{configurable:!0,get:function(){return M(this).description}}),r||O(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:W}),q(S(st),(function(t){P(t)})),i({target:H,stat:!0,forced:!o},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var s=W(e);return tt[e]=s,et[s]=e,s},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!o,sham:!c},{create:ut,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:ht,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),B){var vt=!o||u((function(){var t=W();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,s){var i,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(i=e,(h(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ct(e))return e}),a[1]=e,B.apply(null,a)}})}W[N][U]||E(W[N],U,W[N].valueOf),A(W,H),I[z]=!0},a5bb:function(t,e,s){"use strict";var i=s("cb3a"),a=s.n(i);a.a},aa63:function(t,e,s){"use strict";var i=s("b715"),a=s.n(i);a.a},b29d:function(t,e,s){},b5b9:function(t,e,s){},b715:function(t,e,s){},be66:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"album-square"},[s("div",{staticClass:"top"},[s("span",{on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-arrow-left"})]),s("div",{staticClass:"title"},[t._v("更多新碟")])]),t.isLoading?s("div",{staticClass:"loading"},[t._v(t._s(t.loadingText))]):s("ul",{staticClass:"album-list"},t._l(t.albumArr,(function(t,e){return s("AlbumItem",{key:e,attrs:{Album:t}})})),1)])},a=[],n=s("82bc"),r={name:"albumSquare",data:function(){return{albumArr:null,loadingText:"加载中",isLoading:!1}},created:function(){var t=this;this.isLoading=!0,this.axios.get("https://music.kele8.cn/top/album").then((function(e){t.albumArr=e.data.albums,t.isLoading=!1}))},components:{AlbumItem:n["a"]}},c=r,o=(s("aa63"),s("2877")),l=Object(o["a"])(c,i,a,!1,null,"d7d32512",null);e["default"]=l.exports},c032:function(t,e,s){var i=s("b622");e.f=i},cb3a:function(t,e,s){},e01a:function(t,e,s){"use strict";var i=s("23e7"),a=s("83ab"),n=s("da84"),r=s("5135"),c=s("861d"),o=s("9bf2").f,l=s("e893"),u=n.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var h=d.prototype=u.prototype;h.constructor=d;var m=h.toString,v="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;o(h,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(r(f,t))return"";var s=v?e.slice(7,-1):e.replace(p,"$1");return""===s?void 0:s}}),i({global:!0,forced:!0},{Symbol:d})}},e4ef:function(t,e,s){"use strict";var i=s("fb6a"),a=s.n(i);a.a},e7ba:function(t,e,s){},e98a:function(t,e,s){"use strict";var i=s("b29d"),a=s.n(i);a.a},f2e3:function(t,e,s){},fb6a:function(t,e,s){},fb6a0:function(t,e,s){"use strict";var i=s("23e7"),a=s("861d"),n=s("e8b5"),r=s("23cb"),c=s("50c4"),o=s("fc6a"),l=s("8418"),u=s("1dde"),f=s("b622"),d=f("species"),h=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var s,i,u,f=o(this),v=c(f.length),p=r(t,v),b=r(void 0===e?v:e,v);if(n(f)&&(s=f.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?a(s)&&(s=s[d],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return h.call(f,p,b);for(i=new(void 0===s?Array:s)(m(b-p,0)),u=0;p<b;p++,u++)p in f&&l(i,u,f[p]);return i.length=u,i}})},fddd:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play-list"},[s("playListTitle",{attrs:{detailTitle:t.detailTitle}}),s("div",{staticClass:"list-content"},[s("div",{staticClass:"title"},[t._m(0),s("div",{staticClass:"collection"},[s("span",[s("i",{staticClass:"fa fa-plus"}),t._v("收藏("+t._s(t.subscribedCount)+")")])])]),s("ul",{staticClass:"list"},t._l(t.listDetails.tracks,(function(e,i){return s("SongItem",{key:i,attrs:{Song:e,index:i,isShowIcon:!0},on:{toPlay:function(e){return t.$emit("toPlay",e)}}})})),1)])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-play"}),t._v("播放全部")])}],n=(s("a4d3"),s("e01a"),s("b0c0"),s("b680"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play-list-title",style:{background:t.url}},[s("div",{staticClass:"cover"},[s("ul",{staticClass:"top"},[s("li",{staticClass:"go-back",on:{click:function(e){return t.$router.go(-1)}}},[s("i",{staticClass:"fa fa-arrow-left"})]),t._m(0),t._m(1)]),s("div",{staticClass:"name"},[s("p",{staticClass:"name-title"},[t._v(t._s(t.detailTitle.name))]),t.detailTitle.updateFrequency?s("span",{staticClass:"tag"},[t._v(t._s(t.detailTitle.updateFrequency))]):t._e()]),s("div",{staticClass:"discrible"},[t._v(t._s(t.detailTitle.description))]),s("ul",{staticClass:"interactive-bar"},[s("li",[s("i",{staticClass:"fa fa-comments"}),s("p",[t._v(t._s(t.detailTitle.commentCount))])]),s("li",[s("i",{staticClass:"fa fa-share-alt"}),s("p",[t._v(t._s(t.detailTitle.shareCount))])]),t._m(2),t._m(3)])])])}),r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"title"},[t._v("歌单详情")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"search"},[s("i",{staticClass:"fa fa-search"}),s("i",{staticClass:"fa fa-ellipsis-v"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("i",{staticClass:"fa fa-download"}),s("p",[t._v("下载")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("i",{staticClass:"fa fa-check-square"}),s("p",[t._v("多选")])])}],c={name:"playListTitle",props:["detailTitle"],methods:{},computed:{url:function(){return"url("+this.detailTitle.bgUrl+") no-repeat center"}}},o=c,l=(s("39a1"),s("2877")),u=Object(l["a"])(o,n,r,!1,null,"646ab31a",null),f=u.exports,d=s("cf7e"),h={name:"playlist",data:function(){return{listDetails:[]}},computed:{detailTitle:function(){return{name:this.listDetails.name,bgUrl:this.listDetails.backgroundCoverUrl?this.listDetails.backgroundCoverUrl:this.listDetails.coverImgUrl,updateFrequency:this.listDetails.updateFrequency,description:this.listDetails.description,commentCount:this.listDetails.commentCount,shareCount:this.listDetails.shareCount}},subscribedCount:function(){return this.listDetails.subscribedCount>99999999?(this.listDetails.subscribedCount/1e8).toFixed(1)+"亿":this.listDetails.subscribedCount>9999?(this.listDetails.subscribedCount/1e4).toFixed(1)+"万":this.listDetails.subscribedCount}},methods:{a:function(t){window.console.log(this.$parent),this.$emit("xxx",t)},getPlayList:function(t){var e=this;this.axios.get("http://music.kele8.cn/playlist/detail",{params:{id:t}}).then((function(t){e.listDetails=t.data.playlist}))}},created:function(){window.console.log("创建")},beforeRouteEnter:function(t,e,s){s((function(e){e.getPlayList(t.query.id)}))},components:{playListTitle:f,SongItem:d["a"]}},m=h,v=(s("e98a"),Object(l["a"])(m,i,a,!1,null,"5b802a3a",null));e["default"]=v.exports},ff64:function(t,e,s){}}]);
//# sourceMappingURL=about.bd73dea9.js.map