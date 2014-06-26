Frenzli.ProductView = Ember.View.extend({
    classNames: ['product'],
    didInsertElement: function() {
        $(this.get('element').getElementsByTagName('img')).elevateZoom({
                                                                zoomWindowWidth:200,
                                                                zoomWindowHeight:200
                                                            });
    }
});