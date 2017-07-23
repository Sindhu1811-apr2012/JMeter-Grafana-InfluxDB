/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","../../../features/panel/panel_ctrl"],function(a,b){"use strict";var c,d,e,f=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(a){function b(b,d,e,f){var g=a.call(this,b,d)||this;return g.backendSrv=e,g.$location=f,g.panelDefaults={},c.default.defaults(g.panel,g.panelDefaults),g.events.on("init-edit-mode",g.onInitEditMode.bind(g)),g.pluginList=[],g.viewModel=[{header:"Installed Apps",list:[],type:"app"},{header:"Installed Panels",list:[],type:"panel"},{header:"Installed Datasources",list:[],type:"datasource"}],g.update(),g}return f(b,a),b.$inject=["$scope","$injector","backendSrv","$location"],b.prototype.onInitEditMode=function(){this.editorTabIndex=1,this.addEditorTab("Options","public/app/plugins/panel/pluginlist/editor.html")},b.prototype.gotoPlugin=function(a,b){b&&b.stopPropagation(),this.$location.url("plugins/"+a.id+"/edit")},b.prototype.updateAvailable=function(a,b){b.stopPropagation(),b.preventDefault();var c=this.$scope.$new(!0);c.plugin=a,this.publishAppEvent("show-modal",{src:"public/app/features/plugins/partials/update_instructions.html",scope:c})},b.prototype.update=function(){var a=this;this.backendSrv.get("api/plugins",{embedded:0,core:0}).then(function(b){a.pluginList=b,a.viewModel[0].list=c.default.filter(b,{type:"app"}),a.viewModel[1].list=c.default.filter(b,{type:"panel"}),a.viewModel[2].list=c.default.filter(b,{type:"datasource"});for(var d=0,e=a.pluginList;d<e.length;d++){var f=e[d];f.hasUpdate?f.state="has-update":f.enabled||(f.state="not-enabled")}})},b}(d.PanelCtrl),e.templateUrl="module.html",a("PluginListCtrl",e),a("PanelCtrl",e)}}});