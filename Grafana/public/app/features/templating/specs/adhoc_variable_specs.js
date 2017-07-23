/*! grafana - v4.4.1 - 2017-07-05
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../adhoc_variable"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("AdhocVariable",function(){c.describe("when serializing to url",function(){c.it("should set return key value and op seperated by pipe",function(){var a=new d.AdhocVariable({filters:[{key:"key1",operator:"=",value:"value1"},{key:"key2",operator:"!=",value:"value2"},{key:"key3",operator:"=",value:"value3a|value3b"}]}),b=a.getValueForUrl();c.expect(b).to.eql(["key1|=|value1","key2|!=|value2","key3|=|value3a__gfp__value3b"])})}),c.describe("when deserializing from url",function(){c.it("should restore filters",function(){var a=new d.AdhocVariable({});a.setValueFromUrl(["key1|=|value1","key2|!=|value2","key3|=|value3a__gfp__value3b"]),c.expect(a.filters[0].key).to.be("key1"),c.expect(a.filters[0].operator).to.be("="),c.expect(a.filters[0].value).to.be("value1"),c.expect(a.filters[1].key).to.be("key2"),c.expect(a.filters[1].operator).to.be("!="),c.expect(a.filters[1].value).to.be("value2"),c.expect(a.filters[2].key).to.be("key3"),c.expect(a.filters[2].operator).to.be("="),c.expect(a.filters[2].value).to.be("value3a|value3b")})})})}}});