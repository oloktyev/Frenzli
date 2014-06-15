Frenzli.Router.map(function () {
  // Add your routes here
    this.resource('home', function() {
        this.route('products', { path:'/:product_id' });
        this.resource('categories', {path: '/'}, function () {
            this.resource('category', { path: 'category/:category_id'}, function () {
                this.resource('product', { path: 'product/:product_id' });
            });
        });
        this.route('news');
        this.route('blog');
    });
});
