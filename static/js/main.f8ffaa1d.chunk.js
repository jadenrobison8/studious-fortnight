(this["webpackJsonpstudious-fortnight"]=this["webpackJsonpstudious-fortnight"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){var c={"./entertainment-720.jpg":14,"./plant-daddy.jpg":15,"./run-buddy.jpg":16};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id=13},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/entertainment-720.13171e6c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/plant-daddy.94982bc8.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/run-buddy.b57f2b88.jpg"},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=(n(11),n(2)),l=n(0);var o=function(e){return Object(l.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(l.jsx)("h1",{children:"Jaden Robison"}),e.children]})};function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var u=function(e){var t=e.pages,n=void 0===t?[]:t,r=e.setCurrentPage,a=e.currentPage;return Object(c.useEffect)((function(){document.title=j(a.name)}),[a]),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(l.jsx)("li",{className:"mx-5 ".concat(a.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return r(e)},children:j(e.name)})},e.name)}))})})},b=function(e){return Object(l.jsx)("div",{children:e.children})},h=n.p+"static/media/profile.f2f7cb6c.jpg";var m=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("div",{className:"profile-img my-5",children:Object(l.jsx)("img",{src:h,alt:" ",style:{fontSize:"96px"}})}),Object(l.jsx)("p",{children:"I am a MERN Full Stack Developer, graduated from the Univerty of Utah Coding Bootcamp. I have an Associates degree in Pre-Engineering"}),Object(l.jsx)("p",{children:"I have learned many languages any technologies through engineering, including: Java, C++, Python, R, VHDL, and many others."})]})})};var O=function(e){var t=e.project,c=t.name,r=t.repo,a=t.link,i=t.description;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("img",{src:n(13)("./".concat(c,".jpg")).default,alt:d(c),className:"project-bg"}),Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("a",{href:a,children:d(c)})," ",Object(l.jsx)("a",{href:r,children:Object(l.jsx)("i",{className:"fab fa-github"})})]}),Object(l.jsx)("p",{children:i})]})]},c)};var x=function(){var e=Object(c.useState)([{name:"run-buddy",description:"HTML/CSS",link:"https://jadenrobison8.github.io/run-buddy/",repo:"https://github.com/jadenrobison8/run-buddy"},{name:"entertainment-720",description:"HTML/CSS/JS",link:"https://lylekilson.github.io/entertainment-720/",repo:"https://github.com/LyleKilson/entertainment-720"},{name:"plant-daddy",description:"MVC, MySQL JS full stack application",link:"https://uofu-plant-daddy.herokuapp.com/",repo:"https://github.com/alyssawinn/plant-daddy"}]),t=Object(s.a)(e,1)[0];return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(l.jsx)(O,{project:e},"project"+t)}))})})},p=n(3),f=n(5);var g=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1],d=n.name,u=n.email,b=n.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(r(Object(f.a)(Object(f.a)({},n),{},Object(p.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsx)("section",{children:Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:u,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",default:b,onBlur:h})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})};var v=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsxs)("p",{children:["Download my ",Object(l.jsx)("a",{href:"https://www.linkedin/com/",children:"resume"})]}),Object(l.jsx)("h3",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"Javascript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"Responsive Design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h3",{children:"Back-end proficiencies"}),Object(l.jsxs)("ul",{className:"skills",children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"GraphQL"})]})]})})};var y=function(e){var t=e.currentPage;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:j(t.name)}),Object(l.jsx)(b,{children:function(){switch(t.name){case"about me":return Object(l.jsx)(m,{});case"portfolio":return Object(l.jsx)(x,{});case"contact":return Object(l.jsx)(g,{});case"resume":return Object(l.jsx)(v,{});default:return Object(l.jsx)(m,{})}}()})]})};var k=function(){return Object(l.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/jadenrobison8"},{name:"fab fa-linkedin",link:"http://linkedin.com/in/jaden-robison-a460b3184"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})};var w=function(){var e=Object(c.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(s.a)(e,1)[0],n=Object(c.useState)(t[0]),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{children:Object(l.jsx)(u,{pages:t,setCurrentPage:i,currentPage:a})}),Object(l.jsx)("main",{children:Object(l.jsx)(y,{currentPage:a})}),Object(l.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.f8ffaa1d.chunk.js.map