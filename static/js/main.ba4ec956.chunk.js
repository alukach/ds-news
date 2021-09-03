(this["webpackJsonpds-news"]=this["webpackJsonpds-news"]||[]).push([[0],{139:function(e,t,a){e.exports=a(219)},144:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(65),o=a.n(c),i=(a(144),a(23)),l=a(10),u=a(239),s=a(51),d=a(20),p=a(129),h=a.n(p),m=a(111),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,O=a(43),E=a(5),f=Object(E.createAsyncAction)("AUTH/FETCH_TOKEN_REQUEST","AUTH/FETCH_TOKEN_SUCCESS","AUTH/FETCH_TOKEN_FAILURE")(),v=Object(E.createAction)("AUTH/LOGOUT")(),j=Object(E.createReducer)(null).handleType(Object(E.getType)(f.request),(function(e,t){return{status:"FETCHING",data:void 0,error:void 0}})).handleType(Object(E.getType)(f.success),(function(e,t){return{status:"SUCCESS",data:t.payload,error:void 0}})).handleType(Object(E.getType)(f.failure),(function(e,t){return{status:"FAILED",data:void 0,error:t.payload}})).handleType(Object(E.getType)(v),(function(){return null})),g=Object(l.c)({token:j}),A=a(41),y=a(9),R=Object(E.createAction)("QUERY/SET")(),N=Object(E.createAction)("QUERY/SET_SEARCH_TERM")(),T=Object(E.createAction)("QUERY/SET_SORT")(),U=Object(E.createAction)("QUERY/REPO_ADD")(),S=Object(E.createAction)("QUERY/REPO_RM")(),q=Object(E.createAction)("QUERY/REPO_IGNORE")(),k=Object(E.createAction)("QUERY/REPO_UNIGNORE")(),C=Object(E.createAction)("QUERY/AUTHOR_ADD")(),I=Object(E.createAction)("QUERY/AUTHOR_RM")(),_=Object(E.createAction)("QUERY/AUTHOR_SET")(),w=Object(E.createAction)("QUERY/AUTHOR_IGNORE")(),L=Object(E.createAction)("QUERY/AUTHOR_UNIGNORE")(),H=Object(E.createAsyncAction)("QUERY/SEARCH_REQUEST","QUERY/SEARCH_SUCCESS","QUERY/SEARCH_FAILURE")(),x=Object(E.createAction)("QUERY/START_POLLING")(),Q=Object(E.createAction)("QUERY/STOP_POLLING")(),F=Object(E.createAction)("QUERY/SET_POLLING_TIMER")(),Y=a(29),G=a.n(Y),P={search:"",repo:[],author:[],sort:"created",ignoredRepo:[],ignoredAuthor:[]},D=null,M={active:!0,count:null,interval:300},B=Object(E.createReducer)(P).handleAction(N,(function(e,t){var a=t.payload;return Object(y.a)({},e,{search:a})})).handleAction(R,(function(e,t){var a=t.payload;return Object(y.a)({},P,{},a)})).handleAction(T,(function(e,t){var a=t.payload;return Object(y.a)({},e,{sort:a})})).handleAction(U,(function(e,t){var a=t.payload,n=e.repo,r=Object(A.a)(e,["repo"]);return Object(y.a)({},r,{repo:n.includes(a)?n:n.concat(a)})})).handleAction(S,(function(e,t){var a=t.payload,n=e.repo,r=Object(A.a)(e,["repo"]);return Object(y.a)({},r,{repo:n.filter((function(e){return e!==a}))})})).handleAction(q,(function(e,t){var a=t.payload;return Object(y.a)({},e,{ignoredRepo:e.ignoredRepo.concat(a)})})).handleAction(k,(function(e,t){var a=t.payload;return Object(y.a)({},e,{ignoredRepo:e.ignoredRepo.filter((function(e){return e!==a}))})})).handleAction(C,(function(e,t){var a=t.payload,n=e.author,r=Object(A.a)(e,["author"]);return Object(y.a)({},r,{author:n.includes(a)?n:n.concat(a)})})).handleAction(I,(function(e,t){var a=t.payload,n=e.author,r=Object(A.a)(e,["author"]);return Object(y.a)({},r,{author:n.filter((function(e){return e!==a}))})})).handleAction(_,(function(e,t){var a=t.payload;return Object(y.a)({},e,{author:[a]})})).handleAction(w,(function(e,t){var a=t.payload;return Object(y.a)({},e,{ignoredAuthor:e.ignoredAuthor.concat(a)})})).handleAction(L,(function(e,t){var a=t.payload;return Object(y.a)({},e,{ignoredAuthor:e.ignoredAuthor.filter((function(e){return e!==a}))})})),z=Object(E.createReducer)(D).handleAction(H.request,(function(e,t){return{status:"FETCHING",data:null===e||void 0===e?void 0:e.data,error:void 0,asOf:G()().format("LLL")}})).handleAction(H.success,(function(e,t){return{status:"SUCCESS",data:t.payload,error:void 0,asOf:G()().format("LLL")}})).handleAction(H.failure,(function(e,t){return{status:"FAILED",data:void 0,error:t.payload,asOf:G()().format("LLL")}})),J=Object(E.createReducer)(M).handleAction(x,(function(e){return Object(y.a)({},e,{active:!0})})).handleAction(Q,(function(e){return Object(y.a)({},e,{count:null,active:!1})})).handleAction(F,(function(e,t){var a=t.payload;return Object(y.a)({},e,{count:a})})),K=Object(l.c)({query:B,results:z,polling:J}),W=a(105),$=a(237),X=a(73),V=a(223),Z=a(101),ee=a(45),te=a(228),ae=[function(e,t,a){var n=a.ajax,r=a.config;return e.pipe(Object(V.a)(Object(E.isActionOf)(f.request)),Object(Z.a)((function(e){var t=e.payload;return n.post(r.api.auth,{code:t},{"Content-Type":"application/json",Accept:"application/json"}).pipe(Object(ee.a)((function(e){return e.response})),Object(ee.a)((function(e){return e.error?f.failure(e.error_description.split("+").join(" ")):e.access_token?f.success(e.access_token):f.failure("Received invalid access token")})),Object(te.a)((function(e){return Object(X.a)(f.failure(e))})))})))}],ne=a(15),re=a(16),ce=a(131),oe=a(224),ie=a(244),le=a(233),ue=a(80),se=a(229),de=a(230),pe=a(231),he=a(232),me=a(234),be=a(235),Oe=a(236),Ee=a(130),fe=Object(Ee.a)([function(e){return e}],(function(e){var t=e.repo,a=e.author,n=e.ignoredAuthor,r=e.ignoredRepo,c=Object(A.a)(e,["repo","author","ignoredAuthor","ignoredRepo"]);return Object.entries(Object(y.a)({},c,{repo:t.filter((function(e){return!r.includes(e)})),author:a.filter((function(e){return!n.includes(e)}))})).filter((function(e){var t=Object(ne.a)(e,2),a=(t[0],t[1]);return Array.isArray(a)?a.length:a})).flatMap((function(e){var t=Object(ne.a)(e,2),a=t[0],n=t[1];return Array.isArray(n)?n.map((function(e){return[a,e]})):[[a,n]]})).map((function(e){var t=Object(ne.a)(e,2),a=t[0],n=t[1];return"search"===a?n:"".concat(a,":").concat(n)})).join(" ")})),ve=a(26),je=function(e){var t=Object(ne.a)(e,2),a=t[0],n=t[1];return JSON.stringify(a.query.query)!==JSON.stringify(n.query.query)},ge=[function(e,t,a){var n=a.config;return(t.pipe(Object(V.a)((function(){return t.value.router.location.pathname==="".concat(n.basePath).concat(n.paths.feed)})),Object(se.a)(),Object(V.a)(je),Object(de.a)(n.searchDebounceMs),Object(ee.a)((function(e){var t=Object(ne.a)(e,2);t[0];return t[1].query.query})),Object(ee.a)((function(e){return Object(re.d)(Object(y.a)({},t.value.router.location,{search:"q=".concat(encodeURIComponent(fe(e)))}))}))))},function(e,t,a){var n=a.config;return e.pipe(Object(ce.a)(s.a),Object(V.a)((function(){return t.value.router.location.pathname==="".concat(n.basePath).concat(n.paths.feed)})),Object(ee.a)((function(){return R((e=t.value.router.location.search.slice(3),decodeURIComponent(e).split(" ").map((function(e){return e.split(":")})).reduce((function(e,t){return Object(y.a)({},e,{},1!==t.filter(Boolean).length&&["sort","repo","author"].includes(t[0])?Object(ve.a)({},t[0],(e[t[0]]||[]).concat(t.slice(1).join(":"))):{search:e.search?"".concat(e.search," ").concat(t.join(":")):t.join(":")})}),{})));var e})))},function(e,t,a){var n=a.config;return(Object(oe.a)(e.pipe(Object(V.a)(Object(E.isActionOf)(f.success))),e.pipe(Object(V.a)(Object(E.isActionOf)(F)),Object(V.a)((function(e){return 0===e.payload}))),t.pipe(Object(se.a)(),Object(V.a)(je))).pipe(Object(V.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)})),Object(de.a)(n.searchDebounceMs),Object(ee.a)((function(){return H.request(fe(t.value.query.query))}))))},function(e,t,a){var n=a.github;a.ajax;return e.pipe(Object(V.a)(Object(E.isActionOf)(H.request)),Object(Z.a)((function(e){var a,r=e.payload;return(null===(a=t.value.auth.token)||void 0===a?void 0:a.data)?Object(ue.a)(n.query({query:r,token:t.value.auth.token.data})).pipe(Object(ee.a)((function(e){return H.success(e)})),Object(te.a)((function(e){return Object(X.a)(H.failure("Failed to query Github: ".concat(e.message)))}))):Object(X.a)(H.failure("You must be logged in to query Github"))})))},function(e,t){return e.pipe(Object(V.a)(Object(E.isActionOf)(x)),Object(he.a)(Object(le.a)(0,1e3).pipe(Object(ee.a)((function(e){return t.value.query.polling.interval-e})),Object(me.a)((function(e){return e>=0})),Object(ee.a)(F),Object(be.a)(),Object(Oe.a)(e.pipe(Object(ce.a)(Q))))))},function(e,t){return e.pipe(Object(ce.a)(s.a),Object(pe.a)(Object(ie.a)(Object(X.a)(H.request(fe(t.value.query.query))).pipe(Object(V.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)}))),Object(X.a)(x()).pipe(Object(V.a)((function(){return!!t.value.query.polling.active})),Object(V.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)}))))))}],Ae=$.a.apply(void 0,Object(W.a)(ae).concat(Object(W.a)(ge))),ye=a(241),Re="https://5sy0eu5bsh.execute-api.us-west-2.amazonaws.com/dev";var Ne="https://alukach.com";var Te,Ue={clientId:"3f43f5bebd8452ebf262",domain:Ne,searchDebounceMs:300,basePath:"/ds-news",api:{auth:"".concat(Re,"/auth")},paths:{feed:"/",login:"/login",about:"/about"}},Se=a(46),qe=a(132),ke={ajax:ye.a,config:Ue,github:new function e(){Object(Se.a)(this,e),this.query=function(e){var t=e.query,a=e.token;return Object(qe.graphql)("\n        query($searchQuery: String!) {\n          search(query: $searchQuery, type: ISSUE, first: 100) {\n            issueCount\n            nodes {\n              ... on Issue {\n                title\n                number\n                repository {\n                  owner {\n                    login\n                  }\n                  name\n                }\n                author {\n                  login\n                  avatarUrl\n                }\n                createdAt\n                closedAt\n                reactions(first: 100) {\n                  edges {\n                    node {\n                      content\n                    }\n                  }\n                }\n                comments {\n                  totalCount\n                }\n              }\n            }\n          }\n        }\n      ",{searchQuery:t,headers:{authorization:"Bearer ".concat(a)}})}}},Ce=Object(d.a)(),Ie=Object(u.a)({dependencies:ke}),_e=[Ie,Object(m.a)(Ce)],we=b(l.a.apply(void 0,_e)),Le={key:"root",storage:h.a,whitelist:["auth","query"]},He=Object(s.b)(Le,(Te=Ce,Object(l.c)({router:Object(O.b)(Te),auth:g,query:K}))),xe=Object(l.e)(He,{},we),Qe=Object(s.c)(xe);Ie.run(Ae);var Fe=a(134),Ye=a(78),Ge=a(18),Pe=a(77),De=a.n(Pe),Me=Object(i.c)((function(e){var t;return{isLoggedIn:!!(null===(t=e.auth.token)||void 0===t?void 0:t.data)}}),(function(e){return Object(l.b)({dispatchLogout:v},e)}))((function(e){var t=e.isLoggedIn,a=e.dispatchLogout,n=Object(Ge.g)().search,c=De.a.stringifyUrl({url:"https://github.com/login/oauth/authorize",query:{client_id:Ue.clientId,redirect_uri:"".concat(Ue.domain).concat(Ue.basePath).concat(Ue.paths.login),scope:"repo",state:n}});return r.a.createElement("nav",{id:"header",className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"logo",src:"".concat("/ds-news","/favicon.png"),alt:"ds news logo"}),r.a.createElement("h1",null,"ds news")),r.a.createElement("li",null,r.a.createElement(Ye.b,{activeClassName:"selected",exact:!0,to:"".concat("/ds-news").concat(Ue.paths.feed)},"feed"))),r.a.createElement("ul",null,r.a.createElement("li",null,t?r.a.createElement("button",{onClick:a,className:"link-button"},"logout"):r.a.createElement("a",{href:c},"Login with Github"))))})),Be=Object(i.c)((function(e){return{token:e.auth.token}}),(function(e){return Object(l.b)({dispatchfetchToken:f.request},e)}))((function(e){var t=e.location,a=e.dispatchfetchToken,c=e.token,o=De.a.parse(t.search),i=o.code,l=o.state,u=void 0===l?"":l,s=Array.isArray(i)?i[0]:i;return Object(n.useEffect)((function(){s&&a(s)}),[s,a]),i?"FETCHING"===(null===c||void 0===c?void 0:c.status)?r.a.createElement("p",null,"Fetching auth token..."):"FAILED"===(null===c||void 0===c?void 0:c.status)?r.a.createElement("p",{className:"error"},c.error):r.a.createElement(Ge.a,{to:{pathname:Ue.paths.feed,search:u}}):r.a.createElement("p",{className:"error"},"No code provided. Please login.")})),ze=a(104),Je={CONFUSED:":confused:",EYES:":eyes:",HEART:":heart:",HOORAY:":tada:",LAUGH:":smile:",ROCKET:":rocket:",THUMBS_DOWN:":-1:",THUMBS_UP:":+1:"},Ke=function(e){var t,a,n=e.title,c=e.number,o=e.author,i=e.createdAt,l=e.closedAt,u=e.repository,s=e.reactions,d=e.comments;return r.a.createElement("li",{className:"issue ".concat(l?"closed":"")},r.a.createElement("h6",{className:"mb-0"},r.a.createElement("a",{href:"https://github.com/".concat(null===u||void 0===u?void 0:u.owner.login,"/").concat(null===u||void 0===u?void 0:u.name,"/issues/").concat(c)},n)),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/".concat(null===u||void 0===u?void 0:u.owner.login,"/").concat(null===u||void 0===u?void 0:u.name,"/issues/").concat(c)},r.a.createElement("strong",null,null===u||void 0===u?void 0:u.name),"#",c)," by ",r.a.createElement("a",{href:"https://github.com/".concat(null===o||void 0===o?void 0:o.login)},r.a.createElement("img",{src:null===o||void 0===o?void 0:o.avatarUrl,alt:"".concat(null===o||void 0===o?void 0:o.login," profile pic"),className:"mr-1",style:{maxHeight:"1rem",borderRadius:2,verticalAlign:"text-top"}}),null===o||void 0===o?void 0:o.login)," ",r.a.createElement("span",{title:i},G()(i).fromNow()),l&&r.a.createElement("em",{className:"small",title:l}," ","(closed ",G()(l).fromNow(),")")," | ",(null===(t=s.edges)||void 0===t?void 0:t.length)?Object.entries((null===s||void 0===s?void 0:null===(a=s.edges)||void 0===a?void 0:a.reduce((function(e,t){return Object(y.a)({},e,Object(ve.a)({},(null===t||void 0===t?void 0:t.node.content)||"",(e[(null===t||void 0===t?void 0:t.node.content)||""]||0)+1))}),{}))||{}).slice().sort((function(e,t){var a=Object(ne.a)(e,1)[0];return Object(ne.a)(t,1)[0]>a?-1:1})).map((function(e){var t=Object(ne.a)(e,2),a=t[0],n=t[1];return r.a.createElement("span",{key:a},r.a.createElement(ze.a,{emoji:Je[a],size:16,tooltip:!0}),n>1&&r.a.createElement("sup",null,n))})):r.a.createElement("em",{className:"small"},"no reactions")," | ",r.a.createElement("span",null,d.totalCount?r.a.createElement(r.a.Fragment,null,r.a.createElement(ze.a,{emoji:"speech_balloon",size:16,tooltip:!0}),d.totalCount>1&&r.a.createElement("sup",null,100===d.totalCount?"100+":d.totalCount)):r.a.createElement("em",{className:"small"},"no comments"))))},We=function(e){var t=e.results;return r.a.createElement("div",{className:"text-monospace small"},t&&("FETCHING"===t.status?"loading...":"".concat(t.asOf.toLowerCase())))},$e=function(e){var t=e.seconds;return r.a.createElement("div",{className:"text-monospace small faded"},"refreshing in"," ",t?t>45?G()().add(t,"seconds").fromNow(!0):"".concat(t," seconds"):"...")},Xe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"ml-1 close-link pointer",title:"remove ".concat(e.title),onClick:function(){return e.remove(e.entry)}}),r.a.createElement("pre",{className:"ml-1 d-inline pointer ".concat(e.ignored?"strikethrough":""),onClick:function(){return e.ignored?e.unignore(e.entry):e.ignore(e.entry)}},e.entry))},Ve=function(e){var t=e.entries,a=e.dispatchRmEntry,n=e.dispatchIgnoreEntry,c=e.dispatchUnignoreEntry,o=e.title,i=e.fallbackText,l=e.ignored;return r.a.createElement("ul",{className:"list-unstyled"},t.length?t.slice().sort().map((function(e,t){return r.a.createElement("li",{key:t,className:"overflow-auto text-nowrap"},r.a.createElement(Xe,{title:o,entry:e,ignored:l.includes(e),ignore:n.bind(e),unignore:c.bind(e),remove:a.bind(e)}))})):i)},Ze=function(e){var t=e.dispatchAddEntry,a=e.placeholder,c=Object(n.useState)(""),o=Object(ne.a)(c,2),i=o[0],l=o[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),l("")}},r.a.createElement("input",{type:"text",placeholder:a,className:"small text-monospace w-100 pl-1 mt-2",value:i,onChange:function(e){return l(e.currentTarget.value)}}))},et=function(e){return r.a.createElement("ul",{className:"col-sm-3 list-unstyled sidebar"},r.a.createElement("li",{className:"mt-2 "},r.a.createElement("h4",null,"last updated"),r.a.createElement(We,{results:e.results}),r.a.createElement($e,{seconds:e.secondsUntilNextPoll})),r.a.createElement("li",null,r.a.createElement("h4",null,"Repos"),r.a.createElement(Ve,{title:"repo",entries:e.repos,ignored:e.ignoredRepos,dispatchRmEntry:e.dispatchRmRepo,dispatchIgnoreEntry:e.dispatchIgnoreRepo,dispatchUnignoreEntry:e.dispatchUnignoreRepo,fallbackText:r.a.createElement("p",{className:"error"},"at least one repo required")}),r.a.createElement(Ze,{placeholder:"owner/repo",dispatchAddEntry:e.dispatchAddRepo})),r.a.createElement("li",null,r.a.createElement("h4",null,"Authors"),r.a.createElement(Ve,{title:"author",entries:e.authors,ignored:e.ignoredAuthors,dispatchRmEntry:e.dispatchRmAuthor,dispatchIgnoreEntry:e.dispatchIgnoreAuthor,dispatchUnignoreEntry:e.dispatchUnignoreAuthor,fallbackText:r.a.createElement("div",{className:"text-monospace small faded"},"all authors")}),r.a.createElement(Ze,{placeholder:"username",dispatchAddEntry:e.dispatchAddAuthor})))},tt=a(242),at=a(240),nt=a(243),rt=a(238),ct=function(e){var t=e.sort,a=e.setSort,n=e.searchTerm,c=e.setSearchTerm,o=e.isFetching,i={created:"recently created",updated:"recently updated",interactions:"interactions","reactions-heart":"loved","reactions-tada":"celebrated",reactions:"reactions","reactions-+1":"liked","reactions--1":"disliked"};return r.a.createElement("nav",{className:"navbar px-0"},r.a.createElement("ul",{className:"d-flex",style:{flexGrow:1}},r.a.createElement("li",{className:"w-100"},r.a.createElement("input",{placeholder:"Search",value:n,className:"text-monospace w-100 ".concat(o?"loading":""),onChange:function(e){return c(e.currentTarget.value)}}))),r.a.createElement("ul",{className:"ml-auto"},r.a.createElement("li",{className:"ml-2"},r.a.createElement(tt.a,{className:"d-inline"},r.a.createElement(at.a,{tag:"a",className:"link-button d-inline-block"},"most ",i[t]," \u25bc")," ",r.a.createElement(nt.a,null,Object.entries(i).map((function(e){var t=Object(ne.a)(e,2),n=t[0],c=t[1];return r.a.createElement(rt.a,{key:n,onClick:function(){return a(n)}},c)})))))))},ot=Object(i.c)((function(e){var t=e.query;return{query:t.query,results:t.results,polling:t.polling}}),(function(e){return Object(l.b)({dispatchSetSearchTerm:N,dispatchSetSort:T,dispatchAddRepo:U,dispatchRmRepo:S,dispatchIgnoreRepo:q,dispatchUnignoreRepo:k,dispatchAddAuthor:C,dispatchRmAuthor:I,dispatchIgnoreAuthor:w,dispatchUnignoreAuthor:L},e)}))((function(e){var t,a,n,c;return r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-sm pr-1"},r.a.createElement(ct,{sort:e.query.sort,setSort:e.dispatchSetSort,searchTerm:e.query.search,setSearchTerm:e.dispatchSetSearchTerm,isFetching:"FETCHING"==(null===(t=e.results)||void 0===t?void 0:t.status)}),"FAILED"===(null===(a=e.results)||void 0===a?void 0:a.status)?r.a.createElement("pre",null,e.results.error):(null===(n=e.results)||void 0===n?void 0:n.data)&&r.a.createElement("ol",{className:"issues"},null===(c=e.results.data.search.nodes)||void 0===c?void 0:c.filter((function(e){return 0!==Object.entries(e).length})).map((function(e,t){return r.a.createElement(Ke,Object.assign({key:t},e))}))),r.a.createElement("code",null,fe(e.query))),r.a.createElement(et,{results:e.results,secondsUntilNextPoll:e.polling.count,repos:e.query.repo,ignoredRepos:e.query.ignoredRepo,dispatchAddRepo:e.dispatchAddRepo,dispatchRmRepo:e.dispatchRmRepo,dispatchIgnoreRepo:e.dispatchIgnoreRepo,dispatchUnignoreRepo:e.dispatchUnignoreRepo,authors:e.query.author,ignoredAuthors:e.query.ignoredAuthor,dispatchAddAuthor:e.dispatchAddAuthor,dispatchRmAuthor:e.dispatchRmAuthor,dispatchIgnoreAuthor:e.dispatchIgnoreAuthor,dispatchUnignoreAuthor:e.dispatchUnignoreAuthor}))})),it=function(){return r.a.createElement("div",{style:{marginTop:"0.5rem"}},r.a.createElement("h4",null,"About"),r.a.createElement("p",{className:"error"},"TODO: Center this"))},lt=function(){return r.a.createElement(i.a,{store:xe},r.a.createElement(O.a,{history:Ce},r.a.createElement(Fe.a,{persistor:Qe,loading:r.a.createElement("p",null,"Loading...")},r.a.createElement(Ye.a,{basename:Ue.basePath},r.a.createElement(Me,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(Ge.d,null,r.a.createElement(Ge.b,{path:Ue.paths.login,component:Be}),r.a.createElement(Ge.b,{path:Ue.paths.about,component:it}),r.a.createElement(Ge.b,{path:Ue.paths.feed,component:ot})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.ba4ec956.chunk.js.map