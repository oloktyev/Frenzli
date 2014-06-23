!function(){window.Frenzli=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_TRANSITIONS_INTERNAL:!0}),Frenzli.ApplicationAdapter=DS.FixtureAdapter}(),function(){Frenzli.Category=DS.Model.extend({name:DS.attr(),parentID:DS.attr(),hasChildren:DS.attr()}),Frenzli.Category.FIXTURES=[{id:1,name:"Тільда",hasChildren:!0,parentID:null},{id:2,name:"Скрапбукінг",hasChildren:!1,parentID:null},{id:21,name:"Печворк",hasChildren:!1,parentID:1},{id:22,name:"Декупаж",hasChildren:!0,parentID:1},{id:23,name:"Полімерна глина",hasChildren:!1,parentID:22}]}(),function(){Frenzli.Product=DS.Model.extend({name:DS.attr(),parentID:DS.attr(),hasChildren:DS.attr()}),Frenzli.Product.FIXTURES=[{id:1,name:"product1",categoryID:1},{id:2,name:"product2",categoryID:1},{id:3,name:"product3",categoryID:1},{id:4,name:"product1",categoryID:23},{id:5,name:"product2",categoryID:23},{id:6,name:"product3",categoryID:23}]}(),function(){Frenzli.HomeView=Ember.View.extend({tagName:"section",classNames:["home","page"]})}(),function(){Frenzli.NodeView=Ember.View.extend({tagName:"li",templateName:"node",click:function(a){a.stopPropagation()}})}(),function(){Frenzli.TreeView=Ember.CollectionView.extend({tagName:"ul",itemViewClass:Frenzli.NodeView.extend({treeRoot:!0}),init:function(){this.get("controller").set("filterParam",this.filterParam||null);var a=this.get("controller").get("filtredModel");this.set("content",a),this._super()}})}(),function(){Frenzli.BreadcrumbsController=Ember.Controller.extend({needs:["application"],breadContent:function(){var a=Frenzli.get("Router.router.currentHandlerInfos"),b=a;b=b.slice(1,b.length-1);var c=$.map(b,function(a){var b,c;if(a.isDynamic&&a.context)c=a.context.get("id"),b=a.context;else{var d=a.name.lastIndexOf(".")+1;c=Ember.String.capitalize(a.name.slice(d))}return{name:c,routePath:a.name,context:b}});return c}.property("controllers.application.currentPath"),gotoRoute:function(a){a.context?this.transitionToRoute(a.routePath,a.context):this.transitionToRoute(a.routePath)}})}(),function(){Frenzli.CategoriesController=Ember.ArrayController.extend({filterParam:null,filtredModel:function(){var a=this.filterParam;null!==a&&(a=parseInt(a,10));var b=this.get("model");return b.filterBy("parentID",a)}.property("model.@each","filterParam"),actions:{routeTo:function(a){this.get("target").transitionTo("category",a)}}})}(),function(){Frenzli.CategoryController=Ember.ObjectController.extend({})}(),function(){Frenzli.HomeController=Ember.ObjectController.extend({needs:["categories","products"],categoriesController:Ember.computed.alias("controllers.categories"),productsController:Ember.computed.alias("controllers.products")})}(),function(){Frenzli.ProductsController=Ember.ArrayController.extend({categoryID:null,filteredByCategory:function(){var a=this.categoryID;null!==a&&(a=parseInt(a,10));var b=this.get("model");return b.filterBy("categoryID",a)}.property("model.@each","categoryID")})}(),function(){Frenzli.DropdownListComponent=Ember.Component.extend({classNames:"btn-group",isDropdownVisible:!1,btnClassName:function(){return this.get("type")+"Btn"}.property("type"),mouseEnter:function(){this.set("isDropdownVisible",!0)},mouseLeave:function(){this.set("isDropdownVisible",!1)},click:function(a){a.stopPropagation(),this.sendAction("action",this.get("model").get("id"))}})}(),function(){Frenzli.CategoriesRoute=Ember.Route.extend({model:function(){var a=this.get("store"),b=a.find("category");return b}})}(),function(){Frenzli.CategoryRoute=Ember.Route.extend({model:function(a){var b=this.store.find("category",a.category_id);return b},afterModel:function(a){a.get("hasChildren")||this.transitionTo("products")},setupController:function(a,b){a.set("model",b);var c=this.modelFor("categories"),d=(b.get("id"),c.filter(function(a){return a.get("parentID")===parseInt(b.get("id"),10)}));a.set("subcategories",d)}})}(),function(){Frenzli.HomeRoute=Ember.Route.extend({model:function(){return Ember.RSVP.hash({categories:this.store.find("category")})},setupController:function(a,b){a.set("model",b);var c=(this.get("store"),this.controllerFor("categories"));c.set("content",b.categories)}})}(),function(){Frenzli.ProductsRoute=Ember.Route.extend({model:function(){var a=this.get("store"),b=a.find("product");return b}})}(),function(){Frenzli.Router.map(function(){this.resource("home",function(){this.resource("categories",{path:"/"},function(){this.resource("category",{path:"category/:category_id"},function(){this.resource("products",{path:"products/"},function(){this.route("product",{path:"product/:product_id"})}),this.route("product",{path:"product/:product_id"})})}),this.route("news"),this.route("blog")})})}();