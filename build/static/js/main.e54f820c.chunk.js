(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{52:function(n,e,i){},63:function(n,e,i){},81:function(n,e,i){"use strict";i.r(e);var t,a,r,c,o,s,p,d,l,x,b,j,g,h,m,u,O,f,v,w,y,k,z,I,S,E,A,C,D,B,F,R,L,P,M,T,H,V,N,U,_,G,J,W=i(3),X=i.n(W),K=i(32),q=i.n(K),Q=(i(52),i(17)),Y=i(11),Z=i(5),$=i(6),nn=i(2),en=$.a.section(t||(t=Object(Z.a)(["\n  overflow: hidden;\n  display: flex;\n  flexDirection: column;\n  textAlign: center;\n  height: 100vh;\n  "]))),tn=$.a.div(a||(a=Object(Z.a)(["\n  margin-bottom: 10vw;\n  width: 100%;\n  position: relative;\n  min-height: 100vh;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 80px 40px;\n  height: 100%;\n\n  \n"]))),an=$.a.div(r||(r=Object(Z.a)(['\n  height: 100%;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("/images/login-background.jpg") ;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: -1;\n']))),rn=$.a.div(c||(c=Object(Z.a)(["\n  max-width: 650px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),cn=$.a.img(o||(o=Object(Z.a)(["\n  margin-bottom: 12px;\n  max-width: 600px;\n  min-height: 1px;\n  display: block;\n  width: 100%;\n"]))),on=$.a.a(s||(s=Object(Z.a)(["\n  font-weight: bold;\n  text-align: center;\n  color: #f9f9f9;\n  background-color: #0063e5;\n  margin-bottom: 12px;\n  width: 100%;\n  letter-spacing: 1.5px;\n  font-size: 18px;\n  padding: 16.5px 0;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #0483ee;\n  }\n"]))),sn=$.a.p(p||(p=Object(Z.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  text-align: center;\n  font-size: 11px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),pn=$.a.img(d||(d=Object(Z.a)(["\n  max-width: 600px;\n  margin-bottom: 20px;\n  display: inline-block;\n  vertical-align: bottom;\n  width: 100%;\n"]))),dn=function(n){return Object(nn.jsx)(en,{children:Object(nn.jsxs)(tn,{children:[Object(nn.jsxs)(rn,{children:[Object(nn.jsx)(cn,{src:"/images/cta-logo-one.svg",alt:""}),Object(nn.jsxs)(sn,{children:[Object(nn.jsxs)("h1",{children:["\u6620\u753b\u3084\u30c9\u30e9\u30de\u3001\u30a2\u30cb\u30e1\u304c\u898b\u653e\u984c",Object(nn.jsx)("br",{}),"\u6708\u984d990\u5186\u3001\u5e74\u984d9900\u5186"]}),Object(nn.jsx)("br",{}),"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u3001\u30c7\u30a3\u30ba\u30cb\u30fc\u30d7\u30e9\u30b9\u306b\u5165\u4f1a\u3057\u307e\u3057\u3087\u3046"]}),Object(nn.jsx)(on,{children:"\u7d9a\u3051\u308b"}),Object(nn.jsx)(pn,{src:"/images/cta-logo-two.png",alt:""})]}),Object(nn.jsx)(an,{})]})})},ln=i(37),xn=i.n(ln),bn=i(45),jn=i(29),gn=jn.a.initializeApp({apiKey:"AIzaSyCOIVMfvsVLikcJo5UonhPdnpiODVS-9-4",authDomain:"disney-fd283.firebaseapp.com",projectId:"disney-fd283",storageBucket:"disney-fd283.appspot.com",messagingSenderId:"895350580797",appId:"1:895350580797:web:3f8ee37ee123325d71ac54"}).firestore(),hn=jn.a.auth(),mn=new jn.a.auth.GoogleAuthProvider,un=(jn.a.storage(),gn),On=i(13),fn=i(24),vn=Object(fn.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),wn=vn.actions,yn=wn.setUserLoginDetails,kn=wn.setSignOutState,zn=function(n){return n.user.name},In=function(n){return n.user.photo},Sn=vn.reducer,En=$.a.nav(l||(l=Object(Z.a)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nheight: 70px;\nbackground-color: #090b13;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 0 36px;\nletter-spacing: 16px;\nz-index: 3;\n"]))),An=$.a.a(x||(x=Object(Z.a)(["\n  padding: 0;\n  width: 80px;\n  margin-top: 4px;\n  max-height: 70px;\n  font-size: 0;\n  display: inline-block;\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),Cn=$.a.div(b||(b=Object(Z.a)(['\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  justify-content: flex-end;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n  margin-right: auto;\n  margin-left: 25px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n      &:before {\n        background-color: rgb(30,144,255);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n      }\n    }\n  }\n  /* @media (max-width: 768px) {\n  display: none;\n  } */\n']))),Dn=$.a.a(j||(j=Object(Z.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  border: 1px solid white;\n  border-radius: 5px;\n  transition: all 0.2s ease 0s;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border-color: transparent;\n  }\n}\n\n"]))),Bn=$.a.img(g||(g=Object(Z.a)(["\n  height: 100%;\n"]))),Fn=$.a.div(h||(h=Object(Z.a)(["\nposition: absolute;\ntop: 48px;\nright: 0px;\nbackground: rgb(19, 19, 19);\nborder: 1px solid rgba(151, 151, 151, 0.34);\nborder-radius: 4px;\nbox-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\npadding: 10px;\nfont-size: 14px;\nletter-spacing: 1.5px;\nwidth: 100px;\nopacity: 0;\n\n  span{\n    width: 100%;\n  }\n"]))),Rn=$.a.div(m||(m=Object(Z.a)(["\nposition: relative;\nheight: 48px;\nwidth: 48px;\ndisplay: flex;\ncursor: pointer;\nalign-items: center;\njustify-content: center;\n"," {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n&:hover {\n  "," {\n    opacity: 1;\n    transition-duration: 1s;\n  }\n}\n"])),Bn,Fn),Ln=function(n){var e=Object(On.b)(),i=Object(Y.f)(),t=Object(On.c)(zn),a=Object(On.c)(In);Object(W.useEffect)((function(){hn.onAuthStateChanged(function(){var n=Object(bn.a)(xn.a.mark((function n(e){return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e&&(c(e),i.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]);var r=function(){t?t&&hn.signOut().then((function(){e(kn()),i.push("/")})).catch((function(n){return alert(n.message)})):hn.signInWithPopup(mn).then((function(n){c(n.user)})).catch((function(n){alert(n.message)}))},c=function(n){e(yn({name:n.displayName,email:n.email,photo:n.photoURL}))};return Object(nn.jsxs)(En,{children:[Object(nn.jsx)(An,{children:Object(nn.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),t?Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(Cn,{children:[Object(nn.jsxs)("a",{href:"/home",children:[Object(nn.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(nn.jsx)("span",{children:"HOME"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(nn.jsx)("span",{children:"SEARCH"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(nn.jsx)("span",{children:"WATCHLIST"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(nn.jsx)("span",{children:"ORIGINALS"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(nn.jsx)("span",{children:"MOVIES"})]}),Object(nn.jsxs)("a",{children:[Object(nn.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(nn.jsx)("span",{children:"SERIES"})]})]}),Object(nn.jsxs)(Rn,{children:[Object(nn.jsx)(Bn,{src:a,alt:t}),Object(nn.jsx)(Fn,{children:Object(nn.jsx)("span",{onClick:r,children:"Sign out"})})]})]}):Object(nn.jsx)(Dn,{onClick:r,children:"Login"})]})},Pn=(i(63),i(22)),Mn=i(30),Tn=(i(64),i(65),i(46)),Hn=i.n(Tn),Vn=Object($.a)(Hn.a)(u||(u=Object(Z.a)(["\n  margin-top: 20px;\n\n  & > button {\n    opacity: 0;\n    height: 100%;\n    width: 5vw;\n    z-index: 1;\n\n    &:hover {\n      opacity: 1;\n      transition: opacity 0.2s ease 0s;\n    }\n  }\n\n  ul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n  .slick-list {\n    overflow: initial;\n  }\n\n  .slick-prev {\n    left: -75px;\n  }\n  .slick-next {\n    right: -75px;\n  }\n"]))),Nn=$.a.div(O||(O=Object(Z.a)(["\n  border-radius: 4px;\n  cursor: pointer;\n  position: relative;\n  a {\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n  }\n"]))),Un=function(n){return Object(nn.jsx)("div",{children:Object(nn.jsxs)(Vn,Object(Pn.a)(Object(Pn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(nn.jsx)(Nn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1211905C6F5DEAD5C0C75B1A57F38D102F892DAAA69C28464A882CC1970827E5/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim",alt:""})})}),Object(nn.jsx)(Nn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2DB5F6CF7163036A8763318E24404882A6E4A1AC3E2BA75B7C0D53A7E372D180/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim",alt:""})})}),Object(nn.jsx)(Nn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})})}),Object(nn.jsx)(Nn,{children:Object(nn.jsx)("a",{children:Object(nn.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C8C16E4E135142F96B95E7E2C77DBD24CC7C500E45C3AB7BCA674FEFF3164FB/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim",alt:""})})})]}))})},_n=Object(fn.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),Gn=_n.actions.setMovies,Jn=function(n){return n.movie.recommend},Wn=function(n){return n.movie.newDisney},Xn=function(n){return n.movie.original},Kn=function(n){return n.movie.trending},qn=_n.reducer,Qn=$.a.div(f||(f=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),Yn=$.a.div(v||(v=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),Zn=$.a.div(w||(w=Object(Z.a)(["\npadding-top: 56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n  rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow: hidden;\nposition: relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\nimg {\n  inset: 0px;\n  display: block;\n  height: 100%;\n  object-fit: cover;\n  opacity: 1;\n  position: absolute;\n  transition: opacity 500ms ease-in-out 0s;\n  width: 100%;\n  z-index: 1;\n  top: 0;\n}\n&:hover {\n  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n  transform: scale(1.05);\n  border-color: rgba(249, 249, 249, 0.8);\n}\n"]))),$n=function(n){var e=Object(On.c)(Wn);return Object(nn.jsxs)(Qn,{children:[Object(nn.jsx)("h4",{children:"\u6700\u8fd1\u8ffd\u52a0\u3055\u308c\u305f\u4f5c\u54c1"}),Object(nn.jsx)(Yn,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(Zn,{children:[n.id,Object(nn.jsx)(Q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ne=$.a.div(y||(y=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),ee=$.a.div(k||(k=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ie=$.a.div(z||(z=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),te=function(n){var e=Object(On.c)(Xn);return Object(nn.jsxs)(ne,{children:[Object(nn.jsx)("h4",{children:"\u30aa\u30ea\u30b8\u30ca\u30eb\u4f5c\u54c1"}),Object(nn.jsx)(ee,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ie,{children:[n.id,Object(nn.jsx)(Q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},ae=$.a.div(I||(I=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),re=$.a.div(S||(S=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),ce=$.a.div(E||(E=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),oe=function(n){var e=Object(On.c)(Jn);return console.log(e),Object(nn.jsxs)(ae,{children:[Object(nn.jsx)("h4",{children:"\u3042\u306a\u305f\u3078\u306e\u304a\u3059\u3059\u3081\u4f5c\u54c1"}),Object(nn.jsx)(re,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(ce,{children:[n.id,Object(nn.jsx)(Q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},se=$.a.div(A||(A=Object(Z.a)(["\n  padding: 0 0 26px;\n"]))),pe=$.a.div(C||(C=Object(Z.a)(["\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n"]))),de=$.a.div(D||(D=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),le=function(n){var e=Object(On.c)(Kn);return Object(nn.jsxs)(se,{children:[Object(nn.jsx)("h4",{children:"\u8a71\u984c\u306e\u4f5c\u54c1"}),Object(nn.jsx)(pe,{children:e&&e.map((function(n,e){return Object(nn.jsxs)(de,{children:[n.id,Object(nn.jsx)(Q.b,{to:"/detail/"+n.id,children:Object(nn.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},xe=$.a.div(B||(B=Object(Z.a)(["\n  margin-top: 30px;\n  padding: 30px 0px 26px;\n  display: grid;\n  grid-gap: 25px;\n  gap: 25px;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n\n    @media (max-width: 768px) {\n      grid-template-columns: repeat(1, minmax(0, 1fr));\n    }\n"]))),be=$.a.div(F||(F=Object(Z.a)(["\n  padding-top: 56.25%;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n  img {\n    inset: 0px;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n    opacity: 1;\n    position: absolute;\n    transition: opacity 500ms ease-in-out 0s;\n    width: 100%;\n    z-index: 1;\n    top: 0;\n  }\n  video {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    opacity: 0;\n    z-index: 0;\n  }\n  &:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n    video {\n      opacity: 1;\n    }\n  }\n"]))),je=function(n){return Object(nn.jsxs)(xe,{children:[Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1608229455-star-wars.mp4",type:"video/mp4"})})]}),Object(nn.jsxs)(be,{children:[Object(nn.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(nn.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(nn.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4",type:"video/mp4"})})]})]})},ge=$.a.main(R||(R=Object(Z.a)(['\n  position: relative;\n  min-height: calc(100vh - 250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n  &:after {\n    background: url("/images/home-background.png") center center / cover\n      no-repeat fixed;\n    content: "";\n    position: absolute;\n    inset: 0px;\n    opacity: 1;\n    z-index: -1;\n  }\n']))),he=function(n){var e=Object(On.b)(),i=Object(On.c)(zn),t=[],a=[],r=[],c=[];return Object(W.useEffect)((function(){console.log("hello"),un.collection("movies").onSnapshot((function(n){n.docs.map((function(n){switch(console.log(t),n.data().type){case"recommend":t=[].concat(Object(Mn.a)(t),[Object(Pn.a)({id:n.id},n.data())]);break;case"new":a=[].concat(Object(Mn.a)(a),[Object(Pn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(Mn.a)(r),[Object(Pn.a)({id:n.id},n.data())]);break;case"trending":c=[].concat(Object(Mn.a)(c),[Object(Pn.a)({id:n.id},n.data())])}})),e(Gn({recommend:t,newDisney:a,original:r,trending:c}))}))}),[i]),Object(nn.jsx)("div",{children:Object(nn.jsxs)(ge,{children:[Object(nn.jsx)(Un,{}),Object(nn.jsx)(je,{}),Object(nn.jsx)(oe,{}),Object(nn.jsx)($n,{}),Object(nn.jsx)(te,{}),Object(nn.jsx)(le,{})]})})},me=i(47),ue=$.a.div(L||(L=Object(Z.a)(["\n  position: relative;\n  min-height: calc(100vh-250px);\n  overflow-x: hidden;\n  display: block;\n  top: 72px;\n  padding: 0 calc(3.5vw + 5px);\n"]))),Oe=$.a.div(P||(P=Object(Z.a)(["\n  left: 0px;\n  opacity: 0.8;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: -1;\n\n  img {\n    width: 100vw;\n    height: 100vh;\n\n    @media (max-width: 768px) {\n      width: initial;\n    }\n  }\n"]))),fe=$.a.div(M||(M=Object(Z.a)(["\n  align-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n"]))),ve=$.a.div(T||(T=Object(Z.a)(["\n  max-width: 874px;\n"]))),we=$.a.div(H||(H=Object(Z.a)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row nowrap;\n  margin: 24px 0px;\n  min-height: 56px;\n"]))),ye=$.a.button(V||(V=Object(Z.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n\n  img {\n    width: 32px;\n  }\n\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n\n    img {\n      width: 25px;\n    }\n  }\n"]))),ke=Object($.a)(ye)(N||(N=Object(Z.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),ze=$.a.div(U||(U=Object(Z.a)(["\n  margin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Ie=$.a.div(_||(_=Object(Z.a)(["\n  height: 44px;\n  width: 44px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: white;\n\n  div {\n    height: 40px;\n    width: 40px;\n    background: rgb(0, 0, 0);\n    border-radius: 50%;\n\n    img {\n      width: 100%;\n    }\n  }\n"]))),Se=$.a.div(G||(G=Object(Z.a)(["\n  color: rgb(249, 249, 249);\n  font-size: 15px;\n  min-height: 20px;\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]))),Ee=$.a.div(J||(J=Object(Z.a)(["\n  line-height: 1.4;\n  font-size: 20px;\n  padding: 16px 0px;\n  color: rgb(249, 249, 249);\n\n  @media (max-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Ae=function(n){var e=Object(Y.g)().id,i=Object(W.useState)({}),t=Object(me.a)(i,2),a=t[0],r=t[1];return Object(W.useEffect)((function(){un.collection("movies").doc(e).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase \ud83d\udd25")})).catch((function(n){console.log("Error getting document:",n)}))}),[e]),Object(nn.jsxs)(ue,{children:[Object(nn.jsx)(Oe,{children:Object(nn.jsx)("img",{alt:a.title,src:a.backgroundImg})}),Object(nn.jsx)(fe,{children:Object(nn.jsx)("img",{alt:a.title,src:a.titleImg})}),Object(nn.jsxs)(ve,{children:[Object(nn.jsxs)(we,{children:[Object(nn.jsxs)(ye,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(nn.jsx)("span",{children:"Play"})]}),Object(nn.jsxs)(ke,{children:[Object(nn.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(nn.jsx)("span",{children:"Trailer"})]}),Object(nn.jsxs)(ze,{children:[Object(nn.jsx)("span",{}),Object(nn.jsx)("span",{})]}),Object(nn.jsx)(Ie,{children:Object(nn.jsx)("div",{children:Object(nn.jsx)("img",{src:"/images/group-icon.png",alt:""})})})]}),Object(nn.jsx)(Se,{children:a.subTitle}),Object(nn.jsx)(Ee,{children:a.description})]})]})};var Ce=function(){return Object(nn.jsx)("div",{className:"App",children:Object(nn.jsxs)(Q.a,{children:[Object(nn.jsx)(Ln,{}),Object(nn.jsxs)(Y.c,{children:[Object(nn.jsx)(Y.a,{exact:!0,path:"/",children:Object(nn.jsx)(dn,{})}),Object(nn.jsx)(Y.a,{path:"/home",children:Object(nn.jsx)(he,{})}),Object(nn.jsx)(Y.a,{path:"/detail/:id",children:Object(nn.jsx)(Ae,{})})]})]})})},De=Object(fn.a)({reducer:{user:Sn,movie:qn},middleware:Object(fn.c)({serializableCheck:!1})});q.a.render(Object(nn.jsx)(X.a.StrictMode,{children:Object(nn.jsx)(On.a,{store:De,children:Object(nn.jsx)(Ce,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.e54f820c.chunk.js.map