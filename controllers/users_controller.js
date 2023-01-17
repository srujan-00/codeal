const { default: mongoose } = require('mongoose');
const User = require('../models/user');

module.exports.profile = function (req, res) {
    return res.render('user_profile');
}
module.exports.posts = function (req, res) {
    return res.end('<h1>user has these posts!</h1>')

}
//render signup page
module.exports.signUp = function(req, res){
    return res.render('sign_up');
}
//create user
module.exports.create = function(req, res){
    if(req.body.password!==req.body.retypePassword){
        console.log(`You've entered two different passwords`);
        return res.render('sign_up');
    }
   
    User.findOne({email:req.body.email},function(err,data){
        if(err){
            console.log(`An error ${err} has occured while trying to find the user data by email`);
            return;
        }
        if(!data){
            User.create(req.body,function(err,data){
                if(err){
                    console.log(`Some error ${err} occured while trying to add userdata to the user collection`);
                    return;
                }
                console.log('**',data);
            
            }); 
            return res.redirect('/users/sign_in');
        }
        else{
            return res.redirect('back');
        }
    })
   
}
//render sign in page
module.exports.signIn = function(req, res){
    return res.render('sign_in');
}
module.exports.createSession = function(req, res){
    User.find({email:req.body.email, password:req.body.password},function(err,docs){
        if(err){
            console.log(`Error ${err} occured while trying to find the document`);
            return;
        }
        if(docs.length!==0)
       { 
        console.log(docs);
        return;
    }
        console.log('incorrect name or password\n please enter the correct details');
        return;
    });
    }