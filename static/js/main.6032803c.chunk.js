(this["webpackJsonpericc-at-git-hub.react"]=this["webpackJsonpericc-at-git-hub.react"]||[]).push([[0],{55:function(e){e.exports=JSON.parse('{"EnvName":"dev."}')},56:function(e){e.exports=JSON.parse('{"EnvName":"prod."}')},77:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(54),s=n.n(a),i=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},o=n(23),l=n(13),j=(n(55),n(56)),u=Object(l.a)({},j),d=n(2),h=function(){return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"mx-auto w-50",children:[Object(d.jsxs)("div",{style:{fontSize:15},children:["This React app is about Pok\xe9mon. It is adapted from ch.6 of ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/PacktPublishing/React-17-Design-Patterns-and-Best-Practices-Third-Edition",children:"this book"})," and built from:",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://pokeapi.co/",children:"Pok\xe9API"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/vercel/swr",children:"SWR"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/styled-components/styled-components",children:"styled-components"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/wix/pro-gallery",children:"Pro Gallery"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/xiaolin/react-image-gallery",children:"React Image Gallery"})})]})]}),Object(d.jsxs)("p",{children:["Developed by Chan Ching Yin.",Object(d.jsx)("span",{style:{float:"right"},children:"v".concat("0.1.0",".").concat(u.EnvName)})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("hr",{})]})},p=n(10),b=n(25);n(57);var m,f,O=function(){var e=function(e){return parseInt(e.url.replace("https://pokeapi.co/api/v2/pokemon-species/","").slice(0,-1))};return{GetGenNameDesc:function(e){var t,n,c=e.names.filter((function(e){return["en","ja"].indexOf(e.language.name)>=0}));return"".concat(null===(t=c[0])||void 0===t?void 0:t.name," / ").concat(null===(n=c[1])||void 0===n?void 0:n.name)},GetGenVerDesc:function(e){return"ver: ".concat(e.version_groups[0].name,", ").concat(e.version_groups[1].name)},GetSortedGen:function(t){return Object(l.a)(Object(l.a)({},t),{},{pokemon_species:t.pokemon_species.sort((function(t,n){return e(t)-e(n)}))})},GetPokeIdFromPokeSpecApiRes:e,GetGenusDesc:function(e){return e.genera.filter((function(e){return["en","zh-Hant"].indexOf(e.language.name)>=0})).map((function(e){return e.genus.replace("Pok\xe9mon","").replace("\u5bf6\u53ef\u5922","")})).reverse().join(" ")},GetNameDesc:function(e){var t=e.names.filter((function(e){return["en","zh-Hant","ja"].indexOf(e.language.name)>=0}));return"".concat(t[1].name," ").concat(t[0].name," ").concat(t[2].name)}}},x={nameof:function(e){return e},nameofFactory:function(){return function(e){return e}},Sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},CopySelectedText:function(){try{document.execCommand("copy")||alert("Testing code was copied unsuccessfully")}catch(e){alert("Oops, unable to copy")}},GetGlobalConfig:function(){return window.GlobalConfig},Fetcher:function(e){return fetch(e).then((function(e){return e.ok?e.json():{error:!0}}))}},g=function(e){var t=e.children;return Object(d.jsx)(b.a,{value:{fetcher:x.Fetcher,suspense:!0,revalidateOnFocus:!1,revalidateOnMount:!1,revalidateOnReconnect:!1,refreshWhenOffline:!1,refreshWhenHidden:!1,refreshInterval:0},children:Object(d.jsx)("div",{className:"App",children:t})})},v=n(51),k=n(19),y=n(35),S=["children"],w=Object(c.createContext)({appProceededData:[],appIsShowHandler:null}),I=Object(p.f)((function(e){var t=e.children,n=Object(y.a)(e,S),r=x.GetGlobalConfig(),a=O(),s=function(e){var t=r.Gallary.Data[0],n=r.Gallary.Data.filter((function(t){return e(t)}));return n.length>0&&(t=n[0]),t},i=s((function(e){return e.routeId===n.match.params.routeId})),l=a.GetSortedGen(i.obj),j=Object(c.useState)([]),u=Object(k.a)(j,2),h=u[0],p=u[1],b=Object(c.useState)(""),m=Object(k.a)(b,2),f=m[0],g=m[1],I=Object(c.useState)(!1),N=Object(k.a)(I,2),G=N[0],P=(N[1],Object(c.useRef)(null));Object(c.useEffect)((function(){p(l.pokemon_species)}),[n.match.params,l.pokemon_species]);var C=Object(c.useState)("scroll-top scroll-top-hide"),_=Object(k.a)(C,2),R=_[0],A=_[1],D=function(){return A("scroll-top scroll-top-show")};Object(c.useEffect)((function(){return document.addEventListener("scroll",D,{once:!0}),function(){document.removeEventListener("scroll",D)}}));var T={appProceededData:function(){var e=[];return h.forEach((function(t){t.name.toLowerCase().includes(f.toLocaleLowerCase())&&(e=[].concat(Object(v.a)(e),[t]))})),e}(),appIsShowHandler:function(e){var t=!0;return!G||e.is_legendary||e.is_mythical||(t=!1),t},appRouteCtx:n};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("link",{rel:"stylesheet",type:"text/css",href:"".concat(".","/pageCss/gallery-context.css")}),Object(d.jsx)("div",{ref:P,children:"\xa0"}),Object(d.jsxs)("span",{className:"nav-menu",children:[Object(d.jsx)(o.c,{activeClassName:"currently-viewing",to:"/".concat(i.routeId),exact:!0,children:"List view"})," ","|"," ",Object(d.jsx)(o.c,{activeClassName:"currently-viewing",to:"/waterfall/".concat(i.routeId),children:"Waterfall gallery"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("select",{onChange:function(e){var t=s((function(t){return t.desc===e.target.value}));n.history.push(n.match.path.replace(":routeId?",t.routeId))},defaultValue:i.desc,children:r.Gallary.Data.map((function(e){return Object(d.jsx)("option",{value:e.desc,children:e.desc},e.desc)}))}),Object(d.jsx)("h5",{style:{display:"inline-block"},className:"ms-2",children:a.GetGenNameDesc(l)}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}(Object(v.a)(h));p(e)},children:"Shuffle"}),"\xa0",Object(d.jsx)("input",{type:"text",value:f,placeholder:"Search by Eng name",onChange:function(e){return g(e.target.value)}}),"\xa0 \xa0"]}),Object(d.jsx)("br",{}),Object(d.jsx)(w.Provider,{value:T,children:t}),Object(d.jsx)("button",{className:R,onClick:function(){P.current.scrollIntoView()},children:"^"})]})})),N=n(48),G=n(49),P={bug:"rgb(81,204,90)",dark:"rgb(104,129,213)",dragon:"rgb(254,136,88)",electric:"rgb(232,212,1)",fairy:"rgb(253,119,154)",fighting:"rgb(239,105,106)",fire:"rgb(255,167,103)",flying:"rgb(100,166,240)",ghost:"rgb(177,110,180)",grass:"rgb(154,195,13)",ground:"rgb(200,168,65)",ice:"rgb(96,232,244)",normal:"rgb(174, 174, 174)",poison:"rgb(171,122,203)",psychic:"rgb(236,127,244)",rock:"rgb(251,199,38)",steel:"rgb(128,138,165)",water:"rgb(100,198,247)"},C=G.a.div(m||(m=Object(N.a)(["\n  position: relative;\n  \n  ","\n\n  .ul-poke-desc {\n    ","\n    list-style-type: none;\n    padding: 3px 10px;\n  }\n\n  .ul-poke-desc li:first-child {\n     padding-bottom: 10px;\n  }\n\n    .ul-poke-spec li {\n        padding-bottom: 5px;\n        white-space:nowrap;\n        color: #ffffff;\n    }\n\n    .h-weight-height-desc{\n        margin-left:15px;\n        margin-top:5px;\n    }\n\n"])),(function(e){var t=e.pokeColor;return"\n    background-image: linear-gradient(60deg, rgb(45, 45, 45) 30%, ".concat(t," 100%);\n  ")}),(function(e){var t=e.pokeColor;return"border-left: 5px solid ".concat(t,";")})),_=G.a.span(f||(f=Object(N.a)(["\n  position: relative;\n  \n  ","\n\n  display: inline-block;\n  border-radius: 20px;\n  font-weight: bold;\n  padding: 6px;\n  color: #444444;\n  margin-right: 4px;\n  opacity: 1;\n  text-transform: capitalize;\n"])),(function(e){var t=e.pokemonType;return"\n    background: ".concat(P[t],";\n    background-size: 65%;\n    background-position: center;\n  ")})),R=O(),A=function(e){return e?"Yes":"--"},D=function(e){var t,n,r,a=e.pokeSpecApiRes,s=Object(c.useContext)(w).appIsShowHandler,i=Object(b.b)(function(e){return"https://pokeapi.co/api/v2/pokemon/".concat(R.GetPokeIdFromPokeSpecApiRes(e))}(a)),o=i.data,l=i.error,j=Object(b.b)(a.url),u=j.data,h=j.error;if(l||h||o.error||u.error)return Object(d.jsx)("div",{});n=o;var p=(r=u).flavor_text_entries.find((function(e){return"en"===e.language.name})),m=null!==(t=r.flavor_text_entries.find((function(e){return"zh-Hant"===e.language.name})))&&void 0!==t?t:r.flavor_text_entries.find((function(e){return"ja"===e.language.name})),f=null===p||void 0===p?void 0:p.flavor_text.replace("\f"," "),O=null===m||void 0===m?void 0:m.flavor_text.replace("\f"," ").replaceAll("\n",""),x=n.types.map((function(e){return e.type.name}));return s(r)&&Object(d.jsxs)(C,{pokeColor:r.color.name,className:"border-bottom",children:[Object(d.jsxs)("h2",{children:["#",r.id," ",R.GetNameDesc(r)]}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm",children:[x.map((function(e){return Object(d.jsx)(_,{pokemonType:e,children:Object(d.jsx)("span",{children:e},n.name+e)},e)})),Object(d.jsx)("img",{alt:n.name,src:"sprites/pokemon/".concat(n.id,".png")}),Object(d.jsxs)("ul",{className:"ul-poke-desc",children:[Object(d.jsx)("li",{children:f}),Object(d.jsx)("li",{children:O})]})]}),Object(d.jsx)("div",{className:"col-sm my-auto",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("h5",{className:"h-weight-height-desc",children:["Height: ",10*n.height," cm \xa0 \xa0 Weight: ",n.weight/10," kg"]}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsxs)("ul",{className:"ul-poke-spec",children:[Object(d.jsxs)("li",{title:"The happiness when caught by a normal Pok\xe9ball; up to 255. The higher the number, the happier the Pok\xe9mon.",children:["Base happiness: ",r.base_happiness]}),Object(d.jsxs)("li",{title:"The base capture rate; up to 255. The higher the number, the easier the catch.",children:["Capture rate: ",r.capture_rate]}),Object(d.jsxs)("li",{title:"The chance of this Pok\xe9mon being female, in eighths; or -1 for genderless.",children:["Gender rate: ",r.gender_rate]}),Object(d.jsxs)("li",{title:"The color of this Pok\xe9mon for Pok\xe9dex search.",children:["Color: ",r.color.name]}),Object(d.jsxs)("li",{title:"The genus of this Pok\xe9mon species listed in multiple languages.",children:["Genera: ",R.GetGenusDesc(r)]})]})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsxs)("ul",{className:"ul-poke-spec",children:[Object(d.jsxs)("li",{title:"Whether or not this is a baby Pok\xe9mon.",children:["Is baby? ",A(r.is_baby)]}),Object(d.jsxs)("li",{title:"Whether or not this Pok\xe9mon has multiple forms and can switch between them.",children:["Forms switchable? ",A(r.forms_switchable)]}),Object(d.jsxs)("li",{title:"Whether or not this Pok\xe9mon has visual gender differences.",children:["Has gender differences? ",A(r.has_gender_differences)]}),Object(d.jsxs)("li",{title:"Whether or not this is a legendary Pok\xe9mon.",children:["Is legendary? ",A(r.is_legendary)]}),Object(d.jsxs)("li",{title:"Whether or not this is a mythical Pok\xe9mon.",children:["Is mythical? ",A(r.is_mythical)]})]})})]})})]})})]})},T=n(42),F=(n(74),function(e){var t=e.pokeSpecApiRes,n=O();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["#",n.GetPokeIdFromPokeSpecApiRes(t)," ",t.name]}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(T.a,{height:10,count:5})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(T.a,{height:10,count:5})}),Object(d.jsx)("div",{className:"col-sm",children:Object(d.jsx)(T.a,{height:10,count:5})})]})})]})}),E=function(){var e=Object(c.useContext)(w),t=e.appProceededData,n=e.appRouteCtx,r=Object(c.useState)(!1),a=Object(k.a)(r,2),s=a[0],i=a[1],o=n.match.params;return Object(c.useEffect)((function(){i(!1)}),[o]),null==t?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:t.slice(0,30).map((function(e){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(F,{pokeSpecApiRes:e}),children:Object(d.jsx)(D,{pokeSpecApiRes:e},e.name)},"GallaryUIsuspense"+e.name)}))}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:t.slice(30,60).map((function(e){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(F,{pokeSpecApiRes:e}),children:Object(d.jsx)(D,{pokeSpecApiRes:e},e.name)},"GallaryUIsuspense"+e.name)}))}),t.length>60&&!s&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{onClick:function(){return i(!0)},className:"btn btn-primary mx-auto d-block mt-3",children:"Load more"})}),s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:t.slice(60,90).map((function(e){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(F,{pokeSpecApiRes:e}),children:Object(d.jsx)(D,{pokeSpecApiRes:e},e.name)},"GallaryUIsuspense"+e.name)}))}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:t.slice(90,120).map((function(e){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(F,{pokeSpecApiRes:e}),children:Object(d.jsx)(D,{pokeSpecApiRes:e},e.name)},"GallaryUIsuspense"+e.name)}))}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:t.slice(120,151).map((function(e){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(F,{pokeSpecApiRes:e}),children:Object(d.jsx)(D,{pokeSpecApiRes:e},e.name)},"GallaryUIsuspense"+e.name)}))})]})]})},L=function(e){return Object(d.jsx)(I,Object(l.a)(Object(l.a)({},e),{},{children:Object(d.jsx)(E,{})}))},H=n(81),W=(n(75),n(62)),B=n.n(W),z=(n(76),O(),function(e){var t,n=e.pokeSpecApiRes,r=e.appIsTargetNow,a=e.appSetDisplayHandler,s=(Object(c.useContext)(w).appIsShowHandler,Object(b.b)(n.url)),i=s.data,o=s.error;if(Object(c.useEffect)((function(){l()})),o||i.error)return null;t=i;var l=function(){r&&a(t)};return null}),U="loading...",M=function(){Object(c.useContext)(w).appIsShowHandler;var e=Object(c.useState)(!1),t=Object(k.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(k.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(-1),j=Object(k.a)(l,2),u=j[0],h=j[1],p=Object(c.useState)(null),b=Object(k.a)(p,2),m=b[0],f=b[1],x=Object(c.useContext)(w).appProceededData,g=O(),v=x.map((function(e){var t=g.GetPokeIdFromPokeSpecApiRes(e);return{itemId:t+"",url:"sprites/pokemon/other/dream-world/".concat(t,".svg"),metadata:{type:"image",alt:" "}}})),y=v.map((function(e){return{pokeId:e.itemId,original:e.url}})),S={width:window.innerWidth-60,height:window.innerHeight},I=function(e){f(e)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("link",{rel:"stylesheet",type:"text/css",href:"".concat(".","/pageCss/water-ui.css")}),0!==x.length&&Object(d.jsx)(H.a,{items:v,container:S,options:{imageHoverAnimation:"ZOOM_IN",hoveringBehaviour:"NEVER_SHOW",gallerySize:30,itemBorderWidth:2},eventsListener:function(e,t){if("ITEM_ACTION_TRIGGERED"===e)"image"===t.type&&(o(t.idx),f(null),h(parseInt(t.id)),r(!0))}}),n&&Object(d.jsx)("div",{className:"react-image-gallery-container-container",children:Object(d.jsx)("div",{className:"react-image-gallery-container",children:Object(d.jsx)(B.a,{items:y,onErrorImageURL:"water-default.png",showBullets:!1,showIndex:!0,showThumbnails:!0,lazyLoad:!0,showPlayButton:!1,startIndex:i,slideDuration:0,showFullscreenButton:!1,onClick:function(){return r(!1)},onSlide:function(e){f(null),h(parseInt(y[e].pokeId))}})})}),Object(d.jsx)(c.Suspense,{fallback:null,children:x.map((function(e){return Object(d.jsx)(z,{pokeSpecApiRes:e,appIsTargetNow:g.GetPokeIdFromPokeSpecApiRes(e)===u,appSetDisplayHandler:I},"WaterUIback1"+e.name)}))}),n&&Object(d.jsxs)("div",{className:"target-poke-desc",children:[Object(d.jsx)("h1",{className:"target-poke-desc-top-left",children:null!=m?"#"+m.id:U}),Object(d.jsx)("h1",{className:"target-poke-desc-bottom-center",children:null!=m?g.GetNameDesc(m):U})]})]})},J=function(e){return Object(d.jsx)(I,Object(l.a)(Object(l.a)({},e),{},{children:Object(d.jsx)(M,{})}))},V=function(){return Object(d.jsx)(g,{children:Object(d.jsx)(o.b,{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/waterfall/:routeId?",component:function(e){return Object(d.jsx)(J,{})},exact:!0}),Object(d.jsx)(p.a,{path:"/:routeId?",component:function(e){return Object(d.jsx)(L,{})},exact:!0})]})})})};s.a.render(Object(d.jsxs)(r.a.StrictMode,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(o.a,{children:Object(d.jsx)(V,{})})]}),document.getElementById("root")),i()}},[[77,3,4]]]);
//# sourceMappingURL=main.6032803c.chunk.js.map