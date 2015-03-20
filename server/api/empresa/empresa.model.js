'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmpresaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  fantasy: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
