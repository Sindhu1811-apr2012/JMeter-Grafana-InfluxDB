/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash","jquery","../core_module"],function(a,b,c){"use strict";c.default.directive("dashClass",function(){return{link:function(b,c){b.onAppEvent("panel-fullscreen-enter",function(){c.toggleClass("panel-in-fullscreen",!0)}),b.onAppEvent("panel-fullscreen-exit",function(){c.toggleClass("panel-in-fullscreen",!1)});var d;b.$watch("dashboard.hideControls",function(){if(b.dashboard){var a=b.dashboard.hideControls;d!==a&&(c.toggleClass("hide-controls",a),d=a)}}),b.$watch("playlistSrv",function(b){c.toggleClass("playlist-active",a.isObject(b))})}}})});