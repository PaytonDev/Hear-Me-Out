(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},119:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},148:function(e,t){},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(12),s=n.n(c),i=(n(100),n(11)),o=n(207),l=n(19),u=n.n(l),j=function(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),o=Object(i.a)(s,1)[0],l=Object(r.useState)(),j=Object(i.a)(l,2),b=j[0],d=j[1];return Object(r.useEffect)((function(){e&&u.a.post("/login",{code:e}).then((function(e){window.history.pushState({},"","/"),c(e.data.token)})).catch((function(e){console.log("Not sure what this error is so I really hope you bring it up",e)}))}),[e]),Object(r.useEffect)((function(){if(o&&b){var e=setInterval((function(){u.a.post("/refresh",{refreshToken:o}).then((function(e){console.log(e.data),c(e.data.accessToken),d(e.data.expiresIn)})).catch((function(){window.location.href="/"}))}),1e3*(b-120));return function(){return clearInterval(e)}}}),[o,b]),a},b=n(199),d=n(82),m=n.n(d),h=n(83),p=n.n(h),g=(n(119),n(2)),O=function(e){return Object(g.jsx)(b.a,{container:!0,className:"widget-container",alignItems:"center",style:e.currentSong?{display:"flex"}:{display:"none"},children:Object(g.jsxs)(b.a,{container:!0,item:!0,xs:4,justifyContent:"space-between",alignItems:"center",children:[Object(g.jsx)(b.a,{item:!0,children:Object(g.jsx)("p",{children:"Now Playing"})}),Object(g.jsxs)(b.a,{item:!0,children:[Object(g.jsx)(m.a,{onClick:function(){return e.handlePauseSong(e.currentSong)},style:e.pauseButtonView?{fontSize:40}:{display:"none"}}),Object(g.jsx)(p.a,{onClick:function(){return e.handlePlaySong(e.currentSong)},style:e.playButtonView?{fontSize:40}:{display:"none"}})]}),Object(g.jsx)(b.a,{item:!0,children:Object(g.jsx)("p",{children:e.nowPlaying?e.nowPlaying.name:null})})]})})},x=(n(126),n(9)),f=n.n(x),y=n(14),S=n(211),w=n(206),v=n(208),A=n(84),k=n.n(A),N=n(209),I=n(205),C=n(202),P=n(203),B=n(204),T="https://api.spotify.com/v1/",R=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.replaceAll(" ","+"),e.prev=1,e.next=4,u.a.get(T+"search?q=".concat(r,"&type=artist,album,track&limit=4"),{headers:{Authorization:"Bearer ".concat(n)}});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(T+"albums/".concat(t,"/tracks"),{headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(T+"artists/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(T+"artists/".concat(t,"/top-tracks"),{headers:{Authorization:"Bearer ".concat(n)},params:{market:"from_token"}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(T+"artists/".concat(t,"/albums"),{headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(T+"tracks/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),z=n(87),L=Object(z.a)({root:{backgroundColor:"#1D1F22",margin:"2em 0",padding:"2em",borderRadius:10}}),M={albumImageStyles:{maxHeight:300},songUlStyles:{marginBottom:0,padding:"1em 0",borderTop:"1px solid rgba(0, 0, 0, 0.3)"},songLiStyles:{borderBottom:"1px solid rgba(0, 0, 0, 0.3)",padding:".5em 0"},songImageStyles:{maxHeight:40},songNameStyles:{display:"inline",marginLeft:10,width:"30%"},songInfoStyles:{width:"31%",textAlign:"center"},songInfoHeaderStyles:{width:"30%",textAlign:"center",color:"rgb(0, 0, 0)",marginRight:10,verticalAlign:"top",":hover":{cursor:"pointer"}},songNameHeaderStyles:{width:"30%",color:"rgb(0, 0, 0)",marginRight:45,verticalAlign:"top"},albumTitleStyles:{fontSize:40},albumTitleArtistStyles:{fontSize:32}},D=function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1],s=L();Object(r.useEffect)((function(){function t(){return(t=Object(y.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentAlbum){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,H(e.currentAlbum.id,e.token);case 4:n=t.sent,c(n.data.items);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.currentAlbum,e.token]);var o=function(t){e.currentAlbum&&(e.handleCurrentArtist(t),e.handleShowArtist())},l=function(e){var t=Math.floor(e/6e4),n=e%6e4/1e3;return 60===n?(t+1).toString()+":00":t+":"+(n<10?"0":"")+n.toFixed(0)};return Object(g.jsxs)(b.a,{container:!0,alignItems:"center",justifyContent:"center",className:s.root,children:[Object(g.jsx)(b.a,{item:!0,xs:4,children:Object(g.jsx)(N.a,{children:Object(g.jsx)("img",{style:M.albumImageStyles,src:e.currentAlbum?e.currentAlbum.images[0].url:"",alt:"".concat(e.currentAlbum?e.currentAlbum.name:""," album cover")})})}),Object(g.jsx)(b.a,{item:!0,xs:4,children:Object(g.jsxs)(N.a,{children:[Object(g.jsx)("p",{style:M.albumTitleStyles,children:e.currentAlbum?e.currentAlbum.name:"Album Name"}),Object(g.jsx)("p",{className:"clickable",onClick:function(){return o(e.currentArtist)},style:M.albumTitleArtistStyles,children:e.currentAlbum?"by ".concat(e.currentAlbum.artists[0].name):"Artist Name"})]})}),Object(g.jsx)(b.a,{item:!0,xs:10,className:"albumSection-songlist-grid",children:Object(g.jsx)(N.a,{children:Object(g.jsxs)("ul",{style:M.songUlStyles,children:[Object(g.jsx)("li",{children:Object(g.jsxs)(b.a,{container:!0,item:!0,alignItems:"flex-start",children:[Object(g.jsx)("small",{style:M.songNameHeaderStyles,children:"Song"}),Object(g.jsx)("small",{style:M.songInfoHeaderStyles,children:"Artist"}),Object(g.jsx)("small",{style:M.songInfoHeaderStyles,children:"Time"})]})}),e.currentAlbum?a.map((function(t,n){return Object(g.jsx)("li",{style:M.songLiStyles,children:Object(g.jsxs)(b.a,{container:!0,item:!0,alignItems:"center",children:[Object(g.jsx)("img",{style:M.songImageStyles,src:e.currentAlbum?e.currentAlbum.images[2].url:"",alt:"".concat(e.currentAlbum?e.currentAlbum.name:""," album cover")}),Object(g.jsx)("div",{className:"clickable",onClick:function(){e.playSong(t.id),e.setNowPlaying(t)},style:M.songNameStyles,children:t.name}),Object(g.jsx)("small",{className:"clickable",onClick:function(){return o(e.currentArtist)},style:M.songInfoStyles,children:t.artists[0].name}),Object(g.jsx)("small",{style:M.songInfoStyles,children:l(t.duration_ms)})]})},n)})):"Album Songs"]})})})]})},U={songUlStyles:{marginBottom:0,padding:"1em 0",borderTop:"1px solid rgba(0, 0, 0, 0.3)"},songLiStyles:{borderBottom:"1px solid rgba(0, 0, 0, 0.3)",padding:".5em 0"},songImageStyles:{maxHeight:40,maxWidth:40},songNameStyles:{display:"inline",marginLeft:10,width:"70%"},songInfoStyles:{width:"30%",textAlign:"center"},songInfoHeaderStyles:{width:"30%",textAlign:"center",color:"rgb(0, 0, 0)",marginRight:10,verticalAlign:"top",":hover":{cursor:"pointer"}}},W=n(201),q=Object(W.a)((function(){return{containerHide:{marginTop:"2em",backgroundColor:"#1D1F22",borderRadius:10,maxHeight:675,padding:"2em",overflow:"hidden",marginBottom:80},containerShow:{marginTop:"2em",backgroundColor:"#1D1F22",borderRadius:10,padding:"2em",marginBottom:80}}})),K=function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(r.useState)(!1),d=Object(i.a)(j,2),m=d[0],h=d[1],p=q(m);Object(r.useEffect)((function(){function t(){return(t=Object(y.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentArtist){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,F(e.currentArtist.id,e.token);case 4:return n=t.sent,t.next=7,E(e.currentArtist.id,e.token);case 7:r=t.sent,c(n.data.items),u(r.data.tracks);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.currentArtist,e.token]);var O=function(e){var t=Math.floor(e/6e4),n=e%6e4/1e3;return 60===n?(t+1).toString()+":00":t+":"+(n<10?"0":"")+n.toFixed(0)};return Object(g.jsxs)(b.a,{container:!0,spacing:2,className:m?p.containerShow:p.containerHide,alignItems:"center",children:[Object(g.jsxs)(b.a,{item:!0,xs:6,children:[Object(g.jsx)("img",{src:e.currentArtist?e.currentArtist.images[0].url:"Artist Image",alt:"".concat(e.currentArtist?e.currentArtist.name:""," avatar"),style:{maxHeight:250,borderRadius:"50%"}}),Object(g.jsx)("p",{style:{fontSize:54,marginTop:10,marginBottom:0},children:e.currentArtist?e.currentArtist.name:"Artist Name"})]}),Object(g.jsx)(b.a,{item:!0,container:!0,xs:6,children:Object(g.jsxs)(b.a,{item:!0,xs:12,children:[Object(g.jsx)("header",{children:"Top Tracks"}),Object(g.jsx)("ul",{children:e.currentArtist?l.slice(0,5).map((function(t,n){return Object(g.jsx)("li",{style:U.songLiStyles,children:Object(g.jsxs)(b.a,{container:!0,item:!0,alignItems:"center",children:[Object(g.jsxs)(b.a,{container:!0,alignItems:"center",item:!0,xs:6,children:[Object(g.jsx)("img",{style:U.songImageStyles,src:e.currentArtist?t.album.images[2].url:"",alt:"".concat(e.currentArtist?t.album.name:""," album cover")}),Object(g.jsx)("div",{onClick:function(){e.playSong(t.id),e.setNowPlaying(t)},style:U.songNameStyles,children:t.name})]}),Object(g.jsx)(b.a,{item:!0,xs:3,children:Object(g.jsx)("div",{children:Object(g.jsx)("small",{style:U.songInfoStyles,children:t.artists[0].name})})}),Object(g.jsx)(b.a,{item:!0,container:!0,xs:3,justifyContent:"center",children:Object(g.jsx)("div",{children:Object(g.jsx)("small",{style:U.songInfoStyles,children:O(t.duration_ms)})})})]})},n)})):"Album Songs"})]})}),Object(g.jsxs)(b.a,{container:!0,item:!0,xs:12,spacing:4,justifyContent:"center",children:[Object(g.jsxs)(b.a,{container:!0,item:!0,xs:11,alignItems:"center",justifyContent:"space-between",children:[Object(g.jsx)("p",{children:"Albums"}),Object(g.jsx)("p",{onClick:function(){h(!m)},children:"See All"})]}),e.currentArtist?a.map((function(t,n){return Object(g.jsx)(b.a,{item:!0,sm:4,md:3,lg:2,children:Object(g.jsxs)(N.a,{onClick:function(){e.handleCurrentAlbum(t),e.handleShowAlbum()},children:[Object(g.jsx)("img",{src:t.images[1].url,alt:"".concat(t.name," avatar"),style:{maxHeight:150}},"".concat(n,"-image")),Object(g.jsx)("div",{children:t.name},"".concat(n,"-album"))]})},n)})):"Album Songs"]})]})};n(128);function J(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(r.useState)(!1),d=Object(i.a)(j,2),m=d[0],h=d[1],p=Object(r.useState)(!1),O=Object(i.a)(p,2),x=O[0],S=O[1];Object(r.useEffect)((function(){function t(){return(t=Object(y.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(a.artists[0].id,e.token);case 2:n=t.sent,u(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a&&function(){t.apply(this,arguments)}()}),[e.token,a]);var w=function(){var t=Object(y.a)(f.a.mark((function t(n){var r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(n,e.token);case 2:r=t.sent,a={song:new Audio(r.data.preview_url),isPlaying:!1},e.currentSong&&e.currentSong.song.pause(),console.log(a),e.handlePlaySong(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){h(!0),S(!1)},A=function(){h(!1),S(!0)},k=e.artists.map((function(e,t){return Object(g.jsxs)("li",{className:"searchResults-link",children:[Object(g.jsx)(N.a,{className:"searchResults-icon",children:Object(g.jsx)(C.a,{fontSize:"small"})}),Object(g.jsx)("div",{className:"clickable",onClick:function(){A(),u(e),console.log(e)},children:e.name})]},t)})),T=e.albums.map((function(e,t){return Object(g.jsxs)("li",{className:"searchResults-link",children:[Object(g.jsx)(N.a,{className:"searchResults-icon",children:Object(g.jsx)(P.a,{fontSize:"small"})}),Object(g.jsx)("div",{className:"clickable",onClick:function(){v(),c(e)},children:e.name})]},t)})),R=e.songs.map((function(t,n){return Object(g.jsxs)("li",{className:"searchResults-link",children:[Object(g.jsx)(N.a,{className:"searchResults-icon",children:Object(g.jsx)(B.a,{fontSize:"small"})}),Object(g.jsx)("div",{className:"clickable",onClick:function(){w(t.id),e.setNowPlaying(t)},children:t.name})]},n)}));return Object(g.jsxs)(N.a,{children:[Object(g.jsx)(I.a,{in:!!e.query,timeout:1e3,children:Object(g.jsx)(N.a,{className:"searchResults-box",children:Object(g.jsxs)(b.a,{container:!0,justifyContent:"space-between",className:"searchResults-grid-container",style:e.query?{display:"flex"}:{display:"none"},children:[Object(g.jsx)(b.a,{item:!0,xs:4,children:Object(g.jsxs)(N.a,{className:"searchResults-links-box",children:[Object(g.jsx)("small",{children:"Artist"}),Object(g.jsx)("ul",{children:k})]})}),Object(g.jsx)(b.a,{item:!0,xs:4,children:Object(g.jsxs)(N.a,{className:"searchResults-links-box",children:[Object(g.jsx)("small",{children:"Albums"}),Object(g.jsx)("ul",{children:T})]})}),Object(g.jsx)(b.a,{item:!0,xs:4,children:Object(g.jsxs)(N.a,{className:"searchResults-links-box",children:[Object(g.jsx)("small",{children:"Songs"}),Object(g.jsx)("ul",{children:R})]})})]})})}),Object(g.jsx)(N.a,{style:m?{display:"block"}:{display:"none"},children:Object(g.jsx)(D,{currentAlbum:a,currentArtist:l,token:e.token,handleShowArtist:A,handleCurrentArtist:u,playSong:w,pauseButtonView:e.pauseButtonView,playButtonView:e.playButtonView,nowPlaying:e.nowPlaying,setNowPlaying:e.setNowPlaying})}),Object(g.jsx)(N.a,{style:x?{display:"block"}:{display:"none"},children:Object(g.jsx)(K,{currentArtist:l,currentAlbum:a,handleShowAlbum:v,handleCurrentAlbum:c,token:e.token,playSong:w,pauseButtonView:e.pauseButtonView,playButtonView:e.playButtonView,nowPlaying:e.nowPlaying,setNowPlaying:e.setNowPlaying})})]})}var G=Object(z.a)({root:{marginTop:10,marginBottom:"2em",border:"#FCA511",color:"#FCA511",width:500,"& .MuiInputLabel-outlined.Mui-focused":{color:"#FCA511"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"#FCA511"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#FCA511"}}});function Q(e){var t=e.token,n=G(),a=Object(r.useState)(""),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),j=u[0],b=u[1],d=Object(r.useState)([]),m=Object(i.a)(d,2),h=m[0],p=m[1],O=Object(r.useState)([]),x=Object(i.a)(O,2),A=x[0],N=x[1];Object(r.useEffect)((function(){s&&I(s,e.token)}),[s,e.token]);var I=function(){var e=Object(y.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,R(t,n);case 4:r=e.sent,b(r.data.albums.items),p(r.data.artists.items),N(r.data.tracks.items);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a,{variant:"outlined",className:"searchbar",children:Object(g.jsx)(v.a,{id:"searchbar",label:"What would you like to hear?",variant:"outlined",className:n.root,onChange:function(e){return o(e.target.value)},InputProps:{endAdornment:Object(g.jsx)(S.a,{position:"end",children:Object(g.jsx)(k.a,{})})}})}),Object(g.jsx)(J,{artists:h,albums:j,songs:A,currentSong:e.currentSong,query:s,handlePlaySong:e.handlePlaySong,token:t,pauseButtonView:e.pauseButtonView,playButtonView:e.playButtonView,nowPlaying:e.nowPlaying,setNowPlaying:e.setNowPlaying})]})}var X=n(85),Y=new(n.n(X).a)({clientId:"76007946b07a474487db86cb749ba027"}),Z=function(e){var t=e.code,n=Object(r.useState)(),a=Object(i.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),b=u[0],d=u[1],m=Object(r.useState)(!0),h=Object(i.a)(m,2),p=h[0],x=h[1],f=Object(r.useState)(),y=Object(i.a)(f,2),S=y[0],w=y[1],v=j(t);Object(r.useEffect)((function(){v&&Y.setAccessToken(v)}),[v]);var A=function(e){void 0!==e&&(s(e),e.song.play(),x(!p),d(!b))};return Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsxs)(o.a,{children:[Object(g.jsx)("header",{className:"home-hero",children:"Hear Me Out"}),Object(g.jsx)(Q,{currentSong:c,handlePlaySong:A,pauseButtonView:b,playButtonView:p,token:v,nowPlaying:S,setNowPlaying:w})]}),Object(g.jsx)(O,{currentSong:c,handlePlaySong:A,handlePauseSong:function(e){void 0!==e&&(e.song.pause(),d(!b),x(!p))},token:v,pauseButtonView:b,playButtonView:p,nowPlaying:S,setNowPlaying:w})]})},$=(n(165),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).Client_ID),ee="".concat("https://accounts.spotify.com/authorize","?client_id=").concat($,"&response_type=code&redirect_uri=").concat("https://hear-me-out-spotify-api.herokuapp.com/","&scope=").concat(["streaming","user-read-email","user-read-private"].join("%20")),te=n(210),ne=n(168),re=Object(z.a)({loginHeader:{fontSize:72}}),ae=Object(ne.a)({root:{background:"rgba(0, 0, 0, 0.1)",borderRadius:10,border:2,color:"rgb(252, 165, 17)",height:60,padding:"0 25px",boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048),"}})(te.a),ce=function(){var e=re();return Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(N.a,{className:e.loginHeader,children:["Welcome To ",Object(g.jsx)("br",{})," Hear Me Out"]}),Object(g.jsx)("p",{children:"This app uses Spotify so please Login Below."}),Object(g.jsx)(ae,{color:"inherit",href:ee,children:"Login with Spotify"})]})};var se=function(){var e=new URLSearchParams(window.location.search).get("code");return Object(g.jsx)("div",{className:"App",children:function(){if(e)return window.localStorage.setItem("yourCode","".concat(e)),localStorage.getItem("yourCode")}()?Object(g.jsx)(Z,{code:e}):Object(g.jsx)(ce,{})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(se,{})}),document.getElementById("root")),ie()}},[[166,1,2]]]);
//# sourceMappingURL=main.3bdff5ad.chunk.js.map