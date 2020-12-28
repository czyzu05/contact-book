(this["webpackJsonpcontact-book"]=this["webpackJsonpcontact-book"]||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(60),o=a.n(r),i=a(26),l=function(){return Object(c.jsx)("nav",{className:"navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Contact Book"}),Object(c.jsx)("div",{children:Object(c.jsx)(i.b,{to:"/contacts/add",className:"btn btn-light ml-auto",children:"Create contact"})})]})})},b=a(11),d=a(27),j=a(193),u=a(16),h="CREATE_CONTACT",m="GET_CONTACT",p="UPDATE_CONTACT",O="DELETE_CONTACT",x="SELECT_CONTACT",y="CLEAR_CONTACT",g="DELETE_SELECTED_CONTACTS",f=a(136),v=function(e){var t=e.name,a=e.phone,n=e.email,s=e.id,r=e.selectAll,o=Object(u.b)();return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(c.jsx)("input",{readOnly:!0,checked:r,type:"checkbox",className:"custom-control-input"}),Object(c.jsx)("label",{className:"custom-control-label"})]})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(f.a,{className:"mr-2",name:t,size:"45",round:!0}),t]}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:n}),Object(c.jsxs)("td",{className:"actions",children:[Object(c.jsx)(i.b,{to:"/contacts/edit/".concat(s),children:Object(c.jsx)("span",{className:"mr-2",children:Object(c.jsx)("i",{className:"fas fa-pen"})})}),Object(c.jsx)("span",{onClick:function(){o(function(e){return{type:O,payload:e}}(s))},children:Object(c.jsx)("i",{className:"fas fa-trash-alt text-danger",style:{fontSize:"20px",cursor:"pointer"}})})]})]})},C=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],s=t[1],r=Object(u.c)((function(e){return e.contact.contacts})),o=Object(u.c)((function(e){return e.contact.selectedContacts})),i=Object(u.b)();return Object(n.useEffect)((function(){var e;i(a?(e=r.map((function(e){return e.id})),{type:x,payload:e}):{type:y})}),[a]),Object(c.jsxs)(c.Fragment,{children:[o.length>0&&r.length>0?Object(c.jsx)("button",{className:"btn btn-danger mb-3",onClick:function(){return i({type:g})},children:"Delete All"}):null,r.length>0?Object(c.jsxs)(j.a,{bordered:!0,hover:!0,variant:"shadow",children:[Object(c.jsx)("thead",{className:"bg-danger text-white",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(c.jsx)("input",{id:"sellectAll",type:"checkbox",className:"custom-control-input",value:a,onClick:function(){return s(!a)}}),Object(c.jsx)("label",{htmlFor:"sellectAll",className:"custom-control-label"})]})}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"E-mail"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:r.map((function(e){return Object(n.createElement)(v,Object(b.a)(Object(b.a)({},e),{},{key:e.id,selectAll:a}))}))})]}):Object(c.jsx)("p",{children:"Your contact book is empty. Please create your first contact."})]})},E=a(133),S=a.n(E),k=a(195),N=a(194),w=a(196),A=a(7),T=function(){var e=Object(A.f)(),t=Object(u.b)(),a=Object(n.useState)(""),s=Object(d.a)(a,2),r=s[0],o=s[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),b=l[0],j=l[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),O=p[0],x=p[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(k.a,{style:{width:"50rem",margin:"auto"},children:[Object(c.jsx)(k.a.Header,{style:{textAlign:"center"},children:"Add a contact"}),Object(c.jsx)(k.a.Body,{children:Object(c.jsxs)(N.a,{onSubmit:function(a){var c;a.preventDefault(),t((c={id:S.a.generate(),name:r,phone:O,email:b},{type:h,payload:c})),e.push("/")},children:[Object(c.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(N.a.Label,{children:"Name"}),Object(c.jsx)(N.a.Control,{type:"text",placeholder:"Enter your name",value:r,onChange:function(e){o(e.target.value)}})]}),Object(c.jsxs)(N.a.Group,{controlId:"formBasicCheckbox",children:[Object(c.jsx)(N.a.Label,{children:"Phone"}),Object(c.jsx)(N.a.Control,{type:"text",placeholder:"Enter phone number",value:O,onChange:function(e){x(e.target.value)}})]}),Object(c.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(N.a.Label,{children:"Email"}),Object(c.jsx)(N.a.Control,{type:"email",placeholder:"Email",value:b,onChange:function(e){j(e.target.value)}})]}),Object(c.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},L=function(){var e=Object(A.f)(),t=Object(A.g)().id,a=Object(u.b)(),s=Object(u.c)((function(e){return e.contact.contact})),r=Object(n.useState)(""),o=Object(d.a)(r,2),i=o[0],l=o[1],b=Object(n.useState)(""),j=Object(d.a)(b,2),h=j[0],O=j[1],x=Object(n.useState)(""),y=Object(d.a)(x,2),g=y[0],f=y[1];Object(n.useEffect)((function(){null!=s&&(l(s.name),O(s.email),f(s.phone)),a(function(e){return{type:m,payload:e}}(t))}),[s]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(k.a,{style:{width:"50rem",margin:"auto"},children:[Object(c.jsx)(k.a.Header,{style:{textAlign:"center"},children:"Edit a contact"}),Object(c.jsx)(k.a.Body,{children:Object(c.jsxs)(N.a,{onSubmit:function(t){t.preventDefault();var c=Object.assign(s,{name:i,phone:g,email:h});a(function(e){return{type:p,payload:e}}(c)),e.push("/")},children:[Object(c.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(N.a.Label,{children:"Name"}),Object(c.jsx)(N.a.Control,{type:"text",placeholder:"Enter your name",value:i,onChange:function(e){l(e.target.value)}})]}),Object(c.jsxs)(N.a.Group,{controlId:"formBasicCheckbox",children:[Object(c.jsx)(N.a.Label,{children:"Phone"}),Object(c.jsx)(N.a.Control,{type:"text",placeholder:"Enter phone number",value:g,onChange:function(e){f(e.target.value)}})]}),Object(c.jsxs)(N.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(N.a.Label,{children:"Email"}),Object(c.jsx)(N.a.Control,{type:"email",placeholder:"Email",value:h,onChange:function(e){O(e.target.value)}})]}),Object(c.jsx)(w.a,{variant:"warning",type:"submit",children:"Update contact"})]})})]})})},z=a(30),P=a(134),D=a(135),B=a(137),_={contacts:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],contact:null,selectedContacts:[]},G=Object(z.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{contacts:[t.payload].concat(Object(B.a)(e.contacts))});case m:var a=e.contacts.filter((function(e){return e.id==t.payload}));a=a.values();var c,n=Object(D.a)(a);try{for(n.s();!(c=n.n()).done;){var s=c.value;a=s}}catch(r){n.e(r)}finally{n.f()}return Object(b.a)(Object(b.a)({},e),{},{contact:a});case p:return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id==t.payload.id?t.payload:e}))});case O:return Object(b.a)(Object(b.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!=t.payload}))});case g:return Object(b.a)(Object(b.a)({},e),{},{contacts:[]});case x:return Object(b.a)(Object(b.a)({},e),{},{selectedContacts:t.payload});case y:return Object(b.a)(Object(b.a)({},e),{},{selectedContacts:[]});default:return e}}}),R=Object(z.createStore)(G,Object(P.composeWithDevTools)()),M=(a(190),function(){return Object(c.jsx)(u.a,{store:R,children:Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"py-3",children:Object(c.jsxs)(A.c,{children:[Object(c.jsx)(A.a,{exact:!0,path:"/",component:C}),Object(c.jsx)(A.a,{exact:!0,path:"/contacts/add",component:T}),Object(c.jsx)(A.a,{exact:!0,path:"/contacts/edit/:id",component:L})]})})})]})})})});a(191);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root"))}},[[192,1,2]]]);
//# sourceMappingURL=main.894069d7.chunk.js.map