/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","./linkSrv"],function(a,b){"use strict";a.module("grafana.directives").directive("panelLinksEditor",function(){return{scope:{panel:"="},restrict:"E",controller:"PanelLinksEditorCtrl",templateUrl:"public/app/features/panellinks/module.html",link:function(){}}}).controller("PanelLinksEditorCtrl",["$scope","backendSrv",function(a,c){a.panel.links=a.panel.links||[],a.addLink=function(){a.panel.links.push({type:"dashboard"})},a.searchDashboards=function(a,d){c.search({query:a}).then(function(a){var c=b.map(a,function(a){return a.title});d(c)})},a.dashboardChanged=function(a){c.search({query:a.dashboard}).then(function(c){var d=b.find(c,{title:a.dashboard});d&&(a.dashUri=d.uri,a.title=d.title)})},a.deleteLink=function(c){a.panel.links=b.without(a.panel.links,c)}}])});