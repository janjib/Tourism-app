(this["webpackJsonpreact-tourism"]=this["webpackJsonpreact-tourism"]||[]).push([[0],{38:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(29),s=c.n(n),r=(c(37),c(38),c(1)),i=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"mt-5 text-center",children:"Tourism"}),Object(r.jsx)("p",{className:"text-center my-3",children:"Search the best tourism place here"})]})},j=c(11),l=c(67),d=c(65),o=c(68),b=c(16),x=c.n(b),u=c(30),m=c(31),O=c.n(m),h=Object(a.createContext)(),f=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!0),l=Object(j.a)(i,2),d=l[0],o=l[1];return Object(a.useEffect)(Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://course-api.com/react-tours-project");case 2:t=e.sent,s(t.data),o(!1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(r.jsx)(h.Provider,{value:[n,s,d],children:e.children})},p=c(3),v=function(){var e=Object(p.f)(),t=Object(a.useContext)(h),c=Object(j.a)(t,3),n=c[0],s=c[1],i=c[2],b=function(e){s(n.filter((function(t){return t.id!==e.target.id})))};return Object(r.jsx)(r.Fragment,{children:i?Object(r.jsx)("h1",{className:"text-center my-5",children:"Loading"}):Object(r.jsx)("div",{className:"d-flex flex-wrap",children:n.map((function(t){var c=t.id,a=t.name,n=t.info,s=t.image,i=t.price;return Object(r.jsx)("div",{className:"tourist-list",children:Object(r.jsxs)(l.a,{className:"mx-2 my-2 tourist-list-card",children:[Object(r.jsx)(l.a.Img,{variant:"top",src:s,className:"tourist-image img-fluid"}),Object(r.jsxs)(l.a.Body,{children:[Object(r.jsxs)("div",{className:"d-flex justify-content-between badge-div",children:[Object(r.jsx)(l.a.Title,{children:a}),Object(r.jsxs)(d.a,{variant:"success price-badge",children:["$",i]})]}),Object(r.jsx)(l.a.Text,{children:n}),Object(r.jsxs)(l.a.Text,{children:["$",i]}),Object(r.jsx)(o.a,{variant:"primary",onClick:function(){return e.push("/detail/".concat(c))},children:"Buy now !"}),Object(r.jsx)(o.a,{variant:"danger m-1",onClick:b,id:c,children:"Delete"})]})]})},c)}))})})},g=c(66),N=c(13),y=function(){return Object(r.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column my-5",children:[Object(r.jsx)("h1",{children:"404"}),Object(r.jsx)("h2",{children:"Page not found"})]})},k=function(){var e=Object(a.useContext)(h),t=Object(j.a)(e,1)[0],c=Object(p.f)(),n=Object(p.g)().id;console.log(n);var s=Object(a.useState)([]),i=Object(j.a)(s,2),l=i[0],b=i[1];return Object(a.useEffect)((function(){t.map((function(e){e.id===n&&b(e)}))}),[]),Object(r.jsxs)("div",{className:"my-5",children:[Object(r.jsx)("h2",{className:"text-center my-5",children:l.name}),Object(r.jsxs)("div",{className:"row detail-row",children:[Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("img",{className:"detail-image mx-auto d-block ",src:l.image,alt:""})}),Object(r.jsxs)("div",{className:"col my-auto d-flex flex-column align-items-center",children:[Object(r.jsx)("p",{className:"my-3 text-center",children:l.info}),Object(r.jsxs)(d.a,{variant:"success text-center mx-auto price-badge-2",children:["$",l.price]})]})]}),Object(r.jsx)("div",{className:"detail-button",children:Object(r.jsx)(o.a,{className:"mx-auto d-block my-5 text-center",variant:"primary",onClick:function(){return c.push("/")},children:"Go back"})})]})};var w=function(){return Object(r.jsx)(g.a,{children:Object(r.jsx)(f,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(i,{}),Object(r.jsx)(N.a,{children:Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{path:"/",exact:!0,component:v}),Object(r.jsx)(p.a,{path:"/detail/:id",exact:!0,component:k}),Object(r.jsx)(p.a,{path:"/",component:y})]})})]})})})};s.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.48e65a8f.chunk.js.map