(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Forma_form__2z4fH",label:"Forma_label__nFJCY",btn:"Forma_btn__1LWkh"}},,function(e,t,n){e.exports={contact:"Filter_contact__2rem0"}},function(e,t,n){e.exports={list:"ContactList_list__2ZKXV",item:"ContactList_item__202w5",btn:"ContactList_btn__1ImLJ"}},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(16),n(10)),o=n(2),l=(n(17),n(11)),u=n(4),b=n.n(u),m=n(0),d=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}},h=function(){s(""),d("")};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),t(r,u),h()},children:[Object(m.jsxs)("label",{className:b.a.label,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:j})]}),Object(m.jsxs)("label",{className:b.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:j})]}),Object(m.jsx)("button",{className:b.a.btn,children:"Add contact"})]})},j=n(6),h=n.n(j),f=function(e){var t=e.value,n=e.onChange;return Object(m.jsx)("div",{className:h.a.box,children:Object(m.jsxs)("label",{className:h.a.contact,children:["Find contacts by name",Object(m.jsx)("input",{className:h.a.input,type:"text",value:t,onChange:n})]})})},O=n(7),p=n.n(O),x=function(e){var t=e.contacts,n=e.onChange;return Object(m.jsx)("ul",{className:p.a.list,children:t.length>0&&t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsxs)("li",{className:p.a.item,children:["".concat(a,": ").concat(c),Object(m.jsx)("button",{className:p.a.btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},g=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];var _=function(){var e=Object(a.useState)(g),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),u=s[0],b=s[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("section",{className:"wrapper",children:[Object(m.jsx)("h1",{className:"title",children:"Phonebook"}),Object(m.jsx)(d,{onSubmit:function(e,t){n.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):c((function(n){return[{id:Object(l.a)(),name:e,number:t}].concat(Object(i.a)(n))}))}}),Object(m.jsx)("h2",{className:"title",children:"Contacts"}),0===n.length?null:Object(m.jsx)(f,{value:u,onChange:function(e){b(e.currentTarget.value)}}),Object(m.jsx)(x,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onChange:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.faee158b.chunk.js.map