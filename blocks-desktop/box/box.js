BEM.DOM.decl('box', {
    onSetMod: {
        'js': function() {
            this.bindTo(this.elem('close'), 'click', this.hide);
        }
    },
    'show': function() {
        this.setMod('visiblity', 'visible');
    },
    'hide': function() {
        this.delMod('visiblity');
    }
});