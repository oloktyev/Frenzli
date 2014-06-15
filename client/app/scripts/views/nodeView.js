Frenzli.NodeView = Ember.View.extend({
    tagName: "li",
    templateName: 'node',
    //prevent propagation of click events to parent nodes
    click: function(event) {
        event.stopPropagation();
    }
});