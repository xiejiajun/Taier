"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[3659],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2609:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"\u540e\u7aef\u90e8\u7f72",sidebar_label:"\u540e\u7aef\u90e8\u7f72"},s=void 0,c={unversionedId:"quickstart/deploy/backend",id:"quickstart/deploy/backend",title:"\u540e\u7aef\u90e8\u7f72",description:"\u6570\u636e\u5e93\u64cd\u4f5c",source:"@site/docs/quickstart/deploy/backend.md",sourceDirName:"quickstart/deploy",slug:"/quickstart/deploy/backend",permalink:"/Taier/docs/quickstart/deploy/backend",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/deploy/backend.md",tags:[],version:"current",frontMatter:{title:"\u540e\u7aef\u90e8\u7f72",sidebar_label:"\u540e\u7aef\u90e8\u7f72"},sidebar:"docs",previous:{title:"\u90e8\u7f72\u4f9d\u8d56",permalink:"/Taier/docs/quickstart/deploy/pre-operation"},next:{title:"\u524d\u7aef\u90e8\u7f72",permalink:"/Taier/docs/quickstart/deploy/web"}},p=[{value:"\u6570\u636e\u5e93\u64cd\u4f5c",id:"\u6570\u636e\u5e93\u64cd\u4f5c",children:[{value:"\u5e93",id:"\u5e93",children:[],level:3},{value:"\u8868\u7ed3\u6784",id:"\u8868\u7ed3\u6784",children:[],level:3},{value:"\u8868\u6570\u636e",id:"\u8868\u6570\u636e",children:[],level:3}],level:2},{value:"\u9879\u76ee\u7f16\u8bd1",id:"\u9879\u76ee\u7f16\u8bd1",children:[{value:"\u7f16\u8bd1\u811a\u672c",id:"\u7f16\u8bd1\u811a\u672c",children:[],level:3},{value:"\u68c0\u67e5\u7f16\u8bd1\u7ed3\u679c",id:"\u68c0\u67e5\u7f16\u8bd1\u7ed3\u679c",children:[],level:3}],level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[{value:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",id:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55",children:[],level:3},{value:"conf/application.properties\u914d\u7f6e",id:"confapplicationproperties\u914d\u7f6e",children:[{value:"\u914d\u7f6ezookeeper",id:"\u914d\u7f6ezookeeper",children:[],level:4},{value:"\u914d\u7f6emysql",id:"\u914d\u7f6emysql",children:[],level:4},{value:"\u914d\u7f6eweb",id:"\u914d\u7f6eweb",children:[],level:4},{value:"\u914d\u7f6eDatasourceX\u63d2\u4ef6\u5730\u5740",id:"\u914d\u7f6edatasourcex\u63d2\u4ef6\u5730\u5740",children:[],level:4}],level:3}],level:2},{value:"\u542f\u52a8/\u505c\u6b62",id:"\u542f\u52a8\u505c\u6b62",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6570\u636e\u5e93\u64cd\u4f5c"},"\u6570\u636e\u5e93\u64cd\u4f5c"),(0,i.kt)("h3",{id:"\u5e93"},"\u5e93"),(0,i.kt)("p",null,"\u8bf7\u767b\u5f55 ",(0,i.kt)("strong",{parentName:"p"},"MySQL")," \u6570\u636e\u5e93\uff0c\u521b\u5efa\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"taier")," \u6570\u636e\u5e93"),(0,i.kt)("h3",{id:"\u8868\u7ed3\u6784"},"\u8868\u7ed3\u6784"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c\u5bfc\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/create.sql")," sql\u6587\u4ef6\u8fdb\u884c\u521b\u5efa\u8868"),(0,i.kt)("h3",{id:"\u8868\u6570\u636e"},"\u8868\u6570\u636e"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u6570\u636e\u5e93\uff0c\u5bfc\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"sql/insert.sql")," sql\u6587\u4ef6\u8fdb\u884c\u57fa\u7840\u6570\u636e\u5bfc\u5165"),(0,i.kt)("h2",{id:"\u9879\u76ee\u7f16\u8bd1"},"\u9879\u76ee\u7f16\u8bd1"),(0,i.kt)("h3",{id:"\u7f16\u8bd1\u811a\u672c"},"\u7f16\u8bd1\u811a\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bin: \u542f\u52a8\u811a\u672c\u5747\u653e\u5728\u8be5\u76ee\u5f55\u4e0b\uff0c\u8be5\u76ee\u5f55\u4e0b\u6709\u4e24\u4e2a\u6587\u4ef6sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"|-- bin \n|---- base.sh     //jvm\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\u811a\u672c\n|---- taier.sh    //\u542f\u52a8\u811a\u672c\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u542f\u52a8\u811a\u672c\u91cc\u9762java_home\u3001heap_size\u53ef\u4ee5\u901a\u8fc7\u5b9e\u9645\u73af\u5883\u6765\u52a8\u6001\u8c03\u6574"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"build: \u9879\u76ee\u7f16\u8bd1\u811a\u672c,\u6839\u636e\u4e0d\u540c\u573a\u666f\u6765\u7f16\u8bd1\u9879\u76ee")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"|-- build\n|---- mvn-build.sh           //\u7f16\u8bd1\u9879\u76ee\u53ca\u4efb\u52a1\u63d0\u4ea4\u811a\u672c : Taier\u542f\u52a8jar\u548c\u4efb\u52a1\u63d0\u4ea4\u63d2\u4ef6jar\n|---- mvn-build-datadevelop  //\u7f16\u8bd1\u9879\u76ee\u811a\u672c : Taier\u542f\u52a8jar\n|---- mvn-build-plugins.sh   //\u7f16\u8bd1\u4efb\u52a1\u63d0\u4ea4\u811a\u672c : Taier\u4efb\u52a1\u63d0\u4ea4\u63d2\u4ef6jar\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Taier \u9875\u9762\u529f\u80fd\u4f9d\u8d56data-develop.jar \u4efb\u52a1\u63d0\u4ea4\u4f9d\u8d56plugins\u76f8\u5173jar"))),(0,i.kt)("h3",{id:"\u68c0\u67e5\u7f16\u8bd1\u7ed3\u679c"},"\u68c0\u67e5\u7f16\u8bd1\u7ed3\u679c"),(0,i.kt)("p",null,"\u901a\u8fc7\u811a\u672c\u7f16\u8bd1\u9879\u76ee\u540e\u4f1a\u751f\u6210\u5bf9\u5e94\u7684\u6e90\u7801\u6587\u4ef6\uff0c\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u7f16\u8bd1\u7684\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"|-- lib \n|---- taier-data-develop-xxxx-with-dependencies.jar\n\n//\u7f16\u8bd1 Taier-plugins \u5bf9\u5e94jar\u6587\u4ef6\n|-- pluginLibs \n|---- dummy\n|---- flinkcommon\n|---- yarn2-hdfs2-flink110\n|---- .......\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55"},"\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"|-- conf \n|---- application.properties  //\u914d\u7f6e\u6587\u4ef6\n|---- logback.xml             //\u65e5\u5fd7\u914d\u7f6e\n")),(0,i.kt)("h3",{id:"confapplicationproperties\u914d\u7f6e"},"conf/application.properties\u914d\u7f6e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"application.properties\u4e2d\u90e8\u5206\u914d\u7f6e\u4f9d\u8d56\u524d\u6587\u4f9d\u8d56\u7ec4\u4ef6\u4e2d\u7684\u90e8\u5206\u7ec4\u4ef6"))),(0,i.kt)("h4",{id:"\u914d\u7f6ezookeeper"},"\u914d\u7f6ezookeeper"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"nodeZkAddress=127.0.0.1:2181/taier\n")),(0,i.kt)("h4",{id:"\u914d\u7f6emysql"},"\u914d\u7f6emysql"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"jdbc.driverClassName=com.mysql.jdbc.Driver\njdbc.url=jdbc:mysql://127.0.0.1:3306/taier?charset=utf8&autoReconnect=true&tinyInt1isBit=false&serverTimezone=Asia/Shanghai\njdbc.username=root\njdbc.password=\n")),(0,i.kt)("h4",{id:"\u914d\u7f6eweb"},"\u914d\u7f6eweb"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"server.tomcat.uri-encoding = UTF-8\nserver.port = 8090\nserver.tomcat.basedir = ./tmpSave\n")),(0,i.kt)("h4",{id:"\u914d\u7f6edatasourcex\u63d2\u4ef6\u5730\u5740"},"\u914d\u7f6eDatasourceX\u63d2\u4ef6\u5730\u5740"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"datasource.plugin.path=/opt/dtstack/DTCommon/InsightPlugin/dataSourcePlugin\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DatasourceX\u7684\u4f9d\u8d56\u7248\u672c\u4e3av4.3.0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/DatasourceX/releases/tag/v4.3.0"},"DatasourceX")))),(0,i.kt)("p",null,"\u5b8c\u6574\u7684application.properties\u5e94\u8be5\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"nodeZkAddress=127.0.0.1:2181/taier\njdbc.driverClassName=com.mysql.jdbc.Driver\njdbc.url=jdbc:mysql://127.0.0.1:3306/taier?charset=utf8&autoReconnect=true&tinyInt1isBit=false&serverTimezone=Asia/Shanghai\njdbc.username=\njdbc.password=\n\nserver.tomcat.uri-encoding = UTF-8\nserver.port = 8090\nserver.tomcat.basedir = ./tmpSave\ndatasource.plugin.path=/opt/dtstack/DTCommon/InsightPlugin/dataSourcePlugin\n")),(0,i.kt)("h2",{id:"\u542f\u52a8\u505c\u6b62"},"\u542f\u52a8/\u505c\u6b62"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./bin/taier.sh start\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u505c\u6b62:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./bin/taier.sh stop\n")))}u.isMDXComponent=!0}}]);