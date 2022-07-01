"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[5908],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=c(t),d=o,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2541:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={title:"Adding a Custom Plugin Repository",id:"adding_a_custom_plugin_repo"},l=void 0,c={unversionedId:"configuration/plugins/adding_a_custom_plugin_repo",id:"configuration/plugins/adding_a_custom_plugin_repo",title:"Adding a Custom Plugin Repository",description:"Adding a repo",source:"@site/docs/configuration/plugins/adding_a_custom_plugin_repo.mdx",sourceDirName:"configuration/plugins",slug:"/configuration/plugins/adding_a_custom_plugin_repo",permalink:"/docs/configuration/plugins/adding_a_custom_plugin_repo",tags:[],version:"current",frontMatter:{title:"Adding a Custom Plugin Repository",id:"adding_a_custom_plugin_repo"},sidebar:"docs",previous:{title:"Installing Plugins",permalink:"/docs/configuration/plugins/installing_plugins"},next:{title:"Configuring Plugins",permalink:"/docs/configuration/plugins/configuring_plugins"}},s={},p=[{value:"Adding a repo",id:"adding-a-repo",level:2},{value:"Removing a repo",id:"removing-a-repo",level:2}],g={toc:p};function d(e){var n=e.components,u=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adding-a-repo"},"Adding a repo"),(0,i.kt)("p",null,"To add a custom repository located on GitHub, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Plugins")," tab, click the ",(0,i.kt)("strong",{parentName:"li"},"ADD NEW")," button.")),(0,i.kt)("img",{className:"screenshot",src:t(5506).Z}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"ADD REPOSITORY")," button.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the maintainers URL into the ",(0,i.kt)("em",{parentName:"p"},"New Repository")," text input."))),(0,i.kt)("img",{className:"screenshot",src:t(8452).Z}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"SAVE")," button.")),(0,i.kt)("p",null,"This will automatically refresh the available plugins to include the ones in the added repository."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"removing-a-repo"},"Removing a repo"),(0,i.kt)("p",null,"You can remove a custom repo by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"REPOSITORIES LIST")," button and then selecting ",(0,i.kt)("strong",{parentName:"p"},"REMOVE"),"."),(0,i.kt)("img",{className:"screenshot",src:t(5682).Z}))}d.isMDXComponent=!0},5682:function(e,n,t){n.Z=t.p+"assets/images/unmanic-plugins-add-custom-repositories-list-fe4e52a80b09c5716840ace548957791.png"},8452:function(e,n,t){n.Z=t.p+"assets/images/unmanic-plugins-add-custom-repositories-37f3450f63931129eb0a0d435a698748.png"},5506:function(e,n,t){n.Z=t.p+"assets/images/unmanic-plugins-add-new-button-2b8279720551be6ff4e21c8143cef52a.png"}}]);