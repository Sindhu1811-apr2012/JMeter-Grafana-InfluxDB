/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/core/table_model"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("when sorting table desc",function(){var a,b={sort:{col:0,desc:!0}};c.beforeEach(function(){a=new d.default,a.columns=[{},{}],a.rows=[[100,12],[105,10],[103,11]],a.sort(b.sort)}),c.it("should sort by time",function(){c.expect(a.rows[0][0]).to.be(105),c.expect(a.rows[1][0]).to.be(103),c.expect(a.rows[2][0]).to.be(100)}),c.it("should mark column being sorted",function(){c.expect(a.columns[0].sort).to.be(!0),c.expect(a.columns[0].desc).to.be(!0)})}),c.describe("when sorting table asc",function(){var a,b={sort:{col:1,desc:!1}};c.beforeEach(function(){a=new d.default,a.columns=[{},{}],a.rows=[[100,11],[105,15],[103,10]],a.sort(b.sort)}),c.it("should sort by time",function(){c.expect(a.rows[0][1]).to.be(10),c.expect(a.rows[1][1]).to.be(11),c.expect(a.rows[2][1]).to.be(15)})})}}});