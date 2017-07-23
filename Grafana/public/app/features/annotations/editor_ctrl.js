/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","jquery","app/core/core_module"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b){var c=this;this.$scope=a,this.datasourceSrv=b,this.annotationDefaults={name:"",datasource:null,iconColor:"rgba(255, 96, 96, 1)",enable:!0,showIn:0,hide:!1},this.showOptions=[{text:"All Panels",value:0},{text:"Specific Panels",value:1}],a.ctrl=this,this.mode="list",this.datasources=b.getAnnotationSources(),this.annotations=a.dashboard.annotations.list,this.reset(),a.$watch("mode",function(a){"new"===a&&c.reset()})}return a.$inject=["$scope","datasourceSrv"],a.prototype.datasourceChanged=function(){var a=this;return this.datasourceSrv.get(this.currentAnnotation.datasource).then(function(b){a.currentDatasource=b})},a.prototype.edit=function(a){this.currentAnnotation=a,this.currentAnnotation.showIn=this.currentAnnotation.showIn||0,this.currentIsNew=!1,this.datasourceChanged(),this.mode="edit",e.default(".tooltip.in").remove()},a.prototype.reset=function(){this.currentAnnotation=c.default.copy(this.annotationDefaults),this.currentAnnotation.datasource=this.datasources[0].name,this.currentIsNew=!0,this.datasourceChanged()},a.prototype.update=function(){this.reset(),this.mode="list",this.$scope.broadcastRefresh()},a.prototype.add=function(){this.annotations.push(this.currentAnnotation),this.reset(),this.mode="list",this.$scope.broadcastRefresh(),this.$scope.dashboard.updateSubmenuVisibility()},a.prototype.removeAnnotation=function(a){var b=d.default.indexOf(this.annotations,a);this.annotations.splice(b,1),this.$scope.dashboard.updateSubmenuVisibility(),this.$scope.broadcastRefresh()},a}(),a("AnnotationsEditorCtrl",g),f.default.controller("AnnotationsEditorCtrl",g)}}});