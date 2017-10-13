'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var AmJsTree = function AmJsTree($element) {
        var _this = this;

        _classCallCheck(this, AmJsTree);

        this.config = this.config || {};
        $element.jstree(this.config);
        if (this.config.hasOwnProperty('events')) {
            angular.forEach(this.config.events, function (v, k) {
                $element.on(k, function () {
                    if (angular.isFunction(_this.config.events[k])) {
                        _this.config.events[k](arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
                    }
                });
            });
        }

        this.$onDestroy = function () {
            $element.jstree('destroy');
        };
    };

    angular.module('amJsTree', []).component('amJsTree', {
        bindings: { config: '<' },
        controller: ['$element', AmJsTree],
        controllerAs: 'amJsTreeCtrl'
    });
})();