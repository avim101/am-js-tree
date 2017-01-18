(function () {
    'use strict';
    class AmJsTree {
        constructor($element) {
            $element.jstree(this.config);
            if (this.config.hasOwnProperty('events')) {
                angular.forEach(this.config.events, (v, k) => {
                    $element.on(k, (...arges) => {
                        if (angular.isFunction(this.config.events[k])) {
                            this.config.events[k](arges[0], arges[1]);
                        }
                    });
                });
            }

        }
    }

    angular.module('amJsTree')
        .component('amJsTree', {
            bindings: {config: '<'},
            controller: ['$element', AmJsTree],
            controllerAs: 'amJsTreeCtrl'
        });

})();
