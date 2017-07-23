/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","test/specs/helpers","../datasource"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("opentsdb",function(){var a=new d.default.ServiceTestContext,b={url:"",jsonData:{tsdbVersion:1}};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(a.providePhase(["backendSrv"])),c.beforeEach(c.angularMocks.inject(function(c,d,f,g){a.$q=c,a.$httpBackend=f,a.$rootScope=d,a.ds=g.instantiate(e.OpenTsDatasource,{instanceSettings:b}),f.when("GET",/\.html$/).respond("")})),c.describe("When performing metricFindQuery",function(){var b,d;c.beforeEach(function(){a.backendSrv.datasourceRequest=function(b){return d=b,a.$q.when({data:[{target:"prod1.count",datapoints:[[10,1],[12,1]]}]})}}),c.it("metrics() should generate api suggest query",function(){a.ds.metricFindQuery("metrics(pew)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/suggest"),c.expect(d.params.type).to.be("metrics"),c.expect(d.params.q).to.be("pew")}),c.it("tag_names(cpu) should generate lookup query",function(){a.ds.metricFindQuery("tag_names(cpu)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/search/lookup"),c.expect(d.params.m).to.be("cpu")}),c.it("tag_values(cpu, test) should generate lookup query",function(){a.ds.metricFindQuery("tag_values(cpu, hostname)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/search/lookup"),c.expect(d.params.m).to.be("cpu{hostname=*}")}),c.it("tag_values(cpu, test) should generate lookup query",function(){a.ds.metricFindQuery("tag_values(cpu, hostname, env=$env)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/search/lookup"),c.expect(d.params.m).to.be("cpu{hostname=*,env=$env}")}),c.it("tag_values(cpu, test) should generate lookup query",function(){a.ds.metricFindQuery("tag_values(cpu, hostname, env=$env, region=$region)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/search/lookup"),c.expect(d.params.m).to.be("cpu{hostname=*,env=$env,region=$region}")}),c.it("suggest_tagk() should generate api suggest query",function(){a.ds.metricFindQuery("suggest_tagk(foo)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/suggest"),c.expect(d.params.type).to.be("tagk"),c.expect(d.params.q).to.be("foo")}),c.it("suggest_tagv() should generate api suggest query",function(){a.ds.metricFindQuery("suggest_tagv(bar)").then(function(a){b=a}),a.$rootScope.$apply(),c.expect(d.url).to.be("/api/suggest"),c.expect(d.params.type).to.be("tagv"),c.expect(d.params.q).to.be("bar")})})})}}});