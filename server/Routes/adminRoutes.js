const express = require("express");
const router = express.Router();
const User = require("../Models/users");


router.get("/getsociete/",async (req,res)=>{
    try{ 
         
        const result =await User.find({ typeuser: 'societe'  });
        res.send({result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})

router.get("/getempolye/",async (req,res)=>{
    try{ 
         
        const result =await User.find({ typeuser: 'candidat'  });
        res.send({result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})


router.put("/updatesociete/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await User.findOneAndUpdate({_id : id},{$set:req.body},{new:true});
        res.send({msg:" Societe updeted !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})

router.put("/updateempolye/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await User.findOneAndUpdate({_id : id},{$set:req.body},{new:true});
        res.send({msg:" empolye updeted !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})
router.delete("/deleteuser/:id",async (req,res)=>{
    try{
        const id =req.params.id;
        const result =await User.findByIdAndDelete({_id : id});
        res.send({msg:" user deleted !", result });
    }catch (error) {
        console.log(error);
        res.status(500).json("internal server error ", error);
      }
})



module.exports = router;