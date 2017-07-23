/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","./query_part","app/core/utils/kbn"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c){this.target=a,this.templateSrv=b,this.scopedVars=c,a.policy=a.policy||"default",a.dsType="influxdb",a.resultFormat=a.resultFormat||"time_series",a.orderByTime=a.orderByTime||"ASC",a.tags=a.tags||[],a.groupBy=a.groupBy||[{type:"time",params:["$__interval"]},{type:"fill",params:["null"]}],a.select=a.select||[[{type:"field",params:["value"]},{type:"mean",params:[]}]],this.updateProjection()}return a.$inject=["target","templateSrv","scopedVars"],a.prototype.updateProjection=function(){this.selectModels=c.default.map(this.target.select,function(a){return c.default.map(a,d.default.create)}),this.groupByParts=c.default.map(this.target.groupBy,d.default.create)},a.prototype.updatePersistedParts=function(){this.target.select=c.default.map(this.selectModels,function(a){return c.default.map(a,function(a){return{type:a.def.type,params:a.params}})})},a.prototype.hasGroupByTime=function(){return c.default.find(this.target.groupBy,function(a){return"time"===a.type})},a.prototype.hasFill=function(){return c.default.find(this.target.groupBy,function(a){return"fill"===a.type})},a.prototype.addGroupBy=function(a){var b=a.match(/^(\w+)\((.*)\)$/),c=b[1],e=b[2],f=d.default.create({type:c,params:[e]}),g=this.target.groupBy.length;0===g?this.target.groupBy.push(f.part):"time"===c?this.target.groupBy.splice(0,0,f.part):"tag"===c&&"fill"===this.target.groupBy[g-1].type?this.target.groupBy.splice(g-1,0,f.part):this.target.groupBy.push(f.part),this.updateProjection()},a.prototype.removeGroupByPart=function(a,b){var e=d.default.getCategories();"time"===a.def.type&&(this.target.groupBy=c.default.filter(this.target.groupBy,function(a){return"fill"!==a.type}),this.target.select=c.default.map(this.target.select,function(a){return c.default.filter(a,function(a){var b=d.default.create(a);return b.def.category!==e.Aggregations&&b.def.category!==e.Selectors})})),this.target.groupBy.splice(b,1),this.updateProjection()},a.prototype.removeSelect=function(a){this.target.select.splice(a,1),this.updateProjection()},a.prototype.removeSelectPart=function(a,b){if("field"===b.def.type){if(this.selectModels.length>1){var d=c.default.indexOf(this.selectModels,a);this.selectModels.splice(d,1)}}else{var e=c.default.indexOf(a,b);a.splice(e,1)}this.updatePersistedParts()},a.prototype.addSelectPart=function(a,b){var c=d.default.create({type:b});c.def.addStrategy(a,c,this),this.updatePersistedParts()},a.prototype.renderTagCondition=function(a,b,c){var d="",e=a.operator,f=a.value;return b>0&&(d=(a.condition||"AND")+" "),e||(e=/^\/.*\/$/.test(f)?"=~":"="),"=~"!==e&&"!~"!==e?(c&&(f=this.templateSrv.replace(f,this.scopedVars)),">"!==e&&"<"!==e&&(f="'"+f.replace(/\\/g,"\\\\")+"'")):c&&(f=this.templateSrv.replace(f,this.scopedVars,"regex")),d+'"'+a.key+'" '+e+" "+f},a.prototype.getMeasurementAndPolicy=function(a){var b=this.target.policy,c=this.target.measurement||"measurement";return c.match("^/.*/$")?a&&(c=this.templateSrv.replace(c,this.scopedVars,"regex")):c='"'+c+'"',b="default"!==b?'"'+this.target.policy+'".':"",b+c},a.prototype.interpolateQueryStr=function(a,b,d){if(!b.multi&&!b.includeAll)return a;if("string"==typeof a)return e.default.regexEscape(a);var f=c.default.map(a,e.default.regexEscape);return"("+f.join("|")+")"},a.prototype.render=function(a){var b=this,d=this.target;if(d.rawQuery)return a?this.templateSrv.replace(d.query,this.scopedVars,this.interpolateQueryStr):d.query;var e,f,g="SELECT ";for(e=0;e<this.selectModels.length;e++){var h=this.selectModels[e],i="";for(f=0;f<h.length;f++){var j=h[f];i=j.render(i)}e>0&&(g+=", "),g+=i}g+=" FROM "+this.getMeasurementAndPolicy(a)+" WHERE ";var k=c.default.map(d.tags,function(c,d){return b.renderTagCondition(c,d,a)});g+=k.join(" "),g+=(k.length>0?" AND ":"")+"$timeFilter";var l="";for(e=0;e<this.groupByParts.length;e++){var m=this.groupByParts[e];e>0&&(l+="fill"===m.def.type?" ":", "),l+=m.render("")}return l.length&&(g+=" GROUP BY "+l),d.fill&&(g+=" fill("+d.fill+")"),"DESC"===d.orderByTime&&(g+=" ORDER BY time DESC"),d.limit&&(g+=" LIMIT "+d.limit),d.slimit&&(g+=" SLIMIT "+d.slimit),g},a.prototype.renderAdhocFilters=function(a){var b=this,d=c.default.map(a,function(a,c){return b.renderTagCondition(a,c,!1)});return d.join(" ")},a}(),a("default",f)}}});