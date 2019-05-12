var mongoose = require('mongoose');
const CharacterSchema = require('../models/character');

const Character = mongoose.model('characters', CharacterSchema);
module.exports = Character;