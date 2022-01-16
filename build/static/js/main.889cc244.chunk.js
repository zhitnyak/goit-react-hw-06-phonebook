(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={contact:"Filter_contact__1Zvje"}},12:function(e,t,n){e.exports={list:"ContactList_list__3Ypc0",item:"ContactList_item__1EOC7",btn:"ContactList_btn__3Rgwl"}},25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=(n(25),n(26),n(15)),i=n(3),l=n(20),b=Object(i.b)("App/addContact",(function(e,t){return{payload:{name:e,number:t,id:Object(l.a)()}}})),u=Object(i.b)("App/removeContact"),j=n(4),d=n(8),m=n.n(d),O=n(1);var f=function(e){e.onSubmit;var t=Object(j.b)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],f=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}};return Object(O.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),t(b(r,u)),s(""),d("")},children:[Object(O.jsxs)("label",{className:m.a.label,children:["Name",Object(O.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Freddie Mercury",required:!0,onChange:f})]}),Object(O.jsxs)("label",{className:m.a.label,children:["Number",Object(O.jsx)("input",{type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"+38 (0XX) XXX-XX-XX",required:!0,onChange:f})]}),Object(O.jsx)("button",{className:m.a.btn,children:"Add contact"})]})},p=Object(i.b)("App/filter"),h=n(11),x=n.n(h);var v=function(){var e=Object(j.c)((function(e){return e.filter})),t=Object(j.b)();return Object(O.jsx)("div",{className:x.a.box,children:Object(O.jsxs)("label",{className:x.a.contact,children:["Filter",Object(O.jsx)("input",{className:x.a.input,type:"text",name:"name",placeholder:"Enter contact name",value:e,onChange:function(e){return t(p(e.currentTarget.value))}})]})})},_=n(12),C=n.n(_);var g,N=function(){var e=Object(j.c)((function(e){return e.items})),t=Object(j.c)((function(e){return e.filter})),n=Object(j.b)(),c=Object(a.useCallback)((function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),[e,t]);Object(a.useEffect)((function(){0===c().length&&""!==t&&n(p(""))}),[c,n]);var r=c();return Object(O.jsx)("ul",{className:C.a.list,children:r&&r.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(O.jsxs)("li",{className:C.a.item,children:["".concat(a,": ").concat(c),Object(O.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return function(e){n(u(e))}(t)},children:"delete"})]},t)}))})},y=n(17),k=n(2),w=n(7),A=n(19),X=Object(i.c)([],(g={},Object(w.a)(g,b,(function(e,t){var n=t.payload;return e.find((function(e){return e.name===n.name}))?(alert("This contact is already exists"),e):[].concat(Object(A.a)(e),[n])})),Object(w.a)(g,u,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),g)),F=Object(i.c)("",Object(w.a)({},p,(function(e,t){return t.payload}))),z=n(5),L=n(18),S={key:"root",storage:n.n(L).a,blacklist:["filter"]},T=Object(k.b)({items:X,filter:F}),E=Object(i.a)({reducer:Object(z.g)(S,T),middleware:function(e){return e({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})},devTools:!1}),Z=Object(z.h)(E),J=E;var M=function(){return Object(O.jsx)(y.a,{loading:null,persistor:Z,children:Object(O.jsxs)("section",{className:"wrapper",children:[Object(O.jsx)("h1",{className:"title",children:"Phonebook"}),Object(O.jsx)(f,{}),Object(O.jsx)("h2",{className:"title",children:"Contacts"}),Object(O.jsx)(v,{}),Object(O.jsx)(N,{})]})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(j.a,{store:J,children:Object(O.jsx)(M,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"Forma_form__ATzrx",label:"Forma_label__luntn",btn:"Forma_btn__2s-bV"}}},[[36,1,2]]]);
//# sourceMappingURL=main.889cc244.chunk.js.map