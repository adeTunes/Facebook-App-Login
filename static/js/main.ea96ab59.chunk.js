(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),r=n.n(s),o=(n(14),n(15),n(3)),l=(n(16),n(1)),i=n(2);var u=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),u=r[0],j=r[1],d=Object(l.f)();function b(){localStorage.removeItem("loggedin"),d("/",{replace:!0})}function m(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("users")),a=t.some((function(e){return e.username===n})),s=t.some((function(e){return e.password===u}));a&&s?(alert("Login Successful"),c(""),j(""),d("/dashboard",{replace:!0}),localStorage.setItem("loggedin","loggedin")):!a&&s?alert("Please check the username again"):a&&!s?alert("Please check the password again!"):alert("Invalid Login details")}return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"row nav",children:[Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("h1",{children:"Facebook"})}),Object(i.jsx)("div",{className:"col-md-5",children:localStorage.getItem("loggedin")?Object(i.jsx)("button",{type:"submit",onClick:b,children:"LOGOUT"}):Object(i.jsxs)("form",{onSubmit:m,children:[Object(i.jsx)("input",{className:"input user",type:"text",required:!0,placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("input",{className:"input pass",type:"password",required:!0,placeholder:"Password",value:u,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("input",{className:"butn",type:"submit",value:"LOGIN"})]})})]})})};n(7),n(18);var j=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),b=d[0],m=d[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"row justify-content-center",children:[Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("img",{src:"https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png",alt:"facebook"})}),Object(i.jsxs)("div",{className:"col-md-4 form-section",children:[Object(i.jsx)("h1",{children:"Register"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("users")||"[]"),a={fullname:n,username:l,password:b};t.push(a),localStorage.setItem("users",JSON.stringify(t)),c(""),u(""),m("")},children:[Object(i.jsx)("input",{type:"text",className:"form-control name",required:!0,value:n,placeholder:"Full Name",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("input",{type:"text",className:"form-control username",required:!0,value:l,placeholder:"Username",onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("input",{type:"password",className:"form-control pass",required:!0,value:b,placeholder:"Password",onChange:function(e){return m(e.target.value)}}),Object(i.jsx)("input",{type:"submit",value:"SIGN UP",className:"btn btn-primary"})]})]})]})})};var d=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Welcome to Facebook Dashboard"})})},b=n(9);var m=function(){return Object(i.jsx)(b.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(l.a,{path:"/dashboard",element:Object(i.jsx)(d,{})})]})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.ea96ab59.chunk.js.map