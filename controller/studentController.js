
const studSchema = require("../model/schema")

module.exports.adding = async (req,res) => {
    try {
      const respons = await studSchema.create(req.body);
   
      res.status(200).json({status:true, respons,msg:"added sucesfully"})
    
    } catch (error) {
      res.status(500).json({status:false,msg:"internal server error"})
    }
  }
module.exports.geting = async (req,res) => {
    res.send("all good")
}