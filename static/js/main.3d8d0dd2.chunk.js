(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(81)},51:function(e,t,n){},53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BLOGS",function(){return g}),n.d(a,"BLOG",function(){return j});var r=n(0),c=n.n(r),o=n(33),u=n.n(o),l=(n(46),n(48),n(51),n(7)),i=n(8),s=n(11),m=n(9),d=n(12),p=(n(53),n(82)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tabs,n=e.onSelect,a=e.history,r=a.location.pathname,o=t.findIndex(function(e){return r===e.url}),u=function(e,r){return c.a.createElement("li",{onClick:function(){return function(e){a.push(t[e].url),n(e)}(r)},key:"".concat(r,"-").concat(e.id)},c.a.createElement("a",{href:""},e.name))};return c.a.createElement("div",{"uk-tab":"active: ".concat(o),className:"uk-flex-right"},t.map(function(e,t){return u(e,t)}))}}]),t}(r.PureComponent);b.defaultProps={tabs:[],onSelect:function(){}};var f=Object(p.a)(b),E=n(10),O=function(e,t){return{type:e.SET,payload:t}},v=function(e){return{type:e.LOADING_DONE,payload:null}},h=function(e){return{RESOURCE:e,SET:"".concat(e,"_SET"),CLEAR:"".concat(e,"_CLEAR"),LOADING:"".concat(e,"_LOADING"),LOADING_DONE:"".concat(e,"_LOADING_DONE"),UPDATING:"".concat(e,"_UPDATING"),UPDATING_DONE:"".concat(e,"_UPDATING_DONE")}},g=h("BLOGS"),j=h("BLOG"),k=[{id:"2019-01-08",title:"2019-01-08.md",url:"/blogs/2019-01-08.md",preview:"First Blog\nHelloWorld"},{id:"2019-01-09",title:"2019-01-09.md",url:"/blogs/2019-01-09.md",preview:"First Blog"},{id:"2019-01-10",title:"2019-01-10.md",url:"/blogs/2019-01-10.md",preview:"First Blog"}],N=function(){return function(e){e(O(g,k))}},y=n(83);function D(e){var t="/blog/".concat(e.id);return c.a.createElement("div",{className:"uk-margin-top",key:e.id},c.a.createElement("h3",{className:"uk-heading-bullet"},c.a.createElement(y.a,{to:t,className:"uk-link-text"},e.title)),c.a.createElement("div",{className:"uk-margin-left"},c.a.createElement("div",{className:"uk-margin-bottom"},c.a.createElement(y.a,{to:t,className:"uk-link-reset uk-text-muted"},e.preview)),c.a.createElement(y.a,{to:t},"Read more")),c.a.createElement("hr",null))}function A(e){var t=e.blogs;return c.a.createElement("div",null,t.map(D))}A.defaultProps={blogs:[]};var _=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){var e=this.props.blogs;return c.a.createElement("div",null,c.a.createElement(A,{blogs:e}))}}]),t}(r.PureComponent),w=function(e,t){return e.resources[t.RESOURCE].data},G=function(e,t){return e.resources[t.RESOURCE].loading},I={loadBlogs:N},L=Object(E.b)(function(e){return{blogs:w(e,g)||[]}},I)(_),S=n(15),B=n.n(S),P=n(21),C=n(36),T=n(37),x=n.n(T),R=function(){var e=Object(P.a)(B.a.mark(function e(t,n){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(t,n);case 3:a=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:return e.abrupt("return",a.data);case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,n){return e.apply(this,arguments)}}(),U=n(38);function M(){return c.a.createElement("div",{"uk-spinner":"",className:"uk-position-center"})}var F=new(n.n(U).a.Converter),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.loadBlog)(e.id)}},{key:"render",value:function(){var e=this.props,t=e.blog;if(e.loading)return c.a.createElement(M,null);var n=t.content,a=F.makeHtml(n);return c.a.createElement("div",null,c.a.createElement("div",{className:"blog-post",dangerouslySetInnerHTML:{__html:a}}))}}]),t}(r.PureComponent);H.defaultProps={blog:{}};var J={loadBlog:function(e){return function(e){return function(){var t=Object(P.a)(B.a.mark(function t(n,a){var r,c,o;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:j.LOADING,payload:null}),r=w(a(),g),c=Object(C.find)(r,function(t){return t.id===e}),t.next=5,R(c.url);case 5:o=t.sent,n(O(j,{title:"Title",content:o})),n(v(j));case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}(e)}},W=Object(p.a)(Object(E.b)(function(e,t){return{id:t.match.params.id,blog:w(e,j),loading:G(e,j)}},J)(H));function X(){return c.a.createElement("div",null,"Archives")}function V(){return c.a.createElement("div",null,"About me")}var q=n(87),z=n(84),K=n(86);function Q(){return c.a.createElement(q.a,null,c.a.createElement(z.a,{exact:!0,path:"/",component:L}),c.a.createElement(z.a,{path:"/blogs",component:L}),c.a.createElement(z.a,{path:"/blog/:id",component:W}),c.a.createElement(z.a,{path:"/archives",component:X}),c.a.createElement(z.a,{path:"/aboutme",component:V}),c.a.createElement(z.a,{component:function(){return c.a.createElement(K.a,{to:"/404"})}}))}var Y=[{id:"blogs",name:"Blogs",url:"/blogs"},{id:"archives",name:"Archives",url:"/archives"},{id:"aboutme",name:"About me",url:"/aboutme"}];function Z(){return c.a.createElement("div",null,c.a.createElement("div",{className:"uk-container uk-margin-top uk-margin-bottom"},c.a.createElement(y.a,{to:"/",className:"uk-text-large uk-margin-bottom uk-link-muted"},"MichaelDuo"),c.a.createElement(f,{tabs:Y}),c.a.createElement("div",{className:"uk-margin-top"},c.a.createElement(Q,null))))}function $(){return c.a.createElement("div",null,"Page Not Found")}function ee(){return c.a.createElement(q.a,null,c.a.createElement(z.a,{exact:!0,path:"/404",component:$}),c.a.createElement(z.a,{path:"/",component:Z}))}var te=n(85),ne={loadBlogs:N},ae=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.loadBlogs()}},{key:"render",value:function(){return c.a.createElement(te.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(ee,null)))}}]),t}(r.PureComponent),re=Object(E.b)(null,ne)(ae),ce=n(6),oe=n(14);var ue={loading:!1,updating:[],data:void 0};var le=Object(ce.c)(function(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,n=arguments.length>1?arguments[1]:void 0,a=e.SET,r=e.LOADING,c=e.UPDATING,o=e.CLEAR,u=e.LOADING_DONE,l=e.UPDATING_DONE;switch(n.type){case a:return Object(oe.a)({},t,{data:n.payload});case r:return Object(oe.a)({},t,{loading:!0});case u:return Object(oe.a)({},t,{loading:!1});case c:return Object(oe.a)({},t,{updating:n.payload.keys});case l:return Object(oe.a)({},t,{updating:[]});case o:return Object(oe.a)({},ue);default:return t}}}(a);return t[a.RESOURCE]=r,t},{})}(a)),ie=Object(ce.c)({resources:le}),se=n(39),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,de=Object(ce.e)(ie,me(Object(ce.a)(se.a)));u.a.render(c.a.createElement(E.a,{store:de},c.a.createElement(re,null)),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.3d8d0dd2.chunk.js.map