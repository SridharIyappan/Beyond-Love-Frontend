(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6783],{4184:function(e,s){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===a)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(s,[]))||(e.exports=n)}()},3636:function(e,s,n){"use strict";var t=n(5893),r=n(809),a=n.n(r),i=n(2447),o=n(7294),c=n(9669),l=n.n(c),u=n(4937),d=n(1163);s.Z=function(){var e=(0,o.useState)([]),s=(e[0],e[1]),n=(0,o.useState)([]),r=n[0],c=n[1],h=(0,o.useState)([]),p=h[0],m=h[1],x=(0,o.useState)([]),g=x[0],f=x[1],v=(0,o.useState)(!1),j=v[0],b=v[1],w=(0,o.useState)(""),N=w[0],y=w[1],k=(0,o.useState)(""),S=k[0],C=k[1],O=(0,o.useState)([]),P=O[0],_=O[1],R=(0,o.useState)(""),A=R[0],B=R[1],I=(0,o.useState)([]),E=I[0],D=I[1],H=(0,o.useState)(""),q=H[0],F=H[1],L=(0,d.useRouter)();(0,o.useEffect)((function(){localStorage.getItem("category");T(),console.log("we are running client side")}),[]);var T=function(){var e=(0,i.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().get("".concat("http://3.109.200.71","/api/business/get-profiles-from-all-categories"));case 3:n=e.sent,t=n.data,console.log(t),s(t.profilesArray),Z(t.profilesArray),b(!j),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),Z=function(e){var s=[],n=[],t=[];e.map((function(e){void 0!==e.state[0]&&s.push(e.state),void 0!==e.city[0]&&n.push(e.city),void 0!==e.location[0]&&t.push(e.location)}));var r=s.map(JSON.stringify),a=new Set(r),i=Array.from(a,JSON.parse);i.sort((function(e,s){return e[0]<s[0]?-1:1})),console.log(i);var o=n.map(JSON.stringify),l=new Set(o),u=Array.from(l,JSON.parse);u.sort((function(e,s){return e[0]<s[0]?-1:1}));var d=t.map(JSON.stringify),h=new Set(d),p=Array.from(h,JSON.parse);p.sort((function(e,s){return e[0]<s[0]?-1:1})),c(i),m(u),f(p)},W=function(){var e=(0,i.Z)(a().mark((function e(s){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log({categoryName:q},{stateName:N},{cityName:S},{locationName:A}),L.push({pathname:"/single-listings"});case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Ix,{}),(0,t.jsx)("div",{className:"page-title-bg",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Find Popular Services"}),(0,t.jsx)("form",{onSubmit:W,style:{maxWidth:"1080px !important",paddingRight:0},children:(0,t.jsxs)("div",{className:"row m-0 align-items-center",style:{padding:"6px"},children:[(0,t.jsx)("div",{class:"col-lg-3 col-md-6 p-0",children:(0,t.jsxs)("div",{className:"form-group category-select",children:[(0,t.jsx)("label",{className:"category-icon",children:(0,t.jsx)("i",{className:"flaticon-search"})}),(0,t.jsxs)("select",{className:"banner-form-select-two",onChange:function(e){console.log(e.target.value),F(e.target.value)},children:[(0,t.jsx)("option",{children:"Categories"}),(0,t.jsx)("option",{value:"PetClinic",children:"Pet Clinic"}),(0,t.jsx)("option",{value:"PetGrooming",children:"Pet Grooming"}),(0,t.jsx)("option",{value:"PetBoarding",children:"Pet Boarding"}),(0,t.jsx)("option",{value:"PetTraining",children:"Pet Training"})]})]})}),(0,t.jsx)("div",{class:"col-lg-2 col-md-6 p-0",children:(0,t.jsxs)("div",{className:"form-group category-select",children:[(0,t.jsx)("label",{className:"category-icon",children:(0,t.jsx)("i",{className:"flaticon-pin"})}),(0,t.jsxs)("select",{className:"banner-form-select-two",value:N,onChange:function(e){console.log("changed");var s=e.target.value;console.log({stateChange:s}),y(s.split(","))},children:[(0,t.jsx)("option",{children:"State"}),r.map((function(e){return(0,t.jsx)("option",{value:[e[0],e[1]],children:e[0]},e[0])}))]})]})}),(0,t.jsx)("div",{class:"col-lg-3 col-md-6 p-0",children:(0,t.jsxs)("div",{className:"form-group category-select",children:[(0,t.jsx)("label",{className:"category-icon",children:(0,t.jsx)("i",{className:"flaticon-pin"})}),(0,t.jsxs)("select",{className:"banner-form-select-two",onFocus:function(){if(console.log(N),""==N||void 0==N[1])u.Am.error("Please Select State",{theme:"light",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{console.log(p),console.log(N[1]);var e=[];p.map((function(s){s[1]==N[1]&&e.push(s)})),console.log(e),_(e)}},onChange:function(e){var s=e.target.value;console.log(s.split(",")),C(s.split(","))},children:[(0,t.jsx)("option",{children:S.length>0?S[0]:"Select City"}),P.map((function(e){return(0,t.jsx)("option",{value:[e[0],e[1],e[2]],children:e[0]},e[0])}))]})]})}),(0,t.jsx)("div",{class:"col-lg-3 col-md-6 p-0",children:(0,t.jsxs)("div",{className:"form-group category-select",children:[(0,t.jsx)("label",{className:"category-icon",children:(0,t.jsx)("i",{className:"flaticon-pin"})}),(0,t.jsxs)("select",{className:"banner-form-select-two",onFocus:function(){if(console.log(S),""==S||void 0==S[2])u.Am.error("Please Select City",{theme:"light",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{console.log(p),console.log(S);var e=[];g.map((function(s){console.log(s),s[2]==S[2]&&e.push(s)})),console.log(e),D(e)}},onChange:function(e){var s=e.target.value;B(s.split(","))},children:[(0,t.jsx)("option",{children:A.length>0?A[0]:"Select Location"}),E.map((function(e){return(0,t.jsx)("option",{value:[e[0],e[1],e[2],e[3]],children:e[0]},e[0])}))]})]})}),(0,t.jsx)("div",{class:"col-lg-1 col-md-6 p-0",children:(0,t.jsx)("div",{className:"submit-btn",children:(0,t.jsx)("button",{type:"submit",children:"Search"})})})]})})]})})]})}},5942:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return L}});var t=n(5893),r=n(809),a=n.n(r),i=n(2447),o=n(7294),c=(n(1664),n(5152)),l=n(9669),u=n.n(l),d=n(4937),h=(n(4730),n(3750)),p=n(9352),m=function(){var e=function(s,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])})(s,n)};return function(s,n){function t(){this.constructor=s}e(s,n),s.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}(),x=function(e){function s(s){var n=e.call(this,s)||this;return n.name="AssertionError",n}return m(s,e),s}(Error);function g(e,s){if(!e)throw new x(s)}function f(e){var s=Object.entries(e).filter((function(e){var s=e[1];return void 0!==s&&null!==s})).map((function(e){var s=e[0],n=e[1];return encodeURIComponent(s)+"="+encodeURIComponent(String(n))}));return s.length>0?"?"+s.join("&"):""}var v=n(4184),j=n.n(v),b=function(){var e=function(s,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,s){e.__proto__=s}||function(e,s){for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])})(s,n)};return function(s,n){function t(){this.constructor=s}e(s,n),s.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}}(),w=function(){return(w=Object.assign||function(e){for(var s,n=1,t=arguments.length;n<t;n++)for(var r in s=arguments[n])Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);return e}).apply(this,arguments)},N=function(e,s,n,t){return new(n||(n=Promise))((function(r,a){function i(e){try{c(t.next(e))}catch(s){a(s)}}function o(e){try{c(t.throw(e))}catch(s){a(s)}}function c(e){var s;e.done?r(e.value):(s=e.value,s instanceof n?s:new n((function(e){e(s)}))).then(i,o)}c((t=t.apply(e,s||[])).next())}))},y=function(e,s){var n,t,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(r=2&a[0]?t.return:a[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,a[1])).done)return r;switch(t=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=s.call(e,i)}catch(o){a=[6,o],t=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},k=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)s.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},S=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},C=function(e,s){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-s/2}},O=function(e,s){return{top:(window.screen.height-s)/2,left:(window.screen.width-e)/2}};function P(e,s,n){var t=s.height,r=s.width,a=k(s,["height","width"]),i=w({height:t,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),o=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===o||o.closed)&&(window.clearInterval(c),n(o))}catch(e){console.error(e)}}),1e3);return o}var _=function(e){function s(){var s=null!==e&&e.apply(this,arguments)||this;return s.openShareDialog=function(e){var n=s.props,t=n.onShareWindowClose,r=n.windowHeight,a=void 0===r?400:r,i=n.windowPosition,o=void 0===i?"windowCenter":i,c=n.windowWidth,l=void 0===c?550:c;P(e,w({height:a,width:l},"windowCenter"===o?C(l,a):O(l,a)),t)},s.handleClick=function(e){return N(s,void 0,void 0,(function(){var s,n,t,r,a,i,o,c,l,u;return y(this,(function(d){switch(d.label){case 0:return s=this.props,n=s.beforeOnClick,t=s.disabled,r=s.networkLink,a=s.onClick,i=s.url,o=s.openShareDialogOnClick,c=s.opts,l=r(i,c),t?[2]:(e.preventDefault(),n?(u=n(),S(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return o&&this.openShareDialog(l),a&&a(e,l),[2]}}))}))},s}return b(s,e),s.prototype.render=function(){var e=this.props,s=(e.beforeOnClick,e.children),n=e.className,t=e.disabled,r=e.disabledStyle,a=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,k(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=j()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!t,disabled:!!t},n),h=w(w(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),t&&r);return o.createElement("button",w({},u,{"aria-label":u["aria-label"]||i,className:d,onClick:this.handleClick,ref:a,style:h}),s)},s.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},s}(o.Component),R=function(){return(R=Object.assign||function(e){for(var s,n=1,t=arguments.length;n<t;n++)for(var r in s=arguments[n])Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);return e}).apply(this,arguments)};var A=function(e,s,n,t){function r(r,a){var i=n(r),c=R({},r);return Object.keys(i).forEach((function(e){delete c[e]})),o.createElement(_,R({},t,c,{forwardedRef:a,networkName:e,networkLink:s,opts:n(r)}))}return r.displayName="ShareButton-"+e,(0,o.forwardRef)(r)};var B=A("facebook",(function(e,s){var n=s.quote,t=s.hashtag;return g(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+f({u:e,quote:n,hashtag:t})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var I=A("email",(function(e,s){var n=s.subject,t=s.body,r=s.separator;return"mailto:"+f({subject:n,body:t?t+r+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,s){window.location.href=s}});var E=A("whatsapp",(function(e,s){var n=s.title,t=s.separator;return g(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+f({text:n?n+t+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),D=n(5434),H=n(933),q=(n(3636),n(1646)),F=n(1163),L=((0,c.default)((function(){return n.e(5518).then(n.t.bind(n,8694,23))}),{loadableGenerated:{webpack:function(){return[8694]},modules:["single-listings.js -> react-owl-carousel3"]}}),function(){var e=(0,o.useState)(!1),s=e[0],n=e[1],r=(0,o.useState)(null),c=r[0],l=r[1],m=(0,o.useState)(null),x=m[0],g=m[1],f=(0,o.useState)(""),v=f[0],j=f[1],b=(0,o.useState)(""),w=b[0],N=b[1],y=(0,o.useState)(""),k=y[0],S=y[1],C=(0,o.useState)(""),O=C[0],P=C[1],_=(0,o.useState)(""),R=_[0],A=_[1],L=(0,o.useState)(null),T=L[0],Z=L[1],W=(0,o.useState)(),J=W[0],G=W[1],z=(0,o.useState)(""),Q=z[0],X=z[1],M=(0,o.useState)(""),U=M[0],Y=M[1],K=(0,o.useState)(""),V=K[0],$=K[1],ee=(0,o.useState)(null),se=ee[0],ne=ee[1],te=(0,o.useState)(!1),re=te[0],ae=te[1],ie=(0,o.useState)(),oe=ie[0],ce=ie[1],le=(0,o.useState)([]),ue=le[0],de=le[1],he=(0,o.useState)(!1),pe=he[0],me=he[1],xe=(0,F.useRouter)(),ge="www.google.com";(0,o.useEffect)((function(){var e=xe.query.category,t=xe.query.id;S(t);var r=localStorage.getItem("token"),a=JSON.parse(localStorage.getItem("user"));null!=a&&(A(a.userType),P(a._id),fe(a._id),Y(a.email),j(r)),N(e),void 0!=e&&void 0!=t?(ve(e,t),we(t)):n(!s),console.log(xe.query.category)}),[s,J]);var fe=function(){var e=(0,i.Z)(a().mark((function e(s){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat("http://3.109.200.71","/api/customer/get-profile/").concat(s));case 3:n=e.sent,t=n.data,X(t.customer.customerName),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(s){return e.apply(this,arguments)}}(),ve=function(){var e=(0,i.Z)(a().mark((function e(s,n){var t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat("http://3.109.200.71","/api/business/get-profile/").concat(s,"/").concat(n));case 3:t=e.sent,r=t.data,i=r.business.likes.includes(O),console.log(i),Z(i),G(r.business.likes.length),l(r.business),g("".concat("http://3.109.200.71","/api/business/get-photos/").concat(r.business.coverImage)),r.success?d.Am.success(r.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):d.Am.error(r.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(s,n){return e.apply(this,arguments)}}(),je=function(){var e=(0,i.Z)(a().mark((function e(s){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),n={businessId:k,customerId:O},e.prev=2,e.next=5,u().put("".concat("http://3.109.200.71","/api/business/like-unlike/").concat(w,"/").concat(v),n);case 5:t=e.sent,(r=t.data).success&&(d.Am.success(r.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Z(r.like),r.like&&G(J+1),r.like||G(J-1)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(s){return e.apply(this,arguments)}}(),be=function(){var e=(0,i.Z)(a().mark((function e(t){var r,i,o,c,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault()," "===V||null===se){e.next=18;break}return ae(!1),r={customerId:O,businessId:k,customerEmail:U,customerName:Q,customerRating:se,customerReview:V},e.prev=4,e.next=7,u().post("".concat("http://3.109.200.71","/api/create-review/").concat(v),r);case 7:i=e.sent,o=i.data,console.log(o),o.success&&(c=0,d.Am.success(o.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),$(" "),o.review.map((function(e){c=parseInt(e.customerRating)+c})),l=Math.round(c/o.review.length),ce(l),n(!s)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:e.next=19;break;case 18:ae(!0);case 19:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(s){return e.apply(this,arguments)}}(),we=function(){var e=(0,i.Z)(a().mark((function e(s){var n,t,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.prev=1,e.next=4,u().get("".concat("http://3.109.200.71","/api/get-review/").concat(s));case 4:t=e.sent,r=t.data,console.log(r),de(r.review),r.review.map((function(e){n=parseInt(e.customerRating)+n})),i=Math.round(n/r.review.length),ce(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(s){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,i.Z)(a().mark((function e(t,r){var i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u().delete("".concat("http://3.109.200.71","/api/delete-review/").concat(r,"/").concat(v));case 4:i=e.sent,o=i.data,console.log(o),o.success?(d.Am.success(o.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n(!s)):d.Am.error(o.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(s,n){return e.apply(this,arguments)}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(H.Z,{}),(0,t.jsxs)("section",{className:"listings-details-area pb-70",children:[(0,t.jsxs)("div",{className:"listings-details-image",children:[(0,t.jsx)(d.Ix,{}),null!==x&&(0,t.jsx)("img",{src:x,alt:"image",className:"cover-img"}),(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"listings-details-content",children:[(0,t.jsxs)("span",{className:"meta",children:[(0,t.jsx)("i",{className:"flaticon-furniture-and-household"}),null!==c&&c.category]}),null!==c&&(0,t.jsx)("h3",{children:c.businessName}),(0,t.jsxs)("div",{className:"rating d-flex align-items-center",children:[oe>=1&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),oe>=2&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),oe>=3&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),oe>=4&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),oe>=5&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),oe<5&&(0,t.jsx)("span",{className:"bx bx-star checked"}),oe<4&&(0,t.jsx)("span",{className:"bx bx-star checked"}),oe<3&&(0,t.jsx)("span",{className:"bx bx-star checked"}),oe<2&&(0,t.jsx)("span",{className:"bx bx-star checked"}),oe<1&&(0,t.jsx)("span",{className:"bx bx-star checked"})]}),(0,t.jsxs)("ul",{className:"d-flex align-items-center",children:[null!==c&&(0,t.jsx)("li",{className:"phone-number",children:(0,t.jsxs)("a",{href:"#",children:[(0,t.jsx)("i",{className:"bx bx-phone-call"})," ",c.mobile]})}),null!==c&&(0,t.jsxs)("li",{className:"location",children:[(0,t.jsx)("i",{className:"bx bx-map"}),(0,t.jsx)("span",{children:"Location"}),(0,t.jsxs)("p",{children:[" ",c.location[0],", ",c.city[0],","," ",c.state[0]]})]})]})]})})}),(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("ul",{className:"share-save",children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"share",onClick:function(){me(!pe)},children:[(0,t.jsx)("i",{className:"bx bx-share-alt"})," Share"]}),(0,t.jsx)("div",{className:pe?"dropdown-menu show pad-none":"dropdown-menu ",children:(0,t.jsxs)("div",{className:"share-icons",children:[(0,t.jsx)("div",{children:(0,t.jsx)(B,{url:ge,quote:"",hashtag:"",children:(0,t.jsx)(h.k1O,{size:"27px",color:"3B5998"})})}),(0,t.jsx)("div",{children:(0,t.jsx)(I,{url:ge,quote:"",hashtag:"",children:(0,t.jsx)(D.ixJ,{size:"27px",color:"red"})})}),(0,t.jsx)("div",{children:(0,t.jsx)(E,{url:ge,quote:"",hashtag:"",children:(0,t.jsx)(p.tdG,{size:"27px",color:"rgb(78 197 91)"})})})]})}),(0,t.jsxs)("div",{className:"social",children:[(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"bx bxl-facebook"})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"bx bxl-pinterest"})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"bx bxl-twitter"})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"bx bxl-linkedin"})}),(0,t.jsx)("a",{href:"#",children:(0,t.jsx)("i",{className:"bx bxl-whatsapp"})})]})]}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"like-btn",children:"Customer"==R?(0,t.jsx)("button",{onClick:je,children:T?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.xTs,{fill:"red",className:"mr-1"}),J]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.xTs,{className:"mr-1"}),J]})}):(0,t.jsx)("button",{onClick:function(){d.Am.error("Please Login As Customer",{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.xTs,{className:"mr-1"}),J]})})})})]})})]}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-8 col-md-12",children:(0,t.jsxs)("div",{className:"listings-details-desc",children:[(0,t.jsx)("h3",{children:"Details"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur."}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."}),ue.length>0&&(0,t.jsxs)("div",{id:"review",children:[(0,t.jsx)("h3",{children:"Review"}),(0,t.jsx)("div",{className:"listings-review-comments",children:ue.map((function(e){var s=e.createdAt,n=new Date(s).toString().split(" ");return(0,t.jsx)("div",{className:"user-review",children:(0,t.jsxs)("div",{className:"row m-0",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-4 p-0",children:(0,t.jsx)("div",{className:"user",children:(0,t.jsxs)("div",{className:"d-flex",children:[(0,t.jsx)("img",{src:"/images/user1.jpg",alt:"image",style:{width:"85px"}}),(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("h4",{children:e.customerName}),(0,t.jsx)("span",{children:e.customerEmail}),(0,t.jsx)("br",{})]})]})})}),(0,t.jsxs)("div",{className:"col-lg-6 col-md-8 p-0",children:[e.customerId==O&&(0,t.jsx)("button",{className:"image-trash",onClick:function(s){return Ne(s,e._id)},children:(0,t.jsx)(p.GnT,{color:"white",size:"20"})}),(0,t.jsxs)("div",{className:"comments",children:[(0,t.jsxs)("div",{className:"rating",children:[e.customerRating>=1&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),e.customerRating>=2&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),e.customerRating>=3&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),e.customerRating>=4&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),e.customerRating>=5&&(0,t.jsx)("span",{className:"bx bxs-star checked"}),e.customerRating<=4&&(0,t.jsx)("span",{className:"bx bx-star checked"}),e.customerRating<=3&&(0,t.jsx)("span",{className:"bx bx-star checked"}),e.customerRating<=2&&(0,t.jsx)("span",{className:"bx bx-star checked"}),e.customerRating<=1&&(0,t.jsx)("span",{className:"bx bx-star checked"})]}),(0,t.jsxs)("p",{children:[(0,t.jsxs)("span",{className:"review-reply",children:["Review:"," "]}),e.customerReview]}),(0,t.jsxs)("p",{children:[(0,t.jsxs)("span",{className:"review-reply",children:["Reply:"," "]}),e.reply]}),(0,t.jsx)("div",{className:"row m-0",children:(0,t.jsx)("div",{className:"col-lg-8 col-md-8 col-8 col-sm-8 p-0",children:(0,t.jsxs)("ul",{className:"like-unlike",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:n[2]})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:n[1]})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:n[3]})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{children:n[4]})})]})})})]})]})]})})}))})]})]})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,t.jsxs)("div",{className:"listings-sidebar",children:[(0,t.jsxs)("div",{className:"listings-widget listings_contact_details",children:[(0,t.jsx)("h3",{children:"Contact Details"}),(0,t.jsxs)("ul",{children:[null!==c&&(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bx bx-phone-call"}),(0,t.jsx)("a",{href:"tel:+2122791456",children:c.mobile})]}),null!==c&&(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{className:"bx bx-map"}),c.location[0],", ",c.city[0],","," ",c.state[0]]})]})]}),(0,t.jsx)("div",{className:"listings-details-desc",children:(0,t.jsx)("div",{id:"add-review",children:"Customer"==R&&(0,t.jsxs)("div",{className:"review-form-wrapper",children:[(0,t.jsx)("h3",{children:"Add A Review"}),(0,t.jsx)("form",{onSubmit:be,children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,t.jsx)("div",{className:"sub-ratings",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12 col-md-4 col-6 col-sm-6",children:(0,t.jsxs)("div",{className:"add-sub-rating",children:[(0,t.jsx)("h4",{children:"Rating"}),(0,t.jsxs)("div",{className:"cleanliness-rating",children:[(0,t.jsx)("input",{type:"radio",id:"cleanlinessStar5",name:"cleanliness-rating",onChange:function(){return ne(5)}}),(0,t.jsx)("label",{htmlFor:"cleanlinessStar5"}),(0,t.jsx)("input",{type:"radio",id:"cleanlinessStar4",name:"cleanliness-rating",onChange:function(){return ne(4)}}),(0,t.jsx)("label",{htmlFor:"cleanlinessStar4"}),(0,t.jsx)("input",{type:"radio",id:"cleanlinessStar3",name:"cleanliness-rating",value:"3",onChange:function(){return ne(3)}}),(0,t.jsx)("label",{htmlFor:"cleanlinessStar3"}),(0,t.jsx)("input",{type:"radio",id:"cleanlinessStar2",name:"cleanliness-rating",value:"2",onChange:function(){return ne(2)}}),(0,t.jsx)("label",{htmlFor:"cleanlinessStar2"}),(0,t.jsx)("input",{type:"radio",id:"cleanlinessStar1",name:"cleanliness-rating",value:"1",onChange:function(){return ne(1)}}),(0,t.jsx)("label",{htmlFor:"cleanlinessStar1"})]})]})})})})}),(0,t.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"text",className:"form-control",placeholder:"Name *",value:Q})})}),(0,t.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("input",{type:"email",className:"form-control",placeholder:"Email *",value:U})})}),(0,t.jsxs)("div",{className:"col-lg-12 col-md-12",children:[(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("textarea",{placeholder:"Your review",className:"form-control",cols:"30",rows:"6",value:V,onChange:function(e){return $(e.target.value)}})}),re&&(0,t.jsx)("p",{style:{color:"red"},children:"Please give ratings and review"})]}),(0,t.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,t.jsx)("button",{type:"submit",children:"Submit"})})]})})]})})})]})})]})})]}),(0,t.jsx)(q.Z,{bgColor:"bg-f5f5f5"})]})})},7931:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-listings",function(){return n(5942)}])}},function(e){e.O(0,[9774,5445,4617,1228,5937,2013,7278,340,7321,2036,8856,8629,2888,179],(function(){return s=7931,e(e.s=s);var s}));var s=e.O();_N_E=s}]);