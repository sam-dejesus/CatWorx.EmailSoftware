const db = require('../config/connection')
const User = require('../models/User')
const UserSeed = require('./userSeed.json')

db.once('open', async () =>{
    try{
    await User.deleteMany({})
    await User.create(UserSeed) 
    console.log("User Seeded all done")
    
    }catch(err){
        throw err;
    }
})