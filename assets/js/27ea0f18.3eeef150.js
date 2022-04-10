"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[498],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={title:"Plugin Development Overview",description:"An Overview of Unmanic Plugins",id:"developing_plugins"},p=void 0,u={unversionedId:"development/developing_plugins",id:"development/developing_plugins",title:"Plugin Development Overview",description:"An Overview of Unmanic Plugins",source:"@site/docs/development/developing_plugins.mdx",sourceDirName:"development",slug:"/development/developing_plugins",permalink:"/docs/development/developing_plugins",tags:[],version:"current",frontMatter:{title:"Plugin Development Overview",description:"An Overview of Unmanic Plugins",id:"developing_plugins"},sidebar:"docs",previous:{title:"Link Settings",permalink:"/docs/configuration/link_settings"},next:{title:"Introduction to Writing Plugins",permalink:"/docs/development/writing_plugins/introduction"}},s={},c=[{value:"More in-depth look at what a Plugin is",id:"more-in-depth-look-at-what-a-plugin-is",level:2},{value:"Types of Plugins",id:"types-of-plugins",level:2},{value:"Plugins repositories",id:"plugins-repositories",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Users are able to ",(0,o.kt)("a",{parentName:"p",href:"/docs/development/writing_plugins/introduction"},"develop their own Plugins"),"\nand either host them within their own repo or submit them to be included into the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"official repository"),"."),(0,o.kt)("h2",{id:"more-in-depth-look-at-what-a-plugin-is"},"More in-depth look at what a Plugin is"),(0,o.kt)("p",null,"Plugins are stand-alone Python modules that are executed at defined stages during\nthe library optimisation process."),(0,o.kt)("p",null,"At these specific stages of the library optimisation process, Unmanic will call\neach enabled Plugin in turn and then, upon completion of the Plugin execution,\nUnmanic will continue with subsequent process for that stage."),(0,o.kt)("p",null,"During a call to a Plugin, said plugin will be given a set of data pertaining to the state\nof a task or the information regarding the process about to be carried out.\nA Plugin may use this data to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manipulate the subsequent process."),(0,o.kt)("li",{parentName:"ul"},"Use that data to carry out functions outside of the scope of the Unmanic application.")),(0,o.kt)("p",null,"A Plugin may be written such that it is executed at multiple stages of the library\noptimisation process. However, it is best practice ensuring that a Plugin is designed to carry out\nonly a single task."),(0,o.kt)("h2",{id:"types-of-plugins"},"Types of Plugins"),(0,o.kt)("p",null,"The current list of supported types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Stage"),(0,o.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"File test"),(0,o.kt)("td",{parentName:"tr",align:null},"Library Management"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#library-management---file-test"},"LINK"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Processing file"),(0,o.kt)("td",{parentName:"tr",align:null},"Worker"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#worker---processing-file"},"LINK"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"File movements"),(0,o.kt)("td",{parentName:"tr",align:null},"Post-processor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#post-processor---file-movements"},"LINK"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Marking task success/failure"),(0,o.kt)("td",{parentName:"tr",align:null},"Post-processor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/development/writing_plugins/plugin_runner_types#post-processor---marking-task-successfailure"},"LINK"))))),(0,o.kt)("h2",{id:"plugins-repositories"},"Plugins repositories"),(0,o.kt)("p",null,"Unmanic hosts an official repository of plugins for Unmanic."),(0,o.kt)("p",null,"This is hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unmanic/unmanic-plugins/tree/official"},"GitHub"),' under the "',(0,o.kt)("em",{parentName:"p"},"official"),'" branch.'),(0,o.kt)("p",null,"Anyone is able to provide Pull Request to update existing plugins or add new plugins to this repository.\nAny additions will be vetted and tested to ensure they uphold the standard expected of official plugins."),(0,o.kt)("p",null,"If you wish to create your own repository to host or develop your own plugins, follow the guide here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/development/plugin_repos/creating_your_own_repo"},"Creating Your Own Repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/configuration/plugins/adding_a_custom_plugin_repo"},"Adding a Custom Repository to Unmanic"))))}g.isMDXComponent=!0}}]);