Frenzli.Router.map(function () {
  // Add your routes here
    this.resource('home', function() {
        this.resource('categories', {path: '/'}, function () {
            this.resource('category', { path: 'category/:category_id'}, function () {
                this.resource('products', { path: 'products/' }, function() {
                    this.route('product', { path: 'product/:product_id' });
                });
                this.route('product', { path: 'product/:product_id' });
            });
        });
        this.route('news');
        this.route('blog');
    });
});
