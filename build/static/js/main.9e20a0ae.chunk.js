(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(64)},28:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(8),l=a.n(r),i=(a(28),a(17)),s=a(18),d=a(21),c=a(19),m=a(22),u=a(2),_=a.n(u),f=a(20),h=a.n(f),v=a(3),p=[{schedule_name:"schedule_name_001",playlist_name:"playlist_name_001",available_date_from:"2019-04-01",available_date_to:"2019-04-03",available_time_from:"08:00:00",available_time_to:"20:00:00"},{schedule_name:"schedule_name_002",playlist_name:"playlist_name_002",available_date_from:"2019-04-02",available_date_to:"2019-04-19",available_time_from:"",available_time_to:""},{schedule_name:"schedule_name_003",playlist_name:"playlist_name_003",available_date_from:"2019-02-28",available_date_to:"2019-04-07",available_time_from:"19:00:00",available_time_to:"22:00:00"},{schedule_name:"schedule_name_004",playlist_name:"playlist_name_004",available_date_from:"2019-04-06",available_date_to:"2019-04-10",available_time_from:"",available_time_to:""},{schedule_name:"schedule_name_005",playlist_name:"playlist_name_005",available_date_from:"2019-04-06",available_date_to:"",available_time_from:"14:00:00",available_time_to:"16:00:00"},{schedule_name:"schedule_name_006",playlist_name:"playlist_name_006",available_date_from:"2019-04-16",available_date_to:"2019-04-26",available_time_from:"14:00:00",available_time_to:"16:00:00"}],g=function(e,t){var a=[];Array.isArray(e)?a=e:a.push(e);var o=a.pop();if(o.group==t.group&&o.color==t.color&&"white"==o.color&&o.end.isSame(t.start)){var n=Object(v.a)({},o,{start:o.start,end:t.end});a.push(n)}else a.push(o),a.push(t);return a},b=function(e,t){var a=[];Array.isArray(e)?a=e:a.push(e);var o=[];return a.forEach(function(e){"blue"==e.color&&e.group!=t.group?(t.start.isAfter(e.start)&&t.start.isBefore(e.end)&&t.end.isAfter(e.end)&&(o.push(Object(v.a)({},e,{end:t.start,color:"blue"})),o.push(Object(v.a)({},e,{start:t.start,color:"white"}))),t.start.isAfter(e.start)&&t.end.isBefore(e.end)&&t.end.isBefore(e.end)&&(o.push(Object(v.a)({},e,{end:t.start,color:"blue"})),o.push(Object(v.a)({},e,{start:t.start,end:t.end,color:"white"})),o.push(Object(v.a)({},e,{start:t.end,color:"blue"}))),t.start.isBefore(e.start)&&t.end.isAfter(e.end)&&o.push(Object(v.a)({},e,{color:"white"})),t.end.isAfter(e.start)&&t.end.isBefore(e.end)&&t.start.isBefore(e.start)&&(o.push(Object(v.a)({},e,{end:t.end,color:"white"})),o.push(Object(v.a)({},e,{start:t.end,color:"blue"}))),t.start.isSameOrAfter(e.end)&&o.push(e),t.end.isSameOrBefore(e.start)&&o.push(e),t.start.isSame(e.start)&&t.end.isSame(e.end)&&o.push(Object(v.a)({},e,{color:"white"}))):o.push(e)}),o.push(t),o},y=function(){for(var e=[],t=0;t<p.length;t++)e.push({id:"".concat(t),title:p[t].playlist_name,rightTitle:p[t].schedule_name,rightTitleKey:"rightTitle",tip:"additional information",bgColor:"#f00"});console.log("\u6ca1\u6709\u53bb\u91cd\u7684\uff0c\u64ad\u653e\u65f6\u95f4\u6bb5");var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"2019-04-01",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2019-04-30";return e.map(function(e){var o=e.available_date_from,n=e.available_date_to,r=e.available_time_from,l=e.available_time_to;if(o=o<t?t:o,n=(n=n||"2030-01-01")<a?n:a,r&&l){for(var i=[],s=_()(o);s.isSameOrBefore(_()(n));){console.log("moment(available_date_to):"+_()(n).format());var d=s.format("YYYY-MM-DD"),c=_()("".concat(d," ").concat(r)),m=_()("".concat(d," ").concat(l));i.push([c,m]),s=s.add(1,"day")}return i}var u=_()(o),f=_()(n).add(1,"day"),h=[];return h.push([u,f]),h})}(p,"2019-04-01","2019-05-02");console.log(a),console.log("\u6807\u8bb0\u767d\u84dd\u65f6\u95f4\u6bb5");var o=function(e){return e.map(function(e,t){return e.map(function(e){return{group:t,start:e[0],end:e[1],color:"blue"}})}).flat().reduce(b)}(a);console.log(o);var n=o.reduce(g);console.log(n);var r=[];return n.forEach(function(e,t){var a="".concat(e.start.format(),"--").concat(e.end.format());r.push({id:"".concat(t),group:e.group,title:a,start:e.start,end:e.end,itemProps:{"data-tip":a},bgColor:"blue"==e.color?"#a8c9ff":"#eee"})}),console.log(r),{groups:e,items:r}},T={groupIdKey:"id",groupTitleKey:"title",groupRightTitleKey:"rightTitle",itemIdKey:"id",itemTitleKey:"title",itemDivTitleKey:"title",itemGroupKey:"group",itemTimeStartKey:"start",itemTimeEndKey:"end",groupLabelKey:"title"},w="YYYY-MM-DDTHH:mm:ss",O=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).itemRenderer=function(e){var t=e.item,a=(e.timelineContext,e.itemContext),o=e.getItemProps,r=(0,e.getResizeProps)(),l=r.left,i=r.right,s=a.selected?a.dragging?"red":t.selectedBgColor:t.bgColor,d=a.resizing?"red":t.color;return n.a.createElement("div",o({style:{backgroundColor:s,color:t.color,borderColor:d,borderStyle:"solid",borderWidth:1,borderRadius:4,borderLeftWidth:a.selected?3:1,borderRightWidth:a.selected?3:1},onMouseDown:function(){console.log("on item click",t),console.log("start date: ",_()(t.start).format(w)),console.log("end date  : ",_()(t.end).format(w))}}),a.useResizeHandle?n.a.createElement("div",l):null,n.a.createElement("div",{style:{height:a.dimensions.height,overflow:"hidden",paddingLeft:3,textOverflow:"ellipsis",whiteSpace:"nowrap"}},a.title),a.useResizeHandle?n.a.createElement("div",i):null)},a.handleItemMove=function(e,t,o){var n=a.state,r=n.items,l=n.groups[o];a.setState({items:r.map(function(a){return a.id===e?Object.assign({},a,{start:t,end:t+(a.end-a.start),group:l.id}):a})}),console.log("Moved",e,t,o)},a.handleItemResize=function(e,t,o){var n=a.state.items;a.setState({items:n.map(function(a){return a.id===e?Object.assign({},a,{start:"left"===o?t:a.start,end:"left"===o?a.end:t}):a})}),console.log("Resized",e,t,o)},a.onBoundsChange=function(e,t){console.log("onBoundsChange-----\x3e"),console.log("canvasTimeStart:"+_()(e).format()),console.log("canvasTimeEnd:"+_()(t).format())},a.onTimeChange=function(e,t,a){console.log("onTimeChange-----\x3e"),console.log("visibleTimeStart:"+_()(e).format()),console.log("visibleTimeEnd:"+_()(t).format())};var o=y(),r=o.groups,l=o.items,s=_()().startOf("day").add(10,"day").toDate(),m=_()().startOf("day").add(40,"day").toDate();return a.state={groups:r,items:l,defaultTimeStart:s,defaultTimeEnd:m},console.log("defaultTimeStart: "+s),console.log("defaultTimeEnd: "+m),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.groups,a=e.items,o=e.defaultTimeStart,r=e.defaultTimeEnd;return n.a.createElement(h.a,{groups:t,items:a,keys:T,sidebarContent:n.a.createElement("div",null,"Above The Left"),itemsSorted:!0,itemTouchSendsClick:!1,stackItems:!0,itemHeightRatio:.75,showCursorLine:!0,canMove:!1,canResize:!1,defaultTimeStart:o,defaultTimeEnd:r,itemRenderer:this.itemRenderer,onItemMove:this.handleItemMove,onItemResize:this.handleItemResize,onBoundsChange:this.onBoundsChange})}}]),t}(o.Component),E=(a(63),function(){return n.a.createElement("div",null,n.a.createElement(O,null))});Object(r.render)(n.a.createElement(E,null),document.getElementById("root"));var S=E;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.9e20a0ae.chunk.js.map