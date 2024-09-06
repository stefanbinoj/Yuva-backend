const asynchandler = require('express-async-handler');

const getContacts=asynchandler(async(req,res)=>{
    res.json({
        "emergencyContacts": [
          {
            "name": "Disaster Management",
            "contactNumber": "100"
          },
          {
            "name": "Rescue Team",
            "contactNumber": "8875696257r"
          },
          {
            "name": "Ambulance",
            "contactNumber": "102"
          },
          
        ]
      })
})
module.exports={getContacts}