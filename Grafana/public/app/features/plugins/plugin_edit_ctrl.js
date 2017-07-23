/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c,d,e,f,g){this.$scope=a,this.$rootScope=b,this.backendSrv=c,this.$routeParams=d,this.$sce=e,this.$http=f,this.navModelSrv=g,this.navModel=g.getPluginsNav(),this.model={},this.pluginId=d.pluginId,this.tabIndex=0,this.tabs=["Readme"],this.preUpdateHook=function(){return Promise.resolve()},this.postUpdateHook=function(){return Promise.resolve()}}return a.$inject=["$scope","$rootScope","backendSrv","$routeParams","$sce","$http","navModelSrv"],a.prototype.init=function(){var a=this;return this.backendSrv.get("/api/plugins/"+this.pluginId+"/settings").then(function(b){return a.model=b,a.pluginIcon=a.getPluginIcon(a.model.type),a.model.dependencies.plugins.forEach(function(b){b.icon=a.getPluginIcon(b.type)}),a.includes=d.default.map(b.includes,function(b){return b.icon=a.getPluginIcon(b.type),b}),"app"===a.model.type&&(a.hasDashboards=d.default.find(b.includes,{type:"dashboard"}),a.hasDashboards&&a.tabs.unshift("Dashboards"),a.tabs.unshift("Config"),a.tabIndex=0),a.initReadme()})},a.prototype.initReadme=function(){var a=this;return this.backendSrv.get("/api/plugins/"+this.pluginId+"/readme").then(function(b){return System.import("remarkable").then(function(c){var d=new c;a.readmeHtml=a.$sce.trustAsHtml(d.render(b))})})},a.prototype.getPluginIcon=function(a){switch(a){case"datasource":return"icon-gf icon-gf-datasources";case"panel":return"icon-gf icon-gf-panel";case"app":return"icon-gf icon-gf-apps";case"page":return"icon-gf icon-gf-endpoint-tiny";case"dashboard":return"icon-gf icon-gf-dashboard"}},a.prototype.update=function(){var a=this;this.preUpdateHook().then(function(){var b=d.default.extend({enabled:a.model.enabled,pinned:a.model.pinned,jsonData:a.model.jsonData,secureJsonData:a.model.secureJsonData},{});return a.backendSrv.post("/api/plugins/"+a.pluginId+"/settings",b)}).then(this.postUpdateHook).then(function(a){window.location.href=window.location.href})},a.prototype.importDashboards=function(){return Promise.resolve()},a.prototype.setPreUpdateHook=function(a){this.preUpdateHook=a},a.prototype.setPostUpdateHook=function(a){this.postUpdateHook=a},a.prototype.updateAvailable=function(){var a=this.$scope.$new(!0);a.plugin=this.model,this.$rootScope.appEvent("show-modal",{src:"public/app/features/plugins/partials/update_instructions.html",scope:a})},a.prototype.enable=function(){this.model.enabled=!0,this.model.pinned=!0,this.update()},a.prototype.disable=function(){this.model.enabled=!1,this.model.pinned=!1,this.update()},a}(),a("PluginEditCtrl",e),c.default.module("grafana.controllers").controller("PluginEditCtrl",e)}}});