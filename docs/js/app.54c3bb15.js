(function(t){function e(e){for(var a,o,s=e[0],u=e[1],i=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);b&&b(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},r=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-26ee88cf":"6bb89750","chunk-c04bbaec":"3eabb331"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=c[t]=[e,a]}));e.push(n[2]=a);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var i=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}c[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuelance/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var b=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"441a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"container with-nav"};function r(t,e,n,r,o,s){var u=Object(a["x"])("TheHeader"),i=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(u),Object(a["h"])("div",c,[Object(a["h"])(i)])],64)}var o=Object(a["G"])("data-v-7c15aca4");Object(a["t"])("data-v-7c15aca4");var s={class:"navbar"},u=Object(a["g"])("FL.com"),i={class:"navbar-menu"},l=Object(a["g"])("All the tasks"),b=Object(a["g"])("Create");Object(a["r"])();var d=o((function(t,e,n,c,r,d){var f=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["e"])("nav",s,[Object(a["h"])("h3",null,[Object(a["h"])(f,{to:"/"},{default:o((function(){return[u]})),_:1})]),Object(a["h"])("ul",i,[Object(a["h"])("li",null,[Object(a["h"])(f,{to:"/"},{default:o((function(){return[l]})),_:1})]),Object(a["h"])("li",null,[Object(a["h"])(f,{to:"/new"},{default:o((function(){return[b]})),_:1})])])])})),f={},p=n("d959"),O=n.n(p);const v=O()(f,[["render",d],["__scopeId","data-v-7c15aca4"]]);var j=v,h={components:{TheHeader:j}};const k=O()(h,[["render",r]]);var m=k,g=(n("d3b7"),n("6c02")),y=(n("0d03"),{key:0,class:"text-white center"}),w={class:"text-white"},T={class:"card-title"};function x(t,e,n,c,r,o){var s=Object(a["x"])("TaskStatus");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["h"])(a["b"],{name:"fade"},{default:Object(a["D"])((function(){return[0===c.tasks.length?(Object(a["q"])(),Object(a["e"])("h1",y,"No tasks here...")):Object(a["f"])("",!0)]})),_:1}),c.tasks.length?(Object(a["q"])(),Object(a["e"])(a["a"],{key:0},[Object(a["h"])("h1",w,"Number of active tasks: "+Object(a["z"])(c.activeTasksCount),1),(Object(a["q"])(!0),Object(a["e"])(a["a"],null,Object(a["w"])(c.tasks,(function(t){return Object(a["q"])(),Object(a["e"])("div",{class:"card",key:t.id},[Object(a["h"])("h2",T,[Object(a["g"])(Object(a["z"])(t.title)+" ",1),Object(a["h"])(s,{type:t.status},null,8,["type"])]),Object(a["h"])("p",null,[Object(a["h"])("strong",null,[Object(a["h"])("small",null,Object(a["z"])(new Date(t.date).toLocaleDateString()),1)])]),Object(a["h"])("button",{class:"btn primary",onClick:function(e){return c.open(t.id)}},"Open",8,["onClick"])])})),128)),Object(a["h"])("button",{class:"btn",onClick:e[1]||(e[1]=function(){return c.clearTasks.apply(c,arguments)})},"Clear the list")],64)):Object(a["f"])("",!0)],64)}n("a434");var S=n("5502"),C=n("a009"),_={name:"Home",setup:function(){var t=Object(S["b"])(),e=Object(g["c"])();function n(){t.getters.tasks.splice(0),localStorage.removeItem("my-tasks")}var c=Object(a["c"])((function(){return t.getters.tasks})),r=Object(a["c"])((function(){return t.getters.activeTasksCount}));return{tasks:c,activeTasksCount:r,clearTasks:n,open:function(t){return e.push("/task/".concat(t))}}},components:{TaskStatus:C["a"]}};n("8a43");const P=O()(_,[["render",x]]);var q=P,I=[{path:"/",name:"Tasks",component:q},{path:"/new",name:"New",component:function(){return n.e("chunk-c04bbaec").then(n.bind(null,"67bf"))}},{path:"/task/:id",name:"Task",props:!0,component:function(){return n.e("chunk-26ee88cf").then(n.bind(null,"1d21"))}}],N=Object(g["a"])({history:Object(g["b"])("/vuelance/"),routes:I,linkActiveClass:"active",linkExactActiveClass:"active"}),A=N,D=(n("4de4"),n("7db0"),n("c740"),Object(S["a"])({state:function(){var t;return{tasks:null!==(t=JSON.parse(localStorage.getItem("my-tasks")))&&void 0!==t?t:[]}},mutations:{createTask:function(t,e){t.tasks.push(e),localStorage.setItem("my-tasks",JSON.stringify(t.tasks))},changeTask:function(t,e){var n=t.tasks.findIndex((function(t){return t.id===e.id}));t.tasks[n]=e,localStorage.setItem("my-tasks",JSON.stringify(t.tasks))}},actions:{createTask:function(t,e){var n=t.commit;e.date<new Date&&(e.status="cancelled"),n("createTask",e)},changeTask:function(t,e){var n=t.commit;n("changeTask",e)}},getters:{activeTasksCount:function(t){return t.tasks.filter((function(t){return"active"===t.status})).length},tasks:function(t){return t.tasks},taskById:function(t,e){return function(t){return e.tasks.find((function(e){return e.id===t}))}}}}));n("441a");Object(a["d"])(m).use(D).use(A).mount("#app")},"8a43":function(t,e,n){"use strict";n("d4d3")},a009:function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["G"])("data-v-9a9b36e2"),r=c((function(t,e,n,c,r,o){return Object(a["q"])(),Object(a["e"])("span",{class:["badge",c.className]},Object(a["z"])(c.text),3)})),o=(n("caad"),{props:{type:{type:String,validator:function(t){return["active","done","pending","cancelled"].includes(t)}}},setup:function(t){var e={active:"primary",cancelled:"danger",done:"primary",pending:"warning"},n={active:"Active",cancelled:"Cancelled",done:"Done",pending:"Pending"},c=Object(a["v"])(e[t.type]),r=Object(a["v"])(n[t.type]);return Object(a["C"])(t,(function(t){c.value=e[t.type],r.value=n[t.type]})),{className:c,text:r}}}),s=n("d959"),u=n.n(s);const i=u()(o,[["render",r],["__scopeId","data-v-9a9b36e2"]]);e["a"]=i},d4d3:function(t,e,n){}});
//# sourceMappingURL=app.54c3bb15.js.map