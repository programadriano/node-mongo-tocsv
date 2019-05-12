'use strict';
const config = require('../config/db');

const Character = require('../repositories/characterRepository');

module.exports = new class CharacterRepository {

    getAll() {
        console.log("here");
        return Character.find();
    }

    getById(id) {
        return Character.findById(id);
    }

    create(Character) {
        return Character.create(Character);
    }
}

