(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{294:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(31),o=a(32),r=a(35),l=a(34),s=a(0),c=a.n(s),i=a(27),u=a(15),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(r.a)(s,t);var a=Object(l.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(i.a,{to:"/login"})}}]),s}(c.a.Component);return Object(u.b)(m)(t)}},295:function(e,t,a){e.exports={descriprionBlock:"ProfileInfo_descriprionBlock__2FQv6",photoProfile:"ProfileInfo_photoProfile__3ZAPn",contact:"ProfileInfo_contact__sH5BU"}},296:function(e,t,a){e.exports={item:"MyPosts_item__eXC-r",postsBlock:"MyPosts_postsBlock__2d0iC",textBlock:"MyPosts_textBlock__2Jork",addPost__button:"MyPosts_addPost__button__1Pt2w"}},297:function(e,t,a){e.exports={item:"Post_item__12-tN"}},298:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a(32),r=a(35),l=a(34),s=a(0),c=a.n(s),i=a(93),u=a(295),m=a.n(u),p=a(37),f=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(e.status),l=Object(i.a)(r,2),u=l[0],m=l[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("b",null,"Status: ")," ",c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"----"," yo")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(u)},value:u})))},d=a(104),b=a(21),E=a(126),h=a(45),v=a.n(h),P=Object(E.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return(c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:v.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),"  ",Object(b.c)("Full name","fullName",[],b.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Loking for a job:"),"  ",Object(b.c)("","lookingForAJob",[],b.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professionL skills"),Object(b.c)("My professionL skills","lookingForAJobDescription",[],b.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),Object(b.c)("About me","aboutMe",[],b.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),"   ",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e,className:m.a.contact},c.a.createElement("b",null,e,": ",Object(b.c)(e,"contacts."+e,[],b.a)," "))})))))})),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return(c.a.createElement("div",null,a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),"  ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Loking for a job:"),"  ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professionL skills"),"   ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),"   ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),"   ",Object.keys(t.contacts).map((function(e){return c.a.createElement(g,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))))},g=function(e){var t=e.contactTitle,a=e.contactValue;return(c.a.createElement("div",{className:m.a.contact},c.a.createElement("b",null,t),": ",a))},O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,u=Object(s.useState)(!1),b=Object(i.a)(u,2),E=b[0],h=b[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:m.a.descriprionBlock},c.a.createElement("img",{className:m.a.photoProfile,src:t.photos.large||d.b}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),E?c.a.createElement(P,{initialValues:t,profile:t,onSubmit:function(e){l(e).then((function(){h(!1)}))}}):c.a.createElement(k,{profile:t,isOwner:o,goToEditMode:function(){h(!0)}}),c.a.createElement(f,{status:a,updateStatus:n})))},j=a(92),_=a(38),y=a(296),S=a.n(y),w=a(297),A=a.n(w),N=function(e){return c.a.createElement("div",{className:A.a.item},c.a.createElement("img",{src:"https://amp.thenational.ae/image/policy:1.172937:1499300331/image/jpeg.jpg?f=16x9&w=1200&$p$f$w=dfa40e8",alt:"avatar"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"liked ",e.like," ")))},M=a(86),x=a(62),C=Object(x.a)(10),F=Object(E.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",{className:""},c.a.createElement(M.a,{name:"newPostText",component:b.b,placeholder:"Post message",validate:[x.b,C]})),c.a.createElement("div",{className:""},c.a.createElement("button",null,"Add post")))})),B=c.a.memo((function(e){var t=Object(_.a)(e.posts).reverse().map((function(e){return c.a.createElement(N,{key:e.id,message:e.message,like:e.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:S.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(F,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:"posts"},t))})),I=a(15),T=Object(I.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(j.a)(t))}}}))(B),J=function(e){return c.a.createElement("div",null,c.a.createElement(O,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(T,null))},U=a(27),D=a(294),L=a(8),z=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(J,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(L.d)(Object(I.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),U.f,D.a)(z)}}]);
//# sourceMappingURL=3.99efd9a2.chunk.js.map