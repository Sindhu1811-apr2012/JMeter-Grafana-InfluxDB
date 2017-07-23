/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","./query_def"],function(a,b,c){"use strict";var d=a.module("grafana.directives");d.directive("elasticMetricAgg",function(){return{templateUrl:"public/app/plugins/datasource/elasticsearch/partials/metric_agg.html",controller:"ElasticMetricAggCtrl",restrict:"E",scope:{target:"=",index:"=",onChange:"&",getFields:"&",esVersion:"="}}}),d.controller("ElasticMetricAggCtrl",["$scope","uiSegmentSrv","$q","$rootScope",function(a,d,e,f){var g=a.target.metrics;a.metricAggTypes=c.getMetricAggTypes(a.esVersion),a.extendedStats=c.extendedStats,a.pipelineAggOptions=[],a.modelSettingsValues={},a.init=function(){a.agg=g[a.index],a.validateModel(),a.updatePipelineAggOptions()},a.updatePipelineAggOptions=function(){a.pipelineAggOptions=c.getPipelineAggOptions(a.target)},f.onAppEvent("elastic-query-updated",function(){a.index=b.indexOf(g,a.agg),a.updatePipelineAggOptions(),a.validateModel()},a),a.validateModel=function(){if(a.isFirst=0===a.index,a.isSingle=1===g.length,a.settingsLinkText="",a.aggDef=b.find(a.metricAggTypes,{value:a.agg.type}),c.isPipelineAgg(a.agg.type)){a.agg.pipelineAgg=a.agg.pipelineAgg||"select metric",a.agg.field=a.agg.pipelineAgg;var d=c.getPipelineOptions(a.agg);d.length>0&&(b.each(d,function(b){a.agg.settings[b.text]=a.agg.settings[b.text]||b.default}),a.settingsLinkText="Options")}else a.agg.field||(a.agg.field="select field");switch(a.agg.type){case"cardinality":var e=a.agg.settings.precision_threshold||"";a.settingsLinkText="Precision threshold: "+e;break;case"percentiles":a.agg.settings.percents=a.agg.settings.percents||[25,50,75,95,99],a.settingsLinkText="Values: "+a.agg.settings.percents.join(",");break;case"extended_stats":0===b.keys(a.agg.meta).length&&(a.agg.meta.std_deviation_bounds_lower=!0,a.agg.meta.std_deviation_bounds_upper=!0);var f=b.reduce(a.agg.meta,function(c,d,e){if(d){var f=b.find(a.extendedStats,{value:e});c.push(f.text)}return c},[]);a.settingsLinkText="Stats: "+f.join(", ");break;case"moving_avg":a.movingAvgModelTypes=c.movingAvgModelOptions,a.modelSettings=c.getMovingAvgSettings(a.agg.settings.model,!0),a.updateMovingAvgModelSettings();break;case"raw_document":a.agg.settings.size=a.agg.settings.size||500,a.settingsLinkText="Size: "+a.agg.settings.size,a.target.metrics.splice(0,a.target.metrics.length,a.agg),a.target.bucketAggs=[]}if(a.aggDef.supportsInlineScript){var h=a.agg.inlineScript;h?a.agg.settings.script={inline:h}:delete a.agg.settings.script,""===a.settingsLinkText&&(a.settingsLinkText="Options")}},a.toggleOptions=function(){a.showOptions=!a.showOptions,a.updatePipelineAggOptions()},a.onChangeInternal=function(){a.onChange()},a.updateMovingAvgModelSettings=function(){for(var b=[],d=c.getMovingAvgSettings(a.agg.settings.model,!1),e=0;e<d.length;e++)b.push(d[e].value);for(var f in a.agg.settings.settings)null!==a.agg.settings.settings[f]&&b.indexOf(f)!==-1||delete a.agg.settings.settings[f]},a.onChangeClearInternal=function(){delete a.agg.settings.minimize,a.onChange()},a.onTypeChange=function(){a.agg.settings={},a.agg.meta={},a.showOptions=!1,a.updatePipelineAggOptions(),a.onChange()},a.getFieldsInternal=function(){return"cardinality"===a.agg.type?a.getFields():a.getFields({$fieldType:"number"})},a.addMetricAgg=function(){var c=g.length,d=b.reduce(a.target.bucketAggs.concat(a.target.metrics),function(a,b){return parseInt(b.id)>a?parseInt(b.id):a},0);g.splice(c,0,{type:"count",field:"select field",id:(d+1).toString()}),a.onChange()},a.removeMetricAgg=function(){g.splice(a.index,1),a.onChange()},a.toggleShowMetric=function(){a.agg.hide=!a.agg.hide,a.agg.hide||delete a.agg.hide,a.onChange()},a.init()}])});