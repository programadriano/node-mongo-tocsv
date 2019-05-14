const json2csv = require('json2csv').parse;
const fs = require('fs');
var uuid = require('uuid');

const fields = ['_id', 'name', 'thumb',];
const opts = { fields };


module.exports.tocsv = function (characters) {
    try {

        const csv = json2csv(characters, opts);
        const filename = uuid.v4() + ".csv"
        fs.writeFile('./exports/' + filename, csv, function (err) {
            if (err) throw err;
            console.log('file saved');
        });

        return filename;

    } catch (err) {
        console.error(err);
    }
}

