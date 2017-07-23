/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/kbn","./variable"],function(a,b){"use strict";function c(){return{text:"None",value:"",isNone:!0}}var d,e,f,g;b&&b.id;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d,e){this.model=a,this.datasourceSrv=b,this.templateSrv=c,this.variableSrv=d,this.$q=e,this.defaults={type:"query",label:null,query:"",regex:"",sort:0,datasource:null,refresh:0,hide:0,name:"",multi:!1,includeAll:!1,allValue:null,options:[],current:{},tags:[],useTags:!1,tagsQuery:"",tagValuesQuery:""},f.assignModelProperties(this,a,this.defaults)}return a.$inject=["model","datasourceSrv","templateSrv","variableSrv","$q"],a.prototype.getSaveModel=function(){return f.assignModelProperties(this.model,this,this.defaults),0!==this.refresh&&(this.model.options=[]),this.model},a.prototype.setValue=function(a){return this.variableSrv.setOptionAsCurrent(this,a)},a.prototype.setValueFromUrl=function(a){return this.variableSrv.setOptionFromUrl(this,a)},a.prototype.getValueForUrl=function(){return"All"===this.current.text?"All":this.current.value},a.prototype.updateOptions=function(){return this.datasourceSrv.get(this.datasource).then(this.updateOptionsFromMetricFindQuery.bind(this)).then(this.updateTags.bind(this)).then(this.variableSrv.validateVariableSelectionState.bind(this.variableSrv,this))},a.prototype.updateTags=function(a){var b=this;return this.useTags?a.metricFindQuery(this.tagsQuery).then(function(c){b.tags=[];for(var d=0;d<c.length;d++)b.tags.push(c[d].text);return a}):(delete this.tags,a)},a.prototype.getValuesForTag=function(a){var b=this;return this.datasourceSrv.get(this.datasource).then(function(c){var e=b.tagValuesQuery.replace("$tag",a);return c.metricFindQuery(e).then(function(a){return d.default.map(a,function(a){return a.text})})})},a.prototype.updateOptionsFromMetricFindQuery=function(a){var b=this;return a.metricFindQuery(this.query).then(function(d){return b.options=b.metricNamesToVariableValues(d),b.includeAll&&b.addAllOption(),b.options.length||b.options.push(c()),a})},a.prototype.addAllOption=function(){this.options.unshift({text:"All",value:"$__all"})},a.prototype.metricNamesToVariableValues=function(a){var b,c,f,g;for(c=[],this.regex&&(b=e.default.stringToJsRegex(this.templateSrv.replace(this.regex,{},"regex"))),f=0;f<a.length;f++){var h=a[f],i=void 0===h.text||null===h.text?h.value:h.text,j=void 0===h.value||null===h.value?h.text:h.value;if(d.default.isNumber(j)&&(j=j.toString()),d.default.isNumber(i)&&(i=i.toString()),b){if(g=b.exec(j),!g)continue;g.length>1&&(j=g[1],i=g[1])}c.push({text:i,value:j})}return c=d.default.uniqBy(c,"value"),this.sortVariableValues(c,this.sort)},a.prototype.sortVariableValues=function(a,b){if(0===b)return a;var c=Math.ceil(b/2),e=b%2===0;return 1===c?a=d.default.sortBy(a,"text"):2===c&&(a=d.default.sortBy(a,function(a){var b=a.text.match(/.*?(\d+).*/);return!b||b.length<2?-1:parseInt(b[1],10)})),e&&(a=a.reverse()),a},a.prototype.dependsOn=function(a){return f.containsVariable(this.query,this.datasource,a.name)},a}(),a("QueryVariable",g),f.variableTypes.query={name:"Query",ctor:g,description:"Variable values are fetched from a datasource query",supportsMulti:!0}}}});