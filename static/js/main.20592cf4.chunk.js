(this["webpackJsonpreact-socnetwork"]=this["webpackJsonpreact-socnetwork"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return i}));var a=n(134),r="https://social-network.samuraijs.com/api/1.0/",o=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}}),c={getUsers:function(e,t){return o.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return fetch("".concat(r,"follow/").concat(e),{method:"DELETE",credentials:"include",headers:{"API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}})},follow:function(e){return fetch("".concat(r,"follow/").concat(e),{method:"POST",credentials:"include",headers:{"API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}})},getProfile:function(e){return console.warn("use profileAPI.getProfile()"),u.getProfile(e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),fetch("".concat(r,"/profile/photo"),{method:"PUT",credentials:"include",headers:{"API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"},body:t}).then((function(e){return e.json()}))}},u={getProfile:function(e){return o("".concat(r,"profile/").concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},getStatus:function(e){return fetch("".concat(r,"profile/status/").concat(e),{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}}).then((function(e){return e.json()}))},saveProfile:function(e){return fetch("".concat(r,"profile"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},l={me:function(){return fetch("".concat(r,"auth/me"),{credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}}).then((function(e){return e.json()})).catch(console.log)},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return fetch("".concat(r,"auth/login"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"},body:JSON.stringify({email:e,password:t,rememberMe:n,captcha:a})}).then((function(e){return e.json()}))},logout:function(){return fetch("".concat(r,"auth/login"),{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}}).then((function(e){return e.json()}))}},i={getCaptchaUrl:function(){return fetch("".concat(r,"security/get-captcha-url"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","API-KEY":"d07e318e-5bc8-4780-b44a-37a9fb87fff6"}}).then((function(e){return e.json()}))}}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(33),r=n(4),o={dialogs:[{id:1,name:"Torex"},{id:2,name:"Jetkokos"},{id:3,name:"Dustman"},{id:4,name:"Lue kang"},{id:5,name:"Big Boss"}],messages:[{id:1,message:"Hello"},{id:2,message:"Hi"},{id:3,message:"Blalla"},{id:4,message:"Do yo like it"},{id:5,message:"Ok!"}]},c=function(e){return{type:"ADD_MESSAGE_TEXT",payload:{newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE_TEXT":var n=t.payload.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:Date.now(),message:n}])});default:return e}}},133:function(e,t,n){e.exports=n.p+"static/media/logo.4721fd35.png"},138:function(e,t,n){e.exports={commonErrorText:"Login_commonErrorText__rFbt4"}},165:function(e,t,n){e.exports=n(293)},170:function(e,t,n){},171:function(e,t,n){},195:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__37DI_",item:"Navbar_item__18xtL",active:"Navbar_active__38o9X"}},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(170);var u=n(36),l=n(37),i=n(40),s=n(39),f=(n(171),n(9)),d=n(12),p=n(13),m=n(46),b=n.n(m),g=n(133),E=n.n(g),h=function(e){var t=Object.assign({},e);return r.a.createElement("header",{className:b.a.header},r.a.createElement("img",{className:b.a.logo,src:E.a}),r.a.createElement("div",{className:b.a.loginBlock},t.userAuthData.isAuth?r.a.createElement(d.b,{to:"/login",onClick:function(){t.logout()},className:b.a.login},"Logout "):r.a.createElement(d.b,{to:"/login",className:b.a.login},"Login")))},v=n(15),O=n.n(v),_=n(29),j=n(4),y=n(11),S=n(24),P={userId:null,login:null,email:null,isAuth:!1,userAvatar:null,captchaUrl:null},w=function(e,t,n,a,r,o){return{type:"auth/SET_USER_DATA",payload:{userId:e,login:t,email:n,userAvatar:a,isAuth:r,captchaUrl:o}}},C=function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){var n,a,r,o,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,c=a.email,t(w(r,o,c,null,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.c.getCaptchaUrl();case 2:n=e.sent,t({type:"auth/SET_CAPTCHA",payload:{captchaUrl:n.url}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/SET_CAPTCHA":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},k=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(h,Object.assign({},this.props,{logout:this.props.logout}))}}]),n}(r.a.Component),N=Object(p.b)((function(e){return{userAuthData:e.auth}}),{logout:function(){return function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.resultCode&&t(w(null,null,null,null,!1,""));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),U=n(23),I=n.n(U),x=function(){var e="".concat(I.a.active);return r.a.createElement("nav",{className:I.a.nav},r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:e},"Profile")),r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:e},"Messages")),r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:e},"News")),r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:e},"Music")),r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:e},"Settings")),r.a.createElement("div",{className:I.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:e},"Users")))},L=n(35),D=n.n(L),R=n(42),F=n(34),z=n(65),M=n(56),H=n.n(M),G=n(135),W=n.n(G),B=r.a.memo((function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.onPageChanged,c=e.pageNumber,u=e.portionSize,l=[],i=Math.ceil(t/n),s=1;s<=i;s++)l.push(s);var f=Object(a.useState)(1),d=Object(z.a)(f,2),p=d[0],m=d[1],b=Math.ceil(i/u),g=(p-1)*u+1,E=p*u;return r.a.createElement("div",{className:H.a.paginator},p>1&&r.a.createElement("button",{onClick:function(){m(p-1),o(g-u),console.log("leftPortionPageNumber",g),console.log("portionSize",u)}},"-"),l.filter((function(e){return e>=g&&e<=E})).map((function(e){var t;return r.a.createElement("span",{className:W()((t={},Object(F.a)(t,H.a.selectedPage,e===c),Object(F.a)(t,H.a.selectedPage2,e===c+1),t),H.a.pageNumber),key:e,onClick:function(){o(e),console.log(e),console.log(g)}},e)})),b>p&&r.a.createElement("button",{onClick:function(){m(p+1),o(E+1)}},"+"),r.a.createElement("div",null))})),K=n(67),Y=n.n(K),J=function(e){var t=e.user,n=e.unfollow,a=e.follow,o=e.followingInProgress;return r.a.createElement("div",{className:D.a.user},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{alt:"avatar",style:{width:"100px"},src:t.photos.small?t.photos.small:Y.a}))),r.a.createElement("div",null,t.name)),r.a.createElement("div",null," ",t.status),r.a.createElement("div",{style:{marginBottom:"10px"}},t.followed?r.a.createElement("button",{disabled:o.some((function(e){return e===t.id})),className:D.a.follow,onClick:function(){return n(t.id)}},"unfollow"):r.a.createElement("button",{disabled:o.some((function(e){return e===t.id})),className:D.a.follow,onClick:function(){return a(t.id)}},"follow")))},q=r.a.memo((function(e){var t=e.unfollow,n=e.follow,o=e.getRequestUsers,c=e.users,u=e.pageSize,l=e.totalItemsCount,i=e.pageNumber,s=e.isFetching,f=e.followingInProgress,d=e.portionSize;Object(a.useEffect)((function(){o(i,u)}),[i]);var p=r.a.useCallback((function(e){o(e,u)}),[]);return r.a.createElement("div",{className:D.a.users},r.a.createElement(B,{totalItemsCount:l,pageSize:u,onPageChanged:p,pageNumber:i,portionSize:d}),s?r.a.createElement(R.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.usersWrapper},c.map((function(e){return r.a.createElement(J,{key:e.id,user:e,unfollow:t,follow:n,followingInProgress:f})})))))})),X=n(33),Z={users:[],pageSize:24,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],portionSize:5},Q=function(e){return{type:"SET_CURRENT_PAGE",payload:{page:e}}},V=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",payload:{isFetching:e,userId:t}}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:Object(X.a)(t.payload.users)});case"SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.payload.page});case"SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.payload.usersCount});case"SHOW_LOADER":return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case"HIDE_LOADER":return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(X.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});case"FAKE":return Object(j.a)({},e);default:return e}},ee=n(136),te=Object(ee.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ne=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},ue=function(e){return e.usersPage.portionSize},le=Object(p.b)((function(e){return{users:te(e),pageSize:ne(e),totalItemsCount:ae(e),pageNumber:re(e),isFetching:oe(e),followingInProgress:ce(e),portionSize:ue(e)}}),{follow:function(e){return function(t){t(V(!0,e)),y.d.follow(e).then((function(n){200===n.status&&t(function(e){return{type:"FOLLOW",payload:{userId:e}}}(e)),t(V(!1,e))}))}},unfollow:function(e){return function(t){t(V(!0,e)),y.d.unfollow(e).then((function(n){200===n.status&&t(function(e){return{type:"UNFOLLOW",payload:{userId:e}}}(e)),t(V(!1,e))}))}},getRequestUsers:function(e,t){return function(n){n({type:"SHOW_LOADER"}),n(Q(e)),y.d.getUsers(t,e).then((function(e){n({type:"SET_USERS",payload:{users:e.items}}),n({type:"SET_TOTAL_USERS_COUNT",payload:{usersCount:e.totalCount}}),n({type:"HIDE_LOADER"})}))}},setCurrentPage:Q,toggleFollowingInProgress:V})(q),ie=function(e){return r.a.createElement("div",{style:{border:"1px red solid",color:"#fff"}},"\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 children ",e.counter)},se=function(){return r.a.createElement("div",{style:{border:"1px gold solid",color:"#fff"}},"\u0412\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u043e, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u043c\u0438\u044e \u0435\u0449\u0435 \u0440\u0430\u0437?")},fe=function(){return r.a.createElement("div",{style:{border:"1px gold solid"}},r.a.createElement("img",{alt:"logo",style:{height:"100px"},src:Y.a}))},de=function(e){var t=Object(a.useState)(10),n=Object(z.a)(t,2),o=n[0],c=n[1],u=r.a.createRef();return Object(a.useEffect)((function(){u.current;var e=setInterval((function(){c((function(t){return 1===t&&clearInterval(e),t-1}))}),1e3)}),[]),r.a.createElement("div",{style:{width:"200px",border:"1px red black",padding:"10px",background:"purple"}},r.a.createElement("div",null,e.renderContent(o)),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("button",{ref:u,onClick:function(){return e.onOkClick()}},"Ok"),r.a.createElement("button",{onClick:function(){return e.onCancelClick()}},"Cancel")))},pe=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={success:!0,error:!0,avatar:!0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.error&&r.a.createElement(de,{onOkClick:function(){alert("error"),e.setState({error:!1})},renderContent:function(e){return r.a.createElement(ie,{counter:e})},onCancelClick:function(){return e.setState({error:!1})}}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.success&&r.a.createElement(de,{onOkClick:function(){alert("Ok"),e.setState({success:!1})},renderContent:function(){return r.a.createElement(se,null)},onCancelClick:function(){return e.setState({success:!1})}}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.avatar&&r.a.createElement(de,{onOkClick:function(){alert("avatar"),e.setState({avatar:!1})},renderContent:function(){return r.a.createElement(fe,null)},onCancelClick:function(){return e.setState({avatar:!1})}}))}}]),n}(r.a.PureComponent),me=n(73),be=n(129),ge=n(68),Ee=n(69),he=n(138),ve=n.n(he);var Oe=function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},_e=Object(be.a)({form:"login"})(Object(p.b)(Oe,null)((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(me.a,{name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",component:Ee.b,type:"text",validate:[ge.c]})),r.a.createElement("div",null,r.a.createElement(me.a,{name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",component:Ee.b,type:"password",validate:[ge.c]})),r.a.createElement("div",null,r.a.createElement(me.a,{name:"rememberMe",component:"input",type:"checkbox"})," rememberMe"),e.error?r.a.createElement("div",{className:ve.a.commonErrorText},e.error):"",r.a.createElement("div",null,r.a.createElement("button",null," \u0412\u043e\u0439\u0442\u0438")),e.captchaUrl?r.a.createElement("div",null," ",r.a.createElement("img",{alt:"",src:e.captchaUrl}),r.a.createElement("div",null,r.a.createElement(me.a,{name:"captcha",placeholder:"captcha",component:Ee.b,type:"text",valid:[ge.c]}))):"")}))),je=Object(p.b)(Oe,{login:function(e,t,n,a){return function(){var r=Object(_.a)(O.a.mark((function r(o){var c;return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n,a);case 2:0===(c=r.sent).resultCode&&o(C()),1===c.resultCode&&o(Object(S.b)("login",{_error:c.messages[0]})),10===c.resultCode&&(o(T()),o(Object(S.b)("login",{_error:c.messages[0]})));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement(_e,{onSubmit:function(e){var n=e.email,a=e.password,r=e.rememberMe,o=e.captcha;t(n,a,r,o)}}))})),ye={initialized:!1,globalError:null},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Pe=n(8),we=n(97),Ce=n(128),Te=n(139),Ae=n(130),ke=Object(Pe.c)({profilePage:we.b,dialogsPage:Ce.b,usersPage:$,auth:A,form:Ae.a,app:Se}),Ne=Object(Pe.e)(ke,Object(Pe.a)(Te.a)),Ue=function(e){return function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(R.a,null)},r.a.createElement(e,null))}},Ie=r.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),xe=r.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Le=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(){alert("some error occured")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",exact:!0,render:function(){return r.a.createElement(f.a,{to:"/profile"})}}),r.a.createElement(f.b,{path:"/dialogs",render:Ue(Ie)}),r.a.createElement(f.b,{path:"/dialogs",render:Ue(Ie)}),r.a.createElement(f.b,{path:"/profile/:userId?",render:Ue(xe)}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(f.b,{path:"/hooks",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(f.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))):r.a.createElement(R.a,null)}}]),n}(r.a.Component),De=Object(Pe.d)(Object(p.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(Le)),Re=function(e){return r.a.createElement(d.a,null,r.a.createElement(p.a,{store:Ne},r.a.createElement(De,null)))};c.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){e.exports={users:"Users_users__3YRl6",usersWrapper:"Users_usersWrapper__f-JKB",user:"Users_user__2mUG4",follow:"Users_follow__1AQgf",user_follow__dGnF0:"Users_user_follow__dGnF0__31Znh"}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),o=(n(195),function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"lds-hourglass"}))})},46:function(e,t,n){e.exports={header:"Header_header__ufS2v",authUser:"Header_authUser__tDrEi",login:"Header_login__1uJBP",loginBlock:"Header_loginBlock__25iCt",loginAva:"Header_loginAva__B8gfv",logo:"Header_logo__3Q_nJ"}},56:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__M54P7",selectedPage:"Paginator_selectedPage__tngjC",selectedPage2:"Paginator_selectedPage2__2qSG7",paginator:"Paginator_paginator__1lDJd"}},67:function(e,t,n){e.exports=n.p+"static/media/avatar.029ca91f.png"},68:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e){return e?void 0:"Required!!"},r=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},o=function(e){return e&&isNaN(Number(e))?"Must be a number":void 0}},69:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var a=n(131),r=n(91),o=n.n(r),c=n(0),u=n.n(c),l=n(73),i=function(e){var t=e.input,n=e.meta,r=n.touched,c=n.error,l=Object(a.a)(e,["input","meta"]),i=c&&r;return u.a.createElement("div",{className:o.a.formControl+" "+(i?o.a.error:"")},u.a.createElement("div",null,u.a.createElement(l.element,Object.assign({},t,l))),i&&u.a.createElement("span",null,c))},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return u.a.createElement(l.a,{name:e,component:t,type:n,placeholder:r,validate:a})},f=function(e){var t=e.name,n=e.component,a=e.type,r=void 0===a?"text":a,o=e.placeholder;return u.a.createElement(l.a,{name:t,component:n,type:r,placeholder:o})},d=function(e){return u.a.createElement(i,Object.assign({},e,{element:"input"}))},p=function(e){return u.a.createElement(i,Object.assign({},e,{element:"textarea"}))}},91:function(e,t,n){e.exports={myPostsWrapper:"MyPosts_myPostsWrapper__2-6mE",formControl:"MyPosts_formControl__1qpWR",error:"MyPosts_error__2ev5x"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return E})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return O}));var a=n(34),r=n(15),o=n.n(r),c=n(29),u=n(33),l=n(4),i=n(11),s=n(24),f={posts:[{id:1,message:"Hello",likesCount:1},{id:2,message:"Hi",likesCount:1}],profile:null,status:"",profileUpdateStatus:"none"},d=function(e){return{type:"ADD_POST",payload:{newPostText:e}}},p=function(e){return{type:"SET_USER_PROFILE",payload:{profile:e}}},m=function(e){return{type:"SET_PROFILE_UPDATE_STATUS",payload:{status:e}}},b=function(e){return{type:"SET_STATUS",payload:{status:e}}},g=function(e){return function(t){i.b.getStatus(e).then((function(e){t(b(e))}))}},E=function(e){return function(t){i.b.updateStatus(e).then((function(n){0===n.resultCode&&t(b(e))})).catch((function(e){console.error(e)}))}},h=function(e){return function(t){i.d.getProfile(e).then((function(e){t(p(e))}))}},v=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.savePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"SAVE_PHOTO_SUCCESS",payload:{photos:a.data}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(o.a.mark((function t(n,r){var c,u,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.saveProfile(e);case 2:if(0!==(c=t.sent).resultCode){t.next=9;break}n(m("success")),n(p(e)),n(m("none")),t.next=14;break;case 9:return m("error"),u=c.messages[0].toLowerCase(),l=u.substring(u.length-1,u.indexOf(">")+1),n(Object(s.b)("profile-info",{contacts:Object(a.a)({},l,c.messages[0])})),t.abrupt("return",Promise.reject(c.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:Date.now(),message:t.payload.newPostText,likesCount:1};return Object(l.a)(Object(l.a)({},e),{},{newPostText:"",posts:[].concat(Object(u.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.payload.profile});case"SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.payload.status});case"FAKE_USERS":return Object(l.a)(Object(l.a)({},e),{},{posts:[]});case"DELETE_POST":return Object(l.a)(Object(l.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{photos:t.payload.photos.photos})});case"SET_PROFILE_UPDATE_STATUS":return Object(l.a)(Object(l.a)({},e),{},{profileUpdateStatus:t.payload.status});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.20592cf4.chunk.js.map