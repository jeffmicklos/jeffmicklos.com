const express = require('express');
const app = express();

function wwwRedirect(req, res, next) {
  console.log(req.headers.host, req.originalUrl);
  if (req.headers.host.search(/^www/) === -1) {
    return res.redirect(
      301,
      req.protocol + '://www.' + req.headers.host + req.originalUrl,
    );
  }
  next();
}

app.set('trust proxy', true);
app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

app.use(wwwRedirect);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
