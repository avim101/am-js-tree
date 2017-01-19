(function () {
    'use strict';
    class AmJsTree {
        constructor($element) {
            this.config = this.config || {};
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

            this.$onDestroy = () => {
                $element.jstree('destroy');
            };
        }
    }

    angular.module('amJsTree',[])
        .component('amJsTree', {
            bindings: {config: '<'},
            controller: ['$element', AmJsTree],
            controllerAs: 'amJsTreeCtrl'
        });

})();
