(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"2flm":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("dI71"),a=n("q1tI"),l=n.n(a),i=n("Wbzz"),u=n("NKOs"),c=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.renderExample=function(e){var t=e.title,n=e.path,r=e.image;return l.a.createElement(u.a,{key:t,to:"/"+n},r?l.a.createElement("img",{width:"100%",src:Object(i.d)(r),alt:t}):null,l.a.createElement(u.c,null,l.a.createElement("span",null,t)))},n.renderCategory=function(e){var t=this;return e.entries?[l.a.createElement(u.b,{key:e.title+"-header"},e.title),l.a.createElement(u.d,{key:e.title},e.entries.map((function(e){return t.renderExample(e)})))]:this.renderExample(e)},n.render=function(){var e=this,t=this.props.pageContext.toc;return 1===t.length?l.a.createElement(u.e,null,l.a.createElement(u.d,null,t[0].entries.map((function(t){return e.renderExample(t)})))):l.a.createElement(u.e,null,t.map((function(t){return e.renderCategory(t)})))},t}(a.Component)}}]);