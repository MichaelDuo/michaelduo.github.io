(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BLOGS",function(){return g}),n.d(a,"BLOG",function(){return k}),n.d(a,"RESUME",function(){return j});var r=n(0),c=n.n(r),u=n(42),o=n.n(u),l=(n(57),n(59),n(62),n(7)),i=n(8),s=n(11),m=n(9),d=n(12),p=(n(64),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.onSelect,a=e.selected;return c.a.createElement("div",{className:"uk-tab uk-flex-right"},t.map(function(e,t){return function(e,t){return c.a.createElement("li",{className:a===t?"uk-active":"",onClick:function(e){e.stopPropagation(),n(t)},key:"".concat(t,"-").concat(e.id)},c.a.createElement("a",{onClick:function(e){return e.preventDefault()}},e.name))}(e,t)}))}}]),t}(r.PureComponent));p.defaultProps={tabs:[],onSelect:function(){},selected:0};var f=p,b=n(10),E=function(e,t){return{type:e.SET,payload:t}},v=function(e){return{type:e.LOADING,payload:null}},O=function(e){return{type:e.LOADING_DONE,payload:null}},h=function(e){return{RESOURCE:e,SET:"".concat(e,"_SET"),CLEAR:"".concat(e,"_CLEAR"),LOADING:"".concat(e,"_LOADING"),LOADING_DONE:"".concat(e,"_LOADING_DONE"),UPDATING:"".concat(e,"_UPDATING"),UPDATING_DONE:"".concat(e,"_UPDATING_DONE")}},g=h("BLOGS"),k=h("BLOG"),j=h("RESUME"),N=[{id:"2019-01-08",title:"2019-01-08.md",url:"/blogs/2019-01-08.md",preview:"\u5982\u4f55\u5b9e\u73b02D\u624b\u52bf\u8bc6\u522b\n\u8d8a\u6765\u8d8a\u591a\u7684\u4ea7\u54c1\u9700\u8981\u8bc6\u522b\u7528\u6237\u7684\u624b\u52bf\uff0c\u4f46\u662f\u624b\u52bf\u8bc6\u522b\u53ef\u80fd\u9700\u8981\u7528\u5230\u5f88\u591a\u590d\u6742\u7684\u5e93\uff0c\u6216\u8005\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u672c\u7bc7\u6587\u7ae0\u5c06\u4ecb\u7ecd \u2019$1 Recognizer\u2019, \u4e00\u79cd\u7b80\u6613\uff0c\u9ad8\u6548\uff0c\u51c6\u786e\u76842D\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u3002\n\u6211\u4eec\u5c06\u901a\u8fc7\u672c\u7bc7\u6587\u7ae0\u5b9e\u73b0\u8bc6\u522b\u4e0b\u56fe16\u79cd\u624b\u52bf\u3002\n\n\u56fe1\n\u603b\u4f53\u601d\u8def\uff1a\n\u6211\u4eec\u9700\u8981\u5c06Candidate Points\uff1aC\uff08\u7528\u6237\u8f93\u5165\uff09\uff0c\u5339\u914d\u5230\u4e8b\u5148\u8f93\u5165\u7684Template Points \uff1aT\uff08\u6a21\u677f\uff09\uff0c\u627e\u51fa\u5728\u6a21\u677f\u4e2d\u4e0e\u7528\u6237\u8f93\u5165\u6700\u63a5\u8fd1\u7684\u4e00\u4e2a\u3002\n\u7528\u6237\u8f93\u5165\u5927\u90fd\u662f\u4ece\u4ea4\u4e92\u8bbe\u5907\u4e0a\u62ff\u5230\u7684\uff0c\u6240\u4ee5\u7528\u6237\u8f93\u5165\u5f80\u5f80\u4f1a\u91c7\u7528\u4e0d\u540c\u7684\u91c7\u6837\u7387\uff08sample rate\uff09\uff0c\u7136\u540e\u518d\u52a0\u4e0a\u7528\u6237\u8f93\u5165\u4e60\u60ef\u7684\u4e0d\u540c\uff0c\u4f1a\u9020\u6210C\u548cT\u5f88\u96be\u70b9\u5bf9\u70b9\u76f4\u63a5\u6bd4\u8f83\uff0c\u5982"},{id:"2019-01-09",title:"2019-01-09.md",url:"/blogs/2019-01-09.md",preview:"Second blog"},{id:"2019-01-10",title:"2019-01-10.md",url:"/blogs/2019-01-10.md",preview:"Third Blog"}],y=function(){return function(e){e(E(g,N))}},D=n(119);function w(e){var t="/blog/".concat(e.id);return c.a.createElement("div",{className:"uk-margin-top",key:e.id},c.a.createElement("h3",{className:"uk-heading-bullet"},c.a.createElement(D.a,{to:t,className:"uk-link-text"},e.title)),c.a.createElement("div",{className:"uk-margin-left"},c.a.createElement("div",{className:"uk-margin-bottom"},c.a.createElement(D.a,{to:t,className:"uk-link-reset uk-text-muted"},e.preview)),c.a.createElement(D.a,{to:t},"Read more")),c.a.createElement("hr",null))}function _(e){var t=e.blogs;return c.a.createElement("div",null,t.map(w))}_.defaultProps={blogs:[]};var A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){var e=this.props.blogs;return c.a.createElement("div",null,c.a.createElement(_,{blogs:e}))}}]),t}(r.PureComponent),S=function(e,t){return e.resources[t.RESOURCE].data},P=function(e,t){return e.resources[t.RESOURCE].loading},C={loadBlogs:y},I=Object(b.b)(function(e){return{blogs:S(e,g)||[]}},C)(A),x=n(120),G=n(14),L=n.n(G),R=n(20),T=n(44),B=n(45),U=n.n(B),M=function(){var e=Object(R.a)(L.a.mark(function e(t,n){var a;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(t,n);case 3:a=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,n){return e.apply(this,arguments)}}(),H=n(46),J=n.n(H),X=n(47),z=n.n(X),F=new J.a.Converter,V=function(e){var t=z()(e),n=t.attributes,a=t.body;return{html:F.makeHtml(a),markdown:e,attributes:n}};function W(){return c.a.createElement("div",{"uk-spinner":"",className:"uk-position-center"})}var $=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadBlog)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.blog;return e.loading?c.a.createElement(W,null):c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})}}]),t}(r.PureComponent);$.defaultProps={blog:{}};var q={loadBlog:function(e){return function(e){return function(){var t=Object(R.a)(L.a.mark(function t(n,a){var r,c,u,o;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(k)),r=S(a(),g),c=Object(T.find)(r,function(t){return t.id===e}),t.next=5,M(c.url);case 5:u=t.sent,o=V(u),n(E(k,o)),n(O(k));case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}(e)}},K=Object(x.a)(Object(b.b)(function(e,t){return{id:t.match.params.id,blog:S(e,k),loading:P(e,k)}},q)($));function Q(){return c.a.createElement("div",null,"Archives")}var Y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadResume()}},{key:"render",value:function(){var e=this.props,t=e.resume;return e.loading?c.a.createElement(W,null):c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})}}]),t}(r.PureComponent);Y.defaultProps={resume:{}};var Z={loadResume:function(){return function(){var e=Object(R.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(j)),e.next=3,M("/resume/resume.md");case 3:n=e.sent,t(E(j,V(n))),t(O(j));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},ee=Object(b.b)(function(e){return{resume:S(e,j),loading:P(e,j)}},Z)(Y),te=n(124),ne=n(121),ae=n(123);function re(){return c.a.createElement(te.a,null,c.a.createElement(ne.a,{exact:!0,path:"/",component:I}),c.a.createElement(ne.a,{path:"/blogs",component:I}),c.a.createElement(ne.a,{path:"/blog/:id",component:K}),c.a.createElement(ne.a,{path:"/archives",component:Q}),c.a.createElement(ne.a,{path:"/aboutme",component:ee}),c.a.createElement(ne.a,{component:function(){return c.a.createElement(ae.a,{to:"/404"})}}))}var ce=n(49),ue=n.n(ce),oe=[{id:"blogs",name:"Blogs",url:"/blogs"},{id:"archives",name:"Archives",url:"/archives"},{id:"aboutme",name:"About me",url:"/aboutme"}];var le=Object(x.a)(function(e){var t=e.history,n=t.location.pathname,a=oe.findIndex(function(e){return e.url===n});return a=a<0?0:a,c.a.createElement("div",null,c.a.createElement("div",{className:"uk-container uk-margin-top uk-margin-bottom"},c.a.createElement("div",{className:"uk-margin-small-bottom uk-flex uk-flex-between"},c.a.createElement(D.a,{to:"/",className:"uk-text-large uk-link-muted"},"MichaelDuo"),c.a.createElement("a",{href:"https://www.github.com/MichaelDuo",target:"_blank",rel:"noopener noreferrer",className:"uk-link-muted"},c.a.createElement("img",{"uk-svg":"",alt:"github",src:ue.a}))),c.a.createElement(f,{tabs:oe,selected:a,onSelect:function(e){t.push(oe[e].url)}}),c.a.createElement("div",{className:"uk-margin-top"},c.a.createElement(re,null))))});function ie(){return c.a.createElement("div",null,"Page Not Found")}function se(){return c.a.createElement(te.a,null,c.a.createElement(ne.a,{exact:!0,path:"/404",component:ie}),c.a.createElement(ne.a,{path:"/",component:le}))}var me=n(122),de={loadBlogs:y},pe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){return c.a.createElement(me.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(se,null)))}}]),t}(r.PureComponent),fe=Object(b.b)(null,de)(pe),be=n(13),Ee=n(16);var ve={loading:!1,updating:[],data:void 0};var Oe=Object(be.c)(function(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,n=arguments.length>1?arguments[1]:void 0,a=e.SET,r=e.LOADING,c=e.UPDATING,u=e.CLEAR,o=e.LOADING_DONE,l=e.UPDATING_DONE;switch(n.type){case a:return Object(Ee.a)({},t,{data:n.payload});case r:return Object(Ee.a)({},t,{loading:!0});case o:return Object(Ee.a)({},t,{loading:!1});case c:return Object(Ee.a)({},t,{updating:n.payload.keys});case l:return Object(Ee.a)({},t,{updating:[]});case u:return Object(Ee.a)({},ve);default:return t}}}(a);return t[a.RESOURCE]=r,t},{})}(a)),he=Object(be.c)({resources:Oe}),ge=n(50),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,je=Object(be.e)(he,ke(Object(be.a)(ge.a)));o.a.render(c.a.createElement(b.a,{store:je},c.a.createElement(fe,null)),document.getElementById("root"))},49:function(e,t,n){e.exports=n.p+"static/media/github.617870e4.svg"},52:function(e,t,n){e.exports=n(118)},62:function(e,t,n){},64:function(e,t,n){}},[[52,2,1]]]);
//# sourceMappingURL=main.a628e8b2.chunk.js.map