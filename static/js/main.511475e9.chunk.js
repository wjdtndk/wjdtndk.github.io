(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),l=a.n(r);var i=()=>{return o.a.createElement("header",{style:{backgroundColor:"#1d3557",color:"white",padding:"15px",textAlign:"left",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"}},o.a.createElement("h1",{style:{margin:"0",fontSize:"1.5rem",fontWeight:"bold"}},"OSI 7\uacc4\uce35 \ud328\ud0b7 \uc2dc\ubbac\ub808\uc774\ud130"))};const c={application:{name:"\uc751\uc6a9 \uacc4\uce35",description:"\uc0ac\uc6a9\uc790\uc640 \ub124\ud2b8\uc6cc\ud06c \uac04\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\uba70, \ub370\uc774\ud130 \uc0dd\uc131 \ubc0f \uc804\uc1a1\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4.",protocols:["HTTP","SMTP","FTP"]},presentation:{name:"\ud45c\ud604 \uacc4\uce35",description:"\ub370\uc774\ud130 \ud615\uc2dd \ubcc0\ud658 \ubc0f \uc554\ud638\ud654\ub97c \ub2f4\ub2f9\ud569\ub2c8\ub2e4.",protocols:["SSL","TLS"]},session:{name:"\uc138\uc158 \uacc4\uce35",description:"\ub370\uc774\ud130 \uad50\ud658\uc744 \uc704\ud55c \ub17c\ub9ac\uc801 \uc5f0\uacb0\uc744 \uc124\uc815, \uad00\ub9ac, \uc885\ub8cc\ud569\ub2c8\ub2e4.",protocols:["NetBIOS","PPTP"]},transport:{name:"\uc804\uc1a1 \uacc4\uce35",description:"\ub370\uc774\ud130\uc758 \uc804\uc1a1\uc744 \uc2e0\ub8b0\uc131 \uc788\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud569\ub2c8\ub2e4.",protocols:["TCP","UDP"]},network:{name:"\ub124\ud2b8\uc6cc\ud06c \uacc4\uce35",description:"\ub370\uc774\ud130\uc758 \uacbd\ub85c\ub97c \uc124\uc815\ud558\uace0 \ub77c\uc6b0\ud305\uc744 \uc218\ud589\ud569\ub2c8\ub2e4.",protocols:["IP","ICMP"]},dataLink:{name:"\ub370\uc774\ud130\ub9c1\ud06c \uacc4\uce35",description:"\ub178\ub4dc \uac04 \ub370\uc774\ud130 \uc804\uc1a1\uacfc \uc5d0\ub7ec \uac10\uc9c0\ub97c \ub2f4\ub2f9\ud569\ub2c8\ub2e4.",protocols:["Ethernet","PPP"]},physical:{name:"\ubb3c\ub9ac \uacc4\uce35",description:"\ube44\ud2b8 \uc804\uc1a1\uacfc \ubb3c\ub9ac\uc801 \uc5f0\uacb0\uc744 \ub2f4\ub2f9\ud569\ub2c8\ub2e4.",protocols:["Wi-Fi","Bluetooth"]}};var s=[{key:"application",name:"\uc751\uc6a9 \uacc4\uce35(7\uacc4\uce35)",description:"\ub370\uc774\ud130 \uc0dd\uc131 \ubc0f \uc804\uc1a1 \n \uc0ac\uc6a9\uc790\uc640 \ub124\ud2b8\uc6cc\ud06c \uac04\uc758 \uc778\ud130\ud398\uc774\uc2a4 \uc81c\uacf5",protocols:["HTTP","DHCP","Telnet","FTP"]},{key:"presentation",name:"\ud45c\ud604 \uacc4\uce35(6\uacc4\uce35)",description:"\ub370\uc774\ud130 \ud615\uc2dd \ubcc0\ud658 \ubc0f \uc554\ud638\ud654",protocols:["ASCII","JPEG","MPEG"]},{key:"session",name:"\uc138\uc158 \uacc4\uce35(5\uacc4\uce35)",description:"\ub370\uc774\ud130 \uad50\ud658\uc744 \uc704\ud55c \ub17c\ub9ac\uc801 \uc5f0\uacb0\uc744 \n\uc124\uc815, \uad00\ub9ac, \uc885\ub8cc \uc9c4\ud589 \n \uc989, \uc138\uc158 \uad00\ub9ac",protocols:["SSH","TLS","RPC"]},{key:"transport",name:"\uc804\uc1a1 \uacc4\uce35(4\uacc4\uce35)",description:"\ub370\uc774\ud130\uc758 \uc804\uc1a1\uc744 \uc2e0\ub8b0\uc131 \uc788\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac",protocols:["TCP","UDP"]},{key:"network",name:"\ub124\ud2b8\uc6cc\ud06c \uacc4\uce35(3\uacc4\uce35)",description:"\ub77c\uc6b0\ud305 \ubc0f IP \uc8fc\uc18c \uad00\ub9ac \n \uc989, \ub370\uc774\ud130 \uacbd\ub85c \uc124\uc815\uacfc \ub77c\uc6b0\ud305 \uc218\ud589",protocols:["IP","ICMP"]},{key:"dataLink",name:"\ub370\uc774\ud130\ub9c1\ud06c\uacc4\uce35(2\uacc4\uce35)",description:"\ud504\ub808\uc784 \uc0dd\uc131,\n \uc81c\uc5b4\ub178\ub4dc \uac04 \ub370\uc774\ud130 \uc804\uc1a1\uacfc \uc5d0\ub7ec \uac10\uc9c0\ub97c \ub2f4\ub2f9",protocols:["Ethernet","PPP"]},{key:"physical",name:"\ubb3c\ub9ac \uacc4\uce35(1\uacc4\uce35)",description:"\ube44\ud2b8 \uc804\uc1a1\uacfc \ubb3c\ub9ac\uc801 \uc5f0\uacb0\uc744 \ub2f4\ub2f9",protocols:["RS-232","RS-485","1000BASE-T"]}];const d={application:"\ud83c\udf10",presentation:"\ud83c\udfa8",session:"\ud83d\udd17",transport:"\ud83d\ude80",network:"\ud83c\udf0d",dataLink:"\ud83d\udd27",physical:"\u26a1"};var p=e=>{let{layerKey:t,highlighted:a,onHighlight:n,onClick:r}=e;const l=c[t];if(!l)return null;const i={margin:"10px 0",padding:"15px",border:a?"2px solid #007bff":"1px solid gray",borderRadius:"10px",background:a?"linear-gradient(to right, #007bff, #6610f2)":"white",color:a?"white":"black",cursor:"pointer",fontSize:"1.5rem",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",transition:"background 0.3s ease"};return o.a.createElement("div",{style:i,onMouseEnter:()=>n(t),onMouseLeave:()=>n(null),onClick:()=>r(t)},d[t]," ",l.name)};var u=e=>{let{title:t,layers:a,highlightedLayer:n,onHighlight:r,onClick:l}=e;return o.a.createElement("div",{className:"osi-layer-column",style:{padding:"10px",textAlign:"center"}},o.a.createElement("h3",null,t),a.map(e=>o.a.createElement(p,{key:e.key,layerKey:e.key,highlighted:n===e.key,onHighlight:r,onClick:l})))},m=a(1);const g={AH:"#ff4d4d",PH_PRESENTATION:"#ff66cc",PH_SESSION:"#a64dff",TH:"#4da6ff",NH:"#00cc99",DH:"#ffcc00",BIT:"#4a4a4a",DATA:"#000000"},h={AH:"Application Header \n \uc0ac\uc6a9\uc790\uc640 \ub124\ud2b8\uc6cc\ud06c \uac04\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c\n \uc81c\uacf5\ud558\uba70 \ub370\uc774\ud130\ub97c \uc0dd\uc131.",PH_PRESENTATION:"Presentation Header \n \ub370\uc774\ud130\ub97c \ud2b9\uc815 \ud615\uc2dd\uc73c\ub85c \ubcc0\ud658\ud558\uac70\ub098\n \uc554\ud638\ud654/\ubcf5\ud638\ud654\ub97c \uc218\ud589.",PH_SESSION:"Session Header \n \ud1b5\uc2e0 \uc138\uc158\uc744 \uc124\uc815, \uad00\ub9ac, \uc885\ub8cc\ud558\ub294 \ub370\n \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ud3ec\ud568.",TH:"Transport Header \n \ub370\uc774\ud130\uc758 \uc2e0\ub8b0\uc131\uc744 \ubcf4\uc7a5\ud558\uace0,\n \ud328\ud0b7 \uc7ac\uc804\uc1a1 \ubc0f \uc21c\uc11c \uc81c\uc5b4\ub97c \ub2f4\ub2f9.",NH:"Network Header \n \ub370\uc774\ud130\uc758 \uacbd\ub85c\ub97c \uc124\uc815\ud558\uace0 \ub77c\uc6b0\ud305\uc744 \uc218\ud589.",DH:"Data Link Header \n \ub178\ub4dc \uac04 \ub370\uc774\ud130 \uc804\uc1a1\uacfc \uc5d0\ub7ec \uac10\uc9c0\ub97c \ub2f4\ub2f9.",BIT:"Binary Data \n \ubb3c\ub9ac \uacc4\uce35\uc744 \ud1b5\ud574 \uc804\uc1a1\ub418\ub294\n \ube44\ud2b8 \ub2e8\uc704 \ub370\uc774\ud130.",DATA:"Payload Data \n \uc0c1\uc704 \uacc4\uce35\uc5d0\uc11c \uc0dd\uc131\ub41c \ucd5c\uc885 \ub370\uc774\ud130\ub85c,\n \uc804\uc1a1\ud574\uc57c \ud560 \ud575\uc2ec \ub370\uc774\ud130 \ub0b4\uc6a9."};var b=e=>{let{highlightedLayer:t}=e;const[a,r]=Object(n.useState)(null),l={application:["AH","DATA"],presentation:["PH_PRESENTATION","AH","DATA"],session:["PH_SESSION","PH_PRESENTATION","AH","DATA"],transport:["TH","PH_SESSION","PH_PRESENTATION","AH","DATA"],network:["NH","TH","PH_SESSION","PH_PRESENTATION","AH","DATA"],dataLink:["DH","NH","TH","PH_SESSION","PH_PRESENTATION","AH","DATA","DH"],physical:["BIT"]},i=e=>({display:"flex",justifyContent:"center",gap:"10px",backgroundColor:e?"lightblue":"white",padding:"5px",borderRadius:"4px",transition:"background-color 0.3s ease"}),c=e=>({border:"2px solid black",padding:"8px 12px",fontSize:"14px",fontWeight:"bold",whiteSpace:"nowrap",cursor:"pointer",borderRadius:"5px",backgroundColor:g[e]||"gray",color:"DATA"===e?"white":"black",transition:"border-color 0.3s ease",animation:t?"pulse 1.5s infinite":"none"}),s=Object(m.a)(Object(m.a)({},c("BIT")),{},{width:"400px",padding:"12px 20px",fontSize:"16px",textAlign:"center"}),d=(e,a)=>{var n;return t===e&&(null===(n=l[e])||void 0===n?void 0:n.includes(a))};return o.a.createElement("div",{style:{textAlign:"center",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}},o.a.createElement("h2",null,"Build-Up Packet"),Object.entries(l).map((e,a)=>{let[n,l]=e;return o.a.createElement("div",{key:a,style:i(n===t)},l.map((e,t)=>o.a.createElement("div",{key:t,style:Object(m.a)(Object(m.a)({},"BIT"===e?s:c(e)),{},{borderColor:d(n,e)?"orange":"black"}),onClick:()=>(e=>{r(e)})(e)},e.startsWith("PH_")?"PH":e)))}),a&&o.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"20px",borderRadius:"10px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",width:"300px",textAlign:"center",zIndex:1e3}},o.a.createElement("h3",null,"Packet Info"),o.a.createElement("p",{style:{whiteSpace:"pre-line"}},o.a.createElement("strong",null,a.startsWith("PH_")?"PH":a)),o.a.createElement("p",{style:{whiteSpace:"pre-line"}},h[a]||"No additional information available."),o.a.createElement("button",{onClick:()=>r(null),style:{padding:"10px 15px",backgroundColor:"#e63946",color:"white",border:"none",borderRadius:"6px",fontSize:"14px",cursor:"pointer",fontWeight:"bold",transition:"background-color 0.3s ease"},onMouseOver:e=>e.target.style.backgroundColor="#c92a2a",onMouseOut:e=>e.target.style.backgroundColor="#e63946"},"\ub2eb\uae30")))};var E=e=>{let{layer:t,onClose:a}=e;if(!t)return null;const n={marginTop:"15px",padding:"10px 20px",backgroundColor:"#e63946",color:"white",border:"none",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",transition:"background-color 0.3s ease"},r="#c92a2a",l=t.protocols||[];return o.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"1px solid #ccc",padding:"20px",borderRadius:"10px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.3)",width:"350px",zIndex:1e3,textAlign:"center"}},o.a.createElement("h2",{style:{color:"#007bff",marginBottom:"10px"}},t.name),o.a.createElement("p",{style:{whiteSpace:"pre-line",fontSize:"14px",color:"#333"}},t.description),o.a.createElement("strong",{style:{display:"block",margin:"10px 0"}},"Protocols:"),o.a.createElement("ul",{style:{listStyleType:"none",padding:0}},l.map(e=>o.a.createElement("li",{key:e,style:{padding:"5px",backgroundColor:"#f1f3f5",borderRadius:"5px",margin:"3px 0",fontSize:"14px"}},e))),o.a.createElement("button",{onClick:a,style:n,onMouseOver:e=>e.target.style.backgroundColor=r,onMouseOut:e=>e.target.style.backgroundColor=n.backgroundColor},"\ub2eb\uae30"))};a(4);var x=()=>{const[e,t]=Object(n.useState)(null),[a,r]=Object(n.useState)(null),[l,i]=Object(n.useState)(!1),[c,d]=Object(n.useState)([]),[p,m]=Object(n.useState)(""),[g,h]=Object(n.useState)(1e3),x=Object(n.useRef)(null);Object(n.useEffect)(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[c]);const y=e=>{if(l)return;i(!0);const a="sender"===e?s:[...s].reverse();a.forEach((n,o)=>{setTimeout(()=>{if(t(n.key),o>0){const t=a[o-1];d(a=>["[".concat("sender"===e?"\uc804\uc1a1":"\uc218\uc2e0","] ").concat(t.name," \u2192 ").concat(n.name),...a])}o===a.length-1&&setTimeout(()=>{t(null),i(!1)},g)},o*g)})},f=c.filter(e=>e.toLowerCase().includes(p.toLowerCase()));return o.a.createElement("div",{className:"osi-visualization"},o.a.createElement("div",{className:"osi-left"},o.a.createElement(u,{title:"\uacc4\uce35 \uad6c\uc870",layers:s,highlightedLayer:e,onHighlight:t,onClick:e=>{const t=s.find(t=>t.key===e);r(t||null)}}),o.a.createElement("hr",{className:"divider"}),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"send-button",onClick:()=>y("sender")},"\uc804\uc1a1 \uc2dc\uc791"),o.a.createElement("button",{className:"receive-button",onClick:()=>y("receiver")},"\uc218\uc2e0 \uc2dc\uc791"),o.a.createElement("input",{type:"range",min:"500",max:"3000",step:"100",value:g,onChange:e=>h(e.target.value)}))),o.a.createElement("hr",{className:"vertical-divider"}),o.a.createElement("div",{className:"osi-center"},o.a.createElement(b,{highlightedLayer:e})),o.a.createElement("hr",{className:"vertical-divider"}),o.a.createElement("div",{className:"osi-right",ref:x},o.a.createElement("div",{className:"log-header"},o.a.createElement("h3",null,"\ud328\ud0b7 \uc774\ub3d9 \ub85c\uadf8"),o.a.createElement("input",{type:"text",className:"log-search",placeholder:"\ub85c\uadf8 \uac80\uc0c9...",value:p,onChange:e=>m(e.target.value)}),o.a.createElement("button",{className:"clear-log-button",onClick:()=>{d([])}},"\ub85c\uadf8 \ucd08\uae30\ud654")),o.a.createElement("ul",{className:"log-list"},f.slice(0,20).map((e,t)=>o.a.createElement("li",{key:t,className:0===t?"highlight-log":"log-item"},e)))),a&&o.a.createElement(E,{layer:a,onClose:()=>r(null)}))};var y=()=>o.a.createElement("div",{className:"app"},o.a.createElement(i,null),o.a.createElement(x,null));a(15);l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)))},4:function(e,t,a){},6:function(e,t,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.511475e9.chunk.js.map