/*! grafana - v4.0.2 - 2016-12-21
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../threshold_mapper"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("ThresholdMapper",function(){b.describe("with greater than evaluator",function(){b.it("can mapp query conditions to thresholds",function(){var a={type:"graph",alert:{conditions:[{type:"query",evaluator:{type:"gt",params:[100]}}]}},d=c.ThresholdMapper.alertToGraphThresholds(a);b.expect(d).to.be(!0),b.expect(a.thresholds[0].op).to.be("gt"),b.expect(a.thresholds[0].value).to.be(100)})}),b.describe("with outside range evaluator",function(){b.it("can mapp query conditions to thresholds",function(){var a={type:"graph",alert:{conditions:[{type:"query",evaluator:{type:"outside_range",params:[100,200]}}]}},d=c.ThresholdMapper.alertToGraphThresholds(a);b.expect(d).to.be(!0),b.expect(a.thresholds[0].op).to.be("lt"),b.expect(a.thresholds[0].value).to.be(100),b.expect(a.thresholds[1].op).to.be("gt"),b.expect(a.thresholds[1].value).to.be(200)})}),b.describe("with inside range evaluator",function(){b.it("can mapp query conditions to thresholds",function(){var a={type:"graph",alert:{conditions:[{type:"query",evaluator:{type:"within_range",params:[100,200]}}]}},d=c.ThresholdMapper.alertToGraphThresholds(a);b.expect(d).to.be(!0),b.expect(a.thresholds[0].op).to.be("gt"),b.expect(a.thresholds[0].value).to.be(100),b.expect(a.thresholds[1].op).to.be("lt"),b.expect(a.thresholds[1].value).to.be(200)})})})}}});