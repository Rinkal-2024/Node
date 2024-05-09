module.exports = reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide me age !")
    }else if(req.query.age<20){
        res.send("You can not access this page!")
    }else{
        next();
    }  
}
