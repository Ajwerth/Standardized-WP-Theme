'use strict';

(function($) {
    $(function() {
        console.log('watching');
        const isBabel = !(class {}.toString().indexOf('class ') === 0);
        console.log(isBabel);
    });
})(jQuery);