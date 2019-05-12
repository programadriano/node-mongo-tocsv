const app = require('./startUp');

const port = process.env.PORT || '3000';

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})