"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[339],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=["components"],l={title:"Running a FileBot Post-processor",description:"Running a FileBot Post-processor",id:"filebot_post_processor"},s=void 0,c={unversionedId:"guides/filebot_post_processor",id:"guides/filebot_post_processor",isDocsHomePage:!1,title:"Running a FileBot Post-processor",description:"Running a FileBot Post-processor",source:"@site/docs/guides/filebot.mdx",sourceDirName:"guides",slug:"/guides/filebot_post_processor",permalink:"/docs/guides/filebot_post_processor",tags:[],version:"current",frontMatter:{title:"Running a FileBot Post-processor",description:"Running a FileBot Post-processor",id:"filebot_post_processor"},sidebar:"docs",previous:{title:"Docker-Compose SMB/CIFS mounts",permalink:"/docs/advanced/docker_compose_cifs_mounts"},next:{title:"Unmanic Windows 10 Install guide",permalink:"/docs/guides/unmanic_windows_install"}},p=[{value:"Instructions:",id:"instructions",children:[{value:"1) Enable FileBot in the Unmanic container",id:"1-enable-filebot-in-the-unmanic-container",children:[],level:3},{value:"2) Install the &#39;External Post-processor Script&#39; Plugin",id:"2-install-the-external-post-processor-script-plugin",children:[],level:3},{value:"3) Configure the &#39;External Post-processor Script&#39; Plugin",id:"3-configure-the-external-post-processor-script-plugin",children:[],level:3},{value:"4) Enable the &#39;External Post-processor Script&#39; Plugin",id:"4-enable-the-external-post-processor-script-plugin",children:[],level:3}],level:2},{value:"Plugin Config Examples",id:"plugin-config-examples",children:[{value:"Rename TV Shows with the correct codec in the file name:",id:"rename-tv-shows-with-the-correct-codec-in-the-file-name",children:[{value:"Run the command for each output file created by Unmanic",id:"run-the-command-for-each-output-file-created-by-unmanic",children:[],level:5},{value:"Command or script to execute:",id:"command-or-script-to-execute",children:[],level:5},{value:"Arguments to pass to the command or script:",id:"arguments-to-pass-to-the-command-or-script",children:[],level:5}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Difficulty-easy-green?style=flat",alt:"Difficulty"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Setup%20Time-20%20minutes-orange?style=flat",alt:"Setup Time"})),(0,r.kt)("p",null,"Follow these instructions to configure the Unmanic Docker container for running FileBot as a Post-processor function."),(0,r.kt)("h2",{id:"instructions"},"Instructions:"),(0,r.kt)("h3",{id:"1-enable-filebot-in-the-unmanic-container"},"1) Enable FileBot in the Unmanic container"),(0,r.kt)("p",null,"The Unmanic container does not have FileBot installed out-of-the-box."),(0,r.kt)("p",null,"You will need to install it into the container during container startup."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a file inside the container ",(0,r.kt)("inlineCode",{parentName:"li"},"/config/startup.sh")),(0,r.kt)("li",{parentName:"ol"},"Inside this file append the following contents:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n#  _____ _ _      _           _\n# |  ___(_) | ___| |__   ___ | |_\n# | |_  | | |/ _ \\ \'_ \\ / _ \\| __|\n# |  _| | | |  __/ |_) | (_) | |_\n# |_|   |_|_|\\___|_.__/ \\___/ \\__|\n#\n# Flag to easily disable installation on startup\nINSTALL_FILEBOT=true\nINSTALL_LEGACY_FILEBOT=false\n# Define software versions (only used for legacy installation)\nARCH=amd64  # (amd64, 1386, armhf)\nFILEBOT_VERSION=4.7.9\n\nif [[ ${INSTALL_FILEBOT} == \'true\' ]]; then\n    if ! command -v filebot &> /dev/null; then\n        # 1. Import signing keys\n        apt-get update\n        apt-get install -y --install-recommends dirmngr gnupg apt-transport-https\n        apt-key adv --fetch-keys "https://raw.githubusercontent.com/filebot/plugins/master/gpg/maintainer.pub"\n\n        # 2. Add deb repository to sources.list\n        echo "deb [arch=all] https://get.filebot.net/deb/ universal main" | tee /etc/apt/sources.list.d/filebot.list\n\n        # 3. Update package index\n        apt-get update\n\n        # 4. Install dependencies explicitly (otherwise apt-get autoremove may purge them)\n        apt-get install -y --install-recommends \\\n            default-jre \\\n            openjfx \\\n            mediainfo \\\n            libchromaprint-tools \\\n            p7zip-full \\\n            unrar\n\n        if [[ ${INSTALL_LEGACY_FILEBOT} == \'true\' ]]; then\n            # 5. Install FileBot legacy version\n            mkdir -p /config/filebot/\n            pushd /config/filebot/\n            if [[ ! -e /config/filebot/filebot_${FILEBOT_VERSION}_${ARCH}.deb ]]; then\n                curl -kSL \\\n                    -o /config/filebot/filebot_${FILEBOT_VERSION}_${ARCH}.deb \\\n                    "https://cfhcable.dl.sourceforge.net/project/filebot/filebot/FileBot_${FILEBOT_VERSION}/filebot_${FILEBOT_VERSION}_${ARCH}.deb"\n                chmod a+rw /config/filebot/filebot_${FILEBOT_VERSION}_${ARCH}.deb\n            fi\n            # apt-get install -y openjdk-8-jdk-headless   libjna-java\n            apt-get install -y /config/filebot/filebot_${FILEBOT_VERSION}_${ARCH}.deb\n\n            popd\n        else\n            # 5. Install FileBot from repo\n            apt-get install -y --install-recommends filebot\n        fi\n\n    fi\nfi\n\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It may take some time for this script to complete the installation of FileBot and all of its dependencies.\nDuring this time, Unmanic will not start, and the web UI will not be accessible.\nBe patient, it will only need to run this installation the first time the container is started."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can configure the script in the following ways:"),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Set Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INSTALL_FILEBOT"),(0,r.kt)("td",{parentName:"tr",align:null},"true / false"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable / Disable the script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INSTALL_LEGACY_FILEBOT"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Install the legacy version of FileBot ",(0,r.kt)("a",{parentName:"td",href:"https://sourceforge.net/projects/filebot/files/"},"link")," rather than the latest release")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARCH"),(0,r.kt)("td",{parentName:"tr",align:null},"amd64 / 1386 / armhf"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the hardware (x86_64 / x86 / ARM) version of FileBot (only required when installing the legacy version)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FILEBOT_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"4.7.9"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the version of FileBot to download (only required when installing the legacy version)")))))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Restart the container")),(0,r.kt)("p",null,"During startup, this script will install FileBot if it is not already installed in this container."),(0,r.kt)("h3",{id:"2-install-the-external-post-processor-script-plugin"},"2) Install the 'External Post-processor Script' Plugin"),(0,r.kt)("p",null,"Open the plugin installer and install the plugin named 'External Post-processor Script'"),(0,r.kt)("img",{className:"screenshot",src:n(8154).Z}),(0,r.kt)("h3",{id:"3-configure-the-external-post-processor-script-plugin"},"3) Configure the 'External Post-processor Script' Plugin"),(0,r.kt)("p",null,"Once installed, click on the 'External Post-processor Script' Plugin icon."),(0,r.kt)("img",{className:"screenshot",src:n(1156).Z}),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Settings")),(0,r.kt)("img",{className:"screenshot",src:n(9923).Z}),(0,r.kt)("h3",{id:"4-enable-the-external-post-processor-script-plugin"},"4) Enable the 'External Post-processor Script' Plugin"),(0,r.kt)("p",null,"In the Plugin table, enable the configured 'External Post-processor Script' Plugin"),(0,r.kt)("img",{className:"screenshot",src:n(9945).Z}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"plugin-config-examples"},"Plugin Config Examples"),(0,r.kt)("p",null,"Here are some examples of what FileBot can be used for in an Unmanic Post-process..."),(0,r.kt)("p",null,"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.filebot.net/cli.html"},"FileBot CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.filebot.net/naming.html"},"FileBot Format Expressions"))),(0,r.kt)("h3",{id:"rename-tv-shows-with-the-correct-codec-in-the-file-name"},"Rename TV Shows with the correct codec in the file name:"),(0,r.kt)("h5",{id:"run-the-command-for-each-output-file-created-by-unmanic"},"Run the command for each output file created by Unmanic"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"True")),(0,r.kt)("h5",{id:"command-or-script-to-execute"},"Command or script to execute:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"filebot\n"))),(0,r.kt)("h5",{id:"arguments-to-pass-to-the-command-or-script"},"Arguments to pass to the command or script:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"--conflict skip\n-non-strict\n--db TheMovieDB::TV\n-rename \"{output_file_path}\"\n--format \"{n.upperInitial().space('.')}-{s00e00}-{t.upperInitial().space('.')}-{source}-{vf}-{vc}\"\n"))))}d.isMDXComponent=!0},9945:function(e,t,n){t.Z=n.p+"assets/images/unmanic-guide-ext-post-processor-script-enable-ce2a4a015fd89317bd99c30ec2364bbc.png"},8154:function(e,t,n){t.Z=n.p+"assets/images/unmanic-guide-ext-post-processor-script-install-bd391c565a4a4c320a71bbd05d6d66d5.png"},1156:function(e,t,n){t.Z=n.p+"assets/images/unmanic-guide-file-bot-configure1-6a36f3a96ce7a1af1dfcba26e598f0c1.png"},9923:function(e,t,n){t.Z=n.p+"assets/images/unmanic-guide-file-bot-configure2-464a6a672ab30715b1dedbdb764cf455.png"}}]);