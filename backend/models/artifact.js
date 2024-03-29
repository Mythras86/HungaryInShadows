const mongoose = require("mongoose");

const artifactSchema = mongoose.Schema({
  nev: {type: String},
  csoport: {type: String},
  maxSzint: {type: Number},
  szint: {type: Number},
  ar: {type: Number},
  karma: {type: Number},
  elhelyezes:{type: String, required: false},
  megjegyzes: {type: String},
});

module.exports = mongoose.model("Artifact", artifactSchema);
