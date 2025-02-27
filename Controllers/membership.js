const Membership = require('../Modals/membership');



exports.addMembership = async (req,res)=>{
    try{
        const {months, price} = req.body;
        const memberShip = await Membership.findOne({gym:req.gym._id,months});
        if(memberShip){
            // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
        }else{
            const nuwMembership = new Membership({price,months,gym:req.gym._id});
            // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            error:"Server Error"
        })
    }
}


exports.getmembership=async(req,res)=>{
    try{
        const loggedInId = req.gym._id;
        // .       
            // .
            // Please Watch the youtube video for full code 
            // .
            // .
            // .

    }catch(err){
        console.log(err);
        res.status(500).json({
            error:"Server Error"
        })
    }
}