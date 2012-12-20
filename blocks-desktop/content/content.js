BEM.DOM.decl('content',
{
    onSetMod: {
        'js': function() {
            var box = this.findBlockOutside('b-page').findBlockInside({ block: 'box', modName: 'type', modVal: 'photo' });
            this.bindTo(this.elem('preview'), 'click', function() {
                box.show();
            });
        }
    }
});