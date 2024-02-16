const express = require("express");
const router = express.Router();
const joboffre = require("../Models/joboffre");


router.post("/addjob", async (req, res) => {
    try {
      const newjob = {
        id_societe: req.body.id_societe,
        title:req.body.title,
        description: req.body.description,
        nb_poste: req.body.nb_poste,
        nb_candidates: req.body.nb_candidates,
        deadline: req.body.deadline,
        salaire: req.body.salaire
      };
      const result = await joboffre.create(newjob);
      res.send({ msgg: " job added !", result });
    } catch (error) { 
      console.log(error);
      res.status(500).json("internal server error ", error);
    }
  });

  module.exports = router;