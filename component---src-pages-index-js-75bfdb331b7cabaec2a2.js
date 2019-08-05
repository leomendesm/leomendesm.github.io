(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(206),i=n(118),c=n.n(i),l=(n(79),n(35),n(242)),m=n(179),s=n(176),d=n(347),u=n(180),p=n(181),h=n(218),f=n.n(h),g=n(253),b=n(175),w=n(7),v=n.n(w),y=Object(b.default)(s.Link).withConfig({displayName:"SocialLink__IconLink",componentId:"sc-13bp2vw-0"})(["transition:color 0.5s;color:",";&:hover{color:",";}"],function(e){return e.alt?e.theme.colors.background:e.theme.colors.primary},function(e){return e.theme.colors.primaryLight}),x=function(e){var t=e.fontAwesomeIcon,n=e.name,a=e.url,o=e.alt;return r.a.createElement(g.Tooltip,{title:n,position:"bottom",trigger:"mouseenter"},r.a.createElement(y,{href:a,target:"_blank",alt:o},r.a.createElement(f.a,{name:t})))};x.propTypes={fontAwesomeIcon:v.a.string.isRequired,name:v.a.string.isRequired,url:v.a.string.isRequired,alt:v.a.bool};var E=x,k=b.default.svg.withConfig({displayName:"MouseIcon__MouseContainer",componentId:"xyrakf-0"})(["max-width:2.5rem;width:100%;height:auto;"]),C=b.default.span.withConfig({displayName:"MouseIcon__ScrollLink",componentId:"xyrakf-1"})(["position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);cursor:pointer;@media only screen and (max-width:700px){display:none;}"]),I=Object(b.keyframes)(["0%,20%{transform:translateY(0) scaleY(1);}10%{opacity:1;}100%{transform:translateY(36px) scaleY(2);opacity:0.01;}"]),j=b.default.rect.attrs(function(e){return{stroke:e.theme.colors.primary,strokeWidth:"3"}}).withConfig({displayName:"MouseIcon__Mouse",componentId:"xyrakf-2"})([""]),_=b.default.circle.withConfig({displayName:"MouseIcon__Scroll",componentId:"xyrakf-3"})(["animation-name:",";animation-duration:1.5s;animation-timing-function:cubic-bezier(0.65,-0.55,0.25,1.5);animation-iteration-count:infinite;transform-origin:50% 20.5px;will-change:transform;fill:",";"],I,function(e){return e.theme.colors.primary}),q=function(e){var t=e.onClick;return r.a.createElement(C,{onClick:t},r.a.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 76 130"},r.a.createElement("g",{fill:"none"},r.a.createElement(j,{width:"70",height:"118",x:"1.5",y:"1.5",rx:"36"}),r.a.createElement(_,{cx:"36.5",cy:"31.5",r:"4.5"}))))};q.propTypes={onClick:v.a.func};var F=q,T=n(182),A=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{color:"backgroundDark",height:["35vh","80vh"],width:["95vw","60vw"]}),r.a.createElement(T.a,{color:"secondary",height:["38vh","80vh"],width:["50vw","35vw"]}),r.a.createElement(T.a,{color:"primaryDark",height:["25vh","35vh"],width:["75vw","60vw"],invertX:!0}),r.a.createElement(T.a,{color:"backgroundDark",height:["20vh","20vh"],width:["100vw","100vw"],invertX:!0,invertY:!0}))},S={marginRight:"auto",marginLeft:"auto"},L=function(){return r.a.createElement(p.a.Container,{id:"home",Background:A},r.a.createElement(m.a,{query:"1608748843",render:function(e){var t=e.contentfulAbout,n=t.name,o=t.socialLinks,i=t.roles;return r.a.createElement(a.Fragment,null,r.a.createElement(s.Heading,{textAlign:"center",as:"h1",color:"primary",fontSize:[5,6,8],mb:[3,4,5]},"Hello, I'm "+n+"!"),r.a.createElement(s.Heading,{as:"h2",color:"primary",fontSize:[4,5,6],mb:[3,5],textAlign:"center",style:S},r.a.createElement(d.a,{interval:5e3},i.sort(function(){return Math.random()-.5}).map(function(e){return r.a.createElement(s.Text,{width:[300,500],key:e},e)}))),r.a.createElement(s.Flex,{alignItems:"center",justifyContent:"center",flexWrap:"wrap"},o.map(function(e){var t=e.id,n=c()(e,["id"]);return r.a.createElement(s.Box,{mx:3,fontSize:[5,6,6],key:t},r.a.createElement(E,n))})),r.a.createElement(u.c,{section:"about"},function(e){var t=e.onClick;return r.a.createElement(F,{onClick:t})}))},data:l}))},M=n(255),N=n(256),R=n.n(N),P=n(187),z=n.n(P),D=(n(86),b.default.a.withConfig({displayName:"MarkdownRenderer__StyledLink",componentId:"sc-18jt37u-0"})(["display:inline-block;transition:color 250ms,text-shadow 250ms;color:black;text-decoration:none;cursor:pointer;position:relative;&:after{position:absolute;z-index:-1;bottom:-1px;left:50%;transform:translateX(-50%);content:'';width:100%;height:3px;background-color:",";transition:all 250ms;}&:hover{color:white;&::after{height:110%;width:110%;}}"],function(e){return e.theme.colors.primaryLight})),B=b.default.p.withConfig({displayName:"MarkdownRenderer__MarkdownParagraph",componentId:"sc-18jt37u-1"})(["line-height:2em;&:first-child{margin-top:0em;}"]),G=b.default.ul.withConfig({displayName:"MarkdownRenderer__MarkdownList",componentId:"sc-18jt37u-2"})(["margin:0;"]),O=b.default.li.withConfig({displayName:"MarkdownRenderer__MarkdownListItem",componentId:"sc-18jt37u-3"})(["margin:1em 0;line-height:2em;"]),U=function(e){var t=e.href,n=e.children;return t.startsWith("#")?r.a.createElement(u.c,{section:t.substring(1,t.length)},function(e){var t=e.onClick;return r.a.createElement(D,{onClick:t},n)}):r.a.createElement(D,{href:t,target:"_blank"},n)};U.propTypes={href:v.a.string.isRequired,children:v.a.node};var H={paragraph:function(e){return r.a.createElement(B,e)},list:function(e){return r.a.createElement(G,e)},listItem:function(e){return r.a.createElement(O,e)},link:U},Q=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{color:"secondaryLight",height:["50vh","20vh"],width:["50vw","50vw"],invertY:!0}),r.a.createElement(T.a,{color:"primaryDark",height:["20vh","40vh"],width:["75vw","70vw"],invertX:!0}),r.a.createElement(T.a,{color:"backgroundDark",height:["25vh","20vh"],width:["100vw","100vw"]}))},W=Object(b.default)(s.Image).withConfig({displayName:"About__ProfilePicture",componentId:"sc-1epo0wx-0"})(["border-radius:50%;transition:all 0.25s ease-out;&:hover{border-radius:20%;}"]),J=function(){return r.a.createElement(p.a.Container,{id:"about",Background:Q},r.a.createElement(p.a.Header,{name:"About me",icon:"🙋‍♂️",label:"person"}),r.a.createElement(m.a,{query:"1331387878",render:function(e){var t=e.contentfulAbout,n=t.aboutMe,a=t.profile;return r.a.createElement(s.Flex,{justifyContent:"center",alignItems:"center",flexWrap:"wrap"},r.a.createElement(s.Box,{width:[1,1,4/6],px:[1,2,4]},r.a.createElement(z.a,{bottom:!0},r.a.createElement(R.a,{source:n.childMarkdownRemark.rawMarkdownBody,renderers:H}))),r.a.createElement(s.Box,{width:[1,1,2/6],style:{maxWidth:"300px",margin:"auto"}},r.a.createElement(z.a,{right:!0},r.a.createElement(W,{src:a.image.src,alt:a.title,mt:[4,4,0],ml:[0,0,1]}))))},data:M}))},X=n(341),Y=b.default.div.withConfig({displayName:"Card__CardContainer",componentId:"sc-1ta9k8w-0"})(["display:grid;grid-gap:30px;grid-template-columns:repeat( auto-fill,minmax(",",1fr) );justify-items:center;@media only screen and (max-width:400px){grid-template-columns:repeat(auto-fill,minmax(280px,1fr));}"],function(e){return e.minWidth}),V=Object(b.default)(s.Card).attrs({bg:"white",boxShadow:0,borderRadius:8}).withConfig({displayName:"Card",componentId:"sc-1ta9k8w-1"})(["position:relative;box-shadow:0 2px 2px rgba(0,0,0,0.2);transition:all 0.25s;top:0;height:100%;cursor:",";&:hover{top:-10px;box-shadow:0 12px 16px rgba(0,0,0,0.2);}"],function(e){return e.onClick?"pointer":"default"}),Z={"top-left":"polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);","top-right":"polygon(0 0%, 100% 0%, 100% 100%, 20px 100%);","bottom-right":"polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);","bottom-left":"polygon(0 0%, calc(100% - 20px) 0%, 100% 100%, 0% 100%);"},K={"top-left":"8px 0 0 0","top-right":"0 8px 0 0","bottom-right":"0 0 8px 0","bottom-left":"0 0 0 8px"},$=Object(b.default)(s.Box).withConfig({displayName:"ImageSubtitle",componentId:"sc-1e7i66g-0"})(["position:absolute;display:inline;padding:10px;font-size:14px;font-weight:600;text-transform:uppercase;",":0;",":0;"," clip-path:",";",""],function(e){return e.x},function(e){return e.y},function(e){return"left"===e.x?"padding-right: 20px;":"padding-left: 20px;"},function(e){return Z[e.y+"-"+e.x]},function(e){return e.round&&"border-radius: "+K[e.y+"-"+e.x]+";"});$.propTypes={x:v.a.oneOf(["left","right"]),y:v.a.oneOf(["top","bottom"]),round:v.a.bool},$.defaultProps={x:"left",y:"top",round:!1};var ee=$,te={xs:"@media screen and (max-width: 40em)",sm:"@media screen and (min-width: 40em) and (max-width: 52em)",md:"@media screen and (min-width: 52em) and (max-width: 64em)",lg:"@media screen and (min-width: 64em)"},ne=function(e){return function(t){var n;return t[e]&&((n={})[te[e]]={display:"none"},n)}},ae=ne("xs"),re=ne("sm"),oe=ne("md"),ie=ne("lg"),ce=b.default.div.withConfig({displayName:"Hide",componentId:"sc-148ocpz-0"})([],ae,re,oe,ie,function(e){var t;return e.query&&((t={})[e.query]={display:"none"},t)}),le=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{color:"secondaryLight",height:["80vh","80vh"],width:["100vw","100vw"],invertX:!0}),r.a.createElement(T.a,{color:"background",height:["50vh","20vh"],width:["50vw","50vw"],invertX:!0}),r.a.createElement(T.a,{color:"primaryDark",height:["25vh","40vh"],width:["75vw","60vw"],invertX:!0,invertY:!0}),r.a.createElement(T.a,{color:"backgroundDark",height:["25vh","20vh"],width:["100vw","100vw"],invertY:!0}))},me="@media (max-width: 400px)",se=Object(b.default)(s.Text).withConfig({displayName:"Projects__Title",componentId:"mcap94-0"})(["font-size:14px;font-weight:600;text-transform:uppercase;display:table;border-bottom:"," 5px solid;"],function(e){return e.theme.colors.primary}),de=b.default.div.withConfig({displayName:"Projects__TextContainer",componentId:"mcap94-1"})(["display:flex;flex-direction:column;padding:10px;width:100%;width:calc(100% - ",");","{width:calc(100% - ("," / 2));}"],"200px",me,"200px"),ue=b.default.div.withConfig({displayName:"Projects__ImageContainer",componentId:"mcap94-2"})(["margin:auto;width:",";","{width:calc("," / 2);}"],"200px",me,"200px"),pe=Object(b.default)(s.Image).withConfig({displayName:"Projects__ProjectImage",componentId:"mcap94-3"})(["width:",";height:",";padding:40px;margin-top:0px;","{height:calc("," / 2);width:calc("," / 2);margin-top:calc("," / 4);padding:10px;}"],"200px","200px",me,"200px","200px","200px"),he=b.default.div.withConfig({displayName:"Projects__ProjectTag",componentId:"mcap94-4"})(["position:relative;height:",";top:calc( -"," - 3.5px );","{top:calc(-"," - 3.5px + ("," / 4));}"],"200px","200px",me,"200px","200px"),fe=function(e){var t=e.name,n=e.description,a=e.projectUrl,o=e.repositoryUrl,i=e.type,c=e.publishedDate,l=e.logo;return r.a.createElement(V,{p:0},r.a.createElement(s.Flex,{style:{height:"200px"}},r.a.createElement(de,null,r.a.createElement("span",null,r.a.createElement(se,{my:2,pb:1},t)),r.a.createElement(s.Text,{width:[1],style:{overflow:"auto"}},n)),r.a.createElement(ue,null,r.a.createElement(pe,{src:l.image.src,alt:l.title}),r.a.createElement(he,null,r.a.createElement(s.Flex,{style:{float:"right"}},r.a.createElement(s.Box,{mx:1,fontSize:5},r.a.createElement(E,{name:"Check repository",fontAwesomeIcon:"github",url:o})),r.a.createElement(s.Box,{mx:1,fontSize:5},r.a.createElement(E,{name:"See project",fontAwesomeIcon:"globe",url:a}))),r.a.createElement(ee,{bg:"primaryLight",color:"white",y:"bottom",x:"right",round:!0},i),r.a.createElement(ce,{query:me},r.a.createElement(ee,{bg:"backgroundDark"},c))))))};fe.propTypes={name:v.a.string.isRequired,description:v.a.string.isRequired,projectUrl:v.a.string.isRequired,repositoryUrl:v.a.string.isRequired,type:v.a.string.isRequired,publishedDate:v.a.string.isRequired,logo:v.a.shape({image:v.a.shape({src:v.a.string}),title:v.a.string}).isRequired};var ge=function(){return r.a.createElement(p.a.Container,{id:"projects",Background:le},r.a.createElement(p.a.Header,{name:"Projects",icon:"💻",Box:"notebook"}),r.a.createElement(m.a,{query:"3598858759",render:function(e){var t=e.contentfulAbout;return r.a.createElement(Y,{minWidth:"350px"},t.projects.map(function(e,t){return r.a.createElement(z.a,{bottom:!0,delay:200*t,key:e.id},r.a.createElement(fe,e))}))},data:X}))},be=(n(17),n(342)),we=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{color:"backgroundDark",height:["15vh","10vh"],width:["100vw","100vw"],invertX:!0}),r.a.createElement(T.a,{color:"secondary",height:["50vh","40vh"],width:["70vw","40vw"],invertY:!0}),r.a.createElement(T.a,{color:"primaryDark",height:["40vh","15vh"],width:["100vw","100vw"],invertX:!0,invertY:!0}))},ve=b.default.img.withConfig({displayName:"Writing__CoverImage",componentId:"sc-1bgpzyr-0"})(["width:100%;object-fit:cover;"]),ye=Object(b.default)(s.Heading).withConfig({displayName:"Writing__EllipsisHeading",componentId:"sc-1bgpzyr-1"})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;border-bottom:"," 5px solid;"],function(e){return e.theme.colors.primary}),xe=function(e){var t=e.title,n=e.text,a=e.image,o=e.url,i=e.date,c=e.time;return r.a.createElement(V,{onClick:function(){return window.open(o,"_blank")},pb:4},r.a.createElement(ye,{m:3,p:1},t),a&&r.a.createElement(ve,{src:a,height:"200px",alt:t}),r.a.createElement(s.Text,{m:3},n),r.a.createElement(ee,{bg:"primaryLight",color:"white",x:"right",y:"bottom",round:!0},i+" - "+Math.ceil(c)+" min"))};xe.propTypes={title:v.a.string.isRequired,text:v.a.string.isRequired,image:v.a.string.isRequired,url:v.a.string.isRequired,date:v.a.string.isRequired,time:v.a.number.isRequired};var Ee=function(e){var t=e.username,n=e.name,a=e.number;return r.a.createElement(V,{onClick:function(){return window.open("https://medium.com/"+t+"/","_blank")},p:4},r.a.createElement(s.Flex,{flexDirection:"column",justifyContent:"space-between",style:{height:"100%"}},r.a.createElement(s.Box,null,r.a.createElement(ye,{fontSize:5,my:2},"Hooray!  ",r.a.createElement("span",{role:"img","aria-label":"party"},"🎉")),r.a.createElement(s.Heading,{lineHeight:1.5},"It seems that",r.a.createElement(s.Text,{color:"secondary"},n),"has published "+a+" more posts!")),r.a.createElement(s.Heading,{color:"primary",mt:5,textAlign:"right"},"Go to Medium  ",r.a.createElement(f.a,{name:"arrow-right"}))))};Ee.propTypes={username:v.a.string.isRequired,name:v.a.string.isRequired,number:v.a.number};var ke=function(){return r.a.createElement(m.a,{query:"2935304898",render:function(e){var t,n=e.allMediumPost,a=e.site,o=e.author,i=(t=n,t.edges.map(function(e){return e.node})).map(function(e){return function(t){var n=t.id,a=t.uniqueSlug,r=t.createdAt,o=t.title,i=t.virtuals,c=i.previewImage.imageId&&"https://cdn-images-1.medium.com/max/400/"+i.previewImage.imageId;return{id:n,title:o,time:i.readingTime,date:r,text:i.subtitle,image:c,url:"https://medium.com/"+e.username+"/"+a,Component:xe}}}(o)),l=n.totalCount-i.length;return l>0&&i.push(Object.assign({},o,{number:l,Component:Ee})),a.siteMetadata.isMediumUserDefined&&r.a.createElement(p.a.Container,{id:"writing",Background:we},r.a.createElement(p.a.Header,{name:"Writing",icon:"✍️",label:"writing"}),r.a.createElement(Y,{minWidth:"300px"},i.map(function(e){var t=e.Component,n=c()(e,["Component"]);return r.a.createElement(z.a,{bottom:!0,key:n.id},r.a.createElement(t,n))})))},data:be})},Ce=(n(28),n(22),n(12),n(208),n(343)),Ie=n.n(Ce),je=n(189),_e=function(e){var t=e.onClick,n=e.selected,a=e.children;return r.a.createElement(s.Box,{ml:[2,3],color:"background",fontSize:[2,3]},r.a.createElement(je.a,{onClick:t,selected:n},a))};_e.propTypes={onClick:v.a.func,selected:v.a.bool,children:v.a.node};var qe=_e,Fe=n(345),Te=n.n(Fe),Ae=Object(b.default)(Ie.a).withConfig({displayName:"Header__HeaderContainer",componentId:"sc-4ejxt5-0"})([".headroom--pinned{background:",";}position:absolute;width:100%;"],function(e){return e.theme.colors.primaryDark}),Se=function(){return r.a.createElement(Ae,null,r.a.createElement(z.a,{top:!0},r.a.createElement(s.Flex,{flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",p:3},r.a.createElement(u.d,null,function(e){var t=function(e){return Object.entries(e).reduce(function(e,t){var n,a=t[0],r=t[1];return"home"===a?Object.assign({},e,{home:r}):Object.assign({},e,{links:[].concat(e.links,[{name:(n=a,n&&n[0].toUpperCase()+n.slice(1)),value:r}])})},{links:[],home:null})}(e.allLinks),n=t.home,o=t.links,i=n&&r.a.createElement(s.Image,{src:Te.a,width:"50px",alt:"Portfolio Logo",onClick:n.onClick,style:{cursor:"pointer"}}),c=o.map(function(e){var t=e.name,n=e.value;return r.a.createElement(qe,{key:t,onClick:n.onClick,selected:n.selected},t)});return r.a.createElement(a.Fragment,null,i,r.a.createElement(s.Flex,{mr:[0,3,5]},c))}))))},Le=n(346),Me=b.default.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-125l0ns-0"})(["min-width:320px;max-width:1366px;display:flex;flex:0 1 auto;flex-direction:row;justify-content:space-between;align-items:center;margin:auto;"]),Ne=Object(b.default)(s.Text).withConfig({displayName:"Footer__TextFooter",componentId:"sc-125l0ns-1"})(["color:",";& a{color:",";}"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.background}),Re=function(){return r.a.createElement(m.a,{query:"1394511336",render:function(e){var t=e.contentfulAbout,n=t.name,a=t.socialLinks;return r.a.createElement(s.Box,{p:3,backgroundColor:"primaryDark"},r.a.createElement(Me,null,r.a.createElement(z.a,{left:!0},r.a.createElement(Ne,null,r.a.createElement("span",null,n+" Portfolio - Powered by "),r.a.createElement(s.Link,{href:"https://www.gatsbyjs.org/"},"Gatsby"),r.a.createElement("span",null," and "),r.a.createElement(s.Link,{href:"https://www.contentful.com/",mr:1},"Contentful"),r.a.createElement("span",{role:"img","aria-label":"heart"},"❤️"))),r.a.createElement(s.Flex,null,r.a.createElement(z.a,{right:!0},a.map(function(e){e.id;var t=c()(e,["id"]);return r.a.createElement(s.Box,{mx:2,fontSize:4},r.a.createElement(E,Object.assign({},t,{alt:!0})))})))))},data:Le})};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(Se,null),r.a.createElement(L,null),r.a.createElement(J,null),r.a.createElement(ge,null),r.a.createElement(ke,null),r.a.createElement(Re,null))}},179:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(57),n(185),r.a.createContext({}));function l(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:n,render:a||o,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},181:function(e,t,n){"use strict";n(35);var a=n(0),r=n.n(a),o=n(175),i=n(180),c=n(176),l=n(7),m=n.n(l),s=n(214),d=n.n(s),u=n(189),p=o.default.div.withConfig({displayName:"Section__SectionContainer",componentId:"sc-18uueee-0"})(["min-height:100vh;min-width:320px;max-width:1366px;display:flex;margin:auto;flex:0 1 auto;flex-direction:column;justify-content:center;padding:5em 1em;scroll-behavior:smooth;"]),h=function(){return r.a.createElement("div",null)},f=function(e){var t=e.id,n=e.children,a=e.Background,o=void 0===a?h:a;return r.a.createElement(i.b,{id:t,style:{position:"relative"}},r.a.createElement(o,null),r.a.createElement(p,null,n))};f.propTypes={id:m.a.string.isRequired,children:m.a.node.isRequired,Background:m.a.func};var g=function(e){var t=e.name,n=e.icon,a=void 0===n?"":n,o=e.label,i=void 0===o?"":o;return r.a.createElement(d.a,{left:!0},r.a.createElement(c.Heading,{color:"secondaryDark",mb:4},r.a.createElement(u.a,{selected:!0},t,a&&r.a.createElement("span",{role:"img","aria-label":i,style:{marginLeft:"10px"}},a))))};g.propTypes={name:m.a.string.isRequired,icon:m.a.string,label:m.a.string},t.a={Container:f,Header:g}},182:function(e,t,n){"use strict";var a=n(175).default.div.withConfig({displayName:"Triangle",componentId:"le4p17-0"})(["position:absolute;width:0;height:0;z-index:-2;"," "," @media only screen and (min-width:768px){"," ",";}"],function(e){var t=e.theme.colors[e.color]||e.color,n=e.height[0]+" solid "+t+";";return e.invertY?"border-bottom: "+n+"; bottom: 0;":"border-top: "+n+";"},function(e){var t=e.width[0]+" solid transparent;";return e.invertX?"border-left: "+t+"; right: 0;":"border-right: "+t+";"},function(e){var t=e.height[1];return e.invertY?"border-bottom-width: "+t+";":"border-top-width: "+t+";"},function(e){var t=e.width[1];return e.invertX?"border-left-width: "+t+";":"border-right-width: "+t+";"});t.a=a},185:function(e,t,n){var a;e.exports=(a=n(196))&&a.default||a},189:function(e,t,n){"use strict";var a=n(175).default.span.withConfig({displayName:"LinkAnimated",componentId:"qj14bt-0"})(["text-decoration:none;position:relative;margin-bottom:0;padding-bottom:5px;color:inherit;",";transition:0.4s;cursor:",";&:after{content:'';position:absolute;right:0;width:0;bottom:-5px;background:",";height:5px;transition-property:width;transition-duration:0.3s;transition-timing-function:ease-out;}&:hover:after{left:0;right:auto;width:100%;}"],function(e){return e.selected&&"border-bottom:  5px solid "+e.theme.colors.primaryLight},function(e){return e.onClick?"pointer":"default"},function(e){return e.theme.colors.secondaryLight});t.a=a},194:function(e,t){e.exports={background:"#FFFFFF",backgroundDark:"#f0e6f6",primary:"#009CE9",primaryLight:"#00D4E4",primaryDark:"#2C73D2",secondary:"#00D9B3",secondaryLight:"#00ffd9",secondaryDark:"#009CE9"}},195:function(e){e.exports={data:{contentfulAbout:{name:"Leonardo",description:"Gatsby v2 starter to create a top notch portfolio!",profile:{favicon16:{src:"//images.ctfassets.net/zr1w5u0ekjk8/7GvGF6xhkxQJU5FMhyEFTN/7995e64cca75a9781e07bbb1bd833e67/logo.png?w=16&fl=progressive&q=50"},favicon32:{src:"//images.ctfassets.net/zr1w5u0ekjk8/7GvGF6xhkxQJU5FMhyEFTN/7995e64cca75a9781e07bbb1bd833e67/logo.png?w=32&fl=progressive&q=50"},bigIcon:{src:"//images.ctfassets.net/zr1w5u0ekjk8/7GvGF6xhkxQJU5FMhyEFTN/7995e64cca75a9781e07bbb1bd833e67/logo.png?w=192&fl=progressive&q=50"},appleIcon:{src:"//images.ctfassets.net/zr1w5u0ekjk8/7GvGF6xhkxQJU5FMhyEFTN/7995e64cca75a9781e07bbb1bd833e67/logo.png?w=180&fl=progressive&q=50"}}}}}},196:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(90),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},206:function(e,t,n){"use strict";var a=n(207),r=n.n(a),o=n(0),i=n.n(o),c=n(175),l=n(7),m=n.n(l),s=n(180),d=(n(209),n(184)),u=n.n(d),p=n(194),h=n.n(p),f=(n(35),n(195)),g=n(210),b=n.n(g),w=n(179),v=function(e){var t=e.theme,n=void 0===t?{}:t;return i.a.createElement(w.a,{query:"4063282471",render:function(e){var t=e.contentfulAbout,a=t.name,r=t.description,o=t.profile,c=a+" Portfolio";return i.a.createElement(b.a,{htmlAttributes:{lang:"en"}},i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Leonardo M. - Portfolio"),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"shortcut icon",href:"https:"+o.favicon32.src}),i.a.createElement("meta",{name:"theme-color",content:n.background}),i.a.createElement("meta",{name:"image",content:"https:"+o.favicon32.src}),i.a.createElement("meta",{itemProp:"name",content:c}),i.a.createElement("meta",{itemProp:"description",content:r}),i.a.createElement("meta",{itemProp:"image",content:"https:"+o.favicon32.src}),i.a.createElement("meta",{name:"og:title",content:c}),i.a.createElement("meta",{name:"og:description",content:r}),i.a.createElement("meta",{name:"og:image",content:"https:"+o.bigIcon.src}),i.a.createElement("meta",{name:"og:site_name",content:c}),i.a.createElement("meta",{name:"og:locale",content:"en_US"}),i.a.createElement("meta",{name:"og:type",content:"website"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:image",content:"https:"+o.bigIcon.src}),i.a.createElement("meta",{name:"twitter:image:src",content:"https:"+o.bigIcon.src}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"https:"+o.appleIcon.src}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"https:"+o.favicon32.src}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"https:"+o.favicon16.src}),i.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossOrigin:"anonymous"}))},data:f})};v.propTypes={theme:m.a.object};var y=Object(c.withTheme)(v);function x(){var e=r()(["\n*,\n*::after,\n*::before { \n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n  }\n\nbody {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; \n  margin: 0;\n  font-family: Cabin;\n  overflow-x: hidden;\n}\n"]);return x=function(){return e},e}var E=Object(c.createGlobalStyle)(x());u()({ssrFadeout:!0});var k=function(e){var t=e.children;return i.a.createElement(o.Fragment,null,i.a.createElement(E,null),i.a.createElement(c.ThemeProvider,{theme:{colors:h.a}},i.a.createElement(s.a,null,i.a.createElement(y,null),t)))};k.propTypes={children:m.a.node.isRequired};t.a=k},242:function(e){e.exports={data:{contentfulAbout:{name:"Leonardo",roles:["Agile  🚀","CSS3 😎","Javascript ☕","Responsive 📱"],socialLinks:[{id:"e20c9b85-0866-5997-8ba4-c24d18e0e054",url:"https://github.com/leomendesm",name:"Github",fontAwesomeIcon:"github"},{id:"4cd92736-3aec-5c27-bb2b-841c700cf73d",url:"https://medium.com/@leomendesm",name:"Medium",fontAwesomeIcon:"medium"},{id:"71f92cfd-c26a-581d-8a09-d1423df892a2",url:"https://twitter.com/_leomendesm",name:"Twitter",fontAwesomeIcon:"twitter"},{id:"97e89d27-0dd0-539a-b1e8-f57942b275a8",url:"mailto:leo.mi.me@gmail.com",name:"Contact me",fontAwesomeIcon:"envelope"}]}}}},255:function(e){e.exports={data:{contentfulAbout:{aboutMe:{childMarkdownRemark:{rawMarkdownBody:"Hello 👋 I'm Leonardo, a fullstack developer from Brazil.\n\nTools i'm used to:\n* [Frontend:](#home) \n HTML5,\n CSS3 Pre/Post-processors,\n Javascript ECMA6/Typescript,\n ReactJS / VueJS,\n Jest\n* [Backend:](#about) \n Nodejs express.js/lambdas,\n SQL,\n MongoDB,\n Elixir,\n Python\n* [Common:](#projects) \n Git/github,\n Figma / Adobe XD,\n Postman\n"}},profile:{title:"logo",image:{src:"//images.ctfassets.net/zr1w5u0ekjk8/7GvGF6xhkxQJU5FMhyEFTN/7995e64cca75a9781e07bbb1bd833e67/logo.png?w=450&fl=progressive&q=100"}}}}}},341:function(e){e.exports={data:{contentfulAbout:{projects:[{id:"b02cb5d9-eff1-5558-a720-abaced7ad2c7",name:"Spotify Wrapper",description:"🎧 A wrapper to work with the Spotify Web API and node.js.",projectUrl:"https://github.com/leomendesm/spotify-wrapper-tdd",repositoryUrl:"https://github.com/leomendesm/spotify-wrapper-tdd",publishedDate:null,type:"Lib",logo:{title:"Spotify Icon RGB Green",image:{src:"//images.ctfassets.net/zr1w5u0ekjk8/5LpV7Ag37Vg4XaF4xkZla0/3a604cb70ea954c237df2e7b258a1592/Spotify_Icon_RGB_Green.png?w=200&fl=progressive&q=100"}}},{id:"d829dc68-7152-5874-9d94-c8e9b4fcd6fc",name:"btc-cli",description:"💸 A CLI to convert BTC to any currency.",projectUrl:"https://github.com/leomendesm/btc-cli-tdd",repositoryUrl:"https://github.com/leomendesm/btc-cli-tdd",publishedDate:null,type:"CLI",logo:{title:"bitcoin PNG42",image:{src:"//images.ctfassets.net/zr1w5u0ekjk8/AvLr7hHQmqyuvrlK8ZmCS/10e26974e9d55c59919c61c4d3b45200/bitcoin_PNG42.png?w=200&fl=progressive&q=100"}}},{id:"10327626-58d4-54f4-9b4c-3580245350f1",name:"Frontend Pratice - Profile",description:"Frontend Pratice - Profile. Tools used: Stylus.",projectUrl:"https://leomendesm.github.io/frontend-pratice/1-challenge/index.html",repositoryUrl:"https://github.com/leomendesm/frontend-pratice/tree/master/1-challenge",publishedDate:null,type:"WEB",logo:{title:"1",image:{src:"//images.ctfassets.net/zr1w5u0ekjk8/40me17NKczCcAB5rjgDvYl/b99986a14b222da0c6bdc80b76a14669/1.png?w=200&fl=progressive&q=100"}}},{id:"b07f07b0-c463-58f2-adf6-a0ee8dd630f6",name:"Frontend Pratice - Contact page",description:"Frontend Pratice - Contact page. Tools used: Stylus.",projectUrl:"https://leomendesm.github.io/frontend-pratice/4-challenge/index.html",repositoryUrl:"https://github.com/leomendesm/frontend-pratice/tree/master/4-challenge",publishedDate:null,type:"WEB",logo:{title:"3",image:{src:"//images.ctfassets.net/zr1w5u0ekjk8/4bJfUnUTU8wHBGQwiFVi9K/d1b9a9aaf3555c898bae73970da96fa3/3.png?w=200&fl=progressive&q=100"}}}]}}}},342:function(e){e.exports={data:{site:{siteMetadata:{isMediumUserDefined:!0}},allMediumPost:{totalCount:2,edges:[{node:{id:"a1c9ce07-74d0-5c96-9000-bc2ab77a31e8",uniqueSlug:"codecoastsp-git-e-github-49d01fb93df5",title:"Introdução — Git e Github",createdAt:"Oct 2017",virtuals:{subtitle:"O que é Controle de Versão e Git?",readingTime:3.150943396226415,previewImage:{imageId:"1*z4iaEkjdYI4VAyzdHNjaWQ.png"}}}},{node:{id:"87824fd7-2807-54a7-8dbd-9ce59bd4e387",uniqueSlug:"desenvolvendo-apis-com-node-js-express-mongodb-7b7dae447769",title:"Desenvolvendo APIs com Node.js + Express + MongoDB",createdAt:"Jan 2017",virtuals:{subtitle:"Se você, assim como eu, está entrando em um novo mundo de desenvolvimento web baseado em javascript, este tutorial é feito pra você…",readingTime:3.4069182389937107,previewImage:{imageId:"1*UQOyjG8VyfJnlTI18jZjfg.png"}}}}]},author:{username:"leomendesm",name:"Leonardo Mendes Miraglia"}}}},345:function(e,t,n){e.exports=n.p+"static/logo-53517cfe5f63085bb02228fe13a3fc7c.png"},346:function(e){e.exports={data:{contentfulAbout:{name:"Leonardo",roles:["Agile  🚀","CSS3 😎","Javascript ☕","Responsive 📱"],socialLinks:[{id:"e20c9b85-0866-5997-8ba4-c24d18e0e054",url:"https://github.com/leomendesm",name:"Github",fontAwesomeIcon:"github"},{id:"4cd92736-3aec-5c27-bb2b-841c700cf73d",url:"https://medium.com/@leomendesm",name:"Medium",fontAwesomeIcon:"medium"},{id:"71f92cfd-c26a-581d-8a09-d1423df892a2",url:"https://twitter.com/_leomendesm",name:"Twitter",fontAwesomeIcon:"twitter"},{id:"97e89d27-0dd0-539a-b1e8-f57942b275a8",url:"mailto:leo.mi.me@gmail.com",name:"Contact me",fontAwesomeIcon:"envelope"}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-75bfdb331b7cabaec2a2.js.map