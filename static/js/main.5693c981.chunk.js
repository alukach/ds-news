(this["webpackJsonpds-news"]=this["webpackJsonpds-news"]||[]).push([[0],{139:function(e,t,n){e.exports=n(219)},144:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(65),o=n.n(c),i=(n(144),n(23)),l=n(10),u=n(239),s=n(51),d=n(20),p=n(129),h=n.n(p),m=n(111),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,O=n(43),E=n(5),f=Object(E.createAsyncAction)("AUTH/FETCH_TOKEN_REQUEST","AUTH/FETCH_TOKEN_SUCCESS","AUTH/FETCH_TOKEN_FAILURE")(),v=Object(E.createAction)("AUTH/LOGOUT")(),j=Object(E.createReducer)(null).handleType(Object(E.getType)(f.request),(function(e,t){return{status:"FETCHING",data:void 0,error:void 0}})).handleType(Object(E.getType)(f.success),(function(e,t){return{status:"SUCCESS",data:t.payload,error:void 0}})).handleType(Object(E.getType)(f.failure),(function(e,t){return{status:"FAILED",data:void 0,error:t.payload}})).handleType(Object(E.getType)(v),(function(){return null})),g=Object(l.c)({token:j}),A=n(41),y=n(9),R=Object(E.createAction)("QUERY/SET")(),N=Object(E.createAction)("QUERY/SET_SEARCH_TERM")(),T=Object(E.createAction)("QUERY/SET_SORT")(),U=Object(E.createAction)("QUERY/REPO_ADD")(),_=Object(E.createAction)("QUERY/REPO_RM")(),S=Object(E.createAction)("QUERY/REPO_IGNORE")(),C=Object(E.createAction)("QUERY/REPO_UNIGNORE")(),I=Object(E.createAction)("QUERY/AUTHOR_ADD")(),q=Object(E.createAction)("QUERY/AUTHOR_RM")(),w=Object(E.createAction)("QUERY/AUTHOR_SET")(),k=Object(E.createAction)("QUERY/AUTHOR_IGNORE")(),L=Object(E.createAction)("QUERY/AUTHOR_UNIGNORE")(),P=Object(E.createAsyncAction)("QUERY/SEARCH_REQUEST","QUERY/SEARCH_SUCCESS","QUERY/SEARCH_FAILURE")(),H=Object(E.createAction)("QUERY/START_POLLING")(),D=Object(E.createAction)("QUERY/STOP_POLLING")(),Q=Object(E.createAction)("QUERY/SET_POLLING_TIMER")(),x=n(29),F=n.n(x),Y={search:"",repo:[],author:[],sort:"created",ignoredRepo:[],ignoredAuthor:[]},G=null,M={active:!0,count:null,interval:300},B=Object(E.createReducer)(Y).handleAction(N,(function(e,t){var n=t.payload;return Object(y.a)({},e,{search:n})})).handleAction(R,(function(e,t){var n=t.payload;return Object(y.a)({},Y,{},n)})).handleAction(T,(function(e,t){var n=t.payload;return Object(y.a)({},e,{sort:n})})).handleAction(U,(function(e,t){var n=t.payload,a=e.repo,r=Object(A.a)(e,["repo"]);return Object(y.a)({},r,{repo:a.includes(n)?a:a.concat(n)})})).handleAction(_,(function(e,t){var n=t.payload,a=e.repo,r=Object(A.a)(e,["repo"]);return Object(y.a)({},r,{repo:a.filter((function(e){return e!==n}))})})).handleAction(S,(function(e,t){var n=t.payload;return Object(y.a)({},e,{ignoredRepo:e.ignoredRepo.concat(n)})})).handleAction(C,(function(e,t){var n=t.payload;return Object(y.a)({},e,{ignoredRepo:e.ignoredRepo.filter((function(e){return e!==n}))})})).handleAction(I,(function(e,t){var n=t.payload,a=e.author,r=Object(A.a)(e,["author"]);return Object(y.a)({},r,{author:a.includes(n)?a:a.concat(n)})})).handleAction(q,(function(e,t){var n=t.payload,a=e.author,r=Object(A.a)(e,["author"]);return Object(y.a)({},r,{author:a.filter((function(e){return e!==n}))})})).handleAction(w,(function(e,t){var n=t.payload;return Object(y.a)({},e,{author:[n]})})).handleAction(k,(function(e,t){var n=t.payload;return Object(y.a)({},e,{ignoredAuthor:e.ignoredAuthor.concat(n)})})).handleAction(L,(function(e,t){var n=t.payload;return Object(y.a)({},e,{ignoredAuthor:e.ignoredAuthor.filter((function(e){return e!==n}))})})),V=Object(E.createReducer)(G).handleAction(P.request,(function(e,t){return{status:"FETCHING",data:null===e||void 0===e?void 0:e.data,error:void 0,asOf:F()().format("LLL")}})).handleAction(P.success,(function(e,t){return{status:"SUCCESS",data:t.payload,error:void 0,asOf:F()().format("LLL")}})).handleAction(P.failure,(function(e,t){return{status:"FAILED",data:void 0,error:t.payload,asOf:F()().format("LLL")}})),z=Object(E.createReducer)(M).handleAction(H,(function(e){return Object(y.a)({},e,{active:!0})})).handleAction(D,(function(e){return Object(y.a)({},e,{count:null,active:!1})})).handleAction(Q,(function(e,t){var n=t.payload;return Object(y.a)({},e,{count:n})})),J=Object(l.c)({query:B,results:V,polling:z}),K=n(105),W=n(237),$=n(73),X=n(223),Z=n(101),ee=n(45),te=n(228),ne=[function(e,t,n){var a=n.ajax,r=n.config;return e.pipe(Object(X.a)(Object(E.isActionOf)(f.request)),Object(Z.a)((function(e){var t=e.payload;return a.post(r.api.auth,{code:t},{"Content-Type":"application/json",Accept:"application/json"}).pipe(Object(ee.a)((function(e){return e.response})),Object(ee.a)((function(e){return e.error?f.failure(e.error_description.split("+").join(" ")):e.access_token?f.success(e.access_token):f.failure("Received invalid access token")})),Object(te.a)((function(e){return Object($.a)(f.failure(e))})))})))}],ae=n(15),re=n(16),ce=n(131),oe=n(224),ie=n(244),le=n(233),ue=n(80),se=n(229),de=n(230),pe=n(231),he=n(232),me=n(234),be=n(235),Oe=n(236),Ee=n(130),fe=Object(Ee.a)([function(e){return e}],(function(e){var t=e.repo,n=e.author,a=e.ignoredAuthor,r=e.ignoredRepo,c=Object(A.a)(e,["repo","author","ignoredAuthor","ignoredRepo"]);return Object.entries(Object(y.a)({},c,{repo:t.filter((function(e){return!r.includes(e)})),author:n.filter((function(e){return!a.includes(e)}))})).filter((function(e){var t=Object(ae.a)(e,2),n=(t[0],t[1]);return Array.isArray(n)?n.length:n})).flatMap((function(e){var t=Object(ae.a)(e,2),n=t[0],a=t[1];return Array.isArray(a)?a.map((function(e){return[n,e]})):[[n,a]]})).map((function(e){var t=Object(ae.a)(e,2),n=t[0],a=t[1];return"search"===n?a:"".concat(n,":").concat(a)})).join(" ")})),ve=n(26),je=function(e){var t=Object(ae.a)(e,2),n=t[0],a=t[1];return JSON.stringify(n.query.query)!==JSON.stringify(a.query.query)},ge=[function(e,t,n){var a=n.config;return(t.pipe(Object(X.a)((function(){return t.value.router.location.pathname==="".concat(a.basePath).concat(a.paths.feed)})),Object(se.a)(),Object(X.a)(je),Object(de.a)(a.searchDebounceMs),Object(ee.a)((function(e){var t=Object(ae.a)(e,2);t[0];return t[1].query.query})),Object(ee.a)((function(e){return Object(re.d)(Object(y.a)({},t.value.router.location,{search:"q=".concat(encodeURIComponent(fe(e)))}))}))))},function(e,t,n){var a=n.config;return e.pipe(Object(ce.a)(s.a),Object(X.a)((function(){return t.value.router.location.pathname==="".concat(a.basePath).concat(a.paths.feed)})),Object(ee.a)((function(){return R((e=t.value.router.location.search.slice(3),decodeURIComponent(e).split(" ").map((function(e){return e.split(":")})).reduce((function(e,t){return Object(y.a)({},e,{},1!==t.filter(Boolean).length&&["sort","repo","author"].includes(t[0])?Object(ve.a)({},t[0],(e[t[0]]||[]).concat(t.slice(1).join(":"))):{search:e.search?"".concat(e.search," ").concat(t.join(":")):t.join(":")})}),{})));var e})))},function(e,t,n){var a=n.config;return(Object(oe.a)(e.pipe(Object(X.a)(Object(E.isActionOf)(f.success))),e.pipe(Object(X.a)(Object(E.isActionOf)(Q)),Object(X.a)((function(e){return 0===e.payload}))),t.pipe(Object(se.a)(),Object(X.a)(je))).pipe(Object(X.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)})),Object(de.a)(a.searchDebounceMs),Object(ee.a)((function(){return P.request(fe(t.value.query.query))}))))},function(e,t,n){var a=n.github;n.ajax;return e.pipe(Object(X.a)(Object(E.isActionOf)(P.request)),Object(Z.a)((function(e){var n,r=e.payload;return(null===(n=t.value.auth.token)||void 0===n?void 0:n.data)?Object(ue.a)(a.query({query:r,token:t.value.auth.token.data})).pipe(Object(ee.a)((function(e){return P.success(e)})),Object(te.a)((function(e){return Object($.a)(P.failure("Failed to query Github: ".concat(e.message)))}))):Object($.a)(P.failure("You must be logged in to query Github"))})))},function(e,t){return e.pipe(Object(X.a)(Object(E.isActionOf)(H)),Object(he.a)(Object(le.a)(0,1e3).pipe(Object(ee.a)((function(e){return t.value.query.polling.interval-e})),Object(me.a)((function(e){return e>=0})),Object(ee.a)(Q),Object(be.a)(),Object(Oe.a)(e.pipe(Object(ce.a)(D))))))},function(e,t){return e.pipe(Object(ce.a)(s.a),Object(pe.a)(Object(ie.a)(Object($.a)(P.request(fe(t.value.query.query))).pipe(Object(X.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)}))),Object($.a)(H()).pipe(Object(X.a)((function(){return!!t.value.query.polling.active})),Object(X.a)((function(){var e;return!!(null===(e=t.value.auth.token)||void 0===e?void 0:e.data)}))))))}],Ae=W.a.apply(void 0,Object(K.a)(ne).concat(Object(K.a)(ge))),ye=n(241),Re=Object({NODE_ENV:"production",PUBLIC_URL:"/ds-news"}).REACT_APP_API_URL;if(!Re)throw new Error('Variable "REACT_APP_API_URL" not set');var Ne=Object({NODE_ENV:"production",PUBLIC_URL:"/ds-news"}).REACT_APP_GH_CLIENT_ID;if(!Ne)throw new Error('Variable "REACT_APP_GH_CLIENT_ID" not set');var Te=Object({NODE_ENV:"production",PUBLIC_URL:"/ds-news"}).REACT_APP_DOMAIN;if(!Te)throw new Error('Variable "REACT_APP_DOMAIN" not set');var Ue,_e={clientId:Ne,domain:Te,searchDebounceMs:300,basePath:"/ds-news",api:{auth:"".concat(Re,"/auth")},paths:{feed:"/",login:"/login",about:"/about"}},Se=n(46),Ce=n(132),Ie={ajax:ye.a,config:_e,github:new function e(){Object(Se.a)(this,e),this.query=function(e){var t=e.query,n=e.token;return Object(Ce.graphql)("\n        query($searchQuery: String!) {\n          search(query: $searchQuery, type: ISSUE, first: 100) {\n            issueCount\n            nodes {\n              ... on Issue {\n                title\n                number\n                repository {\n                  owner {\n                    login\n                  }\n                  name\n                }\n                author {\n                  login\n                  avatarUrl\n                }\n                createdAt\n                closedAt\n                reactions(first: 100) {\n                  edges {\n                    node {\n                      content\n                    }\n                  }\n                }\n                comments {\n                  totalCount\n                }\n              }\n            }\n          }\n        }\n      ",{searchQuery:t,headers:{authorization:"Bearer ".concat(n)}})}}},qe=Object(d.a)(),we=Object(u.a)({dependencies:Ie}),ke=[we,Object(m.a)(qe)],Le=b(l.a.apply(void 0,ke)),Pe={key:"root",storage:h.a,whitelist:["auth","query"]},He=Object(s.b)(Pe,(Ue=qe,Object(l.c)({router:Object(O.b)(Ue),auth:g,query:J}))),De=Object(l.e)(He,{},Le),Qe=Object(s.c)(De);we.run(Ae);var xe=n(134),Fe=n(78),Ye=n(18),Ge=n(77),Me=n.n(Ge),Be=Object(i.c)((function(e){var t;return{isLoggedIn:!!(null===(t=e.auth.token)||void 0===t?void 0:t.data)}}),(function(e){return Object(l.b)({dispatchLogout:v},e)}))((function(e){var t=e.isLoggedIn,n=e.dispatchLogout,a=Object(Ye.g)().search,c=Me.a.stringifyUrl({url:"https://github.com/login/oauth/authorize",query:{client_id:_e.clientId,redirect_uri:"".concat(_e.domain).concat(_e.basePath).concat(_e.paths.login),scope:"repo",state:a}});return r.a.createElement("nav",{id:"header",className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"logo",src:"".concat("/ds-news","/favicon.png"),alt:"ds news logo"}),r.a.createElement("h1",null,"ds news")),r.a.createElement("li",null,r.a.createElement(Fe.b,{activeClassName:"selected",exact:!0,to:"".concat("/ds-news").concat(_e.paths.feed)},"feed"))),r.a.createElement("ul",null,r.a.createElement("li",null,t?r.a.createElement("button",{onClick:n,className:"link-button"},"logout"):r.a.createElement("a",{href:c},"Login with Github"))))})),Ve=Object(i.c)((function(e){return{token:e.auth.token}}),(function(e){return Object(l.b)({dispatchfetchToken:f.request},e)}))((function(e){var t=e.location,n=e.dispatchfetchToken,c=e.token,o=Me.a.parse(t.search),i=o.code,l=o.state,u=void 0===l?"":l,s=Array.isArray(i)?i[0]:i;return Object(a.useEffect)((function(){s&&n(s)}),[s,n]),i?"FETCHING"===(null===c||void 0===c?void 0:c.status)?r.a.createElement("p",null,"Fetching auth token..."):"FAILED"===(null===c||void 0===c?void 0:c.status)?r.a.createElement("p",{className:"error"},c.error):r.a.createElement(Ye.a,{to:{pathname:_e.paths.feed,search:u}}):r.a.createElement("p",{className:"error"},"No code provided. Please login.")})),ze=n(104),Je={CONFUSED:":confused:",EYES:":eyes:",HEART:":heart:",HOORAY:":tada:",LAUGH:":smile:",ROCKET:":rocket:",THUMBS_DOWN:":-1:",THUMBS_UP:":+1:"},Ke=function(e){var t,n,a=e.title,c=e.number,o=e.author,i=e.createdAt,l=e.closedAt,u=e.repository,s=e.reactions,d=e.comments;return r.a.createElement("li",{className:"issue ".concat(l?"closed":"")},r.a.createElement("h6",{className:"mb-0"},r.a.createElement("a",{href:"https://github.com/".concat(null===u||void 0===u?void 0:u.owner.login,"/").concat(null===u||void 0===u?void 0:u.name,"/issues/").concat(c)},a)),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/".concat(null===u||void 0===u?void 0:u.owner.login,"/").concat(null===u||void 0===u?void 0:u.name,"/issues/").concat(c)},r.a.createElement("strong",null,null===u||void 0===u?void 0:u.name),"#",c)," by ",r.a.createElement("a",{href:"https://github.com/".concat(null===o||void 0===o?void 0:o.login)},r.a.createElement("img",{src:null===o||void 0===o?void 0:o.avatarUrl,alt:"".concat(null===o||void 0===o?void 0:o.login," profile pic"),className:"mr-1",style:{maxHeight:"1rem",borderRadius:2,verticalAlign:"text-top"}}),null===o||void 0===o?void 0:o.login)," ",r.a.createElement("span",{title:i},F()(i).fromNow()),l&&r.a.createElement("em",{className:"small",title:l}," ","(closed ",F()(l).fromNow(),")")," | ",(null===(t=s.edges)||void 0===t?void 0:t.length)?Object.entries((null===s||void 0===s?void 0:null===(n=s.edges)||void 0===n?void 0:n.reduce((function(e,t){return Object(y.a)({},e,Object(ve.a)({},(null===t||void 0===t?void 0:t.node.content)||"",(e[(null===t||void 0===t?void 0:t.node.content)||""]||0)+1))}),{}))||{}).slice().sort((function(e,t){var n=Object(ae.a)(e,1)[0];return Object(ae.a)(t,1)[0]>n?-1:1})).map((function(e){var t=Object(ae.a)(e,2),n=t[0],a=t[1];return r.a.createElement("span",{key:n},r.a.createElement(ze.a,{emoji:Je[n],size:16,tooltip:!0}),a>1&&r.a.createElement("sup",null,a))})):r.a.createElement("em",{className:"small"},"no reactions")," | ",r.a.createElement("span",null,d.totalCount?r.a.createElement(r.a.Fragment,null,r.a.createElement(ze.a,{emoji:"speech_balloon",size:16,tooltip:!0}),d.totalCount>1&&r.a.createElement("sup",null,100===d.totalCount?"100+":d.totalCount)):r.a.createElement("em",{className:"small"},"no comments"))))},We=function(e){var t=e.results;return r.a.createElement("div",{className:"text-monospace small"},t&&("FETCHING"===t.status?"loading...":"".concat(t.asOf.toLowerCase())))},$e=function(e){var t=e.seconds;return r.a.createElement("div",{className:"text-monospace small faded"},"refreshing in"," ",t?t>45?F()().add(t,"seconds").fromNow(!0):"".concat(t," seconds"):"...")},Xe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"ml-1 close-link pointer",title:"remove ".concat(e.title),onClick:function(){return e.remove(e.entry)}}),r.a.createElement("pre",{className:"ml-1 d-inline pointer ".concat(e.ignored?"strikethrough":""),onClick:function(){return e.ignored?e.unignore(e.entry):e.ignore(e.entry)}},e.entry))},Ze=function(e){var t=e.entries,n=e.dispatchRmEntry,a=e.dispatchIgnoreEntry,c=e.dispatchUnignoreEntry,o=e.title,i=e.fallbackText,l=e.ignored;return r.a.createElement("ul",{className:"list-unstyled"},t.length?t.slice().sort().map((function(e,t){return r.a.createElement("li",{key:t,className:"overflow-auto text-nowrap"},r.a.createElement(Xe,{title:o,entry:e,ignored:l.includes(e),ignore:a.bind(e),unignore:c.bind(e),remove:n.bind(e)}))})):i)},et=function(e){var t=e.dispatchAddEntry,n=e.placeholder,c=Object(a.useState)(""),o=Object(ae.a)(c,2),i=o[0],l=o[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),l("")}},r.a.createElement("input",{type:"text",placeholder:n,className:"small text-monospace w-100 pl-1 mt-2",value:i,onChange:function(e){return l(e.currentTarget.value)}}))},tt=function(e){return r.a.createElement("ul",{className:"col-sm-3 list-unstyled sidebar"},r.a.createElement("li",{className:"mt-2 "},r.a.createElement("h4",null,"last updated"),r.a.createElement(We,{results:e.results}),r.a.createElement($e,{seconds:e.secondsUntilNextPoll})),r.a.createElement("li",null,r.a.createElement("h4",null,"Repos"),r.a.createElement(Ze,{title:"repo",entries:e.repos,ignored:e.ignoredRepos,dispatchRmEntry:e.dispatchRmRepo,dispatchIgnoreEntry:e.dispatchIgnoreRepo,dispatchUnignoreEntry:e.dispatchUnignoreRepo,fallbackText:r.a.createElement("p",{className:"error"},"at least one repo required")}),r.a.createElement(et,{placeholder:"owner/repo",dispatchAddEntry:e.dispatchAddRepo})),r.a.createElement("li",null,r.a.createElement("h4",null,"Authors"),r.a.createElement(Ze,{title:"author",entries:e.authors,ignored:e.ignoredAuthors,dispatchRmEntry:e.dispatchRmAuthor,dispatchIgnoreEntry:e.dispatchIgnoreAuthor,dispatchUnignoreEntry:e.dispatchUnignoreAuthor,fallbackText:r.a.createElement("div",{className:"text-monospace small faded"},"all authors")}),r.a.createElement(et,{placeholder:"username",dispatchAddEntry:e.dispatchAddAuthor})))},nt=n(242),at=n(240),rt=n(243),ct=n(238),ot=function(e){var t=e.sort,n=e.setSort,a=e.searchTerm,c=e.setSearchTerm,o=e.isFetching,i={created:"recently created",updated:"recently updated",interactions:"interactions","reactions-heart":"loved","reactions-tada":"celebrated",reactions:"reactions","reactions-+1":"liked","reactions--1":"disliked"};return r.a.createElement("nav",{className:"navbar px-0"},r.a.createElement("ul",{className:"d-flex",style:{flexGrow:1}},r.a.createElement("li",{className:"w-100"},r.a.createElement("input",{placeholder:"Search",value:a,className:"text-monospace w-100 ".concat(o?"loading":""),onChange:function(e){return c(e.currentTarget.value)}}))),r.a.createElement("ul",{className:"ml-auto"},r.a.createElement("li",{className:"ml-2"},r.a.createElement(nt.a,{className:"d-inline"},r.a.createElement(at.a,{tag:"a",className:"link-button d-inline-block"},"most ",i[t]," \u25bc")," ",r.a.createElement(rt.a,null,Object.entries(i).map((function(e){var t=Object(ae.a)(e,2),a=t[0],c=t[1];return r.a.createElement(ct.a,{key:a,onClick:function(){return n(a)}},c)})))))))},it=Object(i.c)((function(e){var t=e.query;return{query:t.query,results:t.results,polling:t.polling}}),(function(e){return Object(l.b)({dispatchSetSearchTerm:N,dispatchSetSort:T,dispatchAddRepo:U,dispatchRmRepo:_,dispatchIgnoreRepo:S,dispatchUnignoreRepo:C,dispatchAddAuthor:I,dispatchRmAuthor:q,dispatchIgnoreAuthor:k,dispatchUnignoreAuthor:L},e)}))((function(e){var t,n,a,c;return r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-sm pr-1"},r.a.createElement(ot,{sort:e.query.sort,setSort:e.dispatchSetSort,searchTerm:e.query.search,setSearchTerm:e.dispatchSetSearchTerm,isFetching:"FETCHING"===(null===(t=e.results)||void 0===t?void 0:t.status)}),"FAILED"===(null===(n=e.results)||void 0===n?void 0:n.status)?r.a.createElement("pre",null,e.results.error):(null===(a=e.results)||void 0===a?void 0:a.data)&&r.a.createElement("ol",{className:"issues"},null===(c=e.results.data.search.nodes)||void 0===c?void 0:c.filter((function(e){return 0!==Object.entries(e).length})).map((function(e,t){return r.a.createElement(Ke,Object.assign({key:t},e))}))),r.a.createElement("code",null,fe(e.query))),r.a.createElement(tt,{results:e.results,secondsUntilNextPoll:e.polling.count,repos:e.query.repo,ignoredRepos:e.query.ignoredRepo,dispatchAddRepo:e.dispatchAddRepo,dispatchRmRepo:e.dispatchRmRepo,dispatchIgnoreRepo:e.dispatchIgnoreRepo,dispatchUnignoreRepo:e.dispatchUnignoreRepo,authors:e.query.author,ignoredAuthors:e.query.ignoredAuthor,dispatchAddAuthor:e.dispatchAddAuthor,dispatchRmAuthor:e.dispatchRmAuthor,dispatchIgnoreAuthor:e.dispatchIgnoreAuthor,dispatchUnignoreAuthor:e.dispatchUnignoreAuthor}))})),lt=function(){return r.a.createElement("div",{style:{marginTop:"0.5rem"}},r.a.createElement("h4",null,"About"),r.a.createElement("p",{className:"error"},"TODO: Center this"))},ut=function(){return r.a.createElement(i.a,{store:De},r.a.createElement(O.a,{history:qe},r.a.createElement(xe.a,{persistor:Qe,loading:r.a.createElement("p",null,"Loading...")},r.a.createElement(Fe.a,{basename:_e.basePath},r.a.createElement(Be,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(Ye.d,null,r.a.createElement(Ye.b,{path:_e.paths.login,component:Ve}),r.a.createElement(Ye.b,{path:_e.paths.about,component:lt}),r.a.createElement(Ye.b,{path:_e.paths.feed,component:it})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ut,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[139,1,2]]]);
//# sourceMappingURL=main.5693c981.chunk.js.map