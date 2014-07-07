function assertEmoji(test, rootEl, emojiTitles) {
    var emojis = rootEl.querySelectorAll('.emoji');
    test.assertEqual(emojiTitles.length, emojis.length);
    for(var i = 0; i < emojis.length; i++) {
        test.assertEqual(emojiTitles[i], emojis[i].title);
    }
}

JS.Test.describe('emojify on DOM nodes', function() {
    'use strict';

    this.before(function() {
        this.el = document.createElement("DIV");
    });

    this.describe('with multiple emoji beside each other', function() {
        this.it('works with multiple :emoji: style', function() {
            this.el.innerHTML = ":railway_car::railway_car:";
            emojify.run(this.el);
            assertEmoji(this, this.el, [':railway_car:',':railway_car:']);
        });
    });

    this.describe('ignore cases', function() {

        this.it('dont emojify inside pre tags', function() {
            var result;
            this.el.innerHTML = "<pre>:railway_car:</pre>";
            result = emojify.run(this.el);
            assertEmoji(this, this.el, []);
        });

        this.it('dont emojify inside code tags', function() {
            var result;
            this.el.innerHTML = "<code>:railway_car:</code>";
            result = emojify.run(this.el);
            assertEmoji(this, this.el, []);
        });
    });
});
