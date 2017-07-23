/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module","app/core/app_events"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d,e,f){this.$http=a,this.alertSrv=b,this.$rootScope=c,this.$q=d,this.$timeout=e,this.contextSrv=f,this.inFlightRequests={},this.HTTP_REQUEST_CANCELLED=-1}return a.$inject=["$http","alertSrv","$rootScope","$q","$timeout","contextSrv"],a.prototype.get=function(a,b){return this.request({method:"GET",url:a,params:b})},a.prototype.delete=function(a){return this.request({method:"DELETE",url:a})},a.prototype.post=function(a,b){return this.request({method:"POST",url:a,data:b})},a.prototype.patch=function(a,b){return this.request({method:"PATCH",url:a,data:b})},a.prototype.put=function(a,b){return this.request({method:"PUT",url:a,data:b})},a.prototype.requestErrorHandler=function(a){if(!a.isHandled){var b=a.data||{message:"Unexpected error"};if(c.default.isString(b)&&(b={message:b}),422===a.status)throw this.alertSrv.set("Validation failed",b.message,"warning",4e3),b;throw b.severity="error",a.status<500&&(b.severity="warning"),b.message&&this.alertSrv.set("Problem!",b.message,b.severity,1e4),b}},a.prototype.request=function(a){var b=this;a.retry=a.retry||0;var c=!a.url.match(/^http/),d=0===a.retry;return c&&(this.contextSrv.user&&this.contextSrv.user.orgId&&(a.headers=a.headers||{},a.headers["X-Grafana-Org-Id"]=this.contextSrv.user.orgId),0===a.url.indexOf("/")&&(a.url=a.url.substring(1))),this.$http(a).then(function(c){return"GET"!==a.method&&c&&c.data.message&&a.showSuccessAlert!==!1&&b.alertSrv.set(c.data.message,"","success",3e3),c.data},function(c){if(401===c.status&&d)return b.loginPing().then(function(){return a.retry=1,b.request(a)});throw b.$timeout(b.requestErrorHandler.bind(b,c),50),c})},a.prototype.addCanceler=function(a,b){a in this.inFlightRequests?this.inFlightRequests[a].push(b):this.inFlightRequests[a]=[b]},a.prototype.resolveCancelerIfExists=function(a){var b=this.inFlightRequests[a];!c.default.isUndefined(b)&&b.length&&b[0].resolve()},a.prototype.datasourceRequest=function(a){var b=this;a.retry=a.retry||0;var d=a.requestId;if(d){this.resolveCancelerIfExists(d);var f=this.$q.defer();a.timeout=f.promise,this.addCanceler(d,f)}var g=!a.url.match(/^http/),h=0===a.retry;return g&&(this.contextSrv.user&&this.contextSrv.user.orgId&&(a.headers=a.headers||{},a.headers["X-Grafana-Org-Id"]=this.contextSrv.user.orgId),0===a.url.indexOf("/")&&(a.url=a.url.substring(1)),a.headers&&a.headers.Authorization&&(a.headers["X-DS-Authorization"]=a.headers.Authorization,delete a.headers.Authorization)),this.$http(a).then(function(a){return e.default.emit("ds-request-response",a),a}).catch(function(d){if(d.status===b.HTTP_REQUEST_CANCELLED)throw{err:d,cancelled:!0};if(g&&h&&401===d.status)return b.loginPing().then(function(){return a.retry=1,f&&f.resolve(),b.datasourceRequest(a)});throw c.default.isString(d.data)&&500===d.status&&(d.data={error:d.statusText,response:d.data}),d.data&&!d.data.message&&c.default.isString(d.data.error)&&(d.data.message=d.data.error),e.default.emit("ds-request-error",d),d}).finally(function(){a.requestId&&b.inFlightRequests[a.requestId].shift()})},a.prototype.loginPing=function(){return this.request({url:"/api/login/ping",method:"GET",retry:1})},a.prototype.search=function(a){return this.get("/api/search",a)},a.prototype.getDashboard=function(a,b){return this.get("/api/dashboards/"+a+"/"+b)},a.prototype.saveDashboard=function(a,b){return b=b||{},this.post("/api/dashboards/db/",{dashboard:a,overwrite:b.overwrite===!0,message:b.message||""})},a}(),a("BackendSrv",f),d.default.service("backendSrv",f)}}});