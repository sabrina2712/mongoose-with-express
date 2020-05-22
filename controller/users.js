const Users = require("../model/users");


exports.allUsers = async (req, res) => {
    const users = await Users.find();
    res.json({ data: users });
    console.log(users)
}

exports.addUser = async (req, res) => {
    const user = new Users(req.body);
    const savedUser = await user.save();

    console.log(savedUser)
    res.json({ data: savedUser });
}

exports.deleteUser = async (req, res) => {
    const _id = req.params.id;
    const deletedUser = await Users.deleteOne({ _id })
    res.json({
        data: {
            success: true,
            raw: deletedUser
        }
    })
}

exports.updateUser = async (req, res, err) => {
    const _id = req.params.id;
    const updatedUser = await Users.where({_id}).update(req.body);
    res.send({data: 
        "User updated"
    });
    if(err){
        res.send(err)
    }
    console.log(updatedUser)
}