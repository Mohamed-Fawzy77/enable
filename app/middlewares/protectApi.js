

 const jwt = require('jsonwebtoken');
 const User = require('../modules/user/user.model');
 const ms = 1000;

 
 module.exports = async (req, res, next) => {
     
     let token =
         req.body.token ||
         req.headers.token ||
         req.headers.Authorization ||
         req.headers.authorization;
 
     if (!token) {
 
         return res.status(400).json({
             status: false,
             statusCode:400,
             message: 'No token provided.'
         });
     }
 
     if (token.startsWith('Bearer')) {
         [, token] = token.split(' ');
     }
 
     let decoded = null;
 
     try {
         decoded = jwt.verify(token, process.env.SECRET);
     } catch (error) {
 
         return res.status(401).send({
             status: false,
             message: 'Failed to authenticate token.'
         });
     }
 
     let user = null;
     try {
         user = await User.findOne({
             _id: decoded.user._id,
             removed: false
         }).orFail();
     } catch (error) {
 
         return res.json({
             status: false,
             message: 'Failed to authenticate token.'
         });
     }

     //if everything is good, save to request for use in other routes
     req.decoded = decoded;
     req.user = user;
 
     return next();
 };
 