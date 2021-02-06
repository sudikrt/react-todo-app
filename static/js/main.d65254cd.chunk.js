(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(21),o=n.n(s),i=(n(30),n(14)),l=n(24),u=n(6),d=n.n(u),j=n(11),b=n(10),h=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};h.defaultProps={color:"steelblue"};var p=h,x=n(2),f=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,a=Object(x.e)();return Object(c.jsx)("div",{children:Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),"/"===a.pathname?Object(c.jsx)(p,{color:r?"red":"green",text:r?"Close":"Add",onClick:n}):""]})})};f.defaultProps={title:"Task Tracker"};var O=f,m=n(8),v=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:"Copyright \xa9 2021"}),Object(c.jsx)(m.b,{to:"/about",children:"About"})]})},g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Version 1.0.0"}),Object(c.jsx)(m.b,{to:"/",children:"Go Back"})]})},k=n(23),y=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text," ",Object(c.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},w=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(y,{task:e,onDelete:n,onToggle:r},e.id)}))})},N=function(e){var t=e.onAdd,n=Object(r.useState)(),a=Object(b.a)(n,2),s=a[0],o=a[1],i=Object(r.useState)(),l=Object(b.a)(i,2),u=l[0],d=l[1],j=Object(r.useState)(),h=Object(b.a)(j,2),p=h[0],x=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?u?(t({text:s,day:u,reminder:p}),o(""),d(""),x(!1)):alert("Please add date & time"):alert("Please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Task",value:s||"",onChange:function(e){o(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & Time"}),Object(c.jsx)("input",{type:"text",placeholder:"Add Day & time",value:u||"",onChange:function(e){d(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:p||!1,value:p,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",className:"btn btn-block",value:"Save Task"})]})},C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{class:"heading-wrapper",children:[Object(c.jsx)("h1",{children:"Contact Us"}),Object(c.jsx)("img",{class:"text-sep",src:"https://d33wubrfki0l68.cloudfront.net/a2344e48fa9ccf9d4a8e2a85bd3e5a8780fbc774/5063b/images/text-sep.png",alt:"site component"})]}),Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("div",{class:"contact-us-img-wrapper",children:Object(c.jsx)("img",{src:"https://d33wubrfki0l68.cloudfront.net/0ea8e7a9eec9e9128e9076d5b05ef4c3e30d50b0/70205/images/man.png",alt:"contact person"})}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{class:"form-wrapper",children:Object(c.jsxs)("form",{id:"contactform",name:"contact",action:"",method:"post",autocomplete:"on",children:[Object(c.jsxs)("div",{class:"form-control",children:[Object(c.jsxs)("label",{for:"name",children:[Object(c.jsx)("span",{children:"*"})," Name : "]}),Object(c.jsx)("input",{name:"fullName",class:"",id:"name",placeholder:"Name",required:""})]}),Object(c.jsxs)("div",{class:"form-control",children:[Object(c.jsxs)("label",{for:"email",children:[Object(c.jsx)("span",{children:"*"})," Email Id :"]}),Object(c.jsx)("input",{name:"email",type:"email",class:"",id:"email",placeholder:"abc@xyz.com",required:""})]}),Object(c.jsxs)("div",{class:"form-control",children:[Object(c.jsxs)("label",{for:"mobile",children:[Object(c.jsx)("span",{children:"*"})," Mobile Number :"]}),Object(c.jsx)("input",{name:"mobileNumber",type:"tel",class:"",id:"mobile",placeholder:"Mobile Number",required:""})]}),Object(c.jsxs)("div",{class:"form-control",children:[Object(c.jsxs)("label",{for:"message",children:[Object(c.jsx)("span",{children:"*"})," Message :"]}),Object(c.jsx)("textarea",{name:"message",value:"",class:"",id:"message",placeholder:"Enter your message.....",required:""})]}),Object(c.jsx)("button",{type:"submit",class:"btn submit-button btn-outline-warning c-submit",children:"Submit"})]})})})]})]})},T=function(){var e="https://my-json-server.typicode.com/sudikrt/db-demo-repo/tasks",t=Object(r.useState)(!1),n=Object(b.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)([]),u=Object(b.a)(o,2),h=u[0],p=u[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var t=Object(j.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json;odata.metadata=full"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(j.a)(d.a.mark((function t(n){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"/").concat(n));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(j.a)(d.a.mark((function t(n){var c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,p([].concat(Object(l.a)(h),[r]));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),T=function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"/").concat(n),{method:"DELETE"});case 2:p(h.filter((function(e){return e.id!==n})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(j.a)(d.a.mark((function t(n){var c,r,a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n);case 2:return c=t.sent,r=Object(i.a)(Object(i.a)({},c),{},{reminder:!c.reminder}),t.next=6,fetch("".concat(e,"/").concat(n),{method:"PUT",headers:{"Content-type":"application/JSON"},body:JSON.stringify(r)});case 6:return a=t.sent,t.next=9,a.json();case 9:s=t.sent,p(h.map((function(e){return e.id===n?Object(i.a)(Object(i.a)({},e),{},{reminder:s.reminder}):e})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)(m.a,{basename:"/",children:Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{path:"/",exact:!0,render:function(e){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{onAdd:function(){return s(!a)},showAdd:a}),a&&Object(c.jsx)(N,{onAdd:y}),h.length>0?Object(c.jsx)(w,{tasks:h,onToggle:S,onDelete:T}):"No Tasks to Show",Object(c.jsx)(v,{})]})}}),Object(c.jsx)(x.a,{path:"/about",render:function(e){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{onAdd:function(){return s(!a)},showAdd:a}),Object(c.jsx)(x.a,{path:"/about",component:g}),Object(c.jsx)(v,{})]})}}),Object(c.jsx)(x.a,{path:"/contact-us",component:C})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.d65254cd.chunk.js.map