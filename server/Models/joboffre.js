const mongoose = require('mongoose');

const JobOfferSchema = new mongoose.Schema({
   
  id_societe: {
    type: String,
    required: true,
    unique: false
  },
  title: {
    type: String,
    required: true,
     
  },
  description: {
    type: String,
    required: true,
     
  },
  nb_poste: {
    type: Number,
    required: true,
   },
  nb_candidates: {
    type: Number,
    required: true,
   },
  deadline: {
    type:  String,
    required: true,
   },
  salaire: {
     
      type: Number,
      required: true,
     
} });

const JobOffer = mongoose.model('JobOffer', JobOfferSchema);

module.exports = JobOffer;