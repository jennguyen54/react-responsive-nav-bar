(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports=a(369)},26:function(e,t,a){e.exports={header:"NavigationBar_header__2vBcF","home-page":"NavigationBar_home-page__3YrAv",logo:"NavigationBar_logo__3E3AI","header-menu":"NavigationBar_header-menu__3HGX5","menu-item":"NavigationBar_menu-item__1LmYE","home-page-wrapper":"NavigationBar_home-page-wrapper__16XI-","header-mobile-menu":"NavigationBar_header-mobile-menu__18BPC",active:"NavigationBar_active__1wtEr",open:"NavigationBar_open__z44bw","mobile-hamburger-button":"NavigationBar_mobile-hamburger-button__VUuyY","bottom-mobile-menu":"NavigationBar_bottom-mobile-menu__20AW-",sticky:"NavigationBar_sticky__3pfQj"}},33:function(e,t,a){e.exports={"card-list":"Card_card-list__38y2N","card-list-responsive":"Card_card-list-responsive__3Jh_K","content-card":"Card_content-card__LZLjR",responsive:"Card_responsive__33kdC","content-card-content":"Card_content-card-content__2tR7d","content-card-title":"Card_content-card-title__2kepr"}},367:function(e,t,a){},369:function(e,t,a){"use strict";a.r(t);var n,o=a(1),i=a.n(o),r=a(148),c=a.n(r),s=a(53),l=a(54),m=a(57),v=a(55),_=a(58),d=a(79),b=a(37),u=a(26),p=a.n(u),h=a(25),g=a.n(h),N=a(80),f=(i.a.Component,a(56)),w=a(59),B=a.n(w),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).phoneClick=function(){var e=!a.state.phoneOpen;a.setState({phoneOpen:e})},a.state={phoneOpen:!1},a.phoneClick=a.phoneClick.bind(Object(b.a)(Object(b.a)(a))),a}return Object(_.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object(d.a)({},this.props),a=t.isMobile;delete t.dataSource,delete t.isMobile;var n=this.state.phoneOpen,o=this.props,r=o.content,c=(o.mobilePosition,r.map(function(t){return i.a.createElement("a",{href:t.target?t.to:"#".concat(t.to),target:t.target?t.target:"",onClick:e.phoneClick},t.title)}));return i.a.createElement("div",{className:g()(B.a.navbar,B.a.top,Object(f.a)({},B.a.responsive,a&&n)),id:"myNavbar"},i.a.createElement("a",{className:B.a.logo,id:"logo"},i.a.createElement("img",{src:"https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg"})),c,a&&i.a.createElement("div",{className:B.a["mobile-hamburger-button"]},i.a.createElement(N.a,{active:n,onClick:this.phoneClick,color:"white",burger:"vortex",style:{padding:0,margin:15},scale:.8})))}}]),t}(i.a.Component),j=a(109),E=a(33),k=a.n(E),C=a(149),y=a.n(C),M=function(e){var t=e.isMobile,a=e.children,n=Object(f.a)({},k.a["card-list-responsive"],t);return i.a.createElement("div",{className:g()(k.a["card-list"],k.a.shadow,n)},a)},x=function(e){var t=e.title,a=e.isMobile,n=e.children,o=Object(f.a)({},k.a.responsive,a);return i.a.createElement("div",{className:g()(k.a["content-card"],o)},i.a.createElement("span",{className:g()(k.a["content-card-title"])},t),i.a.createElement("div",{className:k.a["content-card-content"]},i.a.createElement(y.a,{lines:2},n)))};Object(j.enquireScreen)(function(e){n=e});var S=window.location,T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={isMobile:n,show:!S.port},a}return Object(_.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(j.enquireScreen)(function(t){e.setState({isMobile:!!t})}),S.port&&setTimeout(function(){e.setState({show:!0})},500)}},{key:"render",value:function(){var e=this,t={children:[{title:"Navigation One",to:"https://github.com/mattvox",target:"_blank"},{title:"Navigation Two",to:"nav_02"},{title:"Navigation Three",to:"nav_03"},{title:"Navigation Four",to:"nav_04"},{title:"Call Now",to:"tel: 5127017359"}]},a=[i.a.createElement(O,{id:"navbar",key:"navbar",isMobile:this.state.isMobile,content:t.children,mobileBottom:!0}),i.a.createElement(M,{isMobile:n},t.children.map(function(t,a){return i.a.createElement(x,{isMobile:e.state.isMobile,id:"card"+t.to,style:{height:1e3},title:"Title"},t.title.repeat(a+10))})),t.children.map(function(e){return i.a.createElement("div",{id:e.to,style:{height:1e3}},e.title)})];return i.a.createElement("div",{className:"templates-wrapper",ref:function(t){e.dom=t}},this.state.show&&a)}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(166),a(367);c.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports={navbar:"BottomNavigationBar_navbar__3aefq",active:"BottomNavigationBar_active__1plJv",icon:"BottomNavigationBar_icon__1ggx5",responsive:"BottomNavigationBar_responsive__2T4bV","mobile-hamburger-button":"BottomNavigationBar_mobile-hamburger-button__1a5WG"}}},[[150,2,1]]]);
//# sourceMappingURL=main.ec378438.chunk.js.map