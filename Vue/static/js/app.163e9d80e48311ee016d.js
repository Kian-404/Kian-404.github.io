webpackJsonp([0],{0:function(t,e){},DICR:function(t,e,a){"use strict";var n=a("fxkp"),r=a("Nan6");e.a={name:"app",data:function(){return{translatedText:""}},components:{TranslateForm:n.a,TranslateOutput:r.a},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171025T101634Z.ea17f0666764f074.04d2fec9330c5e37faf2967335fa846b64908b42&lang="+e+"&text="+t).then(function(t){console.log(t.body.text[0]),a.translatedText=t.body.text[0]})}}}},"J9/z":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 col-md-offset-3",attrs:{id:"translateOutput"}},[a("h2",[t._v(t._s(t.translatedText))])])},r=[],s={render:n,staticRenderFns:r};e.a=s},KjtP:function(t,e,a){"use strict";e.a={name:"translateOutput",props:["translatedText"]}},M93x:function(t,e,a){"use strict";function n(t){a("ZG/j")}var r=a("DICR"),s=a("oGbg"),o=a("46Yf"),i=n,l=o(r.a,s.a,!1,i,null,null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("MVSX"),r=a("y0Fx"),s=a("M93x");n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:s.a}})},Nan6:function(t,e,a){"use strict";function n(t){a("b/Fa")}var r=a("KjtP"),s=a("J9/z"),o=a("46Yf"),i=n,l=o(r.a,s.a,!1,i,null,null);e.a=l.exports},"PYv/":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("form",{staticClass:"well form-inline",attrs:{id:"transForm"},on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpenese")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"",value:"翻译"}})])])])},r=[],s={render:n,staticRenderFns:r};e.a=s},"ZG/j":function(t,e){},"b/Fa":function(t,e){},fxkp:function(t,e,a){"use strict";function n(t){a("vow7")}var r=a("t6eA"),s=a("PYv/"),o=a("46Yf"),i=n,l=o(r.a,s.a,!1,i,null,null);e.a=l.exports},oGbg:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[t._v("简单 / 易用 / 便捷 ")]),t._v(" "),a("translateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},r=[],s={render:n,staticRenderFns:r};e.a=s},t6eA:function(t,e,a){"use strict";e.a={name:"translateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}}},vow7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.163e9d80e48311ee016d.js.map