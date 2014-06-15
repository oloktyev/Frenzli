Frenzli.DropdownListComponent = Ember.Component.extend({
    classNames: 'btn-group',
    isDropdownVisible: false,

    btnClassName: function(){
        return this.get('type') + 'Btn';
    }.property('type'),

    //actions
    mouseEnter: function(){
      this.set('isDropdownVisible', true);
    },
    mouseLeave: function(){
      this.set('isDropdownVisible',false);
    },
    click: function(event) {
        event.stopPropagation();
        this.sendAction('action', this.get('model').get('id'));
    }
});