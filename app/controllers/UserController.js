class UserController{
    index(){
        console.log(req.body)
    }

}

module.exports = new UserController();