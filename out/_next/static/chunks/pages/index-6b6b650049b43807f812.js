(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8116:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return N},default:function(){return y}});var n=a(5893),t=a(933),o=a(5721),r=a(809),l=a.n(r),c=a(2447),i=a(9669),d=a.n(i),u=(a(1664),a(7294)),m=a(1163),g=a(5346),h=a.n(g),p=a(4937),x=(a(4730),a(7605)),j=function(){var e=(0,u.useState)(!1),s=e[0],a=e[1],t=(0,u.useState)(""),o=t[0],r=t[1],i=(0,u.useState)(""),g=i[0],j=i[1],v=(0,u.useState)(""),f=v[0],N=v[1],y=(0,u.useState)(""),b=y[0],S=y[1],C=(0,u.useState)(""),P=C[0],w=C[1],k=(0,u.useState)(""),O=k[0],_=k[1],A=(0,u.useState)(!1),B=A[0],F=A[1],J=(0,u.useState)(""),T=J[0],Z=J[1],E=(0,u.useState)(""),G=E[0],H=E[1],D=(0,u.useState)([]),I=D[0],L=D[1],R=(0,u.useState)(""),U=R[0],X=R[1],q=(0,u.useState)([]),M=q[0],Y=q[1],$=(0,u.useState)(""),z=$[0],K=$[1],Q=(0,u.useState)([]),V=(Q[0],Q[1]),W=(0,u.useState)([]),ee=W[0],se=W[1],ae=(0,u.useState)([]),ne=ae[0],te=ae[1],oe=(0,u.useState)([]),re=oe[0],le=oe[1],ce=(0,u.useState)(!1),ie=ce[0],de=ce[1],ue=(0,u.useState)(""),me=ue[0],ge=ue[1],he=(0,u.useState)(""),pe=he[0],xe=he[1],je=(0,x.$G)("home").t,ve=(0,m.useRouter)();(0,u.useEffect)((function(){console.log("we are running the client");var e=localStorage.getItem("token"),s=JSON.parse(localStorage.getItem("user"));console.log(s),null!=s&&void 0!=s&&(r(s.customerName),j(s.mobile),S(s.city[0]),w(s.location[0]),xe(s.userType)),ge(e),fe()}),[]);var fe=function(){var e=(0,c.Z)(l().mark((function e(){var s,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("".concat("http://3.109.200.71","/api/business/get-profiles-from-all-categories"));case 3:s=e.sent,a=s.data,console.log(a),V(a.profilesArray),be(a.profilesArray),dispatch(addAllBusiness(a.profilesArray)),de(!ie),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=(0,c.Z)(l().mark((function e(s){var a,n,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),a={name:o,mobile:g,category:f,city:b,location:P,appointmentDate:O},console.log(a),""!==o&&""!==g&&""!==f&&""!==b&&""!==P&&""!==O){e.next=7;break}F(!0),e.next=19;break;case 7:return e.prev=7,e.next=10,d().post("".concat("http://3.109.200.71","/api/customer/appointment-booking/").concat(me),a);case 10:n=e.sent,t=n.data,console.log(t),t.success?(p.Am.success(t.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),r(""),j(""),N(""),S(""),w(""),_("")):p.Am.error(t.msg,{theme:"light",position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(s){return e.apply(this,arguments)}}(),ye=function(){var e=(0,c.Z)(l().mark((function e(s){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log({categoryName:z},{stateName:T},{cityName:G},{locationName:U}),ve.push({pathname:"/listings",query:{categoryName:z,stateName:T,cityName:G,locationName:U}});case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),be=function(e){var s=[],a=[],n=[];e.map((function(e){console.log(e),void 0!==e.state[0]&&s.push(e.state),void 0!==e.city[0]&&a.push(e.city),void 0!==e.location[0]&&n.push(e.location)}));var t=s.map(JSON.stringify),o=new Set(t),r=Array.from(o,JSON.parse);r.sort((function(e,s){return e[0]<s[0]?-1:1})),console.log(r);var l=a.map(JSON.stringify),c=new Set(l),i=Array.from(c,JSON.parse);i.sort((function(e,s){return e[0]<s[0]?-1:1}));var d=n.map(JSON.stringify),u=new Set(d),m=Array.from(u,JSON.parse);m.sort((function(e,s){return e[0]<s[0]?-1:1})),se(r),te(i),le(m)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:"banner-wrapper-area-main-banner",children:[(0,n.jsx)(p.Ix,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-lg-8 col-sm-12 col-md-12",children:[(0,n.jsxs)("div",{className:"banner-content banner-form",children:[(0,n.jsxs)("h1",{className:"banner-two-heading",style:{height:"14vh"},children:[(0,n.jsx)("span",{className:"typewrite",children:je("Find Nearby")}),(0,n.jsxs)(h(),{children:[(0,n.jsx)("span",{children:je("Pet Clinic")}),(0,n.jsx)(h().Backspace,{count:15,delay:200}),(0,n.jsx)("span",{children:je("Pet Grooming")}),(0,n.jsx)(h().Backspace,{count:15,delay:200}),(0,n.jsx)("span",{children:je("Pet Training")}),(0,n.jsx)(h().Backspace,{count:15,delay:200}),(0,n.jsx)("span",{children:je("Pet Boarding")})]}),(0,n.jsx)("span",{className:"wrap"})]}),(0,n.jsx)("form",{onSubmit:ye,children:(0,n.jsxs)("div",{className:"row m-0 align-items-center",style:{padding:"6px"},children:[(0,n.jsx)("div",{class:"col-lg-2 col-md-6 p-0",children:(0,n.jsxs)("div",{className:"form-group category-select",children:[(0,n.jsx)("label",{className:"category-icon",children:(0,n.jsx)("i",{className:"flaticon-pin"})}),(0,n.jsxs)("select",{className:"banner-form-select-two",value:T,onChange:function(e){console.log("changed");var s=e.target.value;console.log({stateChange:s}),Z(s.split(","))},children:[(0,n.jsx)("option",{children:je("States")}),ee.map((function(e){return(0,n.jsx)("option",{value:[e[0],e[1]],children:e[0]},e[0])}))]})]})}),(0,n.jsx)("div",{class:"col-lg-2 col-md-6 p-0",children:(0,n.jsxs)("div",{className:"form-group category-select",children:[(0,n.jsx)("label",{className:"category-icon",children:(0,n.jsx)("i",{className:"flaticon-pin"})}),(0,n.jsxs)("select",{className:"banner-form-select-two",onFocus:function(){if(console.log(T),""==T||void 0==T[1])p.Am.error("Please Select State",{theme:"light",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{console.log(ne),console.log(T[1]);var e=[];ne.map((function(s){s[1]==T[1]&&e.push(s)})),console.log(e),L(e)}},onChange:function(e){var s=e.target.value;console.log(s.split(",")),H(s.split(","))},children:[(0,n.jsx)("option",{children:je("City")}),I.map((function(e){return(0,n.jsx)("option",{value:[e[0],e[1],e[2]],children:e[0]},e[0])}))]})]})}),(0,n.jsx)("div",{class:"col-lg-3 col-md-6 p-0",children:(0,n.jsxs)("div",{className:"form-group category-select",children:[(0,n.jsx)("label",{className:"category-icon",children:(0,n.jsx)("i",{className:"flaticon-pin"})}),(0,n.jsxs)("select",{className:"banner-form-select-two",onFocus:function(){if(console.log(G),""==G||void 0==G[2])p.Am.error("Please Select City",{theme:"light",position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{console.log(ne),console.log(G);var e=[];re.map((function(s){console.log(s),s[2]==G[2]&&e.push(s)})),console.log(e),Y(e)}},onChange:function(e){var s=e.target.value;X(s.split(","))},children:[(0,n.jsx)("option",{children:je("Location")}),M.map((function(e){return(0,n.jsx)("option",{value:[e[0],e[1],e[2],e[3]],children:e[0]},e[0])}))]})]})}),(0,n.jsx)("div",{class:"col-lg-3 col-md-6 p-0",children:(0,n.jsxs)("div",{className:"form-group category-select",children:[(0,n.jsx)("label",{className:"category-icon",children:(0,n.jsx)("i",{className:"flaticon-search"})}),(0,n.jsxs)("select",{className:"banner-form-select-two",onChange:function(e){console.log(e.target.value),K(e.target.value)},children:[(0,n.jsx)("option",{children:"Categories"}),(0,n.jsx)("option",{value:"PetClinic",children:"Pet Clinic"}),(0,n.jsx)("option",{value:"PetGrooming",children:"Pet Grooming"}),(0,n.jsx)("option",{value:"PetBoarding",children:"Pet Boarding"}),(0,n.jsx)("option",{value:"PetTraining",children:"Pet Training"})]})]})}),(0,n.jsx)("div",{class:"col-lg-2 col-md-6 p-0",children:(0,n.jsx)("div",{className:"submit-btn ",children:(0,n.jsxs)("button",{type:"submit",children:[" ",(0,n.jsx)("i",{className:"flaticon-search"})]})})})]})})]}),(0,n.jsx)("div",{style:{display:"flex"},children:(0,n.jsx)("div",{className:"search-btn",children:(0,n.jsx)("button",{onClick:function(){"Customer"==pe?a(!s):p.Am.error("Please login as a customer",{theme:"light",position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:je("Leave Your Search to Us")})})})]}),s&&(0,n.jsx)("div",{className:"col-lg-4 col-sm-12 col-md-12",children:(0,n.jsx)("div",{className:"contact-form mt-5",children:(0,n.jsx)("form",{id:"contactForm",onSubmit:Ne,children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",className:"dashbaord-category-select",placeholder:"Name",style:{border:"none"},value:o,onChange:function(e){return r(e.target.value)}}),B&&""==o?(0,n.jsx)("span",{className:"text-danger",children:"Please enter name"}):(0,n.jsx)(n.Fragment,{children:" "})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",className:"dashbaord-category-select",placeholder:"Mobile",style:{border:"none"},value:g,onChange:function(e){return j(e.target.value)}}),B&&""==g?(0,n.jsx)("span",{className:"text-danger",children:"Please enter mobile number"}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("select",{className:"dashbaord-category-select",placeholder:"Select the state",style:{border:"none"},value:f,onChange:function(e){return N(e.target.value)},children:[(0,n.jsx)("option",{children:"Categories"}),(0,n.jsx)("option",{children:"Pet Clinic"}),(0,n.jsx)("option",{children:"Pet Grooming"}),(0,n.jsx)("option",{children:"Pet Boarding"}),(0,n.jsx)("option",{children:"Pet Training"}),(0,n.jsx)("option",{children:"Pet Food"})]}),B&&""==f.length?(0,n.jsx)("span",{className:"text-danger",children:"Please select category"}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",className:"dashbaord-category-select",placeholder:"City",style:{border:"none"},value:b,onChange:function(e){return S(e.target.value)}}),B&&""==P?(0,n.jsx)("span",{className:"text-danger",children:"Please enter city"}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"text",className:"dashbaord-category-select",placeholder:"Location",style:{border:"none"},value:P,onChange:function(e){return w(e.target.value)}}),B&&""==P?(0,n.jsx)("span",{className:"text-danger",children:"Please enter location"}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsxs)("label",{children:[(0,n.jsx)("i",{className:"bx bx-menu-alt-left"})," Appoinment:"]})})}),(0,n.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("input",{type:"datetime-local",className:"form-control",placeholder:"Appointment",value:O,onChange:function(e){return _(e.target.value)}}),B&&""==O?(0,n.jsx)("span",{className:"text-danger",children:"Please select date"}):(0,n.jsx)(n.Fragment,{})]})}),(0,n.jsxs)("div",{className:"col-lg-12 col-md-12",children:[(0,n.jsx)("button",{type:"submit",className:"default-btn",children:"Reach Us"}),(0,n.jsx)("div",{id:"msgSubmit",className:"h3 text-center hidden"}),(0,n.jsx)("div",{className:"clearfix"})]})]})})})})]})})]})})},v=a(5723),f=(a(6828),a(584),a(4489),a(6980),a(4117),a(1239),a(5984),a(1646)),N=!0,y=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{}),(0,n.jsx)(j,{}),(0,n.jsx)(o.Z,{}),(0,n.jsx)(v.Z,{titleOne:!0}),(0,n.jsx)(f.Z,{})]})}},8581:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8116)}])}},function(e){e.O(0,[9774,5445,4617,1228,4980,8907,7278,340,7321,2036,8856,5346,7857,8629,5986,5522,4868,2888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);