// Require all modules
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

// initializing our app
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// index Route
app.get('/', (req, res) => {
    res.render('index');
});

// port creation for heroku deployment
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
