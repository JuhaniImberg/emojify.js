JS.Test.describe('emojify used with flat strings', function() {
    'use strict';

    this.describe('with multiple emoji beside each other', function() {
        this.it('works with multiple :emoji: style', function() {
            var text = ":railway_car::railway_car:";
            var result = emojify.replace(text);
            this.assertEqual('<img title=\':railway_car:\' alt=\':railway_car:\' class=\'emoji\' src=\'images/emoji/railway_car.png\' align=\'absmiddle\' /><img title=\':railway_car:\' alt=\':railway_car:\' class=\'emoji\' src=\'images/emoji/railway_car.png\' align=\'absmiddle\' />', result);
        });
    });

    this.describe('isolated cases', function() {
        this.it(':neckbeard:', function() {
            var text = ":neckbeard:";
            var result = emojify.replace(text);
            this.assertEqual('<img title=\':neckbeard:\' alt=\':neckbeard:\' class=\'emoji\' src=\'images/emoji/neckbeard.png\' align=\'absmiddle\' />', result);
        });
    });
});
