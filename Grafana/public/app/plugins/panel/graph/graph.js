/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["jquery.flot","jquery.flot.selection","jquery.flot.time","jquery.flot.stack","jquery.flot.stackpercent","jquery.flot.fillbelow","jquery.flot.crosshair","jquery.flot.dashes","./jquery.flot.events","jquery","lodash","moment","app/core/utils/kbn","app/core/utils/ticks","app/core/core","./graph_tooltip","./threshold_manager","app/features/annotations/all","./histogram"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l;b&&b.id;return{setters:[function(a){},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a},function(a){k=a},function(a){l=a}],execute:function(){h.coreModule.directive("grafanaGraph",["$rootScope","timeSrv","popoverSrv",function(a,b,m){return{restrict:"A",template:"",link:function(a,n){function o(a){if(!M.legend.show||M.legend.rightSide)return 0;if(M.legend.alignAsTable){var b=d.default.filter(H,function(a){return a.hideFromLegend(M.legend)===!1}),c=23+21*b.length;return Math.min(c,Math.floor(a/2))}return 26}function p(){try{var a=K.height-o(K.height);return n.css("height",a+"px"),!0}catch(a){return console.log(a),!1}}function q(){return!H||(!p()||(0===Q||void 0))}function r(b){for(var e=b.getYAxes(),g=0;g<H.length;g++){var h=H[g],i=e[h.yaxis-1],j=f.default.valueFormats[M.yaxes[h.yaxis-1].format];if(d.default.isNumber(M.decimals))h.updateLegendValues(j,M.decimals,null);else{var k=(i.tickDecimals||-1)+1;h.updateLegendValues(j,k,i.scaledDecimals+2)}P.$$phase||a.$digest()}if(M.yaxes[0].label&&M.yaxes[0].show){c.default("<div class='axisLabel left-yaxis-label flot-temp-elem'></div>").text(M.yaxes[0].label).appendTo(n)}if(M.yaxes[1].label&&M.yaxes[1].show){c.default("<div class='axisLabel right-yaxis-label flot-temp-elem'></div>").text(M.yaxes[1].label).appendTo(n)}S.draw(b)}function s(a,b){var c=M.yaxes[0],d=M.yaxes[1];c.show&&c.label&&(b.left=20),d.show&&d.label&&(b.right=20);for(var e=a.getYAxes(),f=0;f<e.length;f++){var g=e[f],h=M.yaxes[f];g.options.max=null!==g.options.max?g.options.max:h.max,g.options.min=null!==g.options.min?g.options.min:h.min}}function t(a){for(var b=Number.MAX_VALUE,c=0;c<a.length;c++)if(a[c].stats.timeStep){if(M.bars){if(a[c].bars&&a[c].bars.show===!1)continue}else if("undefined"==typeof a[c].bars||"undefined"==typeof a[c].bars.show||!a[c].bars.show)continue;a[c].stats.timeStep<b&&(b=a[c].stats.timeStep)}return b}function u(){function a(a){try{I=c.default.plot(n,J,e),K.renderError&&(delete K.error,delete K.inspector)}catch(a){console.log("flotcharts error",a),K.error=a.message||"Render Error",K.renderError=!0,K.inspector={error:a}}a&&K.renderingCompleted()}if(Q=n.width(),!q()){S.prepare(n,H),M.dashes=!!M.lines&&M.dashes;for(var b=!!M.stack||null,e={hooks:{draw:[r],processOffset:[s]},legend:{show:!1},series:{stackpercent:!!M.stack&&M.percentage,stack:M.percentage?null:b,lines:{show:M.lines,zero:!1,fill:v(M.fill),lineWidth:M.dashes?0:M.linewidth,steps:M.steppedLine},dashes:{show:M.dashes,lineWidth:M.linewidth,dashLength:[M.dashLength,M.spaceLength]},bars:{show:M.bars,fill:1,barWidth:1,zero:!1,lineWidth:0},points:{show:M.points,fill:1,fillColor:!1,radius:M.points?M.pointradius:2},shadowSize:0},yaxes:[],xaxis:{},grid:{minBorderMargin:0,markings:[],backgroundColor:null,borderWidth:0,hoverable:!0,clickable:!0,color:"#c8c8c8",margin:{left:0,right:0}},selection:{mode:"x",color:"#666"},crosshair:{mode:"x"}},f=0;f<H.length;f++){var h=H[f];h.data=h.getFlotPairs(h.nullPointMode||M.nullPointMode),K.hiddenSeries[h.alias]&&(h.data=[],h.stack=!1)}switch(M.xaxis.mode){case"series":e.series.bars.barWidth=.7,e.series.bars.align="center";for(var f=0;f<H.length;f++){var h=H[f];h.data=[[f+1,h.stats[M.xaxis.values[0]]]]}y(e);break;case"histogram":var i=void 0,j=l.getSeriesValues(H);if(H.length&&j.length){var k=d.default.min(d.default.map(H,function(a){return a.stats.min})),m=d.default.max(d.default.map(H,function(a){return a.stats.max})),o=M.xaxis.buckets||Q/50;i=g.tickStep(k,m,o);var p=l.convertValuesToHistogram(j,i);H[0].data=p,H[0].alias=H[0].label=H[0].id="count",H=[H[0]],e.series.bars.barWidth=.8*i}else i=0;z(e,i);break;case"table":e.series.bars.barWidth=.7,e.series.bars.align="center",A(e);break;default:e.series.bars.barWidth=t(H)/1.5,x(e)}S.addFlotOptions(e,M),R.addFlotEvents(N,e),B(H,e),J=d.default.sortBy(H,function(a){return a.zindex}),w(M)?(a(!1),setTimeout(function(){a(!0)},50),O=M.legend.rightSide):a(!0)}}function v(a){return 0===a?.001:a/10}function w(a){return!!a.legend.rightSide||(null!==O&&a.legend.rightSide!==O||void 0)}function x(a){var b=Q/100,c=d.default.isUndefined(K.range.from)?null:K.range.from.valueOf(),e=d.default.isUndefined(K.range.to)?null:K.range.to.valueOf();a.xaxis={timezone:L.getTimezone(),show:M.xaxis.show,mode:"time",min:c,max:e,label:"Datetime",ticks:b,timeformat:G(b,c,e)}}function y(a){var b=d.default.map(H,function(a,b){return[b+1,a.alias]});a.xaxis={timezone:L.getTimezone(),show:M.xaxis.show,mode:null,min:0,max:b.length+1,label:"Datetime",ticks:b}}function z(a,b){var c,e,f,g=Q/50;if(H.length&&b){c=d.default.map(H[0].data,function(a){return a[0]}),e=d.default.min(c),f=d.default.max(c);for(var h=b,i=Math.floor((f-e)/h);i>g;)h*=2,i=Math.ceil((f-e)/h);e=Math.floor(e/h)*h,f=Math.ceil(f/h)*h,c=[];for(var j=e;j<=f;j+=h)c.push(j)}else c=g/2,e=0,f=1;a.xaxis={timezone:L.getTimezone(),show:M.xaxis.show,mode:null,min:e,max:f,label:"Histogram",ticks:c},F(a.xaxis,"short")}function A(a){var b=d.default.map(H,function(a,b){return d.default.map(a.datapoints,function(c,d){var e=b*a.datapoints.length+d;return[e+1,c[1]]})});b=d.default.flatten(b,!0),a.xaxis={timezone:L.getTimezone(),show:M.xaxis.show,mode:null,min:0,max:b.length+1,label:"Datetime",ticks:b}}function B(a,b){var c={position:"left",show:M.yaxes[0].show,index:1,logBase:M.yaxes[0].logBase||1,min:M.yaxes[0].min?d.default.toNumber(M.yaxes[0].min):null,max:M.yaxes[0].max?d.default.toNumber(M.yaxes[0].max):null};if(b.yaxes.push(c),d.default.find(a,{yaxis:2})){var e=d.default.clone(c);e.index=2,e.show=M.yaxes[1].show,e.logBase=M.yaxes[1].logBase||1,e.position="right",e.min=M.yaxes[1].min?d.default.toNumber(M.yaxes[1].min):null,e.max=M.yaxes[1].max?d.default.toNumber(M.yaxes[1].max):null,b.yaxes.push(e),C(b.yaxes[1],a),F(b.yaxes[1],M.percentage&&M.stack?"percent":M.yaxes[1].format)}C(b.yaxes[0],a),F(b.yaxes[0],M.percentage&&M.stack?"percent":M.yaxes[0].format)}function C(a,b){if(1!==a.logBase){var c=0===a.min;a.min<Number.MIN_VALUE&&(a.min=null),a.max<Number.MIN_VALUE&&(a.max=null);var d,e,f=a.max,g=a.min;for(e=0;e<b.length;e++)d=b[e],d.yaxis===a.index&&((!f||f<d.stats.max)&&(f=d.stats.max),(!g||g>d.stats.logmin)&&(g=d.stats.logmin));a.transform=function(b){return b<Number.MIN_VALUE?null:Math.log(b)/Math.log(a.logBase)},a.inverseTransform=function(b){return Math.pow(a.logBase,b)},f||g?f?g||(g=f*a.inverseTransform(-4)):f=g*a.inverseTransform(4):(f=a.inverseTransform(2),g=a.inverseTransform(-2)),g=a.min?a.inverseTransform(Math.ceil(a.transform(a.min))):a.min=a.inverseTransform(Math.floor(a.transform(g))),f=a.max?a.inverseTransform(Math.floor(a.transform(a.max))):a.max=a.inverseTransform(Math.ceil(a.transform(f))),!g||g<Number.MIN_VALUE||!f||f<Number.MIN_VALUE||(Number.isFinite(g)&&Number.isFinite(f)?(c&&(a.min=.1,g=1),a.ticks=D(g,f,a.logBase),c&&a.ticks.unshift(.1),a.ticks[a.ticks.length-1]>a.max&&(a.max=a.ticks[a.ticks.length-1]),a.tickDecimals=E(g)):(a.ticks=[1,2],delete a.min,delete a.max))}}function D(a,b,c){var d,e=[];for(d=a;d<=b;d*=c)e.push(d);var f=Math.ceil(K.height/25),g=e.length;if(g>f){var h=Math.ceil(g/f)*c;for(e=[],d=a;d<=b*h;d*=h)e.push(d)}return e}function E(a){return a?(a.toString().split(".")[1]||[]).length:0}function F(a,b){a.tickFormatter=function(a,c){return f.default.valueFormats[b](a,c.tickDecimals,c.scaledDecimals)}}function G(a,b,c){if(b&&c&&a){var d=c-b,e=d/a/1e3,f=864e5,g=31536e6;return e<=45?"%H:%M:%S":e<=7200||d<=f?"%H:%M":e<=8e4?"%m/%d %H:%M":e<=2419200||d<=g?"%m/%d":"%Y-%m"}return"%H:%M"}var H,I,J,K=a.ctrl,L=K.dashboard,M=K.panel,N=[],O=null,P=a.$root,Q=0,R=new k.EventManager(K,n,m),S=new j.ThresholdManager(K),T=new i.default(n,L,a,function(){return J});K.events.on("panel-teardown",function(){S=null,I&&(I.destroy(),I=null)}),K.events.on("render",function(a){H=a||H,H&&(N=K.annotations||[],u())}),h.appEvents.on("graph-hover",function(a){L.sharedTooltipModeEnabled()&&I&&a.panel.id!==M.id&&!K.otherPanelInFullscreenMode()&&T.show(a.pos)},a),h.appEvents.on("graph-hover-clear",function(a,b){I&&T.clear(I)},a),n.bind("plotselected",function(c,d){d.ctrlKey||d.metaKey||a.$apply(function(){b.setTime({from:e.default.utc(d.xaxis.from),to:e.default.utc(d.xaxis.to)})})}),n.bind("plotclick",function(a,b,c){if(b.ctrlKey||b.metaKey||R.event){b.x!==b.x1}}),a.$on("$destroy",function(){T.destroy(),n.off(),n.remove()})}}}])}}});