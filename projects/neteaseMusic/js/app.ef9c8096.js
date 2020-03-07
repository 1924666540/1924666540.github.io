(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,n=1;n<i.length;n++){var o=i[n];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},n={app:0},s={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f986506b"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={about:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"7e53b61f"}[t]+".css",s=l.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){c=h[o],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete n[t],f.parentNode.removeChild(f),i(r)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var h=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var i=s[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",h.name="ChunkLoadError",h.type=a,h.request=n,i[1](h)}s[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var f=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0f04":function(t,e,i){"use strict";var a=i("5af7"),n=i.n(a);n.a},1064:function(t,e,i){"use strict";var a=i("8eae"),n=i.n(a);n.a},"11a5":function(t,e,i){},"16a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"song-list-item",on:{click:function(e){return t.$emit("showSetails",t.item.id)}}},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.item.picUrl,alt:""}}),i("div",{staticClass:"play-count"},[i("i",{staticClass:"fa fa-headphones"}),t._v(" "+t._s(t.playCount)+" ")])]),i("div",{staticClass:"title"},[t._v(t._s(t.item.name))])])},n=[],s=(i("b680"),{name:"conglistitem",props:["item"],methods:{setCount:function(){return this.item.playCount>99999999?(this.item.playCount/1e8).toFixed(1)+"亿":this.item.playCount>9999?(this.item.playCount/1e4).toFixed(1)+"万":this.item.playCount}},computed:{playCount:function(){return this.setCount()}}}),r=s,o=(i("3a58"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"3494dadc",null);e["a"]=l.exports},2395:function(t,e,i){},"29e1":function(t,e,i){},"34f6":function(t,e,i){"use strict";var a=i("ffad"),n=i.n(a);n.a},"3a58":function(t,e,i){"use strict";var a=i("746e"),n=i.n(a);n.a},"3e1e":function(t,e,i){"use strict";var a=i("29e1"),n=i.n(a);n.a},4563:function(t,e,i){},"4a5c":function(t,e,i){"use strict";var a=i("976f"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=i("bc3a"),s=i.n(n),r=i("a7fe"),o=i.n(r),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view",{attrs:{ShowFull:t.ShowFull},on:{toPlay:function(e){return t.setUrl(e)},playSearch:function(e){return t.playSearch(e)}}}),i("PlayingList",{directives:[{name:"show",rawName:"v-show",value:t.isShowList,expression:"isShowList"}],attrs:{PlayingArr:t.PlayingArr},on:{closeList:function(e){t.isShowList=!1},toPlay:function(e){return t.setUrl(e)},deleteSong:function(e){return t.deleteSong(e)}}}),i("div",{staticClass:"player"},[i("playerBar",{attrs:{PlayingArr:t.PlayingArr,SongInformation:t.SongInformation,isPlay:t.isPlay},on:{isShowFull:function(e){return t.isShowFull(e)},changeSong:function(e){return t.changeSong(e)},playBtnClick:function(e){return t.playCheck(e)},showList:function(e){t.isShowList=!0},checkedSong:function(e){return t.checkedSong(e)}}})],1)],1)},c=[],u=(i("a434"),i("b0c0"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player-bar"},[i("ul",{staticClass:"bar",on:{click:function(e){t.ShowFull=!0}}},[i("li",{staticClass:"pic"},[i("div",{staticClass:"img",class:{pause:!t.isPlay}},[i("div",{staticClass:"bg",style:{backgroundImage:"url("+t.exactPicUrl+")"}})])]),i("li",{staticClass:"information"},[i("p",{staticClass:"name"},[t._v(t._s(t.exactName))]),i("p",{staticClass:"athor"},[t._v(t._s(t.exactAthor))])]),i("li",{staticClass:"control"},[i("vProgress",{staticClass:"progress",attrs:{Playing:t.isPlay,percentage:t.ratio?t.ratio:0,Width:30,strokeWidth:4,type:"circle",status:"exception"},on:{playBtnClick:function(e){return t.$emit("playBtnClick",t.$refs.audio.src)}}})],1),i("li",{staticClass:"menu"},[i("i",{staticClass:"fa fa-list-ul",on:{click:function(e){return e.stopPropagation(),t.$emit("showList")}}})])]),t.ShowFull?i("div",{staticClass:"fullscreen"},[i("div",{staticClass:"cover",style:{backgroundImage:"url("+t.exactPicUrl+")"}}),i("div",{staticClass:"content"},[i("ul",{staticClass:"title"},[i("li",{staticClass:"go-back"},[i("i",{staticClass:"fa fa-arrow-left",on:{click:function(e){t.ShowFull=!1}}})]),i("li",{staticClass:"song"},[i("p",[t._v(t._s(t.exactName))]),i("p",[t._v(t._s(t.exactAthor))])]),t._m(0)]),i("div",{staticClass:"cd",class:{pause:!t.isPlay}},[i("div",{staticClass:"bg",style:{backgroundImage:"url("+t.exactPicUrl+")"}})]),i("div",{staticClass:"tou",class:{active:t.isPlay}},[i("img",{attrs:{src:"/cd_tou.png",alt:""}})]),i("div",{staticClass:"controls"},[i("div",{staticClass:"progre"},[i("div",{staticClass:"startTime"},[t._v(t._s(t.exactStartTime?t.exactStartTime:"00:00"))]),i("div",{staticClass:"line"},[i("vProgress",{attrs:{percentage:t.ratio?t.ratio:0,showText:!1,strokeWidth:3}})],1),i("div",{staticClass:"endTime"},[t._v(t._s(t.exactEndTime?t.exactEndTime:"00:00"))])]),i("ul",{staticClass:"control-btn"},[t._m(1),i("li",[i("i",{staticClass:"fa fa-step-backward",on:{click:function(e){return t.$emit("checkedSong","prev")}}})]),i("li",[i("div",{staticClass:"play-btn",on:{click:function(e){return e.stopPropagation(),t.$emit("playBtnClick",t.$refs.audio.src)}}},[t.isPlay?i("i",{staticClass:"fa fa-pause"}):i("i",{staticClass:"fa fa-play",on:{click:function(e){t.isPlay=!1}}})])]),i("li",[i("i",{staticClass:"fa fa-step-forward",on:{click:function(e){return t.$emit("checkedSong","next")}}})]),i("li",[i("i",{staticClass:"fa fa-bars",on:{click:function(e){return e.stopPropagation(),t.$emit("showList")}}})])])])])]):t._e(),i("audio",{ref:"audio",attrs:{src:t.exactUrl,autoplay:""}})])}),h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"icon"},[i("i",{staticClass:"fa fa-share-alt"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("i",{staticClass:"fa fa-retweet"})])}],f=(i("e25e"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"progress",class:[t.status?"is-"+t.status:"","progress-"+t.type],on:{click:function(e){return e.stopPropagation(),t.play(e)}}},["line"==t.type?i("div",{staticClass:"progress-bar"},[i("div",{staticClass:"progress-bar_outer",style:{height:t.strokeWidth+"px"}},[i("div",{staticClass:"progress-bar_inner",style:t.barStyle},[t.textInside&&t.showText?i("div",{staticClass:"progress-bar-innerText",style:{lineHeight:t.strokeWidth+"px"}},[t._v(t._s(t.percentage)+"%")]):t._e()])])]):i("div",{staticClass:"progress-circles",style:{width:t.Width+"px",height:t.Width+"px"}},[i("svg",{attrs:{viewBox:"0 0 100 100"}},[i("path",{attrs:{d:t.trackPath,fill:"none","stroke-width":t.relativeStrokeWidth,stroke:"#666"}}),i("path",{style:t.circlePathStyle,attrs:{d:t.trackPath,fill:"none","stroke-width":t.relativeStrokeWidth,stroke:t.strokeFill,"stroke-linecap":"round"}})])]),0==t.textInside&&t.showText?i("div",{staticClass:"progress-text",style:{fontSize:t.progressTextSize+"px"}},[t.Playing?i("i",{staticClass:"icon fa fa-pause"}):i("i",{staticClass:"icon fa fa-play"})]):t._e()])}),m=[],d=(i("99af"),i("caad"),i("a9e3"),{name:"Progress",props:{Playing:{type:Boolean,dafault:!1},Width:{type:Number,default:126},color:{type:String},showText:{type:Boolean,default:!0},textInside:{type:Boolean,dafault:!1},strokeWidth:{type:Number,default:6},percentage:{type:Number,required:!0,default:0,validator:function(t){return t>=0&&t<=100}},status:{type:String},type:{type:String,default:"line",validator:function(t){return["circle","line"].includes(t)}}},methods:{play:function(){this.$emit("playBtnClick")}},computed:{perimeter:function(){var t=50-this.relativeStrokeWidth/2;return 2*Math.PI*t},circlePathStyle:function(){var t=this.perimeter;return{strokeDasharray:"".concat(t,"px,").concat(t,"px"),strokeDashoffset:(1-this.percentage/100)*t+"px"}},relativeStrokeWidth:function(){return 50*this.strokeWidth/this.Width},trackPath:function(){var t=50-this.relativeStrokeWidth/2;return"\n      M 50 50\n      m 0 -".concat(t," \n      a ").concat(t," ").concat(t," 0 1 1 0 ").concat(2*t," \n      a ").concat(t," ").concat(t," 0 1 1 0 -").concat(2*t)},iconClass:function(){return"line"==this.type?"succes"==this.status?"icon-circle-check":"icon-circle-close":"succes"==this.status?"icon-check":"icon-close"},progressTextSize:function(){return 12+.4*this.strokeWidth},strokeFill:function(){var t;if(this.color)return this.color;switch(this.status){case"succes":t="#13ce66";break;case"exception":t="#ff4949";break;default:t="#20a0ff"}return t},barStyle:function(){return{width:this.percentage+"%",background:this.strokeFill}}}}),p=d,g=(i("34f6"),i("2877")),v=Object(g["a"])(p,f,m,!1,null,"1ab2b2ea",null),y=v.exports,b={name:"PlayerBar",props:["SongInformation","isPlay","PlayingArr"],data:function(){return{src:"http://img3.imgtn.bdimg.com/it/u=3119465150,2337696659&fm=26&gp=0.jpg",AudioSrc:null,ratio:0,name:null,athor:null,ShowFull:!1,startTime:null,endTime:null,playingitem:{}}},watch:{ShowFull:function(){this.$emit("isShowFull",this.ShowFull)},SongInformation:function(){var t=this;this.$refs.audio.pause(),this.AudioSrc=this.exactUrl,this.playingitem={id:this.SongInformation.audioId,src:this.exactUrl?this.exactUrl:"http://img3.imgtn.bdimg.com/it/u=3119465150,2337696659&fm=26&gp=0.jpg",picUrl:this.SongInformation.picUrl,name:this.SongInformation.audioName,athor:this.SongInformation.athorArr},localStorage.setItem("playingitem",JSON.stringify(this.playingitem)),this.$refs.audio.oncanplay=function(){t.$refs.audio.play(),t.dosomething()}},isPlay:function(){this.isPlay?(this.$refs.audio.play(),this.dosomething()):this.$refs.audio.pause()}},components:{vProgress:y},created:function(){var t=JSON.parse(localStorage.getItem("playingitem"));t&&(this.AudioSrc=t.src,this.src=t.picUrl,this.name=t.name,this.athor=t.athor,this.playingitem=t)},mounted:function(){var t=this;this.$refs.audio.pause(),this.$refs.audio.onended=function(){t.$emit("changeSong",t.playingitem)}},methods:{closeFull:function(){this.isShowFull=!1},dosomething:function(){var t=this;setInterval((function(){t.$refs.audio.currentTime&&t.$refs.audio.duration&&(t.ratio=t.$refs.audio.currentTime/t.$refs.audio.duration*100,t.startTime=t.$refs.audio.currentTime,t.endTime=t.$refs.audio.duration)}),500)}},computed:{exactStartTime:function(){var t=parseInt(this.startTime/60)<10?"0"+parseInt(this.startTime/60):parseInt(this.startTime/60),e=parseInt(this.startTime%60)<10?"0"+parseInt(this.startTime%60):parseInt(this.startTime%60);return t+":"+e},exactEndTime:function(){var t=parseInt(this.endTime/60)<10?"0"+parseInt(this.endTime/60):parseInt(this.endTime/60),e=parseInt(this.endTime%60)<10?"0"+parseInt(this.endTime%60):parseInt(this.endTime%60);return t+":"+e},exactPicUrl:function(){return this.SongInformation.picUrl?this.SongInformation.picUrl:this.src},exactName:function(){return this.SongInformation.audioName?this.SongInformation.audioName:this.name},exactAthor:function(){return this.SongInformation.athorArr?this.SongInformation.athorArr:this.athor},exactUrl:function(){return this.SongInformation.audioId?"https://music.163.com/song/media/outer/url?id="+this.SongInformation.audioId+".mp3":this.AudioSrc}}},S=b,C=(i("80b2"),Object(g["a"])(S,u,h,!1,null,null,null)),_=C.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playing-list",on:{click:function(e){return t.$emit("closeList")}}},[i("div",{staticClass:"top"},[i("ul",{staticClass:"title"},[i("li",[t._v("共"+t._s(t.PlayingArr.length)+"首")]),i("li")]),i("ul",{staticClass:"list"},t._l(t.PlayingArr,(function(e,a){return i("SongItem",{key:a,attrs:{Song:e,index:a,isShowIcon:!1},on:{toPlay:function(e){return t.$emit("toPlay",e)},deleteSong:function(e){return t.$emit("deleteSong",e)}}})})),1)])])},x=[],k=i("cf7e"),I={name:"PlayingList",props:["PlayingArr"],components:{SongItem:k["a"]}},w=I,A=(i("a2bf"),Object(g["a"])(w,P,x,!1,null,"f14bd686",null)),$=A.exports,T={data:function(){return{Url:null,picUrl:null,audioName:null,athorArr:[],isPlay:!1,isShowList:!1,PlayingArr:[],ShowFull:!1}},created:function(){this.PlayingArr=JSON.parse(localStorage.getItem("playingList"))?JSON.parse(localStorage.getItem("playingList")):[]},methods:{isShowFull:function(t){this.ShowFull=t},checkedSong:function(t){var e=0,i=JSON.parse(localStorage.getItem("playingitem"));this.PlayingArr.forEach((function(t,a){t.id==i.id&&(e=a)})),"prev"==t?e=e-1<0?this.PlayingArr.length-1:e-1:"next"==t&&(e=e+1>=this.PlayingArr.length?0:e+1),this.cutSong(e)},deleteSong:function(t){var e=JSON.parse(localStorage.getItem("playingitem"));if(this.PlayingArr[t].id==e.id){this.PlayingArr.splice(t,1);var i="";this.PlayingArr[t].ar.forEach((function(t){i+=t.name})),localStorage.setItem("playingitem",JSON.stringify({id:this.PlayingArr[t].id,src:"https://music.163.com/song/media/outer/url?id=".concat(this.PlayingArr[t].id,".mp3"),picUrl:this.PlayingArr[t].al.picUrl,name:this.PlayingArr[t].name,athor:i}))}else this.PlayingArr.splice(t,1);localStorage.setItem("playingList",JSON.stringify(this.PlayingArr))},playSearch:function(t){var e=!1;this.audioName=t.name,this.Url=t.id,this.picUrl=t.album.artist.img1v1Url;for(var i=[],a=0;a<t.artists.length;a++){var n={name:t.artists[a].name};i.push(n)}this.athorArr=i,this.isPlay=!0;for(var s={name:t.name,id:t.id,ar:t.artists,al:{picUrl:t.album.artist.img1v1Url}},r=0;r<this.PlayingArr.length;r++)this.PlayingArr[r].id==s.id&&(e=!0);e||(this.PlayingArr.unshift(s),localStorage.setItem("playingList",JSON.stringify(this.PlayingArr)))},playCheck:function(t){t&&(this.isPlay=!this.isPlay)},setUrl:function(t){var e=!1;this.Url=t.id,this.picUrl=t.al.picUrl,this.audioName=t.name,this.athorArr=t.ar,this.isPlay=!0;for(var i=t,a=0;a<this.PlayingArr.length;a++)this.PlayingArr[a].id==i.id&&(e=!0);e||(this.PlayingArr.unshift(i),localStorage.setItem("playingList",JSON.stringify(this.PlayingArr)))},changeSong:function(t){var e=0;this.PlayingArr.forEach((function(i,a){t.id==i.id&&(e=a)})),e=e+1>=this.PlayingArr.length?0:e+1,this.cutSong(e)},cutSong:function(t){this.picUrl=this.PlayingArr[t].al.picUrl,this.Url=this.PlayingArr[t].id,this.audioName=this.PlayingArr[t].name,this.athorArr=this.PlayingArr[t].ar}},computed:{SongInformation:function(){return{picUrl:this.picUrl,audioName:this.audioName,athorArr:this.athor,audioId:this.Url}},athor:function(){for(var t="",e=0;e<this.athorArr.length;e++)t+=this.athorArr[e].name+" ";return t}},components:{PlayerBar:_,PlayingList:$}},U=T,O=(i("7c55"),Object(g["a"])(U,l,c,!1,null,null,null)),E=O.exports,L=(i("d3b7"),i("8c4f")),N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.showNav?i("ul",{staticClass:"nav-top"},[t._m(0),i("li",[i("router-link",{attrs:{to:"/mine"}},[t._v("我的")])],1),i("li",[i("router-link",{attrs:{to:"/find"}},[t._v("发现")])],1),i("li",[i("router-link",{attrs:{to:"/cloud"}},[t._v("云村")])],1),i("li",[i("i",{staticClass:"fa fa-search",on:{click:t.toSearch}})])]):t._e(),i("keep-alive",[i("router-view")],1)],1)},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("i",{staticClass:"fa fa-bars"})])}],F={name:"home",props:["ShowFull"],computed:{showNav:function(){return!this.ShowFull}},methods:{toSearch:function(){this.$router.push({path:"search"})}},created:function(){this.$router.push({path:"/find"}),this.$router.red}},B=F,W=(i("6d6f"),Object(g["a"])(B,N,j,!1,null,"01995446",null)),J=W.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"personal"},[t._v("sss")])},D=[],M={name:"personal"},H=M,z=Object(g["a"])(H,q,D,!1,null,null,null),R=z.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("ul",{staticClass:"list"},[t._m(0),i("li",[t._m(1),i("div",{staticClass:"title",on:{click:t.RecentList}},[t._v(" 最近播放 "),i("span",[t._v("("+t._s(t.LatelyPlay)+")")])])]),t._m(2),t._m(3),t._m(4)])])},G=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-music"})]),i("div",{staticClass:"title"},[t._v(" 本地音乐 "),i("span",[t._v("(0)")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-play-circle"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-download"})]),i("div",{staticClass:"title"},[t._v(" 下载管理 "),i("span",[t._v("(0)")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-podcast"})]),i("div",{staticClass:"title"},[t._v(" 我的电台 "),i("span",[t._v("(0)")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-user-circle"})]),i("div",{staticClass:"title"},[t._v(" 我的收藏 "),i("span",[t._v("(0)")])])])}],Q={name:"mine",data:function(){return{PlayingArr:[]}},methods:{RecentList:function(){this.$router.push({path:"recentList"})}},computed:{LatelyPlay:function(){return this.PlayingArr.length>20?20:this.PlayingArr.length}},created:function(){var t=JSON.parse(localStorage.getItem("playingList"));this.PlayingArr=t||[]}},V=Q,X=(i("0f04"),Object(g["a"])(V,K,G,!1,null,"b6a48a08",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"find"},[i("Banner"),i("Title",{attrs:{name:"推荐歌单",tag:"歌单广场"},on:{goToMore:t.goToSquare}}),i("ul",{staticClass:"song-list"},t._l(t.SongList,(function(e,a){return i("SongListItem",{key:a,attrs:{item:e},on:{showSetails:function(e){return t.showSetails(e)}}})})),1),i("Title",{attrs:{name:"新碟",tag:"更多新碟"},on:{goToMore:t.albumSquare}}),i("ul",{staticClass:"album-list"},t._l(t.newDish,(function(t,e){return i("AlbumItem",{key:e,attrs:{Album:t}})})),1)],1)},tt=[],et=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[i("div",{staticClass:"title-name"},[t._v(t._s(t.name))]),i("div",{staticClass:"tag"},[i("span",{on:{click:function(e){return t.$emit("goToMore")}}},[t._v(t._s(t.tag))])])])])}),it=[],at={props:["name","tag"]},nt=at,st=(i("3e1e"),Object(g["a"])(nt,et,it,!1,null,"038e2032",null)),rt=st.exports,ot=i("16a2"),lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("ul",{staticClass:"banner-img"},t._l(t.bannerUrls,(function(e,a){return i("li",{key:a,staticClass:"img",class:{active:a==t.bannerIndex}},[i("img",{attrs:{src:e.picUrl,alt:""}})])})),0),i("ul",{staticClass:"bannder-index"},t._l(t.bannerUrls,(function(e,a){return i("li",{key:a},[i("i",{class:{active:a==t.bannerIndex}})])})),0)])},ct=[],ut={name:"Banner",data:function(){return{bannerUrls:[],bannerIndex:0}},methods:{setIndex:function(){var t=this;setInterval((function(){t.bannerIndex++,t.bannerIndex>=t.bannerUrls.length&&(t.bannerIndex=0)}),5e3)}},computed:{},created:function(){var t=this;this.axios.get("http://musicapi.leanapp.cn/banner?type=1").then((function(e){t.bannerUrls=e.data.banners})),this.setIndex()}},ht=ut,ft=(i("fdb5"),Object(g["a"])(ht,lt,ct,!1,null,"2aead59b",null)),mt=ft.exports,dt=i("82bc"),pt={name:"find",data:function(){return{SongList:[],newDish:[]}},methods:{albumSquare:function(){this.$router.push({path:"albumSquare"})},goToSquare:function(){this.$router.push({path:"songlistsquare"})},showSetails:function(t){this.$router.push({path:"playlist",query:{id:t}})}},created:function(){var t=this,e=JSON.parse(localStorage.getItem("cloudData"));e&&e.find.time+6e4>Date.now()?this.SongList=e.find.data:this.axios.get("https://music.kele8.cn/personalized?limit=6").then((function(e){t.SongList=e.data.result;var i={find:{data:e.data.result,time:Date.now()}};localStorage.setItem("cloudData",JSON.stringify(i))})),this.axios.get("https://music.kele8.cn/top/album?offset=0&limit=3").then((function(e){t.newDish=e.data.albums}))},components:{Title:rt,SongListItem:ot["a"],Banner:mt,AlbumItem:dt["a"]}},gt=pt,vt=(i("f61b"),Object(g["a"])(gt,Z,tt,!1,null,"62bd0e54",null)),yt=vt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cloud"},[t.HotCommentArr?[i("ul",{staticClass:"list"},t._l(t.HotCommentArr,(function(t,e){return i("CommentItem",{key:e,attrs:{item:t}})})),1),i("div",{staticClass:"bottom"},[t._v("到底咯~~~")])]:i("div",{staticClass:"loading"},[t._v("加载中")])],2)},St=[],Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"comment-item"},[i("div",{staticClass:"border"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.item.simpleResourceInfo.songCoverUrl,alt:""}})]),i("div",{staticClass:"content"},[i("p",[t._v(t._s(t.item.content))]),i("div",{staticClass:"user"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:t.item.simpleUserInfo.avatar,alt:""}})]),i("div",{staticClass:"nick-name"},[t._v(t._s(t.item.simpleUserInfo.nickname))])])])])])},_t=[],Pt={name:"CommentItem",props:["item"]},xt=Pt,kt=(i("4a5c"),Object(g["a"])(xt,Ct,_t,!1,null,"5b25254f",null)),It=kt.exports,wt={name:"cloud",data:function(){return{HotCommentArr:null}},created:function(){var t=this;this.axios.get("http://music.kele8.cn/comment/hotwall/list").then((function(e){t.HotCommentArr=e.data.data}))},components:{CommentItem:It}},At=wt,$t=(i("f070"),Object(g["a"])(At,bt,St,!1,null,"83a0690c",null)),Tt=$t.exports,Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"videos"},[t._v("videos")])},Ot=[],Et={name:"diveos"},Lt=Et,Nt=Object(g["a"])(Lt,Ut,Ot,!1,null,null,null),jt=Nt.exports;a["a"].use(L["a"]);var Ft=[{path:"/",name:"name",component:J,children:[{path:"personal",name:"personal",component:R},{path:"/mine",name:"mine",component:Y},{path:"find",name:"find",component:yt},{path:"cloud",name:"cloud",component:Tt},{path:"videos",name:"dideos",component:jt}]},{path:"/search",name:"search",component:function(){return i.e("about").then(i.bind(null,"2d3b"))}},{path:"/playlist",name:"playlist",component:function(){return i.e("about").then(i.bind(null,"fddd"))}},{path:"/songlistsquare",name:"SongListSquare",component:function(){return i.e("about").then(i.bind(null,"36c4"))}},{path:"/albumSquare",name:"albumSquare",component:function(){return i.e("about").then(i.bind(null,"be66"))}},{path:"/recentList",name:"recentList",component:function(){return i.e("about").then(i.bind(null,"7ba3"))}}],Bt=new L["a"]({routes:Ft}),Wt=Bt,Jt=L["a"].prototype.push;L["a"].prototype.push=function(t){return Jt.call(this,t).catch((function(t){return t}))},a["a"].use(o.a,s.a),a["a"].config.productionTip=!1,new a["a"]({router:Wt,render:function(t){return t(E)}}).$mount("#app")},"5af7":function(t,e,i){},"67ee":function(t,e,i){},"6d6f":function(t,e,i){"use strict";var a=i("4563"),n=i.n(a);n.a},"71f9":function(t,e,i){},"746e":function(t,e,i){},"7c55":function(t,e,i){"use strict";var a=i("2395"),n=i.n(a);n.a},"80b2":function(t,e,i){"use strict";var a=i("67ee"),n=i.n(a);n.a},"82bc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"album"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.Album.picUrl,alt:""}})]),i("div",{staticClass:"title"},[i("p",[t._v(t._s(t.Album.name))]),i("p",[t._v(t._s(t.Album.artists[0].name))])])])},n=[],s={name:"AlbumItem",props:["Album"]},r=s,o=(i("b078"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"d8db720a",null);e["a"]=l.exports},"8eae":function(t,e,i){},"976f":function(t,e,i){},a2bf:function(t,e,i){"use strict";var a=i("71f9"),n=i.n(a);n.a},af9b:function(t,e,i){},b078:function(t,e,i){"use strict";var a=i("d237"),n=i.n(a);n.a},cf7e:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"song-item",on:{click:function(e){return t.$emit("toPlay",t.Song)}}},[t.isShowIcon?i("span",{staticClass:"num"},[t._v(t._s(t.index+1))]):t._e(),i("div",{staticClass:"information"},[i("p",{staticClass:"name"},[t._v(t._s(t.Song.name))]),i("p",{staticClass:"athor"},[t._v(t._s(t.athor))])]),t.isShowIcon?i("div",{staticClass:"icon"},[i("i",{staticClass:"fa fa-play-circle",on:{click:function(e){return t.$emit("toPlay",t.Song)}}}),i("i",{staticClass:"fa fa-ellipsis-v"})]):i("div",{staticClass:"del"},[i("i",{staticClass:"fa fa-trash",on:{click:function(e){return e.stopPropagation(),t.$emit("deleteSong",t.index)}}})])])},n=[],s=(i("b0c0"),{name:"SongItem",props:["Song","index","isShowIcon"],computed:{athor:function(){for(var t="",e=0;e<this.Song.ar.length;e++)t+=this.Song.ar[e].name+" ";return t}}}),r=s,o=(i("1064"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"76e5af10",null);e["a"]=l.exports},d237:function(t,e,i){},e86a:function(t,e,i){},f070:function(t,e,i){"use strict";var a=i("e86a"),n=i.n(a);n.a},f61b:function(t,e,i){"use strict";var a=i("11a5"),n=i.n(a);n.a},fdb5:function(t,e,i){"use strict";var a=i("af9b"),n=i.n(a);n.a},ffad:function(t,e,i){}});
//# sourceMappingURL=app.ef9c8096.js.map