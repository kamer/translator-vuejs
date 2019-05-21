(function(t){function e(e){for(var n,l,o=e[0],c=e[1],i=e[2],p=0,d=[];p<o.length;p++)l=o[p],r[l]&&d.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/translator-vuejs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"068b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("Translator")],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"bv-example-row"},[a("h1",{staticClass:"my-4 h1"},[t._v(t._s(t.msg))]),a("b-row",{staticClass:"justify-content-center"},[a("span",{staticClass:"mx-2 my-4"},[a("strong",[t._v("From:")])]),a("b-col",{staticClass:"my-3 p-0",attrs:{col:"",lg:"2",md:"2"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected1,callback:function(e){t.selected1=e},expression:"selected1"}})],1),a("br"),a("span",{staticClass:"mr-2 ml-4 my-4"},[a("strong",[t._v("To:")])]),a("b-col",{staticClass:"my-3 p-0",attrs:{col:"",lg:"2",md:"2"}},[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected2,callback:function(e){t.selected2=e},expression:"selected2"}})],1)],1),a("p",{staticClass:"text-secondary"},[t._v("A translation app powered by "),a("a",{staticClass:"vuejs-link text-decoration-none",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v(" Vuejs")]),t._v(" & "),a("a",{staticClass:"yandex-link text-decoration-none",attrs:{href:"https://tech.yandex.com/translate/",target:"_blank"}},[t._v("Yandex's API")]),t._v(". Made by "),a("a",{staticClass:"color-info text-decoration-none",attrs:{href:"https://github.com/Manuel-Suarez-Abascal",target:"_blank"}},[t._v("Manuel Abascal.")])]),a("b-row",[a("b-col",{staticClass:"translation-container mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[a("b-form-textarea",{staticClass:"w-100",attrs:{type:"text",rows:"5",placeholder:t.placeholder},on:{keyup:t.translate},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),a("b-col",{staticClass:"translated-container mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[t.wordTranslated?a("b-form-textarea",{staticClass:"w-100",attrs:{rows:"5",value:t.wordTranslated}}):a("b-form-textarea",{staticClass:"w-100",attrs:{rows:"5",placeholder:"The translation results will show here!"}})],1)],1)],1)},o=[],c=a("bd86"),i=a("bc3a"),u=a.n(i),p={name:"Translator",data:function(){return Object(c["a"])({msg:"Select Language Pair To Translate",placeholder:"Type something ...",wordTranslated:"",inputValue:"",selected1:null,options:[{value:null,text:"Select an option"},{value:"en",text:"English"},{value:"fr",text:"French"},{value:"es",text:"Spanish"}],selected2:null},"options",[{value:null,text:"Select an option"},{value:"en",text:"English"},{value:"fr",text:"French"},{value:"es",text:"Spanish"}])},methods:{translate:function(t){var e=this;"Enter"==t.key&&u.a.get("https://translate.yandex.net/api/v1.5/tr.json/translate?lang="+this.selected1+"-"+this.selected2+"&key=trnsl.1.1.20190518T054559Z.6098481762cecacb.6b721345d2262aa024e24b0aa7bbc42011422525&text="+this.inputValue+"&format=plain").then(function(t){e.wordTranslated=t.data.text[0],e.inputValue=""})}}},d=p,f=(a("ad90"),a("2877")),b=Object(f["a"])(d,l,o,!1,null,null,null),v=b.exports,h={name:"app",components:{Translator:v}},m=h,g=(a("034f"),Object(f["a"])(m,r,s,!1,null,null,null)),x=g.exports,y=a("9f7b"),w=a.n(y);a("f9e3"),a("2dd8");n["default"].config.productionTip=!1,n["default"].use(w.a),new n["default"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,e,a){},ad90:function(t,e,a){"use strict";var n=a("068b"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.4e027451.js.map