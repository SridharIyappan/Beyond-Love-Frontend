(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5555],{4062:function(e,t,s){"use strict";s.r(t);var r=s(5893),n=s(6265),c=s(809),a=s.n(c),o=s(2447),i=(s(1664),s(6428)),l=s(5621),u=s(4937),p=(s(4730),s(7294)),d=s(463),g=s(9669),f=s.n(g),h=s(733),m=s.n(h);function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t.default=function(){var e=(0,p.useState)([]),t=e[0],s=e[1],n=(0,p.useState)(""),c=n[0],g=n[1],h=(0,p.useState)(""),x=h[0],j=h[1],b=(0,p.useState)([]),O=b[0],y=b[1],w=(0,p.useState)(!1),N=w[0],k=w[1];console.log(x);var P=(0,d.uI)({accept:"image/*",onDrop:function(e){s(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),_=P.getRootProps,E=P.getInputProps,S=t.map((function(e){return(0,r.jsx)("div",{className:"drop-gallery-thumb",children:(0,r.jsx)("img",{src:e.preview})},e.name)}));(0,p.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));j(e.category),g(e._id),console.log("we are running client side"),""!=x&&D(e._id)}),[x]),(0,p.useEffect)((function(){return function(){t.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[t]);var D=function(){var e=(0,o.Z)(a().mark((function e(t){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(x),e.next=4,f().get("".concat("http://3.109.200.71","/api/business/get-profile/").concat(x,"/").concat(t));case 4:s=e.sent,r=s.data,y(r.business.images),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.Z)(a().mark((function e(r){var n,o,i,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!(t.length>0)){e.next=29;break}n=0;case 3:if(!(n<t.length)){e.next=24;break}return k(!0),(o=new FormData).append("file",t[n]),console.log(t),e.prev=8,console.log(x),e.next=12,f().post("".concat("http://3.109.200.71","/api/business/update-profile-cover-picture/").concat(c,"/").concat(x,"/allphotos"),o);case 12:i=e.sent,l=i.data,console.log(l),y(l.businessImages),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),console.log(e.t0);case 21:n++,e.next=3;break;case 24:s([]),k(!1),u.Am.success("Photos Uploaded Successfully",{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=30;break;case 29:u.Am.error("Please Upload a Image...!",{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 30:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{}),(0,r.jsxs)("div",{className:"main-content d-flex flex-column",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(u.Ix,{}),(0,r.jsxs)("div",{className:"add-listings-box",children:[(0,r.jsxs)("div",v(v({},_()),{},{className:"dropzone",children:[(0,r.jsx)("h3",{children:"Grooming Gallery"}),t.length>0?(0,r.jsxs)("div",{className:"gallery-flex",children:[S,(0,r.jsx)("input",v({},E()))]}):(0,r.jsxs)("div",{className:"file-upload-box",children:[(0,r.jsx)("input",v({},E())),(0,r.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]})]})),(0,r.jsx)("br",{}),(0,r.jsx)("form",{onClick:C,children:(0,r.jsx)("div",{className:"add-listings-btn",style:{float:"right"},children:(0,r.jsx)("button",{type:"submit",children:"Upload"})})})]}),(0,r.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:N&&(0,r.jsx)("div",{className:"loader",children:(0,r.jsx)(m(),{type:"spokes",color:"#febc1e"})})}),(0,r.jsx)("div",{className:"gallery add-listings-btn",children:O.map((function(e){var t="".concat("http://3.109.200.71","/api/business/get-photos/").concat(e);return(0,r.jsx)("img",{src:t,alt:"missing",className:"gallery__img"})}))}),(0,r.jsx)("div",{className:"flex-grow-1"}),(0,r.jsx)("div",{className:"copyrights-area",children:(0,r.jsx)("div",{className:"row align-items-center",children:(0,r.jsx)("div",{className:"col-lg-6 col-sm-6 col-md-6",children:(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{className:"bx bx-copyright"}),"2022",(0,r.jsx)("a",{href:"#",children:"BEYONDLOVE"}),". All rights reserved"]})})})})]})]})}},3964:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/add-listing/petgrooming",function(){return s(4062)}])}},function(e){e.O(0,[9774,7321,2036,8811,733,4335,2888,179],(function(){return t=3964,e(e.s=t);var t}));var t=e.O();_N_E=t}]);