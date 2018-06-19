modules.define('hello', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
       'js': {
            'inited': function() {
              this._domEvents().on('click', () => alert('Hello'));
            }
        }
    }
}));

});
