(this["webpackJsonpreact-spotify-player"]=this["webpackJsonpreact-spotify-player"]||[]).push([[0],{186:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},189:function(e,t,a){e.exports=a.p+"static/media/sketchyFavicon.4ab11064.png"},191:function(e,t,a){e.exports=a(467)},196:function(e,t,a){},239:function(e,t){},368:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){},413:function(e,t,a){},414:function(e,t,a){},415:function(e,t,a){},416:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){},464:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},467:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(19),c=a.n(o),r=(a(196),a(3)),l=a(15),i=a.n(l),m=a(43),u=a.n(m),d=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var p=d,f=a(21),g=a(182),h=a(8),E=a(20),y=a(61),b=a(33),v=a(27),N=a.n(v),A=a(31),k=a.n(A),w=a(60),S=a.n(w),j=(a(368),function(e,t){return[-(t-window.innerHeight/2)/25,(e-window.innerWidth/2)/25,1.01]}),O=function(e,t,a){return"perspective(800px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};E.b.add(y.a);var C,x,D=function(e){var t,a=e.item,o=e.isPlaying,c=e.progressms,l=e.season,m=l?"seasonStyling":"",u=l?"seasonStylingAlt":"",d=Object(n.useState)([]),E=Object(r.a)(d,2),y=E[0],v=E[1],A=Object(n.useState)(!1),w=Object(r.a)(A,2),C=(w[0],w[1]),x=p.access_token,D=function(){if(y.length>6)for(var e=0;e<6;e++)y.shift();if(y.colors)return y.colors.map((function(e,t){return s.a.createElement("div",{key:t,style:{backgroundColor:e,width:60,height:15}})}))},I=Object(b.b)((function(){return{xys:[0,0,1],config:{mass:1,tension:180,friction:10}}})),T=Object(r.a)(I,2),B=T[0],_=T[1],M=c,P=0,z="0000-00-00",R="string"===typeof z?z.split("-")[0]:"",F="",W="",Y="",L="";a&&(P=a.duration_ms,R="string"===typeof(z=a.album.release_date)?z.split("-")[0]:"",F=a.album.images[0].url,Y=N()(M).format("mm:ss"),L=N()(P).format("mm:ss"),a.artists.map((function(e){return W+="| ".concat(e.name," |")})),t=(a.artists[0].name+"+"+a.album.name).replace(" ","+"));var G={width:100*M/P+"%"};return a?s.a.createElement("div",{className:"nowPlayingSide"},s.a.createElement(g.a,{getColors:function(e){return v((function(){return{colors:[y].concat(Object(f.a)(e))}}))}},s.a.createElement("img",{src:F,className:"imageStyles",alt:"albumimage"})),s.a.createElement("div",{className:"swatchesStyles"},D()),s.a.createElement("div",null,s.a.createElement(b.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return _({xys:j(t,a)})},onMouseLeave:function(){_({xys:[0,0,1]}),C(!1)},style:{transform:B.xys.interpolate(O)},onMouseEnter:function(){return C(!0)}},s.a.createElement("a",{href:"https://www.google.com/search?q=".concat(t),rel:"noopener noreferrer",target:"_blank"},s.a.createElement("img",{src:F,className:"nowPlayingAlbumCover",alt:"albumimage"})))),s.a.createElement("div",{className:"swatchesStyles"},D()),s.a.createElement("div",{className:"nowPlayingName"},s.a.createElement(S.a,{interval:2e3},["a",""].map((function(e){return s.a.createElement(k.a,{className:"pomodoroTitle",avgTypingDelay:90,key:e,startDelay:0,cursor:{show:!0,blink:!0,element:"",hideWhenDone:!1,hideWhenDoneDelay:1e3}},a.name)})))),s.a.createElement("div",{className:"nowPlayingArtists"},W),s.a.createElement("div",{className:"nowPlayingAlbum"},a.album.name," - ",R),s.a.createElement("div",{className:"nowPlayingStatus"},s.a.createElement("button",{className:"skipbuttons ".concat(m),onClick:function(){i()({method:"post",url:"https://api.spotify.com/v1/me/player/previous",headers:{Authorization:"Bearer ".concat(x)}})}},s.a.createElement(h.a,{className:"controlButtonsColouring",icon:["fas","arrow-alt-circle-left"]})),o?s.a.createElement("button",{className:"skipbuttons ".concat(u),onClick:function(){i()({method:"put",url:"https://api.spotify.com/v1/me/player/pause",headers:{Authorization:"Bearer ".concat(x)}})}},s.a.createElement(h.a,{className:"controlButtonsColouring",icon:["fas","pause"]})):s.a.createElement("button",{className:"skipbuttons ".concat(u),onClick:function(){i()({method:"put",url:"https://api.spotify.com/v1/me/player/play",headers:{Authorization:"Bearer ".concat(x)}})}},s.a.createElement(h.a,{className:"controlButtonsColouring",icon:["fas","play"]})),s.a.createElement("button",{className:"skipbuttons ".concat(m),onClick:function(){i()({method:"post",url:"https://api.spotify.com/v1/me/player/next",headers:{Authorization:"Bearer ".concat(x)}})}},s.a.createElement(h.a,{className:"controlButtonsColouring",icon:["fas","arrow-alt-circle-right"]}))),s.a.createElement("div",{className:"durationMenu"},s.a.createElement("p",{className:"durationMenuTimes"},Y),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"progressBar ".concat(u," "),style:G})),s.a.createElement("p",{className:"durationMenuTimes"},L))):s.a.createElement("div",{className:"noMusicPlayingMessage"},s.a.createElement("h1",null,"hmm..."),s.a.createElement("p",null,"It seems that you're on Spotify but you're not currently listening to music. Listen to music for something to appear here!"))},I=a(62),T=(a(161),a(376),1499),B=25..toString(),_="00",M=!1,P="press on the play button below to begin";E.b.add(y.a);var z,R=function(e){var t=e.season,a=t?"seasonStyling":"",o=t?"seasonStylingAlt":"",c=Object(n.useState)(!1),l=Object(r.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(!1),d=Object(r.a)(u,2),p=d[0],f=d[1],g=Object(n.useState)(!1),E=Object(r.a)(g,2),y=E[0],b=E[1],v=function(){f(!1),i||(T=1499,P=t?"spookspookspookspookspook":"WorkWorkWorkWorkWork",T++,A(T),M=!0,C=setInterval((function(){T>0?(T--,A(T),M=!0):(clearInterval(C),N())}),1e3),m(!0),b(!0))},N=function(){T=300,P=t?"2sp00ky4me":"RestRestRestRestRest",T++,x=setInterval((function(){T>0?(T--,A(T)):(clearInterval(x),v())}),1e3)},A=function(e){var t=60*(B=Math.floor(e/60));B<10&&(B=0===B?"00":"0"+B.toString()),(_=e-t)<10&&(_=0===_?"00":"0"+_.toString())};return s.a.createElement("div",{className:"pomodoroHeader"},s.a.createElement("div",null,s.a.createElement("div",{className:"pomodoroHeaderTitle"},s.a.createElement("div",{className:"iconsSpacing ".concat(a,"Icons")},s.a.createElement(h.a,{icon:t?["fas","spider"]:["fas","pizza-slice"]})),s.a.createElement("div",{className:"iconsSpacing ".concat(o,"Icons")},s.a.createElement(h.a,{icon:t?["fas","ghost"]:["fas","utensils"]})),s.a.createElement("h1",{className:"pomodoroHeaderTitleText"},t?"pomodorooooo":"pomodoro"),s.a.createElement("div",{className:"iconsSpacing ".concat(o,"Icons")},s.a.createElement(h.a,{icon:t?["fas","ghost"]:["fas","utensils"]})),s.a.createElement("div",{className:"iconsSpacing ".concat(a,"Icons")},s.a.createElement(h.a,{icon:t?["fas","spider"]:["fas","pizza-slice"]})))),s.a.createElement("p",null,P),s.a.createElement("div",{className:"pomodoroPanel"},s.a.createElement("button",{className:"controlButtons-pizzaslice ".concat(a),onClick:v,disabled:y},t?s.a.createElement(h.a,{className:"controlButtonsColouring",icon:["fas","spider"]}):s.a.createElement(h.a,{icon:["fas","pizza-slice"]})),s.a.createElement("button",{className:"controlButtons ".concat(o),onClick:function(){m(!1),b(!1),p||(P=t?"2sp00ky4me":"RestRestRestRestRest",clearInterval(C),M=!1,A(T=1500),f(!0))},disabled:p},s.a.createElement(h.a,{icon:["fas","undo"]})),s.a.createElement("button",{className:"controlButtons ".concat(o),onClick:v,disabled:i},M?s.a.createElement(h.a,{icon:["fas","pause"]}):s.a.createElement(h.a,{icon:["fas","play"]})),s.a.createElement("p",{className:"countdown ".concat(a)},s.a.createElement("div",{className:"controlButtonsColouring"},B,":",_))),s.a.createElement("div",{className:"icon-scroll animate__animated animate__bounce animate__infinite animate__slow"},s.a.createElement(I.Link,{to:"topsongs",spy:!0,smooth:!0,duration:400},s.a.createElement(h.a,{icon:"chevron-down",size:"2x"}))))},F=a(32),W=a(7),Y=(a(377),a(378),function(e){for(var t=e.season,a=t?"seasonStyling":"",o=t?"seasonStylingAlt":"",c=Object(n.useState)(""),l=Object(r.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(""),d=Object(r.a)(u,2),p=d[0],f=d[1],g=Object(n.useState)(""),E=Object(r.a)(g,2),y=E[0],b=E[1],v=[],N=12;N>=1;N--)v.push("GMTplus"+N.toString());v.push("GMT");for(var A=1;A<=11;A++)v.push("GMTminus"+A.toString());return s.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},s.a.createElement("div",null,s.a.createElement("h1",{className:"heading ".concat(o,"Header")},"chat"),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"name",className:"joinInput",type:"text",onChange:function(e){return m(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("input",{placeholder:"room",className:"joinInput mt-20",type:"text",onChange:function(e){return f(e.target.value)}})),s.a.createElement("div",null,s.a.createElement("select",{className:"joinInput mt-20",defaultValue:"default",onChange:function(e){return b(e.target.value)}},s.a.createElement("option",{value:"default"},"choose your timezone"),v.map((function(e){return s.a.createElement("option",{value:e},e.includes("plus")?e.replace("plus","+"):e.replace("minus","-"))})))),s.a.createElement("div",null,s.a.createElement(F.b,{onClick:function(e){return i&&p&&y?null:e.preventDefault()},to:"/chat?name=".concat(i,"&room=").concat(p,"&tz=").concat(y)},s.a.createElement("button",{className:"button mt-20 ".concat(a),type:"submit"},"sign in"))),s.a.createElement("div",{className:"icon-scroll-chat animate__animated animate__bounce animate__infinite animate__slow"},s.a.createElement(I.Link,{to:"topsongs",spy:!0,smooth:!0,duration:400},s.a.createElement(h.a,{icon:"chevron-down",size:"2x"})))))}),L=function(e){var t=e.duplicate,a=e.season;return t?s.a.createElement("div",{className:"joinOuterContainer"},s.a.createElement("div",{className:"joinInnerContainer"},s.a.createElement("p",{className:"duplicatemessage"},"That username is already taken."),s.a.createElement("p",{className:"duplicatemessage"},"Please use another one!"),s.a.createElement(Y,{season:a}))):s.a.createElement("div",{className:"joinOuterContainer"},s.a.createElement("div",{className:"joinInnerContainer"},s.a.createElement(Y,{season:a})))},G=a(184),U=a.n(G),K=a(185),Q=a.n(K),V=a(186),H=a.n(V),J=a(63),X=a.n(J),q=(a(391),function(e){var t=e.room,a=e.season,n=e.onDisconnect,o=a?"seasonStyling":"";return s.a.createElement("div",{className:"infoBar ".concat(o)},s.a.createElement("div",{className:"leftInnerContainer"},s.a.createElement("img",{className:"onlineIcon",src:X.a,alt:"online"}),s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"rightInnerContainer"},s.a.createElement(F.b,{to:"/"},s.a.createElement("div",{onClick:n},s.a.createElement("img",{src:H.a,alt:"close"})))))}),Z=(a(392),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage,o=e.item,c=e.season?"seasonStyling":"";return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"input",type:"text",placeholder:"Enter a message...",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),s.a.createElement("button",{className:"sendButton ".concat(c),onClick:function(e){return n(e)}},"Send"),s.a.createElement("button",{className:"sendButton ".concat(c),onClick:function(e){return function(e){var t="I'm listening to: ".concat(o.name," "),s="";o.artists.map((function(e){return s+="- ".concat(e.name," ")})),s=s.substring(0,s.length-1),a(t+=s),n(e)}(e)}},"Share song!"))}),$=a(187),ee=a.n($),te=a(106),ae=a.n(te),ne=(a(413),function(e){var t=e.message,a=t.user,n=t.text,o=t.currentTime,c=e.name,r=e.season,l=!1,i=r?"seasonStyling":"",m=r?"seasonStylingAlt":"",u=c.trim().toLowerCase();return a===u&&(l=!0),l?s.a.createElement("div",null,s.a.createElement("p",{className:"timestamp"},o),s.a.createElement("div",{className:"messageContainer justifyEnd"},s.a.createElement("p",{className:"sentText pr-10"},u),s.a.createElement("div",{className:"messageBox backgroundMain ".concat(i)},s.a.createElement("p",{className:"messageText colorWhite"},ae.a.emojify(n))))):s.a.createElement("div",null,s.a.createElement("p",{className:"timestampotherusers"},o),s.a.createElement("div",{className:"messageContainer justifyStart"},s.a.createElement("div",{className:"messageBox backgroundLight ".concat(m)},s.a.createElement("p",{className:"messageText colorDark"},ae.a.emojify(n))),s.a.createElement("p",{className:"sentText pl-10"},a)))}),se=(a(414),function(e){var t=e.messages,a=e.name,n=e.season;return s.a.createElement(ee.a,{className:"messages"},t.filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(ne,{message:e,name:a,season:n}))})))}),oe=(a(415),function(e){var t=e.users;return s.a.createElement("div",{className:"userslist"},t.length>1?s.a.createElement("div",null,s.a.createElement("p",null,"Online:"),s.a.createElement("div",{className:"activeContainer"},s.a.createElement("p",null,t.map((function(e){var t=e.name;return s.a.createElement("div",{key:t,className:"activeItem"},t,s.a.createElement("img",{alt:"Online Icon",src:X.a}))}))))):s.a.createElement("div",null,s.a.createElement("p",null,"Looks like you're alone in this chat room...")))}),ce=(a(416),function(e){var t=e.location,a=e.item,o=e.season,c=Object(n.useState)(""),l=Object(r.a)(c,2),i=l[0],m=l[1],d=Object(n.useState)(""),p=Object(r.a)(d,2),g=p[0],h=p[1],E=Object(n.useState)(""),y=Object(r.a)(E,2),b=y[0],v=y[1],N=Object(n.useState)([]),A=Object(r.a)(N,2),k=A[0],w=A[1],S=Object(n.useState)(""),j=Object(r.a)(S,2),O=j[0],C=j[1],x=Object(n.useState)([]),D=Object(r.a)(x,2),I=D[0],T=D[1],B=Object(n.useState)(!1),_=Object(r.a)(B,2),M=_[0],P=_[1],R="https://react-chat-app-back-end.herokuapp.com/";Object(n.useEffect)((function(){var e=Q.a.parse(t.search),a=e.name,n=e.room,s=e.tz;return z=u()(R,{transports:["websocket"]}),m(a),h(n),v(s),z.emit("join",{name:a,room:n,tz:s},(function(){})),z.on("reconnect_attempt",(function(){z.io.opts.transports=["websocket","polling"]})),function(){z.emit("disconnect"),z.off()}}),[R,t.search]),Object(n.useEffect)((function(){F()})),Object(n.useEffect)((function(){z.on("message",(function(e){var t=b;t=t.includes("minus")?t.replace("minus","+"):t.replace("plus","-"),e.currentTime=U()().tz("Etc/".concat(t)).format("MMM DD h:mm a"),T((function(t){return[].concat(Object(f.a)(t),[e])}))}))}),[i]);var F=function(){z.on("roomData",(function(e){var t=e.users;w(t)})),z.on("duplicate",(function(e){P(e.duplicate)}))};return M?s.a.createElement(L,{duplicate:M,season:o}):s.a.createElement("div",{className:"outerContainer"},s.a.createElement("div",{className:"container"},s.a.createElement(q,{room:g,season:o,onDisconnect:function(){z.disconnect(),z=u()(R,{transports:["websocket"]}),F()}}),s.a.createElement(se,{messages:I,name:i,season:o}),s.a.createElement(Z,{message:O,setMessage:C,sendMessage:function(e){e.preventDefault(),O&&z.emit("sendMessage",O,(function(){return C("")}))},item:a,season:o})),s.a.createElement(oe,{users:k}))}),re=function(e){return s.a.createElement(F.a,{basename:"/studyfi"},s.a.createElement(W.a,{path:"/",exact:!0,render:function(t){return s.a.createElement(L,Object.assign({},t,e))}}),s.a.createElement(W.a,{path:"/chat",exact:!0,render:function(t){return s.a.createElement(ce,Object.assign({},t,e))}}))},le=a(107),ie=a.n(le),me=a(108),ue=a.n(me),de=a(13),pe=(a(460),"A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic."),fe="Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.",ge="Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.",he="The key the track is in. Integers map to pitches using standard Pitch Class notation . E.g. 0 = C, 1 = C\u266f/D\u266d, 2 = D, and so on.",Ee="Predicts whether a track contains no vocals. \u201cOoh\u201d and \u201caah\u201d sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \u201cvocal\u201d. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.",ye="A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).",be="The total number of followers.",ve='A list of the genres the artist is associated with. For example: "Prog Rock" , "Post-Grunge". (If not yet classified, the array is empty.)',Ne="The name of the artist",Ae="Image of the artist",ke="The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist\u2019s popularity is calculated from the popularity of all the artist\u2019s tracks.",we=function(e,t){return e.toString().includes("http")?s.a.createElement("span",null,s.a.createElement("img",{style:{height:"64px",width:"64px"},src:e,alt:"cell"})):s.a.createElement("span",null,e)},Se=[{text:"Name",dataField:"name",formatter:we,headerData:"Song name",attrs:{title:"Song name"},style:{width:"10%"}},{text:"Album",dataField:"album",formatter:we,headerData:"Album name",attrs:{title:"Album name"},style:{width:"10%"}},{text:"Album Cover",dataField:"albumCover",formatter:we,headerData:"Album cover",attrs:{title:"Album cover"},style:{width:"10%"}},{text:"Release Date",dataField:"releaseDate",formatter:we,headerData:"Song release date",attrs:{title:"Song release date"},style:{width:"10%"}},{text:"Artists",dataField:"artists",formatter:we,headerData:"Artists on the song",attrs:{title:"Artists on the song"},style:{width:"10%"}},{text:"Acousticness",dataField:"acousticness",formatter:we,headerData:pe,attrs:{title:pe},style:{width:"10%"}},{text:"Danceability",dataField:"danceability",formatter:we,headerData:fe,attrs:{title:fe},style:{width:"10%"}},{text:"Energy",dataField:"energy",formatter:we,headerData:ge,attrs:{title:ge},style:{width:"10%"}},{text:"Key Signature",dataField:"keySignature",formatter:we,headerData:he,attrs:{title:he},style:{width:"10%"}},{text:"Instrumentalness",dataField:"instrumentalness",formatter:we,headerData:Ee,attrs:{title:Ee},style:{width:"10%"}},{text:"Valence",dataField:"valence",formatter:we,headerData:ye,attrs:{title:ye},style:{width:"10%"}}],je=[{text:"Name",dataField:"name",formatter:we,headerData:Ne,attrs:{title:Ne},style:{width:"10%"}},{text:"Followers",dataField:"followers",formatter:we,headerData:be,attrs:{title:be},style:{width:"10%"}},{text:"Genres",dataField:"genre",formatter:we,headerData:ve,attrs:{title:ve},style:{width:"10%"}},{text:"Photo",dataField:"photo",formatter:we,headerData:Ae,attrs:{title:Ae},style:{width:"10%"}},{text:"Popularity",dataField:"popularity",formatter:we,headerData:ke,attrs:{title:ke},style:{width:"10%"}}],Oe=["C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d","A","A\u266f/B\u266d","B"],Ce=function(e){var t=e.season,a=t?"seasonStyling":"",n=t?"seasonStylingAlt":"";return s.a.createElement("div",{className:"columnDescriptions"},s.a.createElement(de.a,{className:"tooltips",id:"acousticness",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,pe)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"acousticness"},"acousticness"),s.a.createElement(de.a,{className:"tooltips",id:"danceability",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,fe)),s.a.createElement("button",{className:"tooltip ".concat(n),"data-tip":!0,"data-for":"danceability"},"danceability"),s.a.createElement(de.a,{className:"tooltips",id:"energy",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,ge)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"energy"},"energy"),s.a.createElement(de.a,{className:"tooltips",id:"keysignature",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,he)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"keysignature"},"key signature"),s.a.createElement(de.a,{className:"tooltips",id:"instrumentalness",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,Ee)),s.a.createElement("button",{className:"tooltip ".concat(n),"data-tip":!0,"data-for":"instrumentalness"},"instrumentalness"),s.a.createElement(de.a,{className:"tooltips",id:"valence",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,ye)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"valence"},"valence"))},xe=(a(461),function(e){var t=e.season,a=t?"seasonStyling":"",n=t?"seasonStylingAlt":"";return s.a.createElement("div",{className:"columnDescriptions"},s.a.createElement(de.a,{className:"tooltips",id:"name",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,Ne)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"name"},"name"),s.a.createElement(de.a,{className:"tooltips",id:"followers",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,be)),s.a.createElement("button",{className:"tooltip ".concat(n),"data-tip":!0,"data-for":"followers"},"followers"),s.a.createElement(de.a,{className:"tooltips",id:"genre",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,ve)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"genre"},"genres"),s.a.createElement(de.a,{className:"tooltips",id:"photo",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,Ae)),s.a.createElement("button",{className:"tooltip ".concat(a),"data-tip":!0,"data-for":"photo"},"photo"),s.a.createElement(de.a,{className:"tooltips",id:"popularity",type:"light",effect:"solid",place:"top"},s.a.createElement("span",null,ke)),s.a.createElement("button",{className:"tooltip ".concat(n),"data-tip":!0,"data-for":"popularity"},"popularity"))}),De=(a(462),function(e){var t=e.season,a=t?"seasonStyling":"",o=t?"seasonStylingAlt":"",c=Object(n.useState)("long_term"),l=Object(r.a)(c,2),m=l[0],u=l[1],d=Object(n.useState)([]),f=Object(r.a)(d,2),g=f[0],h=f[1],E=Object(n.useState)(!1),y=Object(r.a)(E,2),b=y[0],v=y[1],N=Object(n.useState)([]),A=Object(r.a)(N,2),k=A[0],w=A[1],S=Object(n.useState)(!1),j=Object(r.a)(S,2),O=j[0],C=j[1],x=Object(n.useState)("tracks"),D=Object(r.a)(x,2),I=D[0],T=D[1],B=p.access_token,_=[],M=[];Object(n.useEffect)((function(){i()({method:"get",url:"https://api.spotify.com/v1/me/top/tracks",headers:{Authorization:"Bearer ".concat(B)},params:{limit:50,time_range:m}}).then((function(e){var t=e.data;P(t)})),i()({method:"get",url:"https://api.spotify.com/v1/me/top/artists",headers:{Authorization:"Bearer ".concat(B)},params:{limit:50,time_range:m}}).then((function(e){var t=e.data;z(t)}))}),[m]);var P=function(e){var t="";e.items.map((function(a){var n="",s={};return s.name=a.name,s.album=a.album.name,s.albumCover=a.album.images[2].url,s.releaseDate=a.album.release_date,s.id=a.id,t+=a.id+",",a.artists.map((function(e){return n+="".concat(e.name,", ")})),s.artists=n.slice(0,-2),_.push(s),e.items})),t=t.slice(0,-1),i()({method:"get",url:"https://api.spotify.com/v1/audio-features/",headers:{Authorization:"Bearer ".concat(B)},params:{ids:t}}).then((function(e){for(var t=e.data.audio_features,a=0;a<_.length;a++)_[a].acousticness=t[a].acousticness,_[a].danceability=t[a].danceability,_[a].energy=t[a].energy,_[a].keySignature=Oe[t[a].key],_[a].instrumentalness=t[a].instrumentalness,_[a].valence=t[a].valence,_[a].key=a+1;h(_),v(!0)}))},z=function(e){e.items.map((function(t){var a="",n={};return n.followers=t.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),t.genres.map((function(e){return a+="|"+e+"| "})),n.genre=a.slice(0,-1),n.name=t.name,n.photo=t.images[2].url,n.popularity=t.popularity,M.push(n),e.items})),w(M),C(!0)},R={pageListRenderer:function(e){var t=e.pages,n=e.onPageChange,c=t.filter((function(e){return"string"!==typeof e.page}));return s.a.createElement("div",null,c.map((function(e){return s.a.createElement("button",{className:e.page%2===1?"songsTablePagination ".concat(a):"songsTablePagination ".concat(o),onClick:function(){return n(e.page)}},e.page)})))},paginationSize:10,pageStartIndex:1,sizePerPageList:[{text:"5",value:5}]};return s.a.createElement("div",{id:"topsongs"},s.a.createElement("h1",{className:"songsTableTitle"},"your most listened to",s.a.createElement("button",{className:"songsAndArtistsButton ".concat(o),onClick:function(){return T("artists")}},"artists"),"and",s.a.createElement("button",{className:"songsAndArtistsButton ".concat(o),onClick:function(){return T("tracks")}},"tracks")),s.a.createElement("div",{className:"songsTableTimeRanges"},s.a.createElement("button",{className:"songsTableTimeRangeButton ".concat(a),onClick:function(){return u("short_term")}},"... of the last 4 weeks"),s.a.createElement("button",{className:"songsTableTimeRangeButton ".concat(o),onClick:function(){return u("medium_term")}},"... of the Last 6 months"),s.a.createElement("button",{className:"songsTableTimeRangeButton ".concat(a),onClick:function(){return u("long_term")}},"... of all time")),"tracks"===I&&O&&b?s.a.createElement("div",null,s.a.createElement(Ce,{season:t}),s.a.createElement("div",{className:"songsTable"},s.a.createElement(ie.a,{keyField:"id",data:g,columns:Se,pagination:ue()(R)}))):s.a.createElement("div",null,s.a.createElement(xe,{season:t}),s.a.createElement("div",{className:"songsTable"},s.a.createElement(ie.a,{keyField:"id",data:k,columns:je,pagination:ue()(R)}))))}),Ie=(a(463),function(e){var t=e.item,a=e.isPlaying,o=e.progressms,c=Object(n.useState)(!1),l=Object(r.a)(c,2),i=l[0],m=l[1];return s.a.createElement("div",{className:"overallDashboardWrapper"},s.a.createElement("div",{className:"mainDashboardWrapper"},s.a.createElement("div",{className:"dashboardItem"},s.a.createElement(R,{season:i})),s.a.createElement("div",{className:"dashboardItem"},s.a.createElement("button",{className:"seasonSelect",onClick:function(){m(!i)}},"Halloween mode!"),s.a.createElement(D,{item:t,isPlaying:a,progressms:o,season:i})),s.a.createElement("div",{className:"dashboardItem"},s.a.createElement(re,{item:t,season:i}))),s.a.createElement("div",{className:"mainDashboardWrapper"},s.a.createElement(De,{season:i})))}),Te=["user-top-read","user-read-currently-playing","user-read-playback-state","user-modify-playback-state"],Be=a(188);a(464);E.b.add(Be.a);var _e=N()().format("YYYY"),Me=function(){return s.a.createElement("div",{className:"main-wrapper-landing-page"},s.a.createElement("div",{className:"app-title"},"Studyfi"),s.a.createElement(S.a,{interval:700},["A place to study, listen to music, and chat with friends.",""].map((function(e){return s.a.createElement(k.a,{className:"app-description",avgTypingDelay:60,key:e,startDelay:0},"A place to study, listen to music, and chat with friends.")}))),s.a.createElement("a",{className:"login-button",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("53bcecd410634483b5388541c159849d","&redirect_uri=").concat("http://andres-espitia.com/studyfi/","&scope=").concat(Te.join("%20"),"&response_type=token&show_dialog=true"),target:""},s.a.createElement(h.a,{icon:["fab","spotify"],size:"10x"}),s.a.createElement("p",{className:"login-description"},"Login with Spotify")),s.a.createElement("div",{className:"footer"},s.a.createElement("div",null,"\xa9 Studyfi ".concat(_e)),s.a.createElement("div",null,"Created by Andres Espitia")))},Pe=(a(465),a(189)),ze=a.n(Pe),Re=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=(t[0],t[1]),o=Object(b.b)((function(){return{xys:[0,0,1],config:{mass:1,tension:180,friction:10}}})),c=Object(r.a)(o,2),l=c[0],i=c[1];return s.a.createElement("div",{className:"not-found-page-wrapper"},s.a.createElement(k.a,{avgTypingDelay:60,cursor:{show:!0,blink:!0,element:"",hideWhenDone:!1,hideWhenDoneDelay:1e3}},s.a.createElement("h1",null,"Hmm... it seems like you aren't listening to music.")),s.a.createElement("p",null,"You need to be playing a song on Spotify for something to appear here."),s.a.createElement("div",null,s.a.createElement(b.a.div,{onMouseMove:function(e){var t=e.clientX,a=e.clientY;return i({xys:j(t,a)})},onMouseLeave:function(){i({xys:[0,0,1]}),a(!1)},style:{transform:l.xys.interpolate(O)},onMouseEnter:function(){return a(!0)}},s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.andres-espitia.com/studyfi/"},s.a.createElement("img",{className:"sketchy-spotify",src:ze.a,alt:"spotify-logo"}))))))},Fe=(a(466),function(){var e,t=Object(n.useState)(null),a=Object(r.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)({album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0}),m=Object(r.a)(l,2),d=m[0],f=m[1],g=Object(n.useState)("Paused"),h=Object(r.a)(g,2),E=h[0],y=h[1],b=Object(n.useState)(0),v=Object(r.a)(b,2),N=v[0],A=v[1],k=Object(n.useState)(!0),w=Object(r.a)(k,2),S=w[0],j=w[1];Object(n.useEffect)((function(){var t=p.access_token,a=u()("https://react-chat-app-back-end.herokuapp.com/",{transports:["websocket"]});return a.emit("join",{name:"",room:"",tz:""},(function(){})),a.emit("disconnect"),t&&(c(t),C(t)),e=setInterval((function(){O(t)}),1e3),function(){clearInterval(e)}}),[]);var O=function(e){e&&C(e)},C=function(e){i()({method:"get",url:"https://api.spotify.com/v1/me/player",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;t?(f(t.item),y(t.is_playing),A(t.progress_ms),j(!0)):j(t)}))};return s.a.createElement("div",{className:"App"},!o&&s.a.createElement(Me,null),o&&S&&s.a.createElement(Ie,{item:d,isPlaying:E,progressms:N}),!S&&s.a.createElement(Re,null))});c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Fe,null)),document.getElementById("root"))},63:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="}},[[191,1,2]]]);
//# sourceMappingURL=main.d6a40c69.chunk.js.map