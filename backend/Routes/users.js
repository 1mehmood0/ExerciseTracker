const router=require('express').Router();
let User=require('../models/user.model');

//First Route first in point
router.route('/').get((req,res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post(async (req,res)=>{
    const username=req.body.username;
    const newUser=new User({username});
    try{
        await newUser.save();
        res.status(200).send({'message': 'User added'});
    }catch(e){
        res.status(400).json('Error: '+err)
    }

        // .catch(err => );

});
module.exports=router;
