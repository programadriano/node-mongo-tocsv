'use strict';

const CharacterService = require('../services/characterService');
const ExportData = require('../infra/exportTocsv');

const redis = require('redis');
const client = redis.createClient();

exports.get = (req, res) => {

    client.get('allCharacters', function (err, reply) {

        if (reply) {
            console.log('redis');
            res.send(reply)
        } else {
            console.log('db');

            CharacterService.getAll()
                .then((Character) => {
                    client.set('allCharacters', JSON.stringify(Character));
                    client.expire('allCharacters', 10);
                    res.status(200).send(Character);
                }).catch(err => res.status(500).send(err))
        }
    });

};

exports.getById = (req, res) => {
    const _id = req.params.id;

    CharacterService.getById(_id)
        .then((Character) => {
            res.status(200).send(Character);
        }).catch(err => res.status(500).send(err))
};


exports.exportToCsv = (req, res) => {
    CharacterService.getAll()
        .then((characters) => {
            let filename = ExportData.tocsv(characters);
            res.download("./exports/" + filename);

        }).catch(err => res.status(500).send(err))
}


exports.post = (req, res) => {
    const vm = req.body;

    CharacterService.create(vm)
        .then((Character) => {
            res.status(200).send(Character);
        }).catch(err => res.status(500).send(err))
};
