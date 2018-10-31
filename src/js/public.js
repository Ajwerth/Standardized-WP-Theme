'use strict';

(function($) {
    $(function() {
        alert('WEBPACK!!');
        const isBabel = !(class {}.toString().indexOf('class ') === 0);
        console.log(isBabel);
    });
})(jQuery);