(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,a){},125:function(e,a,t){},128:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=(t(86),t(53)),i=t(23),m=(t(87),t(16)),u=t(7),s=t(75),E=t.n(s),p=t(150),f=t(157),d=t(158),g=t(159),v=t(129);function h(e){return r.a.createElement(v.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var b=Object(p.a)({profitBTCContext:{flex:1}});function T(e){var a=b();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,"Session Profit/Loss"),r.a.createElement(v.a,{component:"p",variant:"h4"},"$"+e.data.profitUSD.toString()),r.a.createElement(v.a,{color:"textSecondary",className:a.profitBTCContext},e.data.profitBTC.toString()+" BTC"))}function S(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,"Session Leverage"),r.a.createElement(v.a,{component:"p",variant:"h4"},e.data))}var C=t(156),y=t(151),O=t(155),x=t(154),j=t(152),B=t(153);function P(e,a,t,n,r,l,c){return{id:e,datetime:a,instrument:t,side:n,amount:r,price:l,transactionFee:c}}var N=[P(74956848,"2019-08-04 08:00:00 GMT","BTC-PERPETUAL","Close Sell",6400,10881,.001415),P(74956847,"2019-08-04 07:00:00 GMT","BTC-PERPETUAL","Open Buy",3200,10651,.001415),P(74956846,"2019-08-04 06:00:00 GMT","BTC-PERPETUAL","Open Buy",3200,10688,.001415),P(74956845,"2019-08-04 05:00:00 GMT","BTC-PERPETUAL","Close Sell",3200,10651,.001415),P(74956844,"2019-08-04 04:00:00 GMT","BTC-PERPETUAL","Open Buy",3200,10601,.001415)];function A(e){e.preventDefault()}var w=Object(p.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function k(e){var a=w();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,"Recent Trades"),r.a.createElement(y.a,{size:"small"},r.a.createElement(j.a,null,r.a.createElement(B.a,null,r.a.createElement(x.a,null,"Datetime"),r.a.createElement(x.a,null,"Instrument"),r.a.createElement(x.a,null,"Side"),r.a.createElement(x.a,null,"Amount"),r.a.createElement(x.a,null,"Price"),r.a.createElement(x.a,{align:"right"},"Transaction Fee"))),r.a.createElement(O.a,null,N.map((function(e){return r.a.createElement(B.a,{key:e.id},r.a.createElement(x.a,null,e.datetime),r.a.createElement(x.a,null,e.instrument),r.a.createElement(x.a,null,e.side),r.a.createElement(x.a,null,e.amount),r.a.createElement(x.a,null,e.price),r.a.createElement(x.a,{align:"right"},e.transactionFee))})))),r.a.createElement("div",{className:a.seeMore},r.a.createElement(C.a,{color:"primary",href:"#",onClick:A},"See more trades")))}var L=Object(p.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));var R=function(){var e=r.a.useState({profit:{profitUSD:0,profitBTC:0},leverage:0,trades:{}}),a=Object(m.a)(e,2),t=a[0],n=a[1];r.a.useEffect((function(){E()("http://127.0.0.1:5000").on("UPDATE_STATE",(function(e){n(e)}))}),[]);var l=L(),c=Object(u.a)(l.paper,l.fixedHeight);return r.a.createElement("div",{className:l.root},r.a.createElement("main",{className:l.content},r.a.createElement(f.a,{maxWidth:"lg",className:l.container},r.a.createElement(d.a,{container:!0,spacing:2},r.a.createElement(d.a,{item:!0,xs:12,md:4,lg:6},r.a.createElement(g.a,{className:c},r.a.createElement(T,{data:t.profit}))),r.a.createElement(d.a,{item:!0,xs:12,md:4,lg:6},r.a.createElement(g.a,{className:c},r.a.createElement(S,{data:t.leverage}))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(g.a,{className:l.paper},r.a.createElement(k,{data:t.trades})))))))},G=(t(125),t(25)),M=t(37);var U=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(m.a)(c,2),u=o[0],s=o[1],E=Object(n.useState)(!1),p=Object(m.a)(E,2),f=p[0],d=p[1];return f?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",{className:"config-title"},"Configuration"),r.a.createElement(G.a,{onSubmit:function(e){e.preventDefault(),function(e,a){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e,apiSecret:a})};fetch("/api/setKeys",t).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t,u),d(!0)}},r.a.createElement(G.a.Group,{className:"text-bar-type"},r.a.createElement(G.a.Label,null,"API KEY"),r.a.createElement(G.a.Control,{type:"text",placeholder:"Enter API KEY",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement(G.a.Group,{className:"text-bar-type"},r.a.createElement(G.a.Label,null,"API SECRET"),r.a.createElement(G.a.Control,{type:"text",placeholder:"Enter API SECRET",value:u,onChange:function(e){return s(e.target.value)}})),r.a.createElement(M.a,{type:"submit",className:"submit-button",variant:"primary"},"Submit")))},D=t(30),F=t(56);var I=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("Run"),o=Object(m.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)("blue"),E=Object(m.a)(s,2),p=E[0],f=E[1];return r.a.createElement(D.a,{bg:"dark",variant:"dark"},r.a.createElement(D.a.Brand,{href:"/"},"deribitTrader"),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(F.a,{className:"mr-auto"},r.a.createElement(F.a.Link,{href:"/config"},"Config")),r.a.createElement(M.a,{onClick:function(){t?(l(!1),u("Run"),f("blue")):(l(!0),u("Stop"),f("red"))},className:p},i)))};var K=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement(i.b,{exact:!0,path:"/",component:R}),r.a.createElement(i.b,{exact:!0,path:"/config",component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t(128)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.11b693d5.chunk.js.map