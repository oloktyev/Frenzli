Ember.TEMPLATES.categories=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h=this.escapeExpression;f={},g={},e.buffer.push(h(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e})))}),Ember.TEMPLATES["categories/category"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("category!!!")}),Ember.TEMPLATES["categories/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="container">\r\n  <h1>Root page!!</h1>\r\n</div>')}),Ember.TEMPLATES.category=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\r\n<li>\r\n  "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"product","product.id",i):n.call(a,"link-to","product","product.id",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\r\n</li>\r\n"),j}function g(a,b){var d,e,f="";return b.buffer.push("\r\n    id:"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"product.id",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("&nbsp;name:"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"product.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\r\n  "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push("this is category "),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"model.name",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("<br/>\r\nwith products:<br/>\r\n<ul>\r\n"),i={},j={},h=c.each.call(b,"product","in","model.products",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\r\n</ul>\r\n"),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),k}),Ember.TEMPLATES["components/dropdown-list"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\r\n    "),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"yield",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("\r\n"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<button type="button" \r\n    '),i={"class":b},j={"class":"STRING"},k={hash:{"class":":btn :dropdownToggle btnClassName"},contexts:[],types:[],hashContexts:i,hashTypes:j,data:e},e.buffer.push(m((g=c["bind-attr"]||b["bind-attr"],g?g.call(b,k):n.call(b,"bind-attr",k)))),e.buffer.push(">\r\n        "),j={},i={},e.buffer.push(m(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}))),e.buffer.push('\r\n        <span class="caret"></span>\r\n</button>\r\n'),j={},i={},h=c["if"].call(b,"isDropdownVisible",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),l}),Ember.TEMPLATES.home=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Новини")}function g(a,b){b.buffer.push("Блог")}function h(a,b){b.buffer.push("\r\n        ")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing,q=this.escapeExpression;return e.buffer.push("<header>\r\n    <h1>Frenzli</h1>\r\n    <nav>\r\n        "),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"home.news",m):p.call(b,"link-to","home.news",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\r\n        "),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"home.blog",m):p.call(b,"link-to","home.blog",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("\r\n    </nav>\r\n</header>\r\n<aside>\r\n    <header>Categories:</header>\r\n    <nav>\r\n        "),l={controllerBinding:b,contentBinding:b},k={controllerBinding:"STRING",contentBinding:"STRING"},j=c.view.call(b,"Frenzli.TreeView",{hash:{controllerBinding:"categoriesController",contentBinding:"categoriesController"},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\r\n    </nav>\r\n</aside>\r\n<section>\r\n    "),k={},l={},e.buffer.push(q(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push("\r\n</section>\r\n<footer>\r\n    contact us...\r\n</footer>"),n}),Ember.TEMPLATES["home/blog"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("blog")}),Ember.TEMPLATES["home/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="container">\r\n  <h1>Root page!!</h1>\r\n</div>')}),Ember.TEMPLATES["home/news"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("news")}),Ember.TEMPLATES["home/product"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("product")}),Ember.TEMPLATES["home/products"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("products")}),Ember.TEMPLATES.homeIndex=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="container">\r\n  <h1>Root page!!</h1>\r\n</div>')}),Ember.TEMPLATES.node=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\r\n    "),f={title:a,model:a,type:a,action:a},h={title:"ID",model:"ID",type:"STRING",action:"STRING"},i={hash:{title:"view.content.name",model:"view.content",type:"link",action:"routeTo"},inverse:n.noop,fn:n.program(2,g,b),contexts:[],types:[],hashContexts:f,hashTypes:h,data:b},d=c["dropdown-list"]||a["dropdown-list"],e=d?d.call(a,i):o.call(a,"dropdown-list",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\r\n"),j}function g(a,b){var d,e,f,g="";return b.buffer.push("\r\n        "),e={filterParamBinding:a},f={filterParamBinding:"STRING"},d=c.view.call(a,"Frenzli.TreeView",{hash:{filterParamBinding:"view.model.id"},inverse:n.noop,fn:n.program(3,h,b),contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\r\n    "),g}function h(a,b){b.buffer.push("\r\n        ")}function i(a,b){var d,e,f,g,h,i="";return b.buffer.push("\r\n    "),f={},g={},h={hash:{},inverse:n.noop,fn:n.program(6,j,b),contexts:[a,a],types:["STRING","ID"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"category","view.content.id",h):o.call(a,"link-to","category","view.content.id",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\r\n"),i}function j(a,b){var d,e;d={},e={},b.buffer.push(p(c._triageMustache.call(a,"view.content.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var k,l,m,n=this,o=c.helperMissing,p=this.escapeExpression;l={},m={},k=c["if"].call(b,"view.content.hasChildren",{hash:{},inverse:n.program(5,i,e),fn:n.program(1,f,e),contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e}),e.buffer.push(k||0===k?k:"")});