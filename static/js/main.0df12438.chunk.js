(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),c=n.n(r),i=(n(19),n(21),n(25),n(27),n(34));function o(e){var t=e.tabs,n=e.onSelect,a=e.history,r=a.location.pathname,c=t.findIndex(function(e){return r===e.url}),i=function(e,r){return l.a.createElement("li",{key:"".concat(r,"-").concat(e.id)},l.a.createElement("a",{href:"",onClick:function(){return function(e){a.push(t[e].url),n(e)}(r)}},e.name))};return l.a.createElement("div",{"uk-tab":"active: ".concat(c),className:"uk-flex-right"},t.map(function(e,t){return i(e,t)}))}o.defaultProps={tabs:[],onSelect:function(){}};var u=Object(i.a)(o),m=n(35);function s(e){var t="/blog/".concat(e.id);return l.a.createElement("div",{className:"uk-margin-top",key:e.id},l.a.createElement("h2",{className:"uk-heading-bullet"},l.a.createElement(m.a,{to:t,className:"uk-link-text"},e.title)),l.a.createElement("div",{className:"uk-margin-left"},l.a.createElement("div",{className:"uk-margin-bottom"},l.a.createElement(m.a,{to:t,className:"uk-link-reset uk-text-muted"},e.title," This will be description, This will be description, This will be description, This will be description, This will be description, This will be description, This will be description, This will be description.")),l.a.createElement(m.a,{to:t},"Read more")),l.a.createElement("hr",null))}function d(e){var t=e.blogs;return l.a.createElement("div",null,t.map(s))}d.defaultProps={blogs:[]};var p=[{id:"2019-01-08",title:"2019-01-08.md",url:"/blogs/2019-01-08.md"},{id:"2019-01-09",title:"2019-01-09.md",url:"/blogs/2019-01-09.md"},{id:"2019-01-10",title:"2019-01-10.md",url:"/blogs/2019-01-10.md"}];function E(){return l.a.createElement("div",null,l.a.createElement(d,{blogs:p}))}function b(){return l.a.createElement("div",null,"Archives")}function h(){return l.a.createElement("div",null,"About me")}var f=n(39),v=n(36),g=n(38);function k(){return l.a.createElement(f.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:E}),l.a.createElement(v.a,{path:"/blogs",component:E}),l.a.createElement(v.a,{path:"/archives",component:b}),l.a.createElement(v.a,{path:"/aboutme",component:h}),l.a.createElement(v.a,{component:function(){return l.a.createElement(g.a,{to:"/404"})}}))}var w=[{id:"blogs",name:"Blogs",url:"/blogs"},{id:"archives",name:"Archives",url:"/archives"},{id:"aboutme",name:"About me",url:"/aboutme"}];function N(){return l.a.createElement("div",null,l.a.createElement("div",{className:"uk-container uk-margin-top uk-margin-bottom"},l.a.createElement("h1",null,"MichaelDuo"),l.a.createElement(u,{tabs:w}),l.a.createElement(k,null)))}function T(){return l.a.createElement("div",null,"Page Not Found")}function x(){return l.a.createElement(f.a,null,l.a.createElement(v.a,{exact:!0,path:"/404",component:T}),l.a.createElement(v.a,{path:"/",component:N}))}var A=n(37);c.a.render(l.a.createElement(function(){return l.a.createElement(A.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(x,null)))},null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.0df12438.chunk.js.map