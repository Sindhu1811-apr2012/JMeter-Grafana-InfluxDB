/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a,b){"use strict";function c(a,b){var c=a.def.type+"(",d=g.default.map(a.params,function(b,c){var d=a.def.params[c];return"time"===d.type&&"auto"===b&&(b="$__interval"),"single"===d.quote?"'"+b+"'":"double"===d.quote?'"'+b+'"':b});return b&&d.unshift(b),c+d.join(", ")+")"}function d(a,b){return b+" "+a.params[0]}function e(a,b){return a.params[0]}function f(a,b){return'"'+a.params[0]+'"'}b&&b.id;a("functionRenderer",c),a("suffixRenderer",d),a("identityRenderer",e),a("quotedIdentityRenderer",f);var g,h,i;return{setters:[function(a){g=a}],execute:function(){h=function(){function a(a){this.type=a.type,this.params=a.params,this.defaultParams=a.defaultParams,this.renderer=a.renderer,this.category=a.category,this.addStrategy=a.addStrategy}return a}(),a("QueryPartDef",h),i=function(){function a(a,b){if(this.part=a,this.def=b,!this.def)throw{message:"Could not find query part "+a.type};a.params=a.params||g.default.clone(this.def.defaultParams),this.params=a.params,this.updateText()}return a.prototype.render=function(a){return this.def.renderer(this,a)},a.prototype.hasMultipleParamsInString=function(a,b){return a.indexOf(",")!==-1&&(this.def.params[b+1]&&this.def.params[b+1].optional)},a.prototype.updateParam=function(a,b){var c=this;return this.hasMultipleParamsInString(a,b)?void g.default.each(a.split(","),function(a,b){c.updateParam(a.trim(),b)}):(""===a&&this.def.params[b].optional?this.params.splice(b,1):this.params[b]=a,this.part.params=this.params,void this.updateText())},a.prototype.updateText=function(){if(0===this.params.length)return void(this.text=this.def.type+"()");var a=this.def.type+"(";a+=this.params.join(", "),a+=")",this.text=a},a}(),a("QueryPart",i)}}});