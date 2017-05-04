/**
 * HousesController
 *
 * @description :: Server-side logic for managing houses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    getHousingData : function(req, res) {
        var http = require('http'), options = {
            host : "archive.ics.uci.edu",
            port : 80,
            path : "/ml/machine-learning-databases/housing/housing.data",
            method : 'GET'
        };

        var webservice_data = "";

        var webservice_request = http.get(options, function(webservice_response)
        {
            console.log('started');
            webservice_response.on('error', function(e){ console.log(e.message); });
            console.log('coucou');
            webservice_response.on('data', function(chunk){ 
                console.log(chunk);
                res.send(formatResponse(chunk));
            });
        });


        function formatResponse(chunk) {
            return chunk;
        }
    }

};

