(this.webpackJsonpmemodemo=this.webpackJsonpmemodemo||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/applauseSound.816eb7f6.mp3"},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),c=(a(17),a(1)),l=a(2),o=a(6),u=a(4),p=a(3),m=(a(18),a(5)),h=a.n(m),d=a(7),f=a(8),v=a.n(f),b=a(11),g=a.n(b),E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).match=function(e){e.preventDefault(),n.props.onClick(n.props.val,n.props.index)},n.state={showVal:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return"false"===this.props.showVal?r.a.createElement("div",{className:"flip-card off",onClick:function(e){this.match(e)}.bind(this)},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("h1",null,"?")),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("h1",null,this.props.val)))):r.a.createElement("div",{className:"flip-card on"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("h1",null,this.props.val)),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("h1",null,this.props.val))))}}]),a}(r.a.Component);a(20);function k(e,t){if(e.length!==t.length)return!1;for(var a=e.length;a--;)if(e[a]!==t[a])return!1;return!0}function y(e){return new Promise((function(t){return setTimeout(t,e)}))}var w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).renderTiles=function(){for(var e=[],t=0;t<n.props.size;t++){for(var a="row".concat(t),i=[],s=0;s<n.props.size;s++){var c="cell".concat(t,"-").concat(s);if(void 0===n.props.boardVals[t][s])i.push(r.a.createElement("td",{key:c,id:c}));else{var l="false";(null!==n.state.matching&&k([t,s],n.state.matching[1])||null!==n.state.matching1&&k([t,s],n.state.matching1[1])||n.state.matched.has(n.props.boardVals[t][s]))&&(l="true"),i.push(r.a.createElement("td",{key:c,id:c},r.a.createElement(E,{val:n.props.boardVals[t][s],index:[t,s],onClick:n.clickTile,showVal:l})))}}e.push(r.a.createElement("tr",{key:t,id:a},i))}n.state.rows!==e&&n.setState({rows:e})},n.checkMatch=function(){var e=Object(d.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.matched.has(t)){e.next=5;break}return console.log("already matched"),e.abrupt("return");case 5:if(null!==n.state.matching){e.next=10;break}return n.setState({matching:[t,a]},(function(){n.renderTiles()})),e.abrupt("return");case 10:if(a!==n.state.matching[1]){e.next=15;break}return console.log("same clicked"),e.abrupt("return");case 15:if(n.props.matches[n.state.matching[0]]!==t&&n.props.matches[t]!==n.state.matching[0]){e.next=20;break}return n.setState({matched:n.state.matched.add(t).add(n.state.matching[0]),matching:null},(function(){n.renderTiles()})),e.abrupt("return");case 20:return n.setState({matching1:[t,a]},(function(){n.renderTiles()})),e.next=23,y(1e3);case 23:return n.setState({matching:null,matching1:null},(function(){n.renderTiles()})),e.abrupt("return","wrong tile");case 25:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.clickTile=function(){var e=Object(d.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.flipping){e.next=2;break}return e.abrupt("return");case 2:n.setState({flipping:!0},Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.checkMatch(t,a);case 2:return e.next=4,y(600);case 4:n.setState({flipping:!1});case 5:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={rows:[],matched:new Set,matching:null,matching1:null,flipping:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderTiles()}},{key:"componentDidUpdate",value:function(e,t,a){4===this.state.matched.size&&new Audio(g.a).play();e.boardVals!==this.props.boardVals&&(this.renderTiles(),this.setState({matched:new Set,matching:null,matching1:null}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 board"},r.a.createElement("table",{id:"simple-board",style:{display:"grid"}},r.a.createElement("tbody",{style:{display:"grid"}},this.state.rows)))))}}]),a}(r.a.Component);var S=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(c.a)(this,a);var r={"Yalla!":"Let's go!",Habibi:"Dear",Salam:"Peace",Walad:"Boy",Binnit:"Girl",Wahid:"One",Asfi:"Sorry","Sabah heir":"Good morning",A:"B"};(n=t.call(this)).state={inputs:r};var i=n.generateBoardState(n.state.inputs),s=i[0],l=i[1];return n.updateInputs=n.updateInputs.bind(Object(o.a)(n)),n.state={boardState:s,matches:l,inputs:r},n}return Object(l.a)(a,[{key:"updateInputs",value:function(e){this.setState({inputs:e})}},{key:"componentDidUpdate",value:function(e,t,a){if(t.inputs!==this.state.inputs){console.log("SUER UPDATE");var n=this.generateBoardState(this.state.inputs),r=n[0],i=n[1];this.updateInputs=this.updateInputs.bind(this),this.setState({boardState:r,matches:i})}}},{key:"generateBoardState",value:function(e){var t=[];for(var a in e)t.push(a),t.push(e[a]);var n=S(t);console.log("vals2",t),console.log(n);for(var r=Math.ceil(Math.sqrt(n.length)),i=new Array(r),s=0;s<r;s++){i[s]=new Array(r);for(var c=0;c<r;c++)null!==n[s*r+c]&&(i[s][c]=n[s*r+c])}return[i,e]}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{boardVals:this.state.boardState,matches:this.state.matches,size:this.state.boardState.length}),r.a.createElement(j,{update:this.updateInputs,inputs:this.state.inputs}))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={newInputs:{"Yalla!":"Let's go!",Habibi:"Dear",Salam:"Peace",Walad:"Boy",Binnit:"Girl",Wahid:"One",Asfi:"Sorry","Sabah heir":"Good morning",A:"B"}},n}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e,t,a){return!1}},{key:"render",value:function(){var e=this,t=JSON.stringify(this.props.inputs);return console.log("testing",t),r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("h4",null,r.a.createElement("u",null,"Custom input")),r.a.createElement("textarea",{style:{height:"6rem"},id:"inputBox",placeholder:t}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"0px",marginTop:"0.5rem",marginBottom:"0.5rem"}},r.a.createElement("button",{onClick:function(){return e.props.update(JSON.parse(v()("#inputBox").val()))}},"Update")))}}]),a}(r.a.Component);var x=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App",style:{textAlign:"center",width:"50%",margin:"0 auto"}},r.a.createElement("h1",null,"MemoDemo"),r.a.createElement("br",null),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5fdd80bf.chunk.js.map