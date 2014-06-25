Frenzli.Router.map(function () {
  // Add your routes here
    this.resource('home', function() {
        this.resource('categories', {path: 'categories/'}, function () {
            this.resource('category', { path: ':category_id'}, function () {
                this.resource('products', { path: 'products/' }, function() {
                    this.route('product', { path: ':product_id' });
                });
                this.route('product', { path: 'product/:product_id' });
            });
        });
        this.route('news');
        this.route('blog');
    });
});

Frenzli.routeToBeadcrumbMap = {
    home: 'home',
    categories: null,
    category: function(route) {
        var categories = [];
        var parentID = route.context.get('parentId');
        //get parent categories if any exist
        if (parentID !== null) {
            var parentCategories = getParentCategory(route.context, parentID);
            categories = categories.concat(parentCategories);
        }
        //add current category name
        categories.push(route.context.get('name'));
        return categories;
    },
    products: null,
    product: function(route) {
        return route.context.get("name");
    }
}
function getParentCategory(context, parentID) {
    var parentCategories = [];
    if (parentID !== null && parentID !== undefined) {
        var categories = context.get('categories');
        var parentCategory = categories.filter(function(item, index, self) {
            return parseInt(item.get('id'), 10) === parseInt(parentID, 10);
        });
        
        parentCategories.push(parentCategory[0].get('name'));
        return getParentCategory(context, parentCategory[0].get('parentId')).concat(parentCategories);
    }
    return parentCategories;
}
