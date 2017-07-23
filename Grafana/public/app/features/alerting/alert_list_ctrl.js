/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment","app/core/core","./alert_def"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d){this.backendSrv=a,this.$location=b,this.$scope=c,this.stateFilters=[{text:"All",value:null},{text:"OK",value:"ok"},{text:"Alerting",value:"alerting"},{text:"No Data",value:"no_data"},{text:"Paused",value:"paused"}],this.filters={state:"ALL"},this.navModel=d.getAlertingNav(0);var e=b.search();this.filters.state=e.state||null,this.loadAlerts()}return a.$inject=["backendSrv","$location","$scope","navModelSrv"],a.prototype.filtersChanged=function(){this.$location.search(this.filters)},a.prototype.loadAlerts=function(){var a=this;this.backendSrv.get("/api/alerts",this.filters).then(function(b){a.alerts=c.default.map(b,function(a){return a.stateModel=f.default.getStateDisplayModel(a.state),a.newStateDateAgo=d.default(a.newStateDate).fromNow().replace(" ago",""),a.evalData&&a.evalData.no_data&&(a.no_data=!0),a})})},a.prototype.pauseAlertRule=function(a){var b=c.default.find(this.alerts,{id:a}),d={paused:"paused"!==b.state};this.backendSrv.post("/api/alerts/"+b.id+"/pause",d).then(function(a){b.state=a.state,b.stateModel=f.default.getStateDisplayModel(a.state)})},a.prototype.openHowTo=function(){e.appEvents.emit("show-modal",{src:"public/app/features/alerting/partials/alert_howto.html",modalClass:"confirm-modal",model:{}})},a}(),a("AlertListCtrl",g),e.coreModule.controller("AlertListCtrl",g)}}});