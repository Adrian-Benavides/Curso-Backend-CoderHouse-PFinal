const isUser = (req,res,next) => {
    
    if (req.session.role ==  'user' || req.session.role ==  'premium' ) {
        next();
    }
    res.status(401).send();
}

export default isUser;