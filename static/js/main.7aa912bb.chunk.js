(this.webpackJsonpannotate=this.webpackJsonpannotate||[]).push([[0],{128:function(e,t,a){e.exports=a(218)},133:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),s=a.n(r),l=(a(133),a(123)),c=a(106),o=a(107),h=a(124),u=a(108),m=a(23),d=a(125),y=(a(134),a(222)),g=a(225),v=a(46),p=a(221),E=a(47),b=a(25),L=a(223),f=a(224),k=a(220),T=a(11),C=a(109),x=y.a.Title,w=g.a.TextArea,j={color:"rgba(0, 0, 0, 0.5)"},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={source:"http://streaming.tdiradio.com:8000/house.mp3",duration:0,rate:1,currentLine:0,lyrics:[],songName:"",lineActive:!1,completed:!1},a.mark=a.mark.bind(Object(m.a)(a)),a.prev=a.prev.bind(Object(m.a)(a)),a.validIndex=a.validIndex.bind(Object(m.a)(a)),a.annotateElement=a.annotateElement.bind(Object(m.a)(a)),a.reset=a.reset.bind(Object(m.a)(a)),a.silent=a.silent.bind(Object(m.a)(a)),a.onChange=a.onChange.bind(Object(m.a)(a)),a.textChange=a.textChange.bind(Object(m.a)(a)),a.changeRate=a.changeRate.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onChange",value:function(e){var t=e.target.files[0],a=URL.createObjectURL(t);this.setState({source:a,songName:t.name})}},{key:"mark",value:function(){console.log(this.state.lyrics);var e=Math.floor(1e3*this.audio.currentTime),t=this.state.currentLine,a=!1,n=!1,i=this.state.lyrics;this.state.lineActive&&this.state.currentLine>0&&(i[this.state.currentLine-1].endTime=Math.max(i[this.state.currentLine-1].startTime,e-1),n=this.state.currentLine==this.state.lyrics.length),this.state.currentLine<this.state.lyrics.length&&(i[this.state.currentLine].startTime=e,i[this.state.currentLine].endTime=e,t++,a=!0),this.setState({lyrics:i,currentLine:t,lineActive:a,completed:n})}},{key:"silent",value:function(){var e;(e=console).log.apply(e,Object(l.a)(this.state.lyrics));var t=Math.floor(1e3*this.audio.currentTime),a=!1,n=this.state.lyrics;this.state.lineActive&&this.state.currentLine>0&&(n[this.state.currentLine-1].endTime=Math.max(n[this.state.currentLine-1].startTime,t),a=this.state.currentLine==this.state.lyrics.length),this.setState({lyrics:n,lineActive:!1,completed:a})}},{key:"reset",value:function(){for(var e=this.state.lyrics,t=0;t<e.length;t++)e[t].startTime=0,e[t].endTime=0;this.audio.pause(),this.audio.currentTime=0,this.setState({lyrics:e,currentLine:0,completed:!1,lineActive:!1})}},{key:"textChange",value:function(e){var t=e.target.value.split("\n").map((function(e){return{line:e,startTime:0,endTime:0}}));this.setState({lyrics:t})}},{key:"changeRate",value:function(e){this.setState({rate:e}),this.audio.playbackRate=e}},{key:"prev",value:function(){var e=this.state.lyrics,t=this.state.currentLine;this.state.currentLine<e.length&&(e[t].startTime=0,e[t].endTime=0),e[--t].startTime=0,e[t].endTime=0,this.audio.currentTime-=3,this.setState({lyrics:e,currentLine:t,lineActive:!1,completed:!1})}},{key:"validIndex",value:function(e){var t=e!=this.state.currentLine,a=this.state.lyrics.length>0;return a&=e>=0,(a&=e<this.state.lyrics.length)?i.a.createElement(x,{style:t?j:{},onClick:t?function(){}:this.mark},this.state.lyrics[e].line):null}},{key:"annotateElement",value:function(){return 0==this.state.lyrics.length?i.a.createElement(x,null,"Please add lyrics"):this.state.completed?i.a.createElement(x,null,"Lyrics Completed!"):i.a.createElement("div",null,this.validIndex(this.state.currentLine-1,!0),this.state.currentLine<this.state.lyrics.length&&this.state.currentLine>0&&i.a.createElement(v.a,{type:"dashed",onClick:this.silent,disabled:0===this.state.lyrics.length},"Silence"),this.validIndex(this.state.currentLine),i.a.createElement(v.a,{type:"dashed",onClick:this.silent,disabled:0===this.state.lyrics.length},"Silence"),this.validIndex(this.state.currentLine+1,!0))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p.a,{title:"Input",style:{width:"80%",margin:"2em auto"},hide:!0},i.a.createElement("center",null,i.a.createElement("div",null,i.a.createElement(w,{onChange:this.textChange,placeholder:"Enter Lyrics",autoSize:!0})),i.a.createElement("input",{type:"file",name:"file",onChange:this.onChange}))),i.a.createElement(p.a,{title:"Audio",style:{width:"80%",margin:"2em auto"}},i.a.createElement("center",null,i.a.createElement("audio",{ref:function(t){return e.audio=t},src:this.state.source,style:{width:"80%",margin:"auto"},controls:!0},"Test")),i.a.createElement(p.a,{title:"Rate",type:"inner",style:{width:"80%",margin:"auto"}},i.a.createElement(E.a,null,i.a.createElement(b.a,{span:16},i.a.createElement(L.a,{min:.5,max:2,step:.01,marks:{1:"1.0"},value:this.state.rate,onChange:this.changeRate})),i.a.createElement(b.a,{span:4},i.a.createElement(f.a,{min:.5,max:2,step:.1,style:{margin:16},value:this.state.rate,onChange:this.changeRate}))))),i.a.createElement(p.a,{title:"Lyrics",style:{width:"80%",margin:"1em auto"}},i.a.createElement("center",null,this.annotateElement()),i.a.createElement("center",null,i.a.createElement(v.a,{style:{margin:"1em"},type:"primary",onClick:this.mark,disabled:0===this.state.lyrics.length},"Mark"),i.a.createElement(k.a,{placement:"bottom",title:"Are you sure you want to reset? You will lose all annotation",onConfirm:this.reset,okText:"Yes",cancelText:"No"},i.a.createElement(v.a,{style:{margin:"1em"},type:"danger",disabled:0===this.state.lyrics.length},"Reset")),i.a.createElement(v.a,{style:{margin:"1em"},type:"primary",onClick:this.prev,disabled:0===this.state.lyrics.length||0===this.state.currentLine},i.a.createElement(T.a,{type:"left"})," Previous Line"))),i.a.createElement("center",{style:{margin_top:30}},i.a.createElement(C.CSVLink,{data:this.state.lyrics,filename:"".concat(this.state.songName,".csv"),style:{color:"white",margin:"auto"}},i.a.createElement(v.a,{type:"primary",shape:"round",icon:"download",size:"large"},"Save File"))))}}]),t}(n.Component);a(217);var S=function(){return i.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[128,1,2]]]);
//# sourceMappingURL=main.7aa912bb.chunk.js.map