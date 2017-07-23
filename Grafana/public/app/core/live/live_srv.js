/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/config","vendor/npm/rxjs/Observable"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(){this.observers={}}return a.prototype.getWebSocketUrl=function(){var a=window.location;return("https:"===a.protocol?"wss://":"ws://")+a.host+d.default.appSubUrl+"/ws"},a.prototype.getConnection=function(){var a=this;return this.initPromise?this.initPromise:this.conn&&1===this.conn.readyState?Promise.resolve(this.conn):(this.initPromise=new Promise(function(b,c){console.log("Live: connecting..."),a.conn=new WebSocket(a.getWebSocketUrl()),a.conn.onclose=function(b){console.log("Live: websocket onclose",b),c({message:"Connection closed"}),a.initPromise=null,setTimeout(a.reconnect.bind(a),2e3)},a.conn.onmessage=function(b){a.handleMessage(b.data)},a.conn.onerror=function(b){a.initPromise=null,c({message:"Connection error"}),console.log("Live: websocket error",b)},a.conn.onopen=function(c){console.log("opened"),a.initPromise=null,b(a.conn)}}),this.initPromise)},a.prototype.handleMessage=function(a){if(a=JSON.parse(a),!a.stream)return void console.log("Error: stream message without stream!",a);var b=this.observers[a.stream];return b?void b.next(a):void this.removeObserver(a.stream,null)},a.prototype.reconnect=function(){var a=this;0!==c.default.keys(this.observers).length&&(console.log("LiveSrv: Reconnecting"),this.getConnection().then(function(b){c.default.each(a.observers,function(b,c){a.send({action:"subscribe",stream:c})})}))},a.prototype.send=function(a){this.conn.send(JSON.stringify(a))},a.prototype.addObserver=function(a,b){var c=this;this.observers[a]=b,this.getConnection().then(function(b){c.send({action:"subscribe",stream:a})})},a.prototype.removeObserver=function(a,b){var c=this;console.log("unsubscribe",a),delete this.observers[a],this.getConnection().then(function(b){c.send({action:"unsubscribe",stream:a})})},a.prototype.subscribe=function(a){var b=this;return console.log("LiveSrv.subscribe: "+a),e.Observable.create(function(c){return b.addObserver(a,c),function(){b.removeObserver(a,c)}})},a}(),a("LiveSrv",f),g=new f,a("liveSrv",g)}}});