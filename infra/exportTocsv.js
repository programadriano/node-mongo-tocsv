const json2csv = require('json2csv').parse;

const fields = ['_id', 'name', 'thumb',];
const opts = { fields };


module.exports = new function tocsv(myData) {
    try {
        
        const csv = json2csv(myData, opts);
        console.log(csv);
    } catch (err) {
        console.error(err);
    }
}

