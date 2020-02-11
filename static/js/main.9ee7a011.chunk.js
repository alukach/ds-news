(this["webpackJsonpds-news"]=this["webpackJsonpds-news"]||[]).push([[0],{141:function(e,t,a){e.exports=a(222)},146:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(64),o=a.n(r),l=(a(146),a(23)),i=a(15),u=a(9),s=a(243),d=a(50),p=a(20),m=a(127),b=a.n(m),O=a(109),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,h=a(37),j=a(7),E=Object(j.createAsyncAction)("AUTH/FETCH_TOKEN_REQUEST","AUTH/FETCH_TOKEN_SUCCESS","AUTH/FETCH_TOKEN_FAILURE")(),v=Object(j.createAction)("AUTH/LOGOUT")(),y=Object(j.createReducer)("").handleType(Object(j.getType)(E.success),(function(e,t){return t.payload})).handleType(Object(j.getType)(v),(function(e){return""})),g=Object(u.c)({token:y}),A=a(103),R=Object(j.createAction)("QUERY/SET")(),S=Object(j.createAction)("QUERY/SET_SEARCH_TERM")(),N=Object(j.createAction)("QUERY/SET_SORT")(),T=Object(j.createAction)("QUERY/REPO_ADD")(),w=Object(j.createAction)("QUERY/REPO_RM")(),k=Object(j.createAsyncAction)("QUERY/SEARCH_REQUEST","QUERY/SEARCH_SUCCESS","QUERY/SEARCH_FAILURE")(),q=Object(j.createAction)("QUERY/START_POLLING")(),U=Object(j.createAction)("QUERY/STOP_POLLING")(),C=Object(j.createAction)("QUERY/SET_POLLING_TIMER")(),_=a(40),L=a.n(_),I={query:{search:"",repo:["now","how","ds-business","ds-team","operations","communications","ds-realwork","labs"].map((function(e){return"developmentseed/".concat(e)})),sort:"created"},results:null,polling:{active:!0,count:null,interval:300}},H=Object(j.createReducer)(I.query).handleAction(S,(function(e,t){var a=t.payload;return Object(i.a)({},e,{search:a})})).handleAction(R,(function(e,t){var a=t.payload;return Object(i.a)({},e,{},a)})).handleAction(N,(function(e,t){var a=t.payload;return Object(i.a)({},e,{sort:a})})).handleAction(T,(function(e,t){var a=t.payload,n=e.repo,c=Object(A.a)(e,["repo"]);return Object(i.a)({},c,{repo:n.includes(a)?n:n.concat(a)})})).handleAction(w,(function(e,t){var a=t.payload,n=e.repo,c=Object(A.a)(e,["repo"]);return Object(i.a)({},c,{repo:n.filter((function(e){return e!==a}))})})),x=Object(j.createReducer)(I.results).handleAction(k.request,(function(e,t){return{status:"FETCHING",data:null===e||void 0===e?void 0:e.data,error:void 0,asOf:L()().format("LLL")}})).handleAction(k.success,(function(e,t){return{status:"SUCCESS",data:t.payload,error:void 0,asOf:L()().format("LLL")}})).handleAction(k.failure,(function(e,t){return{status:"FAILED",data:void 0,error:t.payload,asOf:L()().format("LLL")}})),Q=Object(j.createReducer)(I.polling).handleAction(q,(function(e){return Object(i.a)({},e,{active:!0})})).handleAction(U,(function(e){return Object(i.a)({},e,{count:null,active:!1})})).handleAction(C,(function(e,t){var a=t.payload;return Object(i.a)({},e,{count:a})})),P=Object(u.c)({query:H,results:x,polling:Q}),F=a(102),Y=a(241),D=a(16),M=a(72),G=a(226),B=a(57),z=a(44),J=a(231),K=a(232),W=[function(e,t,a){var n=a.ajax,c=a.config;return e.pipe(Object(G.a)(Object(j.isActionOf)(E.request)),Object(B.a)((function(e){var t=e.payload;return n.post(c.api.auth,{code:t},{"Content-Type":"application/json",Accept:"application/json"}).pipe(Object(z.a)((function(e){return e.response})),Object(z.a)((function(e){var t=e.access_token;return E.success(t)})),Object(J.a)((function(e){return Object(M.a)(E.failure(e))})))})))},function(e,t,a){var n=a.config;return e.pipe(Object(G.a)(Object(j.isActionOf)(E.success)),Object(K.a)(Object(D.d)("".concat(n.basePath).concat(n.paths.feed))))}],$=a(14),X=a(129),V=a(227),Z=a(247),ee=a(237),te=a(77),ae=a(233),ne=a(234),ce=a(235),re=a(236),oe=a(238),le=a(239),ie=a(240),ue=a(98),se=a(128),de=Object(se.a)([function(e){return e}],(function(e){return Object.entries(e).filter((function(e){var t=Object($.a)(e,2),a=(t[0],t[1]);return Array.isArray(a)?a.length:a})).flatMap((function(e){var t=Object($.a)(e,2),a=t[0],n=t[1];return Array.isArray(n)?n.map((function(e){return[a,e]})):[[a,n]]})).map((function(e){var t=Object($.a)(e,2),a=t[0],n=t[1];return"search"===a?n:"".concat(a,":").concat(n)})).join(" ")})),pe=a(26),me=function(e){var t=Object($.a)(e,2),a=t[0],n=t[1];return JSON.stringify(a.query.query)!==JSON.stringify(n.query.query)},be=[function(e,t,a){var n=a.config;return(t.pipe(Object(ae.a)(),Object(G.a)(me),Object(ne.a)(n.searchDebounceMs),Object(z.a)((function(e){var t=Object($.a)(e,2);t[0];return t[1].query.query})),Object(z.a)((function(e){return Object(D.e)(Object(i.a)({},t.value.router.location,{search:"q=".concat(encodeURIComponent(de(e)))}))}))))},function(e,t,a){var n=a.config;return Object(V.a)(e.pipe(Object(X.a)(D.b),Object(G.a)((function(e){return e.payload.location.pathname==="".concat(n.basePath).concat(n.paths.feed)})),Object(G.a)((function(e){return e.payload.isFirstRendering}))),e.pipe(Object(X.a)(d.a))).pipe(Object(z.a)((function(){return R((e=t.value.router.location.search.slice(3),decodeURIComponent(e).split(" ").map((function(e){return e.split(":")})).reduce((function(e,t){return Object(i.a)({},e,{},1!==t.filter(Boolean).length&&["sort","repo"].includes(t[0])?Object(pe.a)({},t[0],(e[t[0]]||[]).concat(t.slice(1).join(":"))):{search:e.search?"".concat(e.search," ").concat(t.join(":")):t.join(":")})}),{})));var e})))},function(e,t,a){var n=a.config;return(Object(V.a)(e.pipe(Object(G.a)((function(e){return[Object(j.isActionOf)(E.success),function(e){return Object(j.isActionOf)(C)(e)&&0===e.payload}].some((function(t){return t(e)}))}))),t.pipe(Object(ae.a)(),Object(G.a)(me))).pipe(Object(ne.a)(n.searchDebounceMs),Object(G.a)((function(){return!!t.value.auth.token})),Object(z.a)((function(){return k.request(de(t.value.query.query))}))))},function(e,t,a){var n=a.github;a.ajax;return e.pipe(Object(G.a)(Object(j.isActionOf)(k.request)),Object(ue.a)((function(e){var a=e.payload;return Object(te.a)(n.query({query:a,token:t.value.auth.token})).pipe(Object(z.a)((function(e){return k.success(e)})),Object(J.a)((function(e){return Object(M.a)(k.failure(e))})))})))},function(e,t){return e.pipe(Object(X.a)(q),Object(re.a)(Object(ee.a)(0,1e3).pipe(Object(z.a)((function(e){return t.value.query.polling.interval-e})),Object(oe.a)((function(e){return e>=0})),Object(z.a)(C),Object(le.a)(),Object(ie.a)(e.pipe(Object(X.a)(U))))))},function(e,t){return e.pipe(Object(X.a)(d.a),Object(ce.a)(Object(Z.a)(Object(M.a)(k.request(de(t.value.query.query))).pipe(Object(G.a)((function(){return!!t.value.auth.token}))),Object(M.a)(q()).pipe(Object(G.a)((function(){return!!t.value.query.polling.active})),Object(G.a)((function(){return!!t.value.auth.token}))))))}],Oe=Y.a.apply(void 0,Object(F.a)(W).concat(Object(F.a)(be))),fe=a(245),he=a(130),je=a.n(he),Ee=a(45),ve=a(131),ye=a(132),ge={github:new(function(){function e(){Object(Ee.a)(this,e)}return Object(ve.a)(e,[{key:"query",value:function(e){var t,a;return je.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,a=e.token,n.abrupt("return",Object(ye.graphql)("\n        query($searchQuery: String!) {\n          search(query: $searchQuery, type: ISSUE, first: 100) {\n            issueCount\n            nodes {\n              ... on Issue {\n                title\n                number\n                repository {\n                  owner {\n                    login\n                  }\n                  name\n                }\n                author {\n                  login\n                  avatarUrl\n                }\n                createdAt\n                closedAt\n                reactions(first: 100) {\n                  edges {\n                    node {\n                      content\n                    }\n                  }\n                }\n                comments {\n                  totalCount\n                }\n              }\n            }\n          }\n        }\n      ",{searchQuery:t,headers:{authorization:"Bearer ".concat(a)}}));case 2:case"end":return n.stop()}}))}}]),e}()),ajax:fe.a},Ae="https://5sy0eu5bsh.execute-api.us-west-2.amazonaws.com/dev";var Re="https://alukach.com";var Se,Ne={clientId:"3f43f5bebd8452ebf262",domain:Re,searchDebounceMs:300,basePath:"/ds-news",api:{auth:"".concat(Ae,"/auth")},paths:{feed:"/",login:"/login"}},Te=Object(p.a)(),we=Object(s.a)({dependencies:Object(i.a)({},ge,{config:Ne})}),ke=[we,Object(O.a)(Te)],qe=f(u.a.apply(void 0,ke)),Ue={key:"root",storage:b.a,whitelist:["auth","query"]},Ce=Object(d.b)(Ue,(Se=Te,Object(u.c)({router:Object(h.b)(Se),auth:g,query:P}))),_e=Object(u.e)(Ce,{},qe),Le=Object(d.c)(_e);we.run(Oe);var Ie=a(134),He=a(140),xe=a(18),Qe=Object(l.c)((function(e){return{isLoggedIn:!!e.auth.token}}),(function(e){return Object(u.b)({dispatchLogout:v},e)}))((function(e){var t=e.isLoggedIn,a=e.dispatchLogout;return c.a.createElement("nav",{id:"header",className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("img",{className:"logo",src:"".concat("/ds-news","/favicon.png"),alt:"ds news logo"}),c.a.createElement("h1",null,"ds news")),c.a.createElement("li",null,c.a.createElement("a",{className:"selected",href:"".concat("/ds-news").concat(Ne.paths.feed)},"feed"))),c.a.createElement("ul",null,c.a.createElement("li",null,t?c.a.createElement("button",{onClick:a,className:"link-button"},"logout"):c.a.createElement("a",{href:"https://github.com/login/oauth/authorize?client_id=".concat(Ne.clientId,"&redirect_uri=").concat(Ne.domain).concat(Ne.basePath).concat(Ne.paths.login,"&scope=repo")},"Login with Github"))))})),Pe=a(135),Fe=a.n(Pe),Ye=Object(l.c)((function(e){return{token:e.auth.token}}),(function(e){return Object(u.b)({dispatchfetchToken:E.request},e)}))((function(e){var t=e.location,a=e.dispatchfetchToken,r=e.token,o=Fe.a.parse(t.search).code,l=Array.isArray(o)?o[0]:o;return Object(n.useEffect)((function(){l&&a(l)}),[l,a]),o?r?c.a.createElement(xe.a,{to:"/"}):c.a.createElement("p",null,"Fetching auth token... ",r):c.a.createElement("p",{className:"error"},"No code provided. Please login.")})),De=a(101),Me={CONFUSED:":confused:",EYES:":eyes:",HEART:":heart:",HOORAY:":tada:",LAUGH:":smile:",ROCKET:":rocket:",THUMBS_DOWN:":-1:",THUMBS_UP:":+1:"},Ge=function(e){var t,a,n=e.title,r=e.number,o=e.author,l=e.createdAt,u=e.closedAt,s=e.repository,d=e.reactions,p=e.comments;return c.a.createElement("li",{className:u?"closed":""},c.a.createElement("h6",{className:"mb-0"},c.a.createElement("a",{href:"https://github.com/".concat(null===s||void 0===s?void 0:s.owner.login,"/").concat(null===s||void 0===s?void 0:s.name,"/issues/").concat(r)},n)),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/".concat(null===s||void 0===s?void 0:s.owner.login,"/").concat(null===s||void 0===s?void 0:s.name,"/issues/").concat(r)},c.a.createElement("strong",null,null===s||void 0===s?void 0:s.name),"#",r)," by ",c.a.createElement("a",{href:"https://github.com/".concat(null===o||void 0===o?void 0:o.login)},c.a.createElement("img",{src:null===o||void 0===o?void 0:o.avatarUrl,alt:"".concat(null===o||void 0===o?void 0:o.login," profile pic"),className:"mr-1",style:{maxHeight:"1rem",borderRadius:2,verticalAlign:"text-top"}}),null===o||void 0===o?void 0:o.login)," ",c.a.createElement("span",{title:l},L()(l).fromNow()),u&&c.a.createElement("em",{className:"small",title:u}," ","(closed ",L()(u).fromNow(),")")," | ",(null===(t=d.edges)||void 0===t?void 0:t.length)?Object.entries((null===d||void 0===d?void 0:null===(a=d.edges)||void 0===a?void 0:a.reduce((function(e,t){return Object(i.a)({},e,Object(pe.a)({},(null===t||void 0===t?void 0:t.node.content)||"",(e[(null===t||void 0===t?void 0:t.node.content)||""]||0)+1))}),{}))||{}).slice().sort((function(e,t){var a=Object($.a)(e,1)[0];return Object($.a)(t,1)[0]>a?-1:1})).map((function(e){var t=Object($.a)(e,2),a=t[0],n=t[1];return c.a.createElement("span",{key:a},c.a.createElement(De.a,{emoji:Me[a],size:16,tooltip:!0}),n>1&&c.a.createElement("sup",null,n))})):c.a.createElement("em",{className:"small"},"no reactions")," | ",c.a.createElement("span",null,p.totalCount?c.a.createElement(c.a.Fragment,null,c.a.createElement(De.a,{emoji:"speech_balloon",size:16,tooltip:!0}),p.totalCount>1&&c.a.createElement("sup",null,100===p.totalCount?"100+":p.totalCount)):c.a.createElement("em",{className:"small"},"no comments"))))},Be=function(e){var t=e.query.repo,a=e.results,r=e.dispatchAddRepo,o=e.dispatchRmRepo,l=Object(n.useState)(""),i=Object($.a)(l,2),u=i[0],s=i[1];return c.a.createElement("ul",{className:"col-sm-3 list-unstyled sidebar"},c.a.createElement("li",{className:"mt-2 "},c.a.createElement("h4",null,"last updated"),c.a.createElement("span",{className:"text-monospace small"},a&&("FETCHING"===a.status?"loading...":"".concat(a.asOf.toLowerCase())))),c.a.createElement("li",null,c.a.createElement("h4",null,"Repos"),c.a.createElement("ul",{className:"list-unstyled"},t.slice().sort().map((function(e,t){return c.a.createElement("li",{key:t,className:"overflow-auto text-nowrap"},c.a.createElement("span",{className:"ml-1 close-link",title:"remove repo",onClick:function(){return o(e)}}),c.a.createElement("pre",{className:"ml-1 d-inline"},e))}))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(u),s("")}},c.a.createElement("input",{type:"text",placeholder:"owner/repo",className:"small text-monospace w-100 pl-1 mt-2",value:u,onChange:function(e){return s(e.currentTarget.value)}}))))},ze=a(246),Je=a(244),Ke=a(248),We=a(242),$e=function(e){var t=e.sort,a=e.setSort,n=e.searchTerm,r=e.setSearchTerm,o={created:"recently created",updated:"recently updated",interactions:"interactions","reactions-heart":"loved","reactions-tada":"celebrated",reactions:"reactions","reactions-+1":"liked","reactions--1":"disliked"};return c.a.createElement("nav",{className:"navbar px-1"},c.a.createElement("ul",{className:"d-flex",style:{flexGrow:1}},c.a.createElement("li",{className:"w-100"},c.a.createElement("input",{placeholder:"Search",value:n,className:"text-monospace w-100",onChange:function(e){return r(e.currentTarget.value)}}))),c.a.createElement("ul",{className:"ml-auto"},c.a.createElement("li",{className:"ml-2"},c.a.createElement(ze.a,{className:"d-inline"},c.a.createElement(Je.a,{tag:"a",className:"link-button d-inline-block"},"most ",o[t]," \u25bc")," ",c.a.createElement(Ke.a,null,Object.entries(o).map((function(e){var t=Object($.a)(e,2),n=t[0],r=t[1];return c.a.createElement(We.a,{key:n,onClick:function(){return a(n)}},r)})))))))},Xe=Object(l.c)((function(e){var t=e.query;return{query:t.query,results:t.results,polling:t.polling}}),(function(e){return Object(u.b)({dispatchSetSearchTerm:S,dispatchSetSort:N,dispatchAddRepo:T,dispatchRmRepo:w},e)}))((function(e){var t,a=e.results,n=e.query,r=e.dispatchSetSort,o=e.dispatchSetSearchTerm,l=e.dispatchAddRepo,i=e.dispatchRmRepo;return c.a.createElement("div",{className:"row no-gutters"},c.a.createElement("div",{className:"col-sm pr-1"},c.a.createElement($e,{sort:n.sort,setSort:r,searchTerm:n.search,setSearchTerm:o}),"FAILED"===(null===a||void 0===a?void 0:a.status)?c.a.createElement("pre",null,a.error):(null===a||void 0===a?void 0:a.data)&&c.a.createElement("ol",{className:"issues"},null===(t=a.data.search.nodes)||void 0===t?void 0:t.filter((function(e){return 0!==Object.entries(e).length})).map((function(e,t){return c.a.createElement(Ge,Object.assign({key:t},e))}))),c.a.createElement("code",null,de(n))),c.a.createElement(Be,{query:n,results:a,dispatchAddRepo:l,dispatchRmRepo:i}))})),Ve=function(){return c.a.createElement(l.a,{store:_e},c.a.createElement(h.a,{history:Te},c.a.createElement(Ie.a,{persistor:Le,loading:c.a.createElement("p",null,"Loading...")},c.a.createElement(He.a,{basename:Ne.basePath},c.a.createElement(Qe,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement(xe.d,null,c.a.createElement(xe.b,{path:Ne.paths.login,component:Ye}),c.a.createElement(xe.b,{path:Ne.paths.feed,component:Xe})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[141,1,2]]]);
//# sourceMappingURL=main.9ee7a011.chunk.js.map