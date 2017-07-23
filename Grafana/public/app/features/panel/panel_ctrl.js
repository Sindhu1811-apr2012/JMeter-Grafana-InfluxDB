/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","lodash","jquery","app/core/profiler","remarkable","app/core/core"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){l=a}],execute:function(){h=25,i=9,j=5,k=2,m=function(){function a(a,b){var d=this;this.$injector=b,this.$scope=a,this.$timeout=b.get("$timeout"),this.editorTabIndex=0,this.events=new l.Emitter,this.timing={};var e=c.default.panels[this.panel.type];e&&(this.pluginId=e.id,this.pluginName=e.name),a.$on("refresh",function(){return d.refresh()}),a.$on("render",function(){return d.render()}),a.$on("$destroy",function(){d.events.emit("panel-teardown"),d.events.removeAllListeners()}),this.panel.isNew&&delete this.panel.isNew}return a.prototype.init=function(){this.calculatePanelHeight(),this.publishAppEvent("panel-initialized",{scope:this.$scope}),this.events.emit("panel-initialized")},a.prototype.renderingCompleted=function(){f.profiler.renderingCompleted(this.panel.id,this.timing)},a.prototype.refresh=function(){this.events.emit("refresh",null)},a.prototype.publishAppEvent=function(a,b){this.$scope.$root.appEvent(a,b)},a.prototype.changeView=function(a,b){this.publishAppEvent("panel-change-view",{fullscreen:a,edit:b,panelId:this.panel.id})},a.prototype.viewPanel=function(){this.changeView(!0,!1)},a.prototype.editPanel=function(){this.changeView(!0,!0)},a.prototype.exitFullscreen=function(){this.changeView(!1,!1)},a.prototype.initEditMode=function(){var a=this;this.editorTabs=[],this.addEditorTab("General","public/app/partials/panelgeneral.html"),this.editModeInitiated=!0,this.events.emit("init-edit-mode",null);var b=(this.$injector.get("$routeParams").tab||"").toLowerCase();b&&this.editorTabs.forEach(function(c,d){c.title.toLowerCase()===b&&(a.editorTabIndex=d)})},a.prototype.changeTab=function(a){this.editorTabIndex=a;var b=this.$injector.get("$route");b.current.params.tab=this.editorTabs[a].title.toLowerCase(),b.updateParams()},a.prototype.addEditorTab=function(a,b,c){var e={title:a,directiveFn:b};d.default.isString(b)&&(e.directiveFn=function(){return{templateUrl:b}}),c?this.editorTabs.splice(c,0,e):this.editorTabs.push(e)},a.prototype.getMenu=function(){var a=[];return a.push({text:"View",click:"ctrl.viewPanel(); dismiss();"}),a.push({text:"Edit",click:"ctrl.editPanel(); dismiss();",role:"Editor"}),this.fullscreen||a.push({text:"Duplicate",click:"ctrl.duplicate()",role:"Editor"}),a.push({text:"Share",click:"ctrl.sharePanel(); dismiss();"}),a},a.prototype.getExtendedMenu=function(){var a=[{text:"Panel JSON",click:"ctrl.editPanelJson(); dismiss();"}];return this.events.emit("init-panel-actions",a),a},a.prototype.otherPanelInFullscreenMode=function(){return this.dashboard.meta.fullscreen&&!this.fullscreen},a.prototype.calculatePanelHeight=function(){if(this.fullscreen){var a=e.default(window).height(),b=Math.floor(.4*a),c=Math.floor(.8*a);this.containerHeight=this.editMode?b:c}else this.containerHeight=this.panel.height||this.row.height,d.default.isString(this.containerHeight)&&(this.containerHeight=parseInt(this.containerHeight.replace("px",""),10));this.height=this.containerHeight-(k+j+(this.panel.title?h:i))},a.prototype.render=function(a){this.otherPanelInFullscreenMode()||(this.calculatePanelHeight(),this.timing.renderStart=(new Date).getTime(),this.events.emit("render",a))},a.prototype.toggleEditorHelp=function(a){return this.editorHelpIndex===a?void(this.editorHelpIndex=null):void(this.editorHelpIndex=a)},a.prototype.duplicate=function(){var a=this;this.dashboard.duplicatePanel(this.panel,this.row),this.$timeout(function(){a.$scope.$root.$broadcast("render")})},a.prototype.updateColumnSpan=function(a){var b=this;this.panel.span=Math.min(Math.max(Math.floor(this.panel.span+a),1),12),this.row.panelSpanChanged(),this.$timeout(function(){b.render()})},a.prototype.removePanel=function(){this.row.removePanel(this.panel)},a.prototype.editPanelJson=function(){this.publishAppEvent("show-json-editor",{object:this.panel,updateHandler:this.replacePanel.bind(this)})},a.prototype.replacePanel=function(a,b){var c=this,e=(this.row,d.default.indexOf(this.row.panels,b));this.row.panels.splice(e,1),this.$timeout(function(){a.id=b.id,a.span=b.span,c.row.panels.splice(e,0,a)})},a.prototype.sharePanel=function(){var a=this.$scope.$new();a.panel=this.panel,a.dashboard=this.dashboard,this.publishAppEvent("show-modal",{src:"public/app/features/dashboard/partials/shareModal.html",scope:a})},a.prototype.getInfoMode=function(){return this.error?"error":this.panel.description?"info":this.panel.links&&this.panel.links.length?"links":""},a.prototype.getInfoContent=function(a){var b=this.panel.description;"tooltip"===a.mode&&(b=this.error||this.panel.description);var c=this.$injector.get("linkSrv"),d=this.$injector.get("templateSrv"),e=d.replace(b,this.panel.scopedVars),f='<div class="markdown-html">';if(f+=(new g.default).render(e),this.panel.links&&this.panel.links.length>0){f+="<ul>";for(var h=0,i=this.panel.links;h<i.length;h++){var j=i[h],k=c.getPanelLinkAnchorInfo(j,this.panel.scopedVars);f+='<li><a class="panel-menu-link" href="'+k.href+'" target="'+k.target+'">'+k.title+"</a></li>"}f+="</ul>"}return f+"</div>"},a.prototype.openInspector=function(){var a=this.$scope.$new();a.panel=this.panel,a.dashboard=this.dashboard,a.panelInfoHtml=this.getInfoContent({mode:"inspector"}),a.inspector=e.default.extend(!0,{},this.inspector),this.publishAppEvent("show-modal",{src:"public/app/features/dashboard/partials/inspector.html",scope:a})},a}(),a("PanelCtrl",m)}}});