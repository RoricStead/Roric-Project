'use strict';

angular.module('demo').provider('timeFunctions', function timeFunctionsProvider(){
    var format = 'h:mm:ss a';
        
    this.setFormat = function(timeFormat) {
        format = timeFormat;
    };

    this.$get = function timeFunctionsFactory () {
        return {
            getFormat: function() {
                return format;
            }
        }
    }

});