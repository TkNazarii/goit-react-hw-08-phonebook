"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[657],{3657:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(9434),r=n(2791),s=function(e){return e.contacts.items||[]},c=function(e){return e.contacts.loading},i=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},o=n(2650),l="myContacts_phonebookContainer__9SkGr",u="myContacts_titlePhonebook__cjs+E",m="myContacts_titleContacts__MIy+- myContacts_titlePhonebook__cjs+E",d="myContacts_allContacts__zTl-w",f=n(9439),_=n(1686),h={form:"ContactForm_form__3iqMm",label:"ContactForm_label__OPVHP",inputName:"ContactForm_inputName__YpwNU",inputNumber:"ContactForm_inputNumber__Dbwgm ContactForm_inputName__YpwNU"},b=n(184),p=function(){var e=(0,r.useState)(""),t=(0,f.Z)(e,2),n=t[0],c=t[1],i=(0,r.useState)(""),l=(0,f.Z)(i,2),u=l[0],m=l[1],d=(0,a.v9)(s),p=(0,a.I0)(),N=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":m(a);break;default:return}},v=function(e){var t=e.name,n=e.number,a=(0,o.uK)({name:t,number:n});p(a)};return(0,b.jsxs)("form",{className:h.form,onSubmit:function(e){e.preventDefault();var t=d.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})),a=d.some((function(e){return e.number===u}));t?_.Notify.failure("".concat(n," is alredy in contacts")):a?_.Notify.failure("".concat(u," is alredy in contacts")):(v({name:n,number:u}),c(""),m(""))},children:[(0,b.jsxs)("label",{className:h.label,children:["Name",(0,b.jsx)("input",{className:h.inputName,value:n,onChange:N,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)("label",{className:h.label,children:["Number",(0,b.jsx)("input",{className:h.inputNumber,value:u,onChange:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)("button",{className:h.buttonAdd,type:"submit",children:"Add contact"})]})},N="ContactList_list__AZQaA",v={item:"ContactListItem_item__Y1zE5",contact:"ContactListItem_contact__3zGyM"},x=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)();return(0,b.jsxs)("li",{className:v.item,children:[(0,b.jsxs)("p",{className:v.contact,children:[n," ",r]}),(0,b.jsx)("button",{className:v.buttonDelete,type:"submit",onClick:function(){return e=t,void s((0,o.GK)(e));var e},children:"Delete"})]})},j=function(){var e=(0,a.v9)(i);return(0,b.jsx)("ul",{className:N,children:e.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,b.jsx)(x,{name:n,number:a,id:t},t)}))})},C=n(5653),y=function(e){return e.filter},g={filter:"Filter_filter__cPyOe",filterInput:"Filter_filterInput__yhdfQ"},k=function(){var e=(0,a.v9)(y),t=(0,a.I0)();return(0,b.jsx)("div",{className:g.filter,children:(0,b.jsxs)("label",{className:g.labelFilter,children:["Find contacts",(0,b.jsx)("input",{className:g.filterInput,type:"text",name:"filter",value:e,onChange:function(e){t((0,C.T)(e.currentTarget.value.trim()))}})]})})},w="Notification_title__4Of+U",F=function(e){var t=e.message;return(0,b.jsx)("p",{className:w,children:t})},A=n(1831);var I=function(){var e=(0,a.v9)(s),t=Boolean(e.length),n=(0,a.v9)(c),i=(0,a.I0)();return(0,r.useEffect)((function(){i((0,o.yF)())}),[i]),(0,b.jsxs)("div",{children:[n&&(0,b.jsx)(A.Z,{}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("h1",{className:u,children:"Phonebook"}),(0,b.jsx)(p,{}),(0,b.jsx)("h2",{className:m,children:"Contacts"}),(0,b.jsxs)("div",{className:d,children:["All contacts: ",e.length]}),t?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{}),(0,b.jsx)(j,{})]}):(0,b.jsx)(F,{message:"Contact list is empty"})]})]})},z=function(){return(0,b.jsx)("div",{children:(0,b.jsx)(I,{})})}}}]);
//# sourceMappingURL=657.06516f3c.chunk.js.map