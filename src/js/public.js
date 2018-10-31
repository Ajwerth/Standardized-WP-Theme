'use strict';

(function($) {
    $(function() {
        alert('weiners');
        const isBabel = !(class {}.toString().indexOf('class ') === 0);
        console.log(isBabel);
    });
})(jQuery);