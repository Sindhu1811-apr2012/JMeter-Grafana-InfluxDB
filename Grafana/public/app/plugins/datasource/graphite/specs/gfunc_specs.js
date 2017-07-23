/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../gfunc"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("when creating func instance from func names",function(){c.it("should return func instance",function(){var a=d.default.createFuncInstance("sumSeries");c.expect(a).to.be.ok(),c.expect(a.def.name).to.equal("sumSeries"),c.expect(a.def.params.length).to.equal(5),c.expect(a.def.defaultParams.length).to.equal(1)}),c.it("should return func instance with shortName",function(){var a=d.default.createFuncInstance("sum");c.expect(a).to.be.ok()}),c.it("should return func instance from funcDef",function(){var a=d.default.createFuncInstance("sum"),b=d.default.createFuncInstance(a.def);c.expect(b).to.be.ok()}),c.it("func instance should have text representation",function(){var a=d.default.createFuncInstance("groupByNode");a.params[0]=5,a.params[1]="avg",a.updateText(),c.expect(a.text).to.equal("groupByNode(5, avg)")})}),c.describe("when rendering func instance",function(){c.it("should handle single metric param",function(){var a=d.default.createFuncInstance("sumSeries");c.expect(a.render("hello.metric")).to.equal("sumSeries(hello.metric)")}),c.it("should include default params if options enable it",function(){var a=d.default.createFuncInstance("scaleToSeconds",{withDefaultParams:!0});c.expect(a.render("hello")).to.equal("scaleToSeconds(hello, 1)")}),c.it("should handle int or interval params with number",function(){var a=d.default.createFuncInstance("movingMedian");a.params[0]="5",c.expect(a.render("hello")).to.equal("movingMedian(hello, 5)")}),c.it("should handle int or interval params with interval string",function(){var a=d.default.createFuncInstance("movingMedian");a.params[0]="5min",c.expect(a.render("hello")).to.equal("movingMedian(hello, '5min')")}),c.it("should handle metric param and int param and string param",function(){var a=d.default.createFuncInstance("groupByNode");a.params[0]=5,a.params[1]="avg",c.expect(a.render("hello.metric")).to.equal("groupByNode(hello.metric, 5, 'avg')")}),c.it("should handle function with no metric param",function(){var a=d.default.createFuncInstance("randomWalk");a.params[0]="test",c.expect(a.render(void 0)).to.equal("randomWalk('test')")}),c.it("should handle function multiple series params",function(){var a=d.default.createFuncInstance("asPercent");a.params[0]="#B",c.expect(a.render("#A")).to.equal("asPercent(#A, #B)")})}),c.describe("when requesting function categories",function(){c.it("should return function categories",function(){var a=d.default.getCategories();c.expect(a.Special.length).to.be.greaterThan(8)})}),c.describe("when updating func param",function(){c.it("should update param value and update text representation",function(){var a=d.default.createFuncInstance("summarize",{withDefaultParams:!0});a.updateParam("1h",0),c.expect(a.params[0]).to.be("1h"),c.expect(a.text).to.be("summarize(1h, sum, false)")}),c.it("should parse numbers as float",function(){var a=d.default.createFuncInstance("scale");a.updateParam("0.001",0),c.expect(a.params[0]).to.be("0.001")})}),c.describe("when updating func param with optional second parameter",function(){c.it("should update value and text",function(){var a=d.default.createFuncInstance("aliasByNode");a.updateParam("1",0),c.expect(a.params[0]).to.be("1")}),c.it("should slit text and put value in second param",function(){var a=d.default.createFuncInstance("aliasByNode");a.updateParam("4,-5",0),c.expect(a.params[0]).to.be("4"),c.expect(a.params[1]).to.be("-5"),c.expect(a.text).to.be("aliasByNode(4, -5)")}),c.it("should remove second param when empty string is set",function(){var a=d.default.createFuncInstance("aliasByNode");a.updateParam("4,-5",0),a.updateParam("",1),c.expect(a.params[0]).to.be("4"),c.expect(a.params[1]).to.be(void 0),c.expect(a.text).to.be("aliasByNode(4)")})})}}});