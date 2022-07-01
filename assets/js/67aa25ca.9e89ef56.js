"use strict";(self.webpackChunkunmanic_documentation=self.webpackChunkunmanic_documentation||[]).push([[9182],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Unmanic MacOS Install guide",description:"Unmanic MacOS Install guide",id:"unmanic_macos_install"},s=void 0,c={unversionedId:"guides/unmanic_macos_install",id:"guides/unmanic_macos_install",title:"Unmanic MacOS Install guide",description:"Unmanic MacOS Install guide",source:"@site/docs/guides/unmanic_MacOS_Guide.md",sourceDirName:"guides",slug:"/guides/unmanic_macos_install",permalink:"/docs/guides/unmanic_macos_install",tags:[],version:"current",frontMatter:{title:"Unmanic MacOS Install guide",description:"Unmanic MacOS Install guide",id:"unmanic_macos_install"},sidebar:"docs",previous:{title:"Unmanic Windows 10 Install guide",permalink:"/docs/guides/unmanic_windows_install"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"1) Checking requirements",id:"1-checking-requirements",level:3},{value:"2) Installing pip",id:"2-installing-pip",level:3},{value:"3) Installing ffmpeg",id:"3-installing-ffmpeg",level:3},{value:"4) Installing Unmanic",id:"4-installing-unmanic",level:3},{value:"5) Creating a shellscript to start Unmanic",id:"5-creating-a-shellscript-to-start-unmanic",level:3},{value:"6) Start Unmanic",id:"6-start-unmanic",level:3},{value:"7) Mount your media",id:"7-mount-your-media",level:3},{value:"8) Configure Library path",id:"8-configure-library-path",level:3},{value:"9) Optional Autostart",id:"9-optional-autostart",level:3}],m={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Difficulty-moderate-orange?style=flat",alt:"Difficulty"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Setup%20Time-30%20minutes-orange?style=flat",alt:"Setup Time"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/austinsr1"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Original%20Author-austinsr1-lightgrey?style=flat?style=plastic&logo=github",alt:"Original Author"}))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This requires a recent MacOS, Python 3.7-3.8,ffmpeg and PIP."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"MacOS Monterey 12.3 was used when creating this guide. Slight changes may need to be made for older systems."))),(0,r.kt)("h3",{id:"1-checking-requirements"},"1) Checking requirements"),(0,r.kt)("p",null,"First, we will need to open a Terminal window. Either click on the spotlight search in the upper right of the screen and type Terminal or run it from Applications/Utilites/ folder."),(0,r.kt)("p",null,"Once the terminal is open, type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 --version\n")),(0,r.kt)("p",null,"If this is the first time running python, it may prompt you to download the command line developer tools. Click install to continue."),(0,r.kt)("img",{className:"screenshot",src:n(3122).Z}),"If you already have python installed, the version needs to be between 3.7 and 3.8 to work best with Unmanic.",(0,r.kt)("h3",{id:"2-installing-pip"},"2) Installing pip"),(0,r.kt)("p",null,"pip is not included in MacOS, so we must manually install it.\nOpen the terminal application and enter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/Desktop/;curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py\n")),(0,r.kt)("p",null,"You may see a prompt asking if Terminal can access your desktop directory. Click Yes if prompted."),(0,r.kt)("p",null,"This will change directories to your Desktop folder and download the get-pip.py script"),(0,r.kt)("p",null,"Next, run the script from the Terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 get-pip.py\n")),(0,r.kt)("p",null,"After it downloads and installs, you can verify pip installed by typing "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip3 --version\n")),(0,r.kt)("p",null,"in the Terminal."),(0,r.kt)("h3",{id:"3-installing-ffmpeg"},"3) Installing ffmpeg"),(0,r.kt)("p",null,"We will need to download ffmpeg and ffprobe from ",(0,r.kt)("a",{parentName:"p",href:"https://evermeet.cx/ffmpeg/"},"https://evermeet.cx/ffmpeg/")," .\nGo to your download folder and extract both ffmpeg and ffprobe.\nClick and drag to highlight both ffmpeg and ffprobe then right click on them and click Copy from the menu.\nNext, go to the Go menu and select Go to folder.\nEnter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/local/bin\n")),(0,r.kt)("img",{className:"screenshot",src:n(5664).Z}),"When the directory opens, right click and select Paste 2 items. You will be prompted for your password. Enter and press enter. Next, we will need to set these files to be executable. From the terminal, enter the following. ``` sudo chmod 755 /usr/local/bin/ffmpeg sudo chmod 755 /usr/local/bin/ffprobe ``` Next, we have to deal with the macOS security settings for unsigned packages. From the terminal, type ``` ffmpeg ``` You will see a dialog similar to ",(0,r.kt)("img",{className:"screenshot",src:n(6272).Z}),"Click Cancel in the dialog box.",(0,r.kt)("p",null,"Open the Apple Menu->System Preferences menu\nOpen Security & Privacy\nClick the Allow Anyway button."),(0,r.kt)("img",{className:"screenshot",src:n(6272).Z}),"From the terminal, type ``` ffmpeg ``` When the dialog opens, click the open button.",(0,r.kt)("p",null,"Next, we will repeat the same process for ffprobe.\nFrom the terminal, type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ffprobe\n")),(0,r.kt)("p",null,"Click Canel in the dialog box."),(0,r.kt)("p",null,"Open the Apple Menu->System Preferences menu\nOpen Security & Privacy\nClick the Allow Anyway button."),(0,r.kt)("p",null,"From the terminal, type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ffprobe\n")),(0,r.kt)("p",null,"When the dialog opens, click the open button."),(0,r.kt)("h3",{id:"4-installing-unmanic"},"4) Installing Unmanic"),(0,r.kt)("p",null,"From the Terminal enter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip3 install unmanic\n")),(0,r.kt)("p",null,"This will install Unmanic and dependencies. "),(0,r.kt)("h3",{id:"5-creating-a-shellscript-to-start-unmanic"},"5) Creating a shellscript to start Unmanic"),(0,r.kt)("p",null,"For the next step, we will need root access.\nAt the terminal, enter the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo su -\n")),(0,r.kt)("p",null,"This will then prompt you for your account password. Enter your password and press enter."),(0,r.kt)("p",null,"Next, in the terminal, enter the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'echo "python3 -m unmanic" >/usr/local/bin/start_unmanic.sh\n')),(0,r.kt)("p",null,"Lastly, we will make the shell script executable by entering the following command in the terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod 755 /usr/local/bin/start_unmanic.sh\n")),(0,r.kt)("p",null,"In the Terminal type exit to leave root access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"exit\n")),(0,r.kt)("h3",{id:"6-start-unmanic"},"6) Start Unmanic"),(0,r.kt)("p",null,"From the Terminal, type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/usr/local/bin/start_unmanic.sh\n")),(0,r.kt)("p",null,"This will start Unmanic. This terminal must be left open or Unmanic will stop."),(0,r.kt)("h3",{id:"7-mount-your-media"},"7) Mount your media"),(0,r.kt)("p",null,"Mount the remote drive that contains your media from the Go menu ->Connect to Server."),(0,r.kt)("img",{className:"screenshot",src:n(2066).Z}),"Enter the ip address and share name and click Connect.",(0,r.kt)("p",null,"When you are configuring Unmanic to access your library, it will now be locate under the /Volumes directory ."),(0,r.kt)("h3",{id:"8-configure-library-path"},"8) Configure Library path"),(0,r.kt)("p",null,"Open a web brower of your choice and go to the following url"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"localhost:8888\n")),(0,r.kt)("p",null,"Click the 3 horizontal lines in the upper left to expand the menu. Next go to Settings"),(0,r.kt)("img",{className:"screenshot",src:n(7976).Z}),(0,r.kt)("p",null,"In the setting menu, you will see your default library. Click the 3 horizontal bars to the right of the library to open the configuration."),(0,r.kt)("p",null,"Next, cliock on the box that says Library Path."),(0,r.kt)("p",null,"By default, Unmanic looks for a library at /library, but that is in use already in macOS."),(0,r.kt)("p",null,"Click the .. at the top of the window to go up a level."),(0,r.kt)("img",{className:"screenshot",src:n(8155).Z}),(0,r.kt)("p",null,"Navigate to the /Volumes director and you should see the network drive that was mounted in the previous step."),(0,r.kt)("img",{className:"screenshot",src:n(6065).Z}),"From there, navigate to your media.",(0,r.kt)("h3",{id:"9-optional-autostart"},"9) Optional Autostart"),(0,r.kt)("p",null,"If you would like Unmanic to start automatically, we can compile an applescript applet to do this."),(0,r.kt)("p",null,"Open Applications->Utilities->Script Editor"),(0,r.kt)("img",{className:"screenshot",src:n(3303).Z}),(0,r.kt)("p",null,"Paste the following into the script editor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'try\n    do shell script "/usr/local/bin/start_unmanic.sh"\non error errMsg\n    display dialog "ERROR: " & errMsg\nend try\n\n')),(0,r.kt)("p",null,"Next, go to File->Export"),(0,r.kt)("img",{className:"screenshot",src:n(1397).Z}),"```",(0,r.kt)("p",null,"Export As: Start_Unmanic\nWhere:Applications\nFile Format: Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Click the Save button\n\nClose Script Editor.\nClick the Apple Menu->System Preferences\nClick Users & Groups\nClick your username on the left and then click the Login Items tab.\nClick the + and navigate to the Applications directory and click the Start_Unmanic application.\n<img className={\"screenshot\"} src={require('/img/guides/unmanic_macos_install_images/login_items.png').default} />\n")))}d.isMDXComponent=!0},6272:function(e,t,n){t.Z=n.p+"assets/images/cannot_be_opened-5af8f61c5fe09d67ca77ba9040c04a2c.png"},2066:function(e,t,n){t.Z=n.p+"assets/images/connect_to_server-888938a1f1a9bcc55c501031d25a85be.png"},1397:function(e,t,n){t.Z=n.p+"assets/images/export_script-c6cf856890354cadd9f162d75ecf3544.png"},5664:function(e,t,n){t.Z=n.p+"assets/images/go_to_folder-8855fca39f6caf5335bce3c5a9dde142.png"},3122:function(e,t,n){t.Z=n.p+"assets/images/python3-ee3139704811de2a9fc66c20caa60496.png"},3303:function(e,t,n){t.Z=n.p+"assets/images/script_editor-a9fa5aaf445df30009866e9f63d40cb7.png"},6065:function(e,t,n){t.Z=n.p+"assets/images/select_library-be1282c4406c5be2dbf066371619ed58.png"},7976:function(e,t,n){t.Z=n.p+"assets/images/settings-84207a7bcaad53d82e158c7ec11c8b56.png"},8155:function(e,t,n){t.Z=n.p+"assets/images/up_a_level-6776bf461d1dfcd2b27b0a2f0ffce5e9.png"}}]);