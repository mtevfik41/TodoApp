(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),l=c(2),i=c(8),d=c(17),r=c(0),u=function(t){var e=t.inputText,c=t.setInputText,s=t.todos,n=t.setTodos,a=t.setStatus,u=Object(o.useState)(!1),j=Object(l.a)(u,2),b=j[0],f=j[1];return Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",className:"todo-input",value:e,onChange:function(t){c(t.target.value)},disabled:b}),Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),""===e?(c("Input cannot be empty!"),f(!0),setTimeout((function(){f(!1),c("")}),2e3)):(n([].concat(Object(i.a)(s),[{text:e,completed:!1,id:Object(d.a)()}])),c(""))},className:"todo-button",type:"submit",disabled:b,children:Object(r.jsx)("i",{className:"fas fa-plus-square"})}),Object(r.jsx)("div",{className:"select",children:Object(r.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"completed",children:"Completed"}),Object(r.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},j=c(6),b=function(t){var e=t.text,c=t.todo,o=t.todos,s=t.setTodos;return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:e}),Object(r.jsx)("button",{onClick:function(){s(o.map((function(t){return t.id===c.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(r.jsx)("i",{className:"fas fa-check"})}),Object(r.jsx)("button",{onClick:function(t){t.target.parentElement.classList.add("fall"),setTimeout((function(){s(o.filter((function(t){return t.id!==c.id})))}),200)},className:"trash-btn",children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})},f=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(r.jsx)("div",{className:"todo-container",children:Object(r.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(r.jsx)(b,{todos:e,setTodos:c,todo:t,text:t.text},t.id)}))})})},O=(c(14),function(){var t=Object(o.useState)(""),e=Object(l.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)([]),a=Object(l.a)(n,2),i=a[0],d=a[1],j=Object(o.useState)("all"),b=Object(l.a)(j,2),O=b[0],m=b[1],p=Object(o.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(o.useEffect)((function(){T()}),[]),Object(o.useEffect)((function(){N(),S()}),[i,O]);var N=function(){switch(O){case"completed":v(i.filter((function(t){return t.completed})));break;case"uncompleted":v(i.filter((function(t){return!t.completed})));break;case"all":default:v(i)}},S=function(){localStorage.setItem("todos",JSON.stringify(i))},T=function(){null===localStorage.getItem("todos")?localStorage.setItem("todos",JSON.stringify([])):d(JSON.parse(localStorage.getItem("todos")))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Todo List"})}),Object(r.jsx)(u,{todos:i,setTodos:d,inputText:c,setInputText:s,setStatus:m}),Object(r.jsx)(f,{filteredTodos:h,todos:i,setTodos:d})]})});a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2a8c976.chunk.js.map