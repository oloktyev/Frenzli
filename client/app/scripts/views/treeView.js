Frenzli.TreeView = Ember.CollectionView.extend({
    tagName: "ul",
    itemViewClass: Frenzli.NodeView.extend({
        treeRoot: true
    }),
    init: function() {
        //set filtered model by parentId
        this.get('controller').set('filterParam', this.filterParam || null);
        var filteredModel = this.get('controller').get('filtredModel');
        this.set('content', filteredModel);
        this._super();
    }
});