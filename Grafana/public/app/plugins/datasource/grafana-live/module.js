/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","app/plugins/sdk"],function(a,b){"use strict";var c,d,e,f=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){a("Datasource",c.GrafanaStreamDS),e=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}return f(b,a),b}(d.QueryCtrl),e.templateUrl="partials/query.editor.html",a("QueryCtrl",e)}}});