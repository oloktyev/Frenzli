!function(){window.Frenzli=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_TRANSITIONS_INTERNAL:!0}),Frenzli.ApplicationAdapter=DS.FixtureAdapter}(),function(){Frenzli.Category=DS.Model.extend({name:DS.attr(),parentID:DS.attr(),hasChildren:DS.attr()}),Frenzli.Category.FIXTURES=[{id:1,name:"cat1",hasChildren:!0,parentID:null},{id:2,name:"cat2",hasChildren:!1,parentID:null},{id:21,name:"cat2.1",hasChildren:!1,parentID:1},{id:22,name:"cat2.2",hasChildren:!0,parentID:1},{id:23,name:"cat2.2.1",hasChildren:!1,parentID:22}]}(),function(){Frenzli.Product=DS.Model.extend({name:DS.attr(),parentID:DS.attr(),hasChildren:DS.attr()}),Frenzli.Product.FIXTURES=[{id:1,name:"cat1",hasChildren:!0,parentID:null},{id:2,name:"cat2",hasChildren:!1,parentID:null},{id:21,name:"cat2.1",hasChildren:!1,parentID:1},{id:22,name:"cat2.2",hasChildren:!0,parentID:1},{id:23,name:"cat2.2.1",hasChildren:!1,parentID:22}]}(),function(){Frenzli.NodeView=Ember.View.extend({tagName:"li",templateName:"node",click:function(a){a.stopPropagation()}})}(),function(){Frenzli.TreeView=Ember.CollectionView.extend({tagName:"ul",itemViewClass:Frenzli.NodeView.extend({treeRoot:!0}),init:function(){this.get("controller").set("filterParam",this.filterParam||null);var a=this.get("controller").get("filtredModel");this.set("content",a),this._super()}})}(),function(){Frenzli.CategoriesController=Ember.ArrayController.extend({filterParam:null,filtredModel:function(){var a=this.filterParam;null!==a&&(a=parseInt(a,10));var b=this.get("model");return b.filterBy("parentID",a)}.property("model.@each","filterParam"),actions:{routeTo:function(a){this.get("target").transitionTo("category",a)}}})}(),function(){Frenzli.CategoryController=Ember.ObjectController.extend({})}(),function(){Frenzli.HomeController=Ember.ObjectController.extend({needs:["categories","products"],categoriesController:Ember.computed.alias("controllers.categories"),productsController:Ember.computed.alias("controllers.products")})}(),function(){Frenzli.ProductsController=Ember.ArrayController.extend({})}(),function(){Frenzli.DropdownListComponent=Ember.Component.extend({classNames:"btn-group",isDropdownVisible:!1,btnClassName:function(){return this.get("type")+"Btn"}.property("type"),mouseEnter:function(){this.set("isDropdownVisible",!0)},mouseLeave:function(){this.set("isDropdownVisible",!1)},click:function(a){a.stopPropagation(),this.sendAction("action",this.get("model").get("id"))}})}(),function(){Frenzli.CategoriesRoute=Ember.Route.extend({model:function(){var a=this.get("store"),b=a.find("category");return b}})}(),function(){Frenzli.CategoriesRoute=Ember.Route.extend({model:function(a){var b=this.store.find("category",a.category_id);return b}})}(),function(){Frenzli.HomeRoute=Ember.Route.extend({model:function(){return Ember.RSVP.hash({categories:this.store.find("category")})},setupController:function(a,b){a.set("model",b);var c=(this.get("store"),this.controllerFor("categories"));c.set("content",b.categories)}})}(),function(){Frenzli.Router.map(function(){this.resource("home",function(){this.route("products",{path:"/:product_id"}),this.resource("categories",{path:"/"},function(){this.resource("category",{path:"category/:category_id"},function(){this.resource("product",{path:"product/:product_id"})})}),this.route("news"),this.route("blog")})})}();