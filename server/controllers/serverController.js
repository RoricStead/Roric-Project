'use strict';

module.exports = {
    index: function(request, response) {
        response.render('index',  {title: 'demo'});
    }
}
