/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","../core_module"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c,d){this.$scope=a,this.$location=b,this.contextSrv=c,this.backendSrv=d,c.sidemenu=!1,a.ctrl=this,a.formModel={};var e=b.search();a.formModel.orgName=e.email,a.formModel.email=e.email,a.formModel.username=e.email,a.formModel.code=e.code,a.verifyEmailEnabled=!1,a.autoAssignOrg=!1,d.get("/api/user/signup/options").then(function(b){a.verifyEmailEnabled=b.verifyEmailEnabled,a.autoAssignOrg=b.autoAssignOrg})}return a.$inject=["$scope","$location","contextSrv","backendSrv"],a.prototype.submit=function(){this.$scope.signUpForm.$valid&&this.backendSrv.post("/api/user/signup/step2",this.$scope.formModel).then(function(a){"redirect-to-select-org"===a.code?window.location.href=c.default.appSubUrl+"/profile/select-org?signup=1":window.location.href=c.default.appSubUrl+"/"})},a}(),a("SignUpCtrl",e),d.default.controller("SignUpCtrl",e)}}});