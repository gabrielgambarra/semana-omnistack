(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t){},123:function(e,t,a){},124:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(56),o=a.n(r),s=a(9),i=a(6),l=a(10),u=a.n(l),p=a(17),m=a(68),h=a(18),d=a(19),f=a(21),g=a(20),E=a(22),v=a(57),b=a.n(v).a.create({baseURL:"https://back-semana7.herokuapp.com"}),k=a(58),y=a.n(k),w=(a(123),a(59)),x=a.n(w),C=a(60),j=a.n(C),O=a(61),S=a.n(O),L=a(62),D=a.n(L),I=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={feed:[]},a.registerToSocket=function(){var e=y()("https://back-semana7.herokuapp.com");e.on("post",function(e){a.setState({feed:[e].concat(Object(m.a)(a.state.feed))})}),e.on("like",function(e){a.setState({feed:a.state.feed.map(function(t){return t._id===e._id?e:t})})})},a.handleLike=function(e){b.post("posts/".concat(e,"/like"))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.registerToSocket(),e.next=3,b.get("posts");case 3:t=e.sent,this.setState({feed:t.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("section",{id:"post-list"},this.state.feed.map(function(t){return c.a.createElement("article",{key:t._id},c.a.createElement("header",null,c.a.createElement("div",{className:"user-info"},c.a.createElement("span",null,t.author),c.a.createElement("span",{className:"place"},t.place)),c.a.createElement("img",{src:x.a,alt:"More"})),c.a.createElement("img",{src:"https://back-semana7.herokuapp.com/files/".concat(t.image),alt:""}),c.a.createElement("footer",null,c.a.createElement("div",{className:"actions"},c.a.createElement("button",{type:"button",onClick:function(){return e.handleLike(t._id)}},c.a.createElement("img",{src:j.a,alt:"Like"})),c.a.createElement("img",{src:S.a,alt:"Comment"}),c.a.createElement("img",{src:D.a,alt:"Send"})),c.a.createElement("strong",null,t.likes," curtidas"),c.a.createElement("p",null,t.description,c.a.createElement("span",null,t.hashtags))))}))}}]),t}(n.Component),N=a(63),_=(a(124),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={image:null,author:"",place:"",description:"",hashtags:""},a.handleSubmit=function(){var e=Object(p.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",a.state.image),n.append("author",a.state.author),n.append("place",a.state.place),n.append("description",a.state.description),n.append("hashtags",a.state.hashtags),e.next=9,b.post("posts",n);case 9:a.props.history.push("/");case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleImageChange=function(e){a.setState({image:e.target.files[0]})},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{id:"new-post",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"file",onChange:this.handleImageChange}),c.a.createElement("input",{type:"text",name:"author",placeholder:"Autor do post",onChange:this.handleChange,value:this.author}),c.a.createElement("input",{type:"text",name:"place",placeholder:"Local do post",onChange:this.handleChange,value:this.place}),c.a.createElement("input",{type:"text",name:"description",placeholder:"Descri\xe7\xe3o do post",onChange:this.handleChange,value:this.description}),c.a.createElement("input",{type:"text",name:"hashtags",placeholder:"Hashtags do post",onChange:this.handleChange,value:this.hashtags}),c.a.createElement("button",{type:"submit"},"Enviar"))}}]),t}(n.Component));var A=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:I}),c.a.createElement(i.a,{path:"/new",component:_}))},J=(a(129),a(66)),M=a.n(J),R=a(67),T=a.n(R);function B(){return c.a.createElement("header",{id:"main-header"},c.a.createElement("div",{className:"header-content"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:M.a,alt:"InstaRocket"})),c.a.createElement(s.b,{to:"/new"},c.a.createElement("img",{src:T.a,alt:"Enviar publica\xe7\xe3o"}))))}var F=function(){return c.a.createElement(s.a,null,c.a.createElement(B,null),c.a.createElement(A,null))};a(130);o.a.render(c.a.createElement(F,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a.p+"static/media/more.22d960a9.svg"},60:function(e,t,a){e.exports=a.p+"static/media/like.00e13584.svg"},61:function(e,t,a){e.exports=a.p+"static/media/comment.e2a49935.svg"},62:function(e,t,a){e.exports=a.p+"static/media/send.55e74cfd.svg"},66:function(e,t,a){e.exports=a.p+"static/media/logo.83fd0bcc.svg"},67:function(e,t,a){e.exports=a.p+"static/media/camera.787c6af9.svg"},69:function(e,t,a){e.exports=a(131)}},[[69,1,2]]]);
//# sourceMappingURL=main.467d93cf.chunk.js.map