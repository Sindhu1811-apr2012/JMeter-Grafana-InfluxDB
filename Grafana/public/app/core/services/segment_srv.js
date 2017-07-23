/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","../core_module"],function(a,b,c){"use strict";c.default.service("uiSegmentSrv",["$sce","templateSrv",function(a,c){function d(d){return"*"===d||"*"===d.value?(this.value="*",this.html=a.trustAsHtml('<i class="fa fa-asterisk"><i>'),this.type=d.type,void(this.expandable=!0)):b.isString(d)?(this.value=d,void(this.html=a.trustAsHtml(c.highlightVariablesAsHtml(this.value)))):(this.text=d.value,this.cssClass=d.cssClass,this.custom=d.custom,this.type=d.type,this.fake=d.fake,this.value=d.value,this.selectMode=d.selectMode,this.type=d.type,this.expandable=d.expandable,void(this.html=d.html||a.trustAsHtml(c.highlightVariablesAsHtml(this.value))))}var e=this;this.getSegmentForValue=function(a,b){return a?this.newSegment(a):this.newSegment({value:b,fake:!0})},this.newSelectMeasurement=function(){return new d({value:"select measurement",fake:!0})},this.newFake=function(a,b,c){return new d({value:a,fake:!0,type:b,cssClass:c})},this.newSegment=function(a){return new d(a)},this.newKey=function(a){return new d({value:a,type:"key",cssClass:"query-segment-key"})},this.newKeyValue=function(a){return new d({value:a,type:"value",cssClass:"query-segment-value"})},this.newCondition=function(a){return new d({value:a,type:"condition",cssClass:"query-keyword"})},this.newOperator=function(a){return new d({value:a,type:"operator",cssClass:"query-segment-operator"})},this.newOperators=function(a){return b.map(a,function(a){return new d({value:a,type:"operator",cssClass:"query-segment-operator"})})},this.transformToSegments=function(a,d){return function(f){var g=b.map(f,function(a){return e.newSegment({value:a.text,expandable:a.expandable})});return a&&b.each(c.variables,function(a){void 0!==d&&d!==a.type||g.unshift(e.newSegment({type:"template",value:"$"+a.name,expandable:!0}))}),g}},this.newSelectMetric=function(){return new d({value:"select metric",fake:!0})},this.newPlusButton=function(){return new d({fake:!0,html:'<i class="fa fa-plus "></i>',type:"plus-button"})},this.newSelectTagValue=function(){return new d({value:"select tag value",fake:!0})}}])});