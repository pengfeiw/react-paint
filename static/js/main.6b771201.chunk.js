(this["webpackJsonpreact-paint"]=this["webpackJsonpreact-paint"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n,c,i,s,o,r=a(0),l=a(10),u=a.n(l),h=a(14),v=(a(94),a(67)),p=a.n(v),f=a(68),d=a.n(f),O=a(69),j=a.n(O);!function(e){e[e.PEN=0]="PEN",e[e.COLOR_FILL=1]="COLOR_FILL",e[e.TEXT=2]="TEXT",e[e.COLOR_EXTRACT=3]="COLOR_EXTRACT",e[e.ERASER=4]="ERASER",e[e.MAGNIFYING=5]="MAGNIFYING",e[e.SHAPE=6]="SHAPE"}(n||(n={})),function(e){e[e.LINE=0]="LINE",e[e.RECT=1]="RECT",e[e.CIRCLE=2]="CIRCLE",e[e.RHOMBUS=3]="RHOMBUS",e[e.TRIANGLE=4]="TRIANGLE",e[e.PENTAGON=5]="PENTAGON",e[e.SEXANGLE=6]="SEXANGLE",e[e.ARROW_TOP=7]="ARROW_TOP",e[e.ARROW_RIGHT=8]="ARROW_RIGHT",e[e.ARROW_DOWN=9]="ARROW_DOWN",e[e.ARROW_LEFT=10]="ARROW_LEFT",e[e.FOUR_STAR=11]="FOUR_STAR"}(c||(c={})),function(e){e[e.SOLID=0]="SOLID",e[e.DOTTED=1]="DOTTED"}(i||(i={})),function(e){e[e.THIN=0]="THIN",e[e.MIDDLE=1]="MIDDLE",e[e.BOLD=2]="BOLD",e[e.MAXBOLD=3]="MAXBOLD"}(s||(s={})),function(e){e[e.MAIN=0]="MAIN",e[e.SUB=1]="SUB"}(o||(o={}));var b=a(15),x=a(18),y=function(){function e(t){Object(b.a)(this,e),this.eventName=void 0,this.callbacks=void 0,this.eventName=t,this.callbacks=[]}return Object(x.a)(e,[{key:"registerCallback",value:function(e){this.callbacks.push(e)}},{key:"unregisterCallback",value:function(e){var t=this.callbacks.indexOf(e);t>-1&&this.callbacks.splice(t,1)}},{key:"fire",value:function(e){this.callbacks.slice(0).forEach((function(t){t(e)}))}}]),e}(),m=function(){function e(){Object(b.a)(this,e),this.events=void 0,this.events={}}return Object(x.a)(e,[{key:"dispatch",value:function(e,t){var a=this.events[e];a&&a.fire(t)}},{key:"on",value:function(e,t){var a=this.events[e];a||(a=new y(e),this.events[e]=a),a.registerCallback(t)}},{key:"off",value:function(e,t){var a=this.events[e];a&&a.callbacks.indexOf(t)>-1&&(a.unregisterCallback(t),0===a.callbacks.length&&delete this.events[e])}}]),e}(),g=Object(r.createContext)({type:n.PEN,setType:function(e){}}),C=Object(r.createContext)({type:c.LINE,setType:function(e){}}),k=Object(r.createContext)({type:i.SOLID,setType:function(e){}}),D=Object(r.createContext)({type:s.THIN,setType:function(e){}}),E=Object(r.createContext)({mainColor:"black",subColor:"white",activeColor:o.MAIN,setColor:function(e){},setActiveColor:function(e){}}),N=Object(r.createContext)({dispatcher:new m}),T=(a(95),a(3)),R="selected-tool",L=function(e){var t=e.className;return Object(T.jsxs)("div",{className:t?"toolpanel ".concat(t):"toolpanel",children:[Object(T.jsx)(g.Consumer,{children:function(e){var t=e.type,a=e.setType;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"top",children:[Object(T.jsx)("span",{title:"\u94c5\u7b14",children:Object(T.jsx)(p.a,{className:t===n.PEN?"tool-item ".concat(R):"tool-item",onClick:function(){a(n.PEN)}})}),Object(T.jsx)("span",{title:"\u6a61\u76ae\u64e6",children:Object(T.jsx)("img",{src:"./icon/eraser.svg",className:t===n.ERASER?"tool-item ".concat(R):"tool-item",onClick:function(){a(n.ERASER)}})}),Object(T.jsx)("span",{title:"\u586b\u5145",children:Object(T.jsx)(d.a,{className:t===n.COLOR_FILL?"tool-item ".concat(R):"tool-item",onClick:function(){a(n.COLOR_FILL)}})})]}),Object(T.jsx)("div",{className:"down",children:Object(T.jsx)("span",{title:"\u989c\u8272\u9009\u53d6\u5668",children:Object(T.jsx)(j.a,{className:t===n.COLOR_EXTRACT?"tool-item ".concat(R):"tool-item",onClick:function(){a(n.COLOR_EXTRACT)}})})})]})}}),Object(T.jsx)("div",{className:"title",children:"\u5de5\u5177"})]})},I=a(161),w=a(155),S=a(149),A=a(160),M=(a(102),[{type:c.LINE,img:"./icon/shape_line.svg",title:"\u76f4\u7ebf"},{type:c.RECT,img:"./icon/shape_rect.svg",title:"\u77e9\u5f62"},{type:c.CIRCLE,img:"./icon/shape_circle.svg",title:"\u5706\uff08\u692d\u5706\uff09"},{type:c.RHOMBUS,img:"./icon/shape_rhombus.svg",title:"\u83f1\u5f62"},{type:c.TRIANGLE,img:"./icon/shape_triangle.svg",title:"\u4e09\u89d2\u5f62"},{type:c.PENTAGON,img:"./icon/shape_pentagon.svg",title:"\u4e94\u8fb9\u5f62"},{type:c.SEXANGLE,img:"./icon/shape_sexangle.svg",title:"\u516d\u8fb9\u5f62"},{type:c.ARROW_TOP,img:"./icon/shape_arrowtop.svg",title:"\u4e0a\u7bad\u5934"},{type:c.ARROW_RIGHT,img:"./icon/shape_arrowright.svg",title:"\u53f3\u7bad\u5934"},{type:c.ARROW_DOWN,img:"./icon/shape_arrowdown.svg",title:"\u4e0b\u7bad\u5934"},{type:c.ARROW_LEFT,img:"./icon/shape_arrowleft.svg",title:"\u5de6\u7bad\u5934"},{type:c.FOUR_STAR,img:"./icon/shape_fourstar.svg",title:"\u56db\u89d2\u661f"}]),P=function(e){var t=e.className,a=Object(r.useContext)(g),c=Object(r.useContext)(k);return Object(T.jsxs)("div",{className:t?"shapepanel ".concat(t):"shapepanel",children:[Object(T.jsxs)("div",{className:"shape-container",children:[Object(T.jsx)("div",{className:"shape-content",children:Object(T.jsx)(C.Consumer,{children:function(e){var t=e.type,c=e.setType;return M.map((function(e){return Object(T.jsx)("img",{src:e.img,title:e.title,className:t===e.type&&a.type===n.SHAPE?"shape-item ".concat("selected-shape"):"shape-item",onClick:function(){return c(e.type)}},e.img)}))}})}),Object(T.jsx)("div",{className:"shape-style",children:Object(T.jsxs)(S.a,{variant:"outlined",disabled:a.type!==n.SHAPE,children:[Object(T.jsx)(A.a,{children:"\u8f6e\u5ed3"}),Object(T.jsxs)(w.a,{value:c.type,onChange:function(e){return c.setType(e.target.value)},label:"\u8f6e\u5ed3",children:[Object(T.jsx)(I.a,{value:i.SOLID,children:"\u5b9e\u7ebf"}),Object(T.jsx)(I.a,{value:i.DOTTED,children:"\u865a\u7ebf"})]})]})})]}),Object(T.jsx)("div",{className:"title",children:"\u5f62\u72b6"})]})},_=a(153),W=a(156),B=(a(104),[{type:s.THIN,img:"./icon/thickline1.svg",title:"1px"},{type:s.MIDDLE,img:"./icon/thickline2.svg",title:"2px"},{type:s.BOLD,img:"./icon/thickline3.svg",title:"3px"},{type:s.MAXBOLD,img:"./icon/thickline4.svg",title:"4px"}]),F=function(e){var t=e.className,a=Object(r.useState)(!1),n=Object(h.a)(a,2),c=n[0],i=n[1],s=Object(r.useState)(),o=Object(h.a)(s,2),l=o[0],u=o[1],v=Object(r.useContext)(D);return Object(T.jsxs)("div",{className:t?"thickselector ".concat(t):"thickselector",children:[Object(T.jsx)("img",{className:"thickline",src:"./icon/thickness.svg",onClick:function(e){u(e.currentTarget),i(!0)}}),Object(T.jsx)(W.a,{open:c,onClose:function(){i(!1)},anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:B.map((function(e){return Object(T.jsx)("img",{className:e.type===v.type?"thick-item ".concat("selected-item"):"thick-item",src:e.img,title:e.title,onClick:function(){v.setType(e.type),i(!1)}},e.img)}))}),Object(T.jsx)("div",{className:"title",children:"\u7c97\u7ec6"})]})},H=a(61),G=(a(106),[{title:"\u9ed1\u8272",value:"#000000"},{title:"\u7070\u8272-50%",value:"#7f7f7f"},{title:"\u6df1\u7ea2\u8272",value:"#880015"},{title:"\u7ea2\u8272",value:"#ed1c24"},{title:"\u6a59\u8272",value:"#ff7f27"},{title:"\u9ec4\u8272",value:"#fff200"},{title:"\u7eff\u8272",value:"#22b14c"},{title:"\u9752\u7eff\u8272",value:"#00a2e8"},{title:"\u84dd\u9752\u8272",value:"#3f48cc"},{title:"\u7d2b\u8272",value:"#a349a4"},{title:"\u767d\u8272",value:"#ffffff"},{title:"\u7070\u8272-25%",value:"#c3c3c3"},{title:"\u8910\u8272",value:"#b97a57"},{title:"\u73ab\u7470\u8272",value:"#ffaec9"},{title:"\u91d1\u8272",value:"#ffc90e"},{title:"\u6d45\u9ec4\u8272",value:"#efe4b0"},{title:"\u9178\u6a59\u8272",value:"#b5e61d"},{title:"\u9752\u7eff\u8272",value:"#808000"},{title:"\u6de1\u9752\u84dd\u8272",value:"#99d9ea"},{title:"\u84dd\u7070\u8272",value:"#7092be"},{title:"\u6de1\u7d2b\u8272",value:"#c8bfe7"}]),U="active-color-type",X=function(e){var t=e.className,a=Object(r.useState)(Object(H.b)("black")),n=Object(h.a)(a,2),c=n[0],i=n[1],s=Object(r.useContext)(E),l=s.activeColor;return Object(r.useEffect)((function(){s.setColor("#".concat(c.hex))}),[c]),Object(T.jsxs)("div",{className:t?"colorpanel ".concat(t):"colorpanel",children:[Object(T.jsxs)("div",{className:"content",children:[Object(T.jsxs)("div",{className:"color-result",children:[Object(T.jsxs)("div",{onClick:function(){return s.setActiveColor(o.MAIN)},className:l===o.MAIN?"main-color ".concat(U):"main-color",children:[Object(T.jsx)("div",{className:"color-box1",style:{backgroundColor:s.mainColor}}),Object(T.jsx)("div",{children:"\u989c\u82721"})]}),Object(T.jsxs)("div",{onClick:function(){return s.setActiveColor(o.SUB)},className:l===o.SUB?"sub-color ".concat(U):"sub-color",children:[Object(T.jsx)("div",{className:"color-box2",style:{backgroundColor:s.subColor}}),Object(T.jsx)("div",{children:"\u989c\u82722"})]})]}),Object(T.jsx)("div",{className:"color-template",children:G.map((function(e){return Object(T.jsx)("div",{onClick:function(){return s.setColor(e.value)},className:"color-template-item",style:{backgroundColor:e.value}},e.value)}))}),Object(T.jsxs)("div",{className:"color-picker",children:[Object(T.jsx)(H.a,{value:c,hideTextfield:!0,onChange:function(e){return i(e)}}),Object(T.jsx)("div",{className:"color-picker-title",children:"\u7f16\u8f91\u989c\u8272"})]})]}),Object(T.jsx)("div",{className:"title",children:"\u989c\u8272"})]})},Y=a(71),J=a.n(Y),z=a(72),q=a.n(z),K=a(73),Q=a.n(K),V=(a(107),"clear"),Z="redo",$="undo",ee=function(){var e=Object(r.useContext)(N);return Object(T.jsxs)("div",{className:"otherOperator",children:[Object(T.jsxs)("div",{className:"operator-content",children:[Object(T.jsx)("span",{title:"\u6e05\u7a7a\u753b\u5e03",className:"operator-item",children:Object(T.jsx)(J.a,{onClick:function(){e.dispatcher.dispatch(V)}})}),Object(T.jsx)("span",{title:"\u540e\u9000",className:"operator-item",children:Object(T.jsx)(q.a,{onClick:function(){e.dispatcher.dispatch($)}})}),Object(T.jsx)("span",{title:"\u524d\u8fdb",className:"operator-item",children:Object(T.jsx)(Q.a,{onClick:function(){e.dispatcher.dispatch(Z)}})})]}),Object(T.jsx)("span",{className:"title",children:"\u5176\u4ed6"})]})},te=function(){return Object(T.jsxs)("div",{className:"toolbar",children:[Object(T.jsx)(L,{className:"toolbar-item"}),Object(T.jsx)(_.a,{className:"divider",orientation:"vertical",flexItem:!0}),Object(T.jsx)(P,{className:"toolbar-item"}),Object(T.jsx)(_.a,{className:"divider",orientation:"vertical",flexItem:!0}),Object(T.jsx)(F,{className:"toolbar-item"}),Object(T.jsx)(_.a,{className:"divider",orientation:"vertical",flexItem:!0}),Object(T.jsx)(X,{className:"toolbar-item"}),Object(T.jsx)(_.a,{className:"divider",orientation:"vertical",flexItem:!0}),Object(T.jsx)(ee,{}),Object(T.jsx)(_.a,{className:"divider",orientation:"vertical",flexItem:!0})]})},ae=(a(108),function(e,t){var a=e.getBoundingClientRect();return{x:t.clientX-a.left,y:t.clientY-a.top}}),ne=function(e,t){return{x:t.touches[0].pageX-e.offsetLeft,y:t.touches[0].pageY-e.offsetTop}},ce=function(){function e(){Object(b.a)(this,e)}return Object(x.a)(e,[{key:"onMouseDown",value:function(e){}},{key:"onMouseMove",value:function(e){}},{key:"onMouseUp",value:function(e){}},{key:"onTouchStart",value:function(e){}},{key:"onTouchMove",value:function(e){}},{key:"onTouchEnd",value:function(e){}}]),e}();ce.lineWidthFactor=1,ce.mainColor="black",ce.subColor="white",ce.ctx=void 0;var ie=a(27),se=a(25),oe=function(e){Object(ie.a)(a,e);var t=Object(se.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).lineWidthBase=1,e.drawColorType=o.MAIN,e.mouseDown=!1,e.previousPos={x:0,y:0},e}return Object(x.a)(a,[{key:"operateStart",value:function(e){ce.ctx&&(this.mouseDown=!0,ce.ctx.lineWidth=ce.lineWidthFactor*this.lineWidthBase,ce.ctx.strokeStyle=this.drawColorType===o.MAIN?ce.mainColor:ce.subColor,ce.ctx.lineJoin="round",ce.ctx.lineCap="round",ce.ctx.beginPath(),this.previousPos=e)}},{key:"operateMove",value:function(e){if(this.mouseDown){ce.ctx.moveTo(this.previousPos.x,this.previousPos.y);var t=.5*(this.previousPos.x+e.x),a=.5*(this.previousPos.y+e.y);ce.ctx.quadraticCurveTo(t,a,e.x,e.y),ce.ctx.stroke(),this.previousPos=e}}},{key:"operateEnd",value:function(){this.mouseDown&&(ce.ctx.closePath(),this.mouseDown=!1)}},{key:"onMouseDown",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateStart(t)}},{key:"onMouseUp",value:function(e){e.preventDefault(),this.operateEnd()}},{key:"onMouseMove",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateMove(t)}},{key:"onTouchStart",value:function(e){e.preventDefault();var t=ne(e.target,e);this.operateStart(t)}},{key:"onTouchMove",value:function(e){e.preventDefault();var t=ne(e.target,e);this.operateMove(t)}},{key:"onTouchEnd",value:function(e){e.preventDefault(),this.operateEnd()}}]),a}(ce),re=oe,le=function(e){Object(ie.a)(a,e);var t=Object(se.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).lineWidthBase=3,e.drawColorType=o.SUB,e}return a}(re),ue=le,he=function(e){Object(ie.a)(a,e);var t=Object(se.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this)).setColor=void 0,n.setColor=e,n}return Object(x.a)(a,[{key:"operateStart",value:function(e){var t=function(e,t,a){var n=e.getImageData(t,a,1,1).data;return"#"+("000000"+function(e,t,a){if(e>255||t>255||a>255)throw"Invalid color component";return(e<<16|t<<8|a).toString(16)}(n[0],n[1],n[2])).slice(-6)}(ce.ctx,e.x,e.y);this.setColor(t)}},{key:"onMouseDown",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateStart(t)}},{key:"onTouchStart",value:function(e){e.preventDefault();var t=e.target,a=ne(t,e);this.operateStart(a)}}]),a}(ce),ve=a(74),pe=a.n(ve),fe=function(e,t,a){var n=e.data[t],c=e.data[t+1],i=e.data[t+2];return n===a[0]&&c===a[1]&&i===a[2]},de=function(e,t,a){return e.data[t]=a[0],e.data[t+1]=a[1],e.data[t+2]=a[2],e},Oe=function(e){Object(ie.a)(a,e);var t=Object(se.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"operateStart",value:function(e){var t=new pe.a(ce.mainColor);!function(e,t,a,n){var c=[[t,a]],i=e.canvas.width,s=e.canvas.height,o=4*(a*i+t),r=e.getImageData(0,0,i,s),l=[r.data[o],r.data[o+1],r.data[o+2]];if(l[0]!==n[0]||l[1]!==n[1]||l[2]!==n[2]){for(;c.length>0;){for(var u=c.pop(),h=u[0],v=u[1],p=4*(v*i+h);v-- >=0&&fe(r,p,l);)p-=4*i;p+=4*i,++v;for(var f=!1,d=!1;v++<s-1&&fe(r,p,l);)de(r,p,n),h>0&&(fe(r,p-4,l)?f||(c.push([h-1,v]),f=!0):f&&(f=!1)),h<i-1&&(fe(r,p+4,l)?d||(c.push([h+1,v]),d=!0):d&&(d=!1)),p+=4*i}e.putImageData(r,0,0)}}(ce.ctx,e.x,e.y,[t.red(),t.green(),t.blue()])}},{key:"onMouseDown",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateStart(t)}},{key:"onTouchStart",value:function(e){e.preventDefault();var t=ne(e.target,e);this.operateStart(t)}}]),a}(ce),je=Oe,be=function(e){Object(ie.a)(a,e);var t=Object(se.a)(a);function a(e){var n,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(b.a)(this,a),(n=t.call(this)).type=void 0,n.saveImageData=void 0,n.isMouseDown=!1,n.mouseDownPos={x:0,y:0},n.lineWidthBase=1,n.isDashed=!1,n.dashLineStyle=[10,10],n.type=e,n.isDashed=c,n}return Object(x.a)(a,[{key:"setType",value:function(e){this.type=e}},{key:"operateStart",value:function(e){this.saveImageData=ce.ctx.getImageData(0,0,ce.ctx.canvas.width,ce.ctx.canvas.height),this.isMouseDown=!0,this.mouseDownPos=e}},{key:"operateMove",value:function(e){if(this.isMouseDown&&this.saveImageData){var t=ce.ctx;t.clearRect(0,0,ce.ctx.canvas.width,ce.ctx.canvas.height),t.putImageData(this.saveImageData,0,0);var a=function(e,t,a,n,i){var s=[],o=.5*(t+n),r=.5*(a+i);switch(e){case c.LINE:s.push({x:t,y:a}),s.push({x:n,y:i});break;case c.RECT:s.push({x:t,y:a}),s.push({x:n,y:a}),s.push({x:n,y:i}),s.push({x:t,y:i});break;case c.CIRCLE:s.push({x:.5*(t+n),y:.5*(a+i)});break;case c.RHOMBUS:s.push({x:o,y:a}),s.push({x:n,y:r}),s.push({x:o,y:i}),s.push({x:t,y:r});break;case c.TRIANGLE:s.push({x:o,y:a}),s.push({x:t,y:i}),s.push({x:n,y:i});break;case c.PENTAGON:s.push({x:o,y:a}),s.push({x:n,y:r}),s.push({x:.5*(o+n),y:i}),s.push({x:.5*(o+t),y:i}),s.push({x:t,y:r});break;case c.SEXANGLE:s.push({x:o,y:a}),s.push({x:n,y:.5*(a+r)}),s.push({x:n,y:.5*(i+r)}),s.push({x:o,y:i}),s.push({x:t,y:.5*(i+r)}),s.push({x:t,y:.5*(a+r)});break;case c.ARROW_TOP:s.push({x:o,y:a}),s.push({x:n,y:r}),s.push({x:n-1/3*(n-t),y:r}),s.push({x:n-1/3*(n-t),y:i}),s.push({x:t+1/3*(n-t),y:i}),s.push({x:t+1/3*(n-t),y:r}),s.push({x:t,y:r});break;case c.ARROW_RIGHT:s.push({x:n,y:r}),s.push({x:o,y:i}),s.push({x:o,y:i-1/3*(i-a)}),s.push({x:t,y:i-1/3*(i-a)}),s.push({x:t,y:a+1/3*(i-a)}),s.push({x:o,y:a+1/3*(i-a)}),s.push({x:o,y:a});break;case c.ARROW_DOWN:s.push({x:o,y:i}),s.push({x:t,y:r}),s.push({x:t+1/3*(n-t),y:r}),s.push({x:t+1/3*(n-t),y:a}),s.push({x:n-1/3*(n-t),y:a}),s.push({x:n-1/3*(n-t),y:r}),s.push({x:n,y:r});break;case c.ARROW_LEFT:s.push({x:t,y:r}),s.push({x:o,y:a}),s.push({x:o,y:a+1/3*(i-a)}),s.push({x:n,y:a+1/3*(i-a)}),s.push({x:n,y:i-1/3*(i-a)}),s.push({x:o,y:i-1/3*(i-a)}),s.push({x:o,y:i});break;case c.FOUR_STAR:var l=.125*(n-t),u=.125*(i-a);s.push({x:o,y:a}),s.push({x:o+l,y:r-u}),s.push({x:n,y:r}),s.push({x:o+l,y:r+u}),s.push({x:o,y:i}),s.push({x:o-l,y:r+u}),s.push({x:t,y:r}),s.push({x:o-l,y:r-u})}return s}(this.type,this.mouseDownPos.x,this.mouseDownPos.y,e.x,e.y);if(t.strokeStyle=ce.mainColor,t.lineWidth=ce.lineWidthFactor*this.lineWidthBase,t.fillStyle=ce.subColor,this.isDashed&&t.setLineDash(this.dashLineStyle),this.type===c.CIRCLE)t.beginPath(),t.ellipse(a[0].x,a[0].y,Math.abs(.5*(e.x-this.mouseDownPos.x)),Math.abs(.5*(e.y-this.mouseDownPos.y)),0,0,2*Math.PI),t.stroke();else{t.beginPath(),t.moveTo(a[0].x,a[0].y);for(var n=1;n<a.length;n++)t.lineTo(a[n].x,a[n].y);t.closePath(),t.stroke()}t.setLineDash([])}}},{key:"operateEnd",value:function(){this.isMouseDown=!1,this.saveImageData=void 0}},{key:"onMouseDown",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateStart(t)}},{key:"onMouseMove",value:function(e){e.preventDefault();var t=ae(ce.ctx.canvas,e);this.operateMove(t)}},{key:"onMouseUp",value:function(e){e.preventDefault(),this.operateEnd()}},{key:"onTouchStart",value:function(e){e.preventDefault();var t=e.target,a=ne(t,e);this.operateStart(a)}},{key:"onTouchMove",value:function(e){e.preventDefault();var t=e.target,a=ne(t,e);this.operateMove(a)}},{key:"onTouchEnd",value:function(e){e.preventDefault(),this.operateEnd()}}]),a}(ce),xe=be,ye=function(){function e(){Object(b.a)(this,e),this.imageData1=[],this.imageData2=[]}return Object(x.a)(e,[{key:"add",value:function(e){this.imageData1.push(e)}},{key:"current",get:function(){return this.imageData1[this.imageData1.length-1]}},{key:"back",value:function(){if(this.imageData1.length>1){var e=this.imageData1.pop();this.imageData2.push(e)}return this.imageData1.length>0?this.imageData1[this.imageData1.length-1]:null}},{key:"forward",value:function(){if(this.imageData2.length>0){var e=this.imageData2.pop();this.imageData1.push(e)}return this.imageData1.length>0?this.imageData1[this.imageData1.length-1]:null}}]),e}(),me=function(e){var t=e.toolType,a=e.lineWidthType,c=e.mainColor,o=e.subColor,l=e.setColor,u=e.shapeType,v=e.shapeOutlineType,p=Object(r.useState)(),f=Object(h.a)(p,2),d=f[0],O=f[1],j=Object(r.useRef)(null),b=Object(r.useContext)(N),x=Object(r.useState)(new ye),y=Object(h.a)(x,1)[0];Object(r.useEffect)((function(){switch(t){case n.PEN:O(new re);break;case n.ERASER:O(new ue);break;case n.COLOR_EXTRACT:O(new he(l));break;case n.COLOR_FILL:O(new je);break;case n.SHAPE:O(new xe(u,v===i.DOTTED))}}),[t,u]),Object(r.useEffect)((function(){d instanceof xe&&(d.isDashed=v===i.DOTTED)}),[v]),Object(r.useEffect)((function(){switch(a){case s.THIN:ce.lineWidthFactor=1;break;case s.MIDDLE:ce.lineWidthFactor=2;break;case s.BOLD:ce.lineWidthFactor=3;break;case s.MAXBOLD:ce.lineWidthFactor=4}}),[a]),Object(r.useEffect)((function(){ce.mainColor=c}),[c]),Object(r.useEffect)((function(){ce.subColor=o}),[o]),Object(r.useEffect)((function(){var e=j.current;if(e){e.height=e.clientHeight,e.width=e.clientWidth,ce.ctx=e.getContext("2d");var t=e.getContext("2d");t&&(t.fillStyle="white",t.fillRect(0,0,e.width,e.height),y.add(t.getImageData(0,0,e.width,e.height)));var a=b.dispatcher,n=function(){var t=e.getContext("2d");t&&(t.fillStyle="white",t.fillRect(0,0,e.width,e.height))};a.on(V,n);a.on(Z,(function(){var t=e.getContext("2d");if(t){var a=y.forward();a&&(t.clearRect(0,0,e.width,e.height),t.putImageData(a,0,0))}}));return a.on($,(function(){var t=e.getContext("2d");if(t){var a=y.back();a&&(t.clearRect(0,0,e.width,e.height),t.putImageData(a,0,0))}})),window.addEventListener("resize",(function(){var t=ce.ctx.getImageData(0,0,e.width,e.height);e.height=e.clientHeight,e.width=e.clientWidth,ce.ctx=e.getContext("2d"),ce.ctx.fillStyle="white",ce.ctx.fillRect(0,0,e.width,e.height),ce.ctx.putImageData(t,0,0)})),function(){a.off(V,n)}}}),[j]);var m=function(e){d&&d.onMouseDown(e)},g=function(e){d&&d.onMouseMove(e)},C=function(e){d&&(d.onMouseUp(e),y.add(ce.ctx.getImageData(0,0,ce.ctx.canvas.width,ce.ctx.canvas.height)))},k=function(e){d&&d.onTouchStart(e)},D=function(e){d&&d.onTouchMove(e)},E=function(e){d&&d.onTouchEnd(e),y.add(ce.ctx.getImageData(0,0,ce.ctx.canvas.width,ce.ctx.canvas.height))};return Object(r.useEffect)((function(){var e=j.current;if(e)return e.addEventListener("mousedown",m),e.addEventListener("mousemove",g),e.addEventListener("mouseup",C),e.addEventListener("touchstart",k),e.addEventListener("touchmove",D),e.addEventListener("touchend",E),function(){e.removeEventListener("mousedown",m),e.removeEventListener("mousemove",g),e.removeEventListener("mouseup",C),e.removeEventListener("touchstart",k),e.removeEventListener("touchmove",D),e.removeEventListener("touchend",E)}}),[j,m,g,C]),Object(T.jsx)("canvas",{className:"canvas",ref:j})};a(116);var ge=function(){var e=Object(r.useState)(n.PEN),t=Object(h.a)(e,2),a=t[0],l=t[1],u=Object(r.useState)(c.LINE),v=Object(h.a)(u,2),p=v[0],f=v[1],d=Object(r.useState)(i.SOLID),O=Object(h.a)(d,2),j=O[0],b=O[1],x=Object(r.useState)(s.THIN),y=Object(h.a)(x,2),R=y[0],L=y[1],I=Object(r.useState)(o.MAIN),w=Object(h.a)(I,2),S=w[0],A=w[1],M=Object(r.useState)("black"),P=Object(h.a)(M,2),_=P[0],W=P[1],B=Object(r.useState)("white"),F=Object(h.a)(B,2),H=F[0],G=F[1],U=Object(r.useState)(new m),X=Object(h.a)(U,1)[0],Y=function(e){S===o.MAIN?W(e):G(e)};return Object(T.jsx)(g.Provider,{value:{type:a,setType:l},children:Object(T.jsx)(C.Provider,{value:{type:p,setType:function(e){l(n.SHAPE),f(e)}},children:Object(T.jsx)(k.Provider,{value:{type:j,setType:b},children:Object(T.jsx)(D.Provider,{value:{type:R,setType:L},children:Object(T.jsx)(N.Provider,{value:{dispatcher:X},children:Object(T.jsx)(E.Provider,{value:{mainColor:_,subColor:H,activeColor:S,setColor:Y,setActiveColor:A},children:Object(T.jsxs)("div",{className:"app",children:[Object(T.jsx)(te,{}),Object(T.jsx)(me,{toolType:a,shapeType:p,shapeOutlineType:j,mainColor:_,subColor:H,lineWidthType:R,setColor:Y})]})})})})})})})};u.a.render(Object(T.jsx)(ge,{}),document.getElementById("root"))},94:function(e,t,a){},95:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.6b771201.chunk.js.map