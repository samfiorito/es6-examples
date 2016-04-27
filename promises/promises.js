
module.exports = function(app,request) {
  app.get('/promises/story/:name', function (req, res) {  
  	request('http://www.html5rocks.com/en/tutorials/es6/promises/'+req.params.name, function (error, response, body) 
  	{
    		if (!error && response.statusCode == 200) {
      		//res.json(JSON.parse(body));
      		res.send(body);
    		}
    		else
    		{
    			console.log('404 for url /story/' + req.params.name);
    			res.send(404,'404 for url /story/' + req.params.name);
    		}
  	})
  });
};