const express = require ('express');
const expressVue = require ('express-vue');
const app = express();
const bodyParser = require ("body-parser");
const path = require ('path');
const async = require ('async');
const elas = require ("./elastic/index");

const collection = require ('./app/models/collection');

app.use ('/public', express.static ('public'))


app.engine ('vue', expressVue);
app.set ('view engine', 'vue');
app.set ('views', path.join (__dirname, '/views'));
app.set ('vue', {
	componentsDir: path.join (__dirname, 'views', 'components'),
	defaultLayout : 'layout'
});

// parse application/x-www-form-urlencoded
app.use (bodyParser.urlencoded ({
	extended: true
}));

// parse application/json
app.use (bodyParser.json());

app.get ('/', (req, res) => {
    collection.getAll()
    .then ( data => {
        res.render('index.vue', {
					data : {
						collection : data
					},
					vue : {
						head : {
							title : 'Color Pro',
							meta : []
						},
						components : ['collection']
					}
				});
    });
});



app.listen(3000, () => {
	console.log('Express server listening on port 3000');
});