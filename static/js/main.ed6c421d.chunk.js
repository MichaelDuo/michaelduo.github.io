(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BLOGS",function(){return O}),n.d(a,"BLOG",function(){return k}),n.d(a,"RESUME",function(){return N});var r=n(0),c=n.n(r),u=n(45),o=n.n(u),i=(n(58),n(60),n(63),n(8)),l=n(9),s=n(11),m=n(10),d=n(12),p=(n(65),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.onSelect,a=e.selected;return c.a.createElement("div",{className:"uk-tab uk-flex-right"},t.map(function(e,t){return function(e,t){return c.a.createElement("li",{className:a===t?"uk-active":"",onClick:function(e){e.stopPropagation(),n(t)},key:"".concat(t,"-").concat(e.id)},c.a.createElement("a",{onClick:function(e){return e.preventDefault()}},e.name))}(e,t)}))}}]),t}(r.PureComponent));p.defaultProps={tabs:[],onSelect:function(){},selected:0};var b=p,f=n(7),v=function(e,t){return{type:e.SET,payload:t}},g=function(e){return{type:e.LOADING,payload:null}},E=function(e){return{type:e.LOADING_DONE,payload:null}},h=function(e){return{RESOURCE:e,SET:"".concat(e,"_SET"),CLEAR:"".concat(e,"_CLEAR"),LOADING:"".concat(e,"_LOADING"),LOADING_DONE:"".concat(e,"_LOADING_DONE"),UPDATING:"".concat(e,"_UPDATING"),UPDATING_DONE:"".concat(e,"_UPDATING_DONE")}},O=h("BLOGS"),k=h("BLOG"),N=h("RESUME"),j=[{id:"1",attributes:{author:"MichaelDuo",tags:["algorithm"],date:"10/21/2018",priority:1},title:"\u5982\u4f55\u5b9e\u73b02D\u624b\u52bf\u8bc6\u522b",url:"/blogs/1.md",preview:"\u8d8a\u6765\u8d8a\u591a\u7684\u4ea7\u54c1\u9700\u8981\u8bc6\u522b\u7528\u6237\u7684\u624b\u52bf\uff0c\u4f46\u662f\u624b\u52bf\u8bc6\u522b\u53ef\u80fd\u9700\u8981\u7528\u5230\u5f88\u591a\u590d\u6742\u7684\u5e93\uff0c\u6216\u8005\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u672c\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd \u2019$1 Recognizer\u2019, \u4e00\u79cd\u7b80\u6613\uff0c\u9ad8\u6548\uff0c\u51c6\u786e\u76842D\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u3002\n\u6211\u4eec\u5c06\u901a\u8fc7\u672c\u7bc7\u6587\u7ae0\u5b9e\u73b0\u8bc6\u522b\u4e0b\u56fe16\u79cd\u624b\u52bf\u3002\n\n    \n      \n        \n      \n    \n  \u56fe1\n\u603b\u4f53\u601d\u8def\uff1a\n\u6211\u4eec\u9700\u8981\u5c06Candidate Points\uff1aC\uff08\u7528\u6237\u8f93\u5165\uff09\uff0c\u5339\u914d\u5230\u4e8b\u5148\u8f93\u5165\u7684Template Points \uff1aT\uff08\u6a21\u677f\uff09\uff0c\u627e\u51fa\u5728\u6a21\u677f\u4e2d\u4e0e\u7528\u6237\u8f93\u5165\u6700\u63a5\u8fd1\u7684\u4e00\u4e2a\u3002\n\u7528\u6237\u8f93\u5165\u5927\u90fd\u662f\u4ece\u4ea4\u4e92\u8bbe\u5907\u4e0a\u62ff\u5230\u7684\uff0c\u6240\u4ee5\u7528\u6237\u8f93\u5165\u5f80\u5f80\u4f1a\u91c7\u7528\u4e0d\u540c\u7684\u91c7\u6837\u7387\uff08sample rate\uff09\uff0c\u7136\u540e\u518d\u52a0\u4e0a\u7528\u6237\u8f93"},{id:"2",attributes:{author:"MichaelDuo",tags:["algorithm"],date:"1/6/2019"},title:"Second blog",url:"/blogs/2.md",preview:"Test\n"},{id:"3",attributes:{author:"MichaelDuo",tags:["engineering"],date:"1/18/2019"},title:"Third Blog",url:"/blogs/3.md",preview:""}],y=function(){return function(e){e(v(O,j))}},D=n(121);function w(e){var t="/blog/".concat(e.id);return c.a.createElement("div",{className:"uk-margin-top",key:e.id},c.a.createElement("h3",{className:"uk-heading-bullet"},c.a.createElement(D.a,{to:t,className:"uk-link-text"},e.title)),c.a.createElement("div",{className:"uk-margin-left"},c.a.createElement("div",{className:"uk-margin-bottom"},c.a.createElement("div",{className:"uk-visible@m"},c.a.createElement(D.a,{to:t,className:"uk-link-reset uk-text-muted"},e.preview.slice(0,200),"...")),c.a.createElement("div",{className:"uk-hidden@m"},c.a.createElement(D.a,{to:t,className:"uk-link-reset uk-text-muted"},e.preview.slice(0,100),"..."))),c.a.createElement(D.a,{to:t},"Read more")),c.a.createElement("hr",null))}function x(e){var t=e.blogs;return c.a.createElement("div",null,t.map(w))}x.defaultProps={blogs:[]};var _=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){var e=this.props.blogs;return c.a.createElement("div",{className:"uk-animation-slide-top-small"},c.a.createElement(x,{blogs:e}))}}]),t}(r.PureComponent),S=function(e,t){return e.resources[t.RESOURCE].data},A=function(e,t){return e.resources[t.RESOURCE].loading},P={loadBlogs:y},I=Object(f.b)(function(e){return{blogs:S(e,O)||[]}},P)(_),R=n(122),G=n(14),L=n.n(G),T=n(20),C=n(21),M=n(47),B=n.n(M),U=function(){var e=Object(T.a)(L.a.mark(function e(t,n){var a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get(t,n);case 3:a=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,n){return e.apply(this,arguments)}}(),Y=n(48);function H(){return c.a.createElement("div",{"uk-spinner":"",className:"uk-position-center"})}var J=n(26),X=n.n(J),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadBlog)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.blog;if(e.loading)return c.a.createElement(H,null);var n=X()(t.attributes.date).format("MMM DD, YYYY");return c.a.createElement("div",{className:"uk-animation-slide-bottom-small"},c.a.createElement("h2",{className:"uk-heading"},t.title),c.a.createElement("div",{className:"uk-margin"},c.a.createElement("span",{className:"uk-text-meta uk-margin-small-right"},n),Object(C.get)(t,"attributes.tags",[]).map(function(e){return c.a.createElement("a",{key:"tag",className:"uk-badge"},"#",e)})),c.a.createElement("div",{className:"blog",dangerouslySetInnerHTML:{__html:t.html}}))}}]),t}(r.PureComponent);z.defaultProps={blog:{},loading:!0};var F={loadBlog:function(e){return function(e){return function(){var t=Object(T.a)(L.a.mark(function t(n,a){var r,c,u,o;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(g(k)),r=S(a(),O),c=Object(C.find)(r,function(t){return t.id===e}),t.next=5,U(c.url);case 5:u=t.sent,o=Object(Y.convert)(u),n(v(k,o)),n(E(k));case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}(e)}},V=Object(R.a)(Object(f.b)(function(e,t){return{id:t.match.params.id,blog:S(e,k),loading:A(e,k)}},F)(z));function W(e){var t=e.year,n=e.blogs;return c.a.createElement("div",{className:"uk-margin"},c.a.createElement("div",{className:"uk-text-lead"},t),c.a.createElement("ul",{className:"uk-list uk-list-bullet"},n.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(D.a,{to:"/blog/".concat(e.id),className:"uk-link-heading"},e.title))})))}function $(e){var t=S(e,O),n=Object(C.groupBy)(t,function(e){return X()(e.attributes.date).year()});return Object.keys(n).sort().reverse().map(function(e){return{year:e,blogs:n[e]}})}var q=Object(f.b)(function(e){return{archives:$(e)}})(function(e){var t=e.archives;return c.a.createElement("div",{className:"uk-animation-slide-top-small"},t.map(function(e){return c.a.createElement(W,{key:e.year,year:e.year,blogs:e.blogs})}))}),K=n(33),Q=n.n(K),Z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.loadResume()}},{key:"render",value:function(){var e=this.props,t=e.resume;return e.loading?c.a.createElement(H,null):c.a.createElement("div",{className:"uk-animation-slide-top-small"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}}]),t}(r.PureComponent);Z.defaultProps={resume:{},loading:!0};var ee={loadResume:function(){return function(){var e=Object(T.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(N)),e.next=3,U("/resume/resume.md");case 3:n=e.sent,t(v(N,{html:Q()(n)})),t(E(N));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},te=Object(f.b)(function(e){return{resume:S(e,N),loading:A(e,N)}},ee)(Z),ne=n(126),ae=n(123),re=n(124);function ce(){return c.a.createElement(ne.a,null,c.a.createElement(ae.a,{exact:!0,path:"/",component:I}),c.a.createElement(ae.a,{path:"/blogs",component:I}),c.a.createElement(ae.a,{path:"/blog/:id",component:V}),c.a.createElement(ae.a,{path:"/archives",component:q}),c.a.createElement(ae.a,{path:"/aboutme",component:te}),c.a.createElement(ae.a,{component:function(){return c.a.createElement(re.a,{to:"/404"})}}))}var ue=n(50),oe=n.n(ue),ie=[{id:"blogs",name:"Blogs",url:"/blogs"},{id:"archives",name:"Archives",url:"/archives"},{id:"aboutme",name:"About me",url:"/aboutme"}];var le=Object(R.a)(function(e){var t=e.history,n=t.location.pathname,a=ie.findIndex(function(e){return e.url===n});return a=a<0?0:a,c.a.createElement("div",null,c.a.createElement("div",{className:"uk-container uk-margin-top uk-margin-bottom"},c.a.createElement("div",{className:"uk-margin-small-bottom uk-flex uk-flex-between"},c.a.createElement(D.a,{to:"/",className:"uk-text-large uk-link-muted"},"Yuxi Dong"),c.a.createElement("a",{href:"https://www.github.com/MichaelDuo",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},c.a.createElement("img",{"uk-svg":"",alt:"github",src:oe.a}))),c.a.createElement(b,{tabs:ie,selected:a,onSelect:function(e){t.push(ie[e].url)}}),c.a.createElement("div",{className:"uk-margin-top"},c.a.createElement(ce,null))))});function se(){return c.a.createElement("div",null,"Page Not Found")}function me(){return c.a.createElement(ne.a,null,c.a.createElement(ae.a,{exact:!0,path:"/404",component:se}),c.a.createElement(ae.a,{path:"/",component:le}))}var de=n(125),pe={loadBlogs:y},be=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){return c.a.createElement(de.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(me,null)))}}]),t}(r.PureComponent),fe=Object(f.b)(null,pe)(be),ve=n(13),ge=n(17);var Ee={updating:[],loading:void 0,data:void 0};var he=Object(ve.c)(function(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0,a=e.SET,r=e.LOADING,c=e.UPDATING,u=e.CLEAR,o=e.LOADING_DONE,i=e.UPDATING_DONE;switch(n.type){case a:return Object(ge.a)({},t,{data:n.payload});case r:return Object(ge.a)({},t,{loading:!0});case o:return Object(ge.a)({},t,{loading:!1});case c:return Object(ge.a)({},t,{updating:n.payload.keys});case i:return Object(ge.a)({},t,{updating:[]});case u:return Object(ge.a)({},Ee);default:return t}}}(a);return t[a.RESOURCE]=r,t},{})}(a)),Oe=Object(ve.c)({resources:he}),ke=n(51),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,je=Object(ve.e)(Oe,Ne(Object(ve.a)(ke.a)));o.a.render(c.a.createElement(f.a,{store:je},c.a.createElement(fe,null)),document.getElementById("root"))},48:function(e,t,n){var a=n(92),r=n(33),c=new r.Renderer;c.image=function(e,t,n){return"\n    <span>\n      <div uk-lightbox>\n        <a href=".concat(e,"><img src=").concat(e,"></img></a>\n      </div>\n    </span>\n  ")},t.convert=function(e){var t=a(e),n=t.attributes,u=t.body,o=r.lexer(u);if(0===o.length)return{title:"",html:"",attributes:n};var i="";return"heading"===o[0].type&&(i=o.shift().text),{title:i,html:r.parser(o,{renderer:c}),attributes:n}}},50:function(e,t,n){e.exports=n.p+"static/media/github.617870e4.svg"},53:function(e,t,n){e.exports=n(120)},63:function(e,t,n){},65:function(e,t,n){}},[[53,2,1]]]);
//# sourceMappingURL=main.ed6c421d.chunk.js.map