(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(6),r=t(2),c=t(16),u=t.n(c),o=t(0),l=t.n(o),i=function(e){var n=e.label,t=e.value,a=e.changeHandler;return l.a.createElement("label",null,n,l.a.createElement("input",{style:{display:"block"},value:t,onChange:a}))},d=function(e){var n=e.search,t=e.changeHandler;return l.a.createElement(i,{label:"Search:",value:n,changeHandler:t})},m=function(e){var n=e.submitHandler,t=e.newName,a=e.nameChangeHandler,r=e.newNumber,c=e.numberChangeHandler;return l.a.createElement("form",{onSubmit:n},l.a.createElement("h2",null,"Add a number"),l.a.createElement(i,{label:"Name:",value:t,changeHandler:a}),l.a.createElement(i,{label:"Number:",value:r,changeHandler:c}),l.a.createElement("div",null,l.a.createElement("button",null,"add")))},s=function(e){var n=e.name,t=e.number,a=e.id,r=e.deleteHandler;return l.a.createElement("div",{style:{width:"400px",display:"flex",justifyContent:"space-between"}},n," | ",t,l.a.createElement("button",{onClick:r(a)},"Delete"))},f=function(e){var n=e.matched,t=e.deleteHandler;return n.map((function(e){var n=e.name,a=e.number,r=e.id;return l.a.createElement(s,{name:n,number:a,id:r,key:r,deleteHandler:t})}))},b=function(e){var n=e.msg,t=e.cls;return n&&l.a.createElement("div",{className:"".concat(t," toast")},n)},h=t(4),v=t.n(h),g="/api/persons",E=function(){return v.a.get(g).then((function(e){return e.data}))},p=function(e){return v.a.post(g,e).then((function(e){return e.data}))},w=function(e,n){return v.a.put("".concat(g,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return v.a.delete("".concat(g,"/").concat(e)).then((function(e){return e.data}))},O=(t(39),function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],u=Object(o.useState)(""),i=Object(r.a)(u,2),s=i[0],h=i[1],v=Object(o.useState)(""),g=Object(r.a)(v,2),O=g[0],H=g[1],y=Object(o.useState)([]),C=Object(r.a)(y,2),S=C[0],k=C[1],N=Object(o.useState)(""),D=Object(r.a)(N,2),T=D[0],x=D[1],A=Object(o.useState)(""),J=Object(r.a)(A,2),L=J[0],P=J[1],B=Object(o.useState)(""),F=Object(r.a)(B,2),I=F[0],W=F[1],q=function(e,n){P(e),W(n),setTimeout((function(){return P("")}),5e3)};Object(o.useEffect)((function(){E().then((function(e){return c(e)}))}),[]),Object(o.useEffect)((function(){var e,n=(e=T,function(n){return n.name.toLowerCase().includes(e.toLowerCase())});k(Object(a.a)(t.filter(n)))}),[T,t]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Phonebook"),l.a.createElement(b,{msg:L,cls:I}),l.a.createElement(d,{search:T,changeHandler:function(e){var n=e.target;return x(n.value)}}),l.a.createElement(m,{newName:s,nameChangeHandler:function(e){var n=e.target;return h(n.value)},newNumber:O,numberChangeHandler:function(e){var n=e.target;return H(n.value)},submitHandler:function(e){var n=t.find((function(e){return e.name===s}));n?window.confirm("The name ".concat(s," is already in storage. Do you want to update it?"))&&w(n.id,{name:s,number:O}).then((function(e){return c(t.map((function(t){return t.id===n.id?e:t})))})).catch((function(e){console.error(e),q("The contact has already been deleted.","error"),c(t.filter((function(e){return e.id!==n.id})))})):s&&O?p({name:s,number:O}).then((function(e){c([].concat(Object(a.a)(t),[e])),q("Contact saved","success")})).catch((function(e){console.error(e),q("Something went wrong on our side. The contact wasn't saved.","error")})):q("We need you to input name AND number","error"),h(""),H(""),e.preventDefault()}}),l.a.createElement("h2",null,"Entries"),l.a.createElement(f,{matched:S,deleteHandler:function(e){return function(){var n="Do you really want to delete the entry for ".concat(t.find((function(n){return n.id===e})).name);window.confirm(n)&&j(e).then((function(){c(t.filter((function(n){return n.id!==e}))),q("Contact deleted","success")})).catch((function(e){console.error(e),q("Something went wrong on our side. Please try again later","error")}))}}}))});u.a.render(l.a.createElement(O,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.239a1afa.chunk.js.map