/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment","app/core/utils/kbn"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){this.panel=a,this.table=b,this.isUtc=c,this.sanitize=d,this.initColumns()}return a.prototype.setTable=function(a){this.table=a,this.initColumns()},a.prototype.initColumns=function(){this.formatters=[],this.colorState={};for(var a=0;a<this.table.columns.length;a++){var b=this.table.columns[a];b.title=b.text;for(var c=0;c<this.panel.styles.length;c++){var d=this.panel.styles[c],f=e.default.stringToJsRegex(d.pattern);if(b.text.match(f)){b.style=d,d.alias&&(b.title=b.text.replace(f,d.alias));break}}this.formatters[a]=this.createColumnFormatter(b)}},a.prototype.getColorForValue=function(a,b){if(!b.thresholds)return null;for(var d=b.thresholds.length;d>0;d--)if(a>=b.thresholds[d-1])return b.colors[d];return c.default.first(b.colors)},a.prototype.defaultCellFormatter=function(a,b){return null===a||void 0===a||void 0===a?"":(c.default.isArray(a)&&(a=a.join(", ")),b&&b.sanitize?this.sanitize(a):c.default.escape(a))},a.prototype.createColumnFormatter=function(a){var b=this;if(!a.style)return this.defaultCellFormatter;if("hidden"===a.style.type)return function(a){};if("date"===a.style.type)return function(e){if(void 0===e||null===e)return"-";c.default.isArray(e)&&(e=e[0]);var f=d.default(e);return b.isUtc&&(f=f.utc()),f.format(a.style.dateFormat)};if("number"===a.style.type){var f=e.default.valueFormats[a.unit||a.style.unit];return function(d){return null===d||void 0===d?"-":c.default.isString(d)?b.defaultCellFormatter(d,a.style):(a.style.colorMode&&(b.colorState[a.style.colorMode]=b.getColorForValue(d,a.style)),f(d,a.style.decimals,null))}}return function(c){return b.defaultCellFormatter(c,a.style)}},a.prototype.formatColumnValue=function(a,b){return this.formatters[a]?this.formatters[a](b):b},a.prototype.renderCell=function(a,b,c){void 0===c&&(c=!1),b=this.formatColumnValue(a,b);var d="",e="";this.colorState.cell?(d=' style="background-color:'+this.colorState.cell+';color: white"',this.colorState.cell=null):this.colorState.value&&(d=' style="color:'+this.colorState.value+'"',this.colorState.value=null);var f="";c&&(f='<div class="table-panel-width-hack">'+this.table.columns[a].title+"</div>"),void 0===b?(d=' style="display:none;"',this.table.columns[a].hidden=!0):this.table.columns[a].hidden=!1;var g=this.table.columns[a].style;return g&&g.preserveFormat&&(e=' class="table-panel-cell-pre" '),"<td"+e+d+">"+b+f+"</td>"},a.prototype.render=function(a){for(var b=this.panel.pageSize||100,c=a*b,d=Math.min(c+b,this.table.rows.length),e="",f=c;f<d;f++){for(var g=this.table.rows[f],h="",i="",j=0;j<this.table.columns.length;j++)h+=this.renderCell(j,g[j],f===c);this.colorState.row&&(i=' style="background-color:'+this.colorState.row+';color: white"',this.colorState.row=null),e+="<tr "+i+">"+h+"</tr>"}return e},a.prototype.render_values=function(){for(var a=[],b=0;b<this.table.rows.length;b++){for(var c=this.table.rows[b],d=[],e=0;e<this.table.columns.length;e++)d.push(this.formatColumnValue(e,c[e]));a.push(d)}return{columns:this.table.columns,rows:a}},a}(),a("TableRenderer",f)}}});